import { Pipe, Component, ViewChild, Renderer, Output, EventEmitter, Injectable, Directive, ViewContainerRef, ElementRef, Input, ComponentFactoryResolver, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MaskPipe = /** @class */ (function () {
    function MaskPipe() {
    }
    /**
     * @param {?} item
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    MaskPipe.prototype.maskString = /**
     * @param {?} item
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    function (item, visibleDigits, maskWith) {
        /** @type {?} */
        var maskedSection = item ? item.slice(0, -visibleDigits) : "";
        /** @type {?} */
        var visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    };
    /**
     * @param {?} items
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    MaskPipe.prototype.maskArray = /**
     * @param {?} items
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    function (items, visibleDigits, maskWith) {
        var _this = this;
        /** @type {?} */
        var result = [];
        items.map(function (item) {
            result.push(_this.maskString(item, visibleDigits, maskWith));
        });
        return result;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    MaskPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var visibleDigits = (args && args.length) ? args[0] : 4;
        /** @type {?} */
        var maskWith = args.length > 1 ? args[1] : '*';
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.maskString(source, visibleDigits, maskWith);
        }
        return this.maskArray(source, visibleDigits, maskWith);
    };
    MaskPipe.decorators = [
        { type: Pipe, args: [{ name: 'mask' },] }
    ];
    return MaskPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MapPipe = /** @class */ (function () {
    function MapPipe() {
    }
    /**
     * @param {?} list
     * @param {?} map
     * @return {?}
     */
    MapPipe.prototype.valuesFor = /**
     * @param {?} list
     * @param {?} map
     * @return {?}
     */
    function (list, map) {
        /** @type {?} */
        var result = [];
        list.map(function (key) {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    };
    /**
     * @param {?} mapping
     * @return {?}
     */
    MapPipe.prototype.geMapping = /**
     * @param {?} mapping
     * @return {?}
     */
    function (mapping) {
        if (mapping.trim) {
            /** @type {?} */
            var map_1 = {};
            mapping.split('/').map(function (key) {
                /** @type {?} */
                var x = key.split(';');
                map_1[x[0]] = x[1];
            });
            mapping = map_1;
        }
        return mapping;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    MapPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    };
    MapPipe.decorators = [
        { type: Pipe, args: [{ name: 'map' },] }
    ];
    return MapPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValueOfPipe = /** @class */ (function () {
    function ValueOfPipe() {
    }
    /**
     * @param {?} source
     * @param {?} key
     * @return {?}
     */
    ValueOfPipe.prototype.valueOfSingle = /**
     * @param {?} source
     * @param {?} key
     * @return {?}
     */
    function (source, key) {
        return source[key];
    };
    /**
     * @param {?} sources
     * @param {?} key
     * @return {?}
     */
    ValueOfPipe.prototype.valueOfMultiple = /**
     * @param {?} sources
     * @param {?} key
     * @return {?}
     */
    function (sources, key) {
        var _this = this;
        /** @type {?} */
        var result = [];
        sources.map(function (source) {
            result.push(_this.valueOfSingle(source, key));
        });
        return result;
    };
    /**
     * @param {?} object
     * @param {...?} args
     * @return {?}
     */
    ValueOfPipe.prototype.transform = /**
     * @param {?} object
     * @param {...?} args
     * @return {?}
     */
    function (object) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof object === "string") || !(object instanceof Array)) {
            return this.valueOfSingle(object, args[0]);
        }
        return this.valueOfMultiple(object, args[0]);
    };
    ValueOfPipe.decorators = [
        { type: Pipe, args: [{ name: 'valueof' },] }
    ];
    return ValueOfPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LinkPipe = /** @class */ (function () {
    function LinkPipe() {
    }
    /**
     * @param {?} source
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    LinkPipe.prototype.stringToLink = /**
     * @param {?} source
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    function (source, target, title) {
        if (!title || !title.length) {
            /** @type {?} */
            var q = source.indexOf("?");
            /** @type {?} */
            var t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            var d = t.lastIndexOf("/");
            title = d < 0 ? t : t.substring(d + 1);
        }
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
    };
    /**
     * @param {?} sources
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    LinkPipe.prototype.arrayToImagLink = /**
     * @param {?} sources
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    function (sources, target, title) {
        var _this = this;
        /** @type {?} */
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToLink(source, target, ""));
        });
        return result;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    LinkPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var target = (args && args.length) ? args[0] : "";
        /** @type {?} */
        var title = (args && args.length > 1) ? args[1] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
    };
    LinkPipe.decorators = [
        { type: Pipe, args: [{ name: 'link' },] }
    ];
    return LinkPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImagePipe = /** @class */ (function () {
    function ImagePipe() {
    }
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    ImagePipe.prototype.stringToImage = /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    function (source, width, height, alt) {
        if (!alt || !alt.length) {
            /** @type {?} */
            var q = source.indexOf("?");
            /** @type {?} */
            var t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            var d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
    };
    /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    ImagePipe.prototype.arrayToImage = /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    function (sources, width, height, alt) {
        var _this = this;
        /** @type {?} */
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToImage(source, width, height, alt));
        });
        return result;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    ImagePipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var width = (args && args.length) ? "width: " + args[0] + ";" : "";
        /** @type {?} */
        var height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        /** @type {?} */
        var alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");
    };
    ImagePipe.decorators = [
        { type: Pipe, args: [{ name: 'image' },] }
    ];
    return ImagePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var VideoPipe = /** @class */ (function () {
    function VideoPipe() {
    }
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    VideoPipe.prototype.stringToVideo = /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    function (source, width, height, alt) {
        if (!alt || !alt.length) {
            /** @type {?} */
            var q = source.indexOf("?");
            /** @type {?} */
            var t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            var d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<video src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\'  controls=\'true\' />";
    };
    /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    VideoPipe.prototype.arrayToVideo = /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    function (sources, width, height, alt) {
        var _this = this;
        /** @type {?} */
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToVideo(source, width, height, alt));
        });
        return result;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    VideoPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var width = (args && args.length) ? "width: " + args[0] + ";" : "";
        /** @type {?} */
        var height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        /** @type {?} */
        var alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToVideo(source, width, height, alt);
        }
        return this.arrayToVideo(source, width, height, "");
    };
    VideoPipe.decorators = [
        { type: Pipe, args: [{ name: 'video' },] }
    ];
    return VideoPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PrependPipe = /** @class */ (function () {
    function PrependPipe() {
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    PrependPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return key + source;
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(key + item);
            });
            return result_1;
        }
    };
    PrependPipe.decorators = [
        { type: Pipe, args: [{ name: 'prepend' },] }
    ];
    return PrependPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AppendPipe = /** @class */ (function () {
    function AppendPipe() {
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    AppendPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(item + key);
            });
            return result_1;
        }
    };
    AppendPipe.decorators = [
        { type: Pipe, args: [{ name: 'append' },] }
    ];
    return AppendPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WrapPipe = /** @class */ (function () {
    function WrapPipe() {
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    WrapPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var pre = (args && args.length) ? args[0] : "";
        /** @type {?} */
        var post = pre.length ?
            (args.length > 1 ? args[1] : "") : pre;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(pre + item + post);
            });
            return result_1;
        }
    };
    WrapPipe.decorators = [
        { type: Pipe, args: [{ name: 'wrap' },] }
    ];
    return WrapPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EmailPipe = /** @class */ (function () {
    function EmailPipe() {
    }
    /**
     * @param {?} source
     * @return {?}
     */
    EmailPipe.prototype.emailFromString = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    EmailPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source);
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.emailFromString(item));
            });
            return result_1;
        }
    };
    EmailPipe.decorators = [
        { type: Pipe, args: [{ name: 'email' },] }
    ];
    return EmailPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RatingPipe = /** @class */ (function () {
    function RatingPipe() {
    }
    /**
     * @param {?} source
     * @return {?}
     */
    RatingPipe.prototype.rateString = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var value = parseInt(source, 10);
        /** @type {?} */
        var float = parseFloat(source);
        /** @type {?} */
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
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    RatingPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source);
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.rateString(item));
            });
            return result_1;
        }
    };
    RatingPipe.decorators = [
        { type: Pipe, args: [{ name: 'raiting' },] }
    ];
    return RatingPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AddressPipe = /** @class */ (function () {
    function AddressPipe() {
    }
    /**
     * @param {?} source
     * @return {?}
     */
    AddressPipe.prototype.addressFromString = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var url = "https://maps.google.com/?q=" +
            source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
        url = url.replace("\\s+", "+");
        return "<span class='address'><span>" + source.street + ", " + source.suite + "</span>" +
            "<span> " + source.city + ", " + source.zipcode + "</span>" +
            "</span> <a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</span></a>";
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    AddressPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source);
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.addressFromString(item));
            });
            return result_1;
        }
    };
    AddressPipe.decorators = [
        { type: Pipe, args: [{ name: 'address' },] }
    ];
    return AddressPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    JoinPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source.join(args[0]);
        }
        else {
            /** @type {?} */
            var result_1 = [];
            Object.keys(source).map(function (key) {
                result_1.push(source[key]);
            });
            return result_1.join(args[0]);
        }
    };
    JoinPipe.decorators = [
        { type: Pipe, args: [{ name: 'join' },] }
    ];
    return JoinPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FontPipe = /** @class */ (function () {
    function FontPipe() {
    }
    /**
     * @param {?} font
     * @param {?} location
     * @param {?} action
     * @param {?} content
     * @return {?}
     */
    FontPipe.prototype.fontFromString = /**
     * @param {?} font
     * @param {?} location
     * @param {?} action
     * @param {?} content
     * @return {?}
     */
    function (font, location, action, content) {
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    FontPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var font = args.length ? "<span class=\'" + args[0] + "\' aria-hidden='true'></span>" : "";
        /** @type {?} */
        var location = args.length > 1 ? args[1] : "";
        /** @type {?} */
        var action = args.length > 2 ? args[2].toLowerCase() : "";
        /** @type {?} */
        var content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.fontFromString(font, location, action, item));
            });
            return result_1;
        }
    };
    FontPipe.decorators = [
        { type: Pipe, args: [{ name: 'email' },] }
    ];
    return FontPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConditionalPipe = /** @class */ (function () {
    function ConditionalPipe() {
    }
    /**
     * @param {?} content
     * @param {?} acondition
     * @param {?} value
     * @param {?} action
     * @param {?} altAction
     * @return {?}
     */
    ConditionalPipe.prototype.conditionFromString = /**
     * @param {?} content
     * @param {?} acondition
     * @param {?} value
     * @param {?} action
     * @param {?} altAction
     * @return {?}
     */
    function (content, acondition, value, action, altAction) {
        /** @type {?} */
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
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    ConditionalPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var acondition = args.length ? args[0] : "";
        /** @type {?} */
        var value = args.length > 1 ? args[1] : "";
        /** @type {?} */
        var action = args.length > 2 ? args[2] : "";
        /** @type {?} */
        var altAction = args.length > 3 ? args[3] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        }
        else {
            /** @type {?} */
            var result_1 = {};
            source.map(function (item) {
                result_1[item] = _this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result_1;
        }
    };
    ConditionalPipe.decorators = [
        { type: Pipe, args: [{ name: 'if' },] }
    ];
    return ConditionalPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InToPipe = /** @class */ (function () {
    function InToPipe() {
    }
    /**
     * @param {?} content
     * @param {?} list
     * @return {?}
     */
    InToPipe.prototype.transform = /**
     * @param {?} content
     * @param {?} list
     * @return {?}
     */
    function (content, list) {
        var _this = this;
        /** @type {?} */
        var result = content;
        list.split("|").map(function (item) {
            result = _this._transform(result, _this.split(item));
        });
        return result;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    InToPipe.prototype.split = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    /**
     * @param {?} content
     * @param {?} args
     * @return {?}
     */
    InToPipe.prototype._transform = /**
     * @param {?} content
     * @param {?} args
     * @return {?}
     */
    function (content, args) {
        /** @type {?} */
        var result = content;
        switch (args[0]) {
            case "slice":
                /** @type {?} */
                var start_1 = parseInt(args[1], 10);
                /** @type {?} */
                var end_1 = undefined;
                if (args.length > 2) {
                    end_1 = parseInt(args[2], 10);
                }
                /** @type {?} */
                var slicer_1 = new SlicePipe();
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
                /** @type {?} */
                var numLocal = "en_US";
                /** @type {?} */
                var numDecimal_1 = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal_1 = args[2];
                }
                /** @type {?} */
                var decimaler_1 = new DecimalPipe(numLocal);
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
                /** @type {?} */
                var acondition = args.length > 1 ? args[1] : "";
                /** @type {?} */
                var value = args.length > 2 ? args[2] : "";
                /** @type {?} */
                var action = args.length > 3 ? args[3] : "";
                /** @type {?} */
                var altAction = args.length > 4 ? args[4] : "";
                result = new ConditionalPipe().transform(content, acondition, value, action, altAction);
                if (typeof result === "string") {
                    result = result[0] === '"' ? result.substring(1, result.length - 1) : result;
                    result = this._transform(content, this.split(result));
                }
                break;
            case "font":
                // font:fa fa-check:left:*
                result = new FontPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
                break;
            case "currency":
                /** @type {?} */
                var cp_1 = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
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
                // wrap:something:something  OR wrap:something
                result = new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
                break;
            case "append":
                // append:something
                result = new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "prepend":
                // prepend:something
                result = new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "email":
                // email
                result = new EmailPipe().transform(content, "");
                break;
            case "address":
                // address
                result = new AddressPipe().transform(content, "");
                break;
            case "rating":
                // rating
                result = new RatingPipe().transform(content, "");
                break;
            case "map":
                // map:key1;value1/key2;value2/key3;value3
                result = new MapPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "date":
                /** @type {?} */
                var dateLocal = "en_US";
                /** @type {?} */
                var dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                /** @type {?} */
                var dater_1 = new DatePipe(dateLocal);
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
                /** @type {?} */
                var jcp_1 = new JsonPipe();
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
                // json
                result = new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "uppercase":
                /** @type {?} */
                var ucp_1 = new UpperCasePipe();
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
                /** @type {?} */
                var lcp_1 = new LowerCasePipe();
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
                // mask:4:*  OR mask:4
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
                // valueof:key
                result = new ValueOfPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "link":
                // link:target:text or link:text or link
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
                // image:200px:auto:alttext OR image:200px:alternate-text OR image:200px OR image
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
            case "video":
                // video:200px:auto:alttext OR video:200px:alternate-text OR video:200px OR video
                if (args.length > 3) {
                    result = new VideoPipe().transform(content, args[1], args[2], args[3]);
                }
                else if (args.length > 2) {
                    result = new VideoPipe().transform(content, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = new VideoPipe().transform(content, args[1]);
                }
                else {
                    result = new VideoPipe().transform(content, "");
                }
                break;
        }
        return result;
    };
    InToPipe.decorators = [
        { type: Pipe, args: [{ name: 'into' },] }
    ];
    return InToPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    SanitizeHtmlPipe.prototype.transform = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sanitizeHtml'
                },] }
    ];
    /** @nocollapse */
    SanitizeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SanitizeHtmlPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    AddressComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        /** @type {?} */
        var x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
        this.url = x.replace("\\s+", "+");
    };
    AddressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'address-component',
                    template: "\n    <span class=\"address\">\n        <span [textContent]=\"addr1\"></span>\n        <span [textContent]=\"addr2\"></span>\n    </span> \n    <a [href]=\"url\" class=\"google-map\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"off-screen\">View in google map</span>\n    </a>\n    ",
                    styles: [".address {display: inline-block;float: left;}\n        .google-map {display: inline-block;float: left;}\n        .fa {color: #f00;margin: 0 3px;}\n        .off-screen {position: absolute;left: -999em;}\n        :host a:hover .fa-map-marker{color: #fabdab;}\n        "]
                }] }
    ];
    return AddressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    EmailComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
    };
    EmailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'email',
                    template: "\n    <a [href]=\"'mailto:' + source\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </a>\n    ",
                    styles: ["\n        :host:hover .fa-envelope{color: #fabdab;}\n        "]
                }] }
    ];
    return EmailComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PhoneComponent = /** @class */ (function () {
    function PhoneComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    PhoneComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] === 'true' : false;
        this.formatting = args.length > 1 ? args[1] === 'true' : false;
    };
    /**
     * @return {?}
     */
    PhoneComponent.prototype.normalizeSource = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            /** @type {?} */
            var ext = (10 - result.length);
            /** @type {?} */
            var b = result.slice(0, ext);
            /** @type {?} */
            var e = result.slice(ext);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    };
    /**
     * @return {?}
     */
    PhoneComponent.prototype.formattedSource = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = this.source;
        if (this.formatting) {
            result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
            result = result[0] === '1' ? result.substring(1) : result;
            if (result.length === 10) {
                result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            }
            else if (result.length > 10) {
                /** @type {?} */
                var ext = (10 - result.length);
                /** @type {?} */
                var b = result.slice(0, ext);
                /** @type {?} */
                var e = result.slice(ext);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                result += (b + ' ext. ' + e);
            }
        }
        return result;
    };
    PhoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'phone',
                    template: "\n    <a  *ngIf=\"isLink\" [href]=\"'tel:' + normalizeSource()\">\n        <span class='fa fa-phone' aria-hidden='true'></span>\n        <span [textContent]=\"formattedSource()\"></span>\n    </a>\n    <span *ngIf=\"!isLink\">\n        <span class='fa fa-phone' aria-hidden='true'></span>\n        <span [textContent]=\"formattedSource()\"></span>\n    </span>\n    ",
                    styles: ["\n        :host a:hover .fa-phone{color: #fabdab;}\n        "]
                }] }
    ];
    return PhoneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FontComponent = /** @class */ (function () {
    function FontComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    FontComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.font = args[0];
        this.location = args.length > 1 ? args[1] : "left";
        /** @type {?} */
        var action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    };
    FontComponent.decorators = [
        { type: Component, args: [{
                    selector: 'font-component',
                    template: "\n        <span *ngIf=\"location === 'left'\"    [class]=\"font\" aria-hidden='true'></span>\n        <span *ngIf=\"location !== 'replace'\" [textContent]=\"content\"></span>\n        <span *ngIf=\"location === 'right'\"   [class]=\"font\" aria-hidden='true'></span>\n        <span *ngIf=\"location === 'replace'\" [class]=\"font\" aria-hidden='true'></span>\n    ",
                    styles: ["span span {\n            float: left;\n        }\n        "]
                }] }
    ];
    return FontComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    ImageComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                /** @type {?} */
                var q = source.indexOf("?");
                /** @type {?} */
                var t = q < 0 ? source : source.substring(0, q);
                /** @type {?} */
                var d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    };
    ImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'image-component',
                    template: "<img [src]=\"source\" [style.width]=\"width\" [style.height]=\"height\" [title]=\"alt\" />",
                    styles: [""]
                }] }
    ];
    return ImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    VideoComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                /** @type {?} */
                var q = source.indexOf("?");
                /** @type {?} */
                var t = q < 0 ? source : source.substring(0, q);
                /** @type {?} */
                var d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    };
    VideoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'video-component',
                    template: "<video [src]=\"source\" [style.width]=\"width\" [style.height]=\"height\" controls=\"true\" [title]=\"alt\"></video>",
                    styles: [""]
                }] }
    ];
    return VideoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JsonComponent = /** @class */ (function () {
    function JsonComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    JsonComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
    };
    JsonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'json-component',
                    template: "<span class=\"json-view\" [textContent]=\"source | json\"></span>",
                    styles: [".json-view {\n            display: inline-block;\n            float: left;\n            font-family: monospace;\n            padding: 5px;\n            white-space: pre-wrap;\n            unicode-bidi: embed;        \n        }\n        "]
                }] }
    ];
    return JsonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LinkComponent = /** @class */ (function () {
    function LinkComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    LinkComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
        if (!this.title || !this.title.length) {
            /** @type {?} */
            var q = source.indexOf("?");
            /** @type {?} */
            var t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            var d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d + 1);
        }
    };
    LinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'link-component',
                    template: "<a [href]=\"source\" [target]=\"target\" [textContent]=\"title\"></a>",
                    styles: ["\n        "]
                }] }
    ];
    return LinkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.value = [];
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    RatingComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.float = parseFloat(source);
        this.source = source;
        /** @type {?} */
        var size = parseInt(source, 10);
        for (var i = 0; i < size; i++) {
            this.value.push(i);
        }
    };
    RatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rating-component',
                    template: "\n    <span class='rating'>\n        <span class='fa fa-star' aria-hidden='true' *ngFor=\"let x of value\"></span>\n        <span class='fa fa-star-half' aria-hidden='true' *ngIf=\"float != value\"></span>\n    </span>\n    <span class='rate-value' [textContent]=\"source\"></span>\n    ",
                    styles: [".rating {\n            display: inline-block;\n        }\n        "]
                }] }
    ];
    return RatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InputComponent = /** @class */ (function () {
    function InputComponent(renderer) {
        this.renderer = renderer;
        this.editName = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    InputComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        /** @type {?} */
        var code = event.which;
        if (((code >= 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) ||
            ((code == 32) || (code == 8)) ||
            ((code >= 186) && (code <= 222))) {
            this.source = event.target.value;
        }
        else if ((code === 13) || (code === 9) || (code === 27)) {
            this.editName = false;
            if (this.oldValue !== String(this.source)) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    item: this.data
                });
            }
            if (code === 13) {
                setTimeout(function () {
                    if (_this.nameHolder) {
                        _this.renderer.invokeElementMethod(_this.nameHolder.nativeElement, "focus");
                    }
                }, 66);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputComponent.prototype.blur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = false;
        if (this.oldValue !== String(this.source)) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                item: this.data
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputComponent.prototype.keydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if ((code === 13) || (code === 9)) {
            this.renderer.invokeElementMethod(event.target, "click");
            setTimeout(function () {
                if (_this.nameEditor) {
                    _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
                }
            }, 66);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputComponent.prototype.clickName = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        this.oldValue = String(this.source);
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
        }, 66);
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    InputComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.data = data;
        this.placeholder = args.length ? args[0] : "";
        this.formatting = args.length > 1 ? args[1] : "";
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'input-component',
                    template: "\n    <span *ngIf=\"editName\">\n    <input #nameEditor\n        type='text' \n        [id]=\"id\"\n        [name]=\"name\"\n        [value]=\"source\"\n        [placeholder]=\"placeholder\"\n        (blur)=\"blur($event)\" \n        (keyup)='keyup($event)'>\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? (source | into:formatting) : '&nbsp;'\">\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && !formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? source : '&nbsp;'\">\n    </span>\n    ",
                    styles: ["\n        .locked {\n          display: inline-block;\n          cursor: pointer;\n          min-width: 30px;\n          -webkit-user-select: none;       \n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          border: 1px solid transparent;\n        }\n        input {\n          cursor: beam;\n        }\n        :host .locked:hover{border: 1px solid #fabdab;}\n        "]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    InputComponent.propDecorators = {
        nameEditor: [{ type: ViewChild, args: ["nameEditor",] }],
        nameHolder: [{ type: ViewChild, args: ["nameHolder",] }],
        onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
    };
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var code = event.which;
        if (code === 13) {
            this.renderer.invokeElementMethod(event.target, "click");
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var input = event.target;
        event.stopPropagation();
        event.preventDefault();
        if (this.source === this.ideal) {
            this.source = this.original;
        }
        else {
            this.source = this.ideal;
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: this.data
        });
        if (this.useFont) {
            setTimeout(function () {
                if (_this.check) {
                    _this.renderer.invokeElementMethod(_this.check.nativeElement, "focus");
                }
                if (_this.uncheck) {
                    _this.renderer.invokeElementMethod(_this.uncheck.nativeElement, "focus");
                }
            }, 66);
        }
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    CheckboxComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.useFont = args.length > 1 ? Boolean(args[1]) : false;
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'checkbox-component',
                    template: "\n    <span *ngIf=\"useFont\" class=\"check-font\">\n      <span *ngIf=\"source === ideal\" #check tabindex=\"0\" class=\"fa fa-check\" (keyup)=\"keyup($event)\" (click)=\"click($event)\"></span>\n      <span *ngIf=\"source !== ideal\" #uncheck tabindex=\"0\" class=\"fa fa-close\" (keyup)=\"keyup($event)\" (click)=\"click($event)\"></span>\n    </span>\n    <input *ngIf=\"!useFont\" \n            type=\"checkbox\" \n            tabindex=\"0\" \n            [value]=\"source\" \n            [checked]=\"source===ideal ? true : null\" \n            (keyup)=\"keyup($event)\"\n            (click)=\"click($event)\" />\n    ",
                    styles: ["\n        .check-font:hover{color: #fabdab;}\n        .check-font {cursor: pointer;}\n        "]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    CheckboxComponent.propDecorators = {
        check: [{ type: ViewChild, args: ["check",] }],
        uncheck: [{ type: ViewChild, args: ["uncheck",] }],
        onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
    };
    return CheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.multiselect = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.source = event.target.value;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: this.data
        });
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    SelectComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.multiselect = args.length ? args[0] === true : false;
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-component',
                    template: "\n    <select tabindex=\"0\" [multiple]=\"multiselect ? true:null\" (click)=\"click($event)\" (change)=\"change($event)\">\n        <option *ngFor=\"let x of options\" [selected]=\"source === x ? true : null\"  [value]=\"x\" [textContent]=\"x\"></option>\n    </select>\n    ",
                    styles: ["\n        "]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
    SelectComponent.propDecorators = {
        onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SpanComponent = /** @class */ (function () {
    function SpanComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    SpanComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
    };
    SpanComponent.decorators = [
        { type: Component, args: [{
                    selector: 'span-component',
                    template: "<span [textContent]=\"source\"></span>",
                    styles: ["\n        "]
                }] }
    ];
    return SpanComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
        this.shouldDisplay = false;
        this.shareList = [];
    }
    /**
     * @param {?} type
     * @param {?} address
     * @return {?}
     */
    ShareComponent.prototype.shareInfo = /**
     * @param {?} type
     * @param {?} address
     * @return {?}
     */
    function (type, address) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with ' + type
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ShareComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    ShareComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        var _this = this;
        this.source = source;
        /** @type {?} */
        var list = (args[0] instanceof Array) ? args[0] : args;
        list.map(function (arg) {
            if (arg === 'facebook') {
                _this.shareList.push(_this.shareInfo('facebook', 'http://www.facebook.com/sharer.php?u=' + source));
            }
            else if (arg === 'twitter') {
                _this.shareList.push(_this.shareInfo('twitter', 'https://twitter.com/share?title=&amp;url=' + source));
            }
            else if (arg === 'linkedin') {
                _this.shareList.push(_this.shareInfo('linkedin', 'http://www.linkedin.com/shareArticle?title=&amp;url=' + source));
            }
            else if (arg === 'google') {
                _this.shareList.push(_this.shareInfo('google-plus', 'https://plus.google.com/share?url=' + source));
            }
            else if (arg === 'pinterest') {
                _this.shareList.push(_this.shareInfo('google-plus', 'http://pinterest.com/pin/create/link/?url=' + source));
            }
            else if (arg === 'digg') {
                _this.shareList.push(_this.shareInfo('digg', 'http://digg.com/submit?url=' + source));
            }
            else if (arg === 'get-pocket') {
                _this.shareList.push(_this.shareInfo('get-pocket', 'https://getpocket.com/edit?url=' + source));
            }
            else if (arg === 'xing') {
                _this.shareList.push(_this.shareInfo('xing', 'https://www.xing.com/app/user?op=share&url=' + source));
            }
            else if (arg === 'stumbleupon') {
                _this.shareList.push(_this.shareInfo('stumbleupon', 'http://www.stumbleupon.com/submit?url=' + source));
            }
        });
    };
    ShareComponent.decorators = [
        { type: Component, args: [{
                    selector: 'share-component',
                    template: "\n    <a id='share-comment-{{id}}' \n        tabindex=\"0\" \n        class='share-item-tips' \n        (keyup)='keyup($event)'\n        (click)='shouldDisplay = !shouldDisplay'>\n    <span class=\"fa fa-share-alt\"></span>\n    <span class=\"share\">share</span>\n    </a>\n    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>\n      <span class='social-referal'>\n        <a *ngFor=\"let share of shareList\" [class]='share.icon' target='_blank' [href]='share.href'><span class='off-screen' [textContent]=\"share.title\"></span></a>\n      </span>\n    </span>\n",
                    styles: ["\n    :host {display: table;position: relative}\n    .share-item-tips {cursor: pointer;}\n    .share-item-tips:hover {color: #fabdab;}\n    .share-item-tips .fa {margin: 0;}\n    .share-item-tips:hover .fa{color: #fabdab;}\n    .share-item-tips .share{margin-left: 5px;}\n    .tips {\n        position: absolute;\n        display: flex;\n        flex-direction: row;\n        padding: 5px;\n        border: 1px solid #aaa;\n        border-radius: 2px;\n        background-color: #fff;\n        z-index: 2;\n    }\n    .tips .social-referal {\n        display: flex;\n        flex-direction: row;\n    }\n    .tips .social-referal .fa {\n        float: left;\n        padding: 2px 4px;\n        color: blue;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        text-decoration: none;\n        margin: 0 1px;\n        width: 20px;\n        text-align: center;\n    }\n    .tips .social-referal .fa:hover {\n        color: #fff;\n        background-color: blue;\n    }\n    "]
                }] }
    ];
    return ShareComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.thumbs = "";
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    LikeComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LikeComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    LikeComponent.prototype.addItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            var savedItems = JSON.parse(saved);
            savedItems.push(id);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
        }
        else {
            localStorage.setItem(this.thumbs, JSON.stringify([id]));
        }
        this.source++;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    LikeComponent.prototype.removeItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            var savedItems = JSON.parse(saved);
            /** @type {?} */
            var i = savedItems.indexOf(id);
            savedItems.splice(i, 1);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
            this.source--;
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    LikeComponent.prototype.getItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var saved = localStorage.getItem(this.thumbs);
        /** @type {?} */
        var found = null;
        if (saved) {
            /** @type {?} */
            var savedItems = JSON.parse(saved);
            /** @type {?} */
            var i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    };
    /**
     * @return {?}
     */
    LikeComponent.prototype.formatterSource = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = this.source;
        if (this.source > 1000) {
            result = (this.source / 1000).toFixed(1) + " k";
        }
        return result;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LikeComponent.prototype.toggleCount = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        if (this.selected) {
            /** @type {?} */
            var existing = this.getItem(this.data[this.key]);
            if (!existing) {
                this.addItem(this.data[this.key]);
            }
        }
        else {
            this.removeItem(this.data[this.key]);
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: this.data,
            selected: this.selected,
            action: this.thumbs
        });
    };
    LikeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'like-component',
                    template: "\n    <a \n        id='like-{{id}}' \n        tabindex=\"0\" \n        class=\"like\" \n        [class.selected]=\"selected\" \n        (keyup)=\"keyup($event)\" \n        (click)='toggleCount($event)'>\n        <span class=\"fa fa-thumbs-up\" *ngIf=\"thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-up selected\" *ngIf=\"thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down\" *ngIf=\"!thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down selected\" *ngIf=\"!thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"counts\" *ngIf=\"showCount\" [textContent]=\"formatterSource()\"></span>\n    </a>",
                    styles: ["\n        :host {display: table;position: relative}\n        .like {cursor: pointer;}\n        .like .counts{margin-left: 5px;}\n        .like .fa {margin: 0;}\n        .like .fa.selected {color: green;}\n        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}\n        "]
                }] }
    ];
    return LikeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(renderer) {
        this.renderer = renderer;
        this.showCalendar = false;
        this.editName = false;
        this.multiselect = false;
        this.dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.weeks = [];
        this.selectedDays = [];
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        /** @type {?} */
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.popdatepicker = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.showCalendar = !this.showCalendar;
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    CalendarComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        var _this = this;
        this.source = source;
        this.currentDate = new Date();
        this.origDate = new Date();
        if (source instanceof Array) {
            this.multiselect = true;
            source.map(function (item) {
                _this.selectedDays.push(new Date(item));
            });
        }
        else {
            this.multiselect = false;
            this.selectedDays.push(new Date(this.source));
        }
        this.item = data;
        this.generateCalendar();
        this.formatting = args.length ? args[0] : "";
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.isSelected = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var index = -1;
        for (var i = 0; i < this.selectedDays.length; i++) {
            /** @type {?} */
            var selectedDate = this.selectedDays[i];
            if (this.isSameDay(date, selectedDate)) {
                index = i;
            }
        }
        return index > -1;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.isSelectedMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.isSameMonth(date, this.currentDate);
    };
    /**
     * @param {?} day
     * @return {?}
     */
    CalendarComponent.prototype.toggleSelectedDates = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var found = false;
        if (this.multiselect) {
            for (var i = 0; i < this.selectedDays.length; i++) {
                /** @type {?} */
                var date = this.selectedDays[i];
                if (this.isSameDay(day.date, date)) {
                    this.selectedDays.splice(i, 1);
                    found = true;
                    day.selected = false;
                    break;
                }
            }
            if (!found) {
                this.selectedDays.push(day.date);
                day.selected = true;
            }
        }
        else {
            this.selectedDays = [day.date];
            day.selected = true;
        }
    };
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    CalendarComponent.prototype.selectDate = /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    function (event, day) {
        event.stopPropagation();
        event.preventDefault();
        this.origDate = day.date;
        this.currentDate = day.date;
        this.toggleSelectedDates(day);
        this.selectedDays.sort(function (a, b) {
            return a > b ? -1 : 1;
        });
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.selectedDays,
            item: this.item
        });
        this.showCalendar = false;
        this.generateCalendar();
    };
    // actions from calendar
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.prevMonth = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
        this.generateCalendar();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.nextMonth = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
        this.generateCalendar();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.prevYear = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() - 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.nextYear = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    };
    // generate the calendar grid
    /**
     * @return {?}
     */
    CalendarComponent.prototype.generateCalendar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dates = this.fillDates(this.currentDate);
        /** @type {?} */
        var weeks = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    CalendarComponent.prototype.isSameDay = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    CalendarComponent.prototype.isSameMonth = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return a.getYear() === b.getYear() &&
            a.getMonth() === b.getMonth();
    };
    /**
     * @param {?} currentDate
     * @return {?}
     */
    CalendarComponent.prototype.fillDates = /**
     * @param {?} currentDate
     * @return {?}
     */
    function (currentDate) {
        /** @type {?} */
        var cm = new Date(currentDate);
        /** @type {?} */
        var tm = new Date();
        /** @type {?} */
        var firstDay = new Date(cm.getFullYear(), cm.getMonth(), 1);
        /** @type {?} */
        var firstOfMonth = firstDay.getDay();
        /** @type {?} */
        var firstDayOfGrid = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstOfMonth);
        /** @type {?} */
        var start = firstDayOfGrid.getDate();
        /** @type {?} */
        var list = [];
        for (var i = start; i < (start + 42); i++) {
            /** @type {?} */
            var d = new Date(firstDayOfGrid.getFullYear(), firstDayOfGrid.getMonth(), i);
            list.push({
                today: this.isSameDay(tm, d),
                selected: this.isSelected(d),
                date: d
            });
        }
        return list;
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-component',
                    template: "\n    <span class=\"calendar-box\">\n      <span class=\"date\" [textContent]=\"origDate | date:formatting\"></span>\n      <a tabindex=\"0\" class=\"popper\" (keyup)=\"keyup($event)\" (click)=\"popdatepicker($event)\">\n          <span class=\"fa fa-calendar\" aria-hidden=\"true\"></span>\n          <span class=\"off-screen\">Pick a date</span>\n      </a>\n    </span>\n    <div class=\"calendar\" *ngIf=\"showCalendar\">\n\t\t<div class=\"calendar-navs\">\n\t\t\t<div class=\"month-nav\">\n                <button (click)=\"prevMonth($event)\">\n                    <span class=\"fa fa-chevron-left\"></span>\n                    <span class=\"off-screen\">Back a month</span>\n                </button>\n\t\t\t\t<span class=\"p4\">{{ currentDate | date:'MMMM' }}</span>\n                <button (click)=\"nextMonth($event)\">\n                    <span class=\"fa fa-chevron-right\"></span>\n                    <span class=\"off-screen\">Forward a month</span>\n                </button>\n\t\t\t</div>\n\t\t\t<div class=\"year-nav\">\n                <button (click)=\"prevYear($event)\">\n                    <span class=\"fa fa-chevron-left\"></span>\n                    <span class=\"off-screen\">Back a year</span>\n                </button>\n\t\t\t\t<span>{{ currentDate | date: 'yyyy' }}</span>\n                <button (click)=\"nextYear($event)\">\n                    <span class=\"fa fa-chevron-right\"></span>\n                    <span class=\"off-screen\">Forward a year</span>\n                </button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"month-grid\">\n\t\t\t<div class=\"day-names\">\n\t\t\t\t<div *ngFor=\"let name of dayNames\" class=\"day-name p9\">{{ name }}</div>\n\t\t\t</div>\n\t\t\t<div class=\"weeks\">\n\t\t\t\t<div *ngFor=\"let week of weeks\" class=\"week\">\n\t\t\t\t\t<ng-container *ngFor=\"let day of week\">\n\t\t\t\t\t\t<div class=\"week-date disabled\" *ngIf=\"!isSelectedMonth(day.date)\">\n\t\t\t\t\t\t\t<span class=\"date-text\">{{ day.date.getDate() }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"week-date enabled\"\n                           *ngIf=\"isSelectedMonth(day.date)\"\n                           tabindex=\"0\"\n                           (keyup)=\"keyup($event)\"\n\t\t\t\t\t\t   (click)=\"selectDate($event, day)\"\n\t\t\t\t\t\t   [class.today]=\"day.today\"\n\t\t\t\t\t\t   [class.selected]=\"day.selected\">\n\t\t\t\t\t\t\t<span class=\"date-text\">{{ day.date.getDate() }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    ",
                    styles: ["\n        .popper:hover .fa-calendar{color: #fabdab;}\n        .calendar-box {\n          display: flex;\n          flex-direction: row;\n          cursor: default;\n          width: 100%;\n          display: inline-block;\n        }\n        .calendar-box date {flex: 1;}\n        .calendar-box .popper {cursor: pointer;flex: 0 0 15px}\n        .calendar {\n            display: table;\n            width: 210px;\n            position: absolute;\n            background-color: #fff;\n            z-index: 2;\n            border: 1px solid #ddd;\n            border-radius: 4px;\n        }\n        .calendar * {\n            box-sizing: border-box;\n        }\n        .calendar .calendar-navs {\n            background-color: whitesmoke;\n        }\n        .calendar .month-nav {\n            padding: 2px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .calendar .year-nav {\n            padding: 2px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .calendar .month-nav button,\n        .calendar .year-nav button {\n            border: 0;\n            background: transparent;\n            cursor: pointer;\n        }\n        .calendar .month-nav button:hover,\n        .calendar .year-nav button:hover {\n            color: red;\n        }\n        .calendar .month-grid .day-names {\n            display: flex;\n            flex-direction: row;\n            background: whitesmoke;\n            border-bottom-right-radius: 3px;\n            border-bottom-left-radius: 3px;\n        }\n        .calendar .month-grid .weeks {\n            display: flex;\n            flex-direction: column;\n        }\n        .calendar .month-grid .week {\n            display: flex;\n            flex-direction: row;\n        }\n        .calendar .month-grid .day-names {\n            border-top: 1px dotted #ddd;\n            border-bottom: 1px dashed #ddd;\n        }\n        .calendar .month-grid .week-date,\n        .calendar .month-grid .day-name {\n            text-align: center;\n            padding: 2px;\n            display: block;\n            width: 30px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .calendar .month-grid .week-date {\n            height: 30px;\n            position: relative;\n            padding: 5px;\n        }\n        .calendar .month-grid .week-date .date-text {\n            font-size: 10px;\n            z-index: 10;\n        }\n        .calendar .month-grid .week-date::after {\n            content: '';\n            height: 24px;\n            width: 24px;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            border-radius: 50%;\n            transition: background-color 150ms linear, color 150ms linear;\n            z-index: 1;\n        }\n        .calendar .month-grid .week-date.disabled {color: #aaa;}\n        .calendar .month-grid .week-date.enabled {\n            cursor: pointer;\n        }\n        .calendar .month-grid .week-date.enabled:focus {\n            outline: 0;\n        }\n        .calendar .month-grid .week-date.enabled:hover .date-text,\n        .calendar .month-grid .week-date.enabled:focus .date-text {\n            font-weight: bold;\n            color: blue;\n        }\n        .calendar .month-grid .week-date.enabled:hover::after,\n        .calendar .month-grid .week-date.enabled:focus::after {\n            background-color: whitesmoke;\n        }\n        .calendar .month-grid .week-date.selected .date-text {\n            color: #fff !important;\n        }\n        .calendar .month-grid .week-date.selected::after{\n            background-color: blue !important;\n        }\n        .calendar .month-grid .week-date.today::after {\n            background-color: lightblue;\n            font-weight: bold;\n            color: #fff;\n        }\n        "]
                }] }
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    CalendarComponent.propDecorators = {
        onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LastUpdateComponent = /** @class */ (function () {
    function LastUpdateComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    LastUpdateComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.showIcon = (args && args.length && args[0] === 'true');
    };
    /**
     * @return {?}
     */
    LastUpdateComponent.prototype.formatDate = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentDate = new Date();
        /** @type {?} */
        var minute = 60000;
        /** @type {?} */
        var hour = 3600000;
        /** @type {?} */
        var day = 86400000;
        /** @type {?} */
        var week = 604800000;
        /** @type {?} */
        var month = 604800000 * 4;
        /** @type {?} */
        var year = 604800000 * 52;
        /** @type {?} */
        var result = "";
        /** @type {?} */
        var diff = currentDate.getTime() - this.source.getTime();
        if (diff <= minute) {
            // up to a minute
            result = "seconds ago";
        }
        else if (diff <= hour) {
            /** @type {?} */
            var minutes = Math.floor(diff / minute);
            /** @type {?} */
            var seconds = Math.floor((diff - (minutes * minute)) / 1000);
            result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
        }
        else if (diff <= day) {
            /** @type {?} */
            var hours = Math.floor(diff / hour);
            /** @type {?} */
            var minutes = Math.floor((diff - (hours * hour)) / minute);
            result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
        }
        else if (diff <= week) {
            /** @type {?} */
            var days = Math.floor(diff / day);
            /** @type {?} */
            var hours = Math.floor((diff - (days * day)) / hour);
            result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
        }
        else if (diff <= month) {
            /** @type {?} */
            var weeks = Math.floor(diff / week);
            /** @type {?} */
            var days = Math.floor((diff - (weeks * week)) / day);
            result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
        }
        else if (diff <= year) {
            /** @type {?} */
            var months = Math.floor(diff / month);
            /** @type {?} */
            var weeks = Math.floor((diff - (months * month)) / week);
            result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
        }
        else {
            /** @type {?} */
            var years = Math.floor(diff / year);
            /** @type {?} */
            var months = Math.floor((diff - (years * year)) / month);
            result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
        }
        return result;
    };
    LastUpdateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lastupdate-component',
                    template: "\n    <span *ngIf=\"showIcon\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></span>\n    <span [textContent]=\"formatDate()\"></span>\n    ",
                    styles: ["\n        :host {display: table;position: relative}\n        .fa {margin:0 5px 0 0}\n        "]
                }] }
    ];
    return LastUpdateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InputGroupComponent = /** @class */ (function () {
    function InputGroupComponent(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    InputGroupComponent.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.type === 'radio') {
            this.source = event.target.value;
        }
        else {
            /** @type {?} */
            var i = this.source.indexOf(event.target.value);
            if (event.target.checked) {
                if (i < 0) {
                    this.source.push(event.target.value);
                }
            }
            else {
                this.source.splice(i, 1);
            }
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: this.data
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    InputGroupComponent.prototype.isSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var xitem = item.value ? item.value : item;
        if (this.type === 'radio') {
            return xitem === this.source;
        }
        /** @type {?} */
        var found = false;
        this.source.map(function (x) {
            if (xitem === x) {
                found = true;
            }
        });
        return found;
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    InputGroupComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.type = (source instanceof Array) ? 'checkbox' : 'radio';
    };
    InputGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'input-group-component',
                    template: "\n    <span class=\"input-group-item\" *ngFor=\"let x of options; let i = index\">\n        <input \n            [type]=\"type\" \n            [id]=\"name + i\" \n            [name]=\"name + (type === 'radio' ? '' : i)\" \n            [value]=\"x.value ? x.value : x\" \n            [checked]=\"isSelected(x)\"\n            (click)=\"click($event)\"/>\n        <label [for]=\"name + i\" [textContent]=\"x.label ? x.label : x\"></label>\n    </span>\n    ",
                    styles: ["\n        "]
                }] }
    ];
    /** @nocollapse */
    InputGroupComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    InputGroupComponent.propDecorators = {
        onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
    };
    return InputGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ComponentPool = /** @class */ (function () {
    function ComponentPool() {
        this.registeredComponents = {};
        this.registeredServices = {};
        this.registerComponent("span", SpanComponent);
        this.registerComponent("address", AddressComponent);
        this.registerComponent("email", EmailComponent);
        this.registerComponent("phone", PhoneComponent);
        this.registerComponent("font", FontComponent);
        this.registerComponent("image", ImageComponent);
        this.registerComponent("video", VideoComponent);
        this.registerComponent("json", JsonComponent);
        this.registerComponent("link", LinkComponent);
        this.registerComponent("rating", RatingComponent);
        this.registerComponent("input", InputComponent);
        this.registerComponent("checkbox", CheckboxComponent);
        this.registerComponent("select", SelectComponent);
        this.registerComponent("share", ShareComponent);
        this.registerComponent("like", LikeComponent);
        this.registerComponent("lastupdate", LastUpdateComponent);
        this.registerComponent("calendar", CalendarComponent);
        this.registerComponent("inputgroup", InputGroupComponent);
    }
    /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    ComponentPool.prototype.registerComponent = /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    function (name, component) {
        this.registeredComponents[name] = component;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.removeComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        delete this.registeredComponents[name];
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.registeredComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.registeredComponents[name];
    };
    /**
     * @param {?} name
     * @param {?} service
     * @return {?}
     */
    ComponentPool.prototype.registerServiceForComponent = /**
     * @param {?} name
     * @param {?} service
     * @return {?}
     */
    function (name, service) {
        this.registeredServices[name] = service;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.removeServiceForComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        delete this.registeredServices[name];
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.registeredServiceForComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.registeredServices[name];
    };
    ComponentPool.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentPool.ctorParameters = function () { return []; };
    return ComponentPool;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IntoDirective = /** @class */ (function () {
    function IntoDirective(viewRef, el, pool, componentFactoryResolver) {
        this.viewRef = viewRef;
        this.el = el;
        this.pool = pool;
        this.componentFactoryResolver = componentFactoryResolver;
        this.onComponentChange = function (event) { };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    IntoDirective.prototype.split = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    /**
     * @param {?} content
     * @param {?} args
     * @param {?} data
     * @return {?}
     */
    IntoDirective.prototype._transform = /**
     * @param {?} content
     * @param {?} args
     * @param {?} data
     * @return {?}
     */
    function (content, args, data) {
        /** @type {?} */
        var result = content;
        switch (args[0]) {
            case "slice":
                /** @type {?} */
                var start_1 = parseInt(args[1], 10);
                /** @type {?} */
                var end_1 = undefined;
                if (args.length > 2) {
                    end_1 = parseInt(args[2], 10);
                }
                /** @type {?} */
                var slicer_1 = new SlicePipe();
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
                /** @type {?} */
                var numLocal = "en_US";
                /** @type {?} */
                var numDecimal_1 = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal_1 = args[2];
                }
                /** @type {?} */
                var decimaler_1 = new DecimalPipe(numLocal);
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
            case "currency":
                /** @type {?} */
                var cp_1 = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
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
                // wrap:something:something  OR wrap:something
                result = new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
                break;
            case "append":
                // append:something
                result = new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "prepend":
                // prepend:something
                result = new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "map":
                // map:key1;value1/key2;value2/key3;value3
                result = new MapPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "date":
                /** @type {?} */
                var dateLocal = "en_US";
                /** @type {?} */
                var dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                /** @type {?} */
                var dater_1 = new DatePipe(dateLocal);
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
            case "uppercase":
                /** @type {?} */
                var ucp_1 = new UpperCasePipe();
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
                /** @type {?} */
                var lcp_1 = new LowerCasePipe();
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
                // mask:4:*  OR mask:4
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
                // valueof:key
                result = new ValueOfPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "if":
                /** @type {?} */
                var acondition = args.length > 1 ? args[1] : "";
                /** @type {?} */
                var value = args.length > 2 ? args[2] : "";
                /** @type {?} */
                var action = args.length > 3 ? args[3] : "";
                /** @type {?} */
                var altAction = args.length > 4 ? args[4] : "";
                result = new ConditionalPipe().transform(content, acondition, value, action, altAction);
                if (typeof result === "string") {
                    result = result[0] === '"' ? result.substring(1, result.length - 1) : result;
                    result = this.split(result);
                    result = this._transform(content, result, data);
                }
                break;
            case "join":
                // json
                result = new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "json":
                // json
                result = this.transformComponent("json", content, this.intoId, this.intoName, data, "");
                break;
            case "font":
                // font:fa fa-check:left:*
                result = this.transformComponent("font", content, this.intoId, this.intoName, data, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
                break;
            case "email":
                // email
                result = this.transformComponent("email", content, this.intoId, this.intoName, data, "");
                break;
            case "phone":
                if (args.length > 2) {
                    result = this.transformComponent("phone", content, this.intoId, this.intoName, data, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = this.transformComponent("phone", content, this.intoId, this.intoName, data, args[1], false);
                }
                else {
                    result = this.transformComponent("phone", content, this.intoId, this.intoName, data, false, false);
                }
                break;
            case "address":
                // address
                result = this.transformComponent("address", content, this.intoId, this.intoName, data, "");
                break;
            case "rating":
                // rating
                result = this.transformComponent("rating", content, this.intoId, this.intoName, data, "");
                break;
            case "share":
                // share
                result = this.transformComponent("share", content, this.intoId, this.intoName, data, args);
                break;
            case "like":
                if (args.length > 3) {
                    result = this.transformComponent("like", content, this.intoId, this.intoName, data, args[1], args[2], args[3]);
                }
                else {
                    result = this.transformComponent("like", content, this.intoId, this.intoName, data, false, false, undefined);
                }
                break;
            case "lastupdate":
                if (args.length > 1) {
                    result = this.transformComponent("lastupdate", content, this.intoId, this.intoName, data, args[1]);
                }
                else {
                    result = this.transformComponent("lastupdate", content, this.intoId, this.intoName, data, false);
                }
                break;
            case "select":
                if (args.length > 1) {
                    result = this.transformComponent("select", content, this.intoId, this.intoName, data, args[1]);
                }
                else {
                    result = this.transformComponent("select", content, this.intoId, this.intoName, data, false);
                }
                break;
            case "inputgroup":
                if (args.length > 1) {
                    result = this.transformComponent("inputgroup", content, this.intoId, this.intoName, data, args[1]);
                }
                else {
                    result = this.transformComponent("inputgroup", content, this.intoId, this.intoName, data, "radio");
                }
                break;
            case "link":
                // link:target:text or link:text or link
                if (args.length > 2) {
                    result = this.transformComponent("link", content, this.intoId, this.intoName, data, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = this.transformComponent("link", content, this.intoId, this.intoName, data, "", args[1]);
                }
                else {
                    result = this.transformComponent("link", content, this.intoId, this.intoName, data, "", "");
                }
                break;
            case "input":
                // input:placeholder:pipe
                result = this.transformComponent("input", content, this.intoId, this.intoName, data, args[1], args.length > 2 ? args[2] : "");
                break;
            case "checkbox":
                // input:ideal:useFont
                result = this.transformComponent("checkbox", content, this.intoId, this.intoName, data, args[1], args.length > 2 ? args[2] : "");
                break;
            case "image":
                // image:200px:auto:alttext OR image:200px:alternate-text OR image:200px OR image
                if (args.length > 3) {
                    result = this.transformComponent("image", content, this.intoId, this.intoName, data, args[1], args[2], args[3]);
                }
                else if (args.length > 2) {
                    result = this.transformComponent("image", content, this.intoId, this.intoName, data, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = this.transformComponent("image", content, this.intoId, this.intoName, data, args[1]);
                }
                else {
                    result = this.transformComponent("image", content, this.intoId, this.intoName, data, "");
                }
                break;
            case "video":
                // video:200px:auto:alttext OR video:200px:alternate-text OR video:200px OR image
                if (args.length > 3) {
                    result = this.transformComponent("video", content, this.intoId, this.intoName, data, args[1], args[2], args[3]);
                }
                else if (args.length > 2) {
                    result = this.transformComponent("video", content, this.intoId, this.intoName, data, args[1], args[2]);
                }
                else if (args.length > 1) {
                    result = this.transformComponent("video", content, this.intoId, this.intoName, data, args[1]);
                }
                else {
                    result = this.transformComponent("video", content, this.intoId, this.intoName, data, "");
                }
                break;
            default:
                // unknown formatter
                try {
                    result = this.transformComponent(args[0], content, this.intoId, this.intoName, data, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "", args.length > 4 ? args[4] : "", args.length > 5 ? args[5] : "");
                }
                catch (x) {
                    console.error(x);
                }
                break;
        }
        return result;
    };
    /**
     * @param {?} type
     * @param {?} content
     * @param {?} id
     * @param {?} name
     * @param {?} data
     * @param {...?} args
     * @return {?}
     */
    IntoDirective.prototype.transformComponent = /**
     * @param {?} type
     * @param {?} content
     * @param {?} id
     * @param {?} name
     * @param {?} data
     * @param {...?} args
     * @return {?}
     */
    function (type, content, id, name, data) {
        var _this = this;
        var args = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            args[_i - 5] = arguments[_i];
        }
        /** @type {?} */
        var result;
        if (content === undefined) {
            return "";
        }
        if (content instanceof Date || typeof content === "string" || typeof content === "number" || typeof content === "boolean" || Object.keys(content).length) {
            result = this.registeredComponentFor(type);
            if (result === null || result === undefined) {
                console.error("Custom component '" + type + "' is not defined.");
            }
            else {
                result.id = id;
                result.name = name;
                result.service = this.pool.registeredServiceForComponent(type);
                result.transform(content.source ? content.source : content, data, args);
                if (result.onIntoComponentChange && this.onComponentChange) {
                    result.onIntoComponentChange.subscribe(this.onComponentChange);
                }
            }
        }
        else if (content instanceof Array) {
            /** @type {?} */
            var counter_1 = 0;
            result = content;
            content.map(function (source) {
                if (typeof source === "string" ||
                    typeof content === "number" ||
                    typeof content === "boolean" ||
                    Object.keys(content).length) {
                    /** @type {?} */
                    var sx = _this.registeredComponentFor(type);
                    if (sx === null || sx === undefined) {
                        console.error("Custom component '" + type + "' is not defined.");
                    }
                    else {
                        sx.id = id + '-' + (counter_1++);
                        sx.name = name;
                        sx.service = _this.pool.registeredServiceForComponent(type);
                        sx.transform(source.source ? source.source : source, data, args);
                        if (sx.onIntoComponentChange && _this.onComponentChange) {
                            sx.onIntoComponentChange.subscribe(_this.onComponentChange);
                        }
                    }
                }
            });
        }
        return result;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    IntoDirective.prototype.registeredComponentFor = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var component = this.pool.registeredComponent(name);
        /** @type {?} */
        var result = null;
        if (component) {
            /** @type {?} */
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            /** @type {?} */
            var componentRef = this.viewRef.createComponent(componentFactory);
            /** @type {?} */
            var domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
            this.el.nativeElement.appendChild(domElem);
            result = (/** @type {?} */ (componentRef.instance));
        }
        return result;
    };
    /**
     * @return {?}
     */
    IntoDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.into || this.rawContent) {
            /** @type {?} */
            var result_1 = this.rawContent;
            if (this.into) {
                this.into.split("|").map(function (item) {
                    result_1 = _this._transform(result_1, _this.split(item), _this.intoData);
                });
            }
            if (typeof result_1 === "string") {
                this.registeredComponentFor("span").transform(result_1, [], this.intoData);
            }
            else if (result_1 instanceof Array) {
                result_1.map(function (source) {
                    if (typeof source === "string") {
                        _this.registeredComponentFor("span").transform(source, [], _this.intoData);
                    }
                });
            }
        }
    };
    IntoDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[into]'
                },] }
    ];
    /** @nocollapse */
    IntoDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef },
        { type: ComponentPool },
        { type: ComponentFactoryResolver }
    ]; };
    IntoDirective.propDecorators = {
        rawContent: [{ type: Input, args: ["rawContent",] }],
        intoId: [{ type: Input, args: ["intoId",] }],
        intoName: [{ type: Input, args: ["intoName",] }],
        intoData: [{ type: Input, args: ["intoData",] }],
        into: [{ type: Input, args: ["into",] }],
        onComponentChange: [{ type: Input, args: ["onComponentChange",] }]
    };
    return IntoDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IntoPipeModule = /** @class */ (function () {
    function IntoPipeModule() {
    }
    IntoPipeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        AddressComponent,
                        EmailComponent,
                        PhoneComponent,
                        FontComponent,
                        ImageComponent,
                        VideoComponent,
                        JsonComponent,
                        LinkComponent,
                        RatingComponent,
                        InputComponent,
                        CheckboxComponent,
                        SelectComponent,
                        SpanComponent,
                        ShareComponent,
                        LikeComponent,
                        CalendarComponent,
                        LastUpdateComponent,
                        InputGroupComponent,
                        JoinPipe,
                        InToPipe,
                        ImagePipe,
                        VideoPipe,
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
                        VideoPipe,
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
                        IntoDirective,
                        AddressComponent,
                        EmailComponent,
                        PhoneComponent,
                        FontComponent,
                        ImageComponent,
                        VideoComponent,
                        JsonComponent,
                        LinkComponent,
                        InputComponent,
                        CheckboxComponent,
                        RatingComponent,
                        SelectComponent,
                        SpanComponent,
                        ShareComponent,
                        LikeComponent,
                        CalendarComponent,
                        LastUpdateComponent,
                        InputGroupComponent
                    ],
                    entryComponents: [
                        AddressComponent,
                        EmailComponent,
                        PhoneComponent,
                        FontComponent,
                        ImageComponent,
                        VideoComponent,
                        JsonComponent,
                        LinkComponent,
                        InputComponent,
                        CheckboxComponent,
                        RatingComponent,
                        SelectComponent,
                        SpanComponent,
                        ShareComponent,
                        LikeComponent,
                        CalendarComponent,
                        LastUpdateComponent,
                        InputGroupComponent
                    ],
                    providers: [
                        JoinPipe,
                        InToPipe,
                        DatePipe,
                        CurrencyPipe,
                        DecimalPipe,
                        JsonPipe,
                        SlicePipe,
                        UpperCasePipe,
                        LowerCasePipe,
                        ImagePipe,
                        VideoPipe,
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
                        ComponentPool
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return IntoPipeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { InToPipe, MaskPipe, MapPipe, LinkPipe, ImagePipe, VideoPipe, PrependPipe, AppendPipe, WrapPipe, EmailPipe, RatingPipe, AddressPipe, JoinPipe, FontPipe, ValueOfPipe, SanitizeHtmlPipe, ConditionalPipe, IntoPipeModule, IntoDirective, ComponentPool, AddressComponent as ɵa, CalendarComponent as ɵp, CheckboxComponent as ɵk, EmailComponent as ɵb, FontComponent as ɵd, ImageComponent as ɵe, InputGroupComponent as ɵr, InputComponent as ɵj, JsonComponent as ɵg, LastUpdateComponent as ɵq, LikeComponent as ɵo, LinkComponent as ɵh, PhoneComponent as ɵc, RatingComponent as ɵi, SelectComponent as ɵl, ShareComponent as ɵn, SpanComponent as ɵm, VideoComponent as ɵf };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtaW50by1waXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL21hc2sucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL21hcC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvdmFsdWVvZi5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvbGluay5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvaW1hZ2UucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL3ZpZGVvLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9wcmVwZW5kLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9hcHBlbmQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL3dyYXAucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2VtYWlsLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9yYXRpbmcucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2FkZHJlc3MucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2pvaW4ucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2ZvbnQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2NvbmRpdGlvbmFsLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9pbnRvLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9zYW5pdGl6ZUh0bWwucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvYWRkcmVzcy5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2VtYWlsLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvcGhvbmUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9mb250LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy92aWRlby5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2pzb24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9saW5rLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvcmF0aW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL3NwYW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2xpa2UuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2xhc3R1cGRhdGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9pbnB1dC1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbmplY3RhYmxlcy9jb21wb25lbnQucG9vbC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2RpcmVjdGl2ZXMvaW50by5kaXJlY3RpdmUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gbWFzayBzZW5zaXRpdmUgaW5mb3JtYXRpb24uIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSBtYXNrZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbWFzaycgfSlcclxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgbWFza1N0cmluZyhpdGVtLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hc2tlZFNlY3Rpb24gPSBpdGVtICA/IGl0ZW0uc2xpY2UoMCwgLXZpc2libGVEaWdpdHMpIDogXCJcIjtcclxuICAgICAgICBjb25zdCB2aXNpYmxlU2VjdGlvbiA9IGl0ZW0gPyBpdGVtLnNsaWNlKC12aXNpYmxlRGlnaXRzKSA6IFwiXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtID8gbWFza2VkU2VjdGlvbi5yZXBsYWNlKC8uL2csIG1hc2tXaXRoKSArIHZpc2libGVTZWN0aW9uIDogXCJcIjtcclxuICAgIH1cclxuICAgIG1hc2tBcnJheShpdGVtcywgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5tYXNrU3RyaW5nKGl0ZW0sIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB2aXNpYmxlRGlnaXRzID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IDQ7XHJcbiAgICAgICAgY29uc3QgbWFza1dpdGggPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogJyonO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza1N0cmluZyhzb3VyY2UsIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza0FycmF5KHNvdXJjZSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byB0YWtlIGEgc3RyaW5nIGFzIGEga2V5IGFuZCByZXR1cm5zIHZhbHVlIG9mIGtleSBmcm9tIHRoZSBnaXZlbiBtYXAgb2JqZWN0LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdtYXAnIH0pXHJcbmV4cG9ydCBjbGFzcyBNYXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdmFsdWVzRm9yKGxpc3QsIG1hcCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxpc3QubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hcFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtYXBba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZ2VNYXBwaW5nKG1hcHBpbmcpIHtcclxuICAgICAgICBjb25zdCBtYXAgPSBtYXBwaW5nO1xyXG4gICAgICAgIGlmKCBtYXBwaW5nLnRyaW0gKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9e307XHJcbiAgICAgICAgICAgIG1hcHBpbmcuc3BsaXQoJy8nKS5tYXAoKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0ga2V5LnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICBtYXBbeFswXV0gPSB4WzFdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFwcGluZyA9IG1hcDsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcHBpbmc7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZU1hcHBpbmcoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW3NvdXJjZV0gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNGb3Ioc291cmNlLCBtYXApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBtYXAgb2JqZWN0LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd2YWx1ZW9mJyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsdWVPZlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB2YWx1ZU9mU2luZ2xlKHNvdXJjZSwga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdmFsdWVPZk11bHRpcGxlKHNvdXJjZXMsIGtleSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWx1ZU9mU2luZ2xlKHNvdXJjZSwga2V5KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShvYmplY3Q6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGlmICgodHlwZW9mIG9iamVjdCA9PT0gXCJzdHJpbmdcIikgfHwgIShvYmplY3QgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZlNpbmdsZShvYmplY3QsIGFyZ3NbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mTXVsdGlwbGUob2JqZWN0LCBhcmdzWzBdKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhIGxpbmsuXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2xpbmsnIH0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSkge1xyXG4gICAgICAgIGlmKCF0aXRsZSB8fCAhdGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgdGl0bGUgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8YSBocmVmPSdcIitzb3VyY2UrXCInIHRhcmdldD0nXCIrdGFyZ2V0K1wiJz5cIit0aXRsZStcIjwvYT5cIjtcclxuICAgIH1cclxuICAgIGFycmF5VG9JbWFnTGluayhzb3VyY2VzLCB0YXJnZXQsIHRpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvTGluayhzb3VyY2UsIHRhcmdldCwgXCJcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9JbWFnTGluayhzb3VyY2UsIHRhcmdldCwgdGl0bGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGltYWdlIGRpc3BsYXkuIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSB0cmFuc2Zvcm1lZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpbWFnZScgfSlcclxuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHN0cmluZ1RvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBpZighYWx0IHx8ICFhbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9XFwnXCIrc291cmNlK1wiXFwnIHN0eWxlPVxcJ1wiKyB3aWR0aCArIGhlaWdodCArIFwiXFwnIHRpdGxlPVxcJ1wiK2FsdCtcIlxcJyAvPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb0ltYWdlKHNvdXJjZXMsIHdpZHRoLCBoZWlnaHQsIGFsdCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB3aWR0aDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBcIndpZHRoOiBcIiArIGFyZ3NbMF0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBcImhlaWdodDogXCIgKyBhcmdzWzFdICsgXCI7XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFsdDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgXCJcIik7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGltYWdlIGRpc3BsYXkuIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSB0cmFuc2Zvcm1lZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd2aWRlbycgfSlcclxuZXhwb3J0IGNsYXNzIFZpZGVvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBpZighYWx0IHx8ICFhbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPHZpZGVvIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgc3R5bGU9XFwnXCIrIHdpZHRoICsgaGVpZ2h0ICsgXCJcXCcgdGl0bGU9XFwnXCIrYWx0K1wiXFwnICBjb250cm9scz1cXCd0cnVlXFwnIC8+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvVmlkZW8oc291cmNlcywgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IFwid2lkdGg6IFwiICsgYXJnc1swXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBoZWlnaHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IFwiaGVpZ2h0OiBcIiArIGFyZ3NbMV0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBcIlwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHByZXBlbmQgY2hhcmFjdGVyKHMpIHRvIGEgY29udGVudC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncHJlcGVuZCcgfSlcclxuZXhwb3J0IGNsYXNzIFByZXBlbmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5ICsgc291cmNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChrZXkgKyBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gYXBwZW5kIGNoYXJhY3RlcihzKSB0byBhIGNvbnRlbnQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FwcGVuZCcgfSlcclxuZXhwb3J0IGNsYXNzIEFwcGVuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgICBcclxuICAgICAgICBjb25zdCBrZXkgPSAoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIGtleTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSArIGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHdyYXAgYSBjb250ZW50IGludG8gY2hhcmFjdGVyKHMpLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd3cmFwJyB9KVxyXG5leHBvcnQgY2xhc3MgV3JhcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgXHJcbiAgICAgICAgY29uc3QgcHJlID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgcG9zdD0gcHJlLmxlbmd0aCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIChhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIikgOiBwcmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBzb3VyY2UgKyBwb3N0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwcmUgKyBpdGVtICsgcG9zdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gZW1haWwgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZW1haWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBlbWFpbEZyb21TdHJpbmcoc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXCdtYWlsdG86XCIrc291cmNlK1wiXFwnID48c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj48L2E+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtYWlsRnJvbVN0cmluZyhzb3VyY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmVtYWlsRnJvbVN0cmluZyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYSByYWl0aW5nIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3JhaXRpbmcnIH0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICByYXRlU3RyaW5nKHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgY29uc3QgZmxvYXQgPSBwYXJzZUZsb2F0KHNvdXJjZSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gXCI8c3BhbiBjbGFzcz0ncmF0aW5nJz5cIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKysgKSB7XHJcbiAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGZsb2F0ICE9PSB2YWx1ZSApIHtcclxuICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgeCArPSBcIjwvc3Bhbj48c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZSc+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXRlU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucmF0ZVN0cmluZyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gYWRkcmVzcyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhZGRyZXNzJyB9KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2UuY2l0eSArIFwiLCBcIiArIHNvdXJjZS56aXBjb2RlICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2FkZHJlc3MnPjxzcGFuPlwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICBcIjxzcGFuPiBcIiArIHNvdXJjZS5jaXR5ICtcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArIFwiPC9zcGFuPlwiICsgXHJcbiAgICAgICAgXCI8L3NwYW4+IDxhIGhyZWY9XFwnXCIgKyB1cmwgKyBcIlxcJyBjbGFzcz0nZ29vZ2xlLW1hcCc+PHNwYW4gY2xhc3M9J2ZhIGZhLW1hcC1tYXJrZXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj48L2E+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGpvaW4gYXJyYXlzIG9yIGpzb24gYXR0cmlidXRlIHZhbHVlcy5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnam9pbicgfSlcclxuZXhwb3J0IGNsYXNzIEpvaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5qb2luKGFyZ3NbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oYXJnc1swXSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBlbWFpbCBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdlbWFpbCcgfSlcclxuZXhwb3J0IGNsYXNzIEZvbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBmb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIChsb2NhdGlvbiA9PT0gXCJsZWZ0XCIgPyBcclxuICAgICAgICAgICAgICAgIChmb250ICsgY29udGVudCkgOiBcclxuICAgICAgICAgICAgICAgICgobG9jYXRpb24gPT09IFwicmlnaHRcIikgPyBjb250ZW50ICsgZm9udCA6IGZvbnQpKTtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBhcmdzLmxlbmd0aCA/IFwiPHNwYW4gY2xhc3M9XFwnXCIgKyBhcmdzWzBdICsgXCJcXCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhY3Rpb24gPT09IFwiKlwiID8gc291cmNlIDogKFwicmVwbGFjZVwiID09PSBhY3Rpb24udG9Mb3dlckNhc2UoKSA/IFwiXCIgOiBzb3VyY2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHJldHVybiBhIHRyYW5zZm9ybWF0aW9uIGFyZ3VtZW50IHdoaWNoIHNob3VsZCBiZSBwaXBlZCBpbnRvIGFub3RoZXIgdHJhbnNmb3JtIG9iamVjdFxyXG4qIHRvIHRyYW5zZm9ybSB0aGUgb2JqZWN0IHZhbHVlIHBhc3NlZCB0byB0aGlzIHBpcGUuXHJcbiogdGhlIGFyZ3VtZW50cyBhcmUgYXMgZm9sbG93czogMSkgY29uZGl0aW9uLCAyKSB2YWx1ZSB0byBldmFsdWF0ZSB0aGUgY29uZGl0aW9uLCAzKSBhY3Rpb24sIDQpIGVsc2UgYWN0aW9uLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpZicgfSlcclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgY29uZGl0aW9uRnJvbVN0cmluZyhjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjb25kaXRpb24pe1xyXG4gICAgICAgICAgICBjYXNlIFwiPVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID09PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiIT1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCAhPT0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIj5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA+IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI+PVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID49IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI8XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPCB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPD1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA8PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiflwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY29udGVudCAhPT0gbnVsbCAmJiBjb250ZW50ICE9PSBcIm51bGxcIiA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiIX5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwgfHwgY29udGVudCA9PT0gXCJudWxsXCIgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIn49XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgJiYgdmFsdWUgJiYgU3RyaW5nKGNvbnRlbnQpLnRvTG93ZXJDYXNlKCkgPT09IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5cIiA6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID8gY29udGVudC5pbmRleE9mKGFjdGlvbikgOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBhY29uZGl0aW9uID0gIGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25Gcm9tU3RyaW5nKHNvdXJjZSwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2l0ZW1dID0gdGhpcy5jb25kaXRpb25Gcm9tU3RyaW5nKGl0ZW0sIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRGF0ZVBpcGUsXHJcbiAgQ3VycmVuY3lQaXBlLFxyXG4gIERlY2ltYWxQaXBlLFxyXG4gIEpzb25QaXBlLFxyXG4gIFNsaWNlUGlwZSxcclxuICBVcHBlckNhc2VQaXBlLFxyXG4gIExvd2VyQ2FzZVBpcGVcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtNYXNrUGlwZX0gZnJvbSAnLi9tYXNrLnBpcGUnO1xyXG5pbXBvcnQge01hcFBpcGV9IGZyb20gJy4vbWFwLnBpcGUnO1xyXG5pbXBvcnQge1ZhbHVlT2ZQaXBlfSBmcm9tICcuL3ZhbHVlb2YucGlwZSc7XHJcbmltcG9ydCB7TGlua1BpcGV9IGZyb20gJy4vbGluay5waXBlJztcclxuaW1wb3J0IHtJbWFnZVBpcGV9IGZyb20gJy4vaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7VmlkZW9QaXBlfSBmcm9tICcuL3ZpZGVvLnBpcGUnO1xyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7QXBwZW5kUGlwZX0gZnJvbSAnLi9hcHBlbmQucGlwZSc7XHJcbmltcG9ydCB7V3JhcFBpcGV9IGZyb20gJy4vd3JhcC5waXBlJztcclxuaW1wb3J0IHtFbWFpbFBpcGV9IGZyb20gJy4vZW1haWwucGlwZSc7XHJcbmltcG9ydCB7UmF0aW5nUGlwZX0gZnJvbSAnLi9yYXRpbmcucGlwZSc7XHJcbmltcG9ydCB7QWRkcmVzc1BpcGV9IGZyb20gJy4vYWRkcmVzcy5waXBlJztcclxuaW1wb3J0IHtKb2luUGlwZX0gZnJvbSAnLi9qb2luLnBpcGUnO1xyXG5pbXBvcnQge0ZvbnRQaXBlfSBmcm9tICcuL2ZvbnQucGlwZSc7XHJcbmltcG9ydCB7Q29uZGl0aW9uYWxQaXBlfSBmcm9tICcuL2NvbmRpdGlvbmFsLnBpcGUnO1xyXG5cclxuQFBpcGUoe25hbWU6J2ludG8nfSlcclxuZXhwb3J0IGNsYXNzIEluVG9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxudHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgbGlzdDogc3RyaW5nKTogYW55IHtcclxuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgXHJcbiAgICBsaXN0LnNwbGl0KFwifFwiKS5tYXAoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKHJlc3VsdCwgdGhpcy5zcGxpdChpdGVtKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzcGxpdChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10pIHtcclxuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG5cclxuICAgIHN3aXRjaChhcmdzWzBdKXtcclxuICAgICAgICBjYXNlIFwic2xpY2VcIiA6IFxyXG4gICAgICAgICAgICAvLyBzbGljZSA1OjEyIE9SIHNsaWNlIDVcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBlbmQ9IHBhcnNlSW50KGFyZ3NbMl0sIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzbGljZXIgPW5ldyBTbGljZVBpcGUoKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjb250ZW50LCBzdGFydCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJudW1iZXJcIiA6IFxyXG4gICAgICAgICAgICAvLyBudW1iZXI6ZW5fVVM6MiAgIG9yIG51bWJlcjplbl9VUyBvciBudW1iZXJcclxuICAgICAgICAgICAgbGV0IG51bUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgICAgICBsZXQgbnVtRGVjaW1hbD0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBudW1Mb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICBudW1EZWNpbWFsPSBhcmdzWzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxlciA9bmV3IERlY2ltYWxQaXBlKG51bUxvY2FsKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpZlwiIDogXHJcbiAgICAgICAgICAgIC8vIGlmOj06dHJ1ZTpmYSBmYS1jaGVjazpmYSBmYS1iZWxsXHJcbiAgICAgICAgICAgIGNvbnN0IGFjb25kaXRpb24gPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogXCJcIjtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENvbmRpdGlvbmFsUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnXCInID8gcmVzdWx0LnN1YnN0cmluZygxLHJlc3VsdC5sZW5ndGgtMSkgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cmFuc2Zvcm0oY29udGVudCx0aGlzLnNwbGl0KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJmb250XCIgOiBcclxuICAgICAgICAgICAgLy8gZm9udDpmYSBmYS1jaGVjazpsZWZ0OipcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEZvbnRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCIpOyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImN1cnJlbmN5XCIgOiBcclxuICAgICAgICAgICAgLy8gY3VycmVuY3k6ZW5fVVMgb3IgY3VycmVuY3lcclxuICAgICAgICAgICAgY29uc3QgY3AgPSBuZXcgQ3VycmVuY3lQaXBlKGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcImVuX1VTXCIpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ3cmFwXCIgOiBcclxuICAgICAgICAgICAgLy8gd3JhcDpzb21ldGhpbmc6c29tZXRoaW5nICBPUiB3cmFwOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgV3JhcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBhcmdzWzFdKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJhcHBlbmRcIiA6IFxyXG4gICAgICAgICAgICAvLyBhcHBlbmQ6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBcHBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJwcmVwZW5kXCIgOiBcclxuICAgICAgICAgICAgLy8gcHJlcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFByZXBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlbWFpbFwiIDogXHJcbiAgICAgICAgICAgIC8vIGVtYWlsXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBFbWFpbFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYWRkcmVzc1wiIDogXHJcbiAgICAgICAgICAgIC8vIGFkZHJlc3NcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFkZHJlc3NQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpOyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInJhdGluZ1wiIDogXHJcbiAgICAgICAgICAgIC8vIHJhdGluZ1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUmF0aW5nUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJtYXBcIiA6IFxyXG4gICAgICAgICAgICAvLyBtYXA6a2V5MTt2YWx1ZTEva2V5Mjt2YWx1ZTIva2V5Mzt2YWx1ZTNcclxuICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRhdGVcIiA6IFxyXG4gICAgICAgICAgICAvLyBkYXRlOmVuX1VTOk1NZGR5eSBPUiBkYXRlOlxcXCJNTS9kZC95eXl5IGhoOnNzXFxcIlxyXG4gICAgICAgICAgICAvLyBjb25zdCBkYXRlID0gKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSA/IG5ldyBEYXRlKGNvbnRlbnQpIDogY29udGVudDtcclxuICAgICAgICAgICAgbGV0IGRhdGVMb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICAgICAgbGV0IGRhdGVGb3JtYXQ9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVMb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PSBhcmdzWzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVyID1uZXcgRGF0ZVBpcGUoZGF0ZUxvY2FsKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkYXRlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwianNvblwiIDogXHJcbiAgICAgICAgICAgIC8vIGpzb25cclxuICAgICAgICAgICAgY29uc3QgamNwID0gIG5ldyBKc29uUGlwZSgpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGpjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChqY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImpvaW5cIiA6IFxyXG4gICAgICAgICAgICAvLyBqc29uXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBKb2luUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ1cHBlcmNhc2VcIiA6IFxyXG4gICAgICAgICAgICAvLyB1cHBlcmNhc2VcclxuICAgICAgICAgICAgY29uc3QgdWNwID0gIG5ldyBVcHBlckNhc2VQaXBlKCk7XHJcbiAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdWNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibG93ZXJjYXNlXCIgOiBcclxuICAgICAgICAgICAgLy8gbG93ZXJjYXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxjcCA9ICBuZXcgTG93ZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChsY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1hc2tcIiA6IFxyXG4gICAgICAgICAgICAvLyBtYXNrOjQ6KiAgT1IgbWFzazo0XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBwYXJzZUludChhcmdzWzFdLCAxMCksIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmFsdWVvZlwiIDogXHJcbiAgICAgICAgICAgIC8vIHZhbHVlb2Y6a2V5XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgVmFsdWVPZlBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlua1wiIDogXHJcbiAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHQgb3IgbGluazp0ZXh0IG9yIGxpbmtcclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBMaW5rUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTGlua1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IExpbmtQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpbWFnZVwiIDogXHJcbiAgICAgICAgICAgIC8vIGltYWdlOjIwMHB4OmF1dG86YWx0dGV4dCBPUiBpbWFnZToyMDBweDphbHRlcm5hdGUtdGV4dCBPUiBpbWFnZToyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBJbWFnZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmlkZW9cIiA6IFxyXG4gICAgICAgICAgICAvLyB2aWRlbzoyMDBweDphdXRvOmFsdHRleHQgT1IgdmlkZW86MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgdmlkZW86MjAwcHggT1IgdmlkZW9cclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IFZpZGVvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4qIFRha2VzIGNhcmUgb2YgcHJvYmxlbSB3aXRoIHNlY3VyaXR5IHByZWNhdXNpb25zIHRoYXQgc3RyaXAgb3V0IGNlcnRhaW4gY2hhcmFjdGVycyBcclxuKiBmcm9tIGVuZCByZXN1bHQgb2YgeW91ciByZXF1ZXN0cy5cclxuKiBjb2RlIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2ODExNjMvYW5ndWxhci0yLXNhbml0aXppbmctaHRtbC1zdHJpcHBlZC1zb21lLWNvbnRlbnQtd2l0aC1kaXYtaWQtdGhpcy1pcy1idWctb3ItZmVcclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc2FuaXRpemVIdG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FuaXRpemVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6RG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odjpzdHJpbmcpOlNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkZHJlc3MtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiYWRkcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImFkZHIyXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPiBcclxuICAgIDxhIFtocmVmXT1cInVybFwiIGNsYXNzPVwiZ29vZ2xlLW1hcFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5WaWV3IGluIGdvb2dsZSBtYXA8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYC5hZGRyZXNzIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgICAgIC5nb29nbGUtbWFwIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgICAgIC5mYSB7Y29sb3I6ICNmMDA7bWFyZ2luOiAwIDNweDt9XHJcbiAgICAgICAgLm9mZi1zY3JlZW4ge3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAtOTk5ZW07fVxyXG4gICAgICAgIDpob3N0IGE6aG92ZXIgLmZhLW1hcC1tYXJrZXJ7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBhZGRyMTogc3RyaW5nO1xyXG4gICAgYWRkcjI6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5hZGRyMSA9IHNvdXJjZS5zdHJlZXQgKyAnLCAnICsgc291cmNlLnN1aXRlO1xyXG4gICAgICAgIHRoaXMuYWRkcjIgPSBzb3VyY2UuY2l0eSArICcsICcgKyBzb3VyY2UuemlwY29kZTtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9XCIgKyBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgdGhpcy5hZGRyMiArXCImaWU9VVRGLThcIjtcclxuICAgICAgICB0aGlzLnVybCA9IHgucmVwbGFjZShcIlxcXFxzK1wiLCBcIitcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VtYWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBbaHJlZl09XCInbWFpbHRvOicgKyBzb3VyY2VcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Q6aG92ZXIgLmZhLWVudmVsb3Ble2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGhvbmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICAqbmdJZj1cImlzTGlua1wiIFtocmVmXT1cIid0ZWw6JyArIG5vcm1hbGl6ZVNvdXJjZSgpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZWRTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuICpuZ0lmPVwiIWlzTGlua1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVkU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IGE6aG92ZXIgLmZhLXBob25le2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzTGluazogYm9vbGVhbjtcclxuICAgIGZvcm1hdHRpbmc6IGJvb2xlYW47XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdID09PSAndHJ1ZScgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmc9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gPT09ICd0cnVlJyA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU291cmNlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQgKyAnO2V4dD0nICsgcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dCA9ICgxMCAtIHJlc3VsdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSByZXN1bHQuc2xpY2UoZXh0KTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxJyArIGIgKyAnO2V4dD0nICsgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGZvcm1hdHRlZFNvdXJjZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ID0gKDEwIC0gcmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIGIucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Kz0gKGIgKyAnIGV4dC4gJyArIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZvbnQtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ2xlZnQnXCIgICAgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gIT09ICdyZXBsYWNlJ1wiIFt0ZXh0Q29udGVudF09XCJjb250ZW50XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdyaWdodCdcIiAgIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAncmVwbGFjZSdcIiBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYHNwYW4gc3BhbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb250Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBmb250OiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmZvbnQgPSBhcmdzWzBdO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhY3Rpb24gPT09IFwiKlwiID8gc291cmNlIDogKFwicmVwbGFjZVwiID09PSBhY3Rpb24udG9Mb3dlckNhc2UoKSA/IFwiXCIgOiBzb3VyY2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbWFnZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8aW1nIFtzcmNdPVwic291cmNlXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIiBbdGl0bGVdPVwiYWx0XCIgLz5gLFxyXG4gICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBhbHQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5hbHQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYWx0IHx8ICF0aGlzLmFsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHQgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2aWRlby1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8dmlkZW8gW3NyY109XCJzb3VyY2VcIiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiIGNvbnRyb2xzPVwidHJ1ZVwiIFt0aXRsZV09XCJhbHRcIj48L3ZpZGVvPmAsXHJcbiAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZGVvQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHdpZHRoOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IHN0cmluZztcclxuICAgIGFsdDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFsdCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5hbHQgfHwgIXRoaXMuYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2pzb24tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJqc29uLXZpZXdcIiBbdGV4dENvbnRlbnRdPVwic291cmNlIHwganNvblwiPjwvc3Bhbj5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYC5qc29uLXZpZXcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgICAgICAgdW5pY29kZS1iaWRpOiBlbWJlZDsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc29uQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpbmstY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgPGEgW2hyZWZdPVwic291cmNlXCIgW3RhcmdldF09XCJ0YXJnZXRcIiBbdGV4dENvbnRlbnRdPVwidGl0bGVcIj48L2E+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0YXJnZXQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnRpdGxlIHx8ICF0aGlzLnRpdGxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmF0aW5nLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGluZyc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXInIGFyaWEtaGlkZGVuPSd0cnVlJyAqbmdGb3I9XCJsZXQgeCBvZiB2YWx1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3Rhci1oYWxmJyBhcmlhLWhpZGRlbj0ndHJ1ZScgKm5nSWY9XCJmbG9hdCAhPSB2YWx1ZVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPSdyYXRlLXZhbHVlJyBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGAucmF0aW5nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IGFueVtdID0gW107XHJcbiAgICBmbG9hdDogYW55O1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5mbG9hdCA9IHBhcnNlRmxvYXQoc291cmNlKTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgPGlucHV0ICNuYW1lRWRpdG9yXHJcbiAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgW2lkXT1cImlkXCJcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICBbdmFsdWVdPVwic291cmNlXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmIGZvcm1hdHRpbmcnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleWRvd24oJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPVwiY2xpY2tOYW1lKCRldmVudClcIlxyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic291cmNlID8gKHNvdXJjZSB8IGludG86Zm9ybWF0dGluZykgOiAnJm5ic3A7J1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmICFmb3JtYXR0aW5nJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoa2V5dXApPSdrZXlkb3duKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmFtZSgkZXZlbnQpXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZSA/IHNvdXJjZSA6ICcmbmJzcDsnXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5sb2NrZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAgICAgXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgY3Vyc29yOiBiZWFtO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6aG9zdCAubG9ja2VkOmhvdmVye2JvcmRlcjogMXB4IHNvbGlkICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIGZvcm1hdHRpbmc6c3RyaW5nO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgb2xkVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVFZGl0b3JcIilcclxuICBuYW1lRWRpdG9yO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUhvbGRlclwiKVxyXG4gIG5hbWVIb2xkZXJcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICBrZXl1cChldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmICgoKGNvZGUgPj0gNDgpICYmIChjb2RlIDw9IDkwKSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gOTYpICYmIChjb2RlIDw9IDExMSkpIHx8XHJcbiAgICAgICAgKChjb2RlID09IDMyKSB8fCAoY29kZSA9PSA4KSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gMTg2KSAmJiAoY29kZSA8PSAyMjIpKSkge1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpIHx8IChjb2RlID09PSAyNykgKSB7XHJcbiAgICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgaWYgKHRoaXMubmFtZUhvbGRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lSG9sZGVyLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSw2Nik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYmx1cihldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5ZG93bihldmVudCkge1xyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZXZlbnQudGFyZ2V0LCBcImNsaWNrXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZUVkaXRvcikge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSw2Nik7XHJcblx0XHR9XHJcbiAgfVxyXG5cclxuICBjbGlja05hbWUoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZWRpdE5hbWUgPSB0cnVlO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgfSw2Nik7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlcj0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICAgIHRoaXMuZm9ybWF0dGluZyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2hlY2tib3gtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cInVzZUZvbnRcIiBjbGFzcz1cImNoZWNrLWZvbnRcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzb3VyY2UgPT09IGlkZWFsXCIgI2NoZWNrIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNvdXJjZSAhPT0gaWRlYWxcIiAjdW5jaGVjayB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZhIGZhLWNsb3NlXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxpbnB1dCAqbmdJZj1cIiF1c2VGb250XCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiIFxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzb3VyY2U9PT1pZGVhbCA/IHRydWUgOiBudWxsXCIgXHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIiAvPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAuY2hlY2stZm9udDpob3Zlcntjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgLmNoZWNrLWZvbnQge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIG9yaWdpbmFsOiBzdHJpbmc7XHJcbiAgaWRlYWw6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB1c2VGb250OiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKFwiY2hlY2tcIilcclxuICBjaGVjaztcclxuXHJcbiAgQFZpZXdDaGlsZChcInVuY2hlY2tcIilcclxuICB1bmNoZWNrO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAga2V5dXAoZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZXZlbnQudGFyZ2V0LCBcImNsaWNrXCIpO1xyXG5cdFx0fVxyXG4gIH1cclxuXHJcbiAgY2xpY2soZXZlbnQpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMub3JpZ2luYWw7XHJcblx0XHR9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuaWRlYWw7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMudXNlRm9udCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuY2hlY2submF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudW5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudW5jaGVjay5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSw2Nik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuaWRlYWw9IGFyZ3MubGVuZ3RoID8gU3RyaW5nKGFyZ3NbMF0pIDogXCJcIjtcclxuICAgIHRoaXMudXNlRm9udD0gYXJncy5sZW5ndGggPiAxID8gQm9vbGVhbihhcmdzWzFdKSA6IGZhbHNlO1xyXG4gICAgdGhpcy5zb3VyY2U9IFN0cmluZyhzb3VyY2UpO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3JpZ2luYWw9IHRoaXMuc291cmNlID09PSB0aGlzLmlkZWFsID8gXCJcIiA6IHNvdXJjZTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VsZWN0IHRhYmluZGV4PVwiMFwiIFttdWx0aXBsZV09XCJtdWx0aXNlbGVjdCA/IHRydWU6bnVsbFwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uc1wiIFtzZWxlY3RlZF09XCJzb3VyY2UgPT09IHggPyB0cnVlIDogbnVsbFwiICBbdmFsdWVdPVwieFwiIFt0ZXh0Q29udGVudF09XCJ4XCI+PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuICBzZXJ2aWNlOiBQaXBlU2VydmljZUNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjbGljayhldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBjaGFuZ2UoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmdldERhdGFGb3IodGhpcy5uYW1lLCB0aGlzLmlkLCBkYXRhKTtcclxuICAgIHRoaXMubXVsdGlzZWxlY3QgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gPT09IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzcGFuLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGFuQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NoYXJlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgaWQ9J3NoYXJlLWNvbW1lbnQte3tpZH19JyBcclxuICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICBjbGFzcz0nc2hhcmUtaXRlbS10aXBzJyBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJ1xyXG4gICAgICAgIChjbGljayk9J3Nob3VsZERpc3BsYXkgPSAhc2hvdWxkRGlzcGxheSc+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXNoYXJlLWFsdFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwic2hhcmVcIj5zaGFyZTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fS10aXBzJyBjbGFzcz0ndGlwcycgKm5nSWY9J3Nob3VsZERpc3BsYXknPlxyXG4gICAgICA8c3BhbiBjbGFzcz0nc29jaWFsLXJlZmVyYWwnPlxyXG4gICAgICAgIDxhICpuZ0Zvcj1cImxldCBzaGFyZSBvZiBzaGFyZUxpc3RcIiBbY2xhc3NdPSdzaGFyZS5pY29uJyB0YXJnZXQ9J19ibGFuaycgW2hyZWZdPSdzaGFyZS5ocmVmJz48c3BhbiBjbGFzcz0nb2ZmLXNjcmVlbicgW3RleHRDb250ZW50XT1cInNoYXJlLnRpdGxlXCI+PC9zcGFuPjwvYT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge2Rpc3BsYXk6IHRhYmxlO3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzOmhvdmVyIHtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIC5mYSB7bWFyZ2luOiAwO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHM6aG92ZXIgLmZhe2NvbG9yOiAjZmFiZGFiO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMgLnNoYXJle21hcmdpbi1sZWZ0OiA1cHg7fVxyXG4gICAgLnRpcHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIC5mYSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwgLmZhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzaG91bGREaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBzb3VyY2U6IHN0cmluZzsgLy8gaXQgc2hvdWxkIGJlIGEgbGluayByZWZlcmVuY2UgdG8gd2hhdCBpcyBiZWluZyBzaGFyZWQuXHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNoYXJlTGlzdCA9IFtdOyAvLyBsaXN0IG9mIHNpdGVzIHRvIHNob3cgb24gc2hhcmUgdmlldy5cclxuICAgIFxyXG4gICAgb25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzaGFyZUluZm8odHlwZSwgYWRkcmVzcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYSBmYS0nICsgdHlwZSxcclxuICAgICAgICAgICAgaHJlZjogYWRkcmVzcyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzaGFyZSB3aXRoICcrIHR5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gKGFyZ3NbMF0gaW5zdGFuY2VvZiBBcnJheSkgPyBhcmdzWzBdIDogYXJncztcclxuICAgICAgICBsaXN0Lm1hcCggKGFyZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGFyZyA9PT0gJ2ZhY2Vib29rJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZmFjZWJvb2snLCAnaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAndHdpdHRlcicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3R3aXR0ZXInLCAnaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT90aXRsZT0mYW1wO3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2xpbmtlZGluJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnbGlua2VkaW4nLCdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdnb29nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnb29nbGUtcGx1cycsICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdwaW50ZXJlc3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnb29nbGUtcGx1cycsICdodHRwOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2xpbmsvP3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2RpZ2cnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdkaWdnJywgJ2h0dHA6Ly9kaWdnLmNvbS9zdWJtaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ2V0LXBvY2tldCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2dldC1wb2NrZXQnLCAnaHR0cHM6Ly9nZXRwb2NrZXQuY29tL2VkaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAneGluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3hpbmcnLCAnaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXI/b3A9c2hhcmUmdXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnc3R1bWJsZXVwb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdzdHVtYmxldXBvbicsICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWtlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgXHJcbiAgICAgICAgaWQ9J2xpa2Ute3tpZH19JyBcclxuICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICBjbGFzcz1cImxpa2VcIiBcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIiBcclxuICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIFxyXG4gICAgICAgIChjbGljayk9J3RvZ2dsZUNvdW50KCRldmVudCknPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwXCIgKm5nSWY9XCJ0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtdXAgc2VsZWN0ZWRcIiAqbmdJZj1cInRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLWRvd25cIiAqbmdJZj1cIiF0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtZG93biBzZWxlY3RlZFwiICpuZ0lmPVwiIXRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRzXCIgKm5nSWY9XCJzaG93Q291bnRcIiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVyU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L2E+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTogdGFibGU7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgICAgIC5saWtlIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAgIC5saWtlIC5jb3VudHN7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAgICAgLmxpa2UgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgICAgIC5saWtlIC5mYS5zZWxlY3RlZCB7Y29sb3I6IGdyZWVuO31cclxuICAgICAgICAubGlrZTpob3ZlciwgLmxpa2U6aG92ZXIgLmZhLCAubGlrZTpob3ZlciAuZmEuc2VsZWN0ZWR7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpa2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRhdGE6IGFueTtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93Q291bnQ6IGJvb2xlYW47XHJcbiAgICB0aHVtYnN1cDogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB0aHVtYnMgPSBcIlwiO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvdW50ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLnRodW1ic3VwID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxICYmIGFyZ3NbMV0gPT09ICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aHVtYnMgPSB0aGlzLnRodW1ic3VwID8gXCJ0aHVtYnMtdXAtaXRlbXNcIiA6IFwidGh1bWJzLWRvd24taXRlbXNcIjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gKHRoaXMuZ2V0SXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKSAhPT0gbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIGtleXVwKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZEl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgc2F2ZWRJdGVtcy5wdXNoKGlkKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShzYXZlZEl0ZW1zKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShbaWRdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc291cmNlICsrO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1vdmVJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIGNvbnN0IGkgPSBzYXZlZEl0ZW1zLmluZGV4T2YoaWQpO1xyXG4gICAgICAgICAgc2F2ZWRJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICBcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShzYXZlZEl0ZW1zKSk7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZSAtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXM6IGFueVtdID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBjb25zdCBpID0gc2F2ZWRJdGVtcy5pbmRleE9mKGlkKTtcclxuICAgIFxyXG4gICAgICAgICAgZm91bmQgPSBpIDwgMCA/IG51bGwgOiBzYXZlZEl0ZW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybWF0dGVyU291cmNlKCkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291cmNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc291cmNlID4gMTAwMCkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9ICh0aGlzLnNvdXJjZS8xMDAwKS50b0ZpeGVkKDEpICsgXCIga1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHRvZ2dsZUNvdW50KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLnRodW1ic1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IiwiLyogY2FsZW5kYXIgY29kZSBpcyBjb3BpZWQgZnJvbSBcImJlbiB0ZWRkZXJcIiBcclxuKiBodHRwOi8vd3d3LmJlbnRlZGRlci5jb20vY3JlYXRlLWNhbGVuZGFyLWdyaWQtY29tcG9uZW50LWFuZ3VsYXItNC9cclxuKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyRGF0ZSB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgdG9kYXk/OiBib29sZWFuO1xyXG4gIH1cclxuICBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhbGVuZGFyLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJjYWxlbmRhci1ib3hcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCIgW3RleHRDb250ZW50XT1cIm9yaWdEYXRlIHwgZGF0ZTpmb3JtYXR0aW5nXCI+PC9zcGFuPlxyXG4gICAgICA8YSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInBvcHBlclwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cInBvcGRhdGVwaWNrZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlBpY2sgYSBkYXRlPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIiAqbmdJZj1cInNob3dDYWxlbmRhclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLW5hdnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vbnRoLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5CYWNrIGEgbW9udGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInA0XCI+e3sgY3VycmVudERhdGUgfCBkYXRlOidNTU1NJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkZvcndhcmQgYSBtb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInllYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwcmV2WWVhcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+QmFjayBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3Bhbj57eyBjdXJyZW50RGF0ZSB8IGRhdGU6ICd5eXl5JyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRZZWFyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+Rm9yd2FyZCBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb250aC1ncmlkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkYXktbmFtZXNcIj5cclxuXHRcdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBuYW1lIG9mIGRheU5hbWVzXCIgY2xhc3M9XCJkYXktbmFtZSBwOVwiPnt7IG5hbWUgfX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrc1wiPlxyXG5cdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IHdlZWsgb2Ygd2Vla3NcIiBjbGFzcz1cIndlZWtcIj5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrLWRhdGUgZGlzYWJsZWRcIiAqbmdJZj1cIiFpc1NlbGVjdGVkTW9udGgoZGF5LmRhdGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2Vlay1kYXRlIGVuYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzU2VsZWN0ZWRNb250aChkYXkuZGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcblx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJzZWxlY3REYXRlKCRldmVudCwgZGF5KVwiXHJcblx0XHRcdFx0XHRcdCAgIFtjbGFzcy50b2RheV09XCJkYXkudG9kYXlcIlxyXG5cdFx0XHRcdFx0XHQgICBbY2xhc3Muc2VsZWN0ZWRdPVwiZGF5LnNlbGVjdGVkXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5wb3BwZXI6aG92ZXIgLmZhLWNhbGVuZGFye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICAuY2FsZW5kYXItYm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhci1ib3ggZGF0ZSB7ZmxleDogMTt9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCAucG9wcGVyIHtjdXJzb3I6IHBvaW50ZXI7ZmxleDogMCAwIDE1cHh9XHJcbiAgICAgICAgLmNhbGVuZGFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAqIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5jYWxlbmRhci1uYXZzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiBidXR0b24sXHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IGJ1dHRvbjpob3ZlcixcclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAuZGF5LW5hbWVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWtzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZXMge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICNkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGxpbmVhciwgY29sb3IgMTUwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5kaXNhYmxlZCB7Y29sb3I6ICNhYWE7fVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmhvdmVyIC5kYXRlLXRleHQsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1cyAuZGF0ZS10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmhvdmVyOjphZnRlcixcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnNlbGVjdGVkIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5zZWxlY3RlZDo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUudG9kYXk6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGl0ZW06IGFueTtcclxuICBzaG93Q2FsZW5kYXIgPSBmYWxzZTtcclxuICBmb3JtYXR0aW5nOnN0cmluZztcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gIG9yaWdEYXRlOiBEYXRlO1xyXG4gIGN1cnJlbnREYXRlOiBEYXRlO1xyXG4gIGRheU5hbWVzID0gWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ107XHJcbiAgd2Vla3M6IENhbGVuZGFyRGF0ZVtdW10gPSBbXTtcclxuICBzZWxlY3RlZERheXM6IERhdGVbXSA9IFtdO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcblxyXG4gIGtleXVwKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvcGRhdGVwaWNrZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNob3dDYWxlbmRhciA9ICF0aGlzLnNob3dDYWxlbmRhcjtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy5vcmlnRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgc291cmNlLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChuZXcgRGF0ZShpdGVtKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2gobmV3IERhdGUodGhpcy5zb3VyY2UpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbSA9IGRhdGE7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICAgIHRoaXMuZm9ybWF0dGluZz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkRGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlOiBEYXRlID0gdGhpcy5zZWxlY3RlZERheXNbaV07XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1NhbWVEYXkoZGF0ZSwgc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIHJldHVybiBpbmRleCA+IC0xO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZE1vbnRoKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuY3VycmVudERhdGUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0ZWREYXRlcyhkYXk6IENhbGVuZGFyRGF0ZSkge1xyXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMubXVsdGlzZWxlY3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWREYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSB0aGlzLnNlbGVjdGVkRGF5c1tpXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTYW1lRGF5KGRheS5kYXRlLCBkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkYXkuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZighZm91bmQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKGRheS5kYXRlKTtcclxuICAgICAgICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzID0gW2RheS5kYXRlXTtcclxuICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdERhdGUoZXZlbnQsIGRheTogQ2FsZW5kYXJEYXRlKTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5vcmlnRGF0ZSA9IGRheS5kYXRlO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRheS5kYXRlO1xyXG4gICAgdGhpcy50b2dnbGVTZWxlY3RlZERhdGVzKCBkYXkgKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF5cy5zb3J0KCAoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBhID4gYiA/IC0xIDogMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkRGF5cyxcclxuICAgICAgICBpdGVtOiB0aGlzLml0ZW1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaG93Q2FsZW5kYXIgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWN0aW9ucyBmcm9tIGNhbGVuZGFyXHJcbiAgcHJldk1vbnRoKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCktMSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBuZXh0TW9udGgoZXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSsxLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIHByZXZZZWFyKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKS0xLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBuZXh0WWVhcihldmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkrMSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCksIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB0aGUgY2FsZW5kYXIgZ3JpZFxyXG4gICAgZ2VuZXJhdGVDYWxlbmRhcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZmlsbERhdGVzKHRoaXMuY3VycmVudERhdGUpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtzOiBDYWxlbmRhckRhdGVbXVtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3ZWVrcy5wdXNoKGRhdGVzLnNwbGljZSgwLCA3KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2Vla3MgPSB3ZWVrcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTYW1lRGF5KGE6IERhdGUsIGI6IERhdGUpIHtcclxuICAgICAgICByZXR1cm4gYS5nZXRGdWxsWWVhcigpID09PSBiLmdldEZ1bGxZZWFyKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpICYmIFxyXG4gICAgICAgICAgICBhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2FtZU1vbnRoKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5nZXRZZWFyKCkgPT09IGIuZ2V0WWVhcigpICYmIFxyXG4gICAgICAgICAgICBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsRGF0ZXMoY3VycmVudERhdGU6IERhdGUpOiBDYWxlbmRhckRhdGVbXSB7XHJcbiAgICAgICAgY29uc3QgY20gPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdG0gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoY20uZ2V0RnVsbFllYXIoKSwgY20uZ2V0TW9udGgoKSwgMSlcclxuICAgICAgICBjb25zdCBmaXJzdE9mTW9udGggPSBmaXJzdERheS5nZXREYXkoKTtcclxuICAgICAgICBjb25zdCBmaXJzdERheU9mR3JpZCA9IG5ldyBEYXRlKGZpcnN0RGF5LmdldEZ1bGxZZWFyKCksIGZpcnN0RGF5LmdldE1vbnRoKCksIGZpcnN0RGF5LmdldERhdGUoKSAtIGZpcnN0T2ZNb250aCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaXJzdERheU9mR3JpZC5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaTwgKHN0YXJ0ICsgNDIpO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShmaXJzdERheU9mR3JpZC5nZXRGdWxsWWVhcigpLCBmaXJzdERheU9mR3JpZC5nZXRNb250aCgpLCBpKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRvZGF5OiB0aGlzLmlzU2FtZURheSh0bSwgZCksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5pc1NlbGVjdGVkKGQpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsYXN0dXBkYXRlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJzaG93SWNvblwiIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXREYXRlKClcIj48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OiB0YWJsZTtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAgICAgLmZhIHttYXJnaW46MCA1cHggMCAwfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93SWNvbjogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb3VudDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbiA9IChhcmdzICYmIGFyZ3MubGVuZ3RoICYmIGFyZ3NbMF0gPT09ICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZSgpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdGNvbnN0IG1pbnV0ZSA9IDYwMDAwOy8vIG9uZSBtaW51dGVcclxuXHRcdGNvbnN0IGhvdXIgPSAzNjAwMDAwOy8vIG9uZSBob3VyIGxpbWl0XHJcblx0XHRjb25zdCBkYXkgPSA4NjQwMDAwMDsvLyAyNCBob3VycyBsaW1pdFxyXG5cdFx0Y29uc3Qgd2VlayA9IDYwNDgwMDAwMDsvLyA3IGRheXMgbGltaXRcclxuXHRcdGNvbnN0IG1vbnRoID0gNjA0ODAwMDAwKjQ7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRjb25zdCB5ZWFyID0gNjA0ODAwMDAwKjUyOy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0bGV0IHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0bGV0IGRpZmYgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLSB0aGlzLnNvdXJjZS5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYoZGlmZiA8PSBtaW51dGUpIHsvLyB1cCB0byBhIG1pbnV0ZVxyXG5cdFx0XHRyZXN1bHQgPSBcInNlY29uZHMgYWdvXCI7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IGhvdXIpIHsvLyB1cCB0byBhbiBob3VyXHJcblx0XHRcdGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmL21pbnV0ZSk7XHJcblx0XHRcdGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAtIChtaW51dGVzICogbWludXRlKSkvMTAwMCk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAobWludXRlcyA8IDIgPyBcImEgbWludXRlXCIgOiBtaW51dGVzICsgXCIgbWludXRlcyBcIikgKyAoc2Vjb25kcyA+IDAgPyBcIiBhbmQgXCIgKyBzZWNvbmRzICsgXCIgc2Vjb25kcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gZGF5KSB7Ly8gdXAgdG8gYSBkYXlcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcihkaWZmL2hvdXIpO1xyXG5cdFx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoaG91cnMgKiBob3VyKSkvbWludXRlKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdCA9IChob3VycyA8IDIgPyBcImFuIGhvdXJcIiA6IGhvdXJzICsgXCIgaG91cnMgXCIpICsgKG1pbnV0ZXMgPiAwID8gXCIgYW5kIFwiICsgbWludXRlcyArIFwiIG1pbnV0ZXMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IHdlZWspIHsvLyB1cCB0byBhIHdlZWtcclxuXHRcdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKGRpZmYvZGF5KTtcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAtIChkYXlzICogZGF5KSkvaG91cik7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAoZGF5cyA8IDIgPyBcImEgZGF5XCIgOiBkYXlzICsgXCIgZGF5cyBcIikgKyAoaG91cnMgPiAwID8gXCIgYW5kIFwiICsgaG91cnMgKyBcIiBob3VycyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gbW9udGgpIHsvLyB1cCB0byBhIG1vbnRoXHJcblx0XHRcdGxldCB3ZWVrcyA9IE1hdGguZmxvb3IoZGlmZi93ZWVrKTtcclxuXHRcdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKChkaWZmIC0gKHdlZWtzICogd2VlaykpL2RheSk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAod2Vla3MgPCAyID8gXCJhIHdlZWtcIiA6IHdlZWtzICsgXCIgd2Vla3MgXCIpICsgKGRheXMgPiAwID8gXCIgYW5kIFwiICsgZGF5cyArIFwiIGRheXMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IHllYXIpIHsvLyB1cCB0byBhIHdlZWtcclxuXHRcdFx0bGV0IG1vbnRocyA9IE1hdGguZmxvb3IoZGlmZi9tb250aCk7XHJcblx0XHRcdGxldCB3ZWVrcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAobW9udGhzICogbW9udGgpKS93ZWVrKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChtb250aHMgPCAyID8gXCJhIG1vbnRoXCIgOiBtb250aHMgKyBcIiBtb250aHMgXCIpICsgKHdlZWtzID4gMCA/IFwiIGFuZCBcIiArIHdlZWtzICsgXCIgd2Vla3MgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgeWVhcnMgPSBNYXRoLmZsb29yKGRpZmYveWVhcik7XHJcblx0XHRcdGxldCBtb250aHMgPSBNYXRoLmZsb29yKChkaWZmIC0gKHllYXJzICogeWVhcikpL21vbnRoKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9ICh5ZWFycyA8IDIgPyBcImEgeWVhclwiIDogeWVhcnMgKyBcIiB5ZWFycyBcIikgKyAobW9udGhzID4gMCA/IFwiIGFuZCBcIiArIG1vbnRocyArIFwiIG1vbnRocyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50LCBQaXBlU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWdyb3VwLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1pdGVtXCIgKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiIFxyXG4gICAgICAgICAgICBbaWRdPVwibmFtZSArIGlcIiBcclxuICAgICAgICAgICAgW25hbWVdPVwibmFtZSArICh0eXBlID09PSAncmFkaW8nID8gJycgOiBpKVwiIFxyXG4gICAgICAgICAgICBbdmFsdWVdPVwieC52YWx1ZSA/IHgudmFsdWUgOiB4XCIgXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cImlzU2VsZWN0ZWQoeClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiLz5cclxuICAgICAgICA8bGFiZWwgW2Zvcl09XCJuYW1lICsgaVwiIFt0ZXh0Q29udGVudF09XCJ4LmxhYmVsID8geC5sYWJlbCA6IHhcIj48L2xhYmVsPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IGFueTtcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHNlcnZpY2U6IFBpcGVTZXJ2aWNlQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAgY2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5zb3VyY2UuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBpZiAoaSA8IDApIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3BsaWNlKGksMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuICBpc1NlbGVjdGVkKGl0ZW0pIHtcclxuICAgIGNvbnN0IHhpdGVtID0gaXRlbS52YWx1ZSA/IGl0ZW0udmFsdWUgOiBpdGVtO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICByZXR1cm4geGl0ZW0gPT09IHRoaXMuc291cmNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLnNvdXJjZS5tYXAoKHgpID0+IHtcclxuICAgICAgaWYgKHhpdGVtID09PSB4KSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3VuZDtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZvcih0aGlzLm5hbWUsIHRoaXMuaWQsIGRhdGEpO1xyXG4gICAgdGhpcy50eXBlID0gKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xyXG4gIH1cclxufVxyXG5cclxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFkZHJlc3NDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2FkZHJlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9lbWFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvbmVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Bob25lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb250LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy92aWRlby5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvanNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yYXRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3BhbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3Bhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaWtlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saWtlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IExhc3RVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xhc3R1cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0R3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0LWdyb3VwLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb29sIHtcblx0cHJpdmF0ZSByZWdpc3RlcmVkQ29tcG9uZW50cz0ge307XG5cdHByaXZhdGUgcmVnaXN0ZXJlZFNlcnZpY2VzPSB7fTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwic3BhblwiLCBTcGFuQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiYWRkcmVzc1wiLCBBZGRyZXNzQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiZW1haWxcIiwgRW1haWxDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJwaG9uZVwiLCBQaG9uZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImZvbnRcIiwgRm9udENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImltYWdlXCIsIEltYWdlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwidmlkZW9cIiwgVmlkZW9Db21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJqc29uXCIsIEpzb25Db21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJsaW5rXCIsIExpbmtDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJyYXRpbmdcIiwgUmF0aW5nQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiaW5wdXRcIiwgSW5wdXRDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJjaGVja2JveFwiLCBDaGVja2JveENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInNlbGVjdFwiLCBTZWxlY3RDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJzaGFyZVwiLCBTaGFyZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImxpa2VcIiwgTGlrZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImxhc3R1cGRhdGVcIiwgTGFzdFVwZGF0ZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImNhbGVuZGFyXCIsIENhbGVuZGFyQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiaW5wdXRncm91cFwiLCBJbnB1dEdyb3VwQ29tcG9uZW50KTtcblx0fVxuICBcblx0cmVnaXN0ZXJDb21wb25lbnQgKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXHR9XG5cdHJlbW92ZUNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV07XG5cdH1cblx0cmVnaXN0ZXJlZENvbXBvbmVudChuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0fVxuXG5cdHJlZ2lzdGVyU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXSA9IHNlcnZpY2U7XG5cdH1cblx0cmVtb3ZlU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG5cdHJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG59IiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgRGF0ZVBpcGUsXHJcbiAgICBDdXJyZW5jeVBpcGUsXHJcbiAgICBEZWNpbWFsUGlwZSxcclxuICAgIFNsaWNlUGlwZSxcclxuICAgIFVwcGVyQ2FzZVBpcGUsXHJcbiAgICBMb3dlckNhc2VQaXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7UHJlcGVuZFBpcGV9IGZyb20gJy4uL3BpcGVzL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7QXBwZW5kUGlwZX0gZnJvbSAnLi4vcGlwZXMvYXBwZW5kLnBpcGUnO1xyXG5pbXBvcnQge1dyYXBQaXBlfSBmcm9tICcuLi9waXBlcy93cmFwLnBpcGUnO1xyXG5pbXBvcnQge01hcFBpcGV9IGZyb20gJy4uL3BpcGVzL21hcC5waXBlJztcclxuaW1wb3J0IHtNYXNrUGlwZX0gZnJvbSAnLi4vcGlwZXMvbWFzay5waXBlJztcclxuaW1wb3J0IHtWYWx1ZU9mUGlwZX0gZnJvbSAnLi4vcGlwZXMvdmFsdWVvZi5waXBlJztcclxuaW1wb3J0IHtDb25kaXRpb25hbFBpcGV9IGZyb20gJy4uL3BpcGVzL2NvbmRpdGlvbmFsLnBpcGUnO1xyXG5pbXBvcnQge0pvaW5QaXBlfSBmcm9tICcuLi9waXBlcy9qb2luLnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vaW5qZWN0YWJsZXMvY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tpbnRvXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEludG9EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJyYXdDb250ZW50XCIpXHJcbiAgICByYXdDb250ZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9JZFwiKVxyXG4gICAgaW50b0lkOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9OYW1lXCIpXHJcbiAgICBpbnRvTmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvRGF0YVwiKVxyXG4gICAgaW50b0RhdGE6IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b1wiKVxyXG4gICAgaW50bzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dChcIm9uQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgICBvbkNvbXBvbmVudENoYW5nZSA9IChldmVudCkgPT4ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHB1YmxpYyBlbDpFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCxcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF90cmFuc2Zvcm0oY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICBcclxuICAgICAgICBzd2l0Y2goYXJnc1swXSl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzbGljZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBzbGljZSA1OjEyIE9SIHNsaWNlIDVcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kPSBwYXJzZUludChhcmdzWzJdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZXIgPW5ldyBTbGljZVBpcGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVuZCA/IHNsaWNlci50cmFuc2Zvcm0oY29udGVudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIG51bWJlcjplbl9VUzoyICAgb3IgbnVtYmVyOmVuX1VTIG9yIG51bWJlclxyXG4gICAgICAgICAgICAgICAgbGV0IG51bUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bURlY2ltYWw9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1Mb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtRGVjaW1hbD0gYXJnc1syXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxlciA9bmV3IERlY2ltYWxQaXBlKG51bUxvY2FsKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bURlY2ltYWwgPyBkZWNpbWFsZXIudHJhbnNmb3JtKGNvbnRlbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY3VycmVuY3lcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gY3VycmVuY3k6ZW5fVVMgb3IgY3VycmVuY3lcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNwID0gbmV3IEN1cnJlbmN5UGlwZShhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJlbl9VU1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndyYXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gd3JhcDpzb21ldGhpbmc6c29tZXRoaW5nICBPUiB3cmFwOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFdyYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogYXJnc1sxXSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhcHBlbmRcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFwcGVuZFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJlcGVuZFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBwcmVwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFByZXBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1hcFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBtYXA6a2V5MTt2YWx1ZTEva2V5Mjt2YWx1ZTIva2V5Mzt2YWx1ZTNcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTWFwUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGVcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZTplbl9VUzpNTWRkeXkgT1IgZGF0ZTpcXFwiTU0vZGQveXl5eSBoaDpzc1xcXCJcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGUgPSAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpID8gbmV3IERhdGUoY29udGVudCkgOiBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGVMb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRlRm9ybWF0PSBhcmdzWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVMb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD0gYXJnc1syXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVyID1uZXcgRGF0ZVBpcGUoZGF0ZUxvY2FsKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRhdGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkYXRlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVwcGVyY2FzZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyB1cHBlcmNhc2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVjcCA9ICBuZXcgVXBwZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdWNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh1Y3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb3dlcmNhc2VcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gbG93ZXJjYXNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsY3AgPSAgbmV3IExvd2VyQ2FzZVBpcGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFza1wiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBtYXNrOjQ6KiAgT1IgbWFzazo0XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIHBhcnNlSW50KGFyZ3NbMV0sIDEwKSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmFsdWVvZlwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZW9mOmtleVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWYWx1ZU9mUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlmXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGlmOj06dHJ1ZTpmYSBmYS1jaGVjazpmYSBmYS1iZWxsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY29uZGl0aW9uID0gIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbHRBY3Rpb24gPSAgYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgQ29uZGl0aW9uYWxQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICdcIicgPyByZXN1bHQuc3Vic3RyaW5nKDEscmVzdWx0Lmxlbmd0aC0xKSA6IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNwbGl0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKGNvbnRlbnQsIHJlc3VsdCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImpvaW5cIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8ganNvblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEpvaW5QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwianNvblwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBqc29uXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImpzb25cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsIGRhdGEsIFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZm9udFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBmb250OmZhIGZhLWNoZWNrOmxlZnQ6KlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJmb250XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbWFpbFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBlbWFpbFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJlbWFpbFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGhvbmVcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwicGhvbmVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTsgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwicGhvbmVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInBob25lXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgZmFsc2UsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZHJlc3NcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJhZGRyZXNzXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYXRpbmdcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gcmF0aW5nXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInJhdGluZ1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGFyZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBzaGFyZVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzaGFyZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIFwibGlrZVwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaWtlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlrZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSBcImxhc3R1cGRhdGVcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGFzdHVwZGF0ZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxhc3R1cGRhdGVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlucHV0Z3JvdXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW5wdXRncm91cFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0Z3JvdXBcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcInJhZGlvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW5rXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHQgb3IgbGluazp0ZXh0IG9yIGxpbmtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxpbmtcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaW5rXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlua1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDpwbGFjZWhvbGRlcjpwaXBlXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDppZGVhbDp1c2VGb250XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImNoZWNrYm94XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbWFnZToyMDBweDphdXRvOmFsdHRleHQgT1IgaW1hZ2U6MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgaW1hZ2U6MjAwcHggT1IgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW1hZ2VcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJpbWFnZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZpZGVvXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIHZpZGVvOjIwMHB4OmF1dG86YWx0dGV4dCBPUiB2aWRlbzoyMDBweDphbHRlcm5hdGUtdGV4dCBPUiB2aWRlbzoyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJ2aWRlb1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInZpZGVvXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gdW5rbm93biBmb3JtYXR0ZXJcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRvSWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9OYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA1ID8gYXJnc1s1XSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1Db21wb25lbnQodHlwZSwgY29udGVudDogYW55LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJib29sZWFuXCIgfHwgT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdcIiArIHR5cGUrIFwiJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRyYW5zZm9ybShjb250ZW50LnNvdXJjZSA/IGNvbnRlbnQuc291cmNlIDogY29udGVudCwgZGF0YSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZSAmJiB0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcImJvb2xlYW5cIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb250ZW50KS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ggPSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN4ID09PSBudWxsIHx8IHN4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ1wiICsgdHlwZSsgXCInIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5pZCA9IGlkICsgJy0nICsgKGNvdW50ZXIrKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC50cmFuc2Zvcm0oc291cmNlLnNvdXJjZSA/IHNvdXJjZS5zb3VyY2UgOiBzb3VyY2UsIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3gub25JbnRvQ29tcG9uZW50Q2hhbmdlICYmIHRoaXMub25Db21wb25lbnRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudEZvcihuYW1lKTogUGlwZUNvbXBvbmVudCB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRDb21wb25lbnQobmFtZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogUGlwZUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSB0aGlzLnZpZXdSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gICAgICAgICAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWYgPCBhbnkgPiApLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAoPFBpcGVDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmludG8gfHwgdGhpcy5yYXdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9ICB0aGlzLnJhd0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50by5zcGxpdChcInxcIikubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShyZXN1bHQsIHRoaXMuc3BsaXQoaXRlbSksIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIikudHJhbnNmb3JtKHJlc3VsdCwgW10sIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IoXCJzcGFuXCIpLnRyYW5zZm9ybShzb3VyY2UsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlLCBDdXJyZW5jeVBpcGUsIERlY2ltYWxQaXBlLCBKc29uUGlwZSwgU2xpY2VQaXBlLCBVcHBlckNhc2VQaXBlLCBMb3dlckNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEluVG9QaXBlIH0gZnJvbSAnLi9waXBlcy9pbnRvLnBpcGUnO1xyXG5pbXBvcnQge01hc2tQaXBlfSBmcm9tICcuL3BpcGVzL21hc2sucGlwZSc7XHJcbmltcG9ydCB7TWFwUGlwZX0gZnJvbSAnLi9waXBlcy9tYXAucGlwZSc7XHJcbmltcG9ydCB7TGlua1BpcGV9IGZyb20gJy4vcGlwZXMvbGluay5waXBlJztcclxuaW1wb3J0IHtJbWFnZVBpcGV9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7VmlkZW9QaXBlfSBmcm9tICcuL3BpcGVzL3ZpZGVvLnBpcGUnO1xyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuL3BpcGVzL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7Sm9pblBpcGV9IGZyb20gJy4vcGlwZXMvam9pbi5waXBlJztcclxuaW1wb3J0IHtBcHBlbmRQaXBlfSBmcm9tICcuL3BpcGVzL2FwcGVuZC5waXBlJztcclxuaW1wb3J0IHtXcmFwUGlwZX0gZnJvbSAnLi9waXBlcy93cmFwLnBpcGUnO1xyXG5pbXBvcnQge0VtYWlsUGlwZX0gZnJvbSAnLi9waXBlcy9lbWFpbC5waXBlJztcclxuaW1wb3J0IHtSYXRpbmdQaXBlfSBmcm9tICcuL3BpcGVzL3JhdGluZy5waXBlJztcclxuaW1wb3J0IHtBZGRyZXNzUGlwZX0gZnJvbSAnLi9waXBlcy9hZGRyZXNzLnBpcGUnO1xyXG5pbXBvcnQge0ZvbnRQaXBlfSBmcm9tICcuL3BpcGVzL2ZvbnQucGlwZSc7XHJcbmltcG9ydCB7VmFsdWVPZlBpcGV9IGZyb20gJy4vcGlwZXMvdmFsdWVvZi5waXBlJztcclxuaW1wb3J0IHtDb25kaXRpb25hbFBpcGV9IGZyb20gJy4vcGlwZXMvY29uZGl0aW9uYWwucGlwZSc7XHJcbmltcG9ydCB7U2FuaXRpemVIdG1sUGlwZX0gZnJvbSAnLi9waXBlcy9zYW5pdGl6ZUh0bWwucGlwZSc7XHJcblxyXG5pbXBvcnQge0ludG9EaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9pbnRvLmRpcmVjdGl2ZSdcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vaW5qZWN0YWJsZXMvY29tcG9uZW50LnBvb2wnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTcGFuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NwYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGRyZXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBob25lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Bob25lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9udC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy92aWRlby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKc29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2pzb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpa2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlrZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXN0VXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xhc3R1cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBZGRyZXNzQ29tcG9uZW50LFxyXG4gICAgRW1haWxDb21wb25lbnQsXHJcbiAgICBQaG9uZUNvbXBvbmVudCxcclxuICAgIEZvbnRDb21wb25lbnQsXHJcbiAgICBJbWFnZUNvbXBvbmVudCxcclxuICAgIFZpZGVvQ29tcG9uZW50LFxyXG4gICAgSnNvbkNvbXBvbmVudCxcclxuICAgIExpbmtDb21wb25lbnQsXHJcbiAgICBSYXRpbmdDb21wb25lbnQsXHJcbiAgICBJbnB1dENvbXBvbmVudCxcclxuICAgIENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgU3BhbkNvbXBvbmVudCxcclxuICAgIFNoYXJlQ29tcG9uZW50LFxyXG4gICAgTGlrZUNvbXBvbmVudCxcclxuICAgIENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTGFzdFVwZGF0ZUNvbXBvbmVudCxcclxuICAgIElucHV0R3JvdXBDb21wb25lbnQsXHJcbiAgICBKb2luUGlwZSxcclxuICAgIEluVG9QaXBlLFxyXG4gICAgSW1hZ2VQaXBlLFxyXG4gICAgVmlkZW9QaXBlLFxyXG4gICAgTGlua1BpcGUsXHJcbiAgICBNYXNrUGlwZSxcclxuICAgIE1hcFBpcGUsXHJcbiAgICBQcmVwZW5kUGlwZSxcclxuICAgIEFwcGVuZFBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIFZhbHVlT2ZQaXBlLFxyXG4gICAgRW1haWxQaXBlLFxyXG4gICAgUmF0aW5nUGlwZSxcclxuICAgIEZvbnRQaXBlLFxyXG4gICAgQ29uZGl0aW9uYWxQaXBlLFxyXG4gICAgQWRkcmVzc1BpcGUsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgSW50b0RpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgSm9pblBpcGUsXHJcbiAgICBJblRvUGlwZSxcclxuICAgIEltYWdlUGlwZSxcclxuICAgIFZpZGVvUGlwZSxcclxuICAgIExpbmtQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgV3JhcFBpcGUsXHJcbiAgICBWYWx1ZU9mUGlwZSxcclxuICAgIEVtYWlsUGlwZSxcclxuICAgIFJhdGluZ1BpcGUsXHJcbiAgICBGb250UGlwZSxcclxuICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgIEFkZHJlc3NQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIEludG9EaXJlY3RpdmUsXHJcbiAgICBBZGRyZXNzQ29tcG9uZW50LFxyXG4gICAgRW1haWxDb21wb25lbnQsXHJcbiAgICBQaG9uZUNvbXBvbmVudCxcclxuICAgIEZvbnRDb21wb25lbnQsXHJcbiAgICBJbWFnZUNvbXBvbmVudCxcclxuICAgIFZpZGVvQ29tcG9uZW50LFxyXG4gICAgSnNvbkNvbXBvbmVudCxcclxuICAgIExpbmtDb21wb25lbnQsXHJcbiAgICBJbnB1dENvbXBvbmVudCxcclxuICAgIENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgUmF0aW5nQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgU3BhbkNvbXBvbmVudCxcclxuICAgIFNoYXJlQ29tcG9uZW50LFxyXG4gICAgTGlrZUNvbXBvbmVudCxcclxuICAgIENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTGFzdFVwZGF0ZUNvbXBvbmVudCxcclxuICAgIElucHV0R3JvdXBDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgQWRkcmVzc0NvbXBvbmVudCxcclxuICAgIEVtYWlsQ29tcG9uZW50LFxyXG4gICAgUGhvbmVDb21wb25lbnQsXHJcbiAgICBGb250Q29tcG9uZW50LFxyXG4gICAgSW1hZ2VDb21wb25lbnQsXHJcbiAgICBWaWRlb0NvbXBvbmVudCxcclxuICAgIEpzb25Db21wb25lbnQsXHJcbiAgICBMaW5rQ29tcG9uZW50LFxyXG4gICAgSW5wdXRDb21wb25lbnQsXHJcbiAgICBDaGVja2JveENvbXBvbmVudCxcclxuICAgIFJhdGluZ0NvbXBvbmVudCxcclxuICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgIFNwYW5Db21wb25lbnQsXHJcbiAgICBTaGFyZUNvbXBvbmVudCxcclxuICAgIExpa2VDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIExhc3RVcGRhdGVDb21wb25lbnQsXHJcbiAgICBJbnB1dEdyb3VwQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEpvaW5QaXBlLFxyXG4gICAgSW5Ub1BpcGUsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIEN1cnJlbmN5UGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gICAgSnNvblBpcGUsXHJcbiAgICBTbGljZVBpcGUsXHJcbiAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgTG93ZXJDYXNlUGlwZSxcclxuICAgIEltYWdlUGlwZSxcclxuICAgIFZpZGVvUGlwZSxcclxuICAgIExpbmtQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgRW1haWxQaXBlLFxyXG4gICAgUmF0aW5nUGlwZSxcclxuICAgIEFkZHJlc3NQaXBlLFxyXG4gICAgRm9udFBpcGUsXHJcbiAgICBDb25kaXRpb25hbFBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIFZhbHVlT2ZQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIENvbXBvbmVudFBvb2xcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEludG9QaXBlTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBOzs7Ozs7Ozs7SUFLSSw2QkFBVTs7Ozs7O0lBQVYsVUFBVyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVE7O1FBQ3BDLElBQU0sYUFBYSxHQUFHLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7UUFDakUsSUFBTSxjQUFjLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENB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UyxHQUFHLEtBQUssR0FBRyxTQUFTLEtBQUssT0FBTyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLGNBQWMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNuSDthQUFLLElBQUcsSUFBSSxJQUFJLElBQUksRUFBRTs7WUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFFLElBQUksQ0FBQyxDQUFDO1lBRW5ELE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxRQUFRLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQztTQUN4RzthQUFLLElBQUcsSUFBSSxJQUFJLEtBQUssRUFBRTs7WUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRW5ELE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxTQUFTLEtBQUssSUFBSSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUN6RzthQUFLLElBQUcsSUFBSSxJQUFJLElBQUksRUFBRTs7WUFDdEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3BDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxL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