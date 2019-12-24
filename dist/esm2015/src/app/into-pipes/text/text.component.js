import * as tslib_1 from "tslib";
import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
let TextComponent = class TextComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.rows = 4;
        this.limit = 0;
        this.editName = false;
        this.counter = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    keyup(event) {
        const code = event.which;
        if ((code === 48) || (code === 8)) {
            this.source = event.target.value;
        }
        else if (((code > 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) || (code == 32) ||
            ((code >= 186) && (code <= 222))) {
            if (!this.limit || this.source.length < this.limit) {
                this.source = event.target.value;
            }
        }
        else if ((code === 13) || (code === 9) || (code === 27)) {
            this.editName = false;
            if (this.oldValue !== String(this.source)) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: 'change',
                    item: this.oldValue
                });
                this.oldValue = String(this.source);
            }
            if (code === 13) {
                setTimeout(() => {
                    if (this.nameHolder) {
                        this.renderer.invokeElementMethod(this.nameHolder.nativeElement, "focus");
                    }
                }, 99);
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
                type: 'blur',
                item: this.oldValue
            });
            this.oldValue = String(this.source);
        }
    }
    focus(event) {
        this.click(event);
    }
    click(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        setTimeout(() => {
            if (this.nameEditor) {
                this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
            }
        }, 99);
    }
    transform(source, data, args) {
        this.source = source;
        this.oldValue = source;
        this.rows = args.length ? args[0] : 4;
        this.limit = args.length > 1 ? args[1] : 0;
        this.counter = args.length > 2 ? args[2] : false;
    }
};
TextComponent.ctorParameters = () => [
    { type: Renderer }
];
tslib_1.__decorate([
    ViewChild("nameEditor", { static: false })
], TextComponent.prototype, "nameEditor", void 0);
tslib_1.__decorate([
    ViewChild("nameHolder", { static: false })
], TextComponent.prototype, "nameHolder", void 0);
tslib_1.__decorate([
    Output("onIntoComponentChange")
], TextComponent.prototype, "onIntoComponentChange", void 0);
TextComponent = tslib_1.__decorate([
    Component({
        selector: 'text-component',
        template: `
    <span class="text-wrapper" *ngIf="editName">
      <textarea #nameEditor
        [id]="id"
        [name]="name"
        [value]="source"
        [attr.maxlength]="limit ? limit : null"
        [rows]="rows"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'></textarea>
      <span *ngIf="counter" class="counter" 
        [textContent]="limit ? (limit - source.length) + ' remaining' : source.length + ' typed'"></span>
    </span>
    <span #nameHolder
        *ngIf='!editName'
        class='locked' 
        tabindex='0' 
        (click)='click($event)'
        (keyup)='focus($event)'
        [innerHTML]="source">
    </span>
    `,
        styles: [`
        .locked {
          display: block;
          cursor: pointer;
          min-height: 23px;
          min-width: 33px;
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
        }
        .text-wrapper{box-sizing: border-box;display:table;width: 100%;}
        .text-wrapper textarea {box-sizing: border-box;display:block;cursor: beam;width: 100%;}
        .counter{display: table;float:right;color: #ddd;}
        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 23px;min-width: 33px;}
        :host .locked:hover{border: 1px solid #fabdab;}
        `]
    })
], TextComponent);
export { TextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy90ZXh0L3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWdEckYsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQW9CeEIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWZ0QyxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVVoQiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTNDLENBQUM7SUFDRCxLQUFLLENBQUMsS0FBVTtRQUNkLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDL0MsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENB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QUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFBOztZQXpFK0IsUUFBUTs7QUFSdEM7SUFEQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO2lEQUM5QjtBQUdYO0lBREMsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztpREFDL0I7QUFHVjtJQURDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQzs0REFDVztBQWxCaEMsYUFBYTtJQTdDekIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXFCVDtpQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FpQkM7S0FFUixDQUFDO0dBQ1csYUFBYSxDQTZGekI7U0E3RlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGV4dC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwidGV4dC13cmFwcGVyXCIgKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgICA8dGV4dGFyZWEgI25hbWVFZGl0b3JcclxuICAgICAgICBbaWRdPVwiaWRcIlxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIlxyXG4gICAgICAgIFthdHRyLm1heGxlbmd0aF09XCJsaW1pdCA/IGxpbWl0IDogbnVsbFwiXHJcbiAgICAgICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICAgICAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCIgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSc+PC90ZXh0YXJlYT5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJjb3VudGVyXCIgY2xhc3M9XCJjb3VudGVyXCIgXHJcbiAgICAgICAgW3RleHRDb250ZW50XT1cImxpbWl0ID8gKGxpbWl0IC0gc291cmNlLmxlbmd0aCkgKyAnIHJlbWFpbmluZycgOiBzb3VyY2UubGVuZ3RoICsgJyB0eXBlZCdcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAjbmFtZUhvbGRlclxyXG4gICAgICAgICpuZ0lmPSchZWRpdE5hbWUnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChjbGljayk9J2NsaWNrKCRldmVudCknXHJcbiAgICAgICAgKGtleXVwKT0nZm9jdXMoJGV2ZW50KSdcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZVwiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAubG9ja2VkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMjNweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzNweDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIFxyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LXdyYXBwZXJ7Ym94LXNpemluZzogYm9yZGVyLWJveDtkaXNwbGF5OnRhYmxlO3dpZHRoOiAxMDAlO31cclxuICAgICAgICAudGV4dC13cmFwcGVyIHRleHRhcmVhIHtib3gtc2l6aW5nOiBib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7Y3Vyc29yOiBiZWFtO3dpZHRoOiAxMDAlO31cclxuICAgICAgICAuY291bnRlcntkaXNwbGF5OiB0YWJsZTtmbG9hdDpyaWdodDtjb2xvcjogI2RkZDt9XHJcbiAgICAgICAgOmhvc3Qge2JveC1zaXppbmc6IGJvcmRlci1ib3g7d2lkdGg6IDEwMCU7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7bWluLXdpZHRoOiAzM3B4O31cclxuICAgICAgICA6aG9zdCAubG9ja2VkOmhvdmVye2JvcmRlcjogMXB4IHNvbGlkICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcm93cyA9IDQ7XHJcbiAgbGltaXQgPSAwO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgY291bnRlciA9IGZhbHNlO1xyXG4gIG9sZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lRWRpdG9yXCIsIHtzdGF0aWM6IGZhbHNlfSlcclxuICBuYW1lRWRpdG9yO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUhvbGRlclwiLCB7c3RhdGljOiBmYWxzZX0pXHJcbiAgbmFtZUhvbGRlclxyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcbiAga2V5dXAoZXZlbnQ6IGFueSkgeyAgICBcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmICgoY29kZSA9PT0gNDgpIHx8IChjb2RlID09PSA4KSkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoKChjb2RlID4gNDgpICYmIChjb2RlIDw9IDkwKSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gOTYpICYmIChjb2RlIDw9IDExMSkpIHx8IChjb2RlID09IDMyKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSAxODYpICYmIChjb2RlIDw9IDIyMikpKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMubGltaXQgfHwgdGhpcy5zb3VyY2UubGVuZ3RoIDwgdGhpcy5saW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoKGNvZGUgPT09IDEzKSB8fCAoY29kZSA9PT0gOSkgfHwgKGNvZGUgPT09IDI3KSApIHtcclxuICAgICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgdHlwZTogJ2NoYW5nZScsXHJcbiAgICAgICAgICBpdGVtOiB0aGlzLm9sZFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgaWYgKHRoaXMubmFtZUhvbGRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lSG9sZGVyLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSw5OSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYmx1cihldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICB0eXBlOiAnYmx1cicsXHJcbiAgICAgICAgaXRlbTogdGhpcy5vbGRWYWx1ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvY3VzKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuY2xpY2soZXZlbnQpO1xyXG4gIH1cclxuICBjbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICB0aGlzLmVkaXROYW1lID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgaWYgKHRoaXMubmFtZUVkaXRvcikge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgfVxyXG4gICAgfSw5OSk7XHJcbn1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBzb3VyY2U7XHJcbiAgICB0aGlzLnJvd3MgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiA0O1xyXG4gICAgdGhpcy5saW1pdCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAwO1xyXG4gICAgdGhpcy5jb3VudGVyID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuIl19