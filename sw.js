self.addEventListener("install", e => {
e.waitUntil(
caches.open("alexanderos-cache").then(cache => {
return cache.addAll([
"alexanderos.html",
"manifest.json",
"icon.png"
]);
})
);
});

self.addEventListener("fetch", e => {
e.respondWith(
caches.match(e.request).then(response => response || fetch(e.request))
);
});
