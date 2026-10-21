// Surgronic Service Worker — proxies /actions to the real Cloudflare API
// GitHub Pages frontend → Cloudflare backend (one authoritative database)

const API_URL = 'https://surgronic.pages.dev/actions';

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('/actions') && event.request.method === 'POST') {
    event.respondWith((async () => {
      try {
        // Forward the request to the real Cloudflare API
        const body = await event.request.text();
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body,
        });
        const json = await res.json();
        // Normalize product shapes: ensure fields the React cards expect exist
        // (prevents render crash from undefined.finishOptions etc.)
        if (json && json.data && Array.isArray(json.data.products)) {
          json.data.products = json.data.products.map(p => ({
            ...p,
            finishOptions: p.finishOptions || [],
            imageFiles: Array.isArray(p.imageFiles) ? p.imageFiles : [],
            priceCents: p.priceCents || null,
          }));
        }
        if (json && json.data && json.data.product) {
          const p = json.data.product;
          json.data.product = {
            ...p,
            finishOptions: p.finishOptions || [],
            imageFiles: Array.isArray(p.imageFiles) ? p.imageFiles : [],
            priceCents: p.priceCents || null,
          };
        }
        return new Response(JSON.stringify(json), {
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ data: {}, error: 'API unreachable' }), {
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
