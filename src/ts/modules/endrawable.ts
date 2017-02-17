import { painter } from './painterstyles';

export class EnDrawable {
    canvasDom: HTMLCanvasElement;
    crtMouse: number[];
    canvasPos: number[];
    ctx: CanvasRenderingContext2D;
    constructor(canvasDom: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasDom = canvasDom;
        this.canvasPos = [canvasDom.offsetLeft, canvasDom.offsetTop];
        this.ctx = ctx;
    }

    /**
     * 使canvas可绘画
     */
    setEnable(): EnDrawable {
        this.canvasDom.ontouchstart = (eve: TouchEvent) => {
            let posX = eve.changedTouches[0].clientX - this.canvasPos[0];
            let posY = eve.changedTouches[0].clientY - this.canvasPos[1];
            this.crtMouse = [posX, posY];
            this.drawStart([posX, posY]);
        };

        this.canvasDom.ontouchmove = (eve: TouchEvent) => {
            eve.preventDefault();
            let toX = eve.changedTouches[0].clientX - this.canvasPos[0];
            let toY = eve.changedTouches[0].clientY - this.canvasPos[1];
            this.drawIng([toX, toY]);
        };
        return this;
    }

    drawStart(pos: number[]): EnDrawable {
        this.ctx.beginPath();
        this.ctx.lineWidth = painter.painterWidth;
        this.ctx.strokeStyle = painter.painterColor;
        this.ctx.moveTo(pos[0], pos[1]);
        console.log('move to', pos);
        return this;
    }

    drawIng(pos: number[]): EnDrawable {
        console.log('ing to ', pos)
        this.ctx.lineTo(pos[0], pos[1]);
        this.ctx.stroke();
        return this;
    }


}
