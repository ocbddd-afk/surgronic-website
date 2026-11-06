// Surgronic local pricing: IP-based currency detection + daily FX conversion.
// Country via https://www.cloudflare.com/cdn-cgi/trace (free, no key).
// Rates from assets/rates.json (refreshed daily by cron surgronic-fx-rates).
(function(){
  var COUNTRY_CCY = {
    SA:'SAR',AE:'AED',QA:'QAR',KW:'KWD',BH:'BHD',OM:'OMR',YE:'YER',
    EG:'EGP',SD:'SDG',LY:'LYD',TN:'TND',DZ:'DZD',MA:'MAD',MR:'MRU',
    TR:'TRY',IQ:'IQD',JO:'JOD',LB:'LBP',SY:'SYP',PS:'ILS',
    US:'USD',CA:'CAD',GB:'GBP',CH:'CHF',
    DE:'EUR',FR:'EUR',IT:'EUR',ES:'EUR',NL:'EUR',BE:'EUR',AT:'EUR',PT:'EUR',IE:'EUR',FI:'EUR',GR:'EUR',
    PK:'PKR',IN:'INR',BD:'BDT',PH:'PHP',ID:'IDR',MY:'MYR'
  };
  var CCY_SYMBOL = {USD:'$',EUR:'€',GBP:'£',SAR:'﷼',AED:'د.إ',QAR:'ر.ق',KWD:'د.ك',BHD:'.د.ب',OMR:'ر.ع.',EGP:'E£',MAD:'د.م.',TND:'د.ت',DZD:'د.ج',TRY:'₺',JOD:'د.ا',LBP:'ل.ل',IQD:'ع.د',PKR:'₨',INR:'₹'};

  var state = { ccy:'USD', rates:null, ready:false };

  function detectCountry(cb){
    // 1. explicit ?ccy= override (shareable links) — counts as a manual pick
    var m = /[?&]ccy=([A-Z]{3})/.exec(location.search);
    if(m){ setManual(m[1]); cb(); return; }
    // 2. the visitor's own explicit pick (currency switcher) wins over IP
    try{
      var manual = localStorage.getItem('sur_ccy_manual');
      if(manual){ state.ccy = manual; cb(); return; }
      // drop the old auto-saved key: it froze the first-detected currency forever
      localStorage.removeItem('sur_ccy');
    }catch(e){}
    // 3. IP geolocation via cloudflare trace — re-checked on EVERY visit,
    // so a traveller / VPN user always sees their current country's currency
    fetch('https://www.cloudflare.com/cdn-cgi/trace', {cache:'no-store'})
      .then(function(r){ return r.text(); })
      .then(function(t){
        var loc = /loc=([A-Z]{2})/.exec(t);
        var ccy = (loc && COUNTRY_CCY[loc[1]]) || 'USD';
        state.ccy = ccy;
        try{ localStorage.setItem('sur_ccy_auto', ccy); }catch(e){}
        cb();
      })
      .catch(function(){
        // trace unreachable: last auto-detected currency, else USD
        try{ var auto = localStorage.getItem('sur_ccy_auto'); if(auto) state.ccy = auto; }catch(e){}
        cb();
      });
  }

  function setManual(ccy){
    state.ccy = ccy;
    try{ localStorage.setItem('sur_ccy_manual', ccy); }catch(e){}
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
    resetToIP: function(cb){ try{ localStorage.removeItem('sur_ccy_manual'); }catch(e){} detectCountry(cb || function(){}); }
  };
})();
