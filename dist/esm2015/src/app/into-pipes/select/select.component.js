/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class SelectComponent {
    constructor() {
        this.multiselect = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.multiselect = args.length ? args[0] === true : false;
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-component',
                template: `
    <select tabindex="0" 
      [multiple]="multiselect ? true:null" 
      (click)="click($event)" 
      (change)="change($event)">
        <option *ngFor="let x of options" 
          [selected]="source === x ? true : null"  
          [value]="x" 
          [textContent]="x"></option>
    </select>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        `]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.data;
    /** @type {?} */
    SelectComponent.prototype.source;
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.id;
    /** @type {?} */
    SelectComponent.prototype.name;
    /** @type {?} */
    SelectComponent.prototype.multiselect;
    /** @type {?} */
    SelectComponent.prototype.service;
    /** @type {?} */
    SelectComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzQmhFLE1BQU07SUFhSjsyQkFOYyxLQUFLO3FDQUlLLElBQUksWUFBWSxFQUFFO0tBRTFCOzs7OztJQUVoQixLQUFLLENBQUMsS0FBVTtRQUNkLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDeEI7Ozs7O0lBQ0QsTUFBTSxDQUFDLEtBQVU7UUFDZixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM5QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQzNEOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7OztLQVVUO3lCQUVHOztTQUVDO2FBRVI7Ozs7O29DQVdFLE1BQU0sU0FBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQsIFBpcGVTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VsZWN0IHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICBbbXVsdGlwbGVdPVwibXVsdGlzZWxlY3QgPyB0cnVlOm51bGxcIiBcclxuICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIiBcclxuICAgICAgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uc1wiIFxyXG4gICAgICAgICAgW3NlbGVjdGVkXT1cInNvdXJjZSA9PT0geCA/IHRydWUgOiBudWxsXCIgIFxyXG4gICAgICAgICAgW3ZhbHVlXT1cInhcIiBcclxuICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJ4XCI+PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgb3B0aW9uczogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcbiAgc2VydmljZTogUGlwZVNlcnZpY2VDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgY2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgdHlwZTogJ2NoYW5nZScsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmdldERhdGFGb3IodGhpcy5uYW1lLCB0aGlzLmlkLCBkYXRhKTtcclxuICAgIHRoaXMubXVsdGlzZWxlY3QgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gPT09IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==