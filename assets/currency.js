// Surgronic local pricing: IP-based currency detection + daily FX conversion.
// Country via ipapi.co (true IP, CORS-enabled) with the device timezone as an
// instant synchronous fallback. Rates from assets/rates.json (daily cron).
// NOTE: https://www.cloudflare.com/cdn-cgi/trace does NOT send CORS headers, so a
// browser fetch() to it is blocked and always fell back to USD — that is why
// pricing never adapted to IP before. ipapi.co sends Access-Control-Allow-Origin.
(function(){
  var COUNTRY_CCY = {
    SA:'SAR',AE:'AED',QA:'QAR',KW:'KWD',BH:'BHD',OM:'OMR',YE:'YER',
    EG:'EGP',SD:'SDG',LY:'LYD',TN:'TND',DZ:'DZD',MA:'MAD',MR:'MRU',
    TR:'TRY',IQ:'IQD',JO:'JOD',LB:'LBP',SY:'SYP',PS:'ILS',
    US:'USD',CA:'CAD',GB:'GBP',CH:'CHF',
    DE:'EUR',FR:'EUR',IT:'EUR',ES:'EUR',NL:'EUR',BE:'EUR',AT:'EUR',PT:'EUR',IE:'EUR',FI:'EUR',GR:'EUR',
    PK:'PKR',IN:'INR',BD:'BDT',PH:'PHP',ID:'IDR',MY:'MYR'
  };
  // Device timezone -> country (instant, synchronous; the IP lookup refines it).
  var TIMEZONE_COUNTRY = {
    "Africa/Casablanca":"MA","Africa/Tunis":"TN","Africa/Algiers":"DZ","Africa/Cairo":"EG",
    "Africa/Tripoli":"LY","Africa/Khartoum":"SD","Africa/Nouakchott":"MR",
    "Asia/Dubai":"AE","Asia/Riyadh":"SA","Asia/Qatar":"QA","Asia/Kuwait":"KW",
    "Asia/Bahrain":"BH","Asia/Muscat":"OM","Asia/Baghdad":"IQ","Asia/Amman":"JO",
    "Asia/Beirut":"LB","Asia/Damascus":"SY","Asia/Gaza":"PS","Asia/Hebron":"PS",
    "Europe/Istanbul":"TR",
    "Europe/Paris":"FR","Europe/Berlin":"DE","Europe/Rome":"IT","Europe/Madrid":"ES",
    "Europe/Amsterdam":"NL","Europe/Brussels":"BE","Europe/Vienna":"AT","Europe/Lisbon":"PT",
    "Europe/Dublin":"IE","Europe/Helsinki":"FI","Europe/Athens":"GR",
    "Europe/London":"GB","Europe/Zurich":"CH",
    "America/New_York":"US","America/Chicago":"US","America/Denver":"US","America/Los_Angeles":"US",
    "America/Toronto":"CA","America/Vancouver":"CA",
    "Asia/Karachi":"PK","Asia/Kolkata":"IN","Asia/Dhaka":"BD","Asia/Manila":"PH",
    "Asia/Jakarta":"ID","Asia/Kuala_Lumpur":"MY"
  };
  var CCY_SYMBOL = {USD:'$',EUR:'€',GBP:'£',SAR:'﷼',AED:'د.إ',QAR:'ر.ق',KWD:'د.ك',BHD:'.د.ب',OMR:'ر.ع.',EGP:'E£',MAD:'د.م.',TND:'د.ت',DZD:'د.ج',TRY:'₺',JOD:'د.ا',LBP:'ل.ل',IQD:'ع.د',PKR:'₨',INR:'₹'};

  var state = { ccy:'USD', rates:null, ready:false };

  function countryFromTimezone(){
    try{
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return TIMEZONE_COUNTRY[tz] || null;
    }catch(e){ return null; }
  }

  function detectCountry(cb){
    // 1. explicit ?ccy= override (shareable links) — counts as a manual pick
    var m = /[?&]ccy=([A-Z]{3})/.exec(location.search);
    if(m){ setManual(m[1]); cb(); return; }
    // 2. the visitor's own explicit pick THIS SESSION (currency switcher) wins over IP.
    //    It lives in sessionStorage (not localStorage) so a pick from a past visit —
    //    possibly from another country — never freezes the currency forever.
    try{
      var manual = sessionStorage.getItem('sur_ccy_manual');
      if(manual){ state.ccy = manual; cb(); return; }
      // already auto-detected this session: reuse it, no extra IP lookup per page
      var cached = sessionStorage.getItem('sur_ccy_auto');
      if(cached){ state.ccy = cached; cb(); return; }
      // drop the old auto-saved key: it froze the first-detected currency forever
      localStorage.removeItem('sur_ccy');
    }catch(e){}
    // 3. Instant guess from the device timezone (synchronous — prices render in
    //    the right currency immediately, no waiting for a network lookup).
    var tzCountry = countryFromTimezone();
    var tzCcy = (tzCountry && COUNTRY_CCY[tzCountry]) || null;
    if(tzCcy){
      state.ccy = tzCcy;
      try{ sessionStorage.setItem('sur_ccy_auto', tzCcy); }catch(e){}
    }
    cb(); // update the UI now with the timezone guess
    // 4. Refine with the TRUE IP country (ipapi.co, CORS-enabled, free tier).
    //    If it differs from the timezone guess, update and re-render prices.
    var done = false;
    function finish(ipCcy){
      if(done) return; done = true;
      if(ipCcy && ipCcy !== state.ccy){
        state.ccy = ipCcy;
        try{ sessionStorage.setItem('sur_ccy_auto', ipCcy); localStorage.setItem('sur_ccy_auto', ipCcy); }catch(e){}
        cb();
      } else if(ipCcy){
        try{ localStorage.setItem('sur_ccy_auto', ipCcy); }catch(e){}
      }
    }
    try{
      var ctrl = new AbortController();
      var to = setTimeout(function(){ try{ ctrl.abort(); }catch(e){} finish(null); }, 3000);
      fetch('https://ipapi.co/json/', {signal: ctrl.signal})
        .then(function(r){ return r.json(); })
        .then(function(j){
          clearTimeout(to);
          var code = j && j.country_code;
          finish((code && COUNTRY_CCY[code]) || null);
        })
        .catch(function(){ clearTimeout(to); finish(null); });
    }catch(e){ finish(null); }
  }

  function setManual(ccy){
    state.ccy = ccy;
    try{ sessionStorage.setItem('sur_ccy_manual', ccy); }catch(e){}
  }

  function loadRates(cb){
    fetch('assets/rates.json', {cache:'no-store'})
      .then(function(r){ return r.json(); })
      .then(function(j){ state.rates = j.rates; state.ready = true; cb(); })
      .catch(function(){ cb(); });
  }

  // Convert amount from `fromCcy` to visitor's currency. Rates are USD-based.
  function convert(amount, fromCcy){
    if(!state.ready || !state.rates || amount == null) return null;
    fromCcy = (fromCcy || 'USD').toUpperCase();
    var toCcy = state.ccy;
    if(fromCcy === toCcy) return { value: amount, ccy: toCcy };
    var r = state.rates;
    // to USD first, then to target
    var inUSD = fromCcy === 'USD' ? amount : amount / (r[fromCcy] || 1);
    var out = toCcy === 'USD' ? inUSD : inUSD * (r[toCcy] || 1);
    return { value: out, ccy: toCcy };
  }

  function format(conv){
    if(!conv) return null;
    var sym = CCY_SYMBOL[conv.ccy] || (conv.ccy + ' ');
    var v = conv.value;
    var rounded = v >= 100 ? Math.round(v) : Math.round(v * 100) / 100;
    // Symbol before for $ € £ ₺, after for Arabic-script currencies
    var rtl = /[\u0600-\u06FF]/.test(sym);
    return rtl ? rounded.toLocaleString() + ' ' + sym : sym + rounded.toLocaleString();
  }

  // Public API
  window.SurCcy = {
    init: function(cb){ loadRates(function(){ detectCountry(cb || function(){}); }); },
    convert: convert,
    format: format,
    priceHTML: function(amount, fromCcy){
      var c = convert(amount, fromCcy);
      var f = format(c);
      return f ? '<span class="loc-price">' + f + '</span>' : null;
    },
    get: function(){ return state.ccy; },
    set: function(ccy){ setManual(ccy); },
    resetToIP: function(cb){ try{ sessionStorage.removeItem('sur_ccy_manual'); sessionStorage.removeItem('sur_ccy_auto'); }catch(e){} detectCountry(cb || function(){}); }
  };
})();
