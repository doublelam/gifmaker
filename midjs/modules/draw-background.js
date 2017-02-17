"use strict";
var domeles_1 = require("../domelements/domeles");
var watch_1 = require("./watch");
var raw_gif_1 = require("./raw-gif");
var DrawBackground = (function () {
    function DrawBackground() {
    }
    DrawBackground.prototype.run = function () {
        var _this = this;
        watch_1.$watch(raw_gif_1.rawGif, 'currentPicNum', function (obj) {
            console.log('watch', obj);
            _this.draw(raw_gif_1.rawGif);
        });
    };
    DrawBackground.prototype.draw = function (rawGif) {
        var previouNum = rawGif.currentPicNum - 1;
        var nextNum = rawGif.currentPicNum + 1;
        rawGif.pics[previouNum] && (domeles_1.previousImage.src = rawGif.pics[previouNum].pic);
        rawGif.pics[nextNum] && (domeles_1.nextImage.src = rawGif.pics[nextNum].pic);
    };
    return DrawBackground;
}());
exports.DrawBackground = DrawBackground;
exports.drawBackground = new DrawBackground();
