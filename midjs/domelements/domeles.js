"use strict";
exports.canvasDom = document.getElementById('canvas');
exports.ctx = exports.canvasDom.getContext('2d');
exports.prevBtn = document.getElementById('prev');
exports.nextBtn = document.getElementById('next');
exports.lineWidthDom = document.getElementById('style');
exports.colorDom = document.getElementById('color');
exports.naviDom = document.getElementById('navigation');
exports.imagesContainer = document.getElementById('back-images-container');
exports.previousImage = document.getElementById('previous-image');
exports.nextImage = document.getElementById('next-image');
exports.previewGIFBtn = document.getElementById('previewBtn');
exports.previewMaskDiv = document.getElementById('preview-section');
exports.previewGIFImg = document.getElementById('gif-image');
