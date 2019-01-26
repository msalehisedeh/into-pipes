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
    click(event) {
        event.stopPropagation();
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
            (click)="click($event)"/>
        <label [for]="name + i" [textContent]="x.label ? x.label : x"></label>
    </span>
    `,
                styles: [`
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzQjFFLE1BQU07Ozs7SUFhSixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO3FDQUZkLElBQUksWUFBWSxFQUFFO0tBRUE7Ozs7O0lBRTFDLEtBQUssQ0FBQyxLQUFLO1FBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2xDO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ04sTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RDO2FBQ0Y7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekI7U0FDRjtRQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDOUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7S0FDSjs7Ozs7SUFDRCxVQUFVLENBQUMsSUFBSTs7UUFDYixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM5Qjs7UUFDRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNkO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFFLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztLQUM5RDs7O1lBNUVGLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0tBV1Q7eUJBRUc7U0FDQzthQUVSOzs7O1lBckJtQixRQUFROzs7b0NBZ0N6QixNQUFNLFNBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1ncm91cC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtaXRlbVwiICpuZ0Zvcj1cImxldCB4IG9mIG9wdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIFt0eXBlXT1cInR5cGVcIiBcclxuICAgICAgICAgICAgW2lkXT1cIm5hbWUgKyBpXCIgXHJcbiAgICAgICAgICAgIFtuYW1lXT1cIm5hbWUgKyAodHlwZSA9PT0gJ3JhZGlvJyA/ICcnIDogaSlcIiBcclxuICAgICAgICAgICAgW3ZhbHVlXT1cIngudmFsdWUgPyB4LnZhbHVlIDogeFwiIFxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJpc1NlbGVjdGVkKHgpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIi8+XHJcbiAgICAgICAgPGxhYmVsIFtmb3JdPVwibmFtZSArIGlcIiBbdGV4dENvbnRlbnRdPVwieC5sYWJlbCA/IHgubGFiZWwgOiB4XCI+PC9sYWJlbD5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBhbnk7XHJcbiAgb3B0aW9uczogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzZXJ2aWNlOiBQaXBlU2VydmljZUNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gIGNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaSA9IHRoaXMuc291cmNlLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKGkgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc291cmNlLnNwbGljZShpLDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaXNTZWxlY3RlZChpdGVtKSB7XHJcbiAgICBjb25zdCB4aXRlbSA9IGl0ZW0udmFsdWUgPyBpdGVtLnZhbHVlIDogaXRlbTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgcmV0dXJuIHhpdGVtID09PSB0aGlzLnNvdXJjZTtcclxuICAgIH1cclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zb3VyY2UubWFwKCh4KSA9PiB7XHJcbiAgICAgIGlmICh4aXRlbSA9PT0geCkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmdldERhdGFGb3IodGhpcy5uYW1lLCB0aGlzLmlkLCBkYXRhKTtcclxuICAgIHRoaXMudHlwZSA9IChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==