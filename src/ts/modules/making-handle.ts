import { canvasDom, ctx } from '../domelements/domeles';
import { ImageHandle } from './image-handle';
import { rawGif } from './raw-gif';

export class MakingHandle {
    static nextEvent() {
        console.log('before next');
        let imgBase64: string = ImageHandle.getImageBase64(canvasDom, ctx);
        if (rawGif.currentPicNum >= rawGif.pics.length) {
            rawGif.addPicture(imgBase64);
        } else {
            rawGif.changePicture(rawGif.currentPicNum, imgBase64);
        }
        ImageHandle.clearCanvas(canvasDom, ctx);
    }

    static previousEvent() {
        let imgBase64: string = ImageHandle.getImageBase64(canvasDom, ctx);
        if (rawGif.currentPicNum >= rawGif.pics.length) {
            rawGif.addPicture(imgBase64);
        } else {
            rawGif.changePicture(rawGif.currentPicNum, imgBase64);
        }
        ImageHandle.clearCanvas(canvasDom, ctx);
    }

}
