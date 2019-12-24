var AddressPipe_1;
import * as tslib_1 from "tslib";
/*
* Defines a filter to convert url into an address display.
*/
import { Pipe } from '@angular/core';
let AddressPipe = AddressPipe_1 = class AddressPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            return new AddressPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    }
    transform(source, ...args) {
        const isLink = args.length ? args[0] : true;
        const hasTarget = args.length > 1 ? args[1] : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source, isLink, hasTarget);
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(this.addressFromString(item, isLink, hasTarget));
            });
            return result;
        }
    }
    addressFromString(source, isLink, hasTarget) {
        if (isLink) {
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
};
AddressPipe = AddressPipe_1 = tslib_1.__decorate([
    Pipe({ name: 'address' })
], AddressPipe);
export { AddressPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvYWRkcmVzcy9hZGRyZXNzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7RUFFRTtBQUNGLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELElBQWEsV0FBVyxtQkFBeEIsTUFBYSxXQUFXO0lBQ3BCLE1BQU0sQ0FBQyxvQkFBb0I7UUFDdkIsTUFBTSxDQUFDLEdBQUcsVUFBVSxPQUFZLEVBQUUsSUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVO1lBQ3hFLE9BQU8sSUFBSSxhQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRixDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxTQUFTLENBQUMsTUFBVyxFQUFFLEdBQUcsSUFBVztRQUNqQyxNQUFNLE1BQU0sR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ0gsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBQ08saUJBQWlCLENBQUMsTUFBVyxFQUFFLE1BQWUsRUFBRSxTQUFrQjtRQUN0RSxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksR0FBRyxHQUFHLDZCQUE2QjtnQkFDdkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRSxXQUFXLENBQUM7WUFDeEUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRS9CLE9BQU8sWUFBWSxHQUFHLEdBQUcsR0FBRyxLQUFLO2dCQUN6QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEMsdUVBQXVFO2dCQUN2RSxpRkFBaUY7Z0JBQ2pGLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUztnQkFDL0MseUJBQXlCLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7U0FDMUY7UUFDRCxPQUFPLG1HQUFtRztZQUNsRywrQkFBK0IsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVM7WUFDakYseUJBQXlCLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQztJQUM5RixDQUFDO0NBQ0osQ0FBQTtBQXJDWSxXQUFXO0lBRHZCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztHQUNiLFdBQVcsQ0FxQ3ZCO1NBckNZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBhZGRyZXNzIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FkZHJlc3MnIH0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdPT09J3RydWUnIDogdHJ1ZSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBpc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgY29uc3QgaGFzVGFyZ2V0ID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoc291cmNlLCBpc0xpbmssIGhhc1RhcmdldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoaXRlbSwgaXNMaW5rLCBoYXNUYXJnZXQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRyZXNzRnJvbVN0cmluZyhzb3VyY2U6IGFueSwgaXNMaW5rOiBib29sZWFuLCBoYXNUYXJnZXQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaXNMaW5rKSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgXHJcbiAgICAgICAgICAgIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2UuY2l0eSArIFwiLCBcIiArIHNvdXJjZS56aXBjb2RlICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIlxcXFxzK1wiLCBcIitcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gXCI8YSBocmVmPVxcJ1wiICsgdXJsICsgXCJcXCcgXCIgKyBcclxuICAgICAgICAgICAgICAgICAgICAoaGFzVGFyZ2V0ID8gXCJ0YXJnZXQ9J19ibGFuaydcIiA6IFwiXCIpICsgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGFzcz0nZ29vZ2xlLW1hcCc+PHNwYW4gY2xhc3M9J2ZhIGZhLW1hcC1tYXJrZXInIGFyaWEtaGlkZGVuPSd0cnVlJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj48c3BhbiBjbGFzcz0nYWRkcmVzcyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2Uuc3VpdGUgKyBcIjwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nYWRkcmVzcyc+IFwiICsgc291cmNlLmNpdHkgK1wiLCBcIiArIHNvdXJjZS56aXBjb2RlICsgXCI8L3NwYW4+PC9hPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nZ29vZ2xlLW1hcCc+PHNwYW4gY2xhc3M9J2ZhIGZhLW1hcC1tYXJrZXInIHN0eWxlPSdtYXJnaW46IDAgNXB4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L3NwYW4+PHNwYW4gY2xhc3M9J2FkZHJlc3MnPlwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2FkZHJlc3MnPiBcIiArIHNvdXJjZS5jaXR5ICtcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArIFwiPC9zcGFuPjwvc3Bhbj5cIjtcclxuICAgIH1cclxufVxyXG4iXX0=