/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var code = event.which;
        if (code === 13) {
            this.renderer.invokeElementMethod(event.target, "click");
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
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
            item: this.data
        });
        if (this.useFont) {
            setTimeout(function () {
                if (_this.check) {
                    _this.renderer.invokeElementMethod(_this.check.nativeElement, "focus");
                }
                if (_this.uncheck) {
                    _this.renderer.invokeElementMethod(_this.uncheck.nativeElement, "focus");
                }
            }, 66);
        }
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    CheckboxComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.useFont = args.length > 1 ? Boolean(args[1]) : false;
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'checkbox-component',
                    template: "\n    <span *ngIf=\"useFont\" class=\"check-font\">\n      <span *ngIf=\"source === ideal\" #check tabindex=\"0\" class=\"fa fa-check\" (keyup)=\"keyup($event)\" (click)=\"click($event)\"></span>\n      <span *ngIf=\"source !== ideal\" #uncheck tabindex=\"0\" class=\"fa fa-close\" (keyup)=\"keyup($event)\" (click)=\"click($event)\"></span>\n    </span>\n    <input *ngIf=\"!useFont\" \n            type=\"checkbox\" \n            tabindex=\"0\" \n            [value]=\"source\" \n            [checked]=\"source===ideal ? true : null\" \n            (keyup)=\"keyup($event)\"\n            (click)=\"click($event)\" />\n    ",
                    styles: ["\n        .check-font:hover{color: #fabdab;}\n        .check-font {cursor: pointer;}\n        "]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    CheckboxComponent.propDecorators = {
        check: [{ type: ViewChild, args: ["check",] }],
        uncheck: [{ type: ViewChild, args: ["uncheck",] }],
        onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.data;
    /** @type {?} */
    CheckboxComponent.prototype.source;
    /** @type {?} */
    CheckboxComponent.prototype.original;
    /** @type {?} */
    CheckboxComponent.prototype.ideal;
    /** @type {?} */
    CheckboxComponent.prototype.id;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.useFont;
    /** @type {?} */
    CheckboxComponent.prototype.check;
    /** @type {?} */
    CheckboxComponent.prototype.uncheck;
    /** @type {?} */
    CheckboxComponent.prototype.onIntoComponentChange;
    /** @type {?} */
    CheckboxComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTRDbkYsMkJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7cUNBRmQsSUFBSSxZQUFZLEVBQUU7S0FFQTs7Ozs7SUFFMUMsaUNBQUs7Ozs7SUFBTCxVQUFNLEtBQUs7O1FBQ1QsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDNUQ7S0FDQTs7Ozs7SUFFRCxpQ0FBSzs7OztJQUFMLFVBQU0sS0FBSztRQUFYLGlCQTBCQzs7UUF6QkMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQy9CO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakIsVUFBVSxDQUFDO2dCQUNULEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3RFO2dCQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUN4RTthQUNGLEVBQUMsRUFBRSxDQUFDLENBQUM7U0FDUDtLQUNGOzs7Ozs7O0lBRUQscUNBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQ3pEOztnQkFwRkYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxrbkJBWVQ7NkJBRUcsZ0dBR0M7aUJBRVI7Ozs7Z0JBeEI4QixRQUFROzs7d0JBbUNwQyxTQUFTLFNBQUMsT0FBTzswQkFHakIsU0FBUyxTQUFDLFNBQVM7d0NBR25CLE1BQU0sU0FBQyx1QkFBdUI7OzRCQXpDakM7O1NBeUJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NoZWNrYm94LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJ1c2VGb250XCIgY2xhc3M9XCJjaGVjay1mb250XCI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwic291cmNlID09PSBpZGVhbFwiICNjaGVjayB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZhIGZhLWNoZWNrXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzb3VyY2UgIT09IGlkZWFsXCIgI3VuY2hlY2sgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYSBmYS1jbG9zZVwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8aW5wdXQgKm5nSWY9XCIhdXNlRm9udFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcclxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIiBcclxuICAgICAgICAgICAgW2NoZWNrZWRdPVwic291cmNlPT09aWRlYWwgPyB0cnVlIDogbnVsbFwiIFxyXG4gICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgLz5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgLmNoZWNrLWZvbnQ6aG92ZXJ7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIC5jaGVjay1mb250IHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBvcmlnaW5hbDogc3RyaW5nO1xyXG4gIGlkZWFsOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdXNlRm9udDogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZChcImNoZWNrXCIpXHJcbiAgY2hlY2s7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJ1bmNoZWNrXCIpXHJcbiAgdW5jaGVjaztcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gIGtleXVwKGV2ZW50KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKGV2ZW50LnRhcmdldCwgXCJjbGlja1wiKTtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGNsaWNrKGV2ZW50KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5zb3VyY2UgPT09IHRoaXMuaWRlYWwpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLm9yaWdpbmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmlkZWFsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnVzZUZvbnQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2spIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmNoZWNrLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnVuY2hlY2spIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnVuY2hlY2submF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sNjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLmlkZWFsPSBhcmdzLmxlbmd0aCA/IFN0cmluZyhhcmdzWzBdKSA6IFwiXCI7XHJcbiAgICB0aGlzLnVzZUZvbnQ9IGFyZ3MubGVuZ3RoID4gMSA/IEJvb2xlYW4oYXJnc1sxXSkgOiBmYWxzZTtcclxuICAgIHRoaXMuc291cmNlPSBTdHJpbmcoc291cmNlKTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9yaWdpbmFsPSB0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCA/IFwiXCIgOiBzb3VyY2U7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=