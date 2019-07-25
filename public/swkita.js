const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'styles/style.css',
  'images/icons/icon-72x72.png',
  'images/icons/icon-96x96.png',
  'images/icons/icon-128x128.png',
 'images/icons/icon-144x144.png',
 'images/icons/icon-152x152.png',
 'images/icons/icon-192x192.png',
 'images/icons/icon-384x384.png',
 'images/icons/icon-512x512.png'
 
];

self.addEventListener('install', event => {
  console.log('🐱 Meow! Service worker registered.');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('🐱 Meow! Service worker registered.');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});
