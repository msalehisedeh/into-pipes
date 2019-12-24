import * as tslib_1 from "tslib";
import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
let InputComponent = class InputComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.editName = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    keyup(event) {
        event.stopPropagation();
        event.preventDefault();
        const code = event.which;
        if (((code >= 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) ||
            ((code == 32) || (code == 8)) ||
            ((code >= 186) && (code <= 222))) {
            this.source = event.target.value;
        }
        else if ((code === 13) || (code === 9) || (code === 27)) {
            this.editName = false;
            if (this.oldValue !== String(this.source)) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: "change",
                    item: this.data
                });
            }
            if (code === 13) {
                setTimeout(() => {
                    if (this.nameHolder) {
                        this.renderer.invokeElementMethod(this.nameHolder.nativeElement, "focus");
                    }
                }, 66);
            }
        }
    }
    blur(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = false;
        if (this.oldValue !== String(this.source)) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                item: this.data
            });
        }
    }
    keydown(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if ((code === 13) || (code === 9)) {
            this.renderer.invokeElementMethod(event.target, "click");
            setTimeout(() => {
                if (this.nameEditor) {
                    this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
                }
            }, 66);
        }
    }
    clickName(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        this.oldValue = String(this.source);
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
        }, 66);
    }
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.placeholder = args.length ? args[0] : "";
        this.formatting = args.length > 1 ? args[1] : "";
    }
};
InputComponent.ctorParameters = () => [
    { type: Renderer }
];
tslib_1.__decorate([
    ViewChild("nameEditor", { static: false })
], InputComponent.prototype, "nameEditor", void 0);
tslib_1.__decorate([
    ViewChild("nameHolder", { static: false })
], InputComponent.prototype, "nameHolder", void 0);
tslib_1.__decorate([
    Output("onIntoComponentChange")
], InputComponent.prototype, "onIntoComponentChange", void 0);
InputComponent = tslib_1.__decorate([
    Component({
        selector: 'input-component',
        template: `
    <span *ngIf="editName">
    <input #nameEditor
        type='text' 
        [id]="id"
        [name]="name"
        [value]="source"
        [placeholder]="placeholder"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'>
    </span>
    <span #nameHolder
        *ngIf='!editName && formatting'
        class='locked' 
        tabindex='0' 
        (keyup)='keydown($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? (source | into:formatting) : '&nbsp;'">
    </span>
    <span #nameHolder
        *ngIf='!editName && !formatting'
        class='locked' 
        tabindex='0' 
        (keyup)='keydown($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? source : '&nbsp;'">
    </span>
    `,
        styles: [`
        .locked {
          display: inline-block;
          cursor: pointer;
          min-width: 30px;
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
        }
        input {
          cursor: beam;
        }
        :host {display:table;float:left;min-height: 23px}
        :host .locked:hover{border: 1px solid #fabdab;}
        `]
    })
], InputComponent);
export { InputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFEckYsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQW9CekIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVp0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBVWpCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJM0MsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDdEM7YUFBTSxJQUFJLENBQUMsSUFBSSxLQUFLLEVB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QUUsSUFBUyxFQUFFLElBQVc7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0NBQ0YsQ0FBQTs7WUFoRitCLFFBQVE7O0FBUnRDO0lBREMsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztrREFDOUI7QUFHWDtJQURDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7a0RBQy9CO0FBR1Y7SUFEQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7NkRBQ1c7QUFsQmhDLGNBQWM7SUFsRDFCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EyQlQ7aUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQkM7S0FFUixDQUFDO0dBQ1csY0FBYyxDQW9HMUI7U0FwR1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXQtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cImVkaXROYW1lXCI+XHJcbiAgICA8aW5wdXQgI25hbWVFZGl0b3JcclxuICAgICAgICB0eXBlPSd0ZXh0JyBcclxuICAgICAgICBbaWRdPVwiaWRcIlxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCIgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSc+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAjbmFtZUhvbGRlclxyXG4gICAgICAgICpuZ0lmPSchZWRpdE5hbWUgJiYgZm9ybWF0dGluZydcclxuICAgICAgICBjbGFzcz0nbG9ja2VkJyBcclxuICAgICAgICB0YWJpbmRleD0nMCcgXHJcbiAgICAgICAgKGtleXVwKT0na2V5ZG93bigkZXZlbnQpJ1xyXG4gICAgICAgIChjbGljayk9XCJjbGlja05hbWUoJGV2ZW50KVwiXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJzb3VyY2UgPyAoc291cmNlIHwgaW50bzpmb3JtYXR0aW5nKSA6ICcmbmJzcDsnXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAjbmFtZUhvbGRlclxyXG4gICAgICAgICpuZ0lmPSchZWRpdE5hbWUgJiYgIWZvcm1hdHRpbmcnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleWRvd24oJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPVwiY2xpY2tOYW1lKCRldmVudClcIlxyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic291cmNlID8gc291cmNlIDogJyZuYnNwOydcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgLmxvY2tlZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgICAgICBcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBjdXJzb3I6IGJlYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICA6aG9zdCAubG9ja2VkOmhvdmVye2JvcmRlcjogMXB4IHNvbGlkICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIGZvcm1hdHRpbmc6c3RyaW5nO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgb2xkVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVFZGl0b3JcIiwge3N0YXRpYzogZmFsc2V9KVxyXG4gIG5hbWVFZGl0b3I7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lSG9sZGVyXCIsIHtzdGF0aWM6IGZhbHNlfSlcclxuICBuYW1lSG9sZGVyXHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmICgoKGNvZGUgPj0gNDgpICYmIChjb2RlIDw9IDkwKSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gOTYpICYmIChjb2RlIDw9IDExMSkpIHx8XHJcbiAgICAgICAgKChjb2RlID09IDMyKSB8fCAoY29kZSA9PSA4KSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gMTg2KSAmJiAoY29kZSA8PSAyMjIpKSkge1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpIHx8IChjb2RlID09PSAyNykgKSB7XHJcbiAgICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGFuZ2VcIixcclxuICAgICAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgIGlmICh0aGlzLm5hbWVIb2xkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUhvbGRlci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sNjYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJsdXIoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5ZG93bihldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChldmVudC50YXJnZXQsIFwiY2xpY2tcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBpZiAodGhpcy5uYW1lRWRpdG9yKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lRWRpdG9yLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDY2KTtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGNsaWNrTmFtZShldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmVkaXROYW1lID0gdHJ1ZTtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBTdHJpbmcodGhpcy5zb3VyY2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgIH0sNjYpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXI9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==