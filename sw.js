const CACHE_NAME = 'new-weaving-1-v2';
const CORE_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/i18n.js',
  './js/settings.js',
  './js/system-check.js',
  './js/qrcode.min.js',
  './js/app.js',
  './assets/images/cover.jpg',
  './assets/images/twp_logo.png'
];

const MEDIA_ASSETS = [
  './assets/images/ex1.jpg',
  './assets/images/ex2.jpg',
  './assets/images/ex3.jpg',
  './assets/images/ex4.jpg',
  './assets/images/ex5.jpg',
  './assets/images/ex6.jpg',
  './assets/images/ex7.jpg',
  './assets/images/ex8.jpg',
  './assets/audio/ex1_oktoberfest.wav',
  './assets/audio/ex2_colosseum.wav',
  './assets/audio/ex3_healthy_living.wav',
  './assets/audio/ex4_firewalking.wav',
  './assets/audio/ex5_croissant.wav',
  './assets/audio/ex6_printing_press.wav',
  './assets/audio/ex7_stephen_hawking.wav',
  './assets/audio/ex8_doctors_without_borders.wav'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(CORE_ASSETS);
      // Cache media assets non-blocking so install succeeds even on slower networks
      await Promise.allSettled(MEDIA_ASSETS.map(url => cache.add(url)));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
