"use strict";
var Watch = (function () {
    function Watch() {
    }
    Watch.prototype.addAttrs = function (obj, attrName, cb) {
        var fakeName = "_fake_" + attrName;
        obj[fakeName] = obj[attrName];
        Object.defineProperty(obj, fakeName, {
            enumerable: false
        });
        Object.defineProperty(obj, attrName, {
            get: function () {
                return obj[fakeName];
            },
            set: function (val) {
                obj[fakeName] = val;
                cb.call(obj, obj);
                return obj[fakeName];
            }
        });
        return this;
    };
    return Watch;
}());
exports.$watch = new Watch().addAttrs;
