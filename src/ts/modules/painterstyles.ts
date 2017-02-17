import { colorDom, lineWidthDom } from '../domelements/domeles';

class PainterStyles {
    painterWidth: number;
    painterColor: string;

    constructor() {
        this.painterColor = '#AAAAAA';
        this.painterWidth = 1;
        this.changeColor();
        this.changeWidth();
    }

    changeColor() {
        colorDom.onclick = (e) => {
            let color: HTMLElement = <HTMLElement>e.target;
            if (color.getAttribute('val')) {
                this.painterColor = color.getAttribute('val');
                console.log(this.painterColor)
            }
        }
    }

    changeWidth() {
        lineWidthDom.onclick = (e) => {
            let lineWidth: HTMLElement = <HTMLElement>e.target;
            if (lineWidth.getAttribute('val')) {
                this.painterWidth = Number(lineWidth.getAttribute('val'));
                console.log(this.painterWidth)
            }
        }
    }


}

export const painter = new PainterStyles();
