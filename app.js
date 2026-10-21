// Surgronic shared JS
let SURGRONIC_PRODUCTS = null;

async function loadProducts() {
  if (SURGRONIC_PRODUCTS) return SURGRONIC_PRODUCTS;
  const res = await fetch('./assets/catalog-data-v2.json');
  if (!res.ok) throw new Error('Catalogue unavailable');
  SURGRONIC_PRODUCTS = await res.json();
  return SURGRONIC_PRODUCTS;
}

function productSlug(p) {
  return (p.slug || (p.sku||'').toLowerCase().replace(/[^a-z0-9]+/g, '-')).replace(/^-+|-+$/g, '');
}

function productImage(p) {
  return './assets/' + ((p.imageFiles && p.imageFiles[0]) || 'placeholder.svg');
}

function productCard(p) {
  const slug = productSlug(p);
  return '<a class="product-card" href="./product.html?sku=' + encodeURIComponent(p.sku||'') + '">' +
    '<img src="' + productImage(p) + '" alt="" loading="lazy" onerror="this.src=\'./assets/placeholder.svg\'">' +
    '<div class="product-card-body">' +
      '<div class="sku">' + (p.sku||'') + '</div>' +
      '<div class="name">' + (p.name||'') + '</div>' +
      '<div class="brand">' + (p.brand||'') + '</div>' +
      '<div class="price">Price on request</div>' +
    '</div></a>';
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
