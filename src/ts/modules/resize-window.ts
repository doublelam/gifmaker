import { canvasDom, naviDom, imagesContainer } from '../domelements/domeles';
export class ResizeWindow {
    windowSize: { x: number, y: number };
    naviDom: { width: number, height: number }
    constructor() {
        let windowWidth = document.documentElement.clientWidth;
        let windowHeigt = document.documentElement.clientHeight;
        this.windowSize = { x: windowWidth, y: windowHeigt };
        let naviWidth = naviDom.offsetWidth;
        let naviHeight = naviDom.offsetHeight;
        this.naviDom = { width: naviWidth, height: naviHeight }
        this.setCanvasSize();
        this.setImagesContainerSize();
    }

    setCanvasSize() {
        console.time('reset canvas size');
        canvasDom.width = this.windowSize.x;
        canvasDom.height = this.windowSize.y - naviDom.offsetHeight;
        console.timeEnd('reset canvas size');
    }
    
    setImagesContainerSize() {
        imagesContainer.style.width = this.windowSize.x + 'px';
        imagesContainer.style.height = this.windowSize.y - naviDom.offsetHeight + 'px';
    }
}
