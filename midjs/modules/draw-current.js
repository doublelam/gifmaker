"use strict";
var image_handle_1 = require("./image-handle");
var domeles_1 = require("../domelements/domeles");
var DrawCurrent = (function () {
    function DrawCurrent() {
    }
    DrawCurrent.draw = function (rawGif) {
        var picInfo = rawGif.pics[rawGif.currentPicNum];
        if (picInfo) {
            image_handle_1.ImageHandle.drawImage(domeles_1.canvasDom, domeles_1.ctx, picInfo.pic);
        }
    };
    return DrawCurrent;
}());
exports.DrawCurrent = DrawCurrent;
