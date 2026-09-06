// Service Worker is event driven, where we can listen to events like install, activate, fetch, push, sync etc.

// 1. Service Worker is installed
// 2. Service Worker is activated
// 3. Service Worker fetches the files and caches them, when online
// 4. Service Worker serves the files from the cache, when offline

// CACHE_NAME is the name of the cache, it is like a Database name
const CACHE_NAME = "demo/v7";

// CACHE_FILES are the files that we want to cache
const CACHE_FILES = [
  "./index.html",
  "./style.css",
  "./photo.png",
  "./script.js",
];

// install event will be triggered when the Service Worker is installed
self.addEventListener("install", (e) => {
  // waitUntil method will make sure that the Service Worker is not installed until the promise is resolved
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_FILES);
    })
  );
});

// activate event will be triggered when the Service Worker is activated
self.addEventListener("activate", (e) => {
  // Clean up useless cache
  e.waitUntil(
    // caches.keys() will return all the cache keys like demo/v1, demo/v2, demo/v3
    caches.keys().then((keyList) => {
      // Promise.all will make sure that all the promises are resolved
      return Promise.all(
        keyList.map((key) => {
          // If the key is not equal to CACHE_NAME, then delete the cache
          if (key != CACHE_NAME) {
            // caches.delete will delete the cache, and return a promise
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Whenever a file/fetch is requested, this event will be triggered
self.addEventListener("fetch", (e) => {
  // Offline exprience
  // Whenever a file is requested,
  // 1. fetch from network, update my cache 2. cache as a fallback

  // e.respondWith will make sure that the Service Worker will not stop the request, it will wait for the response
  e.respondWith(
    // fetch from network
    fetch(e.request)
      .then((res) => {
        // update my cache

        if (e.request.url.startsWith('http')) {
        // clone the response
        const cloneData = res.clone();
        // open the cache
        caches.open(CACHE_NAME).then((cache) => {
          // put the response, where the e.request is the key
          cache.put(e.request, cloneData);
        });
        console.log("returning from network");
        // return the response
        return res;
    }})
      .catch((err) => {
        console.log(err);
        console.log("returning from cache");
        // cache as a fallback, where it matches the request from the cache and return the file
        return caches.match(e.request).then((file) => file);
      })
  );
});
