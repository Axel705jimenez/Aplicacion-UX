self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
    event.waitUntil(
        caches.open('app-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index',
                '/static/style.css',
                '/static/script.js',
                '/static/images/icon-192x192.png',
                '/static/images/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
