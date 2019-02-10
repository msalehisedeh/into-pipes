/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class AddressPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            return new AddressPipe().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const isLink = args.length ? args[0] : true;
        /** @type {?} */
        const hasTarget = args.length > 1 ? args[1] : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source, isLink, hasTarget);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.addressFromString(item, isLink, hasTarget));
            });
            return result;
        }
    }
    /**
     * @param {?} source
     * @param {?} isLink
     * @param {?} hasTarget
     * @return {?}
     */
    addressFromString(source, isLink, hasTarget) {
        if (isLink) {
            /** @type {?} */
            let url = "https://maps.google.com/?q=" +
                source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
            url = url.replace("\\s+", "+");
            return "<a href=\'" + url + "\' " +
                (hasTarget ? "target='_blank'" : "") +
                "class='google-map'><span class='fa fa-map-marker' aria-hidden='true'>" +
                "</span><span class='off-screen'>View in google map</span><span class='address'>" +
                source.street + ", " + source.suite + "</span>" +
                "<span class='address'> " + source.city + ", " + source.zipcode + "</span></a>";
        }
        return "<span class='google-map'><span class='fa fa-map-marker' style='margin: 0 5px' aria-hidden='true'>" +
            "</span><span class='address'>" + source.street + ", " + source.suite + "</span>" +
            "<span class='address'> " + source.city + ", " + source.zipcode + "</span></span>";
    }
}
AddressPipe.decorators = [
    { type: Pipe, args: [{ name: 'address' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvYWRkcmVzcy9hZGRyZXNzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU07Ozs7SUFDRixNQUFNLENBQUMsb0JBQW9COztRQUN2QixNQUFNLENBQUMsR0FBRyxVQUFVLE9BQVksRUFBRSxJQUFjLEVBQUUsUUFBYyxFQUFFLElBQVU7WUFDeEUsTUFBTSxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUYsQ0FBQztRQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDWjs7Ozs7O0lBQ0QsU0FBUyxDQUFDLE1BQVcsRUFBRSxHQUFHLElBQVc7O1FBQ2pDLE1BQU0sTUFBTSxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztRQUMzQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUQ7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFDSixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDaEUsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNqQjtLQUNKOzs7Ozs7O0lBQ08saUJBQWlCLENBQUMsTUFBVyxFQUFFLE1BQWUsRUFBRSxTQUFrQjtRQUN0RSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztZQUNULElBQUksR0FBRyxHQUFHLDZCQUE2QjtnQkFDdkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRSxXQUFXLENBQUM7WUFDeEUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLEtBQUs7Z0JBQ3pCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNwQyx1RUFBdUU7Z0JBQ3ZFLGlGQUFpRjtnQkFDakYsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTO2dCQUMvQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFFLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUMxRjtRQUNELE1BQU0sQ0FBQyxtR0FBbUc7WUFDbEcsK0JBQStCLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTO1lBQ2pGLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7Ozs7WUFwQ2pHLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBhZGRyZXNzIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FkZHJlc3MnIH0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdPT09J3RydWUnIDogdHJ1ZSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBpc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgY29uc3QgaGFzVGFyZ2V0ID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoc291cmNlLCBpc0xpbmssIGhhc1RhcmdldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoaXRlbSwgaXNMaW5rLCBoYXNUYXJnZXQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRyZXNzRnJvbVN0cmluZyhzb3VyY2U6IGFueSwgaXNMaW5rOiBib29sZWFuLCBoYXNUYXJnZXQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaXNMaW5rKSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgXHJcbiAgICAgICAgICAgIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2UuY2l0eSArIFwiLCBcIiArIHNvdXJjZS56aXBjb2RlICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIlxcXFxzK1wiLCBcIitcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gXCI8YSBocmVmPVxcJ1wiICsgdXJsICsgXCJcXCcgXCIgKyBcclxuICAgICAgICAgICAgICAgICAgICAoaGFzVGFyZ2V0ID8gXCJ0YXJnZXQ9J19ibGFuaydcIiA6IFwiXCIpICsgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzcz0nZ29vZ2xlLW1hcCc+PHNwYW4gY2xhc3M9J2ZhIGZhLW1hcC1tYXJrZXInIGFyaWEtaGlkZGVuPSd0cnVlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj48c3BhbiBjbGFzcz0nYWRkcmVzcyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2Uuc3VpdGUgKyBcIjwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nYWRkcmVzcyc+IFwiICsgc291cmNlLmNpdHkgK1wiLCBcIiArIHNvdXJjZS56aXBjb2RlICsgXCI8L3NwYW4+PC9hPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nZ29vZ2xlLW1hcCc+PHNwYW4gY2xhc3M9J2ZhIGZhLW1hcC1tYXJrZXInIHN0eWxlPSdtYXJnaW46IDAgNXB4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L3NwYW4+PHNwYW4gY2xhc3M9J2FkZHJlc3MnPlwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2FkZHJlc3MnPiBcIiArIHNvdXJjZS5jaXR5ICtcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArIFwiPC9zcGFuPjwvc3Bhbj5cIjtcclxuICAgIH1cclxufVxyXG4iXX0=