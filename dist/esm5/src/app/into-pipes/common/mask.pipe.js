import * as tslib_1 from "tslib";
/*
* Defines a filter to mask sensitive information.
* if transforming object is an array, all elements in the array will be masked and the resulting array will be returned.
*/
import { Pipe } from '@angular/core';
var MaskPipe = /** @class */ (function () {
    function MaskPipe() {
    }
    MaskPipe_1 = MaskPipe;
    MaskPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // mask:4:*  OR mask:4
            if (args.length > 2) {
                return new MaskPipe_1().transform(content, parseInt(args[1], 10), args[2]);
            }
            else if (args.length > 1) {
                return new MaskPipe_1().transform(content, args[1]);
            }
            else {
                return new MaskPipe_1().transform(content);
            }
        };
        return x;
    };
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
    var MaskPipe_1;
    MaskPipe = MaskPipe_1 = tslib_1.__decorate([
        Pipe({ name: 'mask' })
    ], MaskPipe);
    return MaskPipe;
}());
export { MaskPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL21hc2sucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztFQUdFO0FBQ0YsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFBQTtJQXFDQSxDQUFDO2lCQXJDWSxRQUFRO0lBQ1YsNkJBQW9CLEdBQTNCO1FBQ0ksSUFBTSxDQUFDLEdBQUcsVUFBVyxPQUFZLEVBQUUsSUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVO1lBQ3pFLHNCQUFzQjtZQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixPQUFPLElBQUksVUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVFO2lCQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQVEsSUFBSSxVQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNILE9BQVEsSUFBSSxVQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0M7UUFDTCxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRO1FBQ3BDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pFLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFOUQsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlFLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsS0FBSyxFQUFFLGFBQWEsRUFBRSxRQUFRO1FBQXhDLGlCQU1DO1FBTEcsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsTUFBVztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBRWpDLElBQU0sYUFBYSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7SUFwQ1EsUUFBUTtRQURwQixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDVixRQUFRLENBcUNwQjtJQUFELGVBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXJDWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIG1hc2sgc2Vuc2l0aXZlIGluZm9ybWF0aW9uLiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgbWFza2VkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ21hc2snIH0pXHJcbmV4cG9ydCBjbGFzcyBNYXNrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIG1hc2s6NDoqICBPUiBtYXNrOjRcclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBwYXJzZUludChhcmdzWzFdLCAxMCksIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBtYXNrU3RyaW5nKGl0ZW0sIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSB7XHJcbiAgICAgICAgY29uc3QgbWFza2VkU2VjdGlvbiA9IGl0ZW0gID8gaXRlbS5zbGljZSgwLCAtdmlzaWJsZURpZ2l0cykgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVTZWN0aW9uID0gaXRlbSA/IGl0ZW0uc2xpY2UoLXZpc2libGVEaWdpdHMpIDogXCJcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBtYXNrZWRTZWN0aW9uLnJlcGxhY2UoLy4vZywgbWFza1dpdGgpICsgdmlzaWJsZVNlY3Rpb24gOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgbWFza0FycmF5KGl0ZW1zLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLm1hc2tTdHJpbmcoaXRlbSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2libGVEaWdpdHMgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogNDtcclxuICAgICAgICBjb25zdCBtYXNrV2l0aCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAnKic7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrU3RyaW5nKHNvdXJjZSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXNrQXJyYXkoc291cmNlLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCk7XHJcbiAgICB9XHJcbn1cclxuIl19