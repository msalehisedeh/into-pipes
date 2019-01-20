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
                var date = ((typeof content === "string") || !(content instanceof Array)) ? new Date(content) : content;
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
    /**
     * @return {?}
     */
    IntoDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50by5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9kaXJlY3RpdmVzL2ludG8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsS0FBSyxFQUlSLHdCQUF3QixFQUd4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0gsUUFBUSxFQUNSLFlBQVksRUFDWixXQUFXLEVBRVgsU0FBUyxFQUNULGFBQWEsRUFDYixhQUFhLEVBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBMEIxRCx1QkFDWSxTQUNELElBQ0MsTUFDTjtRQUhNLFlBQU8sR0FBUCxPQUFPO1FBQ1IsT0FBRSxHQUFGLEVBQUU7UUFDRCxTQUFJLEdBQUosSUFBSTtRQUNWLDZCQUF3QixHQUF4Qix3QkFBd0I7aUNBTlYsVUFBQyxLQUFLLEtBQU87S0FRaEM7Ozs7O0lBRU8sNkJBQUs7Ozs7Y0FBQyxJ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Q0FBQyxRQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1RTtZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFNLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDakMsUUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU07b0JBQ2QsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsS0FBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDNUU7aUJBQ0osQ0FBQyxDQUFDO2FBQ047U0FDSjtLQUNKOzs7O0lBRUQsbUNBQVc7OztJQUFYO0tBRUM7O2dCQXZYSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7aUJBQ3JCOzs7O2dCQXBDRyxnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBOEJMLGFBQWE7Z0JBekJyQix3QkFBd0I7Ozs2QkFpQ3BCLEtBQUssU0FBQyxZQUFZO3lCQUdsQixLQUFLLFNBQUMsUUFBUTsyQkFHZCxLQUFLLFNBQUMsVUFBVTsyQkFHaEIsS0FBSyxTQUFDLFVBQVU7dUJBR2hCLEtBQUssU0FBQyxNQUFNO29DQUdaLEtBQUssU0FBQyxtQkFBbUI7O3dCQXhEOUI7O1NBdUNhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIE9uRGVzdHJveSxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBDb21wb25lbnRSZWYsXHJcbiAgICBFbWJlZGRlZFZpZXdSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBEYXRlUGlwZSxcclxuICAgIEN1cnJlbmN5UGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gICAgSnNvblBpcGUsXHJcbiAgICBTbGljZVBpcGUsXHJcbiAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgTG93ZXJDYXNlUGlwZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuLi9waXBlcy9wcmVwZW5kLnBpcGUnO1xyXG5pbXBvcnQge0FwcGVuZFBpcGV9IGZyb20gJy4uL3BpcGVzL2FwcGVuZC5waXBlJztcclxuaW1wb3J0IHtXcmFwUGlwZX0gZnJvbSAnLi4vcGlwZXMvd3JhcC5waXBlJztcclxuaW1wb3J0IHtNYXBQaXBlfSBmcm9tICcuLi9waXBlcy9tYXAucGlwZSc7XHJcbmltcG9ydCB7TWFza1BpcGV9IGZyb20gJy4uL3BpcGVzL21hc2sucGlwZSc7XHJcbmltcG9ydCB7VmFsdWVPZlBpcGV9IGZyb20gJy4uL3BpcGVzL3ZhbHVlb2YucGlwZSc7XHJcbmltcG9ydCB7Q29uZGl0aW9uYWxQaXBlfSBmcm9tICcuLi9waXBlcy9jb25kaXRpb25hbC5waXBlJztcclxuaW1wb3J0IHtKb2luUGlwZX0gZnJvbSAnLi4vcGlwZXMvam9pbi5waXBlJztcclxuXHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2luamVjdGFibGVzL2NvbXBvbmVudC5wb29sJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaW50b10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnRvRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJyYXdDb250ZW50XCIpXHJcbiAgICByYXdDb250ZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9JZFwiKVxyXG4gICAgaW50b0lkOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9OYW1lXCIpXHJcbiAgICBpbnRvTmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvRGF0YVwiKVxyXG4gICAgaW50b0RhdGE6IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b1wiKVxyXG4gICAgaW50bzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dChcIm9uQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgICBvbkNvbXBvbmVudENoYW5nZSA9IChldmVudCkgPT4ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHB1YmxpYyBlbDpFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCxcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNwbGl0KGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50cmltKCkubWF0Y2goLyg/PVxcUylbXlwiXFw6XSooPzpcIlteXFxcXFwiXSooPzpcXFxcW1xcOlxcU11bXlxcXFxcIl0qKSpcIlteXCJcXDpdKikqL2cpLmZpbHRlcigoeCk9PngubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgXHJcbiAgICAgICAgc3dpdGNoKGFyZ3NbMF0pe1xyXG4gICAgICAgICAgICBjYXNlIFwic2xpY2VcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gc2xpY2UgNToxMiBPUiBzbGljZSA1XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZD0gcGFyc2VJbnQoYXJnc1syXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VyID1uZXcgU2xpY2VQaXBlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjb250ZW50LCBzdGFydCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5kID8gc2xpY2VyLnRyYW5zZm9ybShjbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjbnQsIHN0YXJ0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBudW1iZXI6ZW5fVVM6MiAgIG9yIG51bWJlcjplbl9VUyBvciBudW1iZXJcclxuICAgICAgICAgICAgICAgIGxldCBudW1Mb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICAgICAgICAgIGxldCBudW1EZWNpbWFsPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtTG9jYWwgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIG51bURlY2ltYWw9IGFyZ3NbMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWNpbWFsZXIgPW5ldyBEZWNpbWFsUGlwZShudW1Mb2NhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobnVtRGVjaW1hbCA/IGRlY2ltYWxlci50cmFuc2Zvcm0oY250LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImN1cnJlbmN5XCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbmN5OmVuX1VTIG9yIGN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcCA9IG5ldyBDdXJyZW5jeVBpcGUoYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiZW5fVVNcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3cmFwXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIHdyYXA6c29tZXRoaW5nOnNvbWV0aGluZyAgT1Igd3JhcDpzb21ldGhpbmdcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBXcmFwUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIiwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IGFyZ3NbMV0pOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXBwZW5kXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBcHBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByZXBlbmRcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gcHJlcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBQcmVwZW5kUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gbWFwOmtleTE7dmFsdWUxL2tleTI7dmFsdWUyL2tleTM7dmFsdWUzXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IE1hcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGRhdGU6ZW5fVVM6TU1kZHl5IE9SIGRhdGU6XFxcIk1NL2RkL3l5eXkgaGg6c3NcXFwiXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSA/IG5ldyBEYXRlKGNvbnRlbnQpIDogY29udGVudDtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRlTG9jYWwgPSBcImVuX1VTXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZUZvcm1hdD0gYXJnc1sxXTtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlTG9jYWwgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9IGFyZ3NbMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlciA9bmV3IERhdGVQaXBlKGRhdGVMb2NhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGF0ZXIudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cHBlcmNhc2VcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gdXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1Y3AgPSAgbmV3IFVwcGVyQ2FzZVBpcGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godWNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG93ZXJjYXNlXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGNwID0gIG5ldyBMb3dlckNhc2VQaXBlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBsY3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1hc2tcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gbWFzazo0OiogIE9SIG1hc2s6NFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBwYXJzZUludChhcmdzWzFdLCAxMCksIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTWFza1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTWFza1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZhbHVlb2ZcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWVvZjprZXlcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgVmFsdWVPZlBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpZlwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpZjo9OnRydWU6ZmEgZmEtY2hlY2s6ZmEgZmEtYmVsbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNvbmRpdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWx0QWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENvbmRpdGlvbmFsUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnXCInID8gcmVzdWx0LnN1YnN0cmluZygxLHJlc3VsdC5sZW5ndGgtMSkgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zcGxpdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShjb250ZW50LCByZXN1bHQsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJqb2luXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGpzb25cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBKb2luUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImpzb25cIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8ganNvblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJqc29uXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCBkYXRhLCBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZvbnRcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gZm9udDpmYSBmYS1jaGVjazpsZWZ0OipcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiZm9udFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCIpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW1haWxcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gZW1haWxcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiZW1haWxcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcIlwiKTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZHJlc3NcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJhZGRyZXNzXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYXRpbmdcIiA6IFxyXG4gICAgICAgICAgICAgICAgLy8gcmF0aW5nXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInJhdGluZ1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaGFyZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBzaGFyZVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzaGFyZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICBjYXNlIFwibGlrZVwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaWtlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlrZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgY2FzZSBcImxhc3R1cGRhdGVcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGFzdHVwZGF0ZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxhc3R1cGRhdGVcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiIDogXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJzZWxlY3RcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlucHV0Z3JvdXBcIiA6IFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW5wdXRncm91cFwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0Z3JvdXBcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcInJhZGlvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW5rXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHQgb3IgbGluazp0ZXh0IG9yIGxpbmtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImxpbmtcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJsaW5rXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwibGlua1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDpwbGFjZWhvbGRlcjpwaXBlXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImlucHV0XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dDppZGVhbDp1c2VGb250XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImNoZWNrYm94XCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiIDogXHJcbiAgICAgICAgICAgICAgICAvLyBpbWFnZToyMDBweDphdXRvOmFsdHRleHQgT1IgaW1hZ2U6MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgaW1hZ2U6MjAwcHggT1IgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwiaW1hZ2VcIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJpbWFnZVwiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcImltYWdlXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZpZGVvXCIgOiBcclxuICAgICAgICAgICAgICAgIC8vIHZpZGVvOjIwMHB4OmF1dG86YWx0dGV4dCBPUiB2aWRlbzoyMDBweDphbHRlcm5hdGUtdGV4dCBPUiB2aWRlbzoyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXCJ2aWRlb1wiLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgIGRhdGEsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcInZpZGVvXCIsIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCAgZGF0YSwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFwidmlkZW9cIiwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsICBkYXRhLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gdW5rbm93biBmb3JtYXR0ZXJcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRvSWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9OYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA1ID8gYXJnc1s1XSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1Db21wb25lbnQodHlwZSwgY29udGVudDogYW55LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJib29sZWFuXCIgfHwgT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdcIiArIHR5cGUrIFwiJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRyYW5zZm9ybShjb250ZW50LnNvdXJjZSA/IGNvbnRlbnQuc291cmNlIDogY29udGVudCwgZGF0YSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZSAmJiB0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcImJvb2xlYW5cIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb250ZW50KS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ggPSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN4ID09PSBudWxsIHx8IHN4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ1wiICsgdHlwZSsgXCInIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5pZCA9IGlkICsgJy0nICsgKGNvdW50ZXIrKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC50cmFuc2Zvcm0oc291cmNlLnNvdXJjZSA/IHNvdXJjZS5zb3VyY2UgOiBzb3VyY2UsIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3gub25JbnRvQ29tcG9uZW50Q2hhbmdlICYmIHRoaXMub25Db21wb25lbnRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudEZvcihuYW1lKTogUGlwZUNvbXBvbmVudCB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRDb21wb25lbnQobmFtZSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogUGlwZUNvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSB0aGlzLnZpZXdSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gICAgICAgICAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWYgPCBhbnkgPiApLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAoPFBpcGVDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmludG8gfHwgdGhpcy5yYXdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9ICB0aGlzLnJhd0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50by5zcGxpdChcInxcIikubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShyZXN1bHQsIHRoaXMuc3BsaXQoaXRlbSksIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIikudHJhbnNmb3JtKHJlc3VsdCwgW10sIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IoXCJzcGFuXCIpLnRyYW5zZm9ybShzb3VyY2UsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=