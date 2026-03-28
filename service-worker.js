// Service Worker สำหรับระบบแจ้งเตือน Art Therapy Club
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'มีการอัปเดตสถานะการจองอุปกรณ์';
    const options = {
        body: data,
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827347.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1827/1827347.png'
    };
    event.waitUntil(self.registration.showNotification('Art Therapy Club', options));
});
