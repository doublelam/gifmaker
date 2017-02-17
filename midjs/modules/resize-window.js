"use strict";
var domeles_1 = require("../domelements/domeles");
var ResizeWindow = (function () {
    function ResizeWindow() {
        var windowWidth = document.documentElement.clientWidth;
        var windowHeigt = document.documentElement.clientHeight;
        this.windowSize = { x: windowWidth, y: windowHeigt };
        var naviWidth = domeles_1.naviDom.offsetWidth;
        var naviHeight = domeles_1.naviDom.offsetHeight;
        this.naviDom = { width: naviWidth, height: naviHeight };
        this.setCanvasSize();
        this.setImagesContainerSize();
    }
    ResizeWindow.prototype.setCanvasSize = function () {
        console.time('reset canvas size');
        domeles_1.canvasDom.width = this.windowSize.x;
        domeles_1.canvasDom.height = this.windowSize.y - domeles_1.naviDom.offsetHeight;
        console.timeEnd('reset canvas size');
    };
    ResizeWindow.prototype.setImagesContainerSize = function () {
        domeles_1.imagesContainer.style.width = this.windowSize.x + 'px';
        domeles_1.imagesContainer.style.height = this.windowSize.y - domeles_1.naviDom.offsetHeight + 'px';
    };
    return ResizeWindow;
}());
exports.ResizeWindow = ResizeWindow;
