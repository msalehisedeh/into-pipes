/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var AddressPipe = /** @class */ (function () {
    function AddressPipe() {
    }
    /**
     * @param {?} source
     * @return {?}
     */
    AddressPipe.prototype.addressFromString = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var url = "https://maps.google.com/?q=" +
            source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
        url = url.replace("\\s+", "+");
        return "<a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</span><span class='address'>" + source.street + ", " + source.suite + "</span>" +
            "<span class='address'> " + source.city + ", " + source.zipcode + "</span></a>";
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    AddressPipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source);
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.addressFromString(item));
            });
            return result_1;
        }
    };
    AddressPipe.decorators = [
        { type: Pipe, args: [{ name: 'address' },] }
    ];
    return AddressPipe;
}());
export { AddressPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvYWRkcmVzcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUFJaEQsdUNBQWlCOzs7O0lBQWpCLFVBQWtCLE1BQU07O1FBQ3BCLElBQUksR0FBRyxHQUFHLDZCQUE2QjtZQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFFLFdBQVcsQ0FBQztRQUN4RixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcseUpBQXlKLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTO1lBQ3ZPLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0tBQ2xGOzs7Ozs7SUFDRCwrQkFBUzs7Ozs7SUFBVCxVQUFVLE1BQVc7UUFBckIsaUJBVUM7UUFWc0IsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ0osSUFBTSxRQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUNaLFFBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0MsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFFBQU0sQ0FBQztTQUNqQjtLQUNKOztnQkFwQkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7c0JBTHpCOztTQU1hLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBhZGRyZXNzIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FkZHJlc3MnIH0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgYWRkcmVzc0Zyb21TdHJpbmcoc291cmNlKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9XCIgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5jaXR5ICsgXCIsIFwiICsgc291cmNlLnppcGNvZGUgK1wiJmllPVVURi04XCI7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJcXFxccytcIiwgXCIrXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gXCI8YSBocmVmPVxcJ1wiICsgdXJsICsgXCJcXCcgY2xhc3M9J2dvb2dsZS1tYXAnPjxzcGFuIGNsYXNzPSdmYSBmYS1tYXAtbWFya2VyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPjxzcGFuIGNsYXNzPSdvZmYtc2NyZWVuJz5WaWV3IGluIGdvb2dsZSBtYXA8L3NwYW4+PHNwYW4gY2xhc3M9J2FkZHJlc3MnPlwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICBcIjxzcGFuIGNsYXNzPSdhZGRyZXNzJz4gXCIgKyBzb3VyY2UuY2l0eSArXCIsIFwiICsgc291cmNlLnppcGNvZGUgKyBcIjwvc3Bhbj48L2E+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuYWRkcmVzc0Zyb21TdHJpbmcoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19