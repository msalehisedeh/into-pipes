/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var WrapPipe = /** @class */ (function () {
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
        /** @type {?} */
        var key = ((args && args.length) ? args[0] : "");
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
        { type: Pipe, args: [{ name: 'wrap' },] }
    ];
    return WrapPipe;
}());
export { WrapPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvd3JhcC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lBSWhELDRCQUFTOzs7OztJQUFULFVBQVUsTUFBVztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7OztRQUNqQyxJQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUNqRCxJQUFNLElBQUksR0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDWixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7O1FBRW5ELElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ0osSUFBTSxRQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUNaLFFBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsUUFBTSxDQUFDO1NBQ2pCO0tBQ0o7O2dCQWxCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzttQkFMdEI7O1NBTWEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byB3cmFwIGEgY29udGVudCBpbnRvIGNoYXJhY3RlcihzKS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnd3JhcCcgfSlcclxuZXhwb3J0IGNsYXNzIFdyYXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgIFxyXG4gICAgICAgIGNvbnN0IHByZSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHBvc3Q9IHByZS5sZW5ndGggPyBcclxuICAgICAgICAgICAgICAgICAgICAoYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpIDogcHJlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlICsgc291cmNlICsgcG9zdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJlICsgaXRlbSArIHBvc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==