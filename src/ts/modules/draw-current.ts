import { ImageHandle } from './image-handle';
import { RawGif } from './raw-gif';
import { canvasDom, ctx } from '../domelements/domeles';

export class DrawCurrent {
    static draw(rawGif: RawGif) {
        let picInfo = rawGif.pics[rawGif.currentPicNum];
        if (picInfo) {
            ImageHandle.drawImage(canvasDom, ctx, picInfo.pic);
        }
    }
}