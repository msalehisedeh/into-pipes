import * as tslib_1 from "tslib";
/*
* Defines a filter to append character(s) to a content.
*/
import { Pipe } from '@angular/core';
var AppendPipe = /** @class */ (function () {
    function AppendPipe() {
    }
    AppendPipe_1 = AppendPipe;
    AppendPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // append:something
            return new AppendPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    };
    AppendPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(item + key);
            });
            return result_1;
        }
    };
    var AppendPipe_1;
    AppendPipe = AppendPipe_1 = tslib_1.__decorate([
        Pipe({ name: 'append' })
    ], AppendPipe);
    return AppendPipe;
}());
export { AppendPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21tb24vYXBwZW5kLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztFQUVFO0FBQ0YsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFBQTtJQW9CQSxDQUFDO21CQXBCWSxVQUFVO0lBQ1osK0JBQW9CLEdBQTNCO1FBQ0ksSUFBTSxDQUFDLEdBQUcsVUFBVSxPQUFZLEVBQUUsSUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVO1lBQ3hFLG1CQUFtQjtZQUNuQixPQUFPLElBQUksWUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCw4QkFBUyxHQUFULFVBQVUsTUFBVztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ2pDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUN2QjthQUFNO1lBQ0gsSUFBTSxRQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUNaLFFBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxRQUFNLENBQUM7U0FDakI7SUFDTCxDQUFDOztJQW5CUSxVQUFVO1FBRHRCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztPQUNaLFVBQVUsQ0FvQnRCO0lBQUQsaUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGFwcGVuZCBjaGFyYWN0ZXIocykgdG8gYSBjb250ZW50LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhcHBlbmQnIH0pXHJcbmV4cG9ydCBjbGFzcyBBcHBlbmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQ6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBwZW5kUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UgKyBrZXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0gKyBrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==