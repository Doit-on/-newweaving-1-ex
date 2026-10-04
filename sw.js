const CACHE_NAME = 'new-weaving-1-v4-ocean-teal';
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
  './assets/audio/ex1_oktoberfest.mp3',
  './assets/audio/ex2_colosseum.mp3',
  './assets/audio/ex3_healthy_living.mp3',
  './assets/audio/ex4_firewalking.mp3',
  './assets/audio/ex5_croissant.mp3',
  './assets/audio/ex6_printing_press.mp3',
  './assets/audio/ex7_stephen_hawking.mp3',
  './assets/audio/ex8_doctors_without_borders.mp3'
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
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Purging old cache:', key);
            return caches.delete(key);
          }
        })
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
