/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
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
export { MaskPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvbWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQUtoRCw2QkFBVTs7Ozs7O0lBQVYsVUFBVyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVE7O1FBQ3BDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUNqRSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTlELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQzdFOzs7Ozs7O0lBQ0QsNEJBQVM7Ozs7OztJQUFULFVBQVUsS0FBSyxFQUFFLGFBQWEsRUFBRSxRQUFRO1FBQXhDLGlCQU1DOztRQUxHLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDL0QsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs7Ozs7O0lBQ0QsNEJBQVM7Ozs7O0lBQVQsVUFBVSxNQUFXO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7O1FBRWpDLElBQU0sYUFBYSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQzFELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0Q7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzFEOztnQkF4QkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7bUJBTnRCOztTQU9hLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gbWFzayBzZW5zaXRpdmUgaW5mb3JtYXRpb24uIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSBtYXNrZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbWFzaycgfSlcclxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgbWFza1N0cmluZyhpdGVtLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hc2tlZFNlY3Rpb24gPSBpdGVtICA/IGl0ZW0uc2xpY2UoMCwgLXZpc2libGVEaWdpdHMpIDogXCJcIjtcclxuICAgICAgICBjb25zdCB2aXNpYmxlU2VjdGlvbiA9IGl0ZW0gPyBpdGVtLnNsaWNlKC12aXNpYmxlRGlnaXRzKSA6IFwiXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtID8gbWFza2VkU2VjdGlvbi5yZXBsYWNlKC8uL2csIG1hc2tXaXRoKSArIHZpc2libGVTZWN0aW9uIDogXCJcIjtcclxuICAgIH1cclxuICAgIG1hc2tBcnJheShpdGVtcywgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5tYXNrU3RyaW5nKGl0ZW0sIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB2aXNpYmxlRGlnaXRzID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IDQ7XHJcbiAgICAgICAgY29uc3QgbWFza1dpdGggPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogJyonO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza1N0cmluZyhzb3VyY2UsIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza0FycmF5KHNvdXJjZSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==