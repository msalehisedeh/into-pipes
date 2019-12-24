import * as tslib_1 from "tslib";
/*
* Defines a filter to convert url into an image display.
* if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned.
*/
import { Pipe } from '@angular/core';
var AudioPipe = /** @class */ (function () {
    function AudioPipe() {
    }
    AudioPipe_1 = AudioPipe;
    AudioPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            return new AudioPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    };
    AudioPipe.prototype.stringToAudio = function (source) {
        return "<audio src=\'" + source + "\' controls=\'true\' />";
    };
    AudioPipe.prototype.arrayToAudio = function (sources) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToAudio(source));
        });
        return result;
    };
    AudioPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToAudio(source);
        }
        return this.arrayToAudio(source);
    };
    var AudioPipe_1;
    AudioPipe = AudioPipe_1 = tslib_1.__decorate([
        Pipe({ name: 'audio' })
    ], AudioPipe);
    return AudioPipe;
}());
export { AudioPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2F1ZGlvL2F1ZGlvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7RUFHRTtBQUNGLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BEO0lBQUE7SUF3QkEsQ0FBQztrQkF4QlksU0FBUztJQUNYLDhCQUFvQixHQUEzQjtRQUNJLElBQU0sQ0FBQyxHQUFHLFVBQVUsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTtZQUN4RSxPQUFPLElBQUksV0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLE1BQVc7UUFDckIsT0FBTyxlQUFlLEdBQUMsTUFBTSxHQUFDLHlCQUF5QixDQUFDO0lBQzVELENBQUM7SUFDRCxnQ0FBWSxHQUFaLFVBQWEsT0FBWTtRQUF6QixpQkFNQztRQUxHLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNELDZCQUFTLEdBQVQsVUFBVSxNQUFXO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDbEMsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDM0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O0lBdkJRLFNBQVM7UUFEckIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO09BQ1gsU0FBUyxDQXdCckI7SUFBRCxnQkFBQztDQUFBLEFBeEJELElBd0JDO1NBeEJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBpbWFnZSBkaXNwbGF5LiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYXVkaW8nIH0pXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXVkaW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV09PT0ndHJ1ZScgOiB0cnVlKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpbmdUb0F1ZGlvKHNvdXJjZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGF1ZGlvIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgY29udHJvbHM9XFwndHJ1ZVxcJyAvPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb0F1ZGlvKHNvdXJjZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb0F1ZGlvKHNvdXJjZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9BdWRpbyhzb3VyY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvQXVkaW8oc291cmNlKTtcclxuICAgIH1cclxufVxyXG4iXX0=