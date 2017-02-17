"use strict";
var domeles_1 = require("../domelements/domeles");
var GenerateGIF = (function () {
    function GenerateGIF() {
    }
    GenerateGIF.createGIF = function (rawGif, cb) {
        var sampleImg = new Image();
        sampleImg.src = rawGif.pics[0].pic;
        var picsWidth = sampleImg.naturalWidth;
        var picsHeight = sampleImg.naturalHeight;
        domeles_1.previewGIFImg.width = picsWidth;
        domeles_1.previewGIFImg.height = picsHeight;
        var fr = new FileReader();
        var gif = new GIF({
            workers: 2,
            quality: 10,
            width: picsWidth,
            height: picsHeight,
            workerScript: './dest/js/dist/gif.worker.js'
        });
        for (var _i = 0, _a = rawGif.pics; _i < _a.length; _i++) {
            var item = _a[_i];
            var imgObj = new Image();
            imgObj.src = item.pic;
            console.log(item.pic, imgObj.naturalWidth, imgObj.naturalHeight);
            gif.addFrame(imgObj, { delay: item.duration });
        }
        gif.on('finished', function (blob) {
            cb(blob);
        });
        gif.render();
    };
    return GenerateGIF;
}());
exports.GenerateGIF = GenerateGIF;
