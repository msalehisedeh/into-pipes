/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var LinkPipe = /** @class */ (function () {
    function LinkPipe() {
    }
    /**
     * @param {?} source
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    LinkPipe.prototype.stringToLink = /**
     * @param {?} source
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    function (source, target, title) {
        if (!title || !title.length) {
            /** @type {?} */
            var q = source.indexOf("?");
            /** @type {?} */
            var t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            var d = t.lastIndexOf("/");
            title = d < 0 ? t : t.substring(d + 1);
        }
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
    };
    /**
     * @param {?} sources
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    LinkPipe.prototype.arrayToImagLink = /**
     * @param {?} sources
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    function (sources, target, title) {
        var _this = this;
        /** @type {?} */
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToLink(source, target, ""));
        });
        return result;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    LinkPipe.prototype.transform = /**
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
        var target = (args && args.length) ? args[0] : "";
        /** @type {?} */
        var title = (args && args.length > 1) ? args[1] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
    };
    LinkPipe.decorators = [
        { type: Pipe, args: [{ name: 'link' },] }
    ];
    return LinkPipe;
}());
export { LinkPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvbGluay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQUloRCwrQkFBWTs7Ozs7O0lBQVosVUFBYSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUs7UUFDOUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7WUFDekIsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDOUIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDbEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE1BQU0sQ0FBQyxXQUFXLEdBQUMsTUFBTSxHQUFDLFlBQVksR0FBQyxNQUFNLEdBQUMsSUFBSSxHQUFDLEtBQUssR0FBQyxNQUFNLENBQUM7S0FDbkU7Ozs7Ozs7SUFDRCxrQ0FBZTs7Ozs7O0lBQWYsVUFBZ0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLO1FBQXRDLGlCQU1DOztRQUxHLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs7Ozs7O0lBQ0QsNEJBQVM7Ozs7O0lBQVQsVUFBVSxNQUFXO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7O1FBRWpDLElBQU0sTUFBTSxHQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQzNELElBQU0sS0FBSyxHQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTlELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdEQ7O2dCQTNCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzttQkFOdEI7O1NBT2EsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgbGluay5cclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbGluaycgfSlcclxuZXhwb3J0IGNsYXNzIExpbmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdHJpbmdUb0xpbmsoc291cmNlLCB0YXJnZXQsIHRpdGxlKSB7XHJcbiAgICAgICAgaWYoIXRpdGxlIHx8ICF0aXRsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICB0aXRsZSA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxhIGhyZWY9J1wiK3NvdXJjZStcIicgdGFyZ2V0PSdcIit0YXJnZXQrXCInPlwiK3RpdGxlK1wiPC9hPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb0ltYWdMaW5rKHNvdXJjZXMsIHRhcmdldCwgdGl0bGUpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCBcIlwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdGl0bGU6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0xpbmsoc291cmNlLCB0YXJnZXQsIHRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb0ltYWdMaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSk7XHJcbiAgICB9XHJcbn1cclxuIl19