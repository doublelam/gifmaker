"use strict";
var painterstyles_1 = require("./painterstyles");
var EnDrawable = (function () {
    function EnDrawable(canvasDom, ctx) {
        this.canvasDom = canvasDom;
        this.canvasPos = [canvasDom.offsetLeft, canvasDom.offsetTop];
        this.ctx = ctx;
    }
    EnDrawable.prototype.setEnable = function () {
        var _this = this;
        this.canvasDom.ontouchstart = function (eve) {
            var posX = eve.changedTouches[0].clientX - _this.canvasPos[0];
            var posY = eve.changedTouches[0].clientY - _this.canvasPos[1];
            _this.crtMouse = [posX, posY];
            _this.drawStart([posX, posY]);
        };
        this.canvasDom.ontouchmove = function (eve) {
            eve.preventDefault();
            var toX = eve.changedTouches[0].clientX - _this.canvasPos[0];
            var toY = eve.changedTouches[0].clientY - _this.canvasPos[1];
            _this.drawIng([toX, toY]);
        };
        return this;
    };
    EnDrawable.prototype.drawStart = function (pos) {
        this.ctx.beginPath();
        this.ctx.lineWidth = painterstyles_1.painter.painterWidth;
        this.ctx.strokeStyle = painterstyles_1.painter.painterColor;
        this.ctx.moveTo(pos[0], pos[1]);
        console.log('move to', pos);
        return this;
    };
    EnDrawable.prototype.drawIng = function (pos) {
        console.log('ing to ', pos);
        this.ctx.lineTo(pos[0], pos[1]);
        this.ctx.stroke();
        return this;
    };
    return EnDrawable;
}());
exports.EnDrawable = EnDrawable;
