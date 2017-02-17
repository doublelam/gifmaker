import { canvasDom, ctx } from './domelements/domeles';
import { EnDrawable } from './modules/endrawable';
import { ResizeWindow } from './modules/resize-window';
import { DomEvents } from './modules/dom-events';
import { $watch } from './modules/watch';
import { drawBackground } from './modules/draw-background';

export class AppLaunch {
    /**
     * 主方法 用于运行
     */
    static main() {
        const resizeCanvas = new ResizeWindow();
        const endrawAble = new EnDrawable(canvasDom, ctx);
        const domEvents = new DomEvents();
        drawBackground.run();
        endrawAble.setEnable();
        domEvents.run();

    }
}

AppLaunch.main();