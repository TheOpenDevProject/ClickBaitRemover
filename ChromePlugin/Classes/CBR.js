export class CBR {

    constructor() {

    }
    extractClickBaitText(imgId) {
        let event = new Event('imageRead');
        OCRAD(document.getElementById(imgId), function (text) {
            return
        });
    }
    loadPotentialCollection() {
        let collectionPromise = new Promise((resolve, reject) => {
            window.setTimeout(() => {
                resolve(document.getElementsByClassName('test-artifact'))
            });
        })
        return collectionPromise;
    }

    extractTextModelAsync(images = []) {
        let promiseCollection = [];
        for (let i = 0; i < images.length; i++) {
            promiseCollection.push(new Promise((resolve, reject) => {
                OCRAD(images.item(i), function (text) {
                    resolve(text);
                });
            }));
        }
        return promiseCollection;
    }
}