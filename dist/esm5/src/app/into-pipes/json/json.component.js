import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var JsonComponent = /** @class */ (function () {
    function JsonComponent() {
    }
    JsonComponent.prototype.transform = function (source, data, args) {
        this.source = source;
    };
    JsonComponent = tslib_1.__decorate([
        Component({
            selector: 'json-component',
            template: "<span class=\"json-view\" [textContent]=\"source | json\"></span>",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        .json-view {\n            display: inline-block;\n            float: left;\n            font-family: monospace;\n            padding: 5px;\n            white-space: pre-wrap;\n            unicode-bidi: embed;        \n        }\n        "]
        })
    ], JsonComponent);
    return JsonComponent;
}());
export { JsonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9qc29uL2pzb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQW9CeEQ7SUFBQTtJQVNBLENBQUM7SUFIRyxpQ0FBUyxHQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3hCLENBQUM7SUFSUSxhQUFhO1FBakJ6QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxtRUFBK0Q7cUJBRXJFLG9UQVVDO1NBRVIsQ0FBQztPQUNXLGFBQWEsQ0FTekI7SUFBRCxvQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqc29uLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwianNvbi12aWV3XCIgW3RleHRDb250ZW50XT1cInNvdXJjZSB8IGpzb25cIj48L3NwYW4+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgLmpzb24tdmlldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICB1bmljb2RlLWJpZGk6IGVtYmVkOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpzb25Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VcclxuICAgIH1cclxufVxyXG4iXX0=