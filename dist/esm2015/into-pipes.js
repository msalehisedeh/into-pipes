import { Pipe, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MaskPipe {
    /**
     * @param {?} item
     * @param {...?} args
     * @return {?}
     */
    transform(item, ...args) {
        const /** @type {?} */ visibleDigits = (args && args.length) ? args[0] : 4;
        const /** @type {?} */ maskWith = args.length > 1 ? args[1] : '*';
        const /** @type {?} */ maskedSection = item ? item.slice(0, -visibleDigits) : "";
        const /** @type {?} */ visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
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
     * @param {?} item
     * @param {...?} args
     * @return {?}
     */
    transform(item, ...args) {
        const /** @type {?} */ mapping = (args && args.length) ? args[0].split('/') : [];
        let /** @type {?} */ result = item;
        mapping.map((key) => {
            if (key.indexOf(item) === 0) {
                result = key.split(';')[1];
            }
        });
        return result;
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
     * @param {?} object
     * @param {...?} args
     * @return {?}
     */
    transform(object, ...args) {
        return object[args[0]];
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
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        const /** @type {?} */ target = (args && args.length) ? args[0] : "";
        const /** @type {?} */ title = (args && args.length > 1) ? args[1] : "";
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
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
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        const /** @type {?} */ width = (args && args.length) ? "width: " + args[0] + ";" : "";
        const /** @type {?} */ height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        const /** @type {?} */ alt = (args && args.length > 2) ? args[2] : "";
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
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
class PrependPipe {
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        return ((args && args.length) ? args[0] : "") + source;
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
        return source + ((args && args.length) ? args[0] : "");
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
        return pre + source + post;
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
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        return "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
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
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
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
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        let /** @type {?} */ url = "https://maps.google.com/?q=" +
            source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
        url = url.replace("\\s+", "+");
        return "<span class='address'><span>" + source.street + ", " + source.suite + "</span>" +
            "<span> " + source.city + ", " + source.zipcode + "</span>" +
            "</span> <a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</a>";
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
class FontPipe {
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
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
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
            case "currency":
                // currency:en_US or currency
                result = new CurrencyPipe(args.length > 1 ? args[1] : "en_US").transform(content);
                break;
            case "append":
                // append:something
                result = new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "prepend":
                // prepend:something
                result = new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "font":
                // font:fa fa-check:left:*
                result = new FontPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
                break;
            case "wrap":
                // wrap:something:something  OR wrap:something
                result = new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
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
            case "number":
                // number:en_US:2   or number:en_US or number
                if (args.length > 2) {
                    result = new DecimalPipe(args[1]).transform(content, args[2]);
                }
                else {
                    result = new DecimalPipe(args.length > 1 ? args[1] : "en_US").transform(content);
                }
                break;
            case "date":
                // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
                if (args.length > 2) {
                    result = new DatePipe(args[1]).transform(content, args[2]);
                }
                else {
                    result = new DatePipe("en_US").transform(content, args[1]);
                }
                break;
            case "json":
                // json
                result = new JsonPipe().transform(content);
                break;
            case "slice":
                // slice 5:12 OR slice 5
                if (args.length > 2) {
                    result = new SlicePipe().transform(content, parseInt(args[1], 10), parseInt(args[2], 10));
                }
                else {
                    result = new SlicePipe().transform(content, parseInt(args[1], 10));
                }
                break;
            case "uppercase":
                // uppercase
                result = new UpperCasePipe().transform(content);
                break;
            case "lowercase":
                // lowercase
                result = new LowerCasePipe().transform(content);
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
            case "map":
                // map:key1;value1/key2;value2/key3;value3
                result = new MapPipe().transform(content, args.length > 1 ? args[1] : "");
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
                    const /** @type {?} */ q = content.indexOf("?");
                    const /** @type {?} */ t = q < 0 ? content : content.substring(0, q);
                    const /** @type {?} */ d = t.lastIndexOf("/");
                    const /** @type {?} */ p = d < 0 ? t : t.substring(d + 1);
                    result = new LinkPipe().transform(content, "", p);
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
                    const /** @type {?} */ q = content.indexOf("?");
                    const /** @type {?} */ t = q < 0 ? content : content.substring(0, q);
                    const /** @type {?} */ d = t.lastIndexOf("/");
                    const /** @type {?} */ p = d < 0 ? t : t.substring(d + 1);
                    result = new ImagePipe().transform(content, p);
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
class IntoPipeModule {
}
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

export { InToPipe, MaskPipe, MapPipe, LinkPipe, ImagePipe, PrependPipe, AppendPipe, WrapPipe, EmailPipe, RatingPipe, AddressPipe, IntoPipeModule, FontPipe as ɵb, ValueOfPipe as ɵa };
//# sourceMappingURL=into-pipes.js.map
