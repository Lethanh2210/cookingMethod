"use strict";
exports.__esModule = true;
exports.Food = void 0;
var Food = /** @class */ (function () {
    function Food(name, number) {
        var _a;
        var elements = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            elements[_i - 2] = arguments[_i];
        }
        this.elements = [];
        (_a = this.elements).push.apply(_a, elements);
        this.name = name;
        this.number = number;
    }
    return Food;
}());
exports.Food = Food;
var sscn = new Food('sscn', 2, 'cam', 'xa', 'chanh');
console.log(sscn.elements);
