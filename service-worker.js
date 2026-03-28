self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'มีการอัปเดตสถานะการจองอุปกรณ์',
    icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827347.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/1827/1827347.png'
  };
  event.waitUntil(self.registration.showNotification('Art Therapy Club', options));
});
