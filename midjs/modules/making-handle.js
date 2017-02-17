"use strict";
var domeles_1 = require("../domelements/domeles");
var image_handle_1 = require("./image-handle");
var raw_gif_1 = require("./raw-gif");
var MakingHandle = (function () {
    function MakingHandle() {
    }
    MakingHandle.nextEvent = function () {
        console.log('before next');
        var imgBase64 = image_handle_1.ImageHandle.getImageBase64(domeles_1.canvasDom, domeles_1.ctx);
        if (raw_gif_1.rawGif.currentPicNum >= raw_gif_1.rawGif.pics.length) {
            raw_gif_1.rawGif.addPicture(imgBase64);
        }
        else {
            raw_gif_1.rawGif.changePicture(raw_gif_1.rawGif.currentPicNum, imgBase64);
        }
        image_handle_1.ImageHandle.clearCanvas(domeles_1.canvasDom, domeles_1.ctx);
    };
    MakingHandle.previousEvent = function () {
        var imgBase64 = image_handle_1.ImageHandle.getImageBase64(domeles_1.canvasDom, domeles_1.ctx);
        if (raw_gif_1.rawGif.currentPicNum >= raw_gif_1.rawGif.pics.length) {
            raw_gif_1.rawGif.addPicture(imgBase64);
        }
        else {
            raw_gif_1.rawGif.changePicture(raw_gif_1.rawGif.currentPicNum, imgBase64);
        }
        image_handle_1.ImageHandle.clearCanvas(domeles_1.canvasDom, domeles_1.ctx);
    };
    return MakingHandle;
}());
exports.MakingHandle = MakingHandle;
