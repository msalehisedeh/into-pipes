/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var RatingPipe = /** @class */ (function () {
    function RatingPipe() {
    }
    /**
     * @return {?}
     */
    RatingPipe.transformationMethod = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = function (content, args, callback, data) {
            return new RatingPipe().transform(content, "");
        };
        return x;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    RatingPipe.prototype.rateString = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var value = parseInt(source, 10);
        /** @type {?} */
        var float = parseFloat(source);
        /** @type {?} */
        var x = "<span class='rating'>";
        for (var i = 0; i < value; i++) {
            x += "<span class='fa fa-star' aria-hidden='true'></span>";
        }
        if (float !== value) {
            x += "<span class='fa fa-star-half' aria-hidden='true'></span>";
        }
        x += "</span><span class='rate-value'>" + source + "</span>";
        return x;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    RatingPipe.prototype.transform = /**
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
            return this.rateString(source);
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.rateString(item));
            });
            return result_1;
        }
    };
    RatingPipe.decorators = [
        { type: Pipe, args: [{ name: 'raiting' },] }
    ];
    return RatingPipe;
}());
export { RatingPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBSXpDLCtCQUFvQjs7O0lBQTNCOztRQUNJLElBQU0sQ0FBQyxHQUFHLFVBQVcsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTtZQUN6RSxNQUFNLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2xELENBQUM7UUFDRixNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ1o7Ozs7O0lBQ0QsK0JBQVU7Ozs7SUFBVixVQUFXLE1BQU07O1FBQ2IsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQzs7UUFDbkMsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUVqQyxJQUFJLENBQUMsR0FBRyx1QkFBdUIsQ0FBQztRQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRyxDQUFDO1lBQzlCLENBQUMsSUFBSSxxREFBcUQsQ0FBQTtTQUM3RDtRQUNELEVBQUUsQ0FBQyxDQUFFLEtBQUssS0FBSyxLQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsSUFBSSwwREFBMEQsQ0FBQTtTQUNsRTtRQUNELENBQUMsSUFBSSxrQ0FBa0MsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBRTdELE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDWjs7Ozs7O0lBRUQsOEJBQVM7Ozs7O0lBQVQsVUFBVSxNQUFXO1FBQXJCLGlCQVVDO1FBVnNCLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFDSixJQUFNLFFBQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7Z0JBQ1osUUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFFBQU0sQ0FBQztTQUNqQjtLQUNKOztnQkFsQ0osSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7cUJBTHpCOztTQU1hLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhIHJhaXRpbmcgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncmFpdGluZycgfSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJhdGluZ1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICByYXRlU3RyaW5nKHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgY29uc3QgZmxvYXQgPSBwYXJzZUZsb2F0KHNvdXJjZSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gXCI8c3BhbiBjbGFzcz0ncmF0aW5nJz5cIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKysgKSB7XHJcbiAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIGZsb2F0ICE9PSB2YWx1ZSApIHtcclxuICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgeCArPSBcIjwvc3Bhbj48c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZSc+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXRlU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucmF0ZVN0cmluZyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19