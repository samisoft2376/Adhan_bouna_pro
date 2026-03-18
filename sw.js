const CACHE_NAME = 'adhan-bouna-v2';
const assets = [
  '/Adhan-new/',
  '/Adhan-new/index.html',
  '/Adhan-new/manifest.json',
  '/Adhan-new/adhan.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});