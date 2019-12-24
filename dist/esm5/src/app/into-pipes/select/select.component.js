import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.multiselect = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    SelectComponent.prototype.click = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    SelectComponent.prototype.change = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.source = event.target.value;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'change',
            item: this.data
        });
    };
    SelectComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.multiselect = args.length ? args[0] === true : false;
    };
    tslib_1.__decorate([
        Output("onIntoComponentChange")
    ], SelectComponent.prototype, "onIntoComponentChange", void 0);
    SelectComponent = tslib_1.__decorate([
        Component({
            selector: 'select-component',
            template: "\n    <select tabindex=\"0\" \n      [multiple]=\"multiselect ? true:null\" \n      (click)=\"click($event)\" \n      (change)=\"change($event)\">\n        <option *ngFor=\"let x of options\" \n          [attr.selected]=\"source === x ? 'selected' : null\"  \n          [value]=\"x\" \n          [textContent]=\"x\"></option>\n    </select>\n    ",
            styles: ["\n      :host {display:table;float:left;min-height: 23px}\n      @media print {\n        :host select {\n            border: 0;\n        }\n        :host select::-ms-expand {display: none;}\n        :host select {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          text-indent: 0.01px;\n          text-overflow: \"\";\n          text-indent: 1px;\n          text-overflow: '';\n        }\n      }\n      "]
        })
    ], SelectComponent);
    return SelectComponent;
}());
export { SelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQ2hFO0lBYUU7UUFOQSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUlwQiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFaEIsK0JBQUssR0FBTCxVQUFNLEtBQVU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxnQ0FBTSxHQUFOLFVBQU8sS0FBVTtRQUNmLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFFLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBM0JEO1FBREMsTUFBTSxDQUFDLHVCQUF1QixDQUFDO2tFQUNXO0lBWGhDLGVBQWU7UUFsQzNCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLDRWQVVUO3FCQUVDLGtkQWlCQztTQUVOLENBQUM7T0FDVyxlQUFlLENBdUMzQjtJQUFELHNCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzZWxlY3QgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgIFttdWx0aXBsZV09XCJtdWx0aXNlbGVjdCA/IHRydWU6bnVsbFwiIFxyXG4gICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiIFxyXG4gICAgICAoY2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgeCBvZiBvcHRpb25zXCIgXHJcbiAgICAgICAgICBbYXR0ci5zZWxlY3RlZF09XCJzb3VyY2UgPT09IHggPyAnc2VsZWN0ZWQnIDogbnVsbFwiICBcclxuICAgICAgICAgIFt2YWx1ZV09XCJ4XCIgXHJcbiAgICAgICAgICBbdGV4dENvbnRlbnRdPVwieFwiPjwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgIGBcclxuICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAgIDpob3N0IHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOmhvc3Qgc2VsZWN0OjotbXMtZXhwYW5kIHtkaXNwbGF5OiBub25lO31cclxuICAgICAgICA6aG9zdCBzZWxlY3Qge1xyXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgIHRleHQtaW5kZW50OiAwLjAxcHg7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBcIlwiO1xyXG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDFweDtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBtdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG4gIHNlcnZpY2U6IFBpcGVTZXJ2aWNlQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbiAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIHR5cGU6ICdjaGFuZ2UnLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc2VydmljZS5nZXREYXRhRm9yKHRoaXMubmFtZSwgdGhpcy5pZCwgZGF0YSk7XHJcbiAgICB0aGlzLm11bHRpc2VsZWN0ID0gYXJncy5sZW5ndGggPyBhcmdzWzBdID09PSB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=