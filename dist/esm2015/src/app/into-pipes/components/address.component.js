/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class AddressComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        /** @type {?} */
        const x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
        this.url = x.replace("\\s+", "+");
    }
}
AddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'address-component',
                template: `
    <span class="address">
        <span [textContent]="addr1"></span>
        <span [textContent]="addr2"></span>
    </span> 
    <a [href]="url" class="google-map">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="off-screen">View in google map</span>
    </a>
    `,
                styles: [`.address {display: inline-block;float: left;}
        .google-map {display: inline-block;float: left;}
        .fa {color: #f00;margin: 0 3px;}
        .off-screen {position: absolute;left: -999em;}
        :host a:hover .fa-map-marker{color: #fabdab;}
        `]
            }] }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2FkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQXdCeEQsTUFBTTs7Ozs7OztJQVNGLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7UUFFakQsTUFBTSxDQUFDLEdBQUcsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRSxXQUFXLENBQUM7UUFDekYsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNyQzs7O1lBckNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7OztLQVNUO3lCQUVHOzs7OztTQUtDO2FBRVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkcmVzcy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJhZGRyMVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiYWRkcjJcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+IFxyXG4gICAgPGEgW2hyZWZdPVwidXJsXCIgY2xhc3M9XCJnb29nbGUtbWFwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgLmFkZHJlc3Mge2Rpc3BsYXk6IGlubGluZS1ibG9jaztmbG9hdDogbGVmdDt9XHJcbiAgICAgICAgLmdvb2dsZS1tYXAge2Rpc3BsYXk6IGlubGluZS1ibG9jaztmbG9hdDogbGVmdDt9XHJcbiAgICAgICAgLmZhIHtjb2xvcjogI2YwMDttYXJnaW46IDAgM3B4O31cclxuICAgICAgICAub2ZmLXNjcmVlbiB7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IC05OTllbTt9XHJcbiAgICAgICAgOmhvc3QgYTpob3ZlciAuZmEtbWFwLW1hcmtlcntjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIGFkZHIxOiBzdHJpbmc7XHJcbiAgICBhZGRyMjogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmFkZHIxID0gc291cmNlLnN0cmVldCArICcsICcgKyBzb3VyY2Uuc3VpdGU7XHJcbiAgICAgICAgdGhpcy5hZGRyMiA9IHNvdXJjZS5jaXR5ICsgJywgJyArIHNvdXJjZS56aXBjb2RlO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT1cIiArIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyB0aGlzLmFkZHIyICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgIHRoaXMudXJsID0geC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuICAgIH1cclxufVxyXG4iXX0=