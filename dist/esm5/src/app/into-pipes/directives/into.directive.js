/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ViewContainerRef, ElementRef, Input, ComponentFactoryResolver } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe, SlicePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { PrependPipe } from '../pipes/prepend.pipe';
import { AppendPipe } from '../pipes/append.pipe';
import { WrapPipe } from '../pipes/wrap.pipe';
import { MapPipe } from '../pipes/map.pipe';
import { MaskPipe } from '../pipes/mask.pipe';
import { ValueOfPipe } from '../pipes/valueof.pipe';
import { ConditionalPipe } from '../pipes/conditional.pipe';
import { JoinPipe } from '../pipes/join.pipe';
import { ComponentPool } from '../injectables/component.pool';
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
export { IntoDirective };
if (false) {
    /** @type {?} */
    IntoDirective.prototype.rawContent;
    /** @type {?} */
    IntoDirective.prototype.intoId;
    /** @type {?} */
    IntoDirective.prototype.intoName;
    /** @type {?} */
    IntoDirective.prototype.intoData;
    /** @type {?} */
    IntoDirective.prototype.into;
    /** @type {?} */
    IntoDirective.prototype.onComponentChange;
    /** @type {?} */
    IntoDirective.prototype.viewRef;
    /** @type {?} */
    IntoDirective.prototype.el;
    /** @type {?} */
    IntoDirective.prototype.pool;
    /** @type {?} */
    IntoDirective.prototype.componentFactoryResolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50by5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9kaXJlY3RpdmVzL2ludG8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsS0FBSyxFQUVSLHdCQUF3QixFQUd4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0gsUUFBUSxFQUNSLFlBQVksRUFDWixXQUFXLEVBQ1gsU0FBUyxFQUNULGFBQWEsRUFDYixhQUFhLEVBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBeUIxRCx1QkFDWSxTQUNELElBQ0MsTUFDTjtRQUhNLFlBQU8sR0FBUCxPQUFPO1FBQ1IsT0FBRSxHQUFGLEVBQUU7UUFDRCxTQUFJLEdBQUosSUFBSTtRQUNWLDZCQUF3QixHQUF4Qix3QkFBd0I7aUNBTlYsVUFBQyxLQUFLLEtBQU87S0FRaEM7Ozs7O0lBRU8sNkJBQUs7Ozs7Y0FBQyxJ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QUNoQixVQUFVO2dCQTJCTCxhQUFhO2dCQXhCckIsd0JBQXdCOzs7NkJBK0JwQixLQUFLLFNBQUMsWUFBWTt5QkFHbEIsS0FBSyxTQUFDLFFBQVE7MkJBR2QsS0FBSyxTQUFDLFVBQVU7MkJBR2hCLEtBQUssU0FBQyxVQUFVO3VCQUdoQixLQUFLLFNBQUMsTUFBTTtvQ0FHWixLQUFLLFNBQUMsbUJBQW1COzt3QkFwRDlCOztTQW1DYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgRGF0ZVBpcGUsXHJcbiAgICBDdXJyZW5jeVBpcGUsXHJcbiAgICBEZWNpbWFsUGlwZSxcclxuICAgIFNsaWNlUGlwZSxcclxuICAgIFVwcGVyQ2FzZVBpcGUsXHJcbiAgICBMb3dlckNhc2VQaXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7UHJlcGVuZFBpcGV9IGZyb20gJy4uL3BpcGVzL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7QXBwZW5kUGlwZX0gZnJvbSAnLi4vcGlwZXMvYXBwZW5kLnBpcGUnO1xyXG5pbXBvcnQge1dyYXBQaXBlfSBmcm9tICcuLi9waXBlcy93cmFwLnBpcGUnO1xyXG5pbXBvcnQge01hcFBpcGV9IGZyb20gJy4uL3BpcGVzL21hcC5waXBlJztcclxuaW1wb3J0IHtNYXNrUGlwZX0gZnJvbSAnLi4vcGlwZXMvbWFzay5waXBlJztcclxuaW1wb3J0IHtWYWx1ZU9mUGlwZX0gZnJvbSAnLi4vcGlwZXMvdmFsdWVvZi5waXBlJztcclxuaW1wb3J0IHtDb25kaXRpb25hbFBpcGV9IGZyb20gJy4uL3BpcGVzL2NvbmRpdGlvbmFsLnBpcGUnO1xyXG5pbXBvcnQge0pvaW5QaXBlfSBmcm9tICcuLi9waXBlcy9qb2luLnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vaW5qZWN0YWJsZXMvY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tpbnRvXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEludG9EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJyYXdDb250ZW50XCIpXHJcbiAgICByYXdDb250ZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9JZFwiKVxyXG4gICAgaW50b0lkOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9OYW1lXCIpXHJcbiAgICBpbnRvTmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvRGF0YVwiKVxyXG4gICAgaW50b0RhdGE6IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b1wiKVxyXG4gICAgaW50bzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dChcIm9uQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgICBvbkNvbXBvbmVudENoYW5nZSA9IChldmVudCkgPT4ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHB1YmxpYyBlbDpFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCxcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF90cmFuc2Zvcm0oY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICBcclxuICAgICAgICBzd2l0Y2goYXJnc1swXSl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzbGljZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBzbGljZSA1OjEyIE9SIHNsaWNlIDVcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kPSBwYXJzZUludChhcmdzWzJdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZXIgPW5ldyBTbGljZVBpcGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVuZCA/IHNsaWNlci50cmFuc2Zvcm0oY29udGVudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIG51bWJlcjplbl9VUzoyICAgb3IgbnVtYmVyOmVuX1VTIG9yIG51bWJlclxyXG4gICAgICAgICAgICAgICAgbGV0IG51bUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bURlY2ltYWw9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1Mb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtRGVjaW1hbD0gYXJnc1syXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2ltYWxlciA9bmV3IERlY2ltYWxQaXBlKG51bUxvY2FsKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bURlY2ltYWwgPyBkZWNpbWFsZXIudHJhbnNmb3JtKGNvbnRlbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY3VycmVuY3lcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gY3VycmVuY3k6ZW5fVVMgb3IgY3VycmVuY3lcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNwID0gbmV3IEN1cnJlbmN5UGlwZShhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJlbl9VU1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndyYXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gd3JhcDpzb21ldGhpbmc6c29tZXRoaW5nICBPUiB3cmFwOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFdyYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogYXJnc1sxXSk7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhcHBlbmRcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFwcGVuZFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJlcGVuZFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBwcmVwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFByZXBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1hcFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBtYXA6a2V5MTt2YWx1ZTEva2V5Mjt2YWx1ZTIva2V5Mzt2YWx1ZTNcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTWFwUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGVcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0ZTplbl9VUzpNTWRkeXkgT1IgZGF0ZTpcXFwiTU0vZGQveXl5eSBoaDpzc1xcXCJcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGUgPSAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpID8gbmV3IERhdGUoY29udGVudCkgOiBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGVMb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRlRm9ybWF0PSBhcmdzWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVMb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD0gYXJnc1syXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVyID1uZXcgRGF0ZVBpcGUoZGF0ZUxvY2FsKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRhdGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkYXRlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVwcGVyY2FzZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyB1cHBlcmNhc2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVjcCA9ICBuZXcgVXBwZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdWNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh1Y3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb3dlcmNhc2VcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gbG93ZXJjYXNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsY3AgPSAgbmV3IExvd2VyQ2FzZVBpcGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFza1wiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBtYXNrOjQ6KiAgT1IgbWFzazo0XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIHBhcnNlSW50KGFyZ3NbMV0sIDEwKSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmFsdWVvZlwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZW9mOmtleVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBWYWx1ZU9mUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlmXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGlmOj06dHJ1ZTpmYSBmYS1jaGVjazpmYSBmYS1iZWxsXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY29uZGl0aW9uID0gIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbHRBY3Rpb24gPSAgYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgQ29uZGl0aW9uYWxQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICdcIicgPyByZXN1bHQuc3Vic3RyaW5nKDEscmVzdWx0Lmxlbmd0aC0xKSA6IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNwbGl0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKGNvbnRlbnQsIHJlc3VsdCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImpvaW5cIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8ganNvblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEpvaW5QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwianNvblwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBqc29uXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImpzb25cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsIGRhdGEsIFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZm9udFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBmb250OmZhIGZhLWNoZWNrOmxlZnQ6KlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJmb250XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbWFpbFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBlbWFpbFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJlbWFpbFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGhvbmVcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwicGhvbmVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTsgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwicGhvbmVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInBob25lXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgZmFsc2UsIGZhbHNlKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZHJlc3NcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJhZGRyZXNzXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYXRpbmdcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gcmF0aW5nXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInJhdGluZ1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGFyZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBzaGFyZVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzaGFyZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIFwibGlrZVwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaWtlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlrZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSBcImxhc3R1cGRhdGVcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGFzdHVwZGF0ZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxhc3R1cGRhdGVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlucHV0Z3JvdXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW5wdXRncm91cFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0Z3JvdXBcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcInJhZGlvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW5rXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHQgb3IgbGluazp0ZXh0IG9yIGxpbmtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxpbmtcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaW5rXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlua1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDpwbGFjZWhvbGRlcjpwaXBlXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDppZGVhbDp1c2VGb250XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImNoZWNrYm94XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbWFnZToyMDBweDphdXRvOmFsdHRleHQgT1IgaW1hZ2U6MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgaW1hZ2U6MjAwcHggT1IgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW1hZ2VcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJpbWFnZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZpZGVvXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIHZpZGVvOjIwMHB4OmF1dG86YWx0dGV4dCBPUiB2aWRlbzoyMDBweDphbHRlcm5hdGUtdGV4dCBPUiB2aWRlbzoyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJ2aWRlb1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInZpZGVvXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gdW5rbm93biBmb3JtYXR0ZXJcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRvSWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9OYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA1ID8gYXJnc1s1XSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1Db21wb25lbnQodHlwZSwgY29udGVudDogYW55LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJib29sZWFuXCIgfHwgT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdcIiArIHR5cGUrIFwiJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRyYW5zZm9ybShjb250ZW50LnNvdXJjZSA/IGNvbnRlbnQuc291cmNlIDogY29udGVudCwgZGF0YSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZSAmJiB0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcImJvb2xlYW5cIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb250ZW50KS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ggPSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN4ID09PSBudWxsIHx8IHN4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ1wiICsgdHlwZSsgXCInIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5pZCA9IGlkICsgJy0nICsgKGNvdW50ZXIrKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC50cmFuc2Zvcm0oc291cmNlLnNvdXJjZSA/IHNvdXJjZS5zb3VyY2UgOiBzb3VyY2UsIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3gub25JbnRvQ29tcG9uZW50Q2hhbmdlICYmIHRoaXMub25Db21wb25lbnRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudEZvcihuYW1lKTogUGlwZUNvbXBvbmVudCB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRDb21wb25lbnQobmFtZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogUGlwZUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSB0aGlzLnZpZXdSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gICAgICAgICAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWYgPCBhbnkgPiApLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAoPFBpcGVDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmludG8gfHwgdGhpcy5yYXdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9ICB0aGlzLnJhd0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50by5zcGxpdChcInxcIikubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShyZXN1bHQsIHRoaXMuc3BsaXQoaXRlbSksIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIikudHJhbnNmb3JtKHJlc3VsdCwgW10sIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IoXCJzcGFuXCIpLnRyYW5zZm9ybShzb3VyY2UsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=