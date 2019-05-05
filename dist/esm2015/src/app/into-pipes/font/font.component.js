/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class FontComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.font = args[0];
        this.location = args.length > 1 ? args[1] : "left";
        /** @type {?} */
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    }
}
FontComponent.decorators = [
    { type: Component, args: [{
                selector: 'font-component',
                template: `
        <span *ngIf="location === 'left'"    [class]="font" aria-hidden='true'></span>
        <span *ngIf="location !== 'replace'" [textContent]="content"></span>
        <span *ngIf="location === 'right'"   [class]="font" aria-hidden='true'></span>
        <span *ngIf="location === 'replace'" [class]="font" aria-hidden='true'></span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        :host span {
            float: left;
            margin: 0 5px;
        }
        `]
            }] }
];
if (false) {
    /** @type {?} */
    FontComponent.prototype.font;
    /** @type {?} */
    FontComponent.prototype.location;
    /** @type {?} */
    FontComponent.prototype.source;
    /** @type {?} */
    FontComponent.prototype.id;
    /** @type {?} */
    FontComponent.prototype.name;
    /** @type {?} */
    FontComponent.prototype.content;
    /** @type {?} */
    FontComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9mb250L2ZvbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQXFCeEQsTUFBTTs7Ozs7OztJQVNGLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7O1FBQ25ELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9GOzs7WUFqQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7S0FLVDt5QkFFRzs7Ozs7O1NBTUM7YUFFUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZvbnQtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ2xlZnQnXCIgICAgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gIT09ICdyZXBsYWNlJ1wiIFt0ZXh0Q29udGVudF09XCJjb250ZW50XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdyaWdodCdcIiAgIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAncmVwbGFjZSdcIiBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICA6aG9zdCBzcGFuIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvbnRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIGZvbnQ6IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuZm9udCA9IGFyZ3NbMF07XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcImxlZnRcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGFjdGlvbiA9PT0gXCIqXCIgPyBzb3VyY2UgOiAoXCJyZXBsYWNlXCIgPT09IGFjdGlvbi50b0xvd2VyQ2FzZSgpID8gXCJcIiA6IHNvdXJjZSk7XHJcbiAgICB9XHJcbn1cclxuIl19