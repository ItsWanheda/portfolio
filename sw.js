/* ============================================================
   ITZWANHEDA SERVICE WORKER
   Production Cache Strategy

   HTML / CSS / JS  → Network First
   Images / Fonts   → Cache First
   Offline          → Cached Fallback
   ============================================================ */

const CACHE_NAME = 'itswanheda-cache-v3';

const STATIC_ASSETS = [
  '/src/images/Profile.jpg',
  '/src/images/apple-touch-icon.png'
];


/* ============================================================
   INSTALL
   ============================================================ */

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});


/* ============================================================
   ACTIVATE
   ============================================================ */

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      cleanupOldCaches(),
      self.clients.claim()
    ])
  );
});


/* ============================================================
   CLEANUP OLD CACHES
   ============================================================ */

async function cleanupOldCaches() {
  const cacheNames = await caches.keys();

  await Promise.all(
    cacheNames
      .filter(cacheName => cacheName !== CACHE_NAME)
      .map(cacheName => caches.delete(cacheName))
  );
}


/* ============================================================
   FETCH HANDLER
   ============================================================ */

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  /*
   * Only handle requests belonging to this origin.
   * External resources remain under normal browser caching.
   */

  if (new URL(request.url).origin !== self.location.origin) {
    return;
  }


  /* ----------------------------------------------------------
     HTML / NAVIGATION
     Network First
     ---------------------------------------------------------- */

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }


  /* ----------------------------------------------------------
     CSS / JAVASCRIPT
     Network First
     ---------------------------------------------------------- */

  if (
    request.destination === 'script' ||
    request.destination === 'style'
  ) {
    event.respondWith(networkFirst(request));
    return;
  }


  /* ----------------------------------------------------------
     STATIC ASSETS
     Cache First
     ---------------------------------------------------------- */

  event.respondWith(cacheFirst(request));
});


/* ============================================================
   NETWORK FIRST — NAVIGATION
   ============================================================ */

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);

    return response;
  } catch {
    return (
      await caches.match('/index.html') ||
      new Response(
        'Offline — please reconnect to the internet.',
        {
          status: 503,
          headers: {
            'Content-Type': 'text/plain; charset=utf-8'
          }
        }
      )
    );
  }
}


/* ============================================================
   NETWORK FIRST
   ============================================================ */

async function networkFirst(request) {
  try {
    const response = await fetch(request);

    if (isValidResponse(response)) {
      const cache = await caches.open(CACHE_NAME);

      await cache.put(
        request,
        response.clone()
      );
    }

    return response;

  } catch {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    return new Response(
      '',
      {
        status: 503,
        statusText: 'Service Unavailable'
      }
    );
  }
}


/* ============================================================
   CACHE FIRST
   ============================================================ */

async function cacheFirst(request) {

  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {

    const response = await fetch(request);

    if (isValidResponse(response)) {

      const cache = await caches.open(CACHE_NAME);

      await cache.put(
        request,
        response.clone()
      );
    }

    return response;

  } catch {

    return new Response(
      '',
      {
        status: 503,
        statusText: 'Service Unavailable'
      }
    );
  }
}


/* ============================================================
   RESPONSE VALIDATION
   ============================================================ */

function isValidResponse(response) {

  return (
    response &&
    response.status === 200 &&
    response.type === 'basic'
  );
}