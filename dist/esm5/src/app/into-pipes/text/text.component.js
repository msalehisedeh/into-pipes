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
        /** @type {?} */
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy90ZXh0L3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFvRW5GLHVCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO29CQWYvQixDQUFDO3FCQUNBLENBQUM7d0JBQ0UsS0FBSzt1QkFDTixLQUFLO3FDQVVTLElBQUksWUFBWSxFQUFFO0tBSXpDOzs7OztJQUNELDZCQUFLOzs7O0lBQUwsVUFBTSxLQUFVO1FBQWhCLGlCQThCQzs7UUE3QkMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNsQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMs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S0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDM0U7U0FDRixFQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ1Q7Ozs7Ozs7SUFFQyxpQ0FBUzs7Ozs7O0lBQVQsVUFBVSxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUNsRDs7Z0JBMUlGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsOHJCQXFCVDs2QkFFRyxrdUJBaUJDO2lCQUVSOzs7O2dCQS9DOEIsUUFBUTs7OzZCQTJEcEMsU0FBUyxTQUFDLFlBQVk7NkJBR3RCLFNBQVMsU0FBQyxZQUFZO3dDQUd0QixNQUFNLFNBQUMsdUJBQXVCOzt3QkFqRWpDOztTQWdEYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0ZXh0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdyYXBwZXJcIiAqbmdJZj1cImVkaXROYW1lXCI+XHJcbiAgICAgIDx0ZXh0YXJlYSAjbmFtZUVkaXRvclxyXG4gICAgICAgIFtpZF09XCJpZFwiXHJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgW2F0dHIubWF4bGVuZ3RoXT1cImxpbWl0ID8gbGltaXQgOiBudWxsXCJcclxuICAgICAgICBbcm93c109XCJyb3dzXCJcclxuICAgICAgICAoYmx1cik9XCJibHVyKCRldmVudClcIiBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJz48L3RleHRhcmVhPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cImNvdW50ZXJcIiBjbGFzcz1cImNvdW50ZXJcIiBcclxuICAgICAgICBbdGV4dENvbnRlbnRdPVwibGltaXQgPyAobGltaXQgLSBzb3VyY2UubGVuZ3RoKSArICcgcmVtYWluaW5nJyA6IHNvdXJjZS5sZW5ndGggKyAnIHR5cGVkJ1wiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICNuYW1lSG9sZGVyXHJcbiAgICAgICAgKm5nSWY9JyFlZGl0TmFtZSdcclxuICAgICAgICBjbGFzcz0nbG9ja2VkJyBcclxuICAgICAgICB0YWJpbmRleD0nMCcgXHJcbiAgICAgICAgKGNsaWNrKT0nY2xpY2soJGV2ZW50KSdcclxuICAgICAgICAoa2V5dXApPSdmb2N1cygkZXZlbnQpJ1xyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic291cmNlXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5sb2NrZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzM3B4O1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAgICAgXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtd3JhcHBlcntib3gtc2l6aW5nOiBib3JkZXItYm94O2Rpc3BsYXk6dGFibGU7d2lkdGg6IDEwMCU7fVxyXG4gICAgICAgIC50ZXh0LXdyYXBwZXIgdGV4dGFyZWEge2JveC1zaXppbmc6IGJvcmRlci1ib3g7ZGlzcGxheTpibG9jaztjdXJzb3I6IGJlYW07d2lkdGg6IDEwMCU7fVxyXG4gICAgICAgIC5jb3VudGVye2Rpc3BsYXk6IHRhYmxlO2Zsb2F0OnJpZ2h0O2NvbG9yOiAjZGRkO31cclxuICAgICAgICA6aG9zdCB7Ym94LXNpemluZzogYm9yZGVyLWJveDt3aWR0aDogMTAwJTtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDttaW4td2lkdGg6IDMzcHg7fVxyXG4gICAgICAgIDpob3N0IC5sb2NrZWQ6aG92ZXJ7Ym9yZGVyOiAxcHggc29saWQgI2ZhYmRhYjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBzb3VyY2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByb3dzID0gNDtcclxuICBsaW1pdCA9IDA7XHJcbiAgZWRpdE5hbWUgPSBmYWxzZTtcclxuICBjb3VudGVyID0gZmFsc2U7XHJcbiAgb2xkVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVFZGl0b3JcIilcclxuICBuYW1lRWRpdG9yO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUhvbGRlclwiKVxyXG4gIG5hbWVIb2xkZXJcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuXHJcbiAgfVxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHsgICAgXHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoKGNvZGUgPT09IDQ4KSB8fCAoY29kZSA9PT0gOCkpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKCgoY29kZSA+IDQ4KSAmJiAoY29kZSA8PSA5MCkpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDk2KSAmJiAoY29kZSA8PSAxMTEpKSB8fCAoY29kZSA9PSAzMikgfHxcclxuICAgICAgICAoKGNvZGUgPj0gMTg2KSAmJiAoY29kZSA8PSAyMjIpKSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmxpbWl0IHx8IHRoaXMuc291cmNlLmxlbmd0aCA8IHRoaXMubGltaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpIHx8IChjb2RlID09PSAyNykgKSB7XHJcbiAgICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgIGl0ZW06IHRoaXMub2xkVmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lSG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVIb2xkZXIubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDk5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBibHVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgIGl0ZW06IHRoaXMub2xkVmFsdWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub2xkVmFsdWUgPSBTdHJpbmcodGhpcy5zb3VyY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb2N1cyhldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIHRoaXMuZWRpdE5hbWUgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICBpZiAodGhpcy5uYW1lRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LDk5KTtcclxufVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IHNvdXJjZTtcclxuICAgIHRoaXMucm93cyA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IDQ7XHJcbiAgICB0aGlzLmxpbWl0ID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IDA7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=