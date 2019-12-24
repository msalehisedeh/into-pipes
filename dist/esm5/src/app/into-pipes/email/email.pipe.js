import * as tslib_1 from "tslib";
/*
* Defines a filter to convert url into an email display.
*/
import { Pipe } from '@angular/core';
var EmailPipe = /** @class */ (function () {
    function EmailPipe() {
    }
    EmailPipe_1 = EmailPipe;
    EmailPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // email
            return new EmailPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    };
    EmailPipe.prototype.emailFromString = function (source, isLink) {
        var x;
        if (isLink) {
            x = "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
        }
        else {
            x = "<span><span class='fa fa-envelope' style='margin: 0 5px' aria-hidden='true'></span><span>" + source + "</span></span>";
        }
        return x;
    };
    EmailPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var isLink = args.length ? args[0] : true;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source, isLink);
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.emailFromString(item, isLink));
            });
            return result_1;
        }
    };
    var EmailPipe_1;
    EmailPipe = EmailPipe_1 = tslib_1.__decorate([
        Pipe({ name: 'email' })
    ], EmailPipe);
    return EmailPipe;
}());
export { EmailPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2VtYWlsL2VtYWlsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztFQUVFO0FBQ0YsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQ7SUFBQTtJQThCQSxDQUFDO2tCQTlCWSxTQUFTO0lBQ1gsOEJBQW9CLEdBQTNCO1FBQ0ksSUFBTSxDQUFDLEdBQUcsVUFBVyxPQUFZLEVBQUUsSUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVO1lBQ3pFLFFBQVE7WUFDUixPQUFPLElBQUksV0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekYsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixNQUFjLEVBQUUsTUFBZTtRQUMzQyxJQUFJLENBQVMsQ0FBQztRQUNkLElBQUksTUFBTSxFQUFFO1lBQ1IsQ0FBQyxHQUFHLG1CQUFtQixHQUFDLE1BQU0sR0FBQyxtRUFBbUUsR0FBRyxNQUFNLEdBQUcsYUFBYSxDQUFDO1NBQy9IO2FBQU07WUFDSCxDQUFDLEdBQUcsMkZBQTJGLEdBQUcsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1NBQy9IO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsNkJBQVMsR0FBVCxVQUFVLE1BQVc7UUFBckIsaUJBV0M7UUFYc0IsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDakMsSUFBTSxNQUFNLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0gsSUFBTSxRQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUNaLFFBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sUUFBTSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQzs7SUE3QlEsU0FBUztRQURyQixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7T0FDWCxTQUFTLENBOEJyQjtJQUFELGdCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E5QlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGVtYWlsIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2VtYWlsJyB9KVxyXG5leHBvcnQgY2xhc3MgRW1haWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gZW1haWxcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbWFpbFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXT09PSd0cnVlJyA6IHRydWUpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIGVtYWlsRnJvbVN0cmluZyhzb3VyY2U6IHN0cmluZywgaXNMaW5rOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHg6IHN0cmluZztcclxuICAgICAgICBpZiAoaXNMaW5rKSB7XHJcbiAgICAgICAgICAgIHggPSBcIjxhIGhyZWY9XFwnbWFpbHRvOlwiK3NvdXJjZStcIlxcJyA+PHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPjxzcGFuPlwiICsgc291cmNlICsgXCI8L3NwYW4+PC9hPlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHggPSBcIjxzcGFuPjxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgc3R5bGU9J21hcmdpbjogMCA1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj48L3NwYW4+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgaXNMaW5rPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiB0cnVlO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1haWxGcm9tU3RyaW5nKHNvdXJjZSwgaXNMaW5rKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5lbWFpbEZyb21TdHJpbmcoaXRlbSwgaXNMaW5rKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIl19