const CACHE = 'wanheda-v1';
const ASSETS = [
  '/',
  './index.html',
  './src/css/style.css',
  './src/js/main.js',
  './src/images/favicon.svg',
  './src/images/Profile.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});