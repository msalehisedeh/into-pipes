/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
var TextComponent = /** @class */ (function () {
    function TextComponent(renderer) {
        this.renderer = renderer;
        this.rows = 4;
        this.limit = 0;
        this.editName = false;
        this.counter = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TextComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var code = event.which;
        if ((code === 48) || (code === 8)) {
            this.source = event.target.value;
        }
        else if (((code > 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) || (code == 32) ||
            ((code >= 186) && (code <= 222))) {
            if (!this.limit || this.source.length < this.limit) {
                this.source = event.target.value;
            }
        }
        else if ((code === 13) || (code === 9) || (code === 27)) {
            this.editName = false;
            if (this.oldValue !== String(this.source)) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: 'change',
                    item: this.oldValue
                });
                this.oldValue = String(this.source);
            }
            if (code === 13) {
                setTimeout(function () {
                    if (_this.nameHolder) {
                        _this.renderer.invokeElementMethod(_this.nameHolder.nativeElement, "focus");
                    }
                }, 99);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextComponent.prototype.blur = /**
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
                type: 'blur',
                item: this.oldValue
            });
            this.oldValue = String(this.source);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextComponent.prototype.focus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.click(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextComponent.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        setTimeout(function () {
            if (_this.nameEditor) {
                _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
            }
        }, 99);
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    TextComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.oldValue = source;
        this.rows = args.length ? args[0] : 4;
        this.limit = args.length > 1 ? args[1] : 0;
        this.counter = args.length > 2 ? args[2] : false;
    };
    TextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'text-component',
                    template: "\n    <span class=\"text-wrapper\" *ngIf=\"editName\">\n      <textarea #nameEditor\n        [id]=\"id\"\n        [name]=\"name\"\n        [value]=\"source\"\n        [attr.maxlength]=\"limit ? limit : null\"\n        [rows]=\"rows\"\n        (blur)=\"blur($event)\" \n        (keyup)='keyup($event)'></textarea>\n      <span *ngIf=\"counter\" class=\"counter\" \n        [textContent]=\"limit ? (limit - source.length) + ' remaining' : source.length + ' typed'\"></span>\n    </span>\n    <span #nameHolder\n        *ngIf='!editName'\n        class='locked' \n        tabindex='0' \n        (click)='click($event)'\n        (keyup)='focus($event)'\n        [innerHTML]=\"source\">\n    </span>\n    ",
                    styles: ["\n        .locked {\n          display: block;\n          cursor: pointer;\n          min-height: 23px;\n          min-width: 33px;\n          -webkit-user-select: none;       \n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          border: 1px solid transparent;\n        }\n        .text-wrapper{box-sizing: border-box;display:table;width: 100%;}\n        .text-wrapper textarea {box-sizing: border-box;display:block;cursor: beam;width: 100%;}\n        .counter{display: table;float:right;color: #ddd;}\n        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 23px;min-width: 33px;}\n        :host .locked:hover{border: 1px solid #fabdab;}\n        "]
                }] }
    ];
    /** @nocollapse */
    TextComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    TextComponent.propDecorators = {
        nameEditor: [{ type: ViewChild, args: ["nameEditor",] }],
        nameHolder: [{ type: ViewChild, args: ["nameHolder",] }],
        onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
    };
    return TextComponent;
}());
export { TextComponent };
if (false) {
    /** @type {?} */
    TextComponent.prototype.source;
    /** @type {?} */
    TextComponent.prototype.id;
    /** @type {?} */
    TextComponent.prototype.name;
    /** @type {?} */
    TextComponent.prototype.rows;
    /** @type {?} */
    TextComponent.prototype.limit;
    /** @type {?} */
    TextComponent.prototype.editName;
    /** @type {?} */
    TextComponent.prototype.counter;
    /** @type {?} */
    TextComponent.prototype.oldValue;
    /** @type {?} */
    TextComponent.prototype.nameEditor;
    /** @type {?} */
    TextComponent.prototype.nameHolder;
    /** @type {?} */
    TextComponent.prototype.onIntoComponentChange;
    /** @type {?} */
    TextComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy90ZXh0L3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFvRW5GLHVCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO29CQWYvQixDQUFDO3FCQUNBLENBQUM7d0JBQ0UsS0FBSzt1QkFDTixLQUFLO3FDQVVTLElBQUksWUFBWSxFQUFFO0tBSXpDOzs7OztJQUNELDZCQUFLOzs7O0lBQUwsVUFBTSxLQUFVO1FBQWhCLGlCQStCQzs7UUE5QkMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNsQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMs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RUFBQyxFQUFFLENBQUMsQ0FBQztLQUNUOzs7Ozs7O0lBRUMsaUNBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDbEQ7O2dCQXpJRixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDhyQkFxQlQ7NkJBRUcsa3VCQWlCQztpQkFFUjs7OztnQkEvQzhCLFFBQVE7Ozs2QkEyRHBDLFNBQVMsU0FBQyxZQUFZOzZCQUd0QixTQUFTLFNBQUMsWUFBWTt3Q0FHdEIsTUFBTSxTQUFDLHVCQUF1Qjs7d0JBakVqQzs7U0FnRGEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGV4dC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwidGV4dC13cmFwcGVyXCIgKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgICA8dGV4dGFyZWEgI25hbWVFZGl0b3JcclxuICAgICAgICBbaWRdPVwiaWRcIlxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIlxyXG4gICAgICAgIFthdHRyLm1heGxlbmd0aF09XCJsaW1pdCA/IGxpbWl0IDogbnVsbFwiXHJcbiAgICAgICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICAgICAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCIgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSc+PC90ZXh0YXJlYT5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJjb3VudGVyXCIgY2xhc3M9XCJjb3VudGVyXCIgXHJcbiAgICAgICAgW3RleHRDb250ZW50XT1cImxpbWl0ID8gKGxpbWl0IC0gc291cmNlLmxlbmd0aCkgKyAnIHJlbWFpbmluZycgOiBzb3VyY2UubGVuZ3RoICsgJyB0eXBlZCdcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAjbmFtZUhvbGRlclxyXG4gICAgICAgICpuZ0lmPSchZWRpdE5hbWUnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChjbGljayk9J2NsaWNrKCRldmVudCknXHJcbiAgICAgICAgKGtleXVwKT0nZm9jdXMoJGV2ZW50KSdcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZVwiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAubG9ja2VkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMjNweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzNweDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIFxyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LXdyYXBwZXJ7Ym94LXNpemluZzogYm9yZGVyLWJveDtkaXNwbGF5OnRhYmxlO3dpZHRoOiAxMDAlO31cclxuICAgICAgICAudGV4dC13cmFwcGVyIHRleHRhcmVhIHtib3gtc2l6aW5nOiBib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7Y3Vyc29yOiBiZWFtO3dpZHRoOiAxMDAlO31cclxuICAgICAgICAuY291bnRlcntkaXNwbGF5OiB0YWJsZTtmbG9hdDpyaWdodDtjb2xvcjogI2RkZDt9XHJcbiAgICAgICAgOmhvc3Qge2JveC1zaXppbmc6IGJvcmRlci1ib3g7d2lkdGg6IDEwMCU7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7bWluLXdpZHRoOiAzM3B4O31cclxuICAgICAgICA6aG9zdCAubG9ja2VkOmhvdmVye2JvcmRlcjogMXB4IHNvbGlkICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcm93cyA9IDQ7XHJcbiAgbGltaXQgPSAwO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgY291bnRlciA9IGZhbHNlO1xyXG4gIG9sZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lRWRpdG9yXCIpXHJcbiAgbmFtZUVkaXRvcjtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVIb2xkZXJcIilcclxuICBuYW1lSG9sZGVyXHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuICBrZXl1cChldmVudDogYW55KSB7ICAgIFxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKChjb2RlID09PSA0OCkgfHwgKGNvZGUgPT09IDgpKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICgoKGNvZGUgPiA0OCkgJiYgKGNvZGUgPD0gOTApKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSA5NikgJiYgKGNvZGUgPD0gMTExKSkgfHwgKGNvZGUgPT0gMzIpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDE4NikgJiYgKGNvZGUgPD0gMjIyKSkpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5saW1pdCB8fCB0aGlzLnNvdXJjZS5sZW5ndGggPCB0aGlzLmxpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSB8fCAoY29kZSA9PT0gMjcpICkge1xyXG4gICAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICB0eXBlOiAnY2hhbmdlJyxcclxuICAgICAgICAgIGl0ZW06IHRoaXMub2xkVmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lSG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVIb2xkZXIubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDk5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBibHVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgIHR5cGU6ICdibHVyJyxcclxuICAgICAgICBpdGVtOiB0aGlzLm9sZFZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9jdXMoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5jbGljayhldmVudCk7XHJcbiAgfVxyXG4gIGNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIHRoaXMuZWRpdE5hbWUgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICBpZiAodGhpcy5uYW1lRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LDk5KTtcclxufVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IHNvdXJjZTtcclxuICAgIHRoaXMucm93cyA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IDQ7XHJcbiAgICB0aGlzLmxpbWl0ID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IDA7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=