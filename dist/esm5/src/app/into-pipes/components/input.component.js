/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
var InputComponent = /** @class */ (function () {
    function InputComponent(renderer) {
        this.renderer = renderer;
        this.editName = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    InputComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        /** @type {?} */
        var code = event.which;
        if (((code >= 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) ||
            ((code == 32) || (code == 8)) ||
            ((code >= 186) && (code <= 222))) {
            this.source = event.target.value;
        }
        else if ((code === 13) || (code === 9) || (code === 27)) {
            this.editName = false;
            if (this.oldValue !== String(this.source)) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    item: this.data
                });
            }
            if (code === 13) {
                setTimeout(function () {
                    if (_this.nameHolder) {
                        _this.renderer.invokeElementMethod(_this.nameHolder.nativeElement, "focus");
                    }
                }, 66);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputComponent.prototype.blur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = false;
        if (this.oldValue !== String(this.source)) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                item: this.data
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputComponent.prototype.keydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if ((code === 13) || (code === 9)) {
            this.renderer.invokeElementMethod(event.target, "click");
            setTimeout(function () {
                if (_this.nameEditor) {
                    _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
                }
            }, 66);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputComponent.prototype.clickName = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        this.oldValue = String(this.source);
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
        }, 66);
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    InputComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.data = data;
        this.placeholder = args.length ? args[0] : "";
        this.formatting = args.length > 1 ? args[1] : "";
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'input-component',
                    template: "\n    <span *ngIf=\"editName\">\n    <input #nameEditor\n        type='text' \n        [id]=\"id\"\n        [name]=\"name\"\n        [value]=\"source\"\n        [placeholder]=\"placeholder\"\n        (blur)=\"blur($event)\" \n        (keyup)='keyup($event)'>\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? (source | into:formatting) : '&nbsp;'\">\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && !formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? source : '&nbsp;'\">\n    </span>\n    ",
                    styles: ["\n        .locked {\n          display: inline-block;\n          cursor: pointer;\n          min-width: 30px;\n          -webkit-user-select: none;       \n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          border: 1px solid transparent;\n        }\n        input {\n          cursor: beam;\n        }\n        :host .locked:hover{border: 1px solid #fabdab;}\n        "]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    InputComponent.propDecorators = {
        nameEditor: [{ type: ViewChild, args: ["nameEditor",] }],
        nameHolder: [{ type: ViewChild, args: ["nameHolder",] }],
        onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
    };
    return InputComponent;
}());
export { InputComponent };
if (false) {
    /** @type {?} */
    InputComponent.prototype.data;
    /** @type {?} */
    InputComponent.prototype.source;
    /** @type {?} */
    InputComponent.prototype.id;
    /** @type {?} */
    InputComponent.prototype.name;
    /** @type {?} */
    InputComponent.prototype.placeholder;
    /** @type {?} */
    InputComponent.prototype.formatting;
    /** @type {?} */
    InputComponent.prototype.editName;
    /** @type {?} */
    InputComponent.prototype.oldValue;
    /** @type {?} */
    InputComponent.prototype.nameEditor;
    /** @type {?} */
    InputComponent.prototype.nameHolder;
    /** @type {?} */
    InputComponent.prototype.onIntoComponentChange;
    /** @type {?} */
    InputComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQXdFbkYsd0JBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7d0JBWjNCLEtBQUs7cUNBVVEsSUFBSSxZQUFZLEVBQUU7S0FJekM7Ozs7O0lBRUQsOEJBQUs7Ozs7SUFBTCxVQUFNLEtBQUs7UUFBWCxpQkE0QkM7UUEzQkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7UUFFdkIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDdEM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJ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QUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDM0UsRUFBQyxFQUFFLENBQUMsQ0FBQztLQUNQOzs7Ozs7O0lBRUQsa0NBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDbEQ7O2dCQW5KRixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG95QkEyQlQ7NkJBRUcsNGFBZUM7aUJBRVI7Ozs7Z0JBbkQ4QixRQUFROzs7NkJBK0RwQyxTQUFTLFNBQUMsWUFBWTs2QkFHdEIsU0FBUyxTQUFDLFlBQVk7d0NBR3RCLE1BQU0sU0FBQyx1QkFBdUI7O3lCQXJFakM7O1NBb0RhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwiZWRpdE5hbWVcIj5cclxuICAgIDxpbnB1dCAjbmFtZUVkaXRvclxyXG4gICAgICAgIHR5cGU9J3RleHQnIFxyXG4gICAgICAgIFtpZF09XCJpZFwiXHJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAoYmx1cik9XCJibHVyKCRldmVudClcIiBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJz5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICNuYW1lSG9sZGVyXHJcbiAgICAgICAgKm5nSWY9JyFlZGl0TmFtZSAmJiBmb3JtYXR0aW5nJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoa2V5dXApPSdrZXlkb3duKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmFtZSgkZXZlbnQpXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZSA/IChzb3VyY2UgfCBpbnRvOmZvcm1hdHRpbmcpIDogJyZuYnNwOydcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICNuYW1lSG9sZGVyXHJcbiAgICAgICAgKm5nSWY9JyFlZGl0TmFtZSAmJiAhZm9ybWF0dGluZydcclxuICAgICAgICBjbGFzcz0nbG9ja2VkJyBcclxuICAgICAgICB0YWJpbmRleD0nMCcgXHJcbiAgICAgICAgKGtleXVwKT0na2V5ZG93bigkZXZlbnQpJ1xyXG4gICAgICAgIChjbGljayk9XCJjbGlja05hbWUoJGV2ZW50KVwiXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJzb3VyY2UgPyBzb3VyY2UgOiAnJm5ic3A7J1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAubG9ja2VkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIFxyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGN1cnNvcjogYmVhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOmhvc3QgLmxvY2tlZDpob3Zlcntib3JkZXI6IDFweCBzb2xpZCAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBmb3JtYXR0aW5nOnN0cmluZztcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIG9sZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lRWRpdG9yXCIpXHJcbiAgbmFtZUVkaXRvcjtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVIb2xkZXJcIilcclxuICBuYW1lSG9sZGVyXHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAga2V5dXAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoKChjb2RlID49IDQ4KSAmJiAoY29kZSA8PSA5MCkpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDk2KSAmJiAoY29kZSA8PSAxMTEpKSB8fFxyXG4gICAgICAgICgoY29kZSA9PSAzMikgfHwgKGNvZGUgPT0gOCkpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDE4NikgJiYgKGNvZGUgPD0gMjIyKSkpIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSB8fCAoY29kZSA9PT0gMjcpICkge1xyXG4gICAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgIGlmICh0aGlzLm5hbWVIb2xkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUhvbGRlci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sNjYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJsdXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleWRvd24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoKGNvZGUgPT09IDEzKSB8fCAoY29kZSA9PT0gOSkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKGV2ZW50LnRhcmdldCwgXCJjbGlja1wiKTtcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWVFZGl0b3IpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sNjYpO1xyXG5cdFx0fVxyXG4gIH1cclxuXHJcbiAgY2xpY2tOYW1lKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmVkaXROYW1lID0gdHJ1ZTtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBTdHJpbmcodGhpcy5zb3VyY2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgIH0sNjYpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXI9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==