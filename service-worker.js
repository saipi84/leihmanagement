// Minimaler Service Worker – nur damit Chrome die PWA erkennt
self.addEventListener('install', event => {
  console.log('Service Worker installiert');
  self.skipWaiting(); // sorgt für sofortige Aktivierung
});

self.addEventListener('fetch', event => {
  // Nichts spezielles cachen – einfach normal laden
  event.respondWith(fetch(event.request));
});