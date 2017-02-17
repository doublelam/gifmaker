export const canvasDom: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

export const ctx: CanvasRenderingContext2D = canvasDom.getContext('2d');

export const prevBtn: HTMLElement = document.getElementById('prev');

export const nextBtn: HTMLElement = document.getElementById('next');

export const lineWidthDom: HTMLElement = document.getElementById('style');

export const colorDom: HTMLElement = document.getElementById('color');

export const naviDom: HTMLElement = document.getElementById('navigation');

export const imagesContainer: HTMLElement = document.getElementById('back-images-container');

export const previousImage: HTMLImageElement = <HTMLImageElement>document.getElementById('previous-image');

export const nextImage: HTMLImageElement = <HTMLImageElement>document.getElementById('next-image');

export const previewGIFBtn: HTMLElement = document.getElementById('previewBtn');

export const previewMaskDiv: HTMLElement = document.getElementById('preview-section');

export const previewGIFImg: HTMLImageElement = <HTMLImageElement>document.getElementById('gif-image');
