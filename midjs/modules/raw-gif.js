"use strict";
var RawGif = (function () {
    function RawGif() {
        console.log('rawGif obj constructing');
        this.pics = [];
        this.currentPicNum = 0;
    }
    RawGif.prototype.addPicture = function (base64, duration) {
        if (duration === void 0) { duration = 40; }
        this.pics.push({ pic: base64, duration: duration });
    };
    RawGif.prototype.changePicture = function (picNum, base64, duration) {
        if (duration === void 0) { duration = 40; }
        this.pics[picNum].pic = base64;
        this.pics[picNum].duration = duration;
    };
    RawGif.prototype.changeCurrentPic = function (picNum) {
        if (picNum <= this.pics.length && picNum >= 0) {
            this.currentPicNum = picNum;
        }
        return this.currentPicNum;
    };
    RawGif.prototype.nextCurrentPic = function () {
        return this.changeCurrentPic(this.currentPicNum + 1);
    };
    RawGif.prototype.prevCurrentPic = function () {
        return this.changeCurrentPic(this.currentPicNum - 1);
    };
    return RawGif;
}());
exports.RawGif = RawGif;
exports.rawGif = new RawGif();
