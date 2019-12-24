import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let SelectComponent = class SelectComponent {
    constructor() {
        this.multiselect = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    click(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    change(event) {
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
    }
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.multiselect = args.length ? args[0] === true : false;
    }
};
tslib_1.__decorate([
    Output("onIntoComponentChange")
], SelectComponent.prototype, "onIntoComponentChange", void 0);
SelectComponent = tslib_1.__decorate([
    Component({
        selector: 'select-component',
        template: `
    <select tabindex="0" 
      [multiple]="multiselect ? true:null" 
      (click)="click($event)" 
      (change)="change($event)">
        <option *ngFor="let x of options" 
          [attr.selected]="source === x ? 'selected' : null"  
          [value]="x" 
          [textContent]="x"></option>
    </select>
    `,
        styles: [`
      :host {display:table;float:left;min-height: 23px}
      @media print {
        :host select {
            border: 0;
        }
        :host select::-ms-expand {display: none;}
        :host select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          text-indent: 0.01px;
          text-overflow: "";
          text-indent: 1px;
          text-overflow: '';
        }
      }
      `]
    })
], SelectComponent);
export { SelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQ2hFLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFhMUI7UUFOQSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUlwQiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFaEIsS0FBSyxDQUFDLEtBQVU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBVTtRQUNmLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFFLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0NBQ0YsQ0FBQTtBQTVCQztJQURDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzs4REFDVztBQVhoQyxlQUFlO0lBbEMzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7OztLQVVUO2lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCQztLQUVOLENBQUM7R0FDVyxlQUFlLENBdUMzQjtTQXZDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50LCBQaXBlU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlbGVjdCB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgW211bHRpcGxlXT1cIm11bHRpc2VsZWN0ID8gdHJ1ZTpudWxsXCIgXHJcbiAgICAgIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgXHJcbiAgICAgIChjaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB4IG9mIG9wdGlvbnNcIiBcclxuICAgICAgICAgIFthdHRyLnNlbGVjdGVkXT1cInNvdXJjZSA9PT0geCA/ICdzZWxlY3RlZCcgOiBudWxsXCIgIFxyXG4gICAgICAgICAgW3ZhbHVlXT1cInhcIiBcclxuICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJ4XCI+PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgYFxyXG4gICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgICAgOmhvc3Qgc2VsZWN0IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6aG9zdCBzZWxlY3Q6Oi1tcy1leHBhbmQge2Rpc3BsYXk6IG5vbmU7fVxyXG4gICAgICAgIDpob3N0IHNlbGVjdCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDAuMDFweDtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IFwiXCI7XHJcbiAgICAgICAgICB0ZXh0LWluZGVudDogMXB4O1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgb3B0aW9uczogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcbiAgc2VydmljZTogUGlwZVNlcnZpY2VDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgY2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgdHlwZTogJ2NoYW5nZScsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmdldERhdGFGb3IodGhpcy5uYW1lLCB0aGlzLmlkLCBkYXRhKTtcclxuICAgIHRoaXMubXVsdGlzZWxlY3QgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gPT09IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==