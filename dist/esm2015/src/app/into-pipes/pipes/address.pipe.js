/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class AddressPipe {
    /**
     * @param {?} source
     * @return {?}
     */
    addressFromString(source) {
        /** @type {?} */
        let url = "https://maps.google.com/?q=" +
            source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
        url = url.replace("\\s+", "+");
        return "<span class='address'><span>" + source.street + ", " + source.suite + "</span>" +
            "<span> " + source.city + ", " + source.zipcode + "</span>" +
            "</span> <a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</span></a>";
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.addressFromString(item));
            });
            return result;
        }
    }
}
AddressPipe.decorators = [
    { type: Pipe, args: [{ name: 'address' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvYWRkcmVzcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNOzs7OztJQUNGLGlCQUFpQixDQUFDLE1BQU07O1FBQ3BCLElBQUksR0FBRyxHQUFHLDZCQUE2QjtZQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFFLFdBQVcsQ0FBQztRQUN4RixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUztZQUN2RixTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTO1lBQzFELG9CQUFvQixHQUFHLEdBQUcsR0FBRyx1SUFBdUksQ0FBQztLQUN4Szs7Ozs7O0lBQ0QsU0FBUyxDQUFDLE1BQVcsRUFBRSxHQUFHLElBQVc7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ0osTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM3QyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2pCO0tBQ0o7OztZQXJCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gYWRkcmVzcyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhZGRyZXNzJyB9KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSkge1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2UuY2l0eSArIFwiLCBcIiArIHNvdXJjZS56aXBjb2RlICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2FkZHJlc3MnPjxzcGFuPlwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICBcIjxzcGFuPiBcIiArIHNvdXJjZS5jaXR5ICtcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArIFwiPC9zcGFuPlwiICsgXHJcbiAgICAgICAgXCI8L3NwYW4+IDxhIGhyZWY9XFwnXCIgKyB1cmwgKyBcIlxcJyBjbGFzcz0nZ29vZ2xlLW1hcCc+PHNwYW4gY2xhc3M9J2ZhIGZhLW1hcC1tYXJrZXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj48L2E+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19