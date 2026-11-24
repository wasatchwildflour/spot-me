// Offline support: app files are network-first (so updates show up), with the
// cached copy used at the gym when there's no signal. Firebase SDK and fonts are cache-first.
const CACHE = "spotme-v2";
const SHELL = ["./", "index.html", "app.js", "exercises.js", "config.js", "styles.css", "manifest.webmanifest", "icons/icon-192.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname.endsWith("googleapis.com") && !url.hostname.startsWith("fonts.")) return; // Firestore/Auth traffic
  const sdkOrFont = url.hostname === "www.gstatic.com" || url.hostname.startsWith("fonts.") || url.hostname === "cdnjs.cloudflare.com";
  if (sdkOrFont) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html"))));
});
