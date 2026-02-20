const CACHE_NAME = 'trade-study-v5';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './data.js',
    './firebase-config.js',
    './manifest.json'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    const url = e.request.url;
    if (url.includes('googleapis.com') || url.includes('firebaseio.com') || url.includes('gstatic.com') || url.includes('firestore') || url.includes('identitytoolkit')) {
        return;
    }
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
    );
});
