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
                    styles: [".address {\n            display: inline-block;\n            float: left;\n        }\n        .google-map {\n            display: inline-block;\n            float: left;\n        }\n        .fa {\n            color: #f00;\n            margin: 0 3px;\n        }\n        .off-screen {\n            position: absolute;\n            left: -999em;\n        }\n        "]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2FkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQTRDcEQsb0NBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7O1FBRWpELElBQU0sQ0FBQyxHQUFHLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUUsV0FBVyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDckM7O2dCQWhESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDhVQVNUOzZCQUVHLDZXQWdCQztpQkFFUjs7MkJBbENEOztTQW1DYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkcmVzcy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJhZGRyMVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiYWRkcjJcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+IFxyXG4gICAgPGEgW2hyZWZdPVwidXJsXCIgY2xhc3M9XCJnb29nbGUtbWFwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ29vZ2xlLW1hcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAub2ZmLXNjcmVlbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTk5OWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgYWRkcjE6IHN0cmluZztcclxuICAgIGFkZHIyOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuYWRkcjEgPSBzb3VyY2Uuc3RyZWV0ICsgJywgJyArIHNvdXJjZS5zdWl0ZTtcclxuICAgICAgICB0aGlzLmFkZHIyID0gc291cmNlLmNpdHkgKyAnLCAnICsgc291cmNlLnppcGNvZGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHRoaXMuYWRkcjIgK1wiJmllPVVURi04XCI7XHJcbiAgICAgICAgdGhpcy51cmwgPSB4LnJlcGxhY2UoXCJcXFxccytcIiwgXCIrXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==