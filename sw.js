/* Service worker minimal: hanya agar Chrome Android menawarkan "Instal aplikasi". Tidak menyimpan cache apa pun. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* biarkan jaringan menangani */ });
