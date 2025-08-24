const cacheName='health-tasks-cache-v3';
const filesToCache=['/','/index.html','/manifest.json','/icon-192.png','/icon-512.png'];

self.addEventListener('install',e=>{ e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(filesToCache))); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(key=>{ if(key!==cacheName) return caches.delete(key); })))); });
self.addEventListener('fetch',e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });