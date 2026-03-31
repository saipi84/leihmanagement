const CACHE_NAME = 'zsva-leih-v1';

self.addEventListener('install', event => {
    console.log('[SW] Instaliran');
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});

self.addEventListener('activate', event => {
    console.log('[SW] Aktiviran');
    event.waitUntil(clients.claim());
});
