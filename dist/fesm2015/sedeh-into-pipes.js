import { Pipe, Component, ViewChild, Renderer, Output, EventEmitter, Injectable, Directive, ViewContainerRef, ElementRef, Input, ComponentFactoryResolver, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MaskPipe {
    /**
     * @param {?} item
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    maskString(item, visibleDigits, maskWith) {
        /** @type {?} */
        const maskedSection = item ? item.slice(0, -visibleDigits) : "";
        /** @type {?} */
        const visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    }
    /**
     * @param {?} items
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    maskArray(items, visibleDigits, maskWith) {
        /** @type {?} */
        const result = [];
        items.map((item) => {
            result.push(this.maskString(item, visibleDigits, maskWith));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const visibleDigits = (args && args.length) ? args[0] : 4;
        /** @type {?} */
        const maskWith = args.length > 1 ? args[1] : '*';
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.maskString(source, visibleDigits, maskWith);
        }
        return this.maskArray(source, visibleDigits, maskWith);
    }
}
MaskPipe.decorators = [
    { type: Pipe, args: [{ name: 'mask' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MapPipe {
    /**
     * @param {?} list
     * @param {?} map
     * @return {?}
     */
    valuesFor(list, map) {
        /** @type {?} */
        const result = [];
        list.map((key) => {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    }
    /**
     * @param {?} mapping
     * @return {?}
     */
    geMapping(mapping) {
        if (mapping.trim) {
            /** @type {?} */
            const map = {};
            mapping.split('/').map((key) => {
                /** @type {?} */
                const x = key.split(';');
                map[x[0]] = x[1];
            });
            mapping = map;
        }
        return mapping;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    }
}
MapPipe.decorators = [
    { type: Pipe, args: [{ name: 'map' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ValueOfPipe {
    /**
     * @param {?} source
     * @param {?} key
     * @return {?}
     */
    valueOfSingle(source, key) {
        return source[key];
    }
    /**
     * @param {?} sources
     * @param {?} key
     * @return {?}
     */
    valueOfMultiple(sources, key) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.valueOfSingle(source, key));
        });
        return result;
    }
    /**
     * @param {?} object
     * @param {...?} args
     * @return {?}
     */
    transform(object, ...args) {
        if ((typeof object === "string") || !(object instanceof Array)) {
            return this.valueOfSingle(object, args[0]);
        }
        return this.valueOfMultiple(object, args[0]);
    }
}
ValueOfPipe.decorators = [
    { type: Pipe, args: [{ name: 'valueof' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LinkPipe {
    /**
     * @param {?} source
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    stringToLink(source, target, title) {
        if (!title || !title.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            title = d < 0 ? t : t.substring(d + 1);
        }
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
    }
    /**
     * @param {?} sources
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    arrayToImagLink(sources, target, title) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.stringToLink(source, target, ""));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const target = (args && args.length) ? args[0] : "";
        /** @type {?} */
        const title = (args && args.length > 1) ? args[1] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
    }
}
LinkPipe.decorators = [
    { type: Pipe, args: [{ name: 'link' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ImagePipe {
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    stringToImage(source, width, height, alt) {
        if (!alt || !alt.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
    }
    /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    arrayToImage(sources, width, height, alt) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.stringToImage(source, width, height, alt));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const width = (args && args.length) ? "width: " + args[0] + ";" : "";
        /** @type {?} */
        const height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        /** @type {?} */
        const alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");
    }
}
ImagePipe.decorators = [
    { type: Pipe, args: [{ name: 'image' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class VideoPipe {
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    stringToVideo(source, width, height, alt) {
        if (!alt || !alt.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<video src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\'  controls=\'true\' />";
    }
    /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    arrayToVideo(sources, width, height, alt) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.stringToVideo(source, width, height, alt));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const width = (args && args.length) ? "width: " + args[0] + ";" : "";
        /** @type {?} */
        const height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        /** @type {?} */
        const alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToVideo(source, width, height, alt);
        }
        return this.arrayToVideo(source, width, height, "");
    }
}
VideoPipe.decorators = [
    { type: Pipe, args: [{ name: 'video' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PrependPipe {
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return key + source;
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(key + item);
            });
            return result;
        }
    }
}
PrependPipe.decorators = [
    { type: Pipe, args: [{ name: 'prepend' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AppendPipe {
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(item + key);
            });
            return result;
        }
    }
}
AppendPipe.decorators = [
    { type: Pipe, args: [{ name: 'append' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WrapPipe {
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const pre = (args && args.length) ? args[0] : "";
        /** @type {?} */
        const post = pre.length ?
            (args.length > 1 ? args[1] : "") : pre;
        /** @type {?} */
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(pre + item + post);
            });
            return result;
        }
    }
}
WrapPipe.decorators = [
    { type: Pipe, args: [{ name: 'wrap' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EmailPipe {
    /**
     * @param {?} source
     * @return {?}
     */
    emailFromString(source) {
        return "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.emailFromString(item));
            });
            return result;
        }
    }
}
EmailPipe.decorators = [
    { type: Pipe, args: [{ name: 'email' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RatingPipe {
    /**
     * @param {?} source
     * @return {?}
     */
    rateString(source) {
        /** @type {?} */
        const value = parseInt(source, 10);
        /** @type {?} */
        const float = parseFloat(source);
        /** @type {?} */
        let x = "<span class='rating'>";
        for (let i = 0; i < value; i++) {
            x += "<span class='fa fa-star' aria-hidden='true'></span>";
        }
        if (float !== value) {
            x += "<span class='fa fa-star-half' aria-hidden='true'></span>";
        }
        x += "</span><span class='rate-value'>" + source + "</span>";
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.rateString(item));
            });
            return result;
        }
    }
}
RatingPipe.decorators = [
    { type: Pipe, args: [{ name: 'raiting' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AddressPipe {
    /**
     * @param {?} source
     * @return {?}
     */
    addressFromString(source) {
        /** @type {?} */
        let url = "https://maps.google.com/?q=" +
            source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
        url = url.replace("\\s+", "+");
        return "<span class='address'><span>" + source.street + ", " + source.suite + "</span>" +
            "<span> " + source.city + ", " + source.zipcode + "</span>" +
            "</span> <a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</span></a>";
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.addressFromString(item));
            });
            return result;
        }
    }
}
AddressPipe.decorators = [
    { type: Pipe, args: [{ name: 'address' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JoinPipe {
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source.join(args[0]);
        }
        else {
            /** @type {?} */
            const result = [];
            Object.keys(source).map((key) => {
                result.push(source[key]);
            });
            return result.join(args[0]);
        }
    }
}
JoinPipe.decorators = [
    { type: Pipe, args: [{ name: 'join' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FontPipe {
    /**
     * @param {?} font
     * @param {?} location
     * @param {?} action
     * @param {?} content
     * @return {?}
     */
    fontFromString(font, location, action, content) {
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const font = args.length ? "<span class=\'" + args[0] + "\' aria-hidden='true'></span>" : "";
        /** @type {?} */
        const location = args.length > 1 ? args[1] : "";
        /** @type {?} */
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        /** @type {?} */
        const content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.fontFromString(font, location, action, item));
            });
            return result;
        }
    }
}
FontPipe.decorators = [
    { type: Pipe, args: [{ name: 'email' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ConditionalPipe {
    /**
     * @param {?} content
     * @param {?} acondition
     * @param {?} value
     * @param {?} action
     * @param {?} altAction
     * @return {?}
     */
    conditionFromString(content, acondition, value, action, altAction) {
        /** @type {?} */
        let result = "";
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
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const acondition = args.length ? args[0] : "";
        /** @type {?} */
        const value = args.length > 1 ? args[1] : "";
        /** @type {?} */
        const action = args.length > 2 ? args[2] : "";
        /** @type {?} */
        const altAction = args.length > 3 ? args[3] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        }
        else {
            /** @type {?} */
            const result = {};
            source.map((item) => {
                result[item] = this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result;
        }
    }
}
ConditionalPipe.decorators = [
    { type: Pipe, args: [{ name: 'if' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InToPipe {
    /**
     * @param {?} content
     * @param {?} list
     * @return {?}
     */
    transform(content, list) {
        /** @type {?} */
        let result = content;
        list.split("|").map((item) => {
            result = this._transform(result, this.split(item));
        });
        return result;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    split(item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter((x) => x.length);
    }
    /**
     * @param {?} content
     * @param {?} args
     * @return {?}
     */
    _transform(content, args) {
        /** @type {?} */
        let result = content;
        switch (args[0]) {
            case "slice":
                /** @type {?} */
                let start = parseInt(args[1], 10);
                /** @type {?} */
                let end = undefined;
                if (args.length > 2) {
                    end = parseInt(args[2], 10);
                }
                /** @type {?} */
                const slicer = new SlicePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = end ? slicer.transform(content, start, end) : slicer.transform(content, start);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(end ? slicer.transform(cnt, start, end) : slicer.transform(cnt, start));
                    });
                }
                break;
            case "number":
                /** @type {?} */
                let numLocal = "en_US";
                /** @type {?} */
                let numDecimal = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal = args[2];
                }
                /** @type {?} */
                const decimaler = new DecimalPipe(numLocal);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = numDecimal ? decimaler.transform(content, numDecimal) : decimaler.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(numDecimal ? decimaler.transform(cnt, numDecimal) : decimaler.transform(cnt));
                    });
                }
                break;
            case "if":
                /** @type {?} */
                const acondition = args.length > 1 ? args[1] : "";
                /** @type {?} */
                const value = args.length > 2 ? args[2] : "";
                /** @type {?} */
                const action = args.length > 3 ? args[3] : "";
                /** @type {?} */
                const altAction = args.length > 4 ? args[4] : "";
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
                const cp = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = cp.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(cp.transform(cnt));
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
                let dateLocal = "en_US";
                /** @type {?} */
                let dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                /** @type {?} */
                const dater = new DatePipe(dateLocal);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = dater.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(dater.transform(cnt));
                    });
                }
                break;
            case "json":
                /** @type {?} */
                const jcp = new JsonPipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = jcp.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(jcp.transform(cnt));
                    });
                }
                break;
            case "join":
                // json
                result = new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "uppercase":
                /** @type {?} */
                const ucp = new UpperCasePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = ucp.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(ucp.transform(cnt));
                    });
                }
                break;
            case "lowercase":
                /** @type {?} */
                const lcp = new LowerCasePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = lcp.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(lcp.transform(cnt));
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
    }
}
InToPipe.decorators = [
    { type: Pipe, args: [{ name: 'into' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SanitizeHtmlPipe {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
}
SanitizeHtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sanitizeHtml'
            },] }
];
/** @nocollapse */
SanitizeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AddressComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        /** @type {?} */
        const x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
        this.url = x.replace("\\s+", "+");
    }
}
AddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'address-component',
                template: `
    <span class="address">
        <span [textContent]="addr1"></span>
        <span [textContent]="addr2"></span>
    </span> 
    <a [href]="url" class="google-map">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="off-screen">View in google map</span>
    </a>
    `,
                styles: [`.address {display: inline-block;float: left;}
        .google-map {display: inline-block;float: left;}
        .fa {color: #f00;margin: 0 3px;}
        .off-screen {position: absolute;left: -999em;}
        :host a:hover .fa-map-marker{color: #fabdab;}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EmailComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
    }
}
EmailComponent.decorators = [
    { type: Component, args: [{
                selector: 'email',
                template: `
    <a [href]="'mailto:' + source">
        <span class='fa fa-envelope' aria-hidden='true'></span>
        <span [textContent]="source"></span>
    </a>
    `,
                styles: [`
        :host:hover .fa-envelope{color: #fabdab;}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PhoneComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] === 'true' : false;
        this.formatting = args.length > 1 ? args[1] === 'true' : false;
    }
    /**
     * @return {?}
     */
    normalizeSource() {
        /** @type {?} */
        let result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            /** @type {?} */
            const ext = (10 - result.length);
            /** @type {?} */
            const b = result.slice(0, ext);
            /** @type {?} */
            const e = result.slice(ext);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    }
    /**
     * @return {?}
     */
    formattedSource() {
        /** @type {?} */
        let result = this.source;
        if (this.formatting) {
            result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
            result = result[0] === '1' ? result.substring(1) : result;
            if (result.length === 10) {
                result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            }
            else if (result.length > 10) {
                /** @type {?} */
                const ext = (10 - result.length);
                /** @type {?} */
                const b = result.slice(0, ext);
                /** @type {?} */
                const e = result.slice(ext);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                result += (b + ' ext. ' + e);
            }
        }
        return result;
    }
}
PhoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'phone',
                template: `
    <a  *ngIf="isLink" [href]="'tel:' + normalizeSource()">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </a>
    <span *ngIf="!isLink">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </span>
    `,
                styles: [`
        :host a:hover .fa-phone{color: #fabdab;}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FontComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.font = args[0];
        this.location = args.length > 1 ? args[1] : "left";
        /** @type {?} */
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    }
}
FontComponent.decorators = [
    { type: Component, args: [{
                selector: 'font-component',
                template: `
        <span *ngIf="location === 'left'"    [class]="font" aria-hidden='true'></span>
        <span *ngIf="location !== 'replace'" [textContent]="content"></span>
        <span *ngIf="location === 'right'"   [class]="font" aria-hidden='true'></span>
        <span *ngIf="location === 'replace'" [class]="font" aria-hidden='true'></span>
    `,
                styles: [`span span {
            float: left;
        }
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ImageComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                /** @type {?} */
                const q = source.indexOf("?");
                /** @type {?} */
                const t = q < 0 ? source : source.substring(0, q);
                /** @type {?} */
                const d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    }
}
ImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'image-component',
                template: `<img [src]="source" [style.width]="width" [style.height]="height" [title]="alt" />`,
                styles: [``]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class VideoComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                /** @type {?} */
                const q = source.indexOf("?");
                /** @type {?} */
                const t = q < 0 ? source : source.substring(0, q);
                /** @type {?} */
                const d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    }
}
VideoComponent.decorators = [
    { type: Component, args: [{
                selector: 'video-component',
                template: `<video [src]="source" [style.width]="width" [style.height]="height" controls="true" [title]="alt"></video>`,
                styles: [``]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JsonComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
    }
}
JsonComponent.decorators = [
    { type: Component, args: [{
                selector: 'json-component',
                template: `<span class="json-view" [textContent]="source | json"></span>`,
                styles: [`.json-view {
            display: inline-block;
            float: left;
            font-family: monospace;
            padding: 5px;
            white-space: pre-wrap;
            unicode-bidi: embed;        
        }
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LinkComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
        if (!this.title || !this.title.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d + 1);
        }
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'link-component',
                template: `<a [href]="source" [target]="target" [textContent]="title"></a>`,
                styles: [`
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RatingComponent {
    constructor() {
        this.value = [];
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.float = parseFloat(source);
        this.source = source;
        /** @type {?} */
        const size = parseInt(source, 10);
        for (let i = 0; i < size; i++) {
            this.value.push(i);
        }
    }
}
RatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'rating-component',
                template: `
    <span class='rating'>
        <span class='fa fa-star' aria-hidden='true' *ngFor="let x of value"></span>
        <span class='fa fa-star-half' aria-hidden='true' *ngIf="float != value"></span>
    </span>
    <span class='rate-value' [textContent]="source"></span>
    `,
                styles: [`.rating {
            display: inline-block;
        }
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.editName = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        event.stopPropagation();
        event.preventDefault();
        /** @type {?} */
        const code = event.which;
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
                setTimeout(() => {
                    if (this.nameHolder) {
                        this.renderer.invokeElementMethod(this.nameHolder.nativeElement, "focus");
                    }
                }, 66);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    blur(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydown(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if ((code === 13) || (code === 9)) {
            this.renderer.invokeElementMethod(event.target, "click");
            setTimeout(() => {
                if (this.nameEditor) {
                    this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
                }
            }, 66);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickName(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        this.oldValue = String(this.source);
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
        }, 66);
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.placeholder = args.length ? args[0] : "";
        this.formatting = args.length > 1 ? args[1] : "";
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-component',
                template: `
    <span *ngIf="editName">
    <input #nameEditor
        type='text' 
        [id]="id"
        [name]="name"
        [value]="source"
        [placeholder]="placeholder"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'>
    </span>
    <span #nameHolder
        *ngIf='!editName && formatting'
        class='locked' 
        tabindex='0' 
        (keyup)='keydown($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? (source | into:formatting) : '&nbsp;'">
    </span>
    <span #nameHolder
        *ngIf='!editName && !formatting'
        class='locked' 
        tabindex='0' 
        (keyup)='keydown($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? source : '&nbsp;'">
    </span>
    `,
                styles: [`
        .locked {
          display: inline-block;
          cursor: pointer;
          min-width: 30px;
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
        }
        input {
          cursor: beam;
        }
        :host .locked:hover{border: 1px solid #fabdab;}
        `]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: Renderer }
];
InputComponent.propDecorators = {
    nameEditor: [{ type: ViewChild, args: ["nameEditor",] }],
    nameHolder: [{ type: ViewChild, args: ["nameHolder",] }],
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            this.renderer.invokeElementMethod(event.target, "click");
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        /** @type {?} */
        const input = event.target;
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
            setTimeout(() => {
                if (this.check) {
                    this.renderer.invokeElementMethod(this.check.nativeElement, "focus");
                }
                if (this.uncheck) {
                    this.renderer.invokeElementMethod(this.uncheck.nativeElement, "focus");
                }
            }, 66);
        }
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.useFont = args.length > 1 ? Boolean(args[1]) : false;
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-component',
                template: `
    <span *ngIf="useFont" class="check-font">
      <span *ngIf="source === ideal" #check tabindex="0" class="fa fa-check" (keyup)="keyup($event)" (click)="click($event)"></span>
      <span *ngIf="source !== ideal" #uncheck tabindex="0" class="fa fa-close" (keyup)="keyup($event)" (click)="click($event)"></span>
    </span>
    <input *ngIf="!useFont" 
            type="checkbox" 
            tabindex="0" 
            [value]="source" 
            [checked]="source===ideal ? true : null" 
            (keyup)="keyup($event)"
            (click)="click($event)" />
    `,
                styles: [`
        .check-font:hover{color: #fabdab;}
        .check-font {cursor: pointer;}
        `]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: Renderer }
];
CheckboxComponent.propDecorators = {
    check: [{ type: ViewChild, args: ["check",] }],
    uncheck: [{ type: ViewChild, args: ["uncheck",] }],
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() {
        this.multiselect = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        event.stopPropagation();
        event.preventDefault();
        this.source = event.target.value;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: this.data
        });
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.multiselect = args.length ? args[0] === true : false;
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-component',
                template: `
    <select tabindex="0" [multiple]="multiselect ? true:null" (click)="click($event)" (change)="change($event)">
        <option *ngFor="let x of options" [selected]="source === x ? true : null"  [value]="x" [textContent]="x"></option>
    </select>
    `,
                styles: [`
        `]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SpanComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
    }
}
SpanComponent.decorators = [
    { type: Component, args: [{
                selector: 'span-component',
                template: `<span [textContent]="source"></span>`,
                styles: [`
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ShareComponent {
    constructor() {
        this.shouldDisplay = false;
        this.shareList = [];
    }
    /**
     * @param {?} type
     * @param {?} address
     * @return {?}
     */
    shareInfo(type, address) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with ' + type
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        /** @type {?} */
        const list = (args[0] instanceof Array) ? args[0] : args;
        list.map((arg) => {
            if (arg === 'facebook') {
                this.shareList.push(this.shareInfo('facebook', 'http://www.facebook.com/sharer.php?u=' + source));
            }
            else if (arg === 'twitter') {
                this.shareList.push(this.shareInfo('twitter', 'https://twitter.com/share?title=&amp;url=' + source));
            }
            else if (arg === 'linkedin') {
                this.shareList.push(this.shareInfo('linkedin', 'http://www.linkedin.com/shareArticle?title=&amp;url=' + source));
            }
            else if (arg === 'google') {
                this.shareList.push(this.shareInfo('google-plus', 'https://plus.google.com/share?url=' + source));
            }
            else if (arg === 'pinterest') {
                this.shareList.push(this.shareInfo('google-plus', 'http://pinterest.com/pin/create/link/?url=' + source));
            }
            else if (arg === 'digg') {
                this.shareList.push(this.shareInfo('digg', 'http://digg.com/submit?url=' + source));
            }
            else if (arg === 'get-pocket') {
                this.shareList.push(this.shareInfo('get-pocket', 'https://getpocket.com/edit?url=' + source));
            }
            else if (arg === 'xing') {
                this.shareList.push(this.shareInfo('xing', 'https://www.xing.com/app/user?op=share&url=' + source));
            }
            else if (arg === 'stumbleupon') {
                this.shareList.push(this.shareInfo('stumbleupon', 'http://www.stumbleupon.com/submit?url=' + source));
            }
        });
    }
}
ShareComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-component',
                template: `
    <a id='share-comment-{{id}}' 
        tabindex="0" 
        class='share-item-tips' 
        (keyup)='keyup($event)'
        (click)='shouldDisplay = !shouldDisplay'>
    <span class="fa fa-share-alt"></span>
    <span class="share">share</span>
    </a>
    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>
      <span class='social-referal'>
        <a *ngFor="let share of shareList" [class]='share.icon' target='_blank' [href]='share.href'><span class='off-screen' [textContent]="share.title"></span></a>
      </span>
    </span>
`,
                styles: [`
    :host {display: table;position: relative}
    .share-item-tips {cursor: pointer;}
    .share-item-tips:hover {color: #fabdab;}
    .share-item-tips .fa {margin: 0;}
    .share-item-tips:hover .fa{color: #fabdab;}
    .share-item-tips .share{margin-left: 5px;}
    .tips {
        position: absolute;
        display: flex;
        flex-direction: row;
        padding: 5px;
        border: 1px solid #aaa;
        border-radius: 2px;
        background-color: #fff;
        z-index: 2;
    }
    .tips .social-referal {
        display: flex;
        flex-direction: row;
    }
    .tips .social-referal .fa {
        float: left;
        padding: 2px 4px;
        color: blue;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-decoration: none;
        margin: 0 1px;
        width: 20px;
        text-align: center;
    }
    .tips .social-referal .fa:hover {
        color: #fff;
        background-color: blue;
    }
    `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LikeComponent {
    constructor() {
        this.thumbs = "";
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    addItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            savedItems.push(id);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
        }
        else {
            localStorage.setItem(this.thumbs, JSON.stringify([id]));
        }
        this.source++;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    removeItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            /** @type {?} */
            const i = savedItems.indexOf(id);
            savedItems.splice(i, 1);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
            this.source--;
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        /** @type {?} */
        let found = null;
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            /** @type {?} */
            const i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    }
    /**
     * @return {?}
     */
    formatterSource() {
        /** @type {?} */
        let result = this.source;
        if (this.source > 1000) {
            result = (this.source / 1000).toFixed(1) + " k";
        }
        return result;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleCount(event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        if (this.selected) {
            /** @type {?} */
            const existing = this.getItem(this.data[this.key]);
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
    }
}
LikeComponent.decorators = [
    { type: Component, args: [{
                selector: 'like-component',
                template: `
    <a 
        id='like-{{id}}' 
        tabindex="0" 
        class="like" 
        [class.selected]="selected" 
        (keyup)="keyup($event)" 
        (click)='toggleCount($event)'>
        <span class="fa fa-thumbs-up" *ngIf="thumbsup && !selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-up selected" *ngIf="thumbsup && selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-down" *ngIf="!thumbsup && !selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-down selected" *ngIf="!thumbsup && selected" aria-hidden="true"></span>
        <span class="counts" *ngIf="showCount" [textContent]="formatterSource()"></span>
    </a>`,
                styles: [`
        :host {display: table;position: relative}
        .like {cursor: pointer;}
        .like .counts{margin-left: 5px;}
        .like .fa {margin: 0;}
        .like .fa.selected {color: green;}
        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
    keyup(event) {
        event.stopPropagation();
        event.preventDefault();
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    popdatepicker(event) {
        event.stopPropagation();
        event.preventDefault();
        this.showCalendar = !this.showCalendar;
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.currentDate = new Date();
        this.origDate = new Date();
        if (source instanceof Array) {
            this.multiselect = true;
            source.map((item) => {
                this.selectedDays.push(new Date(item));
            });
        }
        else {
            this.multiselect = false;
            this.selectedDays.push(new Date(this.source));
        }
        this.item = data;
        this.generateCalendar();
        this.formatting = args.length ? args[0] : "";
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSelected(date) {
        /** @type {?} */
        let index = -1;
        for (let i = 0; i < this.selectedDays.length; i++) {
            /** @type {?} */
            const selectedDate = this.selectedDays[i];
            if (this.isSameDay(date, selectedDate)) {
                index = i;
            }
        }
        return index > -1;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSelectedMonth(date) {
        return this.isSameMonth(date, this.currentDate);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    toggleSelectedDates(day) {
        /** @type {?} */
        let found = false;
        if (this.multiselect) {
            for (let i = 0; i < this.selectedDays.length; i++) {
                /** @type {?} */
                const date = this.selectedDays[i];
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
    }
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    selectDate(event, day) {
        event.stopPropagation();
        event.preventDefault();
        this.origDate = day.date;
        this.currentDate = day.date;
        this.toggleSelectedDates(day);
        this.selectedDays.sort((a, b) => {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    prevMonth(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
        this.generateCalendar();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nextMonth(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
        this.generateCalendar();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    prevYear(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() - 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nextYear(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    }
    /**
     * @return {?}
     */
    generateCalendar() {
        /** @type {?} */
        const dates = this.fillDates(this.currentDate);
        /** @type {?} */
        const weeks = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    isSameDay(a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    isSameMonth(a, b) {
        return a.getYear() === b.getYear() &&
            a.getMonth() === b.getMonth();
    }
    /**
     * @param {?} currentDate
     * @return {?}
     */
    fillDates(currentDate) {
        /** @type {?} */
        const cm = new Date(currentDate);
        /** @type {?} */
        const tm = new Date();
        /** @type {?} */
        const firstDay = new Date(cm.getFullYear(), cm.getMonth(), 1);
        /** @type {?} */
        const firstOfMonth = firstDay.getDay();
        /** @type {?} */
        const firstDayOfGrid = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstOfMonth);
        /** @type {?} */
        const start = firstDayOfGrid.getDate();
        /** @type {?} */
        const list = [];
        for (let i = start; i < (start + 42); i++) {
            /** @type {?} */
            const d = new Date(firstDayOfGrid.getFullYear(), firstDayOfGrid.getMonth(), i);
            list.push({
                today: this.isSameDay(tm, d),
                selected: this.isSelected(d),
                date: d
            });
        }
        return list;
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-component',
                template: `
    <span class="calendar-box">
      <span class="date" [textContent]="origDate | date:formatting"></span>
      <a tabindex="0" class="popper" (keyup)="keyup($event)" (click)="popdatepicker($event)">
          <span class="fa fa-calendar" aria-hidden="true"></span>
          <span class="off-screen">Pick a date</span>
      </a>
    </span>
    <div class="calendar" *ngIf="showCalendar">
		<div class="calendar-navs">
			<div class="month-nav">
                <button (click)="prevMonth($event)">
                    <span class="fa fa-chevron-left"></span>
                    <span class="off-screen">Back a month</span>
                </button>
				<span class="p4">{{ currentDate | date:'MMMM' }}</span>
                <button (click)="nextMonth($event)">
                    <span class="fa fa-chevron-right"></span>
                    <span class="off-screen">Forward a month</span>
                </button>
			</div>
			<div class="year-nav">
                <button (click)="prevYear($event)">
                    <span class="fa fa-chevron-left"></span>
                    <span class="off-screen">Back a year</span>
                </button>
				<span>{{ currentDate | date: 'yyyy' }}</span>
                <button (click)="nextYear($event)">
                    <span class="fa fa-chevron-right"></span>
                    <span class="off-screen">Forward a year</span>
                </button>
			</div>
		</div>
		<div class="month-grid">
			<div class="day-names">
				<div *ngFor="let name of dayNames" class="day-name p9">{{ name }}</div>
			</div>
			<div class="weeks">
				<div *ngFor="let week of weeks" class="week">
					<ng-container *ngFor="let day of week">
						<div class="week-date disabled" *ngIf="!isSelectedMonth(day.date)">
							<span class="date-text">{{ day.date.getDate() }}</span>
						</div>
						<div class="week-date enabled"
                           *ngIf="isSelectedMonth(day.date)"
                           tabindex="0"
                           (keyup)="keyup($event)"
						   (click)="selectDate($event, day)"
						   [class.today]="day.today"
						   [class.selected]="day.selected">
							<span class="date-text">{{ day.date.getDate() }}</span>
						</div>
					</ng-container>
				</div>
			</div>
		</div>
	</div>
    `,
                styles: [`
        .popper:hover .fa-calendar{color: #fabdab;}
        .calendar-box {
          display: flex;
          flex-direction: row;
          cursor: default;
          width: 100%;
          display: inline-block;
        }
        .calendar-box date {flex: 1;}
        .calendar-box .popper {cursor: pointer;flex: 0 0 15px}
        .calendar {
            display: table;
            width: 210px;
            position: absolute;
            background-color: #fff;
            z-index: 2;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .calendar * {
            box-sizing: border-box;
        }
        .calendar .calendar-navs {
            background-color: whitesmoke;
        }
        .calendar .month-nav {
            padding: 2px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .calendar .year-nav {
            padding: 2px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .calendar .month-nav button,
        .calendar .year-nav button {
            border: 0;
            background: transparent;
            cursor: pointer;
        }
        .calendar .month-nav button:hover,
        .calendar .year-nav button:hover {
            color: red;
        }
        .calendar .month-grid .day-names {
            display: flex;
            flex-direction: row;
            background: whitesmoke;
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        .calendar .month-grid .weeks {
            display: flex;
            flex-direction: column;
        }
        .calendar .month-grid .week {
            display: flex;
            flex-direction: row;
        }
        .calendar .month-grid .day-names {
            border-top: 1px dotted #ddd;
            border-bottom: 1px dashed #ddd;
        }
        .calendar .month-grid .week-date,
        .calendar .month-grid .day-name {
            text-align: center;
            padding: 2px;
            display: block;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .calendar .month-grid .week-date {
            height: 30px;
            position: relative;
            padding: 5px;
        }
        .calendar .month-grid .week-date .date-text {
            font-size: 10px;
            z-index: 10;
        }
        .calendar .month-grid .week-date::after {
            content: '';
            height: 24px;
            width: 24px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            transition: background-color 150ms linear, color 150ms linear;
            z-index: 1;
        }
        .calendar .month-grid .week-date.disabled {color: #aaa;}
        .calendar .month-grid .week-date.enabled {
            cursor: pointer;
        }
        .calendar .month-grid .week-date.enabled:focus {
            outline: 0;
        }
        .calendar .month-grid .week-date.enabled:hover .date-text,
        .calendar .month-grid .week-date.enabled:focus .date-text {
            font-weight: bold;
            color: blue;
        }
        .calendar .month-grid .week-date.enabled:hover::after,
        .calendar .month-grid .week-date.enabled:focus::after {
            background-color: whitesmoke;
        }
        .calendar .month-grid .week-date.selected .date-text {
            color: #fff !important;
        }
        .calendar .month-grid .week-date.selected::after{
            background-color: blue !important;
        }
        .calendar .month-grid .week-date.today::after {
            background-color: lightblue;
            font-weight: bold;
            color: #fff;
        }
        `]
            }] }
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [
    { type: Renderer }
];
CalendarComponent.propDecorators = {
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LastUpdateComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.showIcon = (args && args.length && args[0] === 'true');
    }
    /**
     * @return {?}
     */
    formatDate() {
        /** @type {?} */
        const currentDate = new Date();
        /** @type {?} */
        const minute = 60000;
        /** @type {?} */
        const hour = 3600000;
        /** @type {?} */
        const day = 86400000;
        /** @type {?} */
        const week = 604800000;
        /** @type {?} */
        const month = 604800000 * 4;
        /** @type {?} */
        const year = 604800000 * 52;
        /** @type {?} */
        let result = "";
        /** @type {?} */
        let diff = currentDate.getTime() - this.source.getTime();
        if (diff <= minute) {
            // up to a minute
            result = "seconds ago";
        }
        else if (diff <= hour) {
            /** @type {?} */
            let minutes = Math.floor(diff / minute);
            /** @type {?} */
            let seconds = Math.floor((diff - (minutes * minute)) / 1000);
            result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
        }
        else if (diff <= day) {
            /** @type {?} */
            let hours = Math.floor(diff / hour);
            /** @type {?} */
            let minutes = Math.floor((diff - (hours * hour)) / minute);
            result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
        }
        else if (diff <= week) {
            /** @type {?} */
            let days = Math.floor(diff / day);
            /** @type {?} */
            let hours = Math.floor((diff - (days * day)) / hour);
            result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
        }
        else if (diff <= month) {
            /** @type {?} */
            let weeks = Math.floor(diff / week);
            /** @type {?} */
            let days = Math.floor((diff - (weeks * week)) / day);
            result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
        }
        else if (diff <= year) {
            /** @type {?} */
            let months = Math.floor(diff / month);
            /** @type {?} */
            let weeks = Math.floor((diff - (months * month)) / week);
            result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
        }
        else {
            /** @type {?} */
            let years = Math.floor(diff / year);
            /** @type {?} */
            let months = Math.floor((diff - (years * year)) / month);
            result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
        }
        return result;
    }
}
LastUpdateComponent.decorators = [
    { type: Component, args: [{
                selector: 'lastupdate-component',
                template: `
    <span *ngIf="showIcon" class="fa fa-clock-o" aria-hidden="true"></span>
    <span [textContent]="formatDate()"></span>
    `,
                styles: [`
        :host {display: table;position: relative}
        .fa {margin:0 5px 0 0}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputGroupComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        event.stopPropagation();
        if (this.type === 'radio') {
            this.source = event.target.value;
        }
        else {
            /** @type {?} */
            const i = this.source.indexOf(event.target.value);
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelected(item) {
        /** @type {?} */
        const xitem = item.value ? item.value : item;
        if (this.type === 'radio') {
            return xitem === this.source;
        }
        /** @type {?} */
        let found = false;
        this.source.map((x) => {
            if (xitem === x) {
                found = true;
            }
        });
        return found;
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.type = (source instanceof Array) ? 'checkbox' : 'radio';
    }
}
InputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-group-component',
                template: `
    <span class="input-group-item" *ngFor="let x of options; let i = index">
        <input 
            [type]="type" 
            [id]="name + i" 
            [name]="name + (type === 'radio' ? '' : i)" 
            [value]="x.value ? x.value : x" 
            [checked]="isSelected(x)"
            (click)="click($event)"/>
        <label [for]="name + i" [textContent]="x.label ? x.label : x"></label>
    </span>
    `,
                styles: [`
        `]
            }] }
];
/** @nocollapse */
InputGroupComponent.ctorParameters = () => [
    { type: Renderer }
];
InputGroupComponent.propDecorators = {
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ComponentPool {
    constructor() {
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
    registerComponent(name, component) {
        this.registeredComponents[name] = component;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeComponent(name) {
        delete this.registeredComponents[name];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredComponent(name) {
        return this.registeredComponents[name];
    }
    /**
     * @param {?} name
     * @param {?} service
     * @return {?}
     */
    registerServiceForComponent(name, service) {
        this.registeredServices[name] = service;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeServiceForComponent(name) {
        delete this.registeredServices[name];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredServiceForComponent(name) {
        return this.registeredServices[name];
    }
}
ComponentPool.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentPool.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class IntoDirective {
    /**
     * @param {?} viewRef
     * @param {?} el
     * @param {?} pool
     * @param {?} componentFactoryResolver
     */
    constructor(viewRef, el, pool, componentFactoryResolver) {
        this.viewRef = viewRef;
        this.el = el;
        this.pool = pool;
        this.componentFactoryResolver = componentFactoryResolver;
        this.onComponentChange = (event) => { };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    split(item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter((x) => x.length);
    }
    /**
     * @param {?} content
     * @param {?} args
     * @param {?} data
     * @return {?}
     */
    _transform(content, args, data) {
        /** @type {?} */
        let result = content;
        switch (args[0]) {
            case "slice":
                /** @type {?} */
                let start = parseInt(args[1], 10);
                /** @type {?} */
                let end = undefined;
                if (args.length > 2) {
                    end = parseInt(args[2], 10);
                }
                /** @type {?} */
                const slicer = new SlicePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = end ? slicer.transform(content, start, end) : slicer.transform(content, start);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(end ? slicer.transform(cnt, start, end) : slicer.transform(cnt, start));
                    });
                }
                break;
            case "number":
                /** @type {?} */
                let numLocal = "en_US";
                /** @type {?} */
                let numDecimal = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal = args[2];
                }
                /** @type {?} */
                const decimaler = new DecimalPipe(numLocal);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = numDecimal ? decimaler.transform(content, numDecimal) : decimaler.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(numDecimal ? decimaler.transform(cnt, numDecimal) : decimaler.transform(cnt));
                    });
                }
                break;
            case "currency":
                /** @type {?} */
                const cp = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = cp.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(cp.transform(cnt));
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
                let dateLocal = "en_US";
                /** @type {?} */
                let dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                /** @type {?} */
                const dater = new DatePipe(dateLocal);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = dater.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(dater.transform(cnt));
                    });
                }
                break;
            case "uppercase":
                /** @type {?} */
                const ucp = new UpperCasePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = ucp.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(ucp.transform(cnt));
                    });
                }
                break;
            case "lowercase":
                /** @type {?} */
                const lcp = new LowerCasePipe();
                if ((typeof content === "string") || !(content instanceof Array)) {
                    result = lcp.transform(content);
                }
                else {
                    result = [];
                    content.map((cnt) => {
                        result.push(lcp.transform(cnt));
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
                const acondition = args.length > 1 ? args[1] : "";
                /** @type {?} */
                const value = args.length > 2 ? args[2] : "";
                /** @type {?} */
                const action = args.length > 3 ? args[3] : "";
                /** @type {?} */
                const altAction = args.length > 4 ? args[4] : "";
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
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?} id
     * @param {?} name
     * @param {?} data
     * @param {...?} args
     * @return {?}
     */
    transformComponent(type, content, id, name, data, ...args) {
        /** @type {?} */
        let result;
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
            let counter = 0;
            result = content;
            content.map((source) => {
                if (typeof source === "string" ||
                    typeof content === "number" ||
                    typeof content === "boolean" ||
                    Object.keys(content).length) {
                    /** @type {?} */
                    const sx = this.registeredComponentFor(type);
                    if (sx === null || sx === undefined) {
                        console.error("Custom component '" + type + "' is not defined.");
                    }
                    else {
                        sx.id = id + '-' + (counter++);
                        sx.name = name;
                        sx.service = this.pool.registeredServiceForComponent(type);
                        sx.transform(source.source ? source.source : source, data, args);
                        if (sx.onIntoComponentChange && this.onComponentChange) {
                            sx.onIntoComponentChange.subscribe(this.onComponentChange);
                        }
                    }
                }
            });
        }
        return result;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredComponentFor(name) {
        /** @type {?} */
        const component = this.pool.registeredComponent(name);
        /** @type {?} */
        let result = null;
        if (component) {
            /** @type {?} */
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            /** @type {?} */
            const componentRef = this.viewRef.createComponent(componentFactory);
            /** @type {?} */
            const domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
            this.el.nativeElement.appendChild(domElem);
            result = (/** @type {?} */ (componentRef.instance));
        }
        return result;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.into || this.rawContent) {
            /** @type {?} */
            let result = this.rawContent;
            if (this.into) {
                this.into.split("|").map((item) => {
                    result = this._transform(result, this.split(item), this.intoData);
                });
            }
            if (typeof result === "string") {
                this.registeredComponentFor("span").transform(result, [], this.intoData);
            }
            else if (result instanceof Array) {
                result.map((source) => {
                    if (typeof source === "string") {
                        this.registeredComponentFor("span").transform(source, [], this.intoData);
                    }
                });
            }
        }
    }
}
IntoDirective.decorators = [
    { type: Directive, args: [{
                selector: '[into]'
            },] }
];
/** @nocollapse */
IntoDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: ComponentPool },
    { type: ComponentFactoryResolver }
];
IntoDirective.propDecorators = {
    rawContent: [{ type: Input, args: ["rawContent",] }],
    intoId: [{ type: Input, args: ["intoId",] }],
    intoName: [{ type: Input, args: ["intoName",] }],
    intoData: [{ type: Input, args: ["intoData",] }],
    into: [{ type: Input, args: ["into",] }],
    onComponentChange: [{ type: Input, args: ["onComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class IntoPipeModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { InToPipe, MaskPipe, MapPipe, LinkPipe, ImagePipe, VideoPipe, PrependPipe, AppendPipe, WrapPipe, EmailPipe, RatingPipe, AddressPipe, JoinPipe, FontPipe, ValueOfPipe, SanitizeHtmlPipe, ConditionalPipe, IntoPipeModule, IntoDirective, ComponentPool, AddressComponent as ɵa, CalendarComponent as ɵp, CheckboxComponent as ɵk, EmailComponent as ɵb, FontComponent as ɵd, ImageComponent as ɵe, InputGroupComponent as ɵr, InputComponent as ɵj, JsonComponent as ɵg, LastUpdateComponent as ɵq, LikeComponent as ɵo, LinkComponent as ɵh, PhoneComponent as ɵc, RatingComponent as ɵi, SelectComponent as ɵl, ShareComponent as ɵn, SpanComponent as ɵm, VideoComponent as ɵf };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtaW50by1waXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL21hc2sucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL21hcC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvdmFsdWVvZi5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvbGluay5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvaW1hZ2UucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL3ZpZGVvLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9wcmVwZW5kLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9hcHBlbmQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL3dyYXAucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2VtYWlsLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9yYXRpbmcucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2FkZHJlc3MucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2pvaW4ucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2ZvbnQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2NvbmRpdGlvbmFsLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9pbnRvLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlcy9zYW5pdGl6ZUh0bWwucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvYWRkcmVzcy5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2VtYWlsLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvcGhvbmUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9mb250LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy92aWRlby5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2pzb24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9saW5rLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvcmF0aW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbXBvbmVudHMvaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL3NwYW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2xpa2UuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2xhc3R1cGRhdGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9pbnB1dC1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbmplY3RhYmxlcy9jb21wb25lbnQucG9vbC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2RpcmVjdGl2ZXMvaW50by5kaXJlY3RpdmUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waXBlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gbWFzayBzZW5zaXRpdmUgaW5mb3JtYXRpb24uIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSBtYXNrZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbWFzaycgfSlcclxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgbWFza1N0cmluZyhpdGVtLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hc2tlZFNlY3Rpb24gPSBpdGVtICA/IGl0ZW0uc2xpY2UoMCwgLXZpc2libGVEaWdpdHMpIDogXCJcIjtcclxuICAgICAgICBjb25zdCB2aXNpYmxlU2VjdGlvbiA9IGl0ZW0gPyBpdGVtLnNsaWNlKC12aXNpYmxlRGlnaXRzKSA6IFwiXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtID8gbWFza2VkU2VjdGlvbi5yZXBsYWNlKC8uL2csIG1hc2tXaXRoKSArIHZpc2libGVTZWN0aW9uIDogXCJcIjtcclxuICAgIH1cclxuICAgIG1hc2tBcnJheShpdGVtcywgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5tYXNrU3RyaW5nKGl0ZW0sIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB2aXNpYmxlRGlnaXRzID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IDQ7XHJcbiAgICAgICAgY29uc3QgbWFza1dpdGggPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogJyonO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza1N0cmluZyhzb3VyY2UsIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza0FycmF5KHNvdXJjZSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byB0YWtlIGEgc3RyaW5nIGFzIGEga2V5IGFuZCByZXR1cm5zIHZhbHVlIG9mIGtleSBmcm9tIHRoZSBnaXZlbiBtYXAgb2JqZWN0LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdtYXAnIH0pXHJcbmV4cG9ydCBjbGFzcyBNYXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdmFsdWVzRm9yKGxpc3QsIG1hcCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxpc3QubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hcFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtYXBba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZ2VNYXBwaW5nKG1hcHBpbmcpIHtcclxuICAgICAgICBjb25zdCBtYXAgPSBtYXBwaW5nO1xyXG4gICAgICAgIGlmKCBtYXBwaW5nLnRyaW0gKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9e307XHJcbiAgICAgICAgICAgIG1hcHBpbmcuc3BsaXQoJy8nKS5tYXAoKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0ga2V5LnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICBtYXBbeFswXV0gPSB4WzFdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFwcGluZyA9IG1hcDsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcHBpbmc7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZU1hcHBpbmcoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW3NvdXJjZV0gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNGb3Ioc291cmNlLCBtYXApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBtYXAgb2JqZWN0LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd2YWx1ZW9mJyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsdWVPZlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB2YWx1ZU9mU2luZ2xlKHNvdXJjZSwga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdmFsdWVPZk11bHRpcGxlKHNvdXJjZXMsIGtleSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWx1ZU9mU2luZ2xlKHNvdXJjZSwga2V5KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShvYmplY3Q6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGlmICgodHlwZW9mIG9iamVjdCA9PT0gXCJzdHJpbmdcIikgfHwgIShvYmplY3QgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZlNpbmdsZShvYmplY3QsIGFyZ3NbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mTXVsdGlwbGUob2JqZWN0LCBhcmdzWzBdKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhIGxpbmsuXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2xpbmsnIH0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSkge1xyXG4gICAgICAgIGlmKCF0aXRsZSB8fCAhdGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgdGl0bGUgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8YSBocmVmPSdcIitzb3VyY2UrXCInIHRhcmdldD0nXCIrdGFyZ2V0K1wiJz5cIit0aXRsZStcIjwvYT5cIjtcclxuICAgIH1cclxuICAgIGFycmF5VG9JbWFnTGluayhzb3VyY2VzLCB0YXJnZXQsIHRpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvTGluayhzb3VyY2UsIHRhcmdldCwgXCJcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9JbWFnTGluayhzb3VyY2UsIHRhcmdldCwgdGl0bGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGltYWdlIGRpc3BsYXkuIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSB0cmFuc2Zvcm1lZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpbWFnZScgfSlcclxuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHN0cmluZ1RvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBpZighYWx0IHx8ICFhbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9XFwnXCIrc291cmNlK1wiXFwnIHN0eWxlPVxcJ1wiKyB3aWR0aCArIGhlaWdodCArIFwiXFwnIHRpdGxlPVxcJ1wiK2FsdCtcIlxcJyAvPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb0ltYWdlKHNvdXJjZXMsIHdpZHRoLCBoZWlnaHQsIGFsdCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB3aWR0aDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBcIndpZHRoOiBcIiArIGFyZ3NbMF0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBcImhlaWdodDogXCIgKyBhcmdzWzFdICsgXCI7XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFsdDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgXCJcIik7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGltYWdlIGRpc3BsYXkuIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSB0cmFuc2Zvcm1lZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd2aWRlbycgfSlcclxuZXhwb3J0IGNsYXNzIFZpZGVvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBpZighYWx0IHx8ICFhbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPHZpZGVvIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgc3R5bGU9XFwnXCIrIHdpZHRoICsgaGVpZ2h0ICsgXCJcXCcgdGl0bGU9XFwnXCIrYWx0K1wiXFwnICBjb250cm9scz1cXCd0cnVlXFwnIC8+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvVmlkZW8oc291cmNlcywgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IFwid2lkdGg6IFwiICsgYXJnc1swXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBoZWlnaHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IFwiaGVpZ2h0OiBcIiArIGFyZ3NbMV0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBcIlwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHByZXBlbmQgY2hhcmFjdGVyKHMpIHRvIGEgY29udGVudC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncHJlcGVuZCcgfSlcclxuZXhwb3J0IGNsYXNzIFByZXBlbmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5ICsgc291cmNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChrZXkgKyBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gYXBwZW5kIGNoYXJhY3RlcihzKSB0byBhIGNvbnRlbnQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FwcGVuZCcgfSlcclxuZXhwb3J0IGNsYXNzIEFwcGVuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgICBcclxuICAgICAgICBjb25zdCBrZXkgPSAoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIGtleTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSArIGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHdyYXAgYSBjb250ZW50IGludG8gY2hhcmFjdGVyKHMpLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd3cmFwJyB9KVxyXG5leHBvcnQgY2xhc3MgV3JhcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgXHJcbiAgICAgICAgY29uc3QgcHJlID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgcG9zdD0gcHJlLmxlbmd0aCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIChhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIikgOiBwcmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBzb3VyY2UgKyBwb3N0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwcmUgKyBpdGVtICsgcG9zdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gZW1haWwgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZW1haWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBlbWFpbEZyb21TdHJpbmcoc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXCdtYWlsdG86XCIrc291cmNlK1wiXFwnID48c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj48L2E+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtYWlsRnJvbVN0cmluZyhzb3VyY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmVtYWlsRnJvbVN0cmluZyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYSByYWl0aW5nIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3JhaXRpbmcnIH0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICByYXRlU3RyaW5nKHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgY29uc3QgZmxvYXQgPSBwYXJzZUZsb2F0KHNvdXJjZSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gXCI8c3BhbiBjbGFzcz0ncmF0aW5nJz5cIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKysgKSB7XHJcbiAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGZsb2F0ICE9PSB2YWx1ZSApIHtcclxuICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgeCArPSBcIjwvc3Bhbj48c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZSc+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXRlU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucmF0ZVN0cmluZyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gYWRkcmVzcyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhZGRyZXNzJyB9KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2UuY2l0eSArIFwiLCBcIiArIHNvdXJjZS56aXBjb2RlICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2FkZHJlc3MnPjxzcGFuPlwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICBcIjxzcGFuPiBcIiArIHNvdXJjZS5jaXR5ICtcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArIFwiPC9zcGFuPlwiICsgXHJcbiAgICAgICAgXCI8L3NwYW4+IDxhIGhyZWY9XFwnXCIgKyB1cmwgKyBcIlxcJyBjbGFzcz0nZ29vZ2xlLW1hcCc+PHNwYW4gY2xhc3M9J2ZhIGZhLW1hcC1tYXJrZXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj48L2E+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGpvaW4gYXJyYXlzIG9yIGpzb24gYXR0cmlidXRlIHZhbHVlcy5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnam9pbicgfSlcclxuZXhwb3J0IGNsYXNzIEpvaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5qb2luKGFyZ3NbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oYXJnc1swXSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBlbWFpbCBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdlbWFpbCcgfSlcclxuZXhwb3J0IGNsYXNzIEZvbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBmb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIChsb2NhdGlvbiA9PT0gXCJsZWZ0XCIgPyBcclxuICAgICAgICAgICAgICAgIChmb250ICsgY29udGVudCkgOiBcclxuICAgICAgICAgICAgICAgICgobG9jYXRpb24gPT09IFwicmlnaHRcIikgPyBjb250ZW50ICsgZm9udCA6IGZvbnQpKTtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBhcmdzLmxlbmd0aCA/IFwiPHNwYW4gY2xhc3M9XFwnXCIgKyBhcmdzWzBdICsgXCJcXCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhY3Rpb24gPT09IFwiKlwiID8gc291cmNlIDogKFwicmVwbGFjZVwiID09PSBhY3Rpb24udG9Mb3dlckNhc2UoKSA/IFwiXCIgOiBzb3VyY2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHJldHVybiBhIHRyYW5zZm9ybWF0aW9uIGFyZ3VtZW50IHdoaWNoIHNob3VsZCBiZSBwaXBlZCBpbnRvIGFub3RoZXIgdHJhbnNmb3JtIG9iamVjdFxyXG4qIHRvIHRyYW5zZm9ybSB0aGUgb2JqZWN0IHZhbHVlIHBhc3NlZCB0byB0aGlzIHBpcGUuXHJcbiogdGhlIGFyZ3VtZW50cyBhcmUgYXMgZm9sbG93czogMSkgY29uZGl0aW9uLCAyKSB2YWx1ZSB0byBldmFsdWF0ZSB0aGUgY29uZGl0aW9uLCAzKSBhY3Rpb24sIDQpIGVsc2UgYWN0aW9uLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpZicgfSlcclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgY29uZGl0aW9uRnJvbVN0cmluZyhjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjb25kaXRpb24pe1xyXG4gICAgICAgICAgICBjYXNlIFwiPVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID09PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiIT1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCAhPT0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIj5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA+IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI+PVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID49IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI8XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPCB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPD1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA8PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiflwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY29udGVudCAhPT0gbnVsbCAmJiBjb250ZW50ICE9PSBcIm51bGxcIiA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiIX5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwgfHwgY29udGVudCA9PT0gXCJudWxsXCIgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIn49XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgJiYgdmFsdWUgJiYgU3RyaW5nKGNvbnRlbnQpLnRvTG93ZXJDYXNlKCkgPT09IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5cIiA6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID8gY29udGVudC5pbmRleE9mKGFjdGlvbikgOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBhY29uZGl0aW9uID0gIGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25Gcm9tU3RyaW5nKHNvdXJjZSwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2l0ZW1dID0gdGhpcy5jb25kaXRpb25Gcm9tU3RyaW5nKGl0ZW0sIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRGF0ZVBpcGUsXHJcbiAgQ3VycmVuY3lQaXBlLFxyXG4gIERlY2ltYWxQaXBlLFxyXG4gIEpzb25QaXBlLFxyXG4gIFNsaWNlUGlwZSxcclxuICBVcHBlckNhc2VQaXBlLFxyXG4gIExvd2VyQ2FzZVBpcGVcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtNYXNrUGlwZX0gZnJvbSAnLi9tYXNrLnBpcGUnO1xyXG5pbXBvcnQge01hcFBpcGV9IGZyb20gJy4vbWFwLnBpcGUnO1xyXG5pbXBvcnQge1ZhbHVlT2ZQaXBlfSBmcm9tICcuL3ZhbHVlb2YucGlwZSc7XHJcbmltcG9ydCB7TGlua1BpcGV9IGZyb20gJy4vbGluay5waXBlJztcclxuaW1wb3J0IHtJbWFnZVBpcGV9IGZyb20gJy4vaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7VmlkZW9QaXBlfSBmcm9tICcuL3ZpZGVvLnBpcGUnO1xyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7QXBwZW5kUGlwZX0gZnJvbSAnLi9hcHBlbmQucGlwZSc7XHJcbmltcG9ydCB7V3JhcFBpcGV9IGZyb20gJy4vd3JhcC5waXBlJztcclxuaW1wb3J0IHtFbWFpbFBpcGV9IGZyb20gJy4vZW1haWwucGlwZSc7XHJcbmltcG9ydCB7UmF0aW5nUGlwZX0gZnJvbSAnLi9yYXRpbmcucGlwZSc7XHJcbmltcG9ydCB7QWRkcmVzc1BpcGV9IGZyb20gJy4vYWRkcmVzcy5waXBlJztcclxuaW1wb3J0IHtKb2luUGlwZX0gZnJvbSAnLi9qb2luLnBpcGUnO1xyXG5pbXBvcnQge0ZvbnRQaXBlfSBmcm9tICcuL2ZvbnQucGlwZSc7XHJcbmltcG9ydCB7Q29uZGl0aW9uYWxQaXBlfSBmcm9tICcuL2NvbmRpdGlvbmFsLnBpcGUnO1xyXG5cclxuQFBpcGUoe25hbWU6J2ludG8nfSlcclxuZXhwb3J0IGNsYXNzIEluVG9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxudHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgbGlzdDogc3RyaW5nKTogYW55IHtcclxuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgXHJcbiAgICBsaXN0LnNwbGl0KFwifFwiKS5tYXAoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKHJlc3VsdCwgdGhpcy5zcGxpdChpdGVtKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzcGxpdChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10pIHtcclxuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG5cclxuICAgIHN3aXRjaChhcmdzWzBdKXtcclxuICAgICAgICBjYXNlIFwic2xpY2VcIiA6IFxyXG4gICAgICAgICAgICAvLyBzbGljZSA1OjEyIE9SIHNsaWNlIDVcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBlbmQ9IHBhcnNlSW50KGFyZ3NbMl0sIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzbGljZXIgPW5ldyBTbGljZVBpcGUoKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjb250ZW50LCBzdGFydCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJudW1iZXJcIiA6IFxyXG4gICAgICAgICAgICAvLyBudW1iZXI6ZW5fVVM6MiAgIG9yIG51bWJlcjplbl9VUyBvciBudW1iZXJcclxuICAgICAgICAgICAgbGV0IG51bUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgICAgICBsZXQgbnVtRGVjaW1hbD0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBudW1Mb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICBudW1EZWNpbWFsPSBhcmdzWzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxlciA9bmV3IERlY2ltYWxQaXBlKG51bUxvY2FsKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpZlwiIDogXHJcbiAgICAgICAgICAgIC8vIGlmOj06dHJ1ZTpmYSBmYS1jaGVjazpmYSBmYS1iZWxsXHJcbiAgICAgICAgICAgIGNvbnN0IGFjb25kaXRpb24gPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogXCJcIjtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENvbmRpdGlvbmFsUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnXCInID8gcmVzdWx0LnN1YnN0cmluZygxLHJlc3VsdC5sZW5ndGgtMSkgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cmFuc2Zvcm0oY29udGVudCx0aGlzLnNwbGl0KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJmb250XCIgOiBcclxuICAgICAgICAgICAgLy8gZm9udDpmYSBmYS1jaGVjazpsZWZ0OipcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEZvbnRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCIpOyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImN1cnJlbmN5XCIgOiBcclxuICAgICAgICAgICAgLy8gY3VycmVuY3k6ZW5fVVMgb3IgY3VycmVuY3lcclxuICAgICAgICAgICAgY29uc3QgY3AgPSBuZXcgQ3VycmVuY3lQaXBlKGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcImVuX1VTXCIpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ3cmFwXCIgOiBcclxuICAgICAgICAgICAgLy8gd3JhcDpzb21ldGhpbmc6c29tZXRoaW5nICBPUiB3cmFwOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgV3JhcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBhcmdzWzFdKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJhcHBlbmRcIiA6IFxyXG4gICAgICAgICAgICAvLyBhcHBlbmQ6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBcHBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJwcmVwZW5kXCIgOiBcclxuICAgICAgICAgICAgLy8gcHJlcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFByZXBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlbWFpbFwiIDogXHJcbiAgICAgICAgICAgIC8vIGVtYWlsXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBFbWFpbFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYWRkcmVzc1wiIDogXHJcbiAgICAgICAgICAgIC8vIGFkZHJlc3NcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFkZHJlc3NQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpOyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInJhdGluZ1wiIDogXHJcbiAgICAgICAgICAgIC8vIHJhdGluZ1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUmF0aW5nUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJtYXBcIiA6IFxyXG4gICAgICAgICAgICAvLyBtYXA6a2V5MTt2YWx1ZTEva2V5Mjt2YWx1ZTIva2V5Mzt2YWx1ZTNcclxuICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRhdGVcIiA6IFxyXG4gICAgICAgICAgICAvLyBkYXRlOmVuX1VTOk1NZGR5eSBPUiBkYXRlOlxcXCJNTS9kZC95eXl5IGhoOnNzXFxcIlxyXG4gICAgICAgICAgICAvLyBjb25zdCBkYXRlID0gKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSA/IG5ldyBEYXRlKGNvbnRlbnQpIDogY29udGVudDtcclxuICAgICAgICAgICAgbGV0IGRhdGVMb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICAgICAgbGV0IGRhdGVGb3JtYXQ9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVMb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PSBhcmdzWzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVyID1uZXcgRGF0ZVBpcGUoZGF0ZUxvY2FsKTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkYXRlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwianNvblwiIDogXHJcbiAgICAgICAgICAgIC8vIGpzb25cclxuICAgICAgICAgICAgY29uc3QgamNwID0gIG5ldyBKc29uUGlwZSgpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGpjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChqY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImpvaW5cIiA6IFxyXG4gICAgICAgICAgICAvLyBqc29uXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBKb2luUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ1cHBlcmNhc2VcIiA6IFxyXG4gICAgICAgICAgICAvLyB1cHBlcmNhc2VcclxuICAgICAgICAgICAgY29uc3QgdWNwID0gIG5ldyBVcHBlckNhc2VQaXBlKCk7XHJcbiAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdWNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibG93ZXJjYXNlXCIgOiBcclxuICAgICAgICAgICAgLy8gbG93ZXJjYXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxjcCA9ICBuZXcgTG93ZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChsY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm1hc2tcIiA6IFxyXG4gICAgICAgICAgICAvLyBtYXNrOjQ6KiAgT1IgbWFzazo0XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBwYXJzZUludChhcmdzWzFdLCAxMCksIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmFsdWVvZlwiIDogXHJcbiAgICAgICAgICAgIC8vIHZhbHVlb2Y6a2V5XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgVmFsdWVPZlBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwibGlua1wiIDogXHJcbiAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHQgb3IgbGluazp0ZXh0IG9yIGxpbmtcclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBMaW5rUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTGlua1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IExpbmtQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJpbWFnZVwiIDogXHJcbiAgICAgICAgICAgIC8vIGltYWdlOjIwMHB4OmF1dG86YWx0dGV4dCBPUiBpbWFnZToyMDBweDphbHRlcm5hdGUtdGV4dCBPUiBpbWFnZToyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBJbWFnZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidmlkZW9cIiA6IFxyXG4gICAgICAgICAgICAvLyB2aWRlbzoyMDBweDphdXRvOmFsdHRleHQgT1IgdmlkZW86MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgdmlkZW86MjAwcHggT1IgdmlkZW9cclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IFZpZGVvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG4qIFRha2VzIGNhcmUgb2YgcHJvYmxlbSB3aXRoIHNlY3VyaXR5IHByZWNhdXNpb25zIHRoYXQgc3RyaXAgb3V0IGNlcnRhaW4gY2hhcmFjdGVycyBcclxuKiBmcm9tIGVuZCByZXN1bHQgb2YgeW91ciByZXF1ZXN0cy5cclxuKiBjb2RlIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2ODExNjMvYW5ndWxhci0yLXNhbml0aXppbmctaHRtbC1zdHJpcHBlZC1zb21lLWNvbnRlbnQtd2l0aC1kaXYtaWQtdGhpcy1pcy1idWctb3ItZmVcclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc2FuaXRpemVIdG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FuaXRpemVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6RG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odjpzdHJpbmcpOlNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkZHJlc3MtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiYWRkcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImFkZHIyXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPiBcclxuICAgIDxhIFtocmVmXT1cInVybFwiIGNsYXNzPVwiZ29vZ2xlLW1hcFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5WaWV3IGluIGdvb2dsZSBtYXA8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYC5hZGRyZXNzIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgICAgIC5nb29nbGUtbWFwIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgICAgIC5mYSB7Y29sb3I6ICNmMDA7bWFyZ2luOiAwIDNweDt9XHJcbiAgICAgICAgLm9mZi1zY3JlZW4ge3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAtOTk5ZW07fVxyXG4gICAgICAgIDpob3N0IGE6aG92ZXIgLmZhLW1hcC1tYXJrZXJ7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBhZGRyMTogc3RyaW5nO1xyXG4gICAgYWRkcjI6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5hZGRyMSA9IHNvdXJjZS5zdHJlZXQgKyAnLCAnICsgc291cmNlLnN1aXRlO1xyXG4gICAgICAgIHRoaXMuYWRkcjIgPSBzb3VyY2UuY2l0eSArICcsICcgKyBzb3VyY2UuemlwY29kZTtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9XCIgKyBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgdGhpcy5hZGRyMiArXCImaWU9VVRGLThcIjtcclxuICAgICAgICB0aGlzLnVybCA9IHgucmVwbGFjZShcIlxcXFxzK1wiLCBcIitcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VtYWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBbaHJlZl09XCInbWFpbHRvOicgKyBzb3VyY2VcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Q6aG92ZXIgLmZhLWVudmVsb3Ble2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGhvbmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICAqbmdJZj1cImlzTGlua1wiIFtocmVmXT1cIid0ZWw6JyArIG5vcm1hbGl6ZVNvdXJjZSgpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZWRTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuICpuZ0lmPVwiIWlzTGlua1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVkU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IGE6aG92ZXIgLmZhLXBob25le2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzTGluazogYm9vbGVhbjtcclxuICAgIGZvcm1hdHRpbmc6IGJvb2xlYW47XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdID09PSAndHJ1ZScgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmc9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gPT09ICd0cnVlJyA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU291cmNlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQgKyAnO2V4dD0nICsgcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dCA9ICgxMCAtIHJlc3VsdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSByZXN1bHQuc2xpY2UoZXh0KTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxJyArIGIgKyAnO2V4dD0nICsgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGZvcm1hdHRlZFNvdXJjZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ID0gKDEwIC0gcmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIGIucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Kz0gKGIgKyAnIGV4dC4gJyArIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZvbnQtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ2xlZnQnXCIgICAgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gIT09ICdyZXBsYWNlJ1wiIFt0ZXh0Q29udGVudF09XCJjb250ZW50XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdyaWdodCdcIiAgIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAncmVwbGFjZSdcIiBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYHNwYW4gc3BhbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb250Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBmb250OiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmZvbnQgPSBhcmdzWzBdO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhY3Rpb24gPT09IFwiKlwiID8gc291cmNlIDogKFwicmVwbGFjZVwiID09PSBhY3Rpb24udG9Mb3dlckNhc2UoKSA/IFwiXCIgOiBzb3VyY2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbWFnZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8aW1nIFtzcmNdPVwic291cmNlXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIiBbdGl0bGVdPVwiYWx0XCIgLz5gLFxyXG4gICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBhbHQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5hbHQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYWx0IHx8ICF0aGlzLmFsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHQgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2aWRlby1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8dmlkZW8gW3NyY109XCJzb3VyY2VcIiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiIGNvbnRyb2xzPVwidHJ1ZVwiIFt0aXRsZV09XCJhbHRcIj48L3ZpZGVvPmAsXHJcbiAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZGVvQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHdpZHRoOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IHN0cmluZztcclxuICAgIGFsdDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFsdCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5hbHQgfHwgIXRoaXMuYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2pzb24tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJqc29uLXZpZXdcIiBbdGV4dENvbnRlbnRdPVwic291cmNlIHwganNvblwiPjwvc3Bhbj5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYC5qc29uLXZpZXcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgICAgICAgdW5pY29kZS1iaWRpOiBlbWJlZDsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc29uQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpbmstY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgPGEgW2hyZWZdPVwic291cmNlXCIgW3RhcmdldF09XCJ0YXJnZXRcIiBbdGV4dENvbnRlbnRdPVwidGl0bGVcIj48L2E+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0YXJnZXQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnRpdGxlIHx8ICF0aGlzLnRpdGxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmF0aW5nLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGluZyc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXInIGFyaWEtaGlkZGVuPSd0cnVlJyAqbmdGb3I9XCJsZXQgeCBvZiB2YWx1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3Rhci1oYWxmJyBhcmlhLWhpZGRlbj0ndHJ1ZScgKm5nSWY9XCJmbG9hdCAhPSB2YWx1ZVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPSdyYXRlLXZhbHVlJyBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGAucmF0aW5nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IGFueVtdID0gW107XHJcbiAgICBmbG9hdDogYW55O1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5mbG9hdCA9IHBhcnNlRmxvYXQoc291cmNlKTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgPGlucHV0ICNuYW1lRWRpdG9yXHJcbiAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgW2lkXT1cImlkXCJcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICBbdmFsdWVdPVwic291cmNlXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmIGZvcm1hdHRpbmcnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleWRvd24oJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPVwiY2xpY2tOYW1lKCRldmVudClcIlxyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic291cmNlID8gKHNvdXJjZSB8IGludG86Zm9ybWF0dGluZykgOiAnJm5ic3A7J1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmICFmb3JtYXR0aW5nJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoa2V5dXApPSdrZXlkb3duKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmFtZSgkZXZlbnQpXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZSA/IHNvdXJjZSA6ICcmbmJzcDsnXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5sb2NrZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAgICAgXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgY3Vyc29yOiBiZWFtO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6aG9zdCAubG9ja2VkOmhvdmVye2JvcmRlcjogMXB4IHNvbGlkICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIGZvcm1hdHRpbmc6c3RyaW5nO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgb2xkVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVFZGl0b3JcIilcclxuICBuYW1lRWRpdG9yO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUhvbGRlclwiKVxyXG4gIG5hbWVIb2xkZXJcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICBrZXl1cChldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmICgoKGNvZGUgPj0gNDgpICYmIChjb2RlIDw9IDkwKSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gOTYpICYmIChjb2RlIDw9IDExMSkpIHx8XHJcbiAgICAgICAgKChjb2RlID09IDMyKSB8fCAoY29kZSA9PSA4KSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gMTg2KSAmJiAoY29kZSA8PSAyMjIpKSkge1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpIHx8IChjb2RlID09PSAyNykgKSB7XHJcbiAgICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgaWYgKHRoaXMubmFtZUhvbGRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lSG9sZGVyLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSw2Nik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYmx1cihldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5ZG93bihldmVudCkge1xyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZXZlbnQudGFyZ2V0LCBcImNsaWNrXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZUVkaXRvcikge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSw2Nik7XHJcblx0XHR9XHJcbiAgfVxyXG5cclxuICBjbGlja05hbWUoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZWRpdE5hbWUgPSB0cnVlO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgfSw2Nik7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlcj0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICAgIHRoaXMuZm9ybWF0dGluZyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2hlY2tib3gtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cInVzZUZvbnRcIiBjbGFzcz1cImNoZWNrLWZvbnRcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzb3VyY2UgPT09IGlkZWFsXCIgI2NoZWNrIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNvdXJjZSAhPT0gaWRlYWxcIiAjdW5jaGVjayB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZhIGZhLWNsb3NlXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxpbnB1dCAqbmdJZj1cIiF1c2VGb250XCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiIFxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzb3VyY2U9PT1pZGVhbCA/IHRydWUgOiBudWxsXCIgXHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIiAvPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAuY2hlY2stZm9udDpob3Zlcntjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgLmNoZWNrLWZvbnQge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIG9yaWdpbmFsOiBzdHJpbmc7XHJcbiAgaWRlYWw6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB1c2VGb250OiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKFwiY2hlY2tcIilcclxuICBjaGVjaztcclxuXHJcbiAgQFZpZXdDaGlsZChcInVuY2hlY2tcIilcclxuICB1bmNoZWNrO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAga2V5dXAoZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZXZlbnQudGFyZ2V0LCBcImNsaWNrXCIpO1xyXG5cdFx0fVxyXG4gIH1cclxuXHJcbiAgY2xpY2soZXZlbnQpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMub3JpZ2luYWw7XHJcblx0XHR9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuaWRlYWw7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMudXNlRm9udCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuY2hlY2submF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudW5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMudW5jaGVjay5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSw2Nik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuaWRlYWw9IGFyZ3MubGVuZ3RoID8gU3RyaW5nKGFyZ3NbMF0pIDogXCJcIjtcclxuICAgIHRoaXMudXNlRm9udD0gYXJncy5sZW5ndGggPiAxID8gQm9vbGVhbihhcmdzWzFdKSA6IGZhbHNlO1xyXG4gICAgdGhpcy5zb3VyY2U9IFN0cmluZyhzb3VyY2UpO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3JpZ2luYWw9IHRoaXMuc291cmNlID09PSB0aGlzLmlkZWFsID8gXCJcIiA6IHNvdXJjZTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VsZWN0IHRhYmluZGV4PVwiMFwiIFttdWx0aXBsZV09XCJtdWx0aXNlbGVjdCA/IHRydWU6bnVsbFwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uc1wiIFtzZWxlY3RlZF09XCJzb3VyY2UgPT09IHggPyB0cnVlIDogbnVsbFwiICBbdmFsdWVdPVwieFwiIFt0ZXh0Q29udGVudF09XCJ4XCI+PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuICBzZXJ2aWNlOiBQaXBlU2VydmljZUNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjbGljayhldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBjaGFuZ2UoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmdldERhdGFGb3IodGhpcy5uYW1lLCB0aGlzLmlkLCBkYXRhKTtcclxuICAgIHRoaXMubXVsdGlzZWxlY3QgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gPT09IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzcGFuLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGFuQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NoYXJlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgaWQ9J3NoYXJlLWNvbW1lbnQte3tpZH19JyBcclxuICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICBjbGFzcz0nc2hhcmUtaXRlbS10aXBzJyBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJ1xyXG4gICAgICAgIChjbGljayk9J3Nob3VsZERpc3BsYXkgPSAhc2hvdWxkRGlzcGxheSc+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXNoYXJlLWFsdFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwic2hhcmVcIj5zaGFyZTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fS10aXBzJyBjbGFzcz0ndGlwcycgKm5nSWY9J3Nob3VsZERpc3BsYXknPlxyXG4gICAgICA8c3BhbiBjbGFzcz0nc29jaWFsLXJlZmVyYWwnPlxyXG4gICAgICAgIDxhICpuZ0Zvcj1cImxldCBzaGFyZSBvZiBzaGFyZUxpc3RcIiBbY2xhc3NdPSdzaGFyZS5pY29uJyB0YXJnZXQ9J19ibGFuaycgW2hyZWZdPSdzaGFyZS5ocmVmJz48c3BhbiBjbGFzcz0nb2ZmLXNjcmVlbicgW3RleHRDb250ZW50XT1cInNoYXJlLnRpdGxlXCI+PC9zcGFuPjwvYT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge2Rpc3BsYXk6IHRhYmxlO3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzOmhvdmVyIHtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIC5mYSB7bWFyZ2luOiAwO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHM6aG92ZXIgLmZhe2NvbG9yOiAjZmFiZGFiO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMgLnNoYXJle21hcmdpbi1sZWZ0OiA1cHg7fVxyXG4gICAgLnRpcHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIC5mYSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwgLmZhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzaG91bGREaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBzb3VyY2U6IHN0cmluZzsgLy8gaXQgc2hvdWxkIGJlIGEgbGluayByZWZlcmVuY2UgdG8gd2hhdCBpcyBiZWluZyBzaGFyZWQuXHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNoYXJlTGlzdCA9IFtdOyAvLyBsaXN0IG9mIHNpdGVzIHRvIHNob3cgb24gc2hhcmUgdmlldy5cclxuICAgIFxyXG4gICAgb25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzaGFyZUluZm8odHlwZSwgYWRkcmVzcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYSBmYS0nICsgdHlwZSxcclxuICAgICAgICAgICAgaHJlZjogYWRkcmVzcyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzaGFyZSB3aXRoICcrIHR5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gKGFyZ3NbMF0gaW5zdGFuY2VvZiBBcnJheSkgPyBhcmdzWzBdIDogYXJncztcclxuICAgICAgICBsaXN0Lm1hcCggKGFyZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGFyZyA9PT0gJ2ZhY2Vib29rJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZmFjZWJvb2snLCAnaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAndHdpdHRlcicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3R3aXR0ZXInLCAnaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT90aXRsZT0mYW1wO3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2xpbmtlZGluJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnbGlua2VkaW4nLCdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdnb29nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnb29nbGUtcGx1cycsICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdwaW50ZXJlc3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnb29nbGUtcGx1cycsICdodHRwOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2xpbmsvP3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2RpZ2cnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdkaWdnJywgJ2h0dHA6Ly9kaWdnLmNvbS9zdWJtaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ2V0LXBvY2tldCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2dldC1wb2NrZXQnLCAnaHR0cHM6Ly9nZXRwb2NrZXQuY29tL2VkaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAneGluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3hpbmcnLCAnaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXI/b3A9c2hhcmUmdXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnc3R1bWJsZXVwb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdzdHVtYmxldXBvbicsICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWtlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgXHJcbiAgICAgICAgaWQ9J2xpa2Ute3tpZH19JyBcclxuICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICBjbGFzcz1cImxpa2VcIiBcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIiBcclxuICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIFxyXG4gICAgICAgIChjbGljayk9J3RvZ2dsZUNvdW50KCRldmVudCknPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwXCIgKm5nSWY9XCJ0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtdXAgc2VsZWN0ZWRcIiAqbmdJZj1cInRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLWRvd25cIiAqbmdJZj1cIiF0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtZG93biBzZWxlY3RlZFwiICpuZ0lmPVwiIXRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRzXCIgKm5nSWY9XCJzaG93Q291bnRcIiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVyU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L2E+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTogdGFibGU7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgICAgIC5saWtlIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAgIC5saWtlIC5jb3VudHN7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAgICAgLmxpa2UgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgICAgIC5saWtlIC5mYS5zZWxlY3RlZCB7Y29sb3I6IGdyZWVuO31cclxuICAgICAgICAubGlrZTpob3ZlciwgLmxpa2U6aG92ZXIgLmZhLCAubGlrZTpob3ZlciAuZmEuc2VsZWN0ZWR7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpa2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRhdGE6IGFueTtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93Q291bnQ6IGJvb2xlYW47XHJcbiAgICB0aHVtYnN1cDogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB0aHVtYnMgPSBcIlwiO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvdW50ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLnRodW1ic3VwID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxICYmIGFyZ3NbMV0gPT09ICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aHVtYnMgPSB0aGlzLnRodW1ic3VwID8gXCJ0aHVtYnMtdXAtaXRlbXNcIiA6IFwidGh1bWJzLWRvd24taXRlbXNcIjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gKHRoaXMuZ2V0SXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKSAhPT0gbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIGtleXVwKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZEl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgc2F2ZWRJdGVtcy5wdXNoKGlkKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShzYXZlZEl0ZW1zKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShbaWRdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc291cmNlICsrO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1vdmVJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIGNvbnN0IGkgPSBzYXZlZEl0ZW1zLmluZGV4T2YoaWQpO1xyXG4gICAgICAgICAgc2F2ZWRJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICBcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShzYXZlZEl0ZW1zKSk7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZSAtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXM6IGFueVtdID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBjb25zdCBpID0gc2F2ZWRJdGVtcy5pbmRleE9mKGlkKTtcclxuICAgIFxyXG4gICAgICAgICAgZm91bmQgPSBpIDwgMCA/IG51bGwgOiBzYXZlZEl0ZW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybWF0dGVyU291cmNlKCkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291cmNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc291cmNlID4gMTAwMCkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9ICh0aGlzLnNvdXJjZS8xMDAwKS50b0ZpeGVkKDEpICsgXCIga1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHRvZ2dsZUNvdW50KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLnRodW1ic1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IiwiLyogY2FsZW5kYXIgY29kZSBpcyBjb3BpZWQgZnJvbSBcImJlbiB0ZWRkZXJcIiBcclxuKiBodHRwOi8vd3d3LmJlbnRlZGRlci5jb20vY3JlYXRlLWNhbGVuZGFyLWdyaWQtY29tcG9uZW50LWFuZ3VsYXItNC9cclxuKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyRGF0ZSB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgdG9kYXk/OiBib29sZWFuO1xyXG4gIH1cclxuICBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhbGVuZGFyLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJjYWxlbmRhci1ib3hcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCIgW3RleHRDb250ZW50XT1cIm9yaWdEYXRlIHwgZGF0ZTpmb3JtYXR0aW5nXCI+PC9zcGFuPlxyXG4gICAgICA8YSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInBvcHBlclwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cInBvcGRhdGVwaWNrZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlBpY2sgYSBkYXRlPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIiAqbmdJZj1cInNob3dDYWxlbmRhclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLW5hdnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vbnRoLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5CYWNrIGEgbW9udGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInA0XCI+e3sgY3VycmVudERhdGUgfCBkYXRlOidNTU1NJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkZvcndhcmQgYSBtb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInllYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwcmV2WWVhcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+QmFjayBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3Bhbj57eyBjdXJyZW50RGF0ZSB8IGRhdGU6ICd5eXl5JyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRZZWFyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+Rm9yd2FyZCBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb250aC1ncmlkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkYXktbmFtZXNcIj5cclxuXHRcdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBuYW1lIG9mIGRheU5hbWVzXCIgY2xhc3M9XCJkYXktbmFtZSBwOVwiPnt7IG5hbWUgfX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrc1wiPlxyXG5cdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IHdlZWsgb2Ygd2Vla3NcIiBjbGFzcz1cIndlZWtcIj5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrLWRhdGUgZGlzYWJsZWRcIiAqbmdJZj1cIiFpc1NlbGVjdGVkTW9udGgoZGF5LmRhdGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2Vlay1kYXRlIGVuYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzU2VsZWN0ZWRNb250aChkYXkuZGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcblx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJzZWxlY3REYXRlKCRldmVudCwgZGF5KVwiXHJcblx0XHRcdFx0XHRcdCAgIFtjbGFzcy50b2RheV09XCJkYXkudG9kYXlcIlxyXG5cdFx0XHRcdFx0XHQgICBbY2xhc3Muc2VsZWN0ZWRdPVwiZGF5LnNlbGVjdGVkXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5wb3BwZXI6aG92ZXIgLmZhLWNhbGVuZGFye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICAuY2FsZW5kYXItYm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhci1ib3ggZGF0ZSB7ZmxleDogMTt9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCAucG9wcGVyIHtjdXJzb3I6IHBvaW50ZXI7ZmxleDogMCAwIDE1cHh9XHJcbiAgICAgICAgLmNhbGVuZGFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAqIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5jYWxlbmRhci1uYXZzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiBidXR0b24sXHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IGJ1dHRvbjpob3ZlcixcclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAuZGF5LW5hbWVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWtzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZXMge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICNkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGxpbmVhciwgY29sb3IgMTUwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5kaXNhYmxlZCB7Y29sb3I6ICNhYWE7fVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmhvdmVyIC5kYXRlLXRleHQsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1cyAuZGF0ZS10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmhvdmVyOjphZnRlcixcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnNlbGVjdGVkIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5zZWxlY3RlZDo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUudG9kYXk6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGl0ZW06IGFueTtcclxuICBzaG93Q2FsZW5kYXIgPSBmYWxzZTtcclxuICBmb3JtYXR0aW5nOnN0cmluZztcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gIG9yaWdEYXRlOiBEYXRlO1xyXG4gIGN1cnJlbnREYXRlOiBEYXRlO1xyXG4gIGRheU5hbWVzID0gWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ107XHJcbiAgd2Vla3M6IENhbGVuZGFyRGF0ZVtdW10gPSBbXTtcclxuICBzZWxlY3RlZERheXM6IERhdGVbXSA9IFtdO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcblxyXG4gIGtleXVwKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvcGRhdGVwaWNrZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNob3dDYWxlbmRhciA9ICF0aGlzLnNob3dDYWxlbmRhcjtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy5vcmlnRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgc291cmNlLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChuZXcgRGF0ZShpdGVtKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2gobmV3IERhdGUodGhpcy5zb3VyY2UpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbSA9IGRhdGE7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICAgIHRoaXMuZm9ybWF0dGluZz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkRGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlOiBEYXRlID0gdGhpcy5zZWxlY3RlZERheXNbaV07XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1NhbWVEYXkoZGF0ZSwgc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIHJldHVybiBpbmRleCA+IC0xO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZE1vbnRoKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuY3VycmVudERhdGUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0ZWREYXRlcyhkYXk6IENhbGVuZGFyRGF0ZSkge1xyXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMubXVsdGlzZWxlY3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWREYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSB0aGlzLnNlbGVjdGVkRGF5c1tpXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTYW1lRGF5KGRheS5kYXRlLCBkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkYXkuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZighZm91bmQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKGRheS5kYXRlKTtcclxuICAgICAgICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzID0gW2RheS5kYXRlXTtcclxuICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdERhdGUoZXZlbnQsIGRheTogQ2FsZW5kYXJEYXRlKTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5vcmlnRGF0ZSA9IGRheS5kYXRlO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRheS5kYXRlO1xyXG4gICAgdGhpcy50b2dnbGVTZWxlY3RlZERhdGVzKCBkYXkgKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF5cy5zb3J0KCAoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBhID4gYiA/IC0xIDogMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkRGF5cyxcclxuICAgICAgICBpdGVtOiB0aGlzLml0ZW1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaG93Q2FsZW5kYXIgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWN0aW9ucyBmcm9tIGNhbGVuZGFyXHJcbiAgcHJldk1vbnRoKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCktMSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBuZXh0TW9udGgoZXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSsxLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIHByZXZZZWFyKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKS0xLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBuZXh0WWVhcihldmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkrMSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCksIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB0aGUgY2FsZW5kYXIgZ3JpZFxyXG4gICAgZ2VuZXJhdGVDYWxlbmRhcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZmlsbERhdGVzKHRoaXMuY3VycmVudERhdGUpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtzOiBDYWxlbmRhckRhdGVbXVtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3ZWVrcy5wdXNoKGRhdGVzLnNwbGljZSgwLCA3KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2Vla3MgPSB3ZWVrcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTYW1lRGF5KGE6IERhdGUsIGI6IERhdGUpIHtcclxuICAgICAgICByZXR1cm4gYS5nZXRGdWxsWWVhcigpID09PSBiLmdldEZ1bGxZZWFyKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpICYmIFxyXG4gICAgICAgICAgICBhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2FtZU1vbnRoKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5nZXRZZWFyKCkgPT09IGIuZ2V0WWVhcigpICYmIFxyXG4gICAgICAgICAgICBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsRGF0ZXMoY3VycmVudERhdGU6IERhdGUpOiBDYWxlbmRhckRhdGVbXSB7XHJcbiAgICAgICAgY29uc3QgY20gPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdG0gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoY20uZ2V0RnVsbFllYXIoKSwgY20uZ2V0TW9udGgoKSwgMSlcclxuICAgICAgICBjb25zdCBmaXJzdE9mTW9udGggPSBmaXJzdERheS5nZXREYXkoKTtcclxuICAgICAgICBjb25zdCBmaXJzdERheU9mR3JpZCA9IG5ldyBEYXRlKGZpcnN0RGF5LmdldEZ1bGxZZWFyKCksIGZpcnN0RGF5LmdldE1vbnRoKCksIGZpcnN0RGF5LmdldERhdGUoKSAtIGZpcnN0T2ZNb250aCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaXJzdERheU9mR3JpZC5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaTwgKHN0YXJ0ICsgNDIpO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShmaXJzdERheU9mR3JpZC5nZXRGdWxsWWVhcigpLCBmaXJzdERheU9mR3JpZC5nZXRNb250aCgpLCBpKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRvZGF5OiB0aGlzLmlzU2FtZURheSh0bSwgZCksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5pc1NlbGVjdGVkKGQpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsYXN0dXBkYXRlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJzaG93SWNvblwiIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXREYXRlKClcIj48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OiB0YWJsZTtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAgICAgLmZhIHttYXJnaW46MCA1cHggMCAwfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93SWNvbjogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb3VudDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbiA9IChhcmdzICYmIGFyZ3MubGVuZ3RoICYmIGFyZ3NbMF0gPT09ICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZSgpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdGNvbnN0IG1pbnV0ZSA9IDYwMDAwOy8vIG9uZSBtaW51dGVcclxuXHRcdGNvbnN0IGhvdXIgPSAzNjAwMDAwOy8vIG9uZSBob3VyIGxpbWl0XHJcblx0XHRjb25zdCBkYXkgPSA4NjQwMDAwMDsvLyAyNCBob3VycyBsaW1pdFxyXG5cdFx0Y29uc3Qgd2VlayA9IDYwNDgwMDAwMDsvLyA3IGRheXMgbGltaXRcclxuXHRcdGNvbnN0IG1vbnRoID0gNjA0ODAwMDAwKjQ7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRjb25zdCB5ZWFyID0gNjA0ODAwMDAwKjUyOy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0bGV0IHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0bGV0IGRpZmYgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLSB0aGlzLnNvdXJjZS5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYoZGlmZiA8PSBtaW51dGUpIHsvLyB1cCB0byBhIG1pbnV0ZVxyXG5cdFx0XHRyZXN1bHQgPSBcInNlY29uZHMgYWdvXCI7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IGhvdXIpIHsvLyB1cCB0byBhbiBob3VyXHJcblx0XHRcdGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmL21pbnV0ZSk7XHJcblx0XHRcdGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAtIChtaW51dGVzICogbWludXRlKSkvMTAwMCk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAobWludXRlcyA8IDIgPyBcImEgbWludXRlXCIgOiBtaW51dGVzICsgXCIgbWludXRlcyBcIikgKyAoc2Vjb25kcyA+IDAgPyBcIiBhbmQgXCIgKyBzZWNvbmRzICsgXCIgc2Vjb25kcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gZGF5KSB7Ly8gdXAgdG8gYSBkYXlcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcihkaWZmL2hvdXIpO1xyXG5cdFx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoaG91cnMgKiBob3VyKSkvbWludXRlKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdCA9IChob3VycyA8IDIgPyBcImFuIGhvdXJcIiA6IGhvdXJzICsgXCIgaG91cnMgXCIpICsgKG1pbnV0ZXMgPiAwID8gXCIgYW5kIFwiICsgbWludXRlcyArIFwiIG1pbnV0ZXMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IHdlZWspIHsvLyB1cCB0byBhIHdlZWtcclxuXHRcdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKGRpZmYvZGF5KTtcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAtIChkYXlzICogZGF5KSkvaG91cik7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAoZGF5cyA8IDIgPyBcImEgZGF5XCIgOiBkYXlzICsgXCIgZGF5cyBcIikgKyAoaG91cnMgPiAwID8gXCIgYW5kIFwiICsgaG91cnMgKyBcIiBob3VycyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gbW9udGgpIHsvLyB1cCB0byBhIG1vbnRoXHJcblx0XHRcdGxldCB3ZWVrcyA9IE1hdGguZmxvb3IoZGlmZi93ZWVrKTtcclxuXHRcdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKChkaWZmIC0gKHdlZWtzICogd2VlaykpL2RheSk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAod2Vla3MgPCAyID8gXCJhIHdlZWtcIiA6IHdlZWtzICsgXCIgd2Vla3MgXCIpICsgKGRheXMgPiAwID8gXCIgYW5kIFwiICsgZGF5cyArIFwiIGRheXMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IHllYXIpIHsvLyB1cCB0byBhIHdlZWtcclxuXHRcdFx0bGV0IG1vbnRocyA9IE1hdGguZmxvb3IoZGlmZi9tb250aCk7XHJcblx0XHRcdGxldCB3ZWVrcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAobW9udGhzICogbW9udGgpKS93ZWVrKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChtb250aHMgPCAyID8gXCJhIG1vbnRoXCIgOiBtb250aHMgKyBcIiBtb250aHMgXCIpICsgKHdlZWtzID4gMCA/IFwiIGFuZCBcIiArIHdlZWtzICsgXCIgd2Vla3MgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgeWVhcnMgPSBNYXRoLmZsb29yKGRpZmYveWVhcik7XHJcblx0XHRcdGxldCBtb250aHMgPSBNYXRoLmZsb29yKChkaWZmIC0gKHllYXJzICogeWVhcikpL21vbnRoKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9ICh5ZWFycyA8IDIgPyBcImEgeWVhclwiIDogeWVhcnMgKyBcIiB5ZWFycyBcIikgKyAobW9udGhzID4gMCA/IFwiIGFuZCBcIiArIG1vbnRocyArIFwiIG1vbnRocyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50LCBQaXBlU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWdyb3VwLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1pdGVtXCIgKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiIFxyXG4gICAgICAgICAgICBbaWRdPVwibmFtZSArIGlcIiBcclxuICAgICAgICAgICAgW25hbWVdPVwibmFtZSArICh0eXBlID09PSAncmFkaW8nID8gJycgOiBpKVwiIFxyXG4gICAgICAgICAgICBbdmFsdWVdPVwieC52YWx1ZSA/IHgudmFsdWUgOiB4XCIgXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cImlzU2VsZWN0ZWQoeClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiLz5cclxuICAgICAgICA8bGFiZWwgW2Zvcl09XCJuYW1lICsgaVwiIFt0ZXh0Q29udGVudF09XCJ4LmxhYmVsID8geC5sYWJlbCA6IHhcIj48L2xhYmVsPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IGFueTtcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHNlcnZpY2U6IFBpcGVTZXJ2aWNlQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAgY2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5zb3VyY2UuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBpZiAoaSA8IDApIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3BsaWNlKGksMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuICBpc1NlbGVjdGVkKGl0ZW0pIHtcclxuICAgIGNvbnN0IHhpdGVtID0gaXRlbS52YWx1ZSA/IGl0ZW0udmFsdWUgOiBpdGVtO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICByZXR1cm4geGl0ZW0gPT09IHRoaXMuc291cmNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLnNvdXJjZS5tYXAoKHgpID0+IHtcclxuICAgICAgaWYgKHhpdGVtID09PSB4KSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3VuZDtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZvcih0aGlzLm5hbWUsIHRoaXMuaWQsIGRhdGEpO1xyXG4gICAgdGhpcy50eXBlID0gKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xyXG4gIH1cclxufVxyXG5cclxuIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFkZHJlc3NDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2FkZHJlc3MuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9lbWFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvbmVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Bob25lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb250LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy92aWRlby5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvanNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yYXRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3BhbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3Bhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaWtlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saWtlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IExhc3RVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xhc3R1cGRhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0R3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0LWdyb3VwLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb29sIHtcblx0cHJpdmF0ZSByZWdpc3RlcmVkQ29tcG9uZW50cz0ge307XG5cdHByaXZhdGUgcmVnaXN0ZXJlZFNlcnZpY2VzPSB7fTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwic3BhblwiLCBTcGFuQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiYWRkcmVzc1wiLCBBZGRyZXNzQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiZW1haWxcIiwgRW1haWxDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJwaG9uZVwiLCBQaG9uZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImZvbnRcIiwgRm9udENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImltYWdlXCIsIEltYWdlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwidmlkZW9cIiwgVmlkZW9Db21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJqc29uXCIsIEpzb25Db21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJsaW5rXCIsIExpbmtDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJyYXRpbmdcIiwgUmF0aW5nQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiaW5wdXRcIiwgSW5wdXRDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJjaGVja2JveFwiLCBDaGVja2JveENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInNlbGVjdFwiLCBTZWxlY3RDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJzaGFyZVwiLCBTaGFyZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImxpa2VcIiwgTGlrZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImxhc3R1cGRhdGVcIiwgTGFzdFVwZGF0ZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImNhbGVuZGFyXCIsIENhbGVuZGFyQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiaW5wdXRncm91cFwiLCBJbnB1dEdyb3VwQ29tcG9uZW50KTtcblx0fVxuICBcblx0cmVnaXN0ZXJDb21wb25lbnQgKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXHR9XG5cdHJlbW92ZUNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV07XG5cdH1cblx0cmVnaXN0ZXJlZENvbXBvbmVudChuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0fVxuXG5cdHJlZ2lzdGVyU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXSA9IHNlcnZpY2U7XG5cdH1cblx0cmVtb3ZlU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG5cdHJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG59IiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgRGF0ZVBpcGUsXHJcbiAgICBDdXJyZW5jeVBpcGUsXHJcbiAgICBEZWNpbWFsUGlwZSxcclxuICAgIFNsaWNlUGlwZSxcclxuICAgIFVwcGVyQ2FzZVBpcGUsXHJcbiAgICBMb3dlckNhc2VQaXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7UHJlcGVuZFBpcGV9IGZyb20gJy4uL3BpcGVzL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7QXBwZW5kUGlwZX0gZnJvbSAnLi4vcGlwZXMvYXBwZW5kLnBpcGUnO1xyXG5pbXBvcnQge1dyYXBQaXBlfSBmcm9tICcuLi9waXBlcy93cmFwLnBpcGUnO1xyXG5pbXBvcnQge01hcFBpcGV9IGZyb20gJy4uL3BpcGVzL21hcC5waXBlJztcclxuaW1wb3J0IHtNYXNrUGlwZX0gZnJvbSAnLi4vcGlwZXMvbWFzay5waXBlJztcclxuaW1wb3J0IHtWYWx1ZU9mUGlwZX0gZnJvbSAnLi4vcGlwZXMvdmFsdWVvZi5waXBlJztcclxuaW1wb3J0IHtDb25kaXRpb25hbFBpcGV9IGZyb20gJy4uL3BpcGVzL2NvbmRpdGlvbmFsLnBpcGUnO1xyXG5pbXBvcnQge0pvaW5QaXBlfSBmcm9tICcuLi9waXBlcy9qb2luLnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vaW5qZWN0YWJsZXMvY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tpbnRvXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEludG9EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJyYXdDb250ZW50XCIpXHJcbiAgICByYXdDb250ZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9JZFwiKVxyXG4gICAgaW50b0lkOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9OYW1lXCIpXHJcbiAgICBpbnRvTmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvRGF0YVwiKVxyXG4gICAgaW50b0RhdGE6IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b1wiKVxyXG4gICAgaW50bzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dChcIm9uQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgICBvbkNvbXBvbmVudENoYW5nZSA9IChldmVudCkgPT4ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHB1YmxpYyBlbDpFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCxcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF90cmFuc2Zvcm0oY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICBcclxuICAgICAgICBzd2l0Y2goYXJnc1swXSl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzbGljZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBzbGljZSA1OjEyIE9SIHNsaWNlIDVcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kPSBwYXJzZUludChhcmdzWzJdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZXIgPW5ldyBTbGljZVBpcGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVuZCA/IHNsaWNlci50cmFuc2Zvcm0oY29udGVudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIG51bWJlcjplbl9VUzoyICAgb3IgbnVtYmVyOmVuX1VTIG9yIG51bWJlclxyXG4gICAgICAgICAgICAgICAgbGV0IG51bUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bURlY2ltYWw9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1Mb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtRGVjaW1hbD0gYXJnc1syXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxlciA9bmV3IERlY2ltYWxQaXBlKG51bUxvY2FsKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bURlY2ltYWwgPyBkZWNpbWFsZXIudHJhbnNmb3JtKGNvbnRlbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY3VycmVuY3lcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gY3VycmVuY3k6ZW5fVVMgb3IgY3VycmVuY3lcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNwID0gbmV3IEN1cnJlbmN5UGlwZShhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJlbl9VU1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndyYXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gd3JhcDpzb21ldGhpbmc6c29tZXRoaW5nICBPUiB3cmFwOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFdyYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogYXJnc1sxXSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhcHBlbmRcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFwcGVuZFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJlcGVuZFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBwcmVwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFByZXBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1hcFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBtYXA6a2V5MTt2YWx1ZTEva2V5Mjt2YWx1ZTIva2V5Mzt2YWx1ZTNcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTWFwUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGVcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZTplbl9VUzpNTWRkeXkgT1IgZGF0ZTpcXFwiTU0vZGQveXl5eSBoaDpzc1xcXCJcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGUgPSAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpID8gbmV3IERhdGUoY29udGVudCkgOiBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGVMb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRlRm9ybWF0PSBhcmdzWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVMb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD0gYXJnc1syXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVyID1uZXcgRGF0ZVBpcGUoZGF0ZUxvY2FsKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRhdGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkYXRlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVwcGVyY2FzZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyB1cHBlcmNhc2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVjcCA9ICBuZXcgVXBwZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdWNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh1Y3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb3dlcmNhc2VcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gbG93ZXJjYXNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsY3AgPSAgbmV3IExvd2VyQ2FzZVBpcGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFza1wiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBtYXNrOjQ6KiAgT1IgbWFzazo0XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIHBhcnNlSW50KGFyZ3NbMV0sIDEwKSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmFsdWVvZlwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZW9mOmtleVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWYWx1ZU9mUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlmXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGlmOj06dHJ1ZTpmYSBmYS1jaGVjazpmYSBmYS1iZWxsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY29uZGl0aW9uID0gIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbHRBY3Rpb24gPSAgYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgQ29uZGl0aW9uYWxQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICdcIicgPyByZXN1bHQuc3Vic3RyaW5nKDEscmVzdWx0Lmxlbmd0aC0xKSA6IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNwbGl0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKGNvbnRlbnQsIHJlc3VsdCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImpvaW5cIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8ganNvblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEpvaW5QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwianNvblwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBqc29uXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImpzb25cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsIGRhdGEsIFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZm9udFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBmb250OmZhIGZhLWNoZWNrOmxlZnQ6KlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJmb250XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbWFpbFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBlbWFpbFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJlbWFpbFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGhvbmVcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwicGhvbmVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTsgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwicGhvbmVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInBob25lXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgZmFsc2UsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZHJlc3NcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJhZGRyZXNzXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYXRpbmdcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gcmF0aW5nXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInJhdGluZ1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGFyZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBzaGFyZVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzaGFyZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIFwibGlrZVwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaWtlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlrZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSBcImxhc3R1cGRhdGVcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGFzdHVwZGF0ZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxhc3R1cGRhdGVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlucHV0Z3JvdXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW5wdXRncm91cFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0Z3JvdXBcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcInJhZGlvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW5rXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHQgb3IgbGluazp0ZXh0IG9yIGxpbmtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxpbmtcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaW5rXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlua1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDpwbGFjZWhvbGRlcjpwaXBlXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDppZGVhbDp1c2VGb250XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImNoZWNrYm94XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbWFnZToyMDBweDphdXRvOmFsdHRleHQgT1IgaW1hZ2U6MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgaW1hZ2U6MjAwcHggT1IgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW1hZ2VcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJpbWFnZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZpZGVvXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIHZpZGVvOjIwMHB4OmF1dG86YWx0dGV4dCBPUiB2aWRlbzoyMDBweDphbHRlcm5hdGUtdGV4dCBPUiB2aWRlbzoyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJ2aWRlb1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInZpZGVvXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gdW5rbm93biBmb3JtYXR0ZXJcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRvSWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9OYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA1ID8gYXJnc1s1XSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1Db21wb25lbnQodHlwZSwgY29udGVudDogYW55LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJib29sZWFuXCIgfHwgT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdcIiArIHR5cGUrIFwiJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRyYW5zZm9ybShjb250ZW50LnNvdXJjZSA/IGNvbnRlbnQuc291cmNlIDogY29udGVudCwgZGF0YSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZSAmJiB0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcImJvb2xlYW5cIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb250ZW50KS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ggPSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN4ID09PSBudWxsIHx8IHN4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ1wiICsgdHlwZSsgXCInIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5pZCA9IGlkICsgJy0nICsgKGNvdW50ZXIrKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC50cmFuc2Zvcm0oc291cmNlLnNvdXJjZSA/IHNvdXJjZS5zb3VyY2UgOiBzb3VyY2UsIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3gub25JbnRvQ29tcG9uZW50Q2hhbmdlICYmIHRoaXMub25Db21wb25lbnRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudEZvcihuYW1lKTogUGlwZUNvbXBvbmVudCB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRDb21wb25lbnQobmFtZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogUGlwZUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSB0aGlzLnZpZXdSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gICAgICAgICAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWYgPCBhbnkgPiApLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAoPFBpcGVDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmludG8gfHwgdGhpcy5yYXdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9ICB0aGlzLnJhd0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50by5zcGxpdChcInxcIikubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShyZXN1bHQsIHRoaXMuc3BsaXQoaXRlbSksIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIikudHJhbnNmb3JtKHJlc3VsdCwgW10sIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IoXCJzcGFuXCIpLnRyYW5zZm9ybShzb3VyY2UsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlLCBDdXJyZW5jeVBpcGUsIERlY2ltYWxQaXBlLCBKc29uUGlwZSwgU2xpY2VQaXBlLCBVcHBlckNhc2VQaXBlLCBMb3dlckNhc2VQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEluVG9QaXBlIH0gZnJvbSAnLi9waXBlcy9pbnRvLnBpcGUnO1xyXG5pbXBvcnQge01hc2tQaXBlfSBmcm9tICcuL3BpcGVzL21hc2sucGlwZSc7XHJcbmltcG9ydCB7TWFwUGlwZX0gZnJvbSAnLi9waXBlcy9tYXAucGlwZSc7XHJcbmltcG9ydCB7TGlua1BpcGV9IGZyb20gJy4vcGlwZXMvbGluay5waXBlJztcclxuaW1wb3J0IHtJbWFnZVBpcGV9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7VmlkZW9QaXBlfSBmcm9tICcuL3BpcGVzL3ZpZGVvLnBpcGUnO1xyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuL3BpcGVzL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7Sm9pblBpcGV9IGZyb20gJy4vcGlwZXMvam9pbi5waXBlJztcclxuaW1wb3J0IHtBcHBlbmRQaXBlfSBmcm9tICcuL3BpcGVzL2FwcGVuZC5waXBlJztcclxuaW1wb3J0IHtXcmFwUGlwZX0gZnJvbSAnLi9waXBlcy93cmFwLnBpcGUnO1xyXG5pbXBvcnQge0VtYWlsUGlwZX0gZnJvbSAnLi9waXBlcy9lbWFpbC5waXBlJztcclxuaW1wb3J0IHtSYXRpbmdQaXBlfSBmcm9tICcuL3BpcGVzL3JhdGluZy5waXBlJztcclxuaW1wb3J0IHtBZGRyZXNzUGlwZX0gZnJvbSAnLi9waXBlcy9hZGRyZXNzLnBpcGUnO1xyXG5pbXBvcnQge0ZvbnRQaXBlfSBmcm9tICcuL3BpcGVzL2ZvbnQucGlwZSc7XHJcbmltcG9ydCB7VmFsdWVPZlBpcGV9IGZyb20gJy4vcGlwZXMvdmFsdWVvZi5waXBlJztcclxuaW1wb3J0IHtDb25kaXRpb25hbFBpcGV9IGZyb20gJy4vcGlwZXMvY29uZGl0aW9uYWwucGlwZSc7XHJcbmltcG9ydCB7U2FuaXRpemVIdG1sUGlwZX0gZnJvbSAnLi9waXBlcy9zYW5pdGl6ZUh0bWwucGlwZSc7XHJcblxyXG5pbXBvcnQge0ludG9EaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9pbnRvLmRpcmVjdGl2ZSdcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vaW5qZWN0YWJsZXMvY29tcG9uZW50LnBvb2wnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTcGFuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NwYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hZGRyZXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBob25lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Bob25lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9udC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy92aWRlby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKc29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2pzb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpa2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlrZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXN0VXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xhc3R1cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JhdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NoYXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBZGRyZXNzQ29tcG9uZW50LFxyXG4gICAgRW1haWxDb21wb25lbnQsXHJcbiAgICBQaG9uZUNvbXBvbmVudCxcclxuICAgIEZvbnRDb21wb25lbnQsXHJcbiAgICBJbWFnZUNvbXBvbmVudCxcclxuICAgIFZpZGVvQ29tcG9uZW50LFxyXG4gICAgSnNvbkNvbXBvbmVudCxcclxuICAgIExpbmtDb21wb25lbnQsXHJcbiAgICBSYXRpbmdDb21wb25lbnQsXHJcbiAgICBJbnB1dENvbXBvbmVudCxcclxuICAgIENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgU3BhbkNvbXBvbmVudCxcclxuICAgIFNoYXJlQ29tcG9uZW50LFxyXG4gICAgTGlrZUNvbXBvbmVudCxcclxuICAgIENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTGFzdFVwZGF0ZUNvbXBvbmVudCxcclxuICAgIElucHV0R3JvdXBDb21wb25lbnQsXHJcbiAgICBKb2luUGlwZSxcclxuICAgIEluVG9QaXBlLFxyXG4gICAgSW1hZ2VQaXBlLFxyXG4gICAgVmlkZW9QaXBlLFxyXG4gICAgTGlua1BpcGUsXHJcbiAgICBNYXNrUGlwZSxcclxuICAgIE1hcFBpcGUsXHJcbiAgICBQcmVwZW5kUGlwZSxcclxuICAgIEFwcGVuZFBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIFZhbHVlT2ZQaXBlLFxyXG4gICAgRW1haWxQaXBlLFxyXG4gICAgUmF0aW5nUGlwZSxcclxuICAgIEZvbnRQaXBlLFxyXG4gICAgQ29uZGl0aW9uYWxQaXBlLFxyXG4gICAgQWRkcmVzc1BpcGUsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgSW50b0RpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgSm9pblBpcGUsXHJcbiAgICBJblRvUGlwZSxcclxuICAgIEltYWdlUGlwZSxcclxuICAgIFZpZGVvUGlwZSxcclxuICAgIExpbmtQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgV3JhcFBpcGUsXHJcbiAgICBWYWx1ZU9mUGlwZSxcclxuICAgIEVtYWlsUGlwZSxcclxuICAgIFJhdGluZ1BpcGUsXHJcbiAgICBGb250UGlwZSxcclxuICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgIEFkZHJlc3NQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIEludG9EaXJlY3RpdmUsXHJcbiAgICBBZGRyZXNzQ29tcG9uZW50LFxyXG4gICAgRW1haWxDb21wb25lbnQsXHJcbiAgICBQaG9uZUNvbXBvbmVudCxcclxuICAgIEZvbnRDb21wb25lbnQsXHJcbiAgICBJbWFnZUNvbXBvbmVudCxcclxuICAgIFZpZGVvQ29tcG9uZW50LFxyXG4gICAgSnNvbkNvbXBvbmVudCxcclxuICAgIExpbmtDb21wb25lbnQsXHJcbiAgICBJbnB1dENvbXBvbmVudCxcclxuICAgIENoZWNrYm94Q29tcG9uZW50LFxyXG4gICAgUmF0aW5nQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgU3BhbkNvbXBvbmVudCxcclxuICAgIFNoYXJlQ29tcG9uZW50LFxyXG4gICAgTGlrZUNvbXBvbmVudCxcclxuICAgIENhbGVuZGFyQ29tcG9uZW50LFxyXG4gICAgTGFzdFVwZGF0ZUNvbXBvbmVudCxcclxuICAgIElucHV0R3JvdXBDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgQWRkcmVzc0NvbXBvbmVudCxcclxuICAgIEVtYWlsQ29tcG9uZW50LFxyXG4gICAgUGhvbmVDb21wb25lbnQsXHJcbiAgICBGb250Q29tcG9uZW50LFxyXG4gICAgSW1hZ2VDb21wb25lbnQsXHJcbiAgICBWaWRlb0NvbXBvbmVudCxcclxuICAgIEpzb25Db21wb25lbnQsXHJcbiAgICBMaW5rQ29tcG9uZW50LFxyXG4gICAgSW5wdXRDb21wb25lbnQsXHJcbiAgICBDaGVja2JveENvbXBvbmVudCxcclxuICAgIFJhdGluZ0NvbXBvbmVudCxcclxuICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgIFNwYW5Db21wb25lbnQsXHJcbiAgICBTaGFyZUNvbXBvbmVudCxcclxuICAgIExpa2VDb21wb25lbnQsXHJcbiAgICBDYWxlbmRhckNvbXBvbmVudCxcclxuICAgIExhc3RVcGRhdGVDb21wb25lbnQsXHJcbiAgICBJbnB1dEdyb3VwQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEpvaW5QaXBlLFxyXG4gICAgSW5Ub1BpcGUsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIEN1cnJlbmN5UGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gICAgSnNvblBpcGUsXHJcbiAgICBTbGljZVBpcGUsXHJcbiAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgTG93ZXJDYXNlUGlwZSxcclxuICAgIEltYWdlUGlwZSxcclxuICAgIFZpZGVvUGlwZSxcclxuICAgIExpbmtQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgRW1haWxQaXBlLFxyXG4gICAgUmF0aW5nUGlwZSxcclxuICAgIEFkZHJlc3NQaXBlLFxyXG4gICAgRm9udFBpcGUsXHJcbiAgICBDb25kaXRpb25hbFBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIFZhbHVlT2ZQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIENvbXBvbmVudFBvb2xcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEludG9QaXBlTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBOzs7Ozs7O0lBS0ksVUFBVSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUTs7UUFDcEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDOztRQUNqRSxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUs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QUFFLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FB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QUssT0FBTyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLGNBQWMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUMxSDthQUFLLElBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRTs7WUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXpELE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLEtBQUssR0FBRyxTQUFTLEtBQUssT0FBTyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLGNBQWMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUNuSDthQUFLLElBQUcsSUFBSSxJQUFJLElBQUksRUFBRTs7WUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFFLElBQUksQ0FBQyxDQUFDO1lBRW5ELE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxRQUFRLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQztTQUN4RzthQUFLLElBQUcsSUFBSSxJQUFJLEtBQUssRUFBRTs7WUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUks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