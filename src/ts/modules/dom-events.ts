import { prevBtn, nextBtn, canvasDom, ctx, previewGIFBtn, previewMaskDiv, previewGIFImg } from '../domelements/domeles';
import { MakingHandle } from './making-handle';
import { rawGif } from './raw-gif';
import { DrawCurrent } from './draw-current';
import { GenerateGIF } from './generate-gif';

export class DomEvents {

    run() {
        this.nextBtnEve(nextBtn);
        this.previousBtnEve(prevBtn);
        this.previewGIF();
    }

    nextBtnEve(nextBtn: HTMLElement) {
        nextBtn.onclick = function (e) {
            console.log('next..save pic to obj');
            MakingHandle.nextEvent();
            console.log('save to obj: ', rawGif);
            rawGif.nextCurrentPic();
            console.log('current pic: ', rawGif.currentPicNum, '\n draw current pic');
            DrawCurrent.draw(rawGif);
        }
    }

    previousBtnEve(prevBtn: HTMLElement) {
        prevBtn.onclick = function (e) {
            console.log('next..save pic to obj');
            MakingHandle.previousEvent();
            console.log('save to obj: ', rawGif);
            rawGif.prevCurrentPic();
            console.log('current pic: ', rawGif.currentPicNum, '\n draw current pic');
            DrawCurrent.draw(rawGif);
        }
    }

    previewGIF() {
        previewGIFBtn.onclick = function (e) {
            previewMaskDiv.style.visibility = 'visible';
            previewMaskDiv.style.opacity = '1';
            GenerateGIF.createGIF(rawGif, (blob) => {
                const fr = new FileReader();
                fr.readAsDataURL(blob);
                fr.onload = (data) => {
                    previewGIFImg.src = data.target.result;
                }
                console.log();
            });
        }
        previewMaskDiv.onclick = function (e) {
            this.style.opacity = '0';
            this.style.visibility = 'hidden';
            previewGIFImg.src = '';
        }
    }
}
