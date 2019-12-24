import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var SpanComponent = /** @class */ (function () {
    function SpanComponent() {
    }
    SpanComponent.prototype.transform = function (source, data, args) {
        this.source = source;
    };
    SpanComponent = tslib_1.__decorate([
        Component({
            selector: 'span-component',
            template: "<span [textContent]=\"source\"></span>",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        "]
        })
    ], SpanComponent);
    return SpanComponent;
}());
export { SpanComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9zcGFuL3NwYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQVl4RDtJQUFBO0lBU0EsQ0FBQztJQUhHLGlDQUFTLEdBQVQsVUFBVSxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQVJRLGFBQWE7UUFUekIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsd0NBQXNDO3FCQUU1Qyx1RUFFQztTQUVSLENBQUM7T0FDVyxhQUFhLENBU3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3Bhbi1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwYW5Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VcclxuICAgIH1cclxufVxyXG4iXX0=