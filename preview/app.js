/* Surgronic v2 — shared app logic (vanilla JS) */
(function(){
"use strict";
var API = "https://surgronic.pages.dev/actions";

/* ---------- API ---------- */
function api(action, args){
  return fetch(API, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({action:action, args:args||{}})
  }).then(function(r){
    if(!r.ok) throw new Error("API error "+r.status);
    return r.json();
  }).then(function(j){ return j.data; });
}
function normProduct(p){
  if(!p) return p;
  p.nameFr = p.nameFr || p.name_fr || p.name;
  p.nameAr = p.nameAr || p.name_ar || p.name;
  p.descriptionFr = p.descriptionFr || p.description_fr || p.description || "";
  p.descriptionAr = p.descriptionAr || p.description_ar || p.description || "";
  p.imageFiles = Array.isArray(p.imageFiles) ? p.imageFiles : [];
  p.finishOptions = p.finishOptions || [];
  return p;
}
function imgUrl(p, base){
  base = base || "./assets/";
  var f = (p.imageFiles && p.imageFiles[0]) || "";
  return f ? base + f : "";
}

/* ---------- Quote basket (localStorage) ---------- */
var BASKET_KEY = "surgronic_quote_v2";
function getBasket(){
  try{ return JSON.parse(localStorage.getItem(BASKET_KEY)) || []; }
  catch(e){ return []; }
}
function saveBasket(b){ localStorage.setItem(BASKET_KEY, JSON.stringify(b)); updateBasketUI(); }
function addToQuote(product, qty){
  var b = getBasket();
  var found = null;
  for(var i=0;i<b.length;i++){ if(b[i].sku===product.sku){ found=b[i]; break; } }
  if(found){ found.qty += (qty||1); }
  else{ b.push({sku:product.sku, name:product.name, brand:product.brand||"",
    image:(product.imageFiles&&product.imageFiles[0])||"", qty:(qty||1)}); }
  saveBasket(b);
}
function removeFromQuote(sku){
  saveBasket(getBasket().filter(function(i){ return i.sku!==sku; }));
}
function setQty(sku, qty){
  var b = getBasket();
  for(var i=0;i<b.length;i++){ if(b[i].sku===sku){ b[i].qty=Math.max(1,qty|0); } }
  saveBasket(b);
}
function basketCount(){
  return getBasket().reduce(function(n,i){ return n+i.qty; },0);
}
function updateBasketUI(){
  var els = document.querySelectorAll("[data-basket-count]");
  for(var i=0;i<els.length;i++){ els[i].textContent = basketCount(); }
}

/* ---------- Header / nav ---------- */
function headerHTML(active){
  return ''+
  '<header class="site-header"><div class="container header-inner">'+
    '<a class="logo" href="index.html">Surgronic<span class="dot">.</span></a>'+
    '<nav class="main-nav">'+
      '<a href="index.html"'+(active==="home"?' class="active"':'')+'>Home</a>'+
      '<a href="catalogue.html"'+(active==="catalog"?' class="active"':'')+'>Instrument Catalog</a>'+
      '<a href="quote.html"'+(active==="quote"?' class="active"':'')+'>Request a Quote</a>'+
    '</nav>'+
    '<div class="header-actions">'+
      '<div class="lang-switch" role="group" aria-label="Language">'+
        '<button class="on" data-lang="en">EN</button>'+
        '<button data-lang="fr">FR</button>'+
        '<button data-lang="ar">AR</button>'+
      '</div>'+
      '<a class="quote-indicator" href="quote.html" aria-label="Quote basket">'+
        'Quote list <span class="count" data-basket-count>0</span>'+
      '</a>'+
      '<a class="btn btn-primary" href="quote.html" style="padding:11px 22px;font-size:14px">Request a Quote</a>'+
      '<button class="hamburger" id="hamburger" aria-label="Menu">☰</button>'+
    '</div>'+
  '</div></header>'+
  '<div class="mobile-nav" id="mobileNav">'+
    '<button class="close" id="mobileClose" aria-label="Close">×</button>'+
    '<a href="index.html">Home</a>'+
    '<a href="catalogue.html">Instrument Catalog</a>'+
    '<a href="quote.html">Request a Quote</a>'+
  '</div>';
}
function footerHTML(){
  return ''+
  '<footer><div class="container">'+
    '<div class="footer-grid">'+
      '<div class="footer-brand">'+
        '<a class="logo" href="index.html" style="color:#fff">Surgronic<span class="dot">.</span></a>'+
        '<p>Precision surgical instruments, sourced to specification. From stock or made to order. Inspected before shipment. Serving MENA.</p>'+
      '</div>'+
      '<div><h4>Catalog</h4>'+
        '<a href="catalogue.html">Instrument Catalog</a>'+
        '<a href="catalogue.html?brand=Aesculap">Aesculap</a>'+
        '<a href="catalogue.html?brand=Sklar">Sklar</a>'+
        '<a href="quote.html">Request a Quote</a>'+
      '</div>'+
      '<div><h4>Company</h4>'+
        '<a href="index.html#how">How it works</a>'+
        '<a href="index.html#specialties">Specialties</a>'+
        '<a href="index.html#trust">Why Surgronic</a>'+
      '</div>'+
      '<div><h4>Contact</h4>'+
        '<a href="mailto:yusuf@surgronic.com">yusuf@surgronic.com</a>'+
        '<a href="tel:+905526081432">+90 552 608 1432</a>'+
        '<a href="https://wa.me/905526081432" target="_blank" rel="noopener">WhatsApp</a>'+
      '</div>'+
    '</div>'+
    '<div class="footer-bottom">'+
      '<span>© 2026 Surgronic. All rights reserved.</span>'+
      '<span>Surgronic · Sisli, Istanbul, Turkey</span>'+
    '</div>'+
  '</div></footer>';
}
function mountChrome(active){
  document.body.insertAdjacentHTML("afterbegin", headerHTML(active||""));
  document.body.insertAdjacentHTML("beforeend", footerHTML());
  updateBasketUI();
  var hb=document.getElementById("hamburger"), mn=document.getElementById("mobileNav"), mc=document.getElementById("mobileClose");
  if(hb&&mn){ hb.addEventListener("click",function(){mn.classList.add("open");}); }
  if(mc&&mn){ mc.addEventListener("click",function(){mn.classList.remove("open");}); }
  var langBtns=document.querySelectorAll(".lang-switch button");
  for(var i=0;i<langBtns.length;i++){
    langBtns[i].addEventListener("click",function(){
      for(var j=0;j<langBtns.length;j++) langBtns[j].classList.remove("on");
      this.classList.add("on");
      // FR/AR full parity is a P1 milestone; EN ships first.
    });
  }
}

/* ---------- Product card ---------- */
function cardHTML(p){
  p = normProduct(p);
  var img = imgUrl(p);
  var imgTag = img
    ? '<div class="pimg"><img src="'+img+'" alt="'+esc(p.name)+'" loading="lazy"></div>'
    : '<div class="pimg" style="display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:13px">Image coming soon</div>';
  return ''+
  '<article class="product-card">'+imgTag+
    '<div class="pbody">'+
      '<div class="psku">'+esc(p.sku)+'</div>'+
      '<h3>'+esc(p.name)+'</h3>'+
      '<div class="pbrand">'+esc(p.brand||"")+'</div>'+
      '<div class="pfoot" style="flex-direction:column;align-items:stretch;gap:10px">'+
        '<span class="por">Price on request</span>'+
        '<button class="btn btn-primary" data-add="'+esc(p.sku)+'" style="width:100%;padding:12px;font-size:14px">Add to Quote</button>'+
        '<a href="product.html?sku='+encodeURIComponent(p.sku)+'" style="font-size:13px;font-weight:500;color:var(--muted);text-align:center">View details</a>'+
      '</div>'+
    '</div>'+
  '</article>';
}
function esc(s){
  return String(s==null?"":s).replace(/[&<>"']/g,function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
  });
}
function bindAddButtons(root){
  (root||document).querySelectorAll("[data-add]").forEach(function(btn){
    btn.addEventListener("click",function(ev){
      ev.preventDefault(); ev.stopPropagation();
      if(btn.disabled) return;
      var sku = btn.getAttribute("data-add");
      var orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = "Adding&hellip;";
      api("getProduct",{sku:sku}).then(function(d){
        if(d && d.product){
          addToQuote(normProduct(d.product),1);
          btn.innerHTML = "Added to Quote &check;";
          btn.style.background = "var(--bronze)";
          btn.style.borderColor = "var(--bronze)";
          setTimeout(function(){
            btn.innerHTML = orig;
            btn.style.background = "";
            btn.style.borderColor = "";
            btn.disabled = false;
          },1600);
        } else { btn.disabled=false; btn.innerHTML=orig; }
      }).catch(function(){ btn.disabled=false; btn.innerHTML=orig; });
    });
  });
}

/* expose */
window.SG = {
  api:api, normProduct:normProduct, imgUrl:imgUrl,
  getBasket:getBasket, saveBasket:saveBasket, addToQuote:addToQuote,
  removeFromQuote:removeFromQuote, setQty:setQty, basketCount:basketCount,
  updateBasketUI:updateBasketUI, mountChrome:mountChrome,
  cardHTML:cardHTML, esc:esc, bindAddButtons:bindAddButtons
};
})();
