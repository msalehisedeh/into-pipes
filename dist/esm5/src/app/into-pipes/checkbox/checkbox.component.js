import * as tslib_1 from "tslib";
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    CheckboxComponent.prototype.keyup = function (event) {
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    CheckboxComponent.prototype.click = function (event) {
        var _this = this;
        var input = event.target;
        event.stopPropagation();
        event.preventDefault();
        if (this.source === this.ideal) {
            this.source = this.original;
        }
        else {
            this.source = this.ideal;
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "check",
            item: this.data
        });
        if (this.useFont) {
            setTimeout(function () {
                if (_this.check) {
                    _this.check.nativeElement.focus();
                }
                if (_this.uncheck) {
                    _this.uncheck.nativeElement.focus();
                }
            }, 66);
        }
    };
    CheckboxComponent.prototype.transform = function (source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.useFont = args.length > 1 ? Boolean(args[1]) : false;
        this.onOff = args.length > 2 ? Boolean(args[2]) : false;
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
    };
    tslib_1.__decorate([
        ViewChild("check", { static: false })
    ], CheckboxComponent.prototype, "check", void 0);
    tslib_1.__decorate([
        ViewChild("uncheck", { static: false })
    ], CheckboxComponent.prototype, "uncheck", void 0);
    tslib_1.__decorate([
        Output("onIntoComponentChange")
    ], CheckboxComponent.prototype, "onIntoComponentChange", void 0);
    CheckboxComponent = tslib_1.__decorate([
        Component({
            selector: 'checkbox-component',
            template: "\n    <span *ngIf=\"useFont\" class=\"check-font\">\n      <span *ngIf=\"source === ideal\" \n          #check tabindex=\"0\" \n          class=\"fa\" \n          [class.fa-toggle-on]=\"onOff\" \n          [class.fa-check]=\"!onOff\" \n          (keyup)=\"keyup($event)\" \n          (click)=\"click($event)\"></span>\n      <span *ngIf=\"source !== ideal\"\n          #uncheck tabindex=\"0\" \n          class=\"fa\" \n          [class.fa-toggle-off]=\"onOff\" \n          [class.fa-close]=\"!onOff\" \n          (keyup)=\"keyup($event)\" \n          (click)=\"click($event)\"></span>\n    </span>\n    <input *ngIf=\"!useFont\" \n            type=\"checkbox\" \n            tabindex=\"0\" \n            [value]=\"source\" \n            [checked]=\"source===ideal ? true : null\" \n            (keyup)=\"keyup($event)\"\n            (click)=\"click($event)\" />\n    ",
            styles: ["\n      :host .check-font .fa{margin: 0 5px}\n      :host {display:table;float:left;min-height: 23px}\n      .check-font:hover{color: #fabdab;}\n      .check-font {cursor: pointer;}\n      "]
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}());
export { CheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBdUMzRTtJQXBDQTtRQXNERSwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBOEM3QyxDQUFDO0lBNUNDLGlDQUFLLEdBQUwsVUFBTSxLQUFVO1FBQ2QsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDZixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0QsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxLQUFVO1FBQWhCLGlCQTJCQztRQTFCQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQy9CO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDO2dCQUNULElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDcEM7WUFDSCxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7U0FDUDtJQUNILENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzFELENBQUM7SUFuREQ7UUFEQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO29EQUM5QjtJQUdOO1FBREMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztzREFDOUI7SUFHUjtRQURDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztvRUFDVztJQWxCaEMsaUJBQWlCO1FBcEM3QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxzMkJBd0JUO3FCQUVDLCtMQUtDO1NBRU4sQ0FBQztPQUNXLGlCQUFpQixDQWdFN0I7SUFBRCx3QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBaEVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaGVja2JveC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwidXNlRm9udFwiIGNsYXNzPVwiY2hlY2stZm9udFwiPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNvdXJjZSA9PT0gaWRlYWxcIiBcclxuICAgICAgICAgICNjaGVjayB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICAgIGNsYXNzPVwiZmFcIiBcclxuICAgICAgICAgIFtjbGFzcy5mYS10b2dnbGUtb25dPVwib25PZmZcIiBcclxuICAgICAgICAgIFtjbGFzcy5mYS1jaGVja109XCIhb25PZmZcIiBcclxuICAgICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgXHJcbiAgICAgICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzb3VyY2UgIT09IGlkZWFsXCJcclxuICAgICAgICAgICN1bmNoZWNrIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgICAgY2xhc3M9XCJmYVwiIFxyXG4gICAgICAgICAgW2NsYXNzLmZhLXRvZ2dsZS1vZmZdPVwib25PZmZcIiBcclxuICAgICAgICAgIFtjbGFzcy5mYS1jbG9zZV09XCIhb25PZmZcIiBcclxuICAgICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgXHJcbiAgICAgICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxpbnB1dCAqbmdJZj1cIiF1c2VGb250XCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiIFxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzb3VyY2U9PT1pZGVhbCA/IHRydWUgOiBudWxsXCIgXHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIiAvPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICBgXHJcbiAgICAgIDpob3N0IC5jaGVjay1mb250IC5mYXttYXJnaW46IDAgNXB4fVxyXG4gICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgIC5jaGVjay1mb250OmhvdmVye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgLmNoZWNrLWZvbnQge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBvcmlnaW5hbDogc3RyaW5nO1xyXG4gIGlkZWFsOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgb25PZmY6IGJvb2xlYW47XHJcbiAgdXNlRm9udDogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZChcImNoZWNrXCIsIHtzdGF0aWM6IGZhbHNlfSlcclxuICBjaGVjaztcclxuXHJcbiAgQFZpZXdDaGlsZChcInVuY2hlY2tcIiwge3N0YXRpYzogZmFsc2V9KVxyXG4gIHVuY2hlY2s7XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMub3JpZ2luYWw7XHJcblx0XHR9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuaWRlYWw7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICB0eXBlOiBcImNoZWNrXCIsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy51c2VGb250KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudW5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy51bmNoZWNrLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sNjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLmlkZWFsPSBhcmdzLmxlbmd0aCA/IFN0cmluZyhhcmdzWzBdKSA6IFwiXCI7XHJcbiAgICB0aGlzLnVzZUZvbnQ9IGFyZ3MubGVuZ3RoID4gMSA/IEJvb2xlYW4oYXJnc1sxXSkgOiBmYWxzZTtcclxuICAgIHRoaXMub25PZmY9IGFyZ3MubGVuZ3RoID4gMiA/IEJvb2xlYW4oYXJnc1syXSkgOiBmYWxzZTtcclxuICAgIHRoaXMuc291cmNlPSBTdHJpbmcoc291cmNlKTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9yaWdpbmFsPSB0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCA/IFwiXCIgOiBzb3VyY2U7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=