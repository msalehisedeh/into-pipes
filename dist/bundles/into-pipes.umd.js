(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['into-pipes'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var MaskPipe = /** @class */ (function () {
    function MaskPipe() {
    }
    MaskPipe.prototype.transform = function (item) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var visibleDigits = (args && args.length) ? args[0] : 4;
        var maskWith = args.length > 1 ? args[1] : '*';
        var maskedSection = item ? item.slice(0, -visibleDigits) : "";
        var visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    };
    return MaskPipe;
}());
MaskPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'mask' },] },
];
MaskPipe.ctorParameters = function () { return []; };
var MapPipe = /** @class */ (function () {
    function MapPipe() {
    }
    MapPipe.prototype.transform = function (item) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var mapping = (args && args.length) ? args[0].split('/') : [];
        var result = item;
        mapping.map(function (key) {
            if (key.indexOf(item) === 0) {
                result = key.split(';')[1];
            }
        });
        return result;
    };
    return MapPipe;
}());
MapPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'map' },] },
];
MapPipe.ctorParameters = function () { return []; };
var LinkPipe = /** @class */ (function () {
    function LinkPipe() {
    }
    LinkPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var target = (args && args.length) ? args[0] : "";
        var title = (args && args.length > 1) ? args[1] : "";
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
    };
    return LinkPipe;
}());
LinkPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'link' },] },
];
LinkPipe.ctorParameters = function () { return []; };
var ImagePipe = /** @class */ (function () {
    function ImagePipe() {
    }
    ImagePipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var width = (args && args.length) ? "width: " + args[0] + ";" : "";
        var height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        var alt = (args && args.length > 2) ? args[2] : "";
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
    };
    return ImagePipe;
}());
ImagePipe.decorators = [
    { type: core.Pipe, args: [{ name: 'image' },] },
];
ImagePipe.ctorParameters = function () { return []; };
var PrependPipe = /** @class */ (function () {
    function PrependPipe() {
    }
    PrependPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return ((args && args.length) ? args[0] : "") + source;
    };
    return PrependPipe;
}());
PrependPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'prepend' },] },
];
PrependPipe.ctorParameters = function () { return []; };
var AppendPipe = /** @class */ (function () {
    function AppendPipe() {
    }
    AppendPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return source + ((args && args.length) ? args[0] : "");
    };
    return AppendPipe;
}());
AppendPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'append' },] },
];
AppendPipe.ctorParameters = function () { return []; };
var WrapPipe = /** @class */ (function () {
    function WrapPipe() {
    }
    WrapPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var pre = (args && args.length) ? args[0] : "";
        var post = pre.length ?
            (args.length > 1 ? args[1] : "") : pre;
        return pre + source + post;
    };
    return WrapPipe;
}());
WrapPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'wrap' },] },
];
WrapPipe.ctorParameters = function () { return []; };
var InToPipe = /** @class */ (function () {
    function InToPipe() {
    }
    InToPipe.prototype.transform = function (content, list) {
        var result = content;
        var args = list.split(":");
        switch (args[0]) {
            case "currency":
                result = new common.CurrencyPipe(args.length > 1 ? args[1] : "en_US").transform(content);
                break;
            case "append":
                result = new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "prepend":
                result = new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "wrap":
                result = new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
                break;
            case "number":
                if (args.length > 2) {
                    result = new common.DecimalPipe(args[1]).transform(content, args[2]);
                }
                else {
                    result = new common.DecimalPipe(args.length > 1 ? args[1] : "en_US").transform(content);
                }
                break;
            case "date":
                if (args.length > 2) {
                    result = new common.DatePipe(args[1]).transform(content, args[2]);
                }
                else {
                    result = new common.DatePipe("en_US").transform(content, args[1]);
                }
                break;
            case "json":
                result = new common.JsonPipe().transform(content);
                break;
            case "slice":
                if (args.length > 2) {
                    result = new common.SlicePipe().transform(content, parseInt(args[1], 10), parseInt(args[2], 10));
                }
                else {
                    result = new common.SlicePipe().transform(content, parseInt(args[1], 10));
                }
                break;
            case "uppercase":
                result = new common.UpperCasePipe().transform(content);
                break;
            case "lowercase":
                result = new common.LowerCasePipe().transform(content);
                break;
            case "mask":
                if (args.length > 2) {
                    result = new MaskPipe().transform(content, parseInt(args[1], 10), args[2]);
                }
                else if (args.length > 1) {
                    result = new MaskPipe().transform(content, args[1]);
                }
                else {
                    result = new MaskPipe().transform(content);
                }
                break;
            case "map":
                result = new MapPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "link":
                if (args.length > 2) {
                    result = new LinkPipe().transform(content, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = new LinkPipe().transform(content, "", args[1]);
                }
                else {
                    var q = content.indexOf("?");
                    var t = q < 0 ? content : content.substring(0, q);
                    var d = t.lastIndexOf("/");
                    var p = d < 0 ? t : t.substring(d + 1);
                    result = new LinkPipe().transform(content, "", p);
                }
                break;
            case "image":
                if (args.length > 3) {
                    result = new ImagePipe().transform(content, args[1], args[2], args[3]);
                }
                else if (args.length > 2) {
                    result = new ImagePipe().transform(content, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = new ImagePipe().transform(content, args[1]);
                }
                else {
                    var q = content.indexOf("?");
                    var t = q < 0 ? content : content.substring(0, q);
                    var d = t.lastIndexOf("/");
                    var p = d < 0 ? t : t.substring(d + 1);
                    result = new ImagePipe().transform(content, p);
                }
                break;
        }
        return result;
    };
    return InToPipe;
}());
InToPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'into' },] },
];
InToPipe.ctorParameters = function () { return []; };
var IntoPipeModule = /** @class */ (function () {
    function IntoPipeModule() {
    }
    return IntoPipeModule;
}());
IntoPipeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    InToPipe,
                    ImagePipe,
                    LinkPipe,
                    MaskPipe,
                    MapPipe,
                    PrependPipe,
                    AppendPipe,
                    WrapPipe
                ],
                exports: [
                    InToPipe,
                    ImagePipe,
                    LinkPipe,
                    MaskPipe,
                    MapPipe,
                    PrependPipe,
                    AppendPipe,
                    WrapPipe
                ],
                entryComponents: [],
                providers: [
                    InToPipe,
                    common.DatePipe,
                    common.CurrencyPipe,
                    common.DecimalPipe,
                    common.JsonPipe,
                    common.SlicePipe,
                    common.UpperCasePipe,
                    common.LowerCasePipe,
                    ImagePipe,
                    LinkPipe,
                    MaskPipe,
                    MapPipe,
                    PrependPipe,
                    AppendPipe,
                    WrapPipe
                ],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
            },] },
];
IntoPipeModule.ctorParameters = function () { return []; };

exports.InToPipe = InToPipe;
exports.MaskPipe = MaskPipe;
exports.MapPipe = MapPipe;
exports.LinkPipe = LinkPipe;
exports.ImagePipe = ImagePipe;
exports.PrependPipe = PrependPipe;
exports.AppendPipe = AppendPipe;
exports.WrapPipe = WrapPipe;
exports.IntoPipeModule = IntoPipeModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=into-pipes.umd.js.map
