// Surgronic Service Worker — client-side /actions backend for GitHub Pages
// Intercepts POST /actions and serves from local catalog-data-v2.json

const JSON_URL = './assets/catalog-data-v2.json';
let cache = null;

async function getProducts() {
  if (cache) return cache;
  const res = await fetch(JSON_URL);
  const data = await res.json();
  // Convert to camelCase for React app + add fields the app expects
  cache = data.map(p => ({
    ...p,
    nameFr: p.name_fr || p.name,
    nameAr: p.name_ar || p.name,
    descriptionFr: p.description_fr || p.description,
    descriptionAr: p.description_ar || p.description,
    finishOptions: p.finishOptions || [],
    priceCents: p.priceCents || null,
    family: p.family || null,
  }));
  return cache;
}

const CATEGORIES = [
  { id: 1, slug: 'general-surgery', name: 'General Surgery & Laparoscopy', nameFr: 'Chirurgie générale et laparoscopie', nameAr: 'الجراحة العامة والمناظير' },
  { id: 2, slug: 'orthopedics', name: 'Orthopedics & Trauma', nameFr: 'Orthopédie et traumatologie', nameAr: 'جراحة العظام والكسور' },
  { id: 3, slug: 'omfs', name: 'Oral & Maxillofacial', nameFr: 'Chirurgie orale et maxillo-faciale', nameAr: 'جراحة الفم والوجه والفكين' },
  { id: 4, slug: 'plastic', name: 'Plastic, Reconstructive & Aesthetic', nameFr: 'Chirurgie plastique et esthétique', nameAr: 'الجراحة التجميلية والترميمية' },
  { id: 5, slug: 'cardiovascular', name: 'Cardiovascular & Thoracic', nameFr: 'Chirurgie cardiovasculaire et thoracique', nameAr: 'جراحة القلب والصدر' },
  { id: 6, slug: 'neurosurgery', name: 'Neurosurgery & Spine', nameFr: 'Neurochirurgie et rachis', nameAr: 'جراحة الأعصاب والعمود الفقري' },
  { id: 7, slug: 'ophthalmology', name: 'Ophthalmology', nameFr: 'Ophtalmologie', nameAr: 'طب العيون' },
  { id: 8, slug: 'ent', name: 'ENT', nameFr: 'ORL', nameAr: 'الأنف والأذن والحنجرة' },
  { id: 9, slug: 'obgyn-urology', name: 'OB/GYN & Urology', nameFr: 'Gynécologie-obstétrique et urologie', nameAr: 'النساء والتوليد والمسالك البولية' },
  { id: 10, slug: 'energy', name: 'Energy & Powered Systems', nameFr: 'Systèmes énergétiques et motorisés', nameAr: 'أنظمة الطاقة والأجهزة المحمولة' },
  { id: 11, slug: 'dental', name: 'Dental & Implant Surgery', nameFr: 'Chirurgie dentaire et implantaire', nameAr: 'جراحة الأسنان والزرعات' },
];

async function handleAction(action, args) {
  args = args || {};
  const products = await getProducts();

  if (action === 'listProducts') {
    let f = products;
    const s = (args.search || '').toLowerCase();
    if (s) f = f.filter(p => (p.name||'').toLowerCase().includes(s) || (p.sku||'').toLowerCase().includes(s));
    if (args.manufacturer) {
      const m = args.manufacturer.toLowerCase();
      f = f.filter(p => (p.brand||'').toLowerCase().includes(m));
    }
    if (args.brand) {
      const b = args.brand.toLowerCase();
      f = f.filter(p => (p.brand||'').toLowerCase() === b);
    }
    const total = f.length;
    const limit = Math.min(1000, Math.max(1, args.limit || 48));
    const offset = Math.max(0, args.offset || 0);
    const sort = args.sort || 'name';
    f = [...f].sort((a, b) => {
      if (sort === 'sku') return (a.sku||'').localeCompare(b.sku||'');
      if (sort === 'brand') return (a.brand||'').localeCompare(b.brand||'');
      return (a.name||'').localeCompare(b.name||'');
    });
    return { total, products: f.slice(offset, offset + limit) };
  }

  if (action === 'getProduct') {
    const sku = (args.sku || args.slug || '').toLowerCase();
    const p = products.find(x => (x.sku||'').toLowerCase() === sku || (x.slug||'') === sku);
    return { product: p || null };
  }

  if (action === 'listCategories') {
    return CATEGORIES;
  }

  if (action === 'getPublicConfig') {
    return { ga4MeasurementId: null };
  }

  // Actions the app fires on mount — return safe empty shapes
  // (prevents TypeError on .map()/.length of undefined which unmounts the tree)
  if (action === 'listArticles') {
    return { articles: [], total: 0 };
  }
  if (action === 'getArticle' || action === 'getPost') {
    return { article: null, post: null };
  }
  if (action === 'getQuoteBasket' || action === 'getBasket' || action === 'listQuoteItems') {
    return { items: [], total: 0, count: 0 };
  }
  if (action === 'listManufacturers' || action === 'listBrands') {
    const brands = [...new Set(products.map(p => p.brand).filter(Boolean))].sort();
    return { manufacturers: brands.map((b, i) => ({ id: i+1, name: b })), brands };
  }
  if (action === 'getSiteSettings' || action === 'getSettings') {
    return { settings: {} };
  }

  // Unknown actions: return empty object (not null) to avoid crashes
  return {};
}

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('/actions') && event.request.method === 'POST') {
    event.respondWith((async () => {
      try {
        const body = await event.request.json();
        const result = await handleAction(body.action, body.args);
        return new Response(JSON.stringify({ data: result }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ data: {}, error: String(e) }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
    })());
  }
});

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
