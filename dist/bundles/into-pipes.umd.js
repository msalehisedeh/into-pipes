(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
	(factory((global['into-pipes'] = {}),global.ng.core,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,core,common,platformBrowser) { 'use strict';

var MaskPipe = /** @class */ (function () {
    function MaskPipe() {
    }
    MaskPipe.prototype.maskString = function (item, visibleDigits, maskWith) {
        var maskedSection = item ? item.slice(0, -visibleDigits) : "";
        var visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    };
    MaskPipe.prototype.maskArray = function (items, visibleDigits, maskWith) {
        var _this = this;
        var result = [];
        items.map(function (item) {
            result.push(_this.maskString(item, visibleDigits, maskWith));
        });
        return result;
    };
    MaskPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var visibleDigits = (args && args.length) ? args[0] : 4;
        var maskWith = args.length > 1 ? args[1] : '*';
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.maskString(source, visibleDigits, maskWith);
        }
        return this.maskArray(source, visibleDigits, maskWith);
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
    MapPipe.prototype.valuesFor = function (list, map) {
        var result = [];
        list.map(function (key) {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    };
    MapPipe.prototype.geMapping = function (mapping) {
        if (mapping.trim) {
            var map_1 = {};
            mapping.split('/').map(function (key) {
                var x = key.split(';');
                map_1[x[0]] = x[1];
            });
            mapping = map_1;
        }
        return mapping;
    };
    MapPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    };
    return MapPipe;
}());
MapPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'map' },] },
];
MapPipe.ctorParameters = function () { return []; };
var ValueOfPipe = /** @class */ (function () {
    function ValueOfPipe() {
    }
    ValueOfPipe.prototype.valueOfSingle = function (source, key) {
        return source[key];
    };
    ValueOfPipe.prototype.valueOfMultiple = function (sources, key) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.valueOfSingle(source, key));
        });
        return result;
    };
    ValueOfPipe.prototype.transform = function (object) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof object === "string") || !(object instanceof Array)) {
            return this.valueOfSingle(object, args[0]);
        }
        return this.valueOfMultiple(object, args[0]);
    };
    return ValueOfPipe;
}());
ValueOfPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'valueof' },] },
];
ValueOfPipe.ctorParameters = function () { return []; };
var LinkPipe = /** @class */ (function () {
    function LinkPipe() {
    }
    LinkPipe.prototype.stringToLink = function (source, target, title) {
        if (!title || !title.length) {
            var q = source.indexOf("?");
            var t = q < 0 ? source : source.substring(0, q);
            var d = t.lastIndexOf("/");
            title = d < 0 ? t : t.substring(d + 1);
        }
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
    };
    LinkPipe.prototype.arrayToImagLink = function (sources, target, title) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToLink(source, target, ""));
        });
        return result;
    };
    LinkPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var target = (args && args.length) ? args[0] : "";
        var title = (args && args.length > 1) ? args[1] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
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
    ImagePipe.prototype.stringToImage = function (source, width, height, alt) {
        if (!alt || !alt.length) {
            var q = source.indexOf("?");
            var t = q < 0 ? source : source.substring(0, q);
            var d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
    };
    ImagePipe.prototype.arrayToImage = function (sources, width, height, alt) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToImage(source, width, height, alt));
        });
        return result;
    };
    ImagePipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var width = (args && args.length) ? "width: " + args[0] + ";" : "";
        var height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        var alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");
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
        var key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return key + source;
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(key + item);
            });
            return result_1;
        }
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
        var key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        }
        else {
            var result_2 = [];
            source.map(function (item) {
                result_2.push(item + key);
            });
            return result_2;
        }
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
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        }
        else {
            var result_3 = [];
            source.map(function (item) {
                result_3.push(pre + item + post);
            });
            return result_3;
        }
    };
    return WrapPipe;
}());
WrapPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'wrap' },] },
];
WrapPipe.ctorParameters = function () { return []; };
var EmailPipe = /** @class */ (function () {
    function EmailPipe() {
    }
    EmailPipe.prototype.emailFromString = function (source) {
        return "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
    };
    EmailPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source);
        }
        else {
            var result_4 = [];
            source.map(function (item) {
                result_4.push(_this.emailFromString(item));
            });
            return result_4;
        }
    };
    return EmailPipe;
}());
EmailPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'email' },] },
];
EmailPipe.ctorParameters = function () { return []; };
var RatingPipe = /** @class */ (function () {
    function RatingPipe() {
    }
    RatingPipe.prototype.rateString = function (source) {
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
    RatingPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source);
        }
        else {
            var result_5 = [];
            source.map(function (item) {
                result_5.push(_this.rateString(item));
            });
            return result_5;
        }
    };
    return RatingPipe;
}());
RatingPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'raiting' },] },
];
RatingPipe.ctorParameters = function () { return []; };
var AddressPipe = /** @class */ (function () {
    function AddressPipe() {
    }
    AddressPipe.prototype.addressFromString = function (source) {
        var url = "https://maps.google.com/?q=" +
            source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
        url = url.replace("\\s+", "+");
        return "<span class='address'><span>" + source.street + ", " + source.suite + "</span>" +
            "<span> " + source.city + ", " + source.zipcode + "</span>" +
            "</span> <a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</span></a>";
    };
    AddressPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source);
        }
        else {
            var result_6 = [];
            source.map(function (item) {
                result_6.push(_this.addressFromString(item));
            });
            return result_6;
        }
    };
    return AddressPipe;
}());
AddressPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'address' },] },
];
AddressPipe.ctorParameters = function () { return []; };
var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source.join(args[0]);
        }
        else {
            var result_7 = [];
            Object.keys(source).map(function (key) {
                result_7.push(source[key]);
            });
            return result_7.join(args[0]);
        }
    };
    return JoinPipe;
}());
JoinPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'join' },] },
];
JoinPipe.ctorParameters = function () { return []; };
var FontPipe = /** @class */ (function () {
    function FontPipe() {
    }
    FontPipe.prototype.fontFromString = function (font, location, action, content) {
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
    };
    FontPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var font = args.length ? "<span class=\'" + args[0] + "\' aria-hidden='true'></span>" : "";
        var location = args.length > 1 ? args[1] : "";
        var action = args.length > 2 ? args[2].toLowerCase() : "";
        var content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        }
        else {
            var result_8 = [];
            source.map(function (item) {
                result_8.push(_this.fontFromString(font, location, action, item));
            });
            return result_8;
        }
    };
    return FontPipe;
}());
FontPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'email' },] },
];
FontPipe.ctorParameters = function () { return []; };
var ConditionalPipe = /** @class */ (function () {
    function ConditionalPipe() {
    }
    ConditionalPipe.prototype.conditionFromString = function (content, acondition, value, action, altAction) {
        var result = "";
        switch (acondition) {
            case "=":
                result = content === value ? action : altAction;
                break;
            case "!=":
                result = content !== value ? action : altAction;
                break;
            case ">":
                result = content > value ? action : altAction;
                break;
            case ">=":
                result = content >= value ? action : altAction;
                break;
            case "<":
                result = content < value ? action : altAction;
                break;
            case "<=":
                result = content <= value ? action : altAction;
                break;
            case "~":
                result = content !== undefined && content !== null && content !== "null" ? action : altAction;
                break;
            case "!~":
                result = content === undefined || content === null || content === "null" ? action : altAction;
                break;
            case "~=":
                result = content && value && String(content).toLowerCase() === String(value).toLowerCase() ? action : altAction;
                break;
            case "in":
                result = content ? content.indexOf(action) : altAction;
                break;
        }
        return result;
    };
    ConditionalPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var acondition = args.length ? args[0] : "";
        var value = args.length > 1 ? args[1] : "";
        var action = args.length > 2 ? args[2] : "";
        var altAction = args.length > 3 ? args[3] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        }
        else {
            var result_9 = {};
            source.map(function (item) {
                result_9[item] = _this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result_9;
        }
    };
    return ConditionalPipe;
}());
ConditionalPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'if' },] },
];
ConditionalPipe.ctorParameters = function () { return []; };
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
            case "slice":
                var start_1 = parseInt(args[1], 10);
                var end_1 = undefined;
                if (args.length > 2) {
                    end_1 = parseInt(args[2], 10);
                }
                var slicer_1 = new common.SlicePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = end_1 ? slicer_1.transform(content, start_1, end_1) : slicer_1.transform(content, start_1);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(end_1 ? slicer_1.transform(cnt, start_1, end_1) : slicer_1.transform(cnt, start_1));
                    });
                }
                break;
            case "number":
                var numLocal = "en_US";
                var numDecimal_1 = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal_1 = args[2];
                }
                var decimaler_1 = new common.DecimalPipe(numLocal);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = numDecimal_1 ? decimaler_1.transform(content, numDecimal_1) : decimaler_1.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(numDecimal_1 ? decimaler_1.transform(cnt, numDecimal_1) : decimaler_1.transform(cnt));
                    });
                }
                break;
            case "if":
                var acondition = args.length > 1 ? args[1] : "";
                var value = args.length > 2 ? args[2] : "";
                var action = args.length > 3 ? args[3] : "";
                var altAction = args.length > 4 ? args[4] : "";
                result = new ConditionalPipe().transform(content, acondition, value, action, altAction);
                if (typeof result === "string") {
                    result = result[0] === '"' ? result.substring(1, result.length - 1) : result;
                    result = this._transform(content, this.split(result));
                }
                break;
            case "font":
                result = new FontPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
                break;
            case "currency":
                var cp_1 = new common.CurrencyPipe(args.length > 1 ? args[1] : "en_US");
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = cp_1.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(cp_1.transform(cnt));
                    });
                }
                break;
            case "wrap":
                result = new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
                break;
            case "append":
                result = new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "prepend":
                result = new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
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
            case "map":
                result = new MapPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "date":
                var dateLocal = "en_US";
                var dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                var dater_1 = new common.DatePipe(dateLocal);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = dater_1.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(dater_1.transform(cnt));
                    });
                }
                break;
            case "json":
                var jcp_1 = new common.JsonPipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = jcp_1.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(jcp_1.transform(cnt));
                    });
                }
                break;
            case "join":
                result = new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "uppercase":
                var ucp_1 = new common.UpperCasePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = ucp_1.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(ucp_1.transform(cnt));
                    });
                }
                break;
            case "lowercase":
                var lcp_1 = new common.LowerCasePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = lcp_1.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(lcp_1.transform(cnt));
                    });
                }
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
                    result = new LinkPipe().transform(content, "", "");
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
                    result = new ImagePipe().transform(content, "");
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
var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    return SanitizeHtmlPipe;
}());
SanitizeHtmlPipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'sanitizeHtml'
            },] },
];
SanitizeHtmlPipe.ctorParameters = function () { return [
    { type: platformBrowser.DomSanitizer, },
]; };
var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.transform = function (source, args) {
        this.source = source;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        var x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
        this.url = x.replace("\\s+", "+");
    };
    return AddressComponent;
}());
AddressComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'address-component',
                template: "\n    <span class=\"address\">\n        <span [textContent]=\"addr1\"></span>\n        <span [textContent]=\"addr2\"></span>\n    </span>\n    <a [href]=\"url\" class=\"google-map\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"off-screen\">View in google map</span>\n    </a>\n    ",
                styles: [
                    ".address {\n            display: inline-block;\n            float: left;\n        }\n        .google-map {\n            display: inline-block;\n            float: left;\n        }\n        .fa {\n            color: #f00;\n            margin: 0 3px;\n        }\n        .off-screen {\n            position: absolute;\n            left: -999em;\n        }\n        "
                ]
            },] },
];
AddressComponent.ctorParameters = function () { return []; };
var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.transform = function (source, args) {
        this.source = source;
    };
    return EmailComponent;
}());
EmailComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'email',
                template: "\n    <a [href]=\"'mailto:' + source\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </a>\n    ",
                styles: [
                    ":host {\n        }\n        "
                ]
            },] },
];
EmailComponent.ctorParameters = function () { return []; };
var FontComponent = /** @class */ (function () {
    function FontComponent() {
    }
    FontComponent.prototype.transform = function (source, args) {
        this.source = source;
        this.font = args[0];
        this.location = args.length > 1 ? args[1] : "left";
        var action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    };
    return FontComponent;
}());
FontComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'font-component',
                template: "\n    <span *ngIf=\"location === 'left'\">\n        <span [class]=\"font\" aria-hidden='true'></span>\n        <span [textContent]=\"content\"></span>\n    </span>\n    <span *ngIf=\"location === 'right'\">\n        <span [textContent]=\"content\"></span>\n        <span [class]=\"font\" aria-hidden='true'></span>\n    </span>\n    <span *ngIf=\"location === 'replace'\">\n        <span [class]=\"font\" aria-hidden='true'></span>\n    </span>\n    ",
                styles: [
                    "span span {\n            float: left;\n        }\n        "
                ]
            },] },
];
FontComponent.ctorParameters = function () { return []; };
var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.transform = function (source, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                var q = source.indexOf("?");
                var t = q < 0 ? source : source.substring(0, q);
                var d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    };
    return ImageComponent;
}());
ImageComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'image-component',
                template: "<img [src]=\"source\" [style.width]=\"width\" [style.height]=\"height\" [title]=\"alt\" />",
                styles: [""]
            },] },
];
ImageComponent.ctorParameters = function () { return []; };
var JsonComponent = /** @class */ (function () {
    function JsonComponent() {
    }
    JsonComponent.prototype.transform = function (source, args) {
        this.source = source;
    };
    return JsonComponent;
}());
JsonComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'json-component',
                template: "<span class=\"json-view\" [textContent]=\"source | json\"></span>",
                styles: [
                    ".json-view {\n            display: inline-block;\n            float: left;\n            font-family: monospace;\n            padding: 5px;\n            white-space: pre-wrap;\n            unicode-bidi: embed;\n        }\n        "
                ]
            },] },
];
JsonComponent.ctorParameters = function () { return []; };
var LinkComponent = /** @class */ (function () {
    function LinkComponent() {
    }
    LinkComponent.prototype.transform = function (source, args) {
        this.source = source;
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
        if (!this.title || !this.title.length) {
            var q = source.indexOf("?");
            var t = q < 0 ? source : source.substring(0, q);
            var d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d + 1);
        }
    };
    return LinkComponent;
}());
LinkComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'link-component',
                template: "<a [href]=\"source\" [target]=\"target\" [textContent]=\"title\"></a>",
                styles: [
                    "\n        "
                ]
            },] },
];
LinkComponent.ctorParameters = function () { return []; };
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.value = [];
    }
    RatingComponent.prototype.transform = function (source, args) {
        this.float = parseFloat(source);
        this.source = source;
        var size = parseInt(source, 10);
        for (var i = 0; i < size; i++) {
            this.value.push(i);
        }
    };
    return RatingComponent;
}());
RatingComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'rating-component',
                template: "\n    <span class='rating'>\n        <span class='fa fa-star' aria-hidden='true' *ngFor=\"let x of value\"></span>\n        <span class='fa fa-star-half' aria-hidden='true' *ngIf=\"float !== value\"></span>\n    </span>\n    <span class='rate-value' [textContent]=\"source\"></span>\n    ",
                styles: [
                    ".rating {\n            display: inline-block;\n        }\n        "
                ]
            },] },
];
RatingComponent.ctorParameters = function () { return []; };
var InputComponent = /** @class */ (function () {
    function InputComponent(renderer) {
        this.renderer = renderer;
        this.editName = false;
    }
    InputComponent.prototype.keyup = function (event) {
        var code = event.which;
        if (((code >= 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) ||
            ((code == 32) || (code == 8)) ||
            ((code >= 186) && (code <= 222))) {
            this.source = event.target.value;
        }
    };
    InputComponent.prototype.keydown = function (event) {
        var _this = this;
        var code = event.which;
        if ((code === 13) || (code === 9)) {
            this.renderer.invokeElementMethod(event.target, "click");
            setTimeout(function () {
                if (_this.nameEditor) {
                    _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
                }
            }, 66);
        }
        else if (code === 27) {
            this.editName = false;
        }
    };
    InputComponent.prototype.clickName = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        this.editName = !this.editName;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
        }, 66);
    };
    InputComponent.prototype.transform = function (source, args) {
        this.source = source;
        this.placeholder = args.length ? args[0] : "";
        this.formatting = args.length > 1 ? args[1] : "";
        this.editNameId = String(new Date().getTime());
    };
    return InputComponent;
}());
InputComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'input-component',
                template: "\n    <span *ngIf=\"editName\">\n    <input #nameEditor\n        type='text'\n        [id]=\"editNameId\"\n        [value]=\"source\"\n        [placeholder]=\"placeholder\"\n        (blur)=\"editName = false;\"\n        (keyup)='keyup($event)'>\n    </span>\n    <span *ngIf='!editName && formatting'\n        class='locked'\n        tabindex='0'\n        (keydown)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? (source | into:formatting) : '&nbsp;'\">\n    </span>\n    <span *ngIf='!editName && !formatting'\n        class='locked'\n        tabindex='0'\n        (keydown)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? source : '&nbsp;'\">\n    </span>\n    ",
                styles: [
                    "\n        .locked {\n          display: inline-block;\n          cursor: pointer;\n          min-width: 30px;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n        input{\n          cursor: beam;\n        }\n        "
                ]
            },] },
];
InputComponent.ctorParameters = function () { return [
    { type: core.Renderer, },
]; };
InputComponent.propDecorators = {
    "nameEditor": [{ type: core.ViewChild, args: ["nameEditor",] },],
};
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(renderer) {
        this.renderer = renderer;
    }
    CheckboxComponent.prototype.keyup = function (event) {
        var code = event.which;
        if (code === 13) {
            this.renderer.invokeElementMethod(event.target, "click");
        }
    };
    CheckboxComponent.prototype.transform = function (source, args) {
        this.source = source;
        this.ideal = args.length > 1 ? args[0] : "";
    };
    return CheckboxComponent;
}());
CheckboxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'input-component',
                template: "\n    <input type=\"checkbox\" [value]=\"source\" [checked]=\"source===ideal ? true : null\" (keyup)=\"keyUp($event)\" />\n    ",
                styles: [
                    "\n        "
                ]
            },] },
];
CheckboxComponent.ctorParameters = function () { return [
    { type: core.Renderer, },
]; };
var ComponentPool = /** @class */ (function () {
    function ComponentPool() {
        this.registeredComponents = {};
        this.registerComponent("address", AddressComponent);
        this.registerComponent("email", EmailComponent);
        this.registerComponent("font", FontComponent);
        this.registerComponent("image", ImageComponent);
        this.registerComponent("json", JsonComponent);
        this.registerComponent("link", LinkComponent);
        this.registerComponent("rating", RatingComponent);
        this.registerComponent("input", InputComponent);
        this.registerComponent("checkbox", CheckboxComponent);
    }
    ComponentPool.prototype.registerComponent = function (name, component) {
        this.registeredComponents[name] = component;
    };
    ComponentPool.prototype.registeredComponent = function (name) {
        return this.registeredComponents[name];
    };
    return ComponentPool;
}());
ComponentPool.decorators = [
    { type: core.Injectable },
];
ComponentPool.ctorParameters = function () { return []; };
var IntoDirective = /** @class */ (function () {
    function IntoDirective(el, pool, componentFactoryResolver) {
        this.el = el;
        this.pool = pool;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    IntoDirective.prototype.split = function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    IntoDirective.prototype._transform = function (content, args) {
        var result = content;
        switch (args[0]) {
            case "slice":
                var start_2 = parseInt(args[1], 10);
                var end_2 = undefined;
                if (args.length > 2) {
                    end_2 = parseInt(args[2], 10);
                }
                var slicer_2 = new common.SlicePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = end_2 ? slicer_2.transform(content, start_2, end_2) : slicer_2.transform(content, start_2);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(end_2 ? slicer_2.transform(cnt, start_2, end_2) : slicer_2.transform(cnt, start_2));
                    });
                }
                break;
            case "number":
                var numLocal = "en_US";
                var numDecimal_2 = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal_2 = args[2];
                }
                var decimaler_2 = new common.DecimalPipe(numLocal);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = numDecimal_2 ? decimaler_2.transform(content, numDecimal_2) : decimaler_2.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(numDecimal_2 ? decimaler_2.transform(cnt, numDecimal_2) : decimaler_2.transform(cnt));
                    });
                }
                break;
            case "currency":
                var cp_2 = new common.CurrencyPipe(args.length > 1 ? args[1] : "en_US");
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = cp_2.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(cp_2.transform(cnt));
                    });
                }
                break;
            case "wrap":
                result = new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
                break;
            case "append":
                result = new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "prepend":
                result = new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "map":
                result = new MapPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "date":
                var dateLocal = "en_US";
                var dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                var dater_2 = new common.DatePipe(dateLocal);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = dater_2.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(dater_2.transform(cnt));
                    });
                }
                break;
            case "uppercase":
                var ucp_2 = new common.UpperCasePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = ucp_2.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(ucp_2.transform(cnt));
                    });
                }
                break;
            case "lowercase":
                var lcp_2 = new common.LowerCasePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = lcp_2.transform(content);
                }
                else {
                    result = [];
                    content.map(function (cnt) {
                        result.push(lcp_2.transform(cnt));
                    });
                }
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
            case "valueof":
                result = new ValueOfPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "if":
                var acondition = args.length > 1 ? args[1] : "";
                var value = args.length > 2 ? args[2] : "";
                var action = args.length > 3 ? args[3] : "";
                var altAction = args.length > 4 ? args[4] : "";
                result = new ConditionalPipe().transform(content, acondition, value, action, altAction);
                if (typeof result === "string") {
                    result = result[0] === '"' ? result.substring(1, result.length - 1) : result;
                    result = this._transform(content, this.split(result));
                }
                break;
            case "join":
                result = new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "json":
                result = this.transformComponent("json", content, "");
                break;
            case "font":
                result = this.transformComponent("font", content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
                break;
            case "email":
                result = this.transformComponent("email", content, "");
                break;
            case "address":
                result = this.transformComponent("address", content, "");
                break;
            case "rating":
                result = this.transformComponent("rating", content, "");
                break;
            case "link":
                if (args.length > 2) {
                    result = this.transformComponent("link", content, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = this.transformComponent("link", content, "", args[1]);
                }
                else {
                    result = this.transformComponent("link", content, "", "");
                }
                break;
            case "input":
                result = this.transformComponent("input", content, args[1], args.length > 2 ? args[2] : "");
                break;
            case "image":
                if (args.length > 3) {
                    result = this.transformComponent("image", content, args[1], args[2], args[3]);
                }
                else if (args.length > 2) {
                    result = this.transformComponent("image", content, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = this.transformComponent("image", content, args[1]);
                }
                else {
                    result = this.transformComponent("image", content, "");
                }
                break;
        }
        return result;
    };
    IntoDirective.prototype.transformComponent = function (name, content) {
        var _this = this;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result;
        if (typeof content === "string" || typeof content === "number" || Object.keys(content).length) {
            result = this.registeredComponentFor(name);
            result.transform(content.source ? content.source : content, args);
        }
        else if (content instanceof Array) {
            result = content;
            content.map(function (source) {
                if (typeof source === "string" || typeof content === "number" || Object.keys(content).length) {
                    var sx = _this.registeredComponentFor(name);
                    sx.transform(source.source ? source.source : source, args);
                }
            });
        }
        return result;
    };
    IntoDirective.prototype.registeredComponentFor = function (name) {
        var component = this.pool.registeredComponent(name);
        var componentRef;
        if (component) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            componentRef = this.el.createComponent(componentFactory);
        }
        return ((componentRef.instance));
    };
    IntoDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.into && this.rawContent) {
            var result_10 = this.rawContent;
            this.into.split("|").map(function (item) {
                result_10 = _this._transform(result_10, _this.split(item));
            });
            if (typeof result_10 === "string") {
                this.registeredComponentFor("span").transform(result_10);
            }
            else if (result_10 instanceof Array) {
                result_10.map(function (source) {
                    if (typeof source === "string") {
                        _this.registeredComponentFor("span").transform(source);
                    }
                });
            }
        }
    };
    return IntoDirective;
}());
IntoDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[into]'
            },] },
];
IntoDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: ComponentPool, },
    { type: core.ComponentFactoryResolver, },
]; };
IntoDirective.propDecorators = {
    "rawContent": [{ type: core.Input, args: ["rawContent",] },],
    "into": [{ type: core.Input, args: ["into",] },],
};
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
                    AddressComponent,
                    EmailComponent,
                    FontComponent,
                    ImageComponent,
                    JsonComponent,
                    LinkComponent,
                    RatingComponent,
                    InputComponent,
                    CheckboxComponent,
                    JoinPipe,
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
                    ConditionalPipe,
                    AddressPipe,
                    SanitizeHtmlPipe,
                    IntoDirective
                ],
                exports: [
                    JoinPipe,
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
                    ConditionalPipe,
                    AddressPipe,
                    SanitizeHtmlPipe,
                    IntoDirective
                ],
                entryComponents: [
                    AddressComponent,
                    EmailComponent,
                    FontComponent,
                    ImageComponent,
                    JsonComponent,
                    LinkComponent,
                    InputComponent,
                    CheckboxComponent,
                    RatingComponent
                ],
                providers: [
                    JoinPipe,
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
                    EmailPipe,
                    RatingPipe,
                    AddressPipe,
                    FontPipe,
                    ConditionalPipe,
                    WrapPipe,
                    ValueOfPipe,
                    SanitizeHtmlPipe,
                    IntoDirective,
                    ComponentPool
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
exports.EmailPipe = EmailPipe;
exports.RatingPipe = RatingPipe;
exports.AddressPipe = AddressPipe;
exports.JoinPipe = JoinPipe;
exports.FontPipe = FontPipe;
exports.ValueOfPipe = ValueOfPipe;
exports.SanitizeHtmlPipe = SanitizeHtmlPipe;
exports.ConditionalPipe = ConditionalPipe;
exports.IntoPipeModule = IntoPipeModule;
exports.IntoDirective = IntoDirective;
exports.ComponentPool = ComponentPool;
exports.ɵa = AddressComponent;
exports.ɵi = CheckboxComponent;
exports.ɵb = EmailComponent;
exports.ɵc = FontComponent;
exports.ɵd = ImageComponent;
exports.ɵh = InputComponent;
exports.ɵe = JsonComponent;
exports.ɵf = LinkComponent;
exports.ɵg = RatingComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=into-pipes.umd.js.map
