"use strict";
var domeles_1 = require("../domelements/domeles");
var PainterStyles = (function () {
    function PainterStyles() {
        this.painterColor = '#AAAAAA';
        this.painterWidth = 1;
        this.changeColor();
        this.changeWidth();
    }
    PainterStyles.prototype.changeColor = function () {
        var _this = this;
        domeles_1.colorDom.onclick = function (e) {
            var color = e.target;
            if (color.getAttribute('val')) {
                _this.painterColor = color.getAttribute('val');
                console.log(_this.painterColor);
            }
        };
    };
    PainterStyles.prototype.changeWidth = function () {
        var _this = this;
        domeles_1.lineWidthDom.onclick = function (e) {
            var lineWidth = e.target;
            if (lineWidth.getAttribute('val')) {
                _this.painterWidth = Number(lineWidth.getAttribute('val'));
                console.log(_this.painterWidth);
            }
        };
    };
    return PainterStyles;
}());
exports.painter = new PainterStyles();
