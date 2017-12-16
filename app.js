'use strict';
// Register the service worker
if ('serviceWorker' in navigator) {   
    navigator.serviceWorker.register('/service_worker/sw.js')
        .then((registration) => {
             if(registration.installing) {
                console.log('Service worker installing');
                } else if(registration.waiting) {
                console.log('Service worker installed');
                } else if(registration.active) {
                console.log('Service worker active');
            }
        }).catch((error) => {
            // registration failed :(
            console.log('Registration failed with ' + error);
        });
}



function imgLoader(imgData) {
    return new Promise((res, rej) => {
        let request = new XMLHttpRequest();
        request.open('GET', imgData);
        request.responseType = 'blob';

        request.onload = () => {
            if(request.status == 200) {
                let arrRes = [];
                arrRes[0] = request.response; // assigning to
                arrRes[1] = imgData; // assigning to
                res(arrRes); // response is an array w/ 2 properties from above
            } else {
                rej(Error('Images failed to load :( ' + request.statusText));
            }
        };

        request.onerror = () => {
            rej(Error('Error in the network.'));
        };

        request.send();

    });
};

const imageSection = document.querySelector('section');

self.onload = () => {

    for (let i = 0; i<=Assets.images.length-1; i++) {

        imgLoader(Assets.images[i]).then((arrRes) => {

            let img = document.createElement('img');
            let fig = document.createElement('figure');
            let cap = document.createElement('caption');

            let imgURL = self.URL.createObjectURL(arrRes[0]);

            img.src = imgURL;
            img.setAttribute('alt', arrRes[1].alt);
            cap.innerHTML = '<strong>' + arrRes[1].name + '</strong>: Taken by' + arrRes[1].credit;

            imageSection.appendChild(fig);
            fig.appendChild(img);
            fig.appendChild(cap);

        }, (Error) => {
            console.log(Error);
        });
    }

};