/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Renderer, Output, EventEmitter } from '@angular/core';
export class InputGroupComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    focused(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.type === 'radio') {
            this.source = event.target.value;
        }
        else {
            /** @type {?} */
            const i = this.source.indexOf(event.target.value);
            if (event.target.checked) {
                if (i < 0) {
                    this.source.push(event.target.value);
                }
            }
            else {
                this.source.splice(i, 1);
            }
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "select",
            item: this.data
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelected(item) {
        /** @type {?} */
        const xitem = item.value ? item.value : item;
        if (this.type === 'radio') {
            return xitem === this.source;
        }
        /** @type {?} */
        let found = false;
        this.source.map((x) => {
            if (xitem === x) {
                found = true;
            }
        });
        return found;
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
        this.type = (source instanceof Array) ? 'checkbox' : 'radio';
    }
}
InputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-group-component',
                template: `
    <span class="input-group-item" *ngFor="let x of options; let i = index">
        <input 
            [type]="type" 
            [id]="name + i" 
            [name]="name + (type === 'radio' ? '' : i)" 
            [value]="x.value ? x.value : x" 
            [checked]="isSelected(x)"
            (focus)="focused($event)"/>
        <label [for]="name + i" [textContent]="x.label ? x.label : x"></label>
    </span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        `]
            }] }
];
/** @nocollapse */
InputGroupComponent.ctorParameters = () => [
    { type: Renderer }
];
InputGroupComponent.propDecorators = {
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};
if (false) {
    /** @type {?} */
    InputGroupComponent.prototype.data;
    /** @type {?} */
    InputGroupComponent.prototype.source;
    /** @type {?} */
    InputGroupComponent.prototype.options;
    /** @type {?} */
    InputGroupComponent.prototype.id;
    /** @type {?} */
    InputGroupComponent.prototype.name;
    /** @type {?} */
    InputGroupComponent.prototype.type;
    /** @type {?} */
    InputGroupComponent.prototype.service;
    /** @type {?} */
    InputGroupComponent.prototype.onIntoComponentChange;
    /** @type {?} */
    InputGroupComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvaW5wdXRncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUF1QjFFLE1BQU07Ozs7SUFhSixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO3FDQUZkLElBQUksWUFBWSxFQUFFO0tBRUE7Ozs7O0lBRTFDLE9BQU8sQ0FBQyxLQUFTO1FBQ2YsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNsQztRQUFDLElBQUksQ0FBQyxDQUFDOztZQUNOLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QzthQUNGO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7S0FDSjs7Ozs7SUFDRCxVQUFVLENBQUMsSUFBUzs7UUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDOUI7O1FBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDZDtTQUNGLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDs7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDOUQ7OztZQTlFRixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztLQVdUO3lCQUVHOztTQUVDO2FBRVI7Ozs7WUF0Qm1CLFFBQVE7OztvQ0FpQ3pCLE1BQU0sU0FBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50LCBQaXBlU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXQtZ3JvdXAtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWl0ZW1cIiAqbmdGb3I9XCJsZXQgeCBvZiBvcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICBbdHlwZV09XCJ0eXBlXCIgXHJcbiAgICAgICAgICAgIFtpZF09XCJuYW1lICsgaVwiIFxyXG4gICAgICAgICAgICBbbmFtZV09XCJuYW1lICsgKHR5cGUgPT09ICdyYWRpbycgPyAnJyA6IGkpXCIgXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJ4LnZhbHVlID8geC52YWx1ZSA6IHhcIiBcclxuICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXNTZWxlY3RlZCh4KVwiXHJcbiAgICAgICAgICAgIChmb2N1cyk9XCJmb2N1c2VkKCRldmVudClcIi8+XHJcbiAgICAgICAgPGxhYmVsIFtmb3JdPVwibmFtZSArIGlcIiBbdGV4dENvbnRlbnRdPVwieC5sYWJlbCA/IHgubGFiZWwgOiB4XCI+PC9sYWJlbD5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogYW55O1xyXG4gIG9wdGlvbnM6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgc2VydmljZTogUGlwZVNlcnZpY2VDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxyXG5cclxuICBmb2N1c2VkKGV2ZW50OmFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGkgPSB0aGlzLnNvdXJjZS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIGlmIChpIDwgMCkge1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNvdXJjZS5zcGxpY2UoaSwxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlzU2VsZWN0ZWQoaXRlbTogYW55KSB7XHJcbiAgICBjb25zdCB4aXRlbSA9IGl0ZW0udmFsdWUgPyBpdGVtLnZhbHVlIDogaXRlbTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgcmV0dXJuIHhpdGVtID09PSB0aGlzLnNvdXJjZTtcclxuICAgIH1cclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zb3VyY2UubWFwKCh4KSA9PiB7XHJcbiAgICAgIGlmICh4aXRlbSA9PT0geCkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmdldERhdGFGb3IodGhpcy5uYW1lLCB0aGlzLmlkLCBkYXRhKTtcclxuICAgIHRoaXMudHlwZSA9IChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==