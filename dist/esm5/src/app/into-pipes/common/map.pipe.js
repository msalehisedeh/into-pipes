/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var MapPipe = /** @class */ (function () {
    function MapPipe() {
    }
    /**
     * @return {?}
     */
    MapPipe.transformationMethod = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = function (content, args, callback, data) {
            // map:key1;value1/key2;value2/key3;value3
            return new MapPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    };
    /**
     * @param {?} list
     * @param {?} map
     * @return {?}
     */
    MapPipe.prototype.valuesFor = /**
     * @param {?} list
     * @param {?} map
     * @return {?}
     */
    function (list, map) {
        /** @type {?} */
        var result = [];
        list.map(function (key) {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    };
    /**
     * @param {?} mapping
     * @return {?}
     */
    MapPipe.prototype.geMapping = /**
     * @param {?} mapping
     * @return {?}
     */
    function (mapping) {
        /** @type {?} */
        var map = mapping;
        if (mapping.trim) {
            /** @type {?} */
            var map_1 = {};
            mapping.split('/').map(function (key) {
                /** @type {?} */
                var x = key.split(';');
                map_1[x[0]] = x[1];
            });
            mapping = map_1;
        }
        return mapping;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    MapPipe.prototype.transform = /**
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
        var map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    };
    MapPipe.decorators = [
        { type: Pipe, args: [{ name: 'map' },] }
    ];
    return MapPipe;
}());
export { MapPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21tb24vbWFwLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBSXpDLDRCQUFvQjs7O0lBQTNCOztRQUNJLElBQU0sQ0FBQyxHQUFHLFVBQVcsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTs7WUFFekUsTUFBTSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzRSxDQUFDO1FBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNaOzs7Ozs7SUFFRCwyQkFBUzs7Ozs7SUFBVCxVQUFVLElBQUksRUFBRSxHQUFHOztRQUNmLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUNULEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNKLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Ozs7O0lBQ0QsMkJBQVM7Ozs7SUFBVCxVQUFVLE9BQU87O1FBQ2IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQSxDQUFFLE9BQU8sQ0FBQyxJQUFLLENBQUMsQ0FBQyxDQUFDOztZQUNoQixJQUFNLEtBQUcsR0FBRSxFQUFFLENBQUM7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7O2dCQUMvQixJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixLQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BCLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxLQUFHLENBQUM7U0FDakI7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0tBQ2xCOzs7Ozs7SUFDRCwyQkFBUzs7Ozs7SUFBVCxVQUFVLE1BQVc7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7UUFFakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFakUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9DOztnQkF0Q0osSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7a0JBTHJCOztTQU1hLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gdGFrZSBhIHN0cmluZyBhcyBhIGtleSBhbmQgcmV0dXJucyB2YWx1ZSBvZiBrZXkgZnJvbSB0aGUgZ2l2ZW4gbWFwIG9iamVjdC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbWFwJyB9KVxyXG5leHBvcnQgY2xhc3MgTWFwUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIG1hcDprZXkxO3ZhbHVlMS9rZXkyO3ZhbHVlMi9rZXkzO3ZhbHVlM1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzRm9yKGxpc3QsIG1hcCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxpc3QubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hcFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtYXBba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZ2VNYXBwaW5nKG1hcHBpbmcpIHtcclxuICAgICAgICBjb25zdCBtYXAgPSBtYXBwaW5nO1xyXG4gICAgICAgIGlmKCBtYXBwaW5nLnRyaW0gKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9e307XHJcbiAgICAgICAgICAgIG1hcHBpbmcuc3BsaXQoJy8nKS5tYXAoKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0ga2V5LnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICBtYXBbeFswXV0gPSB4WzFdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFwcGluZyA9IG1hcDsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcHBpbmc7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZU1hcHBpbmcoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW3NvdXJjZV0gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNGb3Ioc291cmNlLCBtYXApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==