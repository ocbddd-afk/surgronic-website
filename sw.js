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
        const data = await res.text();
        return new Response(data, {
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
