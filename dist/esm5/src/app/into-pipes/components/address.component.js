/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    AddressComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        /** @type {?} */
        var x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
        this.url = x.replace("\\s+", "+");
    };
    AddressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'address-component',
                    template: "\n    <span class=\"address\">\n        <span [textContent]=\"addr1\"></span>\n        <span [textContent]=\"addr2\"></span>\n    </span> \n    <a [href]=\"url\" class=\"google-map\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"off-screen\">View in google map</span>\n    </a>\n    ",
                    styles: [".address {display: inline-block;float: left;}\n        .google-map {display: inline-block;float: left;}\n        .fa {color: #f00;margin: 0 3px;}\n        .off-screen {position: absolute;left: -999em;}\n        :host a:hover .fa-map-marker{color: #fabdab;}\n        "]
                }] }
    ];
    return AddressComponent;
}());
export { AddressComponent };
if (false) {
    /** @type {?} */
    AddressComponent.prototype.url;
    /** @type {?} */
    AddressComponent.prototype.source;
    /** @type {?} */
    AddressComponent.prototype.id;
    /** @type {?} */
    AddressComponent.prototype.name;
    /** @type {?} */
    AddressComponent.prototype.addr1;
    /** @type {?} */
    AddressComponent.prototype.addr2;
    /** @type {?} */
    AddressComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2FkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQWlDcEQsb0NBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7O1FBRWpELElBQU0sQ0FBQyxHQUFHLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUUsV0FBVyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDckM7O2dCQXJDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDhVQVNUOzZCQUVHLDRRQUtDO2lCQUVSOzsyQkF2QkQ7O1NBd0JhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZGRyZXNzLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCI+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImFkZHIxXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJhZGRyMlwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj4gXHJcbiAgICA8YSBbaHJlZl09XCJ1cmxcIiBjbGFzcz1cImdvb2dsZS1tYXBcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+VmlldyBpbiBnb29nbGUgbWFwPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGAuYWRkcmVzcyB7ZGlzcGxheTogaW5saW5lLWJsb2NrO2Zsb2F0OiBsZWZ0O31cclxuICAgICAgICAuZ29vZ2xlLW1hcCB7ZGlzcGxheTogaW5saW5lLWJsb2NrO2Zsb2F0OiBsZWZ0O31cclxuICAgICAgICAuZmEge2NvbG9yOiAjZjAwO21hcmdpbjogMCAzcHg7fVxyXG4gICAgICAgIC5vZmYtc2NyZWVuIHtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogLTk5OWVtO31cclxuICAgICAgICA6aG9zdCBhOmhvdmVyIC5mYS1tYXAtbWFya2Vye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgYWRkcjE6IHN0cmluZztcclxuICAgIGFkZHIyOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuYWRkcjEgPSBzb3VyY2Uuc3RyZWV0ICsgJywgJyArIHNvdXJjZS5zdWl0ZTtcclxuICAgICAgICB0aGlzLmFkZHIyID0gc291cmNlLmNpdHkgKyAnLCAnICsgc291cmNlLnppcGNvZGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHRoaXMuYWRkcjIgK1wiJmllPVVURi04XCI7XHJcbiAgICAgICAgdGhpcy51cmwgPSB4LnJlcGxhY2UoXCJcXFxccytcIiwgXCIrXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==