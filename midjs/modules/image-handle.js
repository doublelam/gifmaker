"use strict";
var ImageHandle = (function () {
    function ImageHandle() {
    }
    ImageHandle.getImageBase64 = function (canvasDom, ctx) {
        return canvasDom.toDataURL();
    };
    ImageHandle.drawImage = function (canvasDom, ctx, imageBase64) {
        ImageHandle.clearCanvas(canvasDom, ctx);
        var imgEle = new Image();
        imgEle.src = imageBase64;
        ctx.drawImage(imgEle, 0, 0, canvasDom.offsetWidth, canvasDom.offsetHeight);
    };
    ImageHandle.clearCanvas = function (canvasDom, ctx) {
        ctx.clearRect(0, 0, canvasDom.offsetWidth, canvasDom.offsetHeight);
    };
    return ImageHandle;
}());
exports.ImageHandle = ImageHandle;
