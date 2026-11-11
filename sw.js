// Service worker minimal : permet d'installer Super Jannot comme une appli.
// Il ne garde rien en cache : tout vient toujours d'Internet (et donc toujours à jour).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
