export class ImageHandle {

    static getImageBase64(canvasDom: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
        return canvasDom.toDataURL();
    }

    static drawImage(canvasDom: HTMLCanvasElement, ctx: CanvasRenderingContext2D, imageBase64: string) {
        ImageHandle.clearCanvas(canvasDom, ctx);
        let imgEle: HTMLImageElement = new Image();
        imgEle.src = imageBase64;
        ctx.drawImage(imgEle, 0, 0, canvasDom.offsetWidth, canvasDom.offsetHeight);
    }

    static clearCanvas(canvasDom: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, canvasDom.offsetWidth, canvasDom.offsetHeight);
    }

}