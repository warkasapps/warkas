// Warkas — Service Worker
// Cuma cache "app shell" (tampilan) biar bisa kebuka meski sinyal lemot/putus.
// Data transaksi TETAP butuh internet (manggil Apps Script), gak dicache di sini —
// supaya stok & harga yang ditampilkan selalu yang terbaru, bukan basi.

const CACHE_NAME = "warkas-shell-v1";
const APP_SHELL = ["./index.html", "./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  // Jangan cache panggilan ke Apps Script — data harus selalu fresh dari server.
  if (url.indexOf("script.google.com") !== -1) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => cached);
    })
  );
});
