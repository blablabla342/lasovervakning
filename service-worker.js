self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('lasapp-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/service-worker.js',
        '/icon-192.png',
        '/icon-512.png'
        // Lägg till fler filer om du har externa JS/CSS
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
