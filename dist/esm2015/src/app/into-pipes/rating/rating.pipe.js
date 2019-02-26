/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class RatingPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            return new RatingPipe().transform(content, "");
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} multiStart
     * @return {?}
     */
    rateString(source, multiStart) {
        /** @type {?} */
        const value = parseInt(source, 10);
        /** @type {?} */
        const float = parseFloat(source);
        /** @type {?} */
        let x = "<span class='rating'>";
        if (multiStart) {
            for (let i = 0; i < value; i++) {
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
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const singleStar = args.length ? (args[0] === 'true') : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source, singleStar);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.rateString(item, singleStar));
            });
            return result;
        }
    }
}
RatingPipe.decorators = [
    { type: Pipe, args: [{ name: 'raiting' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU07Ozs7SUFDRixNQUFNLENBQUMsb0JBQW9COztRQUN2QixNQUFNLENBQUMsR0FBRyxVQUFXLE9BQVksRUFBRSxJQUFjLEVBQUUsUUFBYyxFQUFFLElBQVU7WUFDekUsTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNsRCxDQUFDO1FBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNaOzs7Ozs7SUFDRCxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQW1COztRQUNsQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztRQUNuQyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRWpDLElBQUksQ0FBQyxHQUFHLHVCQUF1QixDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRyxDQUFDO2dCQUM5QixDQUFDLElBQUkscURBQXFELENBQUE7YUFDN0Q7WUFDRCxFQUFFLENBQUMsQ0FBRSxLQUFLLEtBQUssS0FBTSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxJQUFJLDBEQUEwRCxDQUFBO2FBQ2xFO1NBQ0o7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLENBQUMsSUFBSSxxREFBcUQsQ0FBQTtTQUM3RDtRQUNELENBQUMsSUFBSSxrQ0FBa0MsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBRTdELE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDWjs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRSxHQUFHLElBQVc7O1FBQ2pDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDOUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFDSixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDbEQsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNqQjtLQUNKOzs7WUF2Q0osSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgcmFpdGluZyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyYWl0aW5nJyB9KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmF0aW5nUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHJhdGVTdHJpbmcoc291cmNlLCBtdWx0aVN0YXJ0OiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChzb3VyY2UsIDEwKTtcclxuICAgICAgICBjb25zdCBmbG9hdCA9IHBhcnNlRmxvYXQoc291cmNlKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSBcIjxzcGFuIGNsYXNzPSdyYXRpbmcnPlwiO1xyXG4gICAgICAgIGlmIChtdWx0aVN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKyApIHtcclxuICAgICAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZmxvYXQgIT09IHZhbHVlICkge1xyXG4gICAgICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICB4ICs9IFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdyYXRlLXZhbHVlJz5cIiArIHNvdXJjZSArIFwiPC9zcGFuPlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBzaW5nbGVTdGFyID0gYXJncy5sZW5ndGggPyAoYXJnc1swXSA9PT0gJ3RydWUnKSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF0ZVN0cmluZyhzb3VyY2UsIHNpbmdsZVN0YXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnJhdGVTdHJpbmcoaXRlbSwgc2luZ2xlU3RhcikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==