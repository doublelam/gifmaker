 declare class GIF{
     constructor(opt?: {
         workers?: number,
         quality?: number,
         workerScript?: string,
         background?: string,
         width?: number,
         height?: number,
         transparent?: string,
         dither?: Function,
         debug?: boolean

     })
     addFrame(ele: HTMLCanvasElement | HTMLImageElement | CanvasRenderingContext2D,
      opt?: {delay?: number,copy?: boolean})
     on(event: string, cb: Function)
     render();
 }