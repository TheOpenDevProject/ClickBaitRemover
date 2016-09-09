import {CBR} from './Classes/CBR'
(function () {
    window.addEventListener('load', function () {
        let x = new CBR();
        x.loadPotentialCollection().then(result => {
            Promise.all(x.extractTextModelAsync(result)).then(values => {
                console.log(values);
                for (let i = 0; i < values.length; i++) {
                    if (values[i].availableText.length > 0) {
                        values[i].image.remove();
                    }
                }
            });
        });
    });
} ());