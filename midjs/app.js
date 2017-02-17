"use strict";
var domeles_1 = require("./domelements/domeles");
var endrawable_1 = require("./modules/endrawable");
var resize_window_1 = require("./modules/resize-window");
var dom_events_1 = require("./modules/dom-events");
var draw_background_1 = require("./modules/draw-background");
var AppLaunch = (function () {
    function AppLaunch() {
    }
    AppLaunch.main = function () {
        var resizeCanvas = new resize_window_1.ResizeWindow();
        var endrawAble = new endrawable_1.EnDrawable(domeles_1.canvasDom, domeles_1.ctx);
        var domEvents = new dom_events_1.DomEvents();
        draw_background_1.drawBackground.run();
        endrawAble.setEnable();
        domEvents.run();
    };
    return AppLaunch;
}());
exports.AppLaunch = AppLaunch;
AppLaunch.main();
