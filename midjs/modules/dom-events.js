"use strict";
var domeles_1 = require("../domelements/domeles");
var making_handle_1 = require("./making-handle");
var raw_gif_1 = require("./raw-gif");
var draw_current_1 = require("./draw-current");
var generate_gif_1 = require("./generate-gif");
var DomEvents = (function () {
    function DomEvents() {
    }
    DomEvents.prototype.run = function () {
        this.nextBtnEve(domeles_1.nextBtn);
        this.previousBtnEve(domeles_1.prevBtn);
        this.previewGIF();
    };
    DomEvents.prototype.nextBtnEve = function (nextBtn) {
        nextBtn.onclick = function (e) {
            console.log('next..save pic to obj');
            making_handle_1.MakingHandle.nextEvent();
            console.log('save to obj: ', raw_gif_1.rawGif);
            raw_gif_1.rawGif.nextCurrentPic();
            console.log('current pic: ', raw_gif_1.rawGif.currentPicNum, '\n draw current pic');
            draw_current_1.DrawCurrent.draw(raw_gif_1.rawGif);
        };
    };
    DomEvents.prototype.previousBtnEve = function (prevBtn) {
        prevBtn.onclick = function (e) {
            console.log('next..save pic to obj');
            making_handle_1.MakingHandle.previousEvent();
            console.log('save to obj: ', raw_gif_1.rawGif);
            raw_gif_1.rawGif.prevCurrentPic();
            console.log('current pic: ', raw_gif_1.rawGif.currentPicNum, '\n draw current pic');
            draw_current_1.DrawCurrent.draw(raw_gif_1.rawGif);
        };
    };
    DomEvents.prototype.previewGIF = function () {
        domeles_1.previewGIFBtn.onclick = function (e) {
            domeles_1.previewMaskDiv.style.visibility = 'visible';
            domeles_1.previewMaskDiv.style.opacity = '1';
            generate_gif_1.GenerateGIF.createGIF(raw_gif_1.rawGif, function (blob) {
                var fr = new FileReader();
                fr.readAsDataURL(blob);
                fr.onload = function (data) {
                    domeles_1.previewGIFImg.src = data.target.result;
                };
                console.log();
            });
        };
        domeles_1.previewMaskDiv.onclick = function (e) {
            this.style.opacity = '0';
            this.style.visibility = 'hidden';
            domeles_1.previewGIFImg.src = '';
        };
    };
    return DomEvents;
}());
exports.DomEvents = DomEvents;
