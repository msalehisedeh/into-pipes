import { Pipe, Component, ViewChild, Renderer, Output, EventEmitter, Injectable, Directive, ViewContainerRef, ElementRef, Input, ComponentFactoryResolver, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MaskPipe {
    /**
     * @param {?} item
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    maskString(item, visibleDigits, maskWith) {
        const /** @type {?} */ maskedSection = item ? item.slice(0, -visibleDigits) : "";
        const /** @type {?} */ visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    }
    /**
     * @param {?} items
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    maskArray(items, visibleDigits, maskWith) {
        const /** @type {?} */ result = [];
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
        const /** @type {?} */ visibleDigits = (args && args.length) ? args[0] : 4;
        const /** @type {?} */ maskWith = args.length > 1 ? args[1] : '*';
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.maskString(source, visibleDigits, maskWith);
        }
        return this.maskArray(source, visibleDigits, maskWith);
    }
}
MaskPipe.decorators = [
    { type: Pipe, args: [{ name: 'mask' },] },
];
/** @nocollapse */
MaskPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MapPipe {
    /**
     * @param {?} list
     * @param {?} map
     * @return {?}
     */
    valuesFor(list, map) {
        const /** @type {?} */ result = [];
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
            const /** @type {?} */ map = {};
            mapping.split('/').map((key) => {
                const /** @type {?} */ x = key.split(';');
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
        const /** @type {?} */ map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    }
}
MapPipe.decorators = [
    { type: Pipe, args: [{ name: 'map' },] },
];
/** @nocollapse */
MapPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ result = [];
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
    { type: Pipe, args: [{ name: 'valueof' },] },
];
/** @nocollapse */
ValueOfPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            const /** @type {?} */ q = source.indexOf("?");
            const /** @type {?} */ t = q < 0 ? source : source.substring(0, q);
            const /** @type {?} */ d = t.lastIndexOf("/");
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
        const /** @type {?} */ result = [];
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
        const /** @type {?} */ target = (args && args.length) ? args[0] : "";
        const /** @type {?} */ title = (args && args.length > 1) ? args[1] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
    }
}
LinkPipe.decorators = [
    { type: Pipe, args: [{ name: 'link' },] },
];
/** @nocollapse */
LinkPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            const /** @type {?} */ q = source.indexOf("?");
            const /** @type {?} */ t = q < 0 ? source : source.substring(0, q);
            const /** @type {?} */ d = t.lastIndexOf("/");
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
        const /** @type {?} */ result = [];
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
        const /** @type {?} */ width = (args && args.length) ? "width: " + args[0] + ";" : "";
        const /** @type {?} */ height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        const /** @type {?} */ alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");
    }
}
ImagePipe.decorators = [
    { type: Pipe, args: [{ name: 'image' },] },
];
/** @nocollapse */
ImagePipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            const /** @type {?} */ q = source.indexOf("?");
            const /** @type {?} */ t = q < 0 ? source : source.substring(0, q);
            const /** @type {?} */ d = t.lastIndexOf("/");
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
        const /** @type {?} */ result = [];
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
        const /** @type {?} */ width = (args && args.length) ? "width: " + args[0] + ";" : "";
        const /** @type {?} */ height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        const /** @type {?} */ alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToVideo(source, width, height, alt);
        }
        return this.arrayToVideo(source, width, height, "");
    }
}
VideoPipe.decorators = [
    { type: Pipe, args: [{ name: 'video' },] },
];
/** @nocollapse */
VideoPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PrependPipe {
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        const /** @type {?} */ key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return key + source;
        }
        else {
            const /** @type {?} */ result = [];
            source.map((item) => {
                result.push(key + item);
            });
            return result;
        }
    }
}
PrependPipe.decorators = [
    { type: Pipe, args: [{ name: 'prepend' },] },
];
/** @nocollapse */
PrependPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppendPipe {
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        const /** @type {?} */ key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        }
        else {
            const /** @type {?} */ result = [];
            source.map((item) => {
                result.push(item + key);
            });
            return result;
        }
    }
}
AppendPipe.decorators = [
    { type: Pipe, args: [{ name: 'append' },] },
];
/** @nocollapse */
AppendPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WrapPipe {
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        const /** @type {?} */ pre = (args && args.length) ? args[0] : "";
        const /** @type {?} */ post = pre.length ?
            (args.length > 1 ? args[1] : "") : pre;
        const /** @type {?} */ key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        }
        else {
            const /** @type {?} */ result = [];
            source.map((item) => {
                result.push(pre + item + post);
            });
            return result;
        }
    }
}
WrapPipe.decorators = [
    { type: Pipe, args: [{ name: 'wrap' },] },
];
/** @nocollapse */
WrapPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            const /** @type {?} */ result = [];
            source.map((item) => {
                result.push(this.emailFromString(item));
            });
            return result;
        }
    }
}
EmailPipe.decorators = [
    { type: Pipe, args: [{ name: 'email' },] },
];
/** @nocollapse */
EmailPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RatingPipe {
    /**
     * @param {?} source
     * @return {?}
     */
    rateString(source) {
        const /** @type {?} */ value = parseInt(source, 10);
        const /** @type {?} */ float = parseFloat(source);
        let /** @type {?} */ x = "<span class='rating'>";
        for (let /** @type {?} */ i = 0; i < value; i++) {
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
            const /** @type {?} */ result = [];
            source.map((item) => {
                result.push(this.rateString(item));
            });
            return result;
        }
    }
}
RatingPipe.decorators = [
    { type: Pipe, args: [{ name: 'raiting' },] },
];
/** @nocollapse */
RatingPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AddressPipe {
    /**
     * @param {?} source
     * @return {?}
     */
    addressFromString(source) {
        let /** @type {?} */ url = "https://maps.google.com/?q=" +
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
            const /** @type {?} */ result = [];
            source.map((item) => {
                result.push(this.addressFromString(item));
            });
            return result;
        }
    }
}
AddressPipe.decorators = [
    { type: Pipe, args: [{ name: 'address' },] },
];
/** @nocollapse */
AddressPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            const /** @type {?} */ result = [];
            Object.keys(source).map((key) => {
                result.push(source[key]);
            });
            return result.join(args[0]);
        }
    }
}
JoinPipe.decorators = [
    { type: Pipe, args: [{ name: 'join' },] },
];
/** @nocollapse */
JoinPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ font = args.length ? "<span class=\'" + args[0] + "\' aria-hidden='true'></span>" : "";
        const /** @type {?} */ location = args.length > 1 ? args[1] : "";
        const /** @type {?} */ action = args.length > 2 ? args[2].toLowerCase() : "";
        const /** @type {?} */ content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        }
        else {
            const /** @type {?} */ result = [];
            source.map((item) => {
                result.push(this.fontFromString(font, location, action, item));
            });
            return result;
        }
    }
}
FontPipe.decorators = [
    { type: Pipe, args: [{ name: 'email' },] },
];
/** @nocollapse */
FontPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        let /** @type {?} */ result = "";
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
        const /** @type {?} */ acondition = args.length ? args[0] : "";
        const /** @type {?} */ value = args.length > 1 ? args[1] : "";
        const /** @type {?} */ action = args.length > 2 ? args[2] : "";
        const /** @type {?} */ altAction = args.length > 3 ? args[3] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        }
        else {
            const /** @type {?} */ result = {};
            source.map((item) => {
                result[item] = this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result;
        }
    }
}
ConditionalPipe.decorators = [
    { type: Pipe, args: [{ name: 'if' },] },
];
/** @nocollapse */
ConditionalPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InToPipe {
    /**
     * @param {?} content
     * @param {?} list
     * @return {?}
     */
    transform(content, list) {
        let /** @type {?} */ result = content;
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
        let /** @type {?} */ result = content;
        switch (args[0]) {
            case "slice":
                // slice 5:12 OR slice 5
                let /** @type {?} */ start = parseInt(args[1], 10);
                let /** @type {?} */ end = undefined;
                if (args.length > 2) {
                    end = parseInt(args[2], 10);
                }
                const /** @type {?} */ slicer = new SlicePipe();
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
                // number:en_US:2   or number:en_US or number
                let /** @type {?} */ numLocal = "en_US";
                let /** @type {?} */ numDecimal = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal = args[2];
                }
                const /** @type {?} */ decimaler = new DecimalPipe(numLocal);
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
                // if:=:true:fa fa-check:fa fa-bell
                const /** @type {?} */ acondition = args.length > 1 ? args[1] : "";
                const /** @type {?} */ value = args.length > 2 ? args[2] : "";
                const /** @type {?} */ action = args.length > 3 ? args[3] : "";
                const /** @type {?} */ altAction = args.length > 4 ? args[4] : "";
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
                // currency:en_US or currency
                const /** @type {?} */ cp = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
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
                // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
                
                let /** @type {?} */ dateLocal = "en_US";
                let /** @type {?} */ dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                const /** @type {?} */ dater = new DatePipe(dateLocal);
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
                // json
                const /** @type {?} */ jcp = new JsonPipe();
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
                // uppercase
                const /** @type {?} */ ucp = new UpperCasePipe();
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
                // lowercase
                const /** @type {?} */ lcp = new LowerCasePipe();
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
    { type: Pipe, args: [{ name: 'into' },] },
];
/** @nocollapse */
InToPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
SanitizeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
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
                styles: [
                    `.address {
            display: inline-block;
            float: left;
        }
        .google-map {
            display: inline-block;
            float: left;
        }
        .fa {
            color: #f00;
            margin: 0 3px;
        }
        .off-screen {
            position: absolute;
            left: -999em;
        }
        `
                ]
            },] },
];
/** @nocollapse */
AddressComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                styles: [
                    ``
                ]
            },] },
];
/** @nocollapse */
EmailComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ action = args.length > 2 ? args[2].toLowerCase() : "";
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
                styles: [
                    `span span {
            float: left;
        }
        `
                ]
            },] },
];
/** @nocollapse */
FontComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                const /** @type {?} */ q = source.indexOf("?");
                const /** @type {?} */ t = q < 0 ? source : source.substring(0, q);
                const /** @type {?} */ d = t.lastIndexOf("/");
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
            },] },
];
/** @nocollapse */
ImageComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                const /** @type {?} */ q = source.indexOf("?");
                const /** @type {?} */ t = q < 0 ? source : source.substring(0, q);
                const /** @type {?} */ d = t.lastIndexOf("/");
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
            },] },
];
/** @nocollapse */
VideoComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                styles: [
                    `.json-view {
            display: inline-block;
            float: left;
            font-family: monospace;
            padding: 5px;
            white-space: pre-wrap;
            unicode-bidi: embed;
        }
        `
                ]
            },] },
];
/** @nocollapse */
JsonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            const /** @type {?} */ q = source.indexOf("?");
            const /** @type {?} */ t = q < 0 ? source : source.substring(0, q);
            const /** @type {?} */ d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d + 1);
        }
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'link-component',
                template: `<a [href]="source" [target]="target" [textContent]="title"></a>`,
                styles: [
                    `
        `
                ]
            },] },
];
/** @nocollapse */
LinkComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ size = parseInt(source, 10);
        for (let /** @type {?} */ i = 0; i < size; i++) {
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
                styles: [
                    `.rating {
            display: inline-block;
        }
        `
                ]
            },] },
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ code = event.which;
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
                    value: this.source
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
                value: this.source
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydown(event) {
        const /** @type {?} */ code = event.which;
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
                styles: [
                    `
        .locked {
          display: inline-block;
          cursor: pointer;
          min-width: 30px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        input {
          cursor: beam;
        }
        `
                ]
            },] },
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: Renderer, },
];
InputComponent.propDecorators = {
    "nameEditor": [{ type: ViewChild, args: ["nameEditor",] },],
    "nameHolder": [{ type: ViewChild, args: ["nameHolder",] },],
    "onIntoComponentChange": [{ type: Output, args: ["onIntoComponentChange",] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ code = event.which;
        if (code === 13) {
            this.renderer.invokeElementMethod(event.target, "click");
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        const /** @type {?} */ input = event.target;
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
            value: this.source
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
                styles: [
                    `
        .check-font {
          cursor: pointer;
        }
        `
                ]
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: Renderer, },
];
CheckboxComponent.propDecorators = {
    "check": [{ type: ViewChild, args: ["check",] },],
    "uncheck": [{ type: ViewChild, args: ["uncheck",] },],
    "onIntoComponentChange": [{ type: Output, args: ["onIntoComponentChange",] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectComponent {
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
    change(event) {
        this.source = event.target.value;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source
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
        this.options = this.service.getDataFor(this.name, this.id);
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-component',
                template: `
    <select tabindex="0" (change)="change($event)">
        <option *ngFor="let x of options" [selected]="source === x ? true : null"  [value]="x" [textContent]="x"></option>
    </select>
    `,
                styles: [
                    `
        `
                ]
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: Renderer, },
];
SelectComponent.propDecorators = {
    "onIntoComponentChange": [{ type: Output, args: ["onIntoComponentChange",] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                styles: [
                    `
        `
                ]
            },] },
];
/** @nocollapse */
SpanComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ code = event.which;
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
        const /** @type {?} */ list = (args[0] instanceof Array) ? args[0] : args;
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
    .share-item-tips {
        cursor: pointer;
    }
    .share-item-tips .fa {
        margin: 0;
    }
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
            },] },
];
/** @nocollapse */
ShareComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.item = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.item[this.key]) !== null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        const /** @type {?} */ code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    addItem(id) {
        const /** @type {?} */ saved = localStorage.getItem(this.thumbs);
        if (saved) {
            const /** @type {?} */ savedItems = JSON.parse(saved);
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
        const /** @type {?} */ saved = localStorage.getItem(this.thumbs);
        if (saved) {
            const /** @type {?} */ savedItems = JSON.parse(saved);
            const /** @type {?} */ i = savedItems.indexOf(id);
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
        const /** @type {?} */ saved = localStorage.getItem(this.thumbs);
        let /** @type {?} */ found = null;
        if (saved) {
            const /** @type {?} */ savedItems = JSON.parse(saved);
            const /** @type {?} */ i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    }
    /**
     * @return {?}
     */
    formatterSource() {
        let /** @type {?} */ result = this.source;
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
            const /** @type {?} */ existing = this.getItem(this.item[this.key]);
            if (!existing) {
                this.addItem(this.item[this.key]);
            }
        }
        else {
            this.removeItem(this.item[this.key]);
        }
        this.onIntoComponentChange.emit({
            item: this.item,
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
                styles: [
                    `
        :host {display: table;position: relative}
        .like {
            cursor: pointer;
        }
        .like .fa {
            margin: 0;
        }
        .like .fa.selected {
            color: green;
        }
        `
                ]
            },] },
];
/** @nocollapse */
LikeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ currentDate = new Date();
        const /** @type {?} */ minute = 60000; // one minute
        const /** @type {?} */ hour = 3600000; // one hour limit
        const /** @type {?} */ day = 86400000; // 24 hours limit
        const /** @type {?} */ week = 604800000; // 7 days limit
        const /** @type {?} */ month = 604800000 * 4; // 7 days limit
        const /** @type {?} */ year = 604800000 * 52; // 7 days limit
        let /** @type {?} */ result = "";
        let /** @type {?} */ diff = currentDate.getTime() - this.source.getTime();
        if (diff <= minute) {
            // up to a minute
            result = "seconds ago";
        }
        else if (diff <= hour) {
            // up to an hour
            let /** @type {?} */ minutes = Math.floor(diff / minute);
            let /** @type {?} */ seconds = Math.floor((diff - (minutes * minute)) / 1000);
            result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
        }
        else if (diff <= day) {
            // up to a day
            let /** @type {?} */ hours = Math.floor(diff / hour);
            let /** @type {?} */ minutes = Math.floor((diff - (hours * hour)) / minute);
            result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
        }
        else if (diff <= week) {
            // up to a week
            let /** @type {?} */ days = Math.floor(diff / day);
            let /** @type {?} */ hours = Math.floor((diff - (days * day)) / hour);
            result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
        }
        else if (diff <= month) {
            // up to a month
            let /** @type {?} */ weeks = Math.floor(diff / week);
            let /** @type {?} */ days = Math.floor((diff - (weeks * week)) / day);
            result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
        }
        else if (diff <= year) {
            // up to a week
            let /** @type {?} */ months = Math.floor(diff / month);
            let /** @type {?} */ weeks = Math.floor((diff - (months * month)) / week);
            result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
        }
        else {
            let /** @type {?} */ years = Math.floor(diff / year);
            let /** @type {?} */ months = Math.floor((diff - (years * year)) / month);
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
                styles: [
                    `
        :host {display: table;position: relative}
        .fa {margin:0 5px 0 0}
        `
                ]
            },] },
];
/** @nocollapse */
LastUpdateComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ComponentPool {
    constructor() {
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
    { type: Injectable },
];
/** @nocollapse */
ComponentPool.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        let /** @type {?} */ result = content;
        switch (args[0]) {
            case "slice":
                // slice 5:12 OR slice 5
                let /** @type {?} */ start = parseInt(args[1], 10);
                let /** @type {?} */ end = undefined;
                if (args.length > 2) {
                    end = parseInt(args[2], 10);
                }
                const /** @type {?} */ slicer = new SlicePipe();
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
                // number:en_US:2   or number:en_US or number
                let /** @type {?} */ numLocal = "en_US";
                let /** @type {?} */ numDecimal = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal = args[2];
                }
                const /** @type {?} */ decimaler = new DecimalPipe(numLocal);
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
                // currency:en_US or currency
                const /** @type {?} */ cp = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
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
                // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
                
                let /** @type {?} */ dateLocal = "en_US";
                let /** @type {?} */ dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                const /** @type {?} */ dater = new DatePipe(dateLocal);
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
                // uppercase
                const /** @type {?} */ ucp = new UpperCasePipe();
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
                // lowercase
                const /** @type {?} */ lcp = new LowerCasePipe();
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
                // if:=:true:fa fa-check:fa fa-bell
                const /** @type {?} */ acondition = args.length > 1 ? args[1] : "";
                const /** @type {?} */ value = args.length > 2 ? args[2] : "";
                const /** @type {?} */ action = args.length > 3 ? args[3] : "";
                const /** @type {?} */ altAction = args.length > 4 ? args[4] : "";
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
                // rating
                result = this.transformComponent("select", content, this.intoId, this.intoName, data, "");
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
                catch (/** @type {?} */ x) {
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
        let /** @type {?} */ result;
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
            let /** @type {?} */ counter = 0;
            result = content;
            content.map((source) => {
                if (typeof source === "string" ||
                    typeof content === "number" ||
                    typeof content === "boolean" ||
                    Object.keys(content).length) {
                    const /** @type {?} */ sx = this.registeredComponentFor(type);
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
        const /** @type {?} */ component = this.pool.registeredComponent(name);
        let /** @type {?} */ result = null;
        if (component) {
            let /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            const /** @type {?} */ componentRef = this.viewRef.createComponent(componentFactory);
            const /** @type {?} */ domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
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
            let /** @type {?} */ result = this.rawContent;
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
IntoDirective.decorators = [
    { type: Directive, args: [{
                selector: '[into]'
            },] },
];
/** @nocollapse */
IntoDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: ElementRef, },
    { type: ComponentPool, },
    { type: ComponentFactoryResolver, },
];
IntoDirective.propDecorators = {
    "rawContent": [{ type: Input, args: ["rawContent",] },],
    "intoId": [{ type: Input, args: ["intoId",] },],
    "intoName": [{ type: Input, args: ["intoName",] },],
    "intoData": [{ type: Input, args: ["intoData",] },],
    "into": [{ type: Input, args: ["into",] },],
    "onComponentChange": [{ type: Input, args: ["onComponentChange",] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    LastUpdateComponent,
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
                    LastUpdateComponent
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
                    LastUpdateComponent
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
            },] },
];
/** @nocollapse */
IntoPipeModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { InToPipe, MaskPipe, MapPipe, LinkPipe, ImagePipe, VideoPipe, PrependPipe, AppendPipe, WrapPipe, EmailPipe, RatingPipe, AddressPipe, JoinPipe, FontPipe, ValueOfPipe, SanitizeHtmlPipe, ConditionalPipe, IntoPipeModule, IntoDirective, ComponentPool, AddressComponent as ɵa, CheckboxComponent as ɵj, EmailComponent as ɵb, FontComponent as ɵc, ImageComponent as ɵd, InputComponent as ɵi, JsonComponent as ɵf, LastUpdateComponent as ɵo, LikeComponent as ɵn, LinkComponent as ɵg, RatingComponent as ɵh, SelectComponent as ɵk, ShareComponent as ɵm, SpanComponent as ɵl, VideoComponent as ɵe };
//# sourceMappingURL=into-pipes.js.map
