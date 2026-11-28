// غيّر رقم الإصدار مع أي تحديث
const C='pn-mancy-v2',F=['./','index.html','cyber.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith('pn-mancy-')&&n!==C).map(n=>caches.delete(n)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.open(C).then(c=>c.match(e.request,{ignoreSearch:true})).then(r=>r||fetch(e.request))));
