import * as tslib_1 from "tslib";
import { Component, Renderer, Output, EventEmitter } from '@angular/core';
let InputGroupComponent = class InputGroupComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    focused(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.type === 'radio') {
            this.source = event.target.value;
        }
        else {
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
    isSelected(item) {
        const xitem = item.value ? item.value : item;
        if (this.type === 'radio') {
            return xitem === this.source;
        }
        let found = false;
        this.source.map((x) => {
            if (xitem === x) {
                found = true;
            }
        });
        return found;
    }
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.type = (source instanceof Array) ? 'checkbox' : 'radio';
    }
};
InputGroupComponent.ctorParameters = () => [
    { type: Renderer }
];
tslib_1.__decorate([
    Output("onIntoComponentChange")
], InputGroupComponent.prototype, "onIntoComponentChange", void 0);
InputGroupComponent = tslib_1.__decorate([
    Component({
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
    <span class="selected-value" [textContent]="source"></span>
    `,
        styles: [`
      :host {display:table;float:left;min-height: 23px}
      :host .selected-value {display:none}
      @media print {
        :host .selected-value {display: block;}
        :host .input-group-item {display: none;}
      }
      `]
    })
], InputGroupComponent);
export { InputGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvaW5wdXRncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE2QjFFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBYTlCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGdEMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVGLENBQUM7SUFFMUMsT0FBTyxDQUFDLEtBQVM7UUFDZixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNsQzthQUFNO1lBQ0wsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEM7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekI7U0FDRjtRQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDOUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBUztRQUNsQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUN6QixPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNmLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDZDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFFLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvRCxDQUFDO0NBQ0YsQ0FBQTs7WUE5QytCLFFBQVE7O0FBRnRDO0lBREMsTUFBTSxDQUFDLHVCQUF1QixDQUFDO2tFQUNXO0FBWGhDLG1CQUFtQjtJQTFCL0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztLQVlUO2lCQUVDOzs7Ozs7O09BT0M7S0FFTixDQUFDO0dBQ1csbUJBQW1CLENBMkQvQjtTQTNEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50LCBQaXBlU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXQtZ3JvdXAtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWl0ZW1cIiAqbmdGb3I9XCJsZXQgeCBvZiBvcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICA8aW5wdXQgXHJcbiAgICAgIFt0eXBlXT1cInR5cGVcIiBcclxuICAgICAgW2lkXT1cIm5hbWUgKyBpXCIgXHJcbiAgICAgIFtuYW1lXT1cIm5hbWUgKyAodHlwZSA9PT0gJ3JhZGlvJyA/ICcnIDogaSlcIiBcclxuICAgICAgW3ZhbHVlXT1cIngudmFsdWUgPyB4LnZhbHVlIDogeFwiIFxyXG4gICAgICBbY2hlY2tlZF09XCJpc1NlbGVjdGVkKHgpXCJcclxuICAgICAgKGZvY3VzKT1cImZvY3VzZWQoJGV2ZW50KVwiLz5cclxuICAgIDxsYWJlbCBbZm9yXT1cIm5hbWUgKyBpXCIgW3RleHRDb250ZW50XT1cIngubGFiZWwgPyB4LmxhYmVsIDogeFwiPjwvbGFiZWw+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLXZhbHVlXCIgW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgYFxyXG4gICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgIDpob3N0IC5zZWxlY3RlZC12YWx1ZSB7ZGlzcGxheTpub25lfVxyXG4gICAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAgIDpob3N0IC5zZWxlY3RlZC12YWx1ZSB7ZGlzcGxheTogYmxvY2s7fVxyXG4gICAgICAgIDpob3N0IC5pbnB1dC1ncm91cC1pdGVtIHtkaXNwbGF5OiBub25lO31cclxuICAgICAgfVxyXG4gICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IGFueTtcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHNlcnZpY2U6IFBpcGVTZXJ2aWNlQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAgZm9jdXNlZChldmVudDphbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5zb3VyY2UuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBpZiAoaSA8IDApIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3BsaWNlKGksMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuICBpc1NlbGVjdGVkKGl0ZW06IGFueSkge1xyXG4gICAgY29uc3QgeGl0ZW0gPSBpdGVtLnZhbHVlID8gaXRlbS52YWx1ZSA6IGl0ZW07XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIHJldHVybiB4aXRlbSA9PT0gdGhpcy5zb3VyY2U7XHJcbiAgICB9XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIHRoaXMuc291cmNlLm1hcCgoeCkgPT4ge1xyXG4gICAgICBpZiAoeGl0ZW0gPT09IHgpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvdW5kO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc2VydmljZS5nZXREYXRhRm9yKHRoaXMubmFtZSwgdGhpcy5pZCwgZGF0YSk7XHJcbiAgICB0aGlzLnR5cGUgPSAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpID8gJ2NoZWNrYm94JyA6ICdyYWRpbyc7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=