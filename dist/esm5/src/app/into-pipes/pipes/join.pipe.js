/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
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
export { JoinPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvam9pbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lBSWhELDRCQUFTOzs7OztJQUFULFVBQVUsTUFBVztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFDSixJQUFNLFFBQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO2dCQUN4QixRQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxRQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0tBQ0o7O2dCQVpKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7O21CQUx0Qjs7U0FNYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGpvaW4gYXJyYXlzIG9yIGpzb24gYXR0cmlidXRlIHZhbHVlcy5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnam9pbicgfSlcclxuZXhwb3J0IGNsYXNzIEpvaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5qb2luKGFyZ3NbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oYXJnc1swXSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iXX0=