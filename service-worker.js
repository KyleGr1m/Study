self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("study-helper-v1").then((cache) => cache.addAll([
      "./",
      "./index.html",
      "./manifest.json",
      "./icons/icon-192.png",
      "./icons/icon-512.png"
    ]))
  );
  self.skipWaiting();
});
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  e.respondWith((async () => {
    try {
      const fresh = await fetch(e.request);
      const cache = await caches.open("study-helper-v1");
      cache.put(e.request, fresh.clone());
      return fresh;
    } catch (err) {
      const cached = await caches.match(e.request);
      if (cached) return cached;
      throw err;
    }
  })());
});
