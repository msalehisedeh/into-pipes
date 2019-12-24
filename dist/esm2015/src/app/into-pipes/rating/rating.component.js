import * as tslib_1 from "tslib";
import { Component, EventEmitter, ElementRef, HostListener } from '@angular/core';
let RatingComponent = class RatingComponent {
    constructor(el) {
        this.el = el;
        this.singleStar = false;
        this.value = [];
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    click() {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'rating'
        });
    }
    transform(source, data, args) {
        this.float = parseFloat(source);
        this.singleStar = args.length ? (args[0] === 'true') : false;
        this.source = source;
        const size = parseInt(source, 10);
        for (let i = 0; i < size; i++) {
            this.value.push(i);
        }
    }
};
RatingComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    HostListener('keyup', ['$event'])
], RatingComponent.prototype, "keyup", null);
tslib_1.__decorate([
    HostListener('click', [])
], RatingComponent.prototype, "click", null);
RatingComponent = tslib_1.__decorate([
    Component({
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
        :host {display:table;float:left;min-height: 23px;cursor:pointer}
        .rating {
            display: inline-block;
        }
        @media print {
            :host .rating {
                display: none;
            }
        }
        `]
    })
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNkJsRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBU3hCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTGxDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUVyQiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3BDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBR0QsS0FBSyxDQUFDLEtBQVU7UUFDWixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztDQUNKLENBQUE7O1lBakMyQixVQUFVOztBQUtsQztJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0Q0FTaEM7QUFFRDtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDOzRDQVN4QjtBQWhDUSxlQUFlO0lBMUIzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7O0tBU1Q7aUJBRUc7Ozs7Ozs7Ozs7U0FVQztLQUVSLENBQUM7R0FDVyxlQUFlLENBMEMzQjtTQTFDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYXRpbmctY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz0ncmF0aW5nJyAqbmdJZj1cInNpbmdsZVN0YXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPSdyYXRpbmcnICpuZ0lmPVwiIXNpbmdsZVN0YXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnICpuZ0Zvcj1cImxldCB4IG9mIHZhbHVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJyAqbmdJZj1cImZsb2F0ICE9IHZhbHVlXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGUtdmFsdWUnIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDtjdXJzb3I6cG9pbnRlcn1cclxuICAgICAgICAucmF0aW5nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAgICAgICA6aG9zdCAucmF0aW5nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2luZ2xlU3RhciA9IGZhbHNlO1xyXG4gICAgdmFsdWU6IGFueVtdID0gW107XHJcbiAgICBmbG9hdDogYW55O1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKXtcclxuICAgICAgICBlbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCcwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLFsnJGV2ZW50J10pXHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLFtdKVxyXG4gICAgY2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogJ2NsaWNrJyxcclxuICAgICAgICAgICAgaXRlbTogJ3JhdGluZydcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5mbG9hdCA9IHBhcnNlRmxvYXQoc291cmNlKTtcclxuICAgICAgICB0aGlzLnNpbmdsZVN0YXIgPSBhcmdzLmxlbmd0aCA/IChhcmdzWzBdID09PSAndHJ1ZScpIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlSW50KHNvdXJjZSwgMTApO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=