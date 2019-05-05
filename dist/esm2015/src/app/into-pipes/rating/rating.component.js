/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, ElementRef, HostListener } from '@angular/core';
export class RatingComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.singleStar = false;
        this.value = [];
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @return {?}
     */
    click() {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'rating'
        });
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.float = parseFloat(source);
        this.singleStar = args.length ? (args[0] === 'true') : false;
        this.source = source;
        /** @type {?} */
        const size = parseInt(source, 10);
        for (let i = 0; i < size; i++) {
            this.value.push(i);
        }
    }
}
RatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'rating-component',
                template: `
    <span class='rating' *ngIf="singleStar">
        <span class='fa fa-star' aria-hidden='true'></span>
    </span>
    <span class='rating' *ngIf="!singleStar">
        <span class='fa fa-star' aria-hidden='true' *ngFor="let x of value"></span>
        <span class='fa fa-star-half' aria-hidden='true' *ngIf="float != value"></span>
    </span>
    <span class='rate-value' [textContent]="source"></span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px;cursor:pointer}
        .rating {
            display: inline-block;
        }
        `]
            }] }
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [
    { type: ElementRef }
];
RatingComponent.propDecorators = {
    keyup: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    click: [{ type: HostListener, args: ['click', [],] }]
};
if (false) {
    /** @type {?} */
    RatingComponent.prototype.source;
    /** @type {?} */
    RatingComponent.prototype.id;
    /** @type {?} */
    RatingComponent.prototype.name;
    /** @type {?} */
    RatingComponent.prototype.singleStar;
    /** @type {?} */
    RatingComponent.prototype.value;
    /** @type {?} */
    RatingComponent.prototype.float;
    /** @type {?} */
    RatingComponent.prototype.onIntoComponentChange;
    /** @type {?} */
    RatingComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0JsRixNQUFNOzs7O0lBU0YsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7MEJBTHJCLEtBQUs7cUJBQ0gsRUFBRTtxQ0FFSSxJQUFJLFlBQVksRUFBRTtRQUduQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUM7S0FDakQ7Ozs7O0lBR0QsS0FBSyxDQUFDLEtBQVU7O1FBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtLQUNKOzs7O0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFBO0tBQ0w7Ozs7Ozs7SUFDRCxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7UUFDckIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0tBQ0o7OztZQTlESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7S0FTVDt5QkFFRzs7Ozs7U0FLQzthQUVSOzs7O1lBdkJpQyxVQUFVOzs7b0JBcUN2QyxZQUFZLFNBQUMsT0FBTyxFQUFDLENBQUMsUUFBUSxDQUFDO29CQVUvQixZQUFZLFNBQUMsT0FBTyxFQUFDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JhdGluZy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPSdyYXRpbmcnICpuZ0lmPVwic2luZ2xlU3RhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGluZycgKm5nSWY9XCIhc2luZ2xlU3RhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZScgKm5nRm9yPVwibGV0IHggb2YgdmFsdWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXItaGFsZicgYXJpYS1oaWRkZW49J3RydWUnICpuZ0lmPVwiZmxvYXQgIT0gdmFsdWVcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZScgW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4O2N1cnNvcjpwb2ludGVyfVxyXG4gICAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNpbmdsZVN0YXIgPSBmYWxzZTtcclxuICAgIHZhbHVlOiBhbnlbXSA9IFtdO1xyXG4gICAgZmxvYXQ6IGFueTtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZil7XHJcbiAgICAgICAgZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywnMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXVwJyxbJyRldmVudCddKVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJyxbXSlcclxuICAgIGNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdjbGljaycsXHJcbiAgICAgICAgICAgIGl0ZW06ICdyYXRpbmcnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuZmxvYXQgPSBwYXJzZUZsb2F0KHNvdXJjZSk7XHJcbiAgICAgICAgdGhpcy5zaW5nbGVTdGFyID0gYXJncy5sZW5ndGggPyAoYXJnc1swXSA9PT0gJ3RydWUnKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUludChzb3VyY2UsIDEwKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19