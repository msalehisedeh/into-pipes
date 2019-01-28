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
                    template: "\n    <a [href]=\"url\" class=\"google-map\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"off-screen\">View in google map</span>\n        <span class=\"address\" [textContent]=\"addr1\"></span>\n        <span class=\"address\" [textContent]=\"addr2\"></span>\n    </a>\n    ",
                    styles: [".address {float: left;margin-right: 4px;}\n        .google-map {float: left;margin-right: 4px;}\n        .fa {float:left;color: #f00;margin: 0 3px;}\n        .off-screen {position: absolute;left: -999em;}\n        :host a:hover .fa-map-marker{color: #fabdab;}\n        :host span{float-left;}\n        :host {display: table;float:left;min-height: 23px}\n        "]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2FkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQWlDcEQsb0NBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7O1FBRWpELElBQU0sQ0FBQyxHQUFHLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUUsV0FBVyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDckM7O2dCQXJDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHNVQU9UOzZCQUVHLDRXQU9DO2lCQUVSOzsyQkF2QkQ7O1NBd0JhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZGRyZXNzLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgW2hyZWZdPVwidXJsXCIgY2xhc3M9XCJnb29nbGUtbWFwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIiBbdGV4dENvbnRlbnRdPVwiYWRkcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgW3RleHRDb250ZW50XT1cImFkZHIyXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGAuYWRkcmVzcyB7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXJpZ2h0OiA0cHg7fVxyXG4gICAgICAgIC5nb29nbGUtbWFwIHtmbG9hdDogbGVmdDttYXJnaW4tcmlnaHQ6IDRweDt9XHJcbiAgICAgICAgLmZhIHtmbG9hdDpsZWZ0O2NvbG9yOiAjZjAwO21hcmdpbjogMCAzcHg7fVxyXG4gICAgICAgIC5vZmYtc2NyZWVuIHtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogLTk5OWVtO31cclxuICAgICAgICA6aG9zdCBhOmhvdmVyIC5mYS1tYXAtbWFya2Vye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICA6aG9zdCBzcGFue2Zsb2F0LWxlZnQ7fVxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OiB0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIGFkZHIxOiBzdHJpbmc7XHJcbiAgICBhZGRyMjogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmFkZHIxID0gc291cmNlLnN0cmVldCArICcsICcgKyBzb3VyY2Uuc3VpdGU7XHJcbiAgICAgICAgdGhpcy5hZGRyMiA9IHNvdXJjZS5jaXR5ICsgJywgJyArIHNvdXJjZS56aXBjb2RlO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT1cIiArIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyB0aGlzLmFkZHIyICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgIHRoaXMudXJsID0geC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuICAgIH1cclxufVxyXG4iXX0=