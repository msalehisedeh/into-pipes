/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
export class CheckboxComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        /** @type {?} */
        const input = event.target;
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
            type: "check",
            item: this.data
        });
        if (this.useFont) {
            setTimeout(() => {
                if (this.check) {
                    this.check.nativeElement.focus();
                }
                if (this.uncheck) {
                    this.uncheck.nativeElement.focus();
                }
            }, 66);
        }
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.useFont = args.length > 1 ? Boolean(args[1]) : false;
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-component',
                template: `
    <span *ngIf="useFont" class="check-font">
      <span *ngIf="source === ideal" #check tabindex="0" class="fa fa-check" (keyup)="keyup($event)" (click)="click($event)"></span>
      <span *ngIf="source !== ideal" #uncheck tabindex="0" class="fa fa-close" (keyup)="keyup($event)" (click)="click($event)"></span>
    </span>
    <input *ngIf="!useFont" 
            type="checkbox" 
            tabindex="0" 
            [value]="source" 
            [checked]="source===ideal ? true : null" 
            (keyup)="keyup($event)"
            (click)="click($event)" />
    `,
                styles: [`
        :host .check-font .fa{margin: 0 5px}
        :host {display:table;float:left;min-height: 20px}
        .check-font:hover{color: #fabdab;}
        .check-font {cursor: pointer;}
        `]
            }] }
];
CheckboxComponent.propDecorators = {
    check: [{ type: ViewChild, args: ["check",] }],
    uncheck: [{ type: ViewChild, args: ["uncheck",] }],
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkIzRSxNQUFNOztxQ0FpQm9CLElBQUksWUFBWSxFQUFFOzs7Ozs7SUFFMUMsS0FBSyxDQUFDLEtBQVU7O1FBQ2QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0tBQ0E7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7O1FBQ2QsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQy9CO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNsQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3BDO2FBQ0YsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUNQO0tBQ0Y7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQ3pEOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0tBWVQ7eUJBRUc7Ozs7O1NBS0M7YUFFUjs7O29CQVdFLFNBQVMsU0FBQyxPQUFPO3NCQUdqQixTQUFTLFNBQUMsU0FBUztvQ0FHbkIsTUFBTSxTQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaGVja2JveC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwidXNlRm9udFwiIGNsYXNzPVwiY2hlY2stZm9udFwiPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNvdXJjZSA9PT0gaWRlYWxcIiAjY2hlY2sgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYSBmYS1jaGVja1wiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwic291cmNlICE9PSBpZGVhbFwiICN1bmNoZWNrIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZmEgZmEtY2xvc2VcIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGlucHV0ICpuZ0lmPVwiIXVzZUZvbnRcIiBcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgICAgICBbdmFsdWVdPVwic291cmNlXCIgXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNvdXJjZT09PWlkZWFsID8gdHJ1ZSA6IG51bGxcIiBcclxuICAgICAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiIC8+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IC5jaGVjay1mb250IC5mYXttYXJnaW46IDAgNXB4fVxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICAuY2hlY2stZm9udDpob3Zlcntjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgLmNoZWNrLWZvbnQge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIG9yaWdpbmFsOiBzdHJpbmc7XHJcbiAgaWRlYWw6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB1c2VGb250OiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKFwiY2hlY2tcIilcclxuICBjaGVjaztcclxuXHJcbiAgQFZpZXdDaGlsZChcInVuY2hlY2tcIilcclxuICB1bmNoZWNrO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcblx0XHR9XHJcbiAgfVxyXG5cclxuICBjbGljayhldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5zb3VyY2UgPT09IHRoaXMuaWRlYWwpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLm9yaWdpbmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmlkZWFsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgdHlwZTogXCJjaGVja1wiLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMudXNlRm9udCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy5jaGVjay5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnVuY2hlY2spIHtcclxuICAgICAgICAgIHRoaXMudW5jaGVjay5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDY2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5pZGVhbD0gYXJncy5sZW5ndGggPyBTdHJpbmcoYXJnc1swXSkgOiBcIlwiO1xyXG4gICAgdGhpcy51c2VGb250PSBhcmdzLmxlbmd0aCA+IDEgPyBCb29sZWFuKGFyZ3NbMV0pIDogZmFsc2U7XHJcbiAgICB0aGlzLnNvdXJjZT0gU3RyaW5nKHNvdXJjZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcmlnaW5hbD0gdGhpcy5zb3VyY2UgPT09IHRoaXMuaWRlYWwgPyBcIlwiIDogc291cmNlO1xyXG4gIH1cclxufVxyXG5cclxuIl19