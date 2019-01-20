/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
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
export { EmailPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2VtYWlsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQUtoRCxtQ0FBZTs7OztJQUFmLFVBQWdCLE1BQU07UUFDbEIsTUFBTSxDQUFDLG1CQUFtQixHQUFDLE1BQU0sR0FBQyxtRUFBbUUsR0FBRyxNQUFNLEdBQUcsYUFBYSxDQUFDO0tBQ2xJOzs7Ozs7SUFDRCw2QkFBUzs7Ozs7SUFBVCxVQUFVLE1BQVc7UUFBckIsaUJBVUM7UUFWc0IsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QztRQUFDLElBQUksQ0FBQyxDQUFDOztZQUNKLElBQU0sUUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtnQkFDWixRQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMzQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsUUFBTSxDQUFDO1NBQ2pCO0tBQ0o7O2dCQWhCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOztvQkFMdkI7O1NBTWEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGVtYWlsIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2VtYWlsJyB9KVxyXG5leHBvcnQgY2xhc3MgRW1haWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgZW1haWxGcm9tU3RyaW5nKHNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBcIjxhIGhyZWY9XFwnbWFpbHRvOlwiK3NvdXJjZStcIlxcJyA+PHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPjxzcGFuPlwiICsgc291cmNlICsgXCI8L3NwYW4+PC9hPlwiO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbWFpbEZyb21TdHJpbmcoc291cmNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5lbWFpbEZyb21TdHJpbmcoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==