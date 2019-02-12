/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
export class TextComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.rows = 4;
        this.limit = 0;
        this.editName = false;
        this.counter = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
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
    /**
     * @param {?} event
     * @return {?}
     */
    blur(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = false;
        if (this.oldValue !== String(this.source)) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                item: this.oldValue
            });
            this.oldValue = String(this.source);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    focus(event) {
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
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        setTimeout(() => {
            if (this.nameEditor) {
                this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
            }
        }, 99);
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.oldValue = source;
        this.rows = args.length ? args[0] : 4;
        this.limit = args.length > 1 ? args[1] : 0;
        this.counter = args.length > 2 ? args[2] : false;
    }
}
TextComponent.decorators = [
    { type: Component, args: [{
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
          display: table;
          cursor: pointer;
          min-width: 30px;
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
        }
        .text-wrapper{box-sizing: border-box;display:table;width: 100%;}
        .text-wrapper textarea {box-sizing: border-box;display:block;cursor: beam;width: 100%;}
        .counter{display: table;float:right;color: #ddd;}
        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 23px}
        :host .locked:hover{border: 1px solid #fabdab;}
        `]
            }] }
];
/** @nocollapse */
TextComponent.ctorParameters = () => [
    { type: Renderer }
];
TextComponent.propDecorators = {
    nameEditor: [{ type: ViewChild, args: ["nameEditor",] }],
    nameHolder: [{ type: ViewChild, args: ["nameHolder",] }],
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};
if (false) {
    /** @type {?} */
    TextComponent.prototype.source;
    /** @type {?} */
    TextComponent.prototype.id;
    /** @type {?} */
    TextComponent.prototype.name;
    /** @type {?} */
    TextComponent.prototype.rows;
    /** @type {?} */
    TextComponent.prototype.limit;
    /** @type {?} */
    TextComponent.prototype.editName;
    /** @type {?} */
    TextComponent.prototype.counter;
    /** @type {?} */
    TextComponent.prototype.oldValue;
    /** @type {?} */
    TextComponent.prototype.nameEditor;
    /** @type {?} */
    TextComponent.prototype.nameHolder;
    /** @type {?} */
    TextComponent.prototype.onIntoComponentChange;
    /** @type {?} */
    TextComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy90ZXh0L3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQStDckYsTUFBTTs7OztJQW9CSixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO29CQWYvQixDQUFDO3FCQUNBLENBQUM7d0JBQ0UsS0FBSzt1QkFDTixLQUFLO3FDQVVTLElBQUksWUFBWSxFQUFFO0tBSXpDOzs7OztJQUNELEtBQUssQ0FBQyxLQUFVOztRQUNkLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDbEM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQy9DLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJ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T0FBTyxDQUFDLENBQUM7YUFDM0U7U0FDRixFQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ1Q7Ozs7Ozs7SUFFQyxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDbEQ7OztZQXpJRixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQlQ7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQkM7YUFFUjs7OztZQTlDOEIsUUFBUTs7O3lCQTBEcEMsU0FBUyxTQUFDLFlBQVk7eUJBR3RCLFNBQVMsU0FBQyxZQUFZO29DQUd0QixNQUFNLFNBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0ZXh0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdyYXBwZXJcIiAqbmdJZj1cImVkaXROYW1lXCI+XHJcbiAgICAgIDx0ZXh0YXJlYSAjbmFtZUVkaXRvclxyXG4gICAgICAgIFtpZF09XCJpZFwiXHJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgW2F0dHIubWF4bGVuZ3RoXT1cImxpbWl0ID8gbGltaXQgOiBudWxsXCJcclxuICAgICAgICBbcm93c109XCJyb3dzXCJcclxuICAgICAgICAoYmx1cik9XCJibHVyKCRldmVudClcIiBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJz48L3RleHRhcmVhPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cImNvdW50ZXJcIiBjbGFzcz1cImNvdW50ZXJcIiBcclxuICAgICAgICBbdGV4dENvbnRlbnRdPVwibGltaXQgPyAobGltaXQgLSBzb3VyY2UubGVuZ3RoKSArICcgcmVtYWluaW5nJyA6IHNvdXJjZS5sZW5ndGggKyAnIHR5cGVkJ1wiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICNuYW1lSG9sZGVyXHJcbiAgICAgICAgKm5nSWY9JyFlZGl0TmFtZSdcclxuICAgICAgICBjbGFzcz0nbG9ja2VkJyBcclxuICAgICAgICB0YWJpbmRleD0nMCcgXHJcbiAgICAgICAgKGNsaWNrKT0nY2xpY2soJGV2ZW50KSdcclxuICAgICAgICAoa2V5dXApPSdmb2N1cygkZXZlbnQpJ1xyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic291cmNlXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5sb2NrZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgICAgICBcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC13cmFwcGVye2JveC1zaXppbmc6IGJvcmRlci1ib3g7ZGlzcGxheTp0YWJsZTt3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgLnRleHQtd3JhcHBlciB0ZXh0YXJlYSB7Ym94LXNpemluZzogYm9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO2N1cnNvcjogYmVhbTt3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgLmNvdW50ZXJ7ZGlzcGxheTogdGFibGU7ZmxvYXQ6cmlnaHQ7Y29sb3I6ICNkZGQ7fVxyXG4gICAgICAgIDpob3N0IHtib3gtc2l6aW5nOiBib3JkZXItYm94O3dpZHRoOiAxMDAlO2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0IC5sb2NrZWQ6aG92ZXJ7Ym9yZGVyOiAxcHggc29saWQgI2ZhYmRhYjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBzb3VyY2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByb3dzID0gNDtcclxuICBsaW1pdCA9IDA7XHJcbiAgZWRpdE5hbWUgPSBmYWxzZTtcclxuICBjb3VudGVyID0gZmFsc2U7XHJcbiAgb2xkVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVFZGl0b3JcIilcclxuICBuYW1lRWRpdG9yO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUhvbGRlclwiKVxyXG4gIG5hbWVIb2xkZXJcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuXHJcbiAgfVxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHsgICAgXHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoKGNvZGUgPT09IDQ4KSB8fCAoY29kZSA9PT0gOCkpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKCgoY29kZSA+IDQ4KSAmJiAoY29kZSA8PSA5MCkpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDk2KSAmJiAoY29kZSA8PSAxMTEpKSB8fCAoY29kZSA9PSAzMikgfHxcclxuICAgICAgICAoKGNvZGUgPj0gMTg2KSAmJiAoY29kZSA8PSAyMjIpKSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmxpbWl0IHx8IHRoaXMuc291cmNlLmxlbmd0aCA8IHRoaXMubGltaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpIHx8IChjb2RlID09PSAyNykgKSB7XHJcbiAgICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgIGl0ZW06IHRoaXMub2xkVmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lSG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVIb2xkZXIubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDk5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBibHVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgIGl0ZW06IHRoaXMub2xkVmFsdWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub2xkVmFsdWUgPSBTdHJpbmcodGhpcy5zb3VyY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb2N1cyhldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIHRoaXMuZWRpdE5hbWUgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICBpZiAodGhpcy5uYW1lRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LDk5KTtcclxufVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IHNvdXJjZTtcclxuICAgIHRoaXMucm93cyA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IDQ7XHJcbiAgICB0aGlzLmxpbWl0ID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IDA7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=