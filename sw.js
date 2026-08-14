/* ============================================================
   ITZWANHEDA SERVICE WORKER
   Network-first for HTML / CSS / JS
   Cache-first for static assets
   ============================================================ */

const CACHE_NAME = 'itswanheda-cache-v2';

const STATIC_ASSETS = [
  '/src/images/Profile.jpg',
  '/src/images/apple-touch-icon.png'
];


/* ============================================================
   INSTALL
   ============================================================ */

self.addEventListener('install', event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );

});


/* ============================================================
   ACTIVATE
   ============================================================ */

self.addEventListener('activate', event => {

  event.waitUntil(

    caches.keys().then(cacheNames => {

      return Promise.all(

        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))

      );

    }).then(() => self.clients.claim())

  );

});


/* ============================================================
   FETCH
   ============================================================ */

self.addEventListener('fetch', event => {

  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }


  /* ----------------------------------------------------------
     HTML
     ALWAYS TRY NETWORK FIRST
     ---------------------------------------------------------- */

  if (request.mode === 'navigate') {

    event.respondWith(

      fetch(request)
        .then(response => {

          return response;

        })
        .catch(() => {

          return caches.match('/index.html');

        })

    );

    return;
  }


  /* ----------------------------------------------------------
     CSS / JAVASCRIPT
     NETWORK FIRST
     ---------------------------------------------------------- */

  if (
    request.destination === 'script' ||
    request.destination === 'style'
  ) {

    event.respondWith(

      fetch(request)
        .then(response => {

          const responseClone = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(request, responseClone);
            });

          return response;

        })
        .catch(() => {

          return caches.match(request);

        })

    );

    return;
  }


  /* ----------------------------------------------------------
     IMAGES / FONTS / OTHER STATIC ASSETS
     CACHE FIRST
     ---------------------------------------------------------- */

  event.respondWith(

    caches.match(request)
      .then(cachedResponse => {

        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then(response => {

            if (
              !response ||
              response.status !== 200 ||
              response.type === 'opaque'
            ) {
              return response;
            }

            const responseClone = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, responseClone);
              });

            return response;

          });

      })

  );

});