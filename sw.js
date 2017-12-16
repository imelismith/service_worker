'use strict';

const offlineContent = [
    '/',
    '/service_worker/',
    '/service_worker/index.html',
    '/service_worker/app.js',
    '/service_worker/assets/',
    '/service_worker/image-list.js',
    '/service_worker/style.css'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
        .open('v1')
        .then((cache) => {
            cache.addAll(offlineContent);  
        })
    );
});

// A request is a stream and can only be consumed once. 
// Since we are consuming this once by cache and once 
// by the browser for fetch, we need to clone the response.


self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
            // caches.match() always resolves
            // but in case of success response will have value
            if(response !== undefined) {
                return response;
            } else {
                return fetch(event.request).then((response) => {
                    // If we want to cache new requests cumulatively
                    // we can do so by handling the response of the fetch 
                    // request and then adding it to the cache, like below.

                    // A response is a stream and because we want the browser to 
                    // consume the response as well as the cache consuming the response, 
                    // we need to clone it so we have two streams.

                    let resClone = response.clone();

                    caches.open('v1').then((cache) => {
                        cache.put(event.request, resClone);
                    });

                    return response; // and serve second one
                })
                .catch(() => {
                    caches.match('/service_worker/assets/cle-cavaliers.jpg');
                });
            }
        })
    );
});