'use strict';
let Path = 'assets/';

// A 'Top Level' let statement will create variables in the global scope
// it just wont create them as properties of the 'Global Object' usually the 'Window'

/**
 *  let fromLet = 'fl';
 *  var fromVar = 'fv';
 *  console.log(fromLet); -> 'fl'
 *  console.log(fromVar); -> 'fv'
 *  console.log(window.fromLet); -> undefined 
 *  console.log(window.fromVar); -> 'fv'
 */

// this is and 'implied declaration'

let Assets = { 'images' : [
    {
        'name' : 'Cleveland Cavaliers',
        'alt'  : 'Cavs',
        'url'  : 'assets/cle-cavaliers.jpg',
        'credit' : '<a href="https://www.flickr.com/photos/rmtip21/">Michael Tipton</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },
    {
        'name' : 'Houston Rockets',
        'alt'  : 'Rockets',
        'url'  : 'assets/hou-rockets.jpg',
        'credit' : '<a href="https://www.flickr.com/photos/rmtip21/">Michael Tipton</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },
    {
        'name' : 'Indiana Pacers',
        'alt'  : 'Pacers',
        'url'  : 'assets/ind-pacers.jpg',
        'credit' : '<a href="https://www.flickr.com/photos/rmtip21/">Michael Tipton</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    },
     {
        'name' : 'Los Angeles Clippers',
        'alt'  : 'Clippers',
        'url'  : 'assets/la-clippers.jpg',
        'credit' : '<a href="https://www.flickr.com/photos/rmtip21/">Michael Tipton</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.'
    }
]};