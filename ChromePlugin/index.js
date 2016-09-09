import {CBR} from './Classes/CBR'
(function () {
    window.addEventListener('load', function () {
        let x = new CBR();
        x.loadPotentialCollection().then(result => {
            Promise.all(x.extractTextModelAsync(result)).then(values => {
                console.log(values);
            });
        });
    });
} ());