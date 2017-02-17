import { canvasDom } from '../domelements/domeles';
export class RawGif {
    currentPicNum: number;
    picsWidth: number;
    picsHeight: number;
    pics: Array<{ pic: string, duration: number }>;
    constructor() {
        console.log('rawGif obj constructing');
        this.pics = [];
        this.currentPicNum = 0;
    }
    addPicture(base64: string, duration: number = 40) {
        this.pics.push({ pic: base64, duration: duration });
    }

    changePicture(picNum: number, base64: string, duration: number = 40) {
        this.pics[picNum].pic = base64;
        this.pics[picNum].duration = duration;
    }


    changeCurrentPic(picNum: number): number {
        if (picNum <= this.pics.length && picNum >= 0) {
            this.currentPicNum = picNum;
        }
        return this.currentPicNum;
    }

    nextCurrentPic(): number {
        return this.changeCurrentPic(this.currentPicNum + 1);
    }

    prevCurrentPic(): number {
        return this.changeCurrentPic(this.currentPicNum - 1);
    }


}

export const rawGif = new RawGif();
