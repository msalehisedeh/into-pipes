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
                    styles: ["\n        .check-font {\n          cursor: pointer;\n        }\n        "]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTZDbkYsMkJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7cUNBRmQsSUFBSSxZQUFZLEVBQUU7S0FFQTs7Ozs7SUFFMUMsaUNBQUs7Ozs7SUFBTCxVQUFNLEtBQUs7O1FBQ1QsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDNUQ7S0FDQTs7Ozs7SUFFRCxpQ0FBSzs7OztJQUFMLFVBQU0sS0FBSztRQUFYLGlCQTBCQzs7UUF6QkMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQy9CO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakIsVUFBVSxDQUFDO2dCQUNULEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3RFO2dCQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUN4RTthQUNGLEVBQUMsRUFBRSxDQUFDLENBQUM7U0FDUDtLQUNGOzs7Ozs7O0lBRUQscUNBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQ3pEOztnQkFyRkYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxrbkJBWVQ7NkJBRUcsMEVBSUM7aUJBRVI7Ozs7Z0JBekI4QixRQUFROzs7d0JBb0NwQyxTQUFTLFNBQUMsT0FBTzswQkFHakIsU0FBUyxTQUFDLFNBQVM7d0NBR25CLE1BQU0sU0FBQyx1QkFBdUI7OzRCQTFDakM7O1NBMEJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NoZWNrYm94LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJ1c2VGb250XCIgY2xhc3M9XCJjaGVjay1mb250XCI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwic291cmNlID09PSBpZGVhbFwiICNjaGVjayB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZhIGZhLWNoZWNrXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzb3VyY2UgIT09IGlkZWFsXCIgI3VuY2hlY2sgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYSBmYS1jbG9zZVwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8aW5wdXQgKm5nSWY9XCIhdXNlRm9udFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcclxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIiBcclxuICAgICAgICAgICAgW2NoZWNrZWRdPVwic291cmNlPT09aWRlYWwgPyB0cnVlIDogbnVsbFwiIFxyXG4gICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgLz5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgLmNoZWNrLWZvbnQge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgb3JpZ2luYWw6IHN0cmluZztcclxuICBpZGVhbDogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVzZUZvbnQ6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJjaGVja1wiKVxyXG4gIGNoZWNrO1xyXG5cclxuICBAVmlld0NoaWxkKFwidW5jaGVja1wiKVxyXG4gIHVuY2hlY2s7XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxyXG5cclxuICBrZXl1cChldmVudCkge1xyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChldmVudC50YXJnZXQsIFwiY2xpY2tcIik7XHJcblx0XHR9XHJcbiAgfVxyXG5cclxuICBjbGljayhldmVudCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc291cmNlID09PSB0aGlzLmlkZWFsKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gdGhpcy5vcmlnaW5hbDtcclxuXHRcdH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gdGhpcy5pZGVhbDtcclxuICAgIH1cclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy51c2VGb250KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5jaGVjay5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy51bmNoZWNrKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy51bmNoZWNrLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDY2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5pZGVhbD0gYXJncy5sZW5ndGggPyBTdHJpbmcoYXJnc1swXSkgOiBcIlwiO1xyXG4gICAgdGhpcy51c2VGb250PSBhcmdzLmxlbmd0aCA+IDEgPyBCb29sZWFuKGFyZ3NbMV0pIDogZmFsc2U7XHJcbiAgICB0aGlzLnNvdXJjZT0gU3RyaW5nKHNvdXJjZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcmlnaW5hbD0gdGhpcy5zb3VyY2UgPT09IHRoaXMuaWRlYWwgPyBcIlwiIDogc291cmNlO1xyXG4gIH1cclxufVxyXG5cclxuIl19