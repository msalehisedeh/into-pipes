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
                styles: [`span span {
            float: left;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQWtCeEQsTUFBTTs7Ozs7OztJQVNGLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7O1FBQ25ELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9GOzs7WUE5QkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7S0FLVDt5QkFFRzs7O1NBR0M7YUFFUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmb250LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdsZWZ0J1wiICAgIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uICE9PSAncmVwbGFjZSdcIiBbdGV4dENvbnRlbnRdPVwiY29udGVudFwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAncmlnaHQnXCIgICBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ3JlcGxhY2UnXCIgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBzcGFuIHNwYW4ge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9udENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgZm9udDogc3RyaW5nO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5mb250ID0gYXJnc1swXTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwibGVmdFwiO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0udG9Mb3dlckNhc2UoKSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gYWN0aW9uID09PSBcIipcIiA/IHNvdXJjZSA6IChcInJlcGxhY2VcIiA9PT0gYWN0aW9uLnRvTG93ZXJDYXNlKCkgPyBcIlwiIDogc291cmNlKTtcclxuICAgIH1cclxufVxyXG4iXX0=