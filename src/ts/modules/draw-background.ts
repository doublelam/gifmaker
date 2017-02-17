import { previousImage, nextImage } from '../domelements/domeles';
import { $watch } from './watch';
import { rawGif, RawGif } from './raw-gif';
export class DrawBackground {
    run() {
        $watch(rawGif, 'currentPicNum', (obj: RawGif) => {
            console.log('watch',obj);
            this.draw(rawGif);
        });
    }

    draw(rawGif: RawGif) {
        let previouNum = rawGif.currentPicNum - 1;
        let nextNum = rawGif.currentPicNum + 1;
        rawGif.pics[previouNum] && (previousImage.src = rawGif.pics[previouNum].pic);
        rawGif.pics[nextNum] && (nextImage.src = rawGif.pics[nextNum].pic);
    }
}
export let drawBackground = new DrawBackground();