self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('static').then((cache) => {
        return cache.addAll([
          '/StudentEngagementApp/public/pages/login.html',
          '/StudentEngagementApp/public/assets/styles/styles.css',
          '/StudentEngagementApp/app.js',
          '/StudentEngagementApp/public/assets/images/uc-crest.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  