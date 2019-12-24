import * as tslib_1 from "tslib";
/*
* Defines a filter to convert url into a raiting display.
*/
import { Pipe } from '@angular/core';
var RatingPipe = /** @class */ (function () {
    function RatingPipe() {
    }
    RatingPipe_1 = RatingPipe;
    RatingPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            return new RatingPipe_1().transform(content, "");
        };
        return x;
    };
    RatingPipe.prototype.rateString = function (source, multiStart) {
        var value = parseInt(source, 10);
        var float = parseFloat(source);
        var x = "<span class='rating'>";
        if (multiStart) {
            for (var i = 0; i < value; i++) {
                x += "<span class='fa fa-star' aria-hidden='true'></span>";
            }
            if (float !== value) {
                x += "<span class='fa fa-star-half' aria-hidden='true'></span>";
            }
        }
        else {
            x += "<span class='fa fa-star' aria-hidden='true'></span>";
        }
        x += "</span><span class='rate-value'>" + source + "</span>";
        return x;
    };
    RatingPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var singleStar = args.length ? (args[0] === 'true') : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source, singleStar);
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.rateString(item, singleStar));
            });
            return result_1;
        }
    };
    var RatingPipe_1;
    RatingPipe = RatingPipe_1 = tslib_1.__decorate([
        Pipe({ name: 'raiting' })
    ], RatingPipe);
    return RatingPipe;
}());
export { RatingPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztFQUVFO0FBQ0YsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFBQTtJQXVDQSxDQUFDO21CQXZDWSxVQUFVO0lBQ1osK0JBQW9CLEdBQTNCO1FBQ0ksSUFBTSxDQUFDLEdBQUcsVUFBVyxPQUFZLEVBQUUsSUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVO1lBQ3pFLE9BQU8sSUFBSSxZQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELCtCQUFVLEdBQVYsVUFBVyxNQUFNLEVBQUUsVUFBbUI7UUFDbEMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLEdBQUcsdUJBQXVCLENBQUM7UUFDaEMsSUFBSSxVQUFVLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFHO2dCQUM3QixDQUFDLElBQUkscURBQXFELENBQUE7YUFDN0Q7WUFDRCxJQUFLLEtBQUssS0FBSyxLQUFLLEVBQUc7Z0JBQ25CLENBQUMsSUFBSSwwREFBMEQsQ0FBQTthQUNsRTtTQUNKO2FBQU07WUFDSCxDQUFDLElBQUkscURBQXFELENBQUE7U0FDN0Q7UUFDRCxDQUFDLElBQUksa0NBQWtDLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUU3RCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsTUFBVztRQUFyQixpQkFXQztRQVhzQixjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNqQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNILElBQU0sUUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtnQkFDWixRQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLFFBQU0sQ0FBQztTQUNqQjtJQUNMLENBQUM7O0lBdENRLFVBQVU7UUFEdEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO09BQ2IsVUFBVSxDQXVDdEI7SUFBRCxpQkFBQztDQUFBLEFBdkNELElBdUNDO1NBdkNZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhIHJhaXRpbmcgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncmFpdGluZycgfSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJhdGluZ1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICByYXRlU3RyaW5nKHNvdXJjZSwgbXVsdGlTdGFydDogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgY29uc3QgZmxvYXQgPSBwYXJzZUZsb2F0KHNvdXJjZSk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gXCI8c3BhbiBjbGFzcz0ncmF0aW5nJz5cIjtcclxuICAgICAgICBpZiAobXVsdGlTdGFydCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKysgKSB7XHJcbiAgICAgICAgICAgICAgICB4ICs9IFwiPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGZsb2F0ICE9PSB2YWx1ZSApIHtcclxuICAgICAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3Rhci1oYWxmJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB4ICs9IFwiPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgeCArPSBcIjwvc3Bhbj48c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZSc+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2luZ2xlU3RhciA9IGFyZ3MubGVuZ3RoID8gKGFyZ3NbMF0gPT09ICd0cnVlJykgOiBmYWxzZTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhdGVTdHJpbmcoc291cmNlLCBzaW5nbGVTdGFyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5yYXRlU3RyaW5nKGl0ZW0sIHNpbmdsZVN0YXIpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=