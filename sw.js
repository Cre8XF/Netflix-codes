self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("netflix-koder").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/script.js",
        "/style.css",
        "/netflix_kategorier.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});