const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/image.gif'
];

// We are using self here because we are in the service worker context, but we could also use window as well

/* 
Global Scope:
In the global scope, self and window are essentially interchangeable. They both refer to the global object, which represents the browser window.
Web Workers:
In web workers, self refers to the worker's global scope, which is not the same as the window object. 
*/

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
