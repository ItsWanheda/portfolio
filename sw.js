/* ============================================================
   ItsWanheda SERVICE WORKER
   Production Cache Strategy

   HTML / Navigation  → Network First + Timeout
   CSS / JavaScript   → Network First
   Images             → Stale While Revalidate
   Fonts              → Cache First
   Other Assets       → Network First
   API                → Network Only
   Offline            → Cached Fallback

   ============================================================ */

const VERSION = 'v4';

const STATIC_CACHE = `itswanheda-static-${VERSION}`;
const RUNTIME_CACHE = `itswanheda-runtime-${VERSION}`;

const NETWORK_TIMEOUT = 4000;


/* ============================================================
   STATIC ASSETS
   ============================================================ */

const STATIC_ASSETS = [
  '/index.html',
  '/src/images/Profile.jpg',
  '/src/images/apple-touch-icon.png'
];


/* ============================================================
   INSTALL
   ============================================================ */

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
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

  const validCaches = [
    STATIC_CACHE,
    RUNTIME_CACHE
  ];

  await Promise.all(
    cacheNames
      .filter(cacheName => !validCaches.includes(cacheName))
      .map(cacheName => caches.delete(cacheName))
  );
}


/* ============================================================
   FETCH HANDLER
   ============================================================ */

self.addEventListener('fetch', event => {

  const { request } = event;

  /* ----------------------------------------------------------
     Only GET requests
     ---------------------------------------------------------- */

  if (request.method !== 'GET') {
    return;
  }


  /* ----------------------------------------------------------
     Ignore browser extensions / invalid URLs
     ---------------------------------------------------------- */

  let url;

  try {
    url = new URL(request.url);
  } catch {
    return;
  }


  /* ----------------------------------------------------------
     Only handle same-origin requests
     ---------------------------------------------------------- */

  if (url.origin !== self.location.origin) {
    return;
  }


  /* ----------------------------------------------------------
     Don't cache requests explicitly marked no-store
     ---------------------------------------------------------- */

  if (request.cache === 'no-store') {
    event.respondWith(fetch(request));
    return;
  }


  /* ==========================================================
     API REQUESTS
     Network Only
     ========================================================== */

  if (
    url.pathname.startsWith('/api/') ||
    request.destination === 'document' &&
    url.pathname.endsWith('.json')
  ) {
    event.respondWith(networkOnly(request));
    return;
  }


  /* ==========================================================
     NAVIGATION / HTML
     Network First + Timeout
     ========================================================== */

  if (request.mode === 'navigate') {

    event.respondWith(
      networkFirstNavigation(request)
    );

    return;
  }


  /* ==========================================================
     JAVASCRIPT / CSS
     Network First
     ========================================================== */

  if (
    request.destination === 'script' ||
    request.destination === 'style'
  ) {

    event.respondWith(
      networkFirst(request)
    );

    return;
  }


  /* ==========================================================
     IMAGES
     Stale While Revalidate
     ========================================================== */

  if (
    request.destination === 'image' ||
    isImageRequest(url)
  ) {

    event.respondWith(
      staleWhileRevalidate(request)
    );

    return;
  }


  /* ==========================================================
     FONTS
     Cache First
     ========================================================== */

  if (
    request.destination === 'font' ||
    isFontRequest(url)
  ) {

    event.respondWith(
      cacheFirst(request)
    );

    return;
  }


  /* ==========================================================
     OTHER SAME-ORIGIN ASSETS
     Network First
     ========================================================== */

  event.respondWith(
    networkFirst(request)
  );

});


/* ============================================================
   NETWORK FIRST — NAVIGATION
   ============================================================ */

async function networkFirstNavigation(request) {

  try {

    const response = await fetchWithTimeout(
      request,
      NETWORK_TIMEOUT
    );

    if (isValidResponse(response)) {

      const cache = await caches.open(
        RUNTIME_CACHE
      );

      await cache.put(
        request,
        response.clone()
      );
    }

    return response;

  } catch {

    const cachedResponse =
      await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }


    /* --------------------------------------------------------
       Fallback to cached index.html
       -------------------------------------------------------- */

    const fallback =
      await caches.match('/index.html');

    if (fallback) {
      return fallback;
    }


    /* --------------------------------------------------------
       Final offline response
       -------------------------------------------------------- */

    return offlineResponse();
  }
}


/* ============================================================
   NETWORK FIRST
   ============================================================ */

async function networkFirst(request) {

  try {

    const response = await fetchWithTimeout(
      request,
      NETWORK_TIMEOUT
    );

    if (isValidResponse(response)) {

      const cache = await caches.open(
        RUNTIME_CACHE
      );

      await cache.put(
        request,
        response.clone()
      );
    }

    return response;

  } catch {

    const cachedResponse =
      await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    return offlineResponse();
  }
}


/* ============================================================
   CACHE FIRST
   ============================================================ */

async function cacheFirst(request) {

  const cachedResponse =
    await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }


  try {

    const response = await fetch(request);

    if (isValidResponse(response)) {

      const cache = await caches.open(
        RUNTIME_CACHE
      );

      await cache.put(
        request,
        response.clone()
      );
    }

    return response;

  } catch {

    return offlineResponse();
  }
}


/* ============================================================
   STALE WHILE REVALIDATE
   ============================================================ */

async function staleWhileRevalidate(request) {

  const cache = await caches.open(
    RUNTIME_CACHE
  );

  const cachedResponse =
    await cache.match(request);


  /* ----------------------------------------------------------
     Fetch newest version in background
     ---------------------------------------------------------- */

  const networkUpdate = fetch(request)
    .then(response => {

      if (isValidResponse(response)) {

        cache.put(
          request,
          response.clone()
        );
      }

      return response;

    })
    .catch(() => null);


  /* ----------------------------------------------------------
     Return cached version immediately
     ---------------------------------------------------------- */

  if (cachedResponse) {

    /*
     * Keep networkUpdate running in the background.
     */

    return cachedResponse;
  }


  /* ----------------------------------------------------------
     No cache → wait for network
     ---------------------------------------------------------- */

  const networkResponse =
    await networkUpdate;

  if (networkResponse) {
    return networkResponse;
  }


  return offlineResponse();
}


/* ============================================================
   NETWORK ONLY
   ============================================================ */

async function networkOnly(request) {

  try {

    return await fetch(request);

  } catch {

    return offlineResponse();
  }
}


/* ============================================================
   FETCH WITH TIMEOUT
   ============================================================ */

async function fetchWithTimeout(
  request,
  timeout = NETWORK_TIMEOUT
) {

  const controller =
    new AbortController();

  const timeoutId = setTimeout(
    () => controller.abort(),
    timeout
  );


  try {

    return await fetch(
      request,
      {
        signal: controller.signal
      }
    );

  } finally {

    clearTimeout(timeoutId);
  }
}


/* ============================================================
   IMAGE DETECTION
   ============================================================ */

function isImageRequest(url) {

  return /\.(png|jpe?g|gif|webp|svg|avif|ico)$/i
    .test(url.pathname);
}


/* ============================================================
   FONT DETECTION
   ============================================================ */

function isFontRequest(url) {

  return /\.(woff2?|ttf|otf|eot)$/i
    .test(url.pathname);
}


/* ============================================================
   RESPONSE VALIDATION
   ============================================================ */

function isValidResponse(response) {

  return (
    response &&
    response.ok &&
    (
      response.type === 'basic' ||
      response.type === 'opaque'
    )
  );
}


/* ============================================================
   OFFLINE RESPONSE
   ============================================================ */

function offlineResponse() {

  return new Response(
    `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1">
        <title>Offline</title>

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 24px;

            background: #050505;
            color: #fff;

            font-family:
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;

            text-align: center;
          }

          .offline {
            max-width: 480px;
          }

          h1 {
            margin: 0 0 12px;
            font-size: 2rem;
          }

          p {
            margin: 0;
            color: #aaa;
            line-height: 1.6;
          }

          button {
            margin-top: 24px;
            padding: 12px 20px;

            border: 1px solid #333;
            border-radius: 8px;

            background: #111;
            color: #fff;

            cursor: pointer;
            font: inherit;
          }

          button:hover {
            background: #1a1a1a;
          }
        </style>
      </head>

      <body>

        <main class="offline">

          <h1>You're Offline</h1>

          <p>
            This page isn't available right now.
            Reconnect to the internet and try again.
          </p>

          <button onclick="location.reload()">
            Try Again
          </button>

        </main>

      </body>
      </html>
    `,
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store'
      }
    }
  );
}


/* ============================================================
   SERVICE WORKER UPDATE MESSAGE
   ============================================================ */

self.addEventListener('message', event => {

  if (!event.data) {
    return;
  }

  if (event.data.type === 'SKIP_WAITING') {

    self.skipWaiting();
  }

});