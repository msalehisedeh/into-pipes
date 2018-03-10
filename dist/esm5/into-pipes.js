import { Pipe, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe, CommonModule } from '@angular/common';

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
    { type: Pipe, args: [{ name: 'mask' },] },
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
    { type: Pipe, args: [{ name: 'map' },] },
];
MapPipe.ctorParameters = function () { return []; };
var ValueOfPipe = /** @class */ (function () {
    function ValueOfPipe() {
    }
    ValueOfPipe.prototype.transform = function (object) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return object[args[0]];
    };
    return ValueOfPipe;
}());
ValueOfPipe.decorators = [
    { type: Pipe, args: [{ name: 'valueof' },] },
];
ValueOfPipe.ctorParameters = function () { return []; };
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
    { type: Pipe, args: [{ name: 'link' },] },
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
    { type: Pipe, args: [{ name: 'image' },] },
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
    { type: Pipe, args: [{ name: 'prepend' },] },
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
    { type: Pipe, args: [{ name: 'append' },] },
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
    { type: Pipe, args: [{ name: 'wrap' },] },
];
WrapPipe.ctorParameters = function () { return []; };
var EmailPipe = /** @class */ (function () {
    function EmailPipe() {
    }
    EmailPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
    };
    return EmailPipe;
}());
EmailPipe.decorators = [
    { type: Pipe, args: [{ name: 'email' },] },
];
EmailPipe.ctorParameters = function () { return []; };
var RatingPipe = /** @class */ (function () {
    function RatingPipe() {
    }
    RatingPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var value = parseInt(source, 10);
        var float = parseFloat(source);
        var x = "<span class='rating'>";
        for (var i = 0; i < value; i++) {
            x += "<span class='fa fa-star' aria-hidden='true'></span>";
        }
        if (float !== value) {
            x += "<span class='fa fa-star-half' aria-hidden='true'></span>";
        }
        x += "</span><span class='rate-value'>" + source + "</span>";
        return x;
    };
    return RatingPipe;
}());
RatingPipe.decorators = [
    { type: Pipe, args: [{ name: 'raiting' },] },
];
RatingPipe.ctorParameters = function () { return []; };
var AddressPipe = /** @class */ (function () {
    function AddressPipe() {
    }
    AddressPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var url = "https://maps.google.com/?q=" +
            source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
        url = url.replace("\\s+", "+");
        return "<span class='address'><span>" + source.street + ", " + source.suite + "</span>" +
            "<span> " + source.city + ", " + source.zipcode + "</span>" +
            "</span> <a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</a>";
    };
    return AddressPipe;
}());
AddressPipe.decorators = [
    { type: Pipe, args: [{ name: 'address' },] },
];
AddressPipe.ctorParameters = function () { return []; };
var FontPipe = /** @class */ (function () {
    function FontPipe() {
    }
    FontPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var font = args.length ? "<span class=\'" + args[0] + "\' aria-hidden='true'></span>" : "";
        var location = args.length > 1 ? args[1] : "";
        var action = args.length > 2 ? args[2].toLowerCase() : "";
        var content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
    };
    return FontPipe;
}());
FontPipe.decorators = [
    { type: Pipe, args: [{ name: 'email' },] },
];
FontPipe.ctorParameters = function () { return []; };
var InToPipe = /** @class */ (function () {
    function InToPipe() {
    }
    InToPipe.prototype.transform = function (content, list) {
        var _this = this;
        var result = content;
        list.split("|").map(function (item) {
            result = _this._transform(result, _this.split(item));
        });
        return result;
    };
    InToPipe.prototype.split = function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    InToPipe.prototype._transform = function (content, args) {
        var result = content;
        switch (args[0]) {
            case "currency":
                result = new CurrencyPipe(args.length > 1 ? args[1] : "en_US").transform(content);
                break;
            case "append":
                result = new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "prepend":
                result = new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "font":
                result = new FontPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
                break;
            case "wrap":
                result = new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
                break;
            case "email":
                result = new EmailPipe().transform(content, "");
                break;
            case "address":
                result = new AddressPipe().transform(content, "");
                break;
            case "rating":
                result = new RatingPipe().transform(content, "");
                break;
            case "number":
                if (args.length > 2) {
                    result = new DecimalPipe(args[1]).transform(content, args[2]);
                }
                else {
                    result = new DecimalPipe(args.length > 1 ? args[1] : "en_US").transform(content);
                }
                break;
            case "date":
                if (args.length > 2) {
                    result = new DatePipe(args[1]).transform(content, args[2]);
                }
                else {
                    result = new DatePipe("en_US").transform(content, args[1]);
                }
                break;
            case "json":
                result = new JsonPipe().transform(content);
                break;
            case "slice":
                if (args.length > 2) {
                    result = new SlicePipe().transform(content, parseInt(args[1], 10), parseInt(args[2], 10));
                }
                else {
                    result = new SlicePipe().transform(content, parseInt(args[1], 10));
                }
                break;
            case "uppercase":
                result = new UpperCasePipe().transform(content);
                break;
            case "lowercase":
                result = new LowerCasePipe().transform(content);
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
            case "valueof":
                result = new ValueOfPipe().transform(content, args.length > 1 ? args[1] : "");
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
    { type: Pipe, args: [{ name: 'into' },] },
];
InToPipe.ctorParameters = function () { return []; };
var IntoPipeModule = /** @class */ (function () {
    function IntoPipeModule() {
    }
    return IntoPipeModule;
}());
IntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    InToPipe,
                    ImagePipe,
                    LinkPipe,
                    MaskPipe,
                    MapPipe,
                    PrependPipe,
                    AppendPipe,
                    WrapPipe,
                    ValueOfPipe,
                    EmailPipe,
                    RatingPipe,
                    FontPipe,
                    AddressPipe
                ],
                exports: [
                    InToPipe,
                    ImagePipe,
                    LinkPipe,
                    MaskPipe,
                    MapPipe,
                    PrependPipe,
                    AppendPipe,
                    WrapPipe,
                    ValueOfPipe,
                    EmailPipe,
                    RatingPipe,
                    FontPipe,
                    AddressPipe
                ],
                entryComponents: [],
                providers: [
                    InToPipe,
                    DatePipe,
                    CurrencyPipe,
                    DecimalPipe,
                    JsonPipe,
                    SlicePipe,
                    UpperCasePipe,
                    LowerCasePipe,
                    ImagePipe,
                    LinkPipe,
                    MaskPipe,
                    MapPipe,
                    PrependPipe,
                    AppendPipe,
                    EmailPipe,
                    RatingPipe,
                    AddressPipe,
                    FontPipe,
                    WrapPipe,
                    ValueOfPipe
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] },
];
IntoPipeModule.ctorParameters = function () { return []; };

export { InToPipe, MaskPipe, MapPipe, LinkPipe, ImagePipe, PrependPipe, AppendPipe, WrapPipe, EmailPipe, RatingPipe, AddressPipe, IntoPipeModule, FontPipe as ɵb, ValueOfPipe as ɵa };
//# sourceMappingURL=into-pipes.js.map
