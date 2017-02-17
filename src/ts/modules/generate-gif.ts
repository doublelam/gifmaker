/// <reference path="../interfaces/igif.ts" />

import { RawGif } from './raw-gif';
import { previewGIFImg } from '../domelements/domeles';
export class GenerateGIF {
    static createGIF(rawGif: RawGif, cb: Function){
        let sampleImg = new Image();
        sampleImg.src = rawGif.pics[0].pic; 
        let picsWidth = sampleImg.naturalWidth;
        let picsHeight = sampleImg.naturalHeight;
        previewGIFImg.width = picsWidth;
        previewGIFImg.height = picsHeight;
        const fr = new FileReader();
        const gif = new GIF({
            workers: 2,
            quality: 10,
            width: picsWidth,
            height: picsHeight,
            workerScript: './dest/js/dist/gif.worker.js'
        });
        for (let item of rawGif.pics) {
            let imgObj = new Image();
            imgObj.src = item.pic;
            console.log(item.pic,imgObj.naturalWidth,imgObj.naturalHeight)
            gif.addFrame(imgObj, {delay: item.duration});
        }
        gif.on('finished', (blob) => {
            cb(blob);
        });
        gif.render();
    }
}