/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class RatingPipe {
    /**
     * @param {?} source
     * @return {?}
     */
    rateString(source) {
        /** @type {?} */
        const value = parseInt(source, 10);
        /** @type {?} */
        const float = parseFloat(source);
        /** @type {?} */
        let x = "<span class='rating'>";
        for (let i = 0; i < value; i++) {
            x += "<span class='fa fa-star' aria-hidden='true'></span>";
        }
        if (float !== value) {
            x += "<span class='fa fa-star-half' aria-hidden='true'></span>";
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
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.rateString(item));
            });
            return result;
        }
    }
}
RatingPipe.decorators = [
    { type: Pipe, args: [{ name: 'raiting' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9waXBlcy9yYXRpbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTTs7Ozs7SUFDRixVQUFVLENBQUMsTUFBTTs7UUFDYixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztRQUNuQyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRWpDLElBQUksQ0FBQyxHQUFHLHVCQUF1QixDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFHLENBQUM7WUFDOUIsQ0FBQyxJQUFJLHFEQUFxRCxDQUFBO1NBQzdEO1FBQ0QsRUFBRSxDQUFDLENBQUUsS0FBSyxLQUFLLEtBQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxJQUFJLDBEQUEwRCxDQUFBO1NBQ2xFO1FBQ0QsQ0FBQyxJQUFJLGtDQUFrQyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFFN0QsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNaOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBVyxFQUFFLEdBQUcsSUFBVztRQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ0osTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNqQjtLQUNKOzs7WUE1QkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgcmFpdGluZyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyYWl0aW5nJyB9KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgcmF0ZVN0cmluZyhzb3VyY2UpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHNvdXJjZSwgMTApO1xyXG4gICAgICAgIGNvbnN0IGZsb2F0ID0gcGFyc2VGbG9hdChzb3VyY2UpO1xyXG5cclxuICAgICAgICBsZXQgeCA9IFwiPHNwYW4gY2xhc3M9J3JhdGluZyc+XCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrICkge1xyXG4gICAgICAgICAgICB4ICs9IFwiPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBmbG9hdCAhPT0gdmFsdWUgKSB7XHJcbiAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3Rhci1oYWxmJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggKz0gXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3JhdGUtdmFsdWUnPlwiICsgc291cmNlICsgXCI8L3NwYW4+XCI7XHJcblxyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF0ZVN0cmluZyhzb3VyY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnJhdGVTdHJpbmcoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==