/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var MapPipe = /** @class */ (function () {
    function MapPipe() {
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9waXBlcy9tYXAucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQUtoRCwyQkFBUzs7Ozs7SUFBVCxVQUFVLElBQUksRUFBRSxHQUFHOztRQUNmLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRztZQUNULEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNKLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Ozs7O0lBQ0QsMkJBQVM7Ozs7SUFBVCxVQUFVLE9BQU87O1FBQ2IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQSxDQUFFLE9BQU8sQ0FBQyxJQUFLLENBQUMsQ0FBQyxDQUFDOztZQUNoQixJQUFNLEtBQUcsR0FBRSxFQUFFLENBQUM7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7O2dCQUMvQixJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixLQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BCLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxLQUFHLENBQUM7U0FDakI7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0tBQ2xCOzs7Ozs7SUFDRCwyQkFBUzs7Ozs7SUFBVCxVQUFVLE1BQVc7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7UUFFakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFakUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9DOztnQkEvQkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7a0JBTHJCOztTQU1hLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gdGFrZSBhIHN0cmluZyBhcyBhIGtleSBhbmQgcmV0dXJucyB2YWx1ZSBvZiBrZXkgZnJvbSB0aGUgZ2l2ZW4gbWFwIG9iamVjdC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbWFwJyB9KVxyXG5leHBvcnQgY2xhc3MgTWFwUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHZhbHVlc0ZvcihsaXN0LCBtYXApIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsaXN0Lm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXBba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWFwW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdlTWFwcGluZyhtYXBwaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbWFwID0gbWFwcGluZztcclxuICAgICAgICBpZiggbWFwcGluZy50cmltICkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPXt9O1xyXG4gICAgICAgICAgICBtYXBwaW5nLnNwbGl0KCcvJykubWFwKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGtleS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgbWFwW3hbMF1dID0geFsxXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1hcHBpbmcgPSBtYXA7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXBwaW5nO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2VNYXBwaW5nKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtzb3VyY2VdIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzRm9yKHNvdXJjZSwgbWFwKTtcclxuICAgIH1cclxufVxyXG4iXX0=