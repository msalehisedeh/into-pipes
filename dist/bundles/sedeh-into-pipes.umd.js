(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@sedeh/into-pipes', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (factory((global.sedeh = global.sedeh || {}, global.sedeh['into-pipes'] = {}),global.ng.core,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,core,common,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MaskPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'mask' },] }
        ];
        return MaskPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MapPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'map' },] }
        ];
        return MapPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ValueOfPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'valueof' },] }
        ];
        return ValueOfPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LinkPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'link' },] }
        ];
        return LinkPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ImagePipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'image' },] }
        ];
        return ImagePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var VideoPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'video' },] }
        ];
        return VideoPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PrependPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'prepend' },] }
        ];
        return PrependPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AppendPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'append' },] }
        ];
        return AppendPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WrapPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'wrap' },] }
        ];
        return WrapPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EmailPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'email' },] }
        ];
        return EmailPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RatingPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'raiting' },] }
        ];
        return RatingPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddressPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'address' },] }
        ];
        return AddressPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var JoinPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'join' },] }
        ];
        return JoinPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FontPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'email' },] }
        ];
        return FontPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ConditionalPipe = (function () {
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
            { type: core.Pipe, args: [{ name: 'if' },] }
        ];
        return ConditionalPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InToPipe = (function () {
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
                        /** @type {?} */
                        var numLocal = "en_US";
                        /** @type {?} */
                        var numDecimal_1 = undefined;
                        if (args.length > 2) {
                            numLocal = args[1];
                            numDecimal_1 = args[2];
                        }
                        /** @type {?} */
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
                        /** @type {?} */
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
                        // json
                        result = new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
                        break;
                    case "uppercase":
                        /** @type {?} */
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
                        /** @type {?} */
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
            { type: core.Pipe, args: [{ name: 'into' },] }
        ];
        return InToPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SanitizeHtmlPipe = (function () {
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
            { type: core.Pipe, args: [{
                        name: 'sanitizeHtml'
                    },] }
        ];
        /** @nocollapse */
        SanitizeHtmlPipe.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return SanitizeHtmlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddressComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'address-component',
                        template: "\n    <span class=\"address\">\n        <span [textContent]=\"addr1\"></span>\n        <span [textContent]=\"addr2\"></span>\n    </span> \n    <a [href]=\"url\" class=\"google-map\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"off-screen\">View in google map</span>\n    </a>\n    ",
                        styles: [".address {\n            display: inline-block;\n            float: left;\n        }\n        .google-map {\n            display: inline-block;\n            float: left;\n        }\n        .fa {\n            color: #f00;\n            margin: 0 3px;\n        }\n        .off-screen {\n            position: absolute;\n            left: -999em;\n        }\n        "]
                    }] }
        ];
        return AddressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EmailComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'email',
                        template: "\n    <a [href]=\"'mailto:' + source\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </a>\n    ",
                        styles: [""]
                    }] }
        ];
        return EmailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FontComponent = (function () {
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
            { type: core.Component, args: [{
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
    var ImageComponent = (function () {
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
            { type: core.Component, args: [{
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
    var VideoComponent = (function () {
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
            { type: core.Component, args: [{
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
    var JsonComponent = (function () {
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
            { type: core.Component, args: [{
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
    var LinkComponent = (function () {
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
            { type: core.Component, args: [{
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
    var RatingComponent = (function () {
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
            { type: core.Component, args: [{
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
    var InputComponent = (function () {
        function InputComponent(renderer) {
            this.renderer = renderer;
            this.editName = false;
            this.onIntoComponentChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'input-component',
                        template: "\n    <span *ngIf=\"editName\">\n    <input #nameEditor\n        type='text' \n        [id]=\"id\"\n        [name]=\"name\"\n        [value]=\"source\"\n        [placeholder]=\"placeholder\"\n        (blur)=\"blur($event)\" \n        (keyup)='keyup($event)'>\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? (source | into:formatting) : '&nbsp;'\">\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && !formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? source : '&nbsp;'\">\n    </span>\n    ",
                        styles: ["\n        .locked {\n          display: inline-block;\n          cursor: pointer;\n          min-width: 30px;\n          -webkit-user-select: none;       \n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n        input {\n          cursor: beam;\n        }\n        "]
                    }] }
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        InputComponent.propDecorators = {
            nameEditor: [{ type: core.ViewChild, args: ["nameEditor",] }],
            nameHolder: [{ type: core.ViewChild, args: ["nameHolder",] }],
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return InputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxComponent = (function () {
        function CheckboxComponent(renderer) {
            this.renderer = renderer;
            this.onIntoComponentChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'checkbox-component',
                        template: "\n    <span *ngIf=\"useFont\" class=\"check-font\">\n      <span *ngIf=\"source === ideal\" #check tabindex=\"0\" class=\"fa fa-check\" (keyup)=\"keyup($event)\" (click)=\"click($event)\"></span>\n      <span *ngIf=\"source !== ideal\" #uncheck tabindex=\"0\" class=\"fa fa-close\" (keyup)=\"keyup($event)\" (click)=\"click($event)\"></span>\n    </span>\n    <input *ngIf=\"!useFont\" \n            type=\"checkbox\" \n            tabindex=\"0\" \n            [value]=\"source\" \n            [checked]=\"source===ideal ? true : null\" \n            (keyup)=\"keyup($event)\"\n            (click)=\"click($event)\" />\n    ",
                        styles: ["\n        .check-font {\n          cursor: pointer;\n        }\n        "]
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        CheckboxComponent.propDecorators = {
            check: [{ type: core.ViewChild, args: ["check",] }],
            uncheck: [{ type: core.ViewChild, args: ["uncheck",] }],
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectComponent = (function () {
        function SelectComponent(renderer) {
            this.renderer = renderer;
            this.multiselect = false;
            this.onIntoComponentChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'select-component',
                        template: "\n    <select tabindex=\"0\" [multiple]=\"multiselect ? true:null\" (click)=\"click($event)\" (change)=\"change($event)\">\n        <option *ngFor=\"let x of options\" [selected]=\"source === x ? true : null\"  [value]=\"x\" [textContent]=\"x\"></option>\n    </select>\n    ",
                        styles: ["\n        "]
                    }] }
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        SelectComponent.propDecorators = {
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return SelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SpanComponent = (function () {
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
            { type: core.Component, args: [{
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
    var ShareComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'share-component',
                        template: "\n    <a id='share-comment-{{id}}' \n        tabindex=\"0\" \n        class='share-item-tips' \n        (keyup)='keyup($event)'\n        (click)='shouldDisplay = !shouldDisplay'>\n    <span class=\"fa fa-share-alt\"></span>\n    <span class=\"share\">share</span>\n    </a>\n    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>\n      <span class='social-referal'>\n        <a *ngFor=\"let share of shareList\" [class]='share.icon' target='_blank' [href]='share.href'><span class='off-screen' [textContent]=\"share.title\"></span></a>\n      </span>\n    </span>\n",
                        styles: ["\n    :host {display: table;position: relative}\n    .share-item-tips {\n        cursor: pointer;\n    }\n    .share-item-tips .fa {\n        margin: 0;\n    }\n    .tips {\n        position: absolute;\n        display: flex;\n        flex-direction: row;\n        padding: 5px;\n        border: 1px solid #aaa;\n        border-radius: 2px;\n        background-color: #fff;\n        z-index: 2;\n    }\n    .tips .social-referal {\n        display: flex;\n        flex-direction: row;\n    }\n    .tips .social-referal .fa {\n        float: left;\n        padding: 2px 4px;\n        color: blue;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        text-decoration: none;\n        margin: 0 1px;\n        width: 20px;\n        text-align: center;\n    }\n    .tips .social-referal .fa:hover {\n        color: #fff;\n        background-color: blue;\n    }\n    "]
                    }] }
        ];
        return ShareComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LikeComponent = (function () {
        function LikeComponent() {
            this.thumbs = "";
            this.onIntoComponentChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'like-component',
                        template: "\n    <a \n        id='like-{{id}}' \n        tabindex=\"0\" \n        class=\"like\" \n        [class.selected]=\"selected\" \n        (keyup)=\"keyup($event)\" \n        (click)='toggleCount($event)'>\n        <span class=\"fa fa-thumbs-up\" *ngIf=\"thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-up selected\" *ngIf=\"thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down\" *ngIf=\"!thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down selected\" *ngIf=\"!thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"counts\" *ngIf=\"showCount\" [textContent]=\"formatterSource()\"></span>\n    </a>",
                        styles: ["\n        :host {display: table;position: relative}\n        .like {\n            cursor: pointer;\n        }\n        .like .fa {\n            margin: 0;\n        }\n        .like .fa.selected {\n            color: green;\n        }\n        "]
                    }] }
        ];
        return LikeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CalendarComponent = (function () {
        function CalendarComponent(renderer) {
            this.renderer = renderer;
            this.showCalendar = false;
            this.editName = false;
            this.multiselect = false;
            this.dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
            this.weeks = [];
            this.selectedDays = [];
            this.onIntoComponentChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'calendar-component',
                        template: "\n    <span class=\"calendar-box\">\n      <span class=\"date\" [textContent]=\"origDate | date:formatting\"></span>\n      <a tabindex=\"0\" class=\"popper\" (keyup)=\"keyup($event)\" (click)=\"popdatepicker($event)\">\n          <span class=\"fa fa-calendar\" aria-hidden=\"true\"></span>\n          <span class=\"off-screen\">Pick a date</span>\n      </a>\n    </span>\n    <div class=\"calendar\" *ngIf=\"showCalendar\">\n\t\t<div class=\"calendar-navs\">\n\t\t\t<div class=\"month-nav\">\n                <button (click)=\"prevMonth($event)\">\n                    <span class=\"fa fa-chevron-left\"></span>\n                    <span class=\"off-screen\">Back a month</span>\n                </button>\n\t\t\t\t<span class=\"p4\">{{ currentDate | date:'MMMM' }}</span>\n                <button (click)=\"nextMonth($event)\">\n                    <span class=\"fa fa-chevron-right\"></span>\n                    <span class=\"off-screen\">Forward a month</span>\n                </button>\n\t\t\t</div>\n\t\t\t<div class=\"year-nav\">\n                <button (click)=\"prevYear($event)\">\n                    <span class=\"fa fa-chevron-left\"></span>\n                    <span class=\"off-screen\">Back a year</span>\n                </button>\n\t\t\t\t<span>{{ currentDate | date: 'yyyy' }}</span>\n                <button (click)=\"nextYear($event)\">\n                    <span class=\"fa fa-chevron-right\"></span>\n                    <span class=\"off-screen\">Forward a year</span>\n                </button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"month-grid\">\n\t\t\t<div class=\"day-names\">\n\t\t\t\t<div *ngFor=\"let name of dayNames\" class=\"day-name p9\">{{ name }}</div>\n\t\t\t</div>\n\t\t\t<div class=\"weeks\">\n\t\t\t\t<div *ngFor=\"let week of weeks\" class=\"week\">\n\t\t\t\t\t<ng-container *ngFor=\"let day of week\">\n\t\t\t\t\t\t<div class=\"week-date disabled\" *ngIf=\"!isSelectedMonth(day.date)\">\n\t\t\t\t\t\t\t<span class=\"date-text\">{{ day.date.getDate() }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"week-date enabled\"\n                           *ngIf=\"isSelectedMonth(day.date)\"\n                           tabindex=\"0\"\n                           (keyup)=\"keyup($event)\"\n\t\t\t\t\t\t   (click)=\"selectDate($event, day)\"\n\t\t\t\t\t\t   [class.today]=\"day.today\"\n\t\t\t\t\t\t   [class.selected]=\"day.selected\">\n\t\t\t\t\t\t\t<span class=\"date-text\">{{ day.date.getDate() }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    ",
                        styles: ["\n        .calendar-box {\n          display: flex;\n          flex-direction: row;\n          cursor: default;\n          width: 100%;\n          display: inline-block;\n        }\n        .calendar-box date {flex: 1;}\n        .calendar-box .popper {cursor: pointer;flex: 0 0 15px}\n        .calendar {\n            display: table;\n            width: 210px;\n            position: absolute;\n            background-color: #fff;\n            z-index: 2;\n            border: 1px solid #ddd;\n            border-radius: 4px;\n        }\n        .calendar * {\n            box-sizing: border-box;\n        }\n        .calendar .calendar-navs {\n            background-color: whitesmoke;\n        }\n        .calendar .month-nav {\n            padding: 2px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .calendar .year-nav {\n            padding: 2px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .calendar .month-nav button,\n        .calendar .year-nav button {\n            border: 0;\n            background: transparent;\n            cursor: pointer;\n        }\n        .calendar .month-nav button:hover,\n        .calendar .year-nav button:hover {\n            color: red;\n        }\n        .calendar .month-grid .day-names {\n            display: flex;\n            flex-direction: row;\n            background: whitesmoke;\n            border-bottom-right-radius: 3px;\n            border-bottom-left-radius: 3px;\n        }\n        .calendar .month-grid .weeks {\n            display: flex;\n            flex-direction: column;\n        }\n        .calendar .month-grid .week {\n            display: flex;\n            flex-direction: row;\n        }\n        .calendar .month-grid .day-names {\n            border-top: 1px dotted #ddd;\n            border-bottom: 1px dashed #ddd;\n        }\n        .calendar .month-grid .week-date,\n        .calendar .month-grid .day-name {\n            text-align: center;\n            padding: 2px;\n            display: block;\n            width: 30px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .calendar .month-grid .week-date {\n            height: 30px;\n            position: relative;\n            padding: 5px;\n        }\n        .calendar .month-grid .week-date .date-text {\n            font-size: 10px;\n            z-index: 10;\n        }\n        .calendar .month-grid .week-date::after {\n            content: '';\n            height: 24px;\n            width: 24px;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            border-radius: 50%;\n            transition: background-color 150ms linear, color 150ms linear;\n            z-index: 1;\n        }\n        .calendar .month-grid .week-date.disabled {color: #aaa;}\n        .calendar .month-grid .week-date.enabled {\n            cursor: pointer;\n        }\n        .calendar .month-grid .week-date.enabled:focus {\n            outline: 0;\n        }\n        .calendar .month-grid .week-date.enabled:hover .date-text,\n        .calendar .month-grid .week-date.enabled:focus .date-text {\n            font-weight: bold;\n            color: blue;\n        }\n        .calendar .month-grid .week-date.enabled:hover::after,\n        .calendar .month-grid .week-date.enabled:focus::after {\n            background-color: whitesmoke;\n        }\n        .calendar .month-grid .week-date.selected .date-text {\n            color: #fff !important;\n        }\n        .calendar .month-grid .week-date.selected::after{\n            background-color: blue !important;\n        }\n        .calendar .month-grid .week-date.today::after {\n            background-color: lightblue;\n            font-weight: bold;\n            color: #fff;\n        }\n        "]
                    }] }
        ];
        /** @nocollapse */
        CalendarComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        CalendarComponent.propDecorators = {
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return CalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LastUpdateComponent = (function () {
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
            { type: core.Component, args: [{
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
    var InputGroupComponent = (function () {
        function InputGroupComponent(renderer) {
            this.renderer = renderer;
            this.onIntoComponentChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'input-group-component',
                        template: "\n    <span class=\"input-group-item\" *ngFor=\"let x of options; let i = index\">\n        <input \n            [type]=\"type\" \n            [id]=\"name + i\" \n            [name]=\"name + (type === 'radio' ? '' : i)\" \n            [value]=\"x.value ? x.value : x\" \n            [checked]=\"isSelected(x)\"\n            (click)=\"click($event)\"/>\n        <label [for]=\"name + i\" [textContent]=\"x.label ? x.label : x\"></label>\n    </span>\n    ",
                        styles: ["\n        "]
                    }] }
        ];
        /** @nocollapse */
        InputGroupComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        InputGroupComponent.propDecorators = {
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return InputGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ComponentPool = (function () {
        function ComponentPool() {
            this.registeredComponents = {};
            this.registeredServices = {};
            this.registerComponent("span", SpanComponent);
            this.registerComponent("address", AddressComponent);
            this.registerComponent("email", EmailComponent);
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ComponentPool.ctorParameters = function () { return []; };
        return ComponentPool;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var IntoDirective = (function () {
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
                        /** @type {?} */
                        var numLocal = "en_US";
                        /** @type {?} */
                        var numDecimal_1 = undefined;
                        if (args.length > 2) {
                            numLocal = args[1];
                            numDecimal_1 = args[2];
                        }
                        /** @type {?} */
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
                    case "currency":
                        /** @type {?} */
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
                    case "uppercase":
                        /** @type {?} */
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
                        /** @type {?} */
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
                    var domElem = (((componentRef.hostView)).rootNodes[0]);
                    this.el.nativeElement.appendChild(domElem);
                    result = ((componentRef.instance));
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
        /**
         * @return {?}
         */
        IntoDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
            };
        IntoDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[into]'
                    },] }
        ];
        /** @nocollapse */
        IntoDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.ElementRef },
                { type: ComponentPool },
                { type: core.ComponentFactoryResolver }
            ];
        };
        IntoDirective.propDecorators = {
            rawContent: [{ type: core.Input, args: ["rawContent",] }],
            intoId: [{ type: core.Input, args: ["intoId",] }],
            intoName: [{ type: core.Input, args: ["intoName",] }],
            intoData: [{ type: core.Input, args: ["intoData",] }],
            into: [{ type: core.Input, args: ["into",] }],
            onComponentChange: [{ type: core.Input, args: ["onComponentChange",] }]
        };
        return IntoDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var IntoPipeModule = (function () {
        function IntoPipeModule() {
        }
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
                            common.DatePipe,
                            common.CurrencyPipe,
                            common.DecimalPipe,
                            common.JsonPipe,
                            common.SlicePipe,
                            common.UpperCasePipe,
                            common.LowerCasePipe,
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
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
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

    exports.InToPipe = InToPipe;
    exports.MaskPipe = MaskPipe;
    exports.MapPipe = MapPipe;
    exports.LinkPipe = LinkPipe;
    exports.ImagePipe = ImagePipe;
    exports.VideoPipe = VideoPipe;
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
    exports.ɵo = CalendarComponent;
    exports.ɵj = CheckboxComponent;
    exports.ɵb = EmailComponent;
    exports.ɵc = FontComponent;
    exports.ɵd = ImageComponent;
    exports.ɵq = InputGroupComponent;
    exports.ɵi = InputComponent;
    exports.ɵf = JsonComponent;
    exports.ɵp = LastUpdateComponent;
    exports.ɵn = LikeComponent;
    exports.ɵg = LinkComponent;
    exports.ɵh = RatingComponent;
    exports.ɵk = SelectComponent;
    exports.ɵm = ShareComponent;
    exports.ɵl = SpanComponent;
    exports.ɵe = VideoComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtaW50by1waXBlcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9tYXNrLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9tYXAucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL3ZhbHVlb2YucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2xpbmsucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2ltYWdlLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy92aWRlby5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvcHJlcGVuZC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvYXBwZW5kLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy93cmFwLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9lbWFpbC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvcmF0aW5nLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9hZGRyZXNzLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9qb2luLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9mb250LnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9jb25kaXRpb25hbC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvaW50by5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvc2FuaXRpemVIdG1sLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2FkZHJlc3MuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9lbWFpbC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9pbWFnZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL3ZpZGVvLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvanNvbi5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2xpbmsuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9yYXRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2NoZWNrYm94LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvc3Bhbi5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL3NoYXJlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvbGlrZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvbGFzdHVwZGF0ZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2lucHV0LWdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2luamVjdGFibGVzL2NvbXBvbmVudC5wb29sLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvZGlyZWN0aXZlcy9pbnRvLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBtYXNrIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbi4gXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIG1hc2tlZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdtYXNrJyB9KVxyXG5leHBvcnQgY2xhc3MgTWFza1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBtYXNrU3RyaW5nKGl0ZW0sIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSB7XHJcbiAgICAgICAgY29uc3QgbWFza2VkU2VjdGlvbiA9IGl0ZW0gID8gaXRlbS5zbGljZSgwLCAtdmlzaWJsZURpZ2l0cykgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVTZWN0aW9uID0gaXRlbSA/IGl0ZW0uc2xpY2UoLXZpc2libGVEaWdpdHMpIDogXCJcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBtYXNrZWRTZWN0aW9uLnJlcGxhY2UoLy4vZywgbWFza1dpdGgpICsgdmlzaWJsZVNlY3Rpb24gOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgbWFza0FycmF5KGl0ZW1zLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLm1hc2tTdHJpbmcoaXRlbSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2libGVEaWdpdHMgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogNDtcclxuICAgICAgICBjb25zdCBtYXNrV2l0aCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAnKic7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrU3RyaW5nKHNvdXJjZSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXNrQXJyYXkoc291cmNlLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHRha2UgYSBzdHJpbmcgYXMgYSBrZXkgYW5kIHJldHVybnMgdmFsdWUgb2Yga2V5IGZyb20gdGhlIGdpdmVuIG1hcCBvYmplY3QuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ21hcCcgfSlcclxuZXhwb3J0IGNsYXNzIE1hcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB2YWx1ZXNGb3IobGlzdCwgbWFwKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGlzdC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFwW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hcFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBnZU1hcHBpbmcobWFwcGluZykge1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1hcHBpbmc7XHJcbiAgICAgICAgaWYoIG1hcHBpbmcudHJpbSApIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwID17fTtcclxuICAgICAgICAgICAgbWFwcGluZy5zcGxpdCgnLycpLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBrZXkuc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgICAgIG1hcFt4WzBdXSA9IHhbMV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXBwaW5nID0gbWFwOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwcGluZztcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdlTWFwcGluZygoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbc291cmNlXSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc0Zvcihzb3VyY2UsIG1hcCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIG1hcCBvYmplY3QuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3ZhbHVlb2YnIH0pXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZU9mUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHZhbHVlT2ZTaW5nbGUoc291cmNlLCBrZXkpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XHJcbiAgICB9XHJcbiAgICB2YWx1ZU9mTXVsdGlwbGUoc291cmNlcywga2V5KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnZhbHVlT2ZTaW5nbGUoc291cmNlLCBrZXkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKG9iamVjdDogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0ID09PSBcInN0cmluZ1wiKSB8fCAhKG9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mU2luZ2xlKG9iamVjdCwgYXJnc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2ZNdWx0aXBsZShvYmplY3QsIGFyZ3NbMF0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgbGluay5cclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbGluaycgfSlcclxuZXhwb3J0IGNsYXNzIExpbmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdHJpbmdUb0xpbmsoc291cmNlLCB0YXJnZXQsIHRpdGxlKSB7XHJcbiAgICAgICAgaWYoIXRpdGxlIHx8ICF0aXRsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICB0aXRsZSA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxhIGhyZWY9J1wiK3NvdXJjZStcIicgdGFyZ2V0PSdcIit0YXJnZXQrXCInPlwiK3RpdGxlK1wiPC9hPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb0ltYWdMaW5rKHNvdXJjZXMsIHRhcmdldCwgdGl0bGUpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCBcIlwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdGl0bGU6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0xpbmsoc291cmNlLCB0YXJnZXQsIHRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb0ltYWdMaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gaW1hZ2UgZGlzcGxheS4gXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2ltYWdlJyB9KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCkge1xyXG4gICAgICAgIGlmKCFhbHQgfHwgIWFsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICBhbHQgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgc3R5bGU9XFwnXCIrIHdpZHRoICsgaGVpZ2h0ICsgXCJcXCcgdGl0bGU9XFwnXCIrYWx0K1wiXFwnIC8+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvSW1hZ2Uoc291cmNlcywgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IFwid2lkdGg6IFwiICsgYXJnc1swXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBoZWlnaHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IFwiaGVpZ2h0OiBcIiArIGFyZ3NbMV0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBcIlwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gaW1hZ2UgZGlzcGxheS4gXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3ZpZGVvJyB9KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgc3RyaW5nVG9WaWRlbyhzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCkge1xyXG4gICAgICAgIGlmKCFhbHQgfHwgIWFsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICBhbHQgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8dmlkZW8gc3JjPVxcJ1wiK3NvdXJjZStcIlxcJyBzdHlsZT1cXCdcIisgd2lkdGggKyBoZWlnaHQgKyBcIlxcJyB0aXRsZT1cXCdcIithbHQrXCJcXCcgIGNvbnRyb2xzPVxcJ3RydWVcXCcgLz5cIjtcclxuICAgIH1cclxuICAgIGFycmF5VG9WaWRlbyhzb3VyY2VzLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9WaWRlbyhzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGg6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gXCJ3aWR0aDogXCIgKyBhcmdzWzBdICsgXCI7XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gXCJoZWlnaHQ6IFwiICsgYXJnc1sxXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhbHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9WaWRlbyhzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9WaWRlbyhzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIFwiXCIpO1xyXG5cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gcHJlcGVuZCBjaGFyYWN0ZXIocykgdG8gYSBjb250ZW50LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdwcmVwZW5kJyB9KVxyXG5leHBvcnQgY2xhc3MgUHJlcGVuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkgKyBzb3VyY2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSArIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBhcHBlbmQgY2hhcmFjdGVyKHMpIHRvIGEgY29udGVudC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYXBwZW5kJyB9KVxyXG5leHBvcnQgY2xhc3MgQXBwZW5kUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlICsga2V5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtICsga2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gd3JhcCBhIGNvbnRlbnQgaW50byBjaGFyYWN0ZXIocykuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3dyYXAnIH0pXHJcbmV4cG9ydCBjbGFzcyBXcmFwUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICBcclxuICAgICAgICBjb25zdCBwcmUgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBwb3N0PSBwcmUubGVuZ3RoID8gXHJcbiAgICAgICAgICAgICAgICAgICAgKGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKSA6IHByZTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBrZXkgPSAoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZSArIHNvdXJjZSArIHBvc3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByZSArIGl0ZW0gKyBwb3N0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBlbWFpbCBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdlbWFpbCcgfSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIGVtYWlsRnJvbVN0cmluZyhzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gXCI8YSBocmVmPVxcJ21haWx0bzpcIitzb3VyY2UrXCJcXCcgPjxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj48c3Bhbj5cIiArIHNvdXJjZSArIFwiPC9zcGFuPjwvYT5cIjtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1haWxGcm9tU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZW1haWxGcm9tU3RyaW5nKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhIHJhaXRpbmcgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncmFpdGluZycgfSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHJhdGVTdHJpbmcoc291cmNlKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gdHlwZW9mIHNvdXJjZSA9PT0gXCJudW1iZXJcIiA/IFN0cmluZyhzb3VyY2UpIDogc291cmNlO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgY29uc3QgZmxvYXQgPSBwYXJzZUZsb2F0KHNvdXJjZSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gXCI8c3BhbiBjbGFzcz0ncmF0aW5nJz5cIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKysgKSB7XHJcbiAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGZsb2F0ICE9PSB2YWx1ZSApIHtcclxuICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgeCArPSBcIjwvc3Bhbj48c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZSc+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXRlU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucmF0ZVN0cmluZyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gYWRkcmVzcyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhZGRyZXNzJyB9KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2UuY2l0eSArIFwiLCBcIiArIHNvdXJjZS56aXBjb2RlICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2FkZHJlc3MnPjxzcGFuPlwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICBcIjxzcGFuPiBcIiArIHNvdXJjZS5jaXR5ICtcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArIFwiPC9zcGFuPlwiICsgXHJcbiAgICAgICAgXCI8L3NwYW4+IDxhIGhyZWY9XFwnXCIgKyB1cmwgKyBcIlxcJyBjbGFzcz0nZ29vZ2xlLW1hcCc+PHNwYW4gY2xhc3M9J2ZhIGZhLW1hcC1tYXJrZXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj48L2E+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGpvaW4gYXJyYXlzIG9yIGpzb24gYXR0cmlidXRlIHZhbHVlcy5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnam9pbicgfSlcclxuZXhwb3J0IGNsYXNzIEpvaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5qb2luKGFyZ3NbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oYXJnc1swXSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBlbWFpbCBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdlbWFpbCcgfSlcclxuZXhwb3J0IGNsYXNzIEZvbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBmb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIChsb2NhdGlvbiA9PT0gXCJsZWZ0XCIgPyBcclxuICAgICAgICAgICAgICAgIChmb250ICsgY29udGVudCkgOiBcclxuICAgICAgICAgICAgICAgICgobG9jYXRpb24gPT09IFwicmlnaHRcIikgPyBjb250ZW50ICsgZm9udCA6IGZvbnQpKTtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBhcmdzLmxlbmd0aCA/IFwiPHNwYW4gY2xhc3M9XFwnXCIgKyBhcmdzWzBdICsgXCJcXCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhY3Rpb24gPT09IFwiKlwiID8gc291cmNlIDogKFwicmVwbGFjZVwiID09PSBhY3Rpb24udG9Mb3dlckNhc2UoKSA/IFwiXCIgOiBzb3VyY2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHJldHVybiBhIHRyYW5zZm9ybWF0aW9uIGFyZ3VtZW50IHdoaWNoIHNob3VsZCBiZSBwaXBlZCBpbnRvIGFub3RoZXIgdHJhbnNmb3JtIG9iamVjdFxyXG4qIHRvIHRyYW5zZm9ybSB0aGUgb2JqZWN0IHZhbHVlIHBhc3NlZCB0byB0aGlzIHBpcGUuXHJcbiogdGhlIGFyZ3VtZW50cyBhcmUgYXMgZm9sbG93czogMSkgY29uZGl0aW9uLCAyKSB2YWx1ZSB0byBldmFsdWF0ZSB0aGUgY29uZGl0aW9uLCAzKSBhY3Rpb24sIDQpIGVsc2UgYWN0aW9uLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpZicgfSlcclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgY29uZGl0aW9uRnJvbVN0cmluZyhjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjb25kaXRpb24pe1xyXG4gICAgICAgICAgICBjYXNlIFwiPVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID09PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiIT1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCAhPT0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIj5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA+IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI+PVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID49IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI8XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPCB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPD1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA8PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiflwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY29udGVudCAhPT0gbnVsbCAmJiBjb250ZW50ICE9PSBcIm51bGxcIiA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiIX5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwgfHwgY29udGVudCA9PT0gXCJudWxsXCIgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIn49XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgJiYgdmFsdWUgJiYgU3RyaW5nKGNvbnRlbnQpLnRvTG93ZXJDYXNlKCkgPT09IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5cIiA6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID8gY29udGVudC5pbmRleE9mKGFjdGlvbikgOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBhY29uZGl0aW9uID0gIGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25Gcm9tU3RyaW5nKHNvdXJjZSwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2l0ZW1dID0gdGhpcy5jb25kaXRpb25Gcm9tU3RyaW5nKGl0ZW0sIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRGF0ZVBpcGUsXHJcbiAgQ3VycmVuY3lQaXBlLFxyXG4gIERlY2ltYWxQaXBlLFxyXG4gIEpzb25QaXBlLFxyXG4gIFNsaWNlUGlwZSxcclxuICBVcHBlckNhc2VQaXBlLFxyXG4gIExvd2VyQ2FzZVBpcGVcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtNYXNrUGlwZX0gZnJvbSAnLi9tYXNrLnBpcGUnO1xyXG5pbXBvcnQge01hcFBpcGV9IGZyb20gJy4vbWFwLnBpcGUnO1xyXG5pbXBvcnQge1ZhbHVlT2ZQaXBlfSBmcm9tICcuL3ZhbHVlb2YucGlwZSc7XHJcbmltcG9ydCB7TGlua1BpcGV9IGZyb20gJy4vbGluay5waXBlJztcclxuaW1wb3J0IHtJbWFnZVBpcGV9IGZyb20gJy4vaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7VmlkZW9QaXBlfSBmcm9tICcuL3ZpZGVvLnBpcGUnO1xyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7QXBwZW5kUGlwZX0gZnJvbSAnLi9hcHBlbmQucGlwZSc7XHJcbmltcG9ydCB7V3JhcFBpcGV9IGZyb20gJy4vd3JhcC5waXBlJztcclxuaW1wb3J0IHtFbWFpbFBpcGV9IGZyb20gJy4vZW1haWwucGlwZSc7XHJcbmltcG9ydCB7UmF0aW5nUGlwZX0gZnJvbSAnLi9yYXRpbmcucGlwZSc7XHJcbmltcG9ydCB7QWRkcmVzc1BpcGV9IGZyb20gJy4vYWRkcmVzcy5waXBlJztcclxuaW1wb3J0IHtKb2luUGlwZX0gZnJvbSAnLi9qb2luLnBpcGUnO1xyXG5pbXBvcnQge0ZvbnRQaXBlfSBmcm9tICcuL2ZvbnQucGlwZSc7XHJcbmltcG9ydCB7Q29uZGl0aW9uYWxQaXBlfSBmcm9tICcuL2NvbmRpdGlvbmFsLnBpcGUnO1xyXG5cclxuQFBpcGUoe25hbWU6J2ludG8nfSlcclxuZXhwb3J0IGNsYXNzIEluVG9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxudHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgbGlzdDogc3RyaW5nKTogYW55IHtcclxuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgXHJcbiAgICBsaXN0LnNwbGl0KFwifFwiKS5tYXAoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKHJlc3VsdCwgdGhpcy5zcGxpdChpdGVtKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzcGxpdChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10pIHtcclxuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG5cclxuICAgIHN3aXRjaChhcmdzWzBdKXtcclxuICAgICAgICBjYXNlIFwic2xpY2VcIiA6IFxyXG4gICAgICAgICAgICAvLyBzbGljZSA1OjEyIE9SIHNsaWNlIDVcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBlbmQ9IHBhcnNlSW50KGFyZ3NbMl0sIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzbGljZXIgPW5ldyBTbGljZVBpcGUoKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjb250ZW50LCBzdGFydCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJudW1iZXJcIiA6IFxyXG4gICAgICAgICAgICAvLyBudW1iZXI6ZW5fVVM6MiAgIG9yIG51bWJlcjplbl9VUyBvciBudW1iZXJcclxuICAgICAgICAgICAgbGV0IG51bUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgICAgICBsZXQgbnVtRGVjaW1hbD0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBudW1Mb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICBudW1EZWNpbWFsPSBhcmdzWzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxlciA9bmV3IERlY2ltYWxQaXBlKG51bUxvY2FsKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpZlwiIDogXHJcbiAgICAgICAgICAgIC8vIGlmOj06dHJ1ZTpmYSBmYS1jaGVjazpmYSBmYS1iZWxsXHJcbiAgICAgICAgICAgIGNvbnN0IGFjb25kaXRpb24gPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogXCJcIjtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENvbmRpdGlvbmFsUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnXCInID8gcmVzdWx0LnN1YnN0cmluZygxLHJlc3VsdC5sZW5ndGgtMSkgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cmFuc2Zvcm0oY29udGVudCx0aGlzLnNwbGl0KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJmb250XCIgOiBcclxuICAgICAgICAgICAgLy8gZm9udDpmYSBmYS1jaGVjazpsZWZ0OipcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEZvbnRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCIpOyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImN1cnJlbmN5XCIgOiBcclxuICAgICAgICAgICAgLy8gY3VycmVuY3k6ZW5fVVMgb3IgY3VycmVuY3lcclxuICAgICAgICAgICAgY29uc3QgY3AgPSBuZXcgQ3VycmVuY3lQaXBlKGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcImVuX1VTXCIpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ3cmFwXCIgOiBcclxuICAgICAgICAgICAgLy8gd3JhcDpzb21ldGhpbmc6c29tZXRoaW5nICBPUiB3cmFwOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgV3JhcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBhcmdzWzFdKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJhcHBlbmRcIiA6IFxyXG4gICAgICAgICAgICAvLyBhcHBlbmQ6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBcHBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJwcmVwZW5kXCIgOiBcclxuICAgICAgICAgICAgLy8gcHJlcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFByZXBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlbWFpbFwiIDogXHJcbiAgICAgICAgICAgIC8vIGVtYWlsXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBFbWFpbFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYWRkcmVzc1wiIDogXHJcbiAgICAgICAgICAgIC8vIGFkZHJlc3NcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFkZHJlc3NQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpOyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInJhdGluZ1wiIDogXHJcbiAgICAgICAgICAgIC8vIHJhdGluZ1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUmF0aW5nUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJtYXBcIiA6IFxyXG4gICAgICAgICAgICAvLyBtYXA6a2V5MTt2YWx1ZTEva2V5Mjt2YWx1ZTIva2V5Mzt2YWx1ZTNcclxuICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRhdGVcIiA6IFxyXG4gICAgICAgICAgICAvLyBkYXRlOmVuX1VTOk1NZGR5eSBPUiBkYXRlOlxcXCJNTS9kZC95eXl5IGhoOnNzXFxcIlxyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSA/IG5ldyBEYXRlKGNvbnRlbnQpIDogY29udGVudDtcclxuICAgICAgICAgICAgbGV0IGRhdGVMb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICAgICAgbGV0IGRhdGVGb3JtYXQ9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVMb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PSBhcmdzWzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVyID1uZXcgRGF0ZVBpcGUoZGF0ZUxvY2FsKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkYXRlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwianNvblwiIDogXHJcbiAgICAgICAgICAgIC8vIGpzb25cclxuICAgICAgICAgICAgY29uc3QgamNwID0gIG5ldyBKc29uUGlwZSgpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGpjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChqY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImpvaW5cIiA6IFxyXG4gICAgICAgICAgICAvLyBqc29uXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBKb2luUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ1cHBlcmNhc2VcIiA6IFxyXG4gICAgICAgICAgICAvLyB1cHBlcmNhc2VcclxuICAgICAgICAgICAgY29uc3QgdWNwID0gIG5ldyBVcHBlckNhc2VQaXBlKCk7XHJcbiAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdWNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibG93ZXJjYXNlXCIgOiBcclxuICAgICAgICAgICAgLy8gbG93ZXJjYXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxjcCA9ICBuZXcgTG93ZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChsY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1hc2tcIiA6IFxyXG4gICAgICAgICAgICAvLyBtYXNrOjQ6KiAgT1IgbWFzazo0XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBwYXJzZUludChhcmdzWzFdLCAxMCksIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmFsdWVvZlwiIDogXHJcbiAgICAgICAgICAgIC8vIHZhbHVlb2Y6a2V5XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgVmFsdWVPZlBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlua1wiIDogXHJcbiAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHQgb3IgbGluazp0ZXh0IG9yIGxpbmtcclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBMaW5rUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTGlua1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IExpbmtQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpbWFnZVwiIDogXHJcbiAgICAgICAgICAgIC8vIGltYWdlOjIwMHB4OmF1dG86YWx0dGV4dCBPUiBpbWFnZToyMDBweDphbHRlcm5hdGUtdGV4dCBPUiBpbWFnZToyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBJbWFnZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmlkZW9cIiA6IFxyXG4gICAgICAgICAgICAvLyB2aWRlbzoyMDBweDphdXRvOmFsdHRleHQgT1IgdmlkZW86MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgdmlkZW86MjAwcHggT1IgdmlkZW9cclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IFZpZGVvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4qIFRha2VzIGNhcmUgb2YgcHJvYmxlbSB3aXRoIHNlY3VyaXR5IHByZWNhdXNpb25zIHRoYXQgc3RyaXAgb3V0IGNlcnRhaW4gY2hhcmFjdGVycyBcclxuKiBmcm9tIGVuZCByZXN1bHQgb2YgeW91ciByZXF1ZXN0cy5cclxuKiBjb2RlIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2ODExNjMvYW5ndWxhci0yLXNhbml0aXppbmctaHRtbC1zdHJpcHBlZC1zb21lLWNvbnRlbnQtd2l0aC1kaXYtaWQtdGhpcy1pcy1idWctb3ItZmVcclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc2FuaXRpemVIdG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FuaXRpemVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6RG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odjpzdHJpbmcpOlNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkZHJlc3MtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiYWRkcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImFkZHIyXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPiBcclxuICAgIDxhIFtocmVmXT1cInVybFwiIGNsYXNzPVwiZ29vZ2xlLW1hcFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5WaWV3IGluIGdvb2dsZSBtYXA8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdvb2dsZS1tYXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2YwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9mZi1zY3JlZW4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC05OTllbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIGFkZHIxOiBzdHJpbmc7XHJcbiAgICBhZGRyMjogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmFkZHIxID0gc291cmNlLnN0cmVldCArICcsICcgKyBzb3VyY2Uuc3VpdGU7XHJcbiAgICAgICAgdGhpcy5hZGRyMiA9IHNvdXJjZS5jaXR5ICsgJywgJyArIHNvdXJjZS56aXBjb2RlO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT1cIiArIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyB0aGlzLmFkZHIyICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgIHRoaXMudXJsID0geC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZW1haWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIFtocmVmXT1cIidtYWlsdG86JyArIHNvdXJjZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm9udC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAnbGVmdCdcIiAgICBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiAhPT0gJ3JlcGxhY2UnXCIgW3RleHRDb250ZW50XT1cImNvbnRlbnRcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ3JpZ2h0J1wiICAgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdyZXBsYWNlJ1wiIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgc3BhbiBzcGFuIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvbnRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIGZvbnQ6IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuZm9udCA9IGFyZ3NbMF07XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcImxlZnRcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGFjdGlvbiA9PT0gXCIqXCIgPyBzb3VyY2UgOiAoXCJyZXBsYWNlXCIgPT09IGFjdGlvbi50b0xvd2VyQ2FzZSgpID8gXCJcIiA6IHNvdXJjZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ltYWdlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxpbWcgW3NyY109XCJzb3VyY2VcIiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiIFt0aXRsZV09XCJhbHRcIiAvPmAsXHJcbiAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHdpZHRoOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IHN0cmluZztcclxuICAgIGFsdDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFsdCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5hbHQgfHwgIXRoaXMuYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZpZGVvLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDx2aWRlbyBbc3JjXT1cInNvdXJjZVwiIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCIgY29udHJvbHM9XCJ0cnVlXCIgW3RpdGxlXT1cImFsdFwiPjwvdmlkZW8+YCxcclxuICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgd2lkdGg6IHN0cmluZztcclxuICAgIGhlaWdodDogc3RyaW5nO1xyXG4gICAgYWx0OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuYWx0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsdCB8fCAhdGhpcy5hbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnanNvbi1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImpzb24tdmlld1wiIFt0ZXh0Q29udGVudF09XCJzb3VyY2UgfCBqc29uXCI+PC9zcGFuPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgLmpzb24tdmlldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICB1bmljb2RlLWJpZGk6IGVtYmVkOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpzb25Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGluay1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8YSBbaHJlZl09XCJzb3VyY2VcIiBbdGFyZ2V0XT1cInRhcmdldFwiIFt0ZXh0Q29udGVudF09XCJ0aXRsZVwiPjwvYT5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLnRpdGxlID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgaWYoIXRoaXMudGl0bGUgfHwgIXRoaXMudGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYXRpbmctY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz0ncmF0aW5nJz5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnICpuZ0Zvcj1cImxldCB4IG9mIHZhbHVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJyAqbmdJZj1cImZsb2F0ICE9IHZhbHVlXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGUtdmFsdWUnIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYC5yYXRpbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogYW55W10gPSBbXTtcclxuICAgIGZsb2F0OiBhbnk7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICBjb25zdCBudW1iZXIgPSB0eXBlb2Ygc291cmNlID09PSBcIm51bWJlclwiID8gU3RyaW5nKHNvdXJjZSkgOiBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5mbG9hdCA9IHBhcnNlRmxvYXQoc291cmNlKTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgPGlucHV0ICNuYW1lRWRpdG9yXHJcbiAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgW2lkXT1cImlkXCJcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICBbdmFsdWVdPVwic291cmNlXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmIGZvcm1hdHRpbmcnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleWRvd24oJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPVwiY2xpY2tOYW1lKCRldmVudClcIlxyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic291cmNlID8gKHNvdXJjZSB8IGludG86Zm9ybWF0dGluZykgOiAnJm5ic3A7J1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmICFmb3JtYXR0aW5nJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoa2V5dXApPSdrZXlkb3duKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmFtZSgkZXZlbnQpXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZSA/IHNvdXJjZSA6ICcmbmJzcDsnXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5sb2NrZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAgICAgXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGN1cnNvcjogYmVhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgZm9ybWF0dGluZzpzdHJpbmc7XHJcbiAgZWRpdE5hbWUgPSBmYWxzZTtcclxuICBvbGRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUVkaXRvclwiKVxyXG4gIG5hbWVFZGl0b3I7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lSG9sZGVyXCIpXHJcbiAgbmFtZUhvbGRlclxyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcblxyXG4gIGtleXVwKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKCgoY29kZSA+PSA0OCkgJiYgKGNvZGUgPD0gOTApKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSA5NikgJiYgKGNvZGUgPD0gMTExKSkgfHxcclxuICAgICAgICAoKGNvZGUgPT0gMzIpIHx8IChjb2RlID09IDgpKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSAxODYpICYmIChjb2RlIDw9IDIyMikpKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoKGNvZGUgPT09IDEzKSB8fCAoY29kZSA9PT0gOSkgfHwgKGNvZGUgPT09IDI3KSApIHtcclxuICAgICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lSG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVIb2xkZXIubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDY2KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBibHVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlkb3duKGV2ZW50KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChldmVudC50YXJnZXQsIFwiY2xpY2tcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBpZiAodGhpcy5uYW1lRWRpdG9yKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lRWRpdG9yLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDY2KTtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGNsaWNrTmFtZShldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5lZGl0TmFtZSA9IHRydWU7XHJcbiAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lRWRpdG9yLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICB9LDY2KTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaGVja2JveC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwidXNlRm9udFwiIGNsYXNzPVwiY2hlY2stZm9udFwiPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNvdXJjZSA9PT0gaWRlYWxcIiAjY2hlY2sgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYSBmYS1jaGVja1wiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwic291cmNlICE9PSBpZGVhbFwiICN1bmNoZWNrIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZmEgZmEtY2xvc2VcIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGlucHV0ICpuZ0lmPVwiIXVzZUZvbnRcIiBcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgICAgICBbdmFsdWVdPVwic291cmNlXCIgXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNvdXJjZT09PWlkZWFsID8gdHJ1ZSA6IG51bGxcIiBcclxuICAgICAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiIC8+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5jaGVjay1mb250IHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIG9yaWdpbmFsOiBzdHJpbmc7XHJcbiAgaWRlYWw6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB1c2VGb250OiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKFwiY2hlY2tcIilcclxuICBjaGVjaztcclxuXHJcbiAgQFZpZXdDaGlsZChcInVuY2hlY2tcIilcclxuICB1bmNoZWNrO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAga2V5dXAoZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZXZlbnQudGFyZ2V0LCBcImNsaWNrXCIpO1xyXG5cdFx0fVxyXG4gIH1cclxuXHJcbiAgY2xpY2soZXZlbnQpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMub3JpZ2luYWw7XHJcblx0XHR9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuaWRlYWw7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMudXNlRm9udCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuY2hlY2submF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudW5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudW5jaGVjay5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSw2Nik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuaWRlYWw9IGFyZ3MubGVuZ3RoID8gU3RyaW5nKGFyZ3NbMF0pIDogXCJcIjtcclxuICAgIHRoaXMudXNlRm9udD0gYXJncy5sZW5ndGggPiAxID8gQm9vbGVhbihhcmdzWzFdKSA6IGZhbHNlO1xyXG4gICAgdGhpcy5zb3VyY2U9IFN0cmluZyhzb3VyY2UpO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3JpZ2luYWw9IHRoaXMuc291cmNlID09PSB0aGlzLmlkZWFsID8gXCJcIiA6IHNvdXJjZTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VsZWN0IHRhYmluZGV4PVwiMFwiIFttdWx0aXBsZV09XCJtdWx0aXNlbGVjdCA/IHRydWU6bnVsbFwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uc1wiIFtzZWxlY3RlZF09XCJzb3VyY2UgPT09IHggPyB0cnVlIDogbnVsbFwiICBbdmFsdWVdPVwieFwiIFt0ZXh0Q29udGVudF09XCJ4XCI+PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuICBzZXJ2aWNlOiBQaXBlU2VydmljZUNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gIGNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gIGNoYW5nZShldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZvcih0aGlzLm5hbWUsIHRoaXMuaWQsIGRhdGEpO1xyXG4gICAgdGhpcy5tdWx0aXNlbGVjdCA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA9PT0gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NwYW4tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgPHNwYW4gW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwYW5Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hhcmUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBpZD0nc2hhcmUtY29tbWVudC17e2lkfX0nIFxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgIGNsYXNzPSdzaGFyZS1pdGVtLXRpcHMnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT0nc2hvdWxkRGlzcGxheSA9ICFzaG91bGREaXNwbGF5Jz5cclxuICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc2hhcmUtYWx0XCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzaGFyZVwiPnNoYXJlPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gaWQ9J3NoYXJlLWNvbW1lbnQte3tpZH19LXRpcHMnIGNsYXNzPSd0aXBzJyAqbmdJZj0nc2hvdWxkRGlzcGxheSc+XHJcbiAgICAgIDxzcGFuIGNsYXNzPSdzb2NpYWwtcmVmZXJhbCc+XHJcbiAgICAgICAgPGEgKm5nRm9yPVwibGV0IHNoYXJlIG9mIHNoYXJlTGlzdFwiIFtjbGFzc109J3NoYXJlLmljb24nIHRhcmdldD0nX2JsYW5rJyBbaHJlZl09J3NoYXJlLmhyZWYnPjxzcGFuIGNsYXNzPSdvZmYtc2NyZWVuJyBbdGV4dENvbnRlbnRdPVwic2hhcmUudGl0bGVcIj48L3NwYW4+PC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTogdGFibGU7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyAuZmEge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC50aXBzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCAuZmEge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMCAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIC5mYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc2hvdWxkRGlzcGxheSA9IGZhbHNlO1xyXG4gICAgc291cmNlOiBzdHJpbmc7IC8vIGl0IHNob3VsZCBiZSBhIGxpbmsgcmVmZXJlbmNlIHRvIHdoYXQgaXMgYmVpbmcgc2hhcmVkLlxyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaGFyZUxpc3QgPSBbXTsgLy8gbGlzdCBvZiBzaXRlcyB0byBzaG93IG9uIHNoYXJlIHZpZXcuXHJcbiAgICBcclxuICAgIG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBcclxuICAgIHByaXZhdGUgc2hhcmVJbmZvKHR5cGUsIGFkZHJlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpY29uOiAnZmEgZmEtJyArIHR5cGUsXHJcbiAgICAgICAgICAgIGhyZWY6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2hhcmUgd2l0aCAnKyB0eXBlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IChhcmdzWzBdIGluc3RhbmNlb2YgQXJyYXkpID8gYXJnc1swXSA6IGFyZ3M7XHJcbiAgICAgICAgbGlzdC5tYXAoIChhcmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhcmcgPT09ICdmYWNlYm9vaycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2ZhY2Vib29rJywgJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3R3aXR0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd0d2l0dGVyJywgJ2h0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdsaW5rZWRpbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2xpbmtlZGluJywnaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP3RpdGxlPSZhbXA7dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ29vZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAncGludGVyZXN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cDovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9saW5rLz91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdkaWdnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZGlnZycsICdodHRwOi8vZGlnZy5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2dldC1wb2NrZXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnZXQtcG9ja2V0JywgJ2h0dHBzOi8vZ2V0cG9ja2V0LmNvbS9lZGl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3hpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd4aW5nJywgJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJnVybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3N0dW1ibGV1cG9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnc3R1bWJsZXVwb24nLCAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlrZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIFxyXG4gICAgICAgIGlkPSdsaWtlLXt7aWR9fScgXHJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgY2xhc3M9XCJsaWtlXCIgXHJcbiAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cInNlbGVjdGVkXCIgXHJcbiAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIiBcclxuICAgICAgICAoY2xpY2spPSd0b2dnbGVDb3VudCgkZXZlbnQpJz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy11cFwiICpuZ0lmPVwidGh1bWJzdXAgJiYgIXNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwIHNlbGVjdGVkXCIgKm5nSWY9XCJ0aHVtYnN1cCAmJiBzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy1kb3duXCIgKm5nSWY9XCIhdGh1bWJzdXAgJiYgIXNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLWRvd24gc2VsZWN0ZWRcIiAqbmdJZj1cIiF0aHVtYnN1cCAmJiBzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50c1wiICpuZ0lmPVwic2hvd0NvdW50XCIgW3RleHRDb250ZW50XT1cImZvcm1hdHRlclNvdXJjZSgpXCI+PC9zcGFuPlxyXG4gICAgPC9hPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6IHRhYmxlO3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgICAgICAubGlrZSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpa2UgLmZhIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlrZSAuZmEuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpa2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRhdGE6IGFueTtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93Q291bnQ6IGJvb2xlYW47XHJcbiAgICB0aHVtYnN1cDogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB0aHVtYnMgPSBcIlwiO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvdW50ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLnRodW1ic3VwID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxICYmIGFyZ3NbMV0gPT09ICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aHVtYnMgPSB0aGlzLnRodW1ic3VwID8gXCJ0aHVtYnMtdXAtaXRlbXNcIiA6IFwidGh1bWJzLWRvd24taXRlbXNcIjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gKHRoaXMuZ2V0SXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKSAhPT0gbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIGtleXVwKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZEl0ZW0oaWQpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIHNhdmVkSXRlbXMucHVzaChpZCk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRJdGVtcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoW2lkXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdXJjZSArKztcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVtb3ZlSXRlbShpZCkge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgY29uc3QgaSA9IHNhdmVkSXRlbXMuaW5kZXhPZihpZCk7XHJcbiAgICAgICAgICBzYXZlZEl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgIFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50aHVtYnMsIEpTT04uc3RyaW5naWZ5KHNhdmVkSXRlbXMpKTtcclxuICAgICAgICAgIHRoaXMuc291cmNlIC0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SXRlbShpZCkge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXM6IGFueVtdID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBjb25zdCBpID0gc2F2ZWRJdGVtcy5pbmRleE9mKGlkKTtcclxuICAgIFxyXG4gICAgICAgICAgZm91bmQgPSBpIDwgMCA/IG51bGwgOiBzYXZlZEl0ZW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybWF0dGVyU291cmNlKCkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291cmNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc291cmNlID4gMTAwMCkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9ICh0aGlzLnNvdXJjZS8xMDAwKS50b0ZpeGVkKDEpICsgXCIga1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHRvZ2dsZUNvdW50KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLnRodW1ic1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IiwiLyogY2FsZW5kYXIgY29kZSBpcyBjb3BpZWQgZnJvbSBcImJlbiB0ZWRkZXJcIiBcclxuKiBodHRwOi8vd3d3LmJlbnRlZGRlci5jb20vY3JlYXRlLWNhbGVuZGFyLWdyaWQtY29tcG9uZW50LWFuZ3VsYXItNC9cclxuKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyRGF0ZSB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgdG9kYXk/OiBib29sZWFuO1xyXG4gIH1cclxuICBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhbGVuZGFyLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJjYWxlbmRhci1ib3hcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCIgW3RleHRDb250ZW50XT1cIm9yaWdEYXRlIHwgZGF0ZTpmb3JtYXR0aW5nXCI+PC9zcGFuPlxyXG4gICAgICA8YSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInBvcHBlclwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cInBvcGRhdGVwaWNrZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlBpY2sgYSBkYXRlPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIiAqbmdJZj1cInNob3dDYWxlbmRhclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLW5hdnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vbnRoLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5CYWNrIGEgbW9udGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInA0XCI+e3sgY3VycmVudERhdGUgfCBkYXRlOidNTU1NJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkZvcndhcmQgYSBtb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInllYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwcmV2WWVhcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+QmFjayBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3Bhbj57eyBjdXJyZW50RGF0ZSB8IGRhdGU6ICd5eXl5JyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRZZWFyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+Rm9yd2FyZCBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb250aC1ncmlkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkYXktbmFtZXNcIj5cclxuXHRcdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBuYW1lIG9mIGRheU5hbWVzXCIgY2xhc3M9XCJkYXktbmFtZSBwOVwiPnt7IG5hbWUgfX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrc1wiPlxyXG5cdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IHdlZWsgb2Ygd2Vla3NcIiBjbGFzcz1cIndlZWtcIj5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrLWRhdGUgZGlzYWJsZWRcIiAqbmdJZj1cIiFpc1NlbGVjdGVkTW9udGgoZGF5LmRhdGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2Vlay1kYXRlIGVuYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzU2VsZWN0ZWRNb250aChkYXkuZGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcblx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJzZWxlY3REYXRlKCRldmVudCwgZGF5KVwiXHJcblx0XHRcdFx0XHRcdCAgIFtjbGFzcy50b2RheV09XCJkYXkudG9kYXlcIlxyXG5cdFx0XHRcdFx0XHQgICBbY2xhc3Muc2VsZWN0ZWRdPVwiZGF5LnNlbGVjdGVkXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5jYWxlbmRhci1ib3gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCBkYXRlIHtmbGV4OiAxO31cclxuICAgICAgICAuY2FsZW5kYXItYm94IC5wb3BwZXIge2N1cnNvcjogcG9pbnRlcjtmbGV4OiAwIDAgMTVweH1cclxuICAgICAgICAuY2FsZW5kYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyICoge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLmNhbGVuZGFyLW5hdnMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IGJ1dHRvbixcclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYgYnV0dG9uOmhvdmVyLFxyXG4gICAgICAgIC5jYWxlbmRhciAueWVhci1uYXYgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vla3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLmRheS1uYW1lcyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2RkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSxcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLmRheS1uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUgLmRhdGUtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgbGluZWFyLCBjb2xvciAxNTBtcyBsaW5lYXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmRpc2FibGVkIHtjb2xvcjogI2FhYTt9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6aG92ZXIgLmRhdGUtdGV4dCxcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6aG92ZXI6OmFmdGVyLFxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXM6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuc2VsZWN0ZWQgLmRhdGUtdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnNlbGVjdGVkOjphZnRlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS50b2RheTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaXRlbTogYW55O1xyXG4gIHNob3dDYWxlbmRhciA9IGZhbHNlO1xyXG4gIGZvcm1hdHRpbmc6c3RyaW5nO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuXHJcbiAgb3JpZ0RhdGU6IERhdGU7XHJcbiAgY3VycmVudERhdGU6IERhdGU7XHJcbiAgZGF5TmFtZXMgPSBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcclxuICB3ZWVrczogQ2FsZW5kYXJEYXRlW11bXSA9IFtdO1xyXG4gIHNlbGVjdGVkRGF5czogRGF0ZVtdID0gW107XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAga2V5dXAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9wZGF0ZXBpY2tlcihldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc2hvd0NhbGVuZGFyID0gIXRoaXMuc2hvd0NhbGVuZGFyO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLm9yaWdEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICB0aGlzLm11bHRpc2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICBzb3VyY2UubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKG5ldyBEYXRlKGl0ZW0pKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm11bHRpc2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChuZXcgRGF0ZSh0aGlzLnNvdXJjZSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtID0gZGF0YTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWREYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZERhdGU6IERhdGUgPSB0aGlzLnNlbGVjdGVkRGF5c1tpXTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzU2FtZURheShkYXRlLCBzZWxlY3RlZERhdGUpKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID4gLTE7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkTW9udGgoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RlZERhdGVzKGRheTogQ2FsZW5kYXJEYXRlKSB7XHJcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5tdWx0aXNlbGVjdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZERheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXlzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NhbWVEYXkoZGF5LmRhdGUsIGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRheS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKCFmb3VuZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2goZGF5LmRhdGUpO1xyXG4gICAgICAgICAgICAgIGRheS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERheXMgPSBbZGF5LmRhdGVdO1xyXG4gICAgICAgIGRheS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgc2VsZWN0RGF0ZShldmVudCwgZGF5OiBDYWxlbmRhckRhdGUpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLm9yaWdEYXRlID0gZGF5LmRhdGU7XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF5LmRhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkRGF0ZXMoIGRheSApO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWREYXlzLnNvcnQoIChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGEgPiBiID8gLTEgOiAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0ZWREYXlzLFxyXG4gICAgICAgIGl0ZW06IHRoaXMuaXRlbVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dDYWxlbmRhciA9IGZhbHNlO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBhY3Rpb25zIGZyb20gY2FsZW5kYXJcclxuICBwcmV2TW9udGgoZXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKS0xLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIG5leHRNb250aChldmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpKzEsIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgcHJldlllYXIoZXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLTEsdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIG5leHRZZWFyKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSsxLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICAgIC8vIGdlbmVyYXRlIHRoZSBjYWxlbmRhciBncmlkXHJcbiAgICBnZW5lcmF0ZUNhbGVuZGFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5maWxsRGF0ZXModGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgY29uc3Qgd2Vla3M6IENhbGVuZGFyRGF0ZVtdW10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoZGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHdlZWtzLnB1c2goZGF0ZXMuc3BsaWNlKDAsIDcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53ZWVrcyA9IHdlZWtzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1NhbWVEYXkoYTogRGF0ZSwgYjogRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBhLmdldEZ1bGxZZWFyKCkgPT09IGIuZ2V0RnVsbFllYXIoKSAmJiBcclxuICAgICAgICAgICAgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0RGF0ZSgpID09PSBiLmdldERhdGUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTYW1lTW9udGgoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmdldFllYXIoKSA9PT0gYi5nZXRZZWFyKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxEYXRlcyhjdXJyZW50RGF0ZTogRGF0ZSk6IENhbGVuZGFyRGF0ZVtdIHtcclxuICAgICAgICBjb25zdCBjbSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICAgICAgICBjb25zdCB0bSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZShjbS5nZXRGdWxsWWVhcigpLCBjbS5nZXRNb250aCgpLCAxKVxyXG4gICAgICAgIGNvbnN0IGZpcnN0T2ZNb250aCA9IGZpcnN0RGF5LmdldERheSgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZHcmlkID0gbmV3IERhdGUoZmlyc3REYXkuZ2V0RnVsbFllYXIoKSwgZmlyc3REYXkuZ2V0TW9udGgoKSwgZmlyc3REYXkuZ2V0RGF0ZSgpIC0gZmlyc3RPZk1vbnRoKTtcclxuICAgICAgICBjb25zdCBzdGFydCA9IGZpcnN0RGF5T2ZHcmlkLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpPCAoc3RhcnQgKyA0Mik7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZHcmlkLmdldEZ1bGxZZWFyKCksIGZpcnN0RGF5T2ZHcmlkLmdldE1vbnRoKCksIGkpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdG9kYXk6IHRoaXMuaXNTYW1lRGF5KHRtLCBkKSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLmlzU2VsZWN0ZWQoZCksXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xhc3R1cGRhdGUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cInNob3dJY29uXCIgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImZvcm1hdERhdGUoKVwiPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6IHRhYmxlO3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgICAgICAuZmEge21hcmdpbjowIDVweCAwIDB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFzdFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBhbnk7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNob3dJY29uOiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvdW50OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnNob3dJY29uID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREYXRlKCkge1xyXG5cdFx0Y29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Y29uc3QgbWludXRlID0gNjAwMDA7Ly8gb25lIG1pbnV0ZVxyXG5cdFx0Y29uc3QgaG91ciA9IDM2MDAwMDA7Ly8gb25lIGhvdXIgbGltaXRcclxuXHRcdGNvbnN0IGRheSA9IDg2NDAwMDAwOy8vIDI0IGhvdXJzIGxpbWl0XHJcblx0XHRjb25zdCB3ZWVrID0gNjA0ODAwMDAwOy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0Y29uc3QgbW9udGggPSA2MDQ4MDAwMDAqNDsvLyA3IGRheXMgbGltaXRcclxuXHRcdGNvbnN0IHllYXIgPSA2MDQ4MDAwMDAqNTI7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHJcblx0XHRsZXQgZGlmZiA9IGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIHRoaXMuc291cmNlLmdldFRpbWUoKTtcclxuXHJcblx0XHRpZihkaWZmIDw9IG1pbnV0ZSkgey8vIHVwIHRvIGEgbWludXRlXHJcblx0XHRcdHJlc3VsdCA9IFwic2Vjb25kcyBhZ29cIjtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gaG91cikgey8vIHVwIHRvIGFuIGhvdXJcclxuXHRcdFx0bGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGRpZmYvbWludXRlKTtcclxuXHRcdFx0bGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaWZmIC0gKG1pbnV0ZXMgKiBtaW51dGUpKS8xMDAwKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChtaW51dGVzIDwgMiA/IFwiYSBtaW51dGVcIiA6IG1pbnV0ZXMgKyBcIiBtaW51dGVzIFwiKSArIChzZWNvbmRzID4gMCA/IFwiIGFuZCBcIiArIHNlY29uZHMgKyBcIiBzZWNvbmRzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBkYXkpIHsvLyB1cCB0byBhIGRheVxyXG5cdFx0XHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKGRpZmYvaG91cik7XHJcblx0XHRcdGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAtIChob3VycyAqIGhvdXIpKS9taW51dGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVzdWx0ID0gKGhvdXJzIDwgMiA/IFwiYW4gaG91clwiIDogaG91cnMgKyBcIiBob3VycyBcIikgKyAobWludXRlcyA+IDAgPyBcIiBhbmQgXCIgKyBtaW51dGVzICsgXCIgbWludXRlcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gd2Vlaykgey8vIHVwIHRvIGEgd2Vla1xyXG5cdFx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IoZGlmZi9kYXkpO1xyXG5cdFx0XHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmIC0gKGRheXMgKiBkYXkpKS9ob3VyKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChkYXlzIDwgMiA/IFwiYSBkYXlcIiA6IGRheXMgKyBcIiBkYXlzIFwiKSArIChob3VycyA+IDAgPyBcIiBhbmQgXCIgKyBob3VycyArIFwiIGhvdXJzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBtb250aCkgey8vIHVwIHRvIGEgbW9udGhcclxuXHRcdFx0bGV0IHdlZWtzID0gTWF0aC5mbG9vcihkaWZmL3dlZWspO1xyXG5cdFx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IoKGRpZmYgLSAod2Vla3MgKiB3ZWVrKSkvZGF5KTtcclxuXHJcblx0XHRcdHJlc3VsdCA9ICh3ZWVrcyA8IDIgPyBcImEgd2Vla1wiIDogd2Vla3MgKyBcIiB3ZWVrcyBcIikgKyAoZGF5cyA+IDAgPyBcIiBhbmQgXCIgKyBkYXlzICsgXCIgZGF5cyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0geWVhcikgey8vIHVwIHRvIGEgd2Vla1xyXG5cdFx0XHRsZXQgbW9udGhzID0gTWF0aC5mbG9vcihkaWZmL21vbnRoKTtcclxuXHRcdFx0bGV0IHdlZWtzID0gTWF0aC5mbG9vcigoZGlmZiAtIChtb250aHMgKiBtb250aCkpL3dlZWspO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKG1vbnRocyA8IDIgPyBcImEgbW9udGhcIiA6IG1vbnRocyArIFwiIG1vbnRocyBcIikgKyAod2Vla3MgPiAwID8gXCIgYW5kIFwiICsgd2Vla3MgKyBcIiB3ZWVrcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB5ZWFycyA9IE1hdGguZmxvb3IoZGlmZi95ZWFyKTtcclxuXHRcdFx0bGV0IG1vbnRocyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoeWVhcnMgKiB5ZWFyKSkvbW9udGgpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKHllYXJzIDwgMiA/IFwiYSB5ZWFyXCIgOiB5ZWFycyArIFwiIHllYXJzIFwiKSArIChtb250aHMgPiAwID8gXCIgYW5kIFwiICsgbW9udGhzICsgXCIgbW9udGhzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1ncm91cC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtaXRlbVwiICpuZ0Zvcj1cImxldCB4IG9mIG9wdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIFt0eXBlXT1cInR5cGVcIiBcclxuICAgICAgICAgICAgW2lkXT1cIm5hbWUgKyBpXCIgXHJcbiAgICAgICAgICAgIFtuYW1lXT1cIm5hbWUgKyAodHlwZSA9PT0gJ3JhZGlvJyA/ICcnIDogaSlcIiBcclxuICAgICAgICAgICAgW3ZhbHVlXT1cIngudmFsdWUgPyB4LnZhbHVlIDogeFwiIFxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJpc1NlbGVjdGVkKHgpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIi8+XHJcbiAgICAgICAgPGxhYmVsIFtmb3JdPVwibmFtZSArIGlcIiBbdGV4dENvbnRlbnRdPVwieC5sYWJlbCA/IHgubGFiZWwgOiB4XCI+PC9sYWJlbD5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBhbnk7XHJcbiAgb3B0aW9uczogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzZXJ2aWNlOiBQaXBlU2VydmljZUNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gIGNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaSA9IHRoaXMuc291cmNlLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKGkgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc291cmNlLnNwbGljZShpLDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaXNTZWxlY3RlZChpdGVtKSB7XHJcbiAgICBjb25zdCB4aXRlbSA9IGl0ZW0udmFsdWUgPyBpdGVtLnZhbHVlIDogaXRlbTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgcmV0dXJuIHhpdGVtID09PSB0aGlzLnNvdXJjZTtcclxuICAgIH1cclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zb3VyY2UubWFwKCh4KSA9PiB7XHJcbiAgICAgIGlmICh4aXRlbSA9PT0geCkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmdldERhdGFGb3IodGhpcy5uYW1lLCB0aGlzLmlkLCBkYXRhKTtcclxuICAgIHRoaXMudHlwZSA9IChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcclxuICB9XHJcbn1cclxuXHJcbiIsIlxuaW1wb3J0IHtcbiAgICBJbmplY3RhYmxlLFxuICAgIEluamVjdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEFkZHJlc3NDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2FkZHJlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9lbWFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9udENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9udC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdmlkZW8uY29tcG9uZW50JztcbmltcG9ydCB7IEpzb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2pzb24uY29tcG9uZW50JztcbmltcG9ydCB7IExpbmtDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IFJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmF0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFNwYW5Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NwYW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlrZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGlrZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXN0VXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXN0dXBkYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9vbCB7XG5cdHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudHM9IHt9O1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRTZXJ2aWNlcz0ge307XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInNwYW5cIiwgU3BhbkNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImFkZHJlc3NcIiwgQWRkcmVzc0NvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImVtYWlsXCIsIEVtYWlsQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiZm9udFwiLCBGb250Q29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiaW1hZ2VcIiwgSW1hZ2VDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJ2aWRlb1wiLCBWaWRlb0NvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImpzb25cIiwgSnNvbkNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImxpbmtcIiwgTGlua0NvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInJhdGluZ1wiLCBSYXRpbmdDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJpbnB1dFwiLCBJbnB1dENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImNoZWNrYm94XCIsIENoZWNrYm94Q29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwic2VsZWN0XCIsIFNlbGVjdENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInNoYXJlXCIsIFNoYXJlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwibGlrZVwiLCBMaWtlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwibGFzdHVwZGF0ZVwiLCBMYXN0VXBkYXRlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiY2FsZW5kYXJcIiwgQ2FsZW5kYXJDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJpbnB1dGdyb3VwXCIsIElucHV0R3JvdXBDb21wb25lbnQpO1xuXHR9XG4gIFxuXHRyZWdpc3RlckNvbXBvbmVudCAobmFtZSwgY29tcG9uZW50OiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXHR9XG5cdHJlbW92ZUNvbXBvbmVudCAobmFtZSkge1xuXHRcdGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdO1xuXHR9XG5cdHJlZ2lzdGVyZWRDb21wb25lbnQobmFtZSkge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdO1xuXHR9XG5cblx0cmVnaXN0ZXJTZXJ2aWNlRm9yQ29tcG9uZW50IChuYW1lLCBzZXJ2aWNlOiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXSA9IHNlcnZpY2U7XG5cdH1cblx0cmVtb3ZlU2VydmljZUZvckNvbXBvbmVudCAobmFtZSkge1xuXHRcdGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXTtcblx0fVxuXHRyZWdpc3RlcmVkU2VydmljZUZvckNvbXBvbmVudChuYW1lKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV07XG5cdH1cbn0iLCJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIE9uRGVzdHJveSxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBDb21wb25lbnRSZWYsXHJcbiAgICBFbWJlZGRlZFZpZXdSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBEYXRlUGlwZSxcclxuICAgIEN1cnJlbmN5UGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gICAgSnNvblBpcGUsXHJcbiAgICBTbGljZVBpcGUsXHJcbiAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgTG93ZXJDYXNlUGlwZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuLi9waXBlcy9wcmVwZW5kLnBpcGUnO1xyXG5pbXBvcnQge0FwcGVuZFBpcGV9IGZyb20gJy4uL3BpcGVzL2FwcGVuZC5waXBlJztcclxuaW1wb3J0IHtXcmFwUGlwZX0gZnJvbSAnLi4vcGlwZXMvd3JhcC5waXBlJztcclxuaW1wb3J0IHtNYXBQaXBlfSBmcm9tICcuLi9waXBlcy9tYXAucGlwZSc7XHJcbmltcG9ydCB7TWFza1BpcGV9IGZyb20gJy4uL3BpcGVzL21hc2sucGlwZSc7XHJcbmltcG9ydCB7VmFsdWVPZlBpcGV9IGZyb20gJy4uL3BpcGVzL3ZhbHVlb2YucGlwZSc7XHJcbmltcG9ydCB7Q29uZGl0aW9uYWxQaXBlfSBmcm9tICcuLi9waXBlcy9jb25kaXRpb25hbC5waXBlJztcclxuaW1wb3J0IHtKb2luUGlwZX0gZnJvbSAnLi4vcGlwZXMvam9pbi5waXBlJztcclxuXHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2luamVjdGFibGVzL2NvbXBvbmVudC5wb29sJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaW50b10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnRvRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJyYXdDb250ZW50XCIpXHJcbiAgICByYXdDb250ZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9JZFwiKVxyXG4gICAgaW50b0lkOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9OYW1lXCIpXHJcbiAgICBpbnRvTmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvRGF0YVwiKVxyXG4gICAgaW50b0RhdGE6IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b1wiKVxyXG4gICAgaW50bzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dChcIm9uQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgICBvbkNvbXBvbmVudENoYW5nZSA9IChldmVudCkgPT4ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHB1YmxpYyBlbDpFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCxcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNwbGl0KGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50cmltKCkubWF0Y2goLyg/PVxcUylbXlwiXFw6XSooPzpcIlteXFxcXFwiXSooPzpcXFxcW1xcOlxcU11bXlxcXFxcIl0qKSpcIlteXCJcXDpdKikqL2cpLmZpbHRlcigoeCk9PngubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgXHJcbiAgICAgICAgc3dpdGNoKGFyZ3NbMF0pe1xyXG4gICAgICAgICAgICBjYXNlIFwic2xpY2VcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gc2xpY2UgNToxMiBPUiBzbGljZSA1XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZD0gcGFyc2VJbnQoYXJnc1syXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VyID1uZXcgU2xpY2VQaXBlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjb250ZW50LCBzdGFydCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5kID8gc2xpY2VyLnRyYW5zZm9ybShjbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjbnQsIHN0YXJ0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBudW1iZXI6ZW5fVVM6MiAgIG9yIG51bWJlcjplbl9VUyBvciBudW1iZXJcclxuICAgICAgICAgICAgICAgIGxldCBudW1Mb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICAgICAgICAgIGxldCBudW1EZWNpbWFsPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtTG9jYWwgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIG51bURlY2ltYWw9IGFyZ3NbMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNpbWFsZXIgPW5ldyBEZWNpbWFsUGlwZShudW1Mb2NhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobnVtRGVjaW1hbCA/IGRlY2ltYWxlci50cmFuc2Zvcm0oY250LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImN1cnJlbmN5XCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbmN5OmVuX1VTIG9yIGN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcCA9IG5ldyBDdXJyZW5jeVBpcGUoYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiZW5fVVNcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3cmFwXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIHdyYXA6c29tZXRoaW5nOnNvbWV0aGluZyAgT1Igd3JhcDpzb21ldGhpbmdcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBXcmFwUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIiwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IGFyZ3NbMV0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXBwZW5kXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBcHBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByZXBlbmRcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gcHJlcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBQcmVwZW5kUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gbWFwOmtleTE7dmFsdWUxL2tleTI7dmFsdWUyL2tleTM7dmFsdWUzXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IE1hcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGRhdGU6ZW5fVVM6TU1kZHl5IE9SIGRhdGU6XFxcIk1NL2RkL3l5eXkgaGg6c3NcXFwiXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSA/IG5ldyBEYXRlKGNvbnRlbnQpIDogY29udGVudDtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRlTG9jYWwgPSBcImVuX1VTXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZUZvcm1hdD0gYXJnc1sxXTtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlTG9jYWwgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9IGFyZ3NbMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlciA9bmV3IERhdGVQaXBlKGRhdGVMb2NhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGF0ZXIudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cHBlcmNhc2VcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gdXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1Y3AgPSAgbmV3IFVwcGVyQ2FzZVBpcGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godWNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG93ZXJjYXNlXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGNwID0gIG5ldyBMb3dlckNhc2VQaXBlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsY3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1hc2tcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gbWFzazo0OiogIE9SIG1hc2s6NFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBwYXJzZUludChhcmdzWzFdLCAxMCksIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTWFza1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTWFza1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZhbHVlb2ZcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWVvZjprZXlcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgVmFsdWVPZlBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpZlwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpZjo9OnRydWU6ZmEgZmEtY2hlY2s6ZmEgZmEtYmVsbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNvbmRpdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWx0QWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENvbmRpdGlvbmFsUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnXCInID8gcmVzdWx0LnN1YnN0cmluZygxLHJlc3VsdC5sZW5ndGgtMSkgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zcGxpdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShjb250ZW50LCByZXN1bHQsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJqb2luXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGpzb25cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBKb2luUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImpzb25cIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8ganNvblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJqc29uXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCBkYXRhLCBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZvbnRcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gZm9udDpmYSBmYS1jaGVjazpsZWZ0OipcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiZm9udFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW1haWxcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiZW1haWxcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZHJlc3NcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJhZGRyZXNzXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYXRpbmdcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gcmF0aW5nXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInJhdGluZ1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGFyZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBzaGFyZVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzaGFyZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIFwibGlrZVwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaWtlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlrZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSBcImxhc3R1cGRhdGVcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGFzdHVwZGF0ZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxhc3R1cGRhdGVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlucHV0Z3JvdXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW5wdXRncm91cFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0Z3JvdXBcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcInJhZGlvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW5rXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHQgb3IgbGluazp0ZXh0IG9yIGxpbmtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxpbmtcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaW5rXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlua1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDpwbGFjZWhvbGRlcjpwaXBlXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDppZGVhbDp1c2VGb250XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImNoZWNrYm94XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbWFnZToyMDBweDphdXRvOmFsdHRleHQgT1IgaW1hZ2U6MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgaW1hZ2U6MjAwcHggT1IgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW1hZ2VcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJpbWFnZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZpZGVvXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIHZpZGVvOjIwMHB4OmF1dG86YWx0dGV4dCBPUiB2aWRlbzoyMDBweDphbHRlcm5hdGUtdGV4dCBPUiB2aWRlbzoyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJ2aWRlb1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInZpZGVvXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gdW5rbm93biBmb3JtYXR0ZXJcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRvSWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9OYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA1ID8gYXJnc1s1XSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1Db21wb25lbnQodHlwZSwgY29udGVudDogYW55LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJib29sZWFuXCIgfHwgT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdcIiArIHR5cGUrIFwiJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRyYW5zZm9ybShjb250ZW50LnNvdXJjZSA/IGNvbnRlbnQuc291cmNlIDogY29udGVudCwgZGF0YSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZSAmJiB0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcImJvb2xlYW5cIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb250ZW50KS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ggPSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN4ID09PSBudWxsIHx8IHN4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ1wiICsgdHlwZSsgXCInIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5pZCA9IGlkICsgJy0nICsgKGNvdW50ZXIrKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC50cmFuc2Zvcm0oc291cmNlLnNvdXJjZSA/IHNvdXJjZS5zb3VyY2UgOiBzb3VyY2UsIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3gub25JbnRvQ29tcG9uZW50Q2hhbmdlICYmIHRoaXMub25Db21wb25lbnRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudEZvcihuYW1lKTogUGlwZUNvbXBvbmVudCB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRDb21wb25lbnQobmFtZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogUGlwZUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSB0aGlzLnZpZXdSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gICAgICAgICAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWYgPCBhbnkgPiApLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAoPFBpcGVDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmludG8gfHwgdGhpcy5yYXdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9ICB0aGlzLnJhd0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50by5zcGxpdChcInxcIikubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShyZXN1bHQsIHRoaXMuc3BsaXQoaXRlbSksIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIikudHJhbnNmb3JtKHJlc3VsdCwgW10sIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IoXCJzcGFuXCIpLnRyYW5zZm9ybShzb3VyY2UsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlLCBDdXJyZW5jeVBpcGUsIERlY2ltYWxQaXBlLCBKc29uUGlwZSwgU2xpY2VQaXBlLCBVcHBlckNhc2VQaXBlLCBMb3dlckNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEluVG9QaXBlIH0gZnJvbSAnLi9waXBlcy9pbnRvLnBpcGUnO1xyXG5pbXBvcnQge01hc2tQaXBlfSBmcm9tICcuL3BpcGVzL21hc2sucGlwZSc7XHJcbmltcG9ydCB7TWFwUGlwZX0gZnJvbSAnLi9waXBlcy9tYXAucGlwZSc7XHJcbmltcG9ydCB7TGlua1BpcGV9IGZyb20gJy4vcGlwZXMvbGluay5waXBlJztcclxuaW1wb3J0IHtJbWFnZVBpcGV9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7VmlkZW9QaXBlfSBmcm9tICcuL3BpcGVzL3ZpZGVvLnBpcGUnO1xyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuL3BpcGVzL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7Sm9pblBpcGV9IGZyb20gJy4vcGlwZXMvam9pbi5waXBlJztcclxuaW1wb3J0IHtBcHBlbmRQaXBlfSBmcm9tICcuL3BpcGVzL2FwcGVuZC5waXBlJztcclxuaW1wb3J0IHtXcmFwUGlwZX0gZnJvbSAnLi9waXBlcy93cmFwLnBpcGUnO1xyXG5pbXBvcnQge0VtYWlsUGlwZX0gZnJvbSAnLi9waXBlcy9lbWFpbC5waXBlJztcclxuaW1wb3J0IHtSYXRpbmdQaXBlfSBmcm9tICcuL3BpcGVzL3JhdGluZy5waXBlJztcclxuaW1wb3J0IHtBZGRyZXNzUGlwZX0gZnJvbSAnLi9waXBlcy9hZGRyZXNzLnBpcGUnO1xyXG5pbXBvcnQge0ZvbnRQaXBlfSBmcm9tICcuL3BpcGVzL2ZvbnQucGlwZSc7XHJcbmltcG9ydCB7VmFsdWVPZlBpcGV9IGZyb20gJy4vcGlwZXMvdmFsdWVvZi5waXBlJztcclxuaW1wb3J0IHtDb25kaXRpb25hbFBpcGV9IGZyb20gJy4vcGlwZXMvY29uZGl0aW9uYWwucGlwZSc7XHJcbmltcG9ydCB7U2FuaXRpemVIdG1sUGlwZX0gZnJvbSAnLi9waXBlcy9zYW5pdGl6ZUh0bWwucGlwZSc7XHJcblxyXG5pbXBvcnQge0ludG9EaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9pbnRvLmRpcmVjdGl2ZSdcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vaW5qZWN0YWJsZXMvY29tcG9uZW50LnBvb2wnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTcGFuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NwYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGRyZXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9udC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy92aWRlby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKc29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2pzb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpa2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlrZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXN0VXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xhc3R1cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBZGRyZXNzQ29tcG9uZW50LFxyXG4gICAgRW1haWxDb21wb25lbnQsXHJcbiAgICBGb250Q29tcG9uZW50LFxyXG4gICAgSW1hZ2VDb21wb25lbnQsXHJcbiAgICBWaWRlb0NvbXBvbmVudCxcclxuICAgIEpzb25Db21wb25lbnQsXHJcbiAgICBMaW5rQ29tcG9uZW50LFxyXG4gICAgUmF0aW5nQ29tcG9uZW50LFxyXG4gICAgSW5wdXRDb21wb25lbnQsXHJcbiAgICBDaGVja2JveENvbXBvbmVudCxcclxuICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgIFNwYW5Db21wb25lbnQsXHJcbiAgICBTaGFyZUNvbXBvbmVudCxcclxuICAgIExpa2VDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIExhc3RVcGRhdGVDb21wb25lbnQsXHJcbiAgICBJbnB1dEdyb3VwQ29tcG9uZW50LFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBJblRvUGlwZSxcclxuICAgIEltYWdlUGlwZSxcclxuICAgIFZpZGVvUGlwZSxcclxuICAgIExpbmtQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgV3JhcFBpcGUsXHJcbiAgICBWYWx1ZU9mUGlwZSxcclxuICAgIEVtYWlsUGlwZSxcclxuICAgIFJhdGluZ1BpcGUsXHJcbiAgICBGb250UGlwZSxcclxuICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgIEFkZHJlc3NQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIEludG9EaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEpvaW5QaXBlLFxyXG4gICAgSW5Ub1BpcGUsXHJcbiAgICBJbWFnZVBpcGUsXHJcbiAgICBWaWRlb1BpcGUsXHJcbiAgICBMaW5rUGlwZSxcclxuICAgIE1hc2tQaXBlLFxyXG4gICAgTWFwUGlwZSxcclxuICAgIFByZXBlbmRQaXBlLFxyXG4gICAgQXBwZW5kUGlwZSxcclxuICAgIFdyYXBQaXBlLFxyXG4gICAgVmFsdWVPZlBpcGUsXHJcbiAgICBFbWFpbFBpcGUsXHJcbiAgICBSYXRpbmdQaXBlLFxyXG4gICAgRm9udFBpcGUsXHJcbiAgICBDb25kaXRpb25hbFBpcGUsXHJcbiAgICBBZGRyZXNzUGlwZSxcclxuICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICBJbnRvRGlyZWN0aXZlLFxyXG4gICAgQWRkcmVzc0NvbXBvbmVudCxcclxuICAgIEVtYWlsQ29tcG9uZW50LFxyXG4gICAgRm9udENvbXBvbmVudCxcclxuICAgIEltYWdlQ29tcG9uZW50LFxyXG4gICAgVmlkZW9Db21wb25lbnQsXHJcbiAgICBKc29uQ29tcG9uZW50LFxyXG4gICAgTGlua0NvbXBvbmVudCxcclxuICAgIElucHV0Q29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICBSYXRpbmdDb21wb25lbnQsXHJcbiAgICBTZWxlY3RDb21wb25lbnQsXHJcbiAgICBTcGFuQ29tcG9uZW50LFxyXG4gICAgU2hhcmVDb21wb25lbnQsXHJcbiAgICBMaWtlQ29tcG9uZW50LFxyXG4gICAgQ2FsZW5kYXJDb21wb25lbnQsXHJcbiAgICBMYXN0VXBkYXRlQ29tcG9uZW50LFxyXG4gICAgSW5wdXRHcm91cENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBBZGRyZXNzQ29tcG9uZW50LFxyXG4gICAgRW1haWxDb21wb25lbnQsXHJcbiAgICBGb250Q29tcG9uZW50LFxyXG4gICAgSW1hZ2VDb21wb25lbnQsXHJcbiAgICBWaWRlb0NvbXBvbmVudCxcclxuICAgIEpzb25Db21wb25lbnQsXHJcbiAgICBMaW5rQ29tcG9uZW50LFxyXG4gICAgSW5wdXRDb21wb25lbnQsXHJcbiAgICBDaGVja2JveENvbXBvbmVudCxcclxuICAgIFJhdGluZ0NvbXBvbmVudCxcclxuICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgIFNwYW5Db21wb25lbnQsXHJcbiAgICBTaGFyZUNvbXBvbmVudCxcclxuICAgIExpa2VDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIExhc3RVcGRhdGVDb21wb25lbnQsXHJcbiAgICBJbnB1dEdyb3VwQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEpvaW5QaXBlLFxyXG4gICAgSW5Ub1BpcGUsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIEN1cnJlbmN5UGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gICAgSnNvblBpcGUsXHJcbiAgICBTbGljZVBpcGUsXHJcbiAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgTG93ZXJDYXNlUGlwZSxcclxuICAgIEltYWdlUGlwZSxcclxuICAgIFZpZGVvUGlwZSxcclxuICAgIExpbmtQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgRW1haWxQaXBlLFxyXG4gICAgUmF0aW5nUGlwZSxcclxuICAgIEFkZHJlc3NQaXBlLFxyXG4gICAgRm9udFBpcGUsXHJcbiAgICBDb25kaXRpb25hbFBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIFZhbHVlT2ZQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIENvbXBvbmVudFBvb2xcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEludG9QaXBlTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJQaXBlIiwiU2xpY2VQaXBlIiwiRGVjaW1hbFBpcGUiLCJDdXJyZW5jeVBpcGUiLCJEYXRlUGlwZSIsIkpzb25QaXBlIiwiVXBwZXJDYXNlUGlwZSIsIkxvd2VyQ2FzZVBpcGUiLCJEb21TYW5pdGl6ZXIiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJSZW5kZXJlciIsIlZpZXdDaGlsZCIsIk91dHB1dCIsIkluamVjdGFibGUiLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiRWxlbWVudFJlZiIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIklucHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJDVVNUT01fRUxFTUVOVFNfU0NIRU1BIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUE7Ozs7Ozs7OztRQUtJLDZCQUFVOzs7Ozs7WUFBVixVQUFXLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUTs7Z0JBQ3BDLElBQU0sYUFBYSxHQUFHLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7Z0JBQ2pFLElBQU0sY0FBYyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUU5RCxPQUFPLElBQUksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxjQUFjLEdBQUcsRUFBRSxDQUFDO2FBQzdFOzs7Ozs7O1FBQ0QsNEJBQVM7Ozs7OztZQUFULFVBQVUsS0FBSyxFQUFFLGFBQWEsRUFBRSxRQUFRO2dCQUF4QyxpQkFNQzs7Z0JBTEcsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtvQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxF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