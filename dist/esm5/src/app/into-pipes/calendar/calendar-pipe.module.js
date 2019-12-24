import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { ComponentPool } from '../common/component.pool';
var CalendarIntoPipeModule = /** @class */ (function () {
    function CalendarIntoPipeModule(pool) {
        pool.registerComponent('calendar', CalendarComponent);
    }
    CalendarIntoPipeModule_1 = CalendarIntoPipeModule;
    CalendarIntoPipeModule.forRoot = function () {
        return {
            ngModule: CalendarIntoPipeModule_1,
            providers: []
        };
    };
    var CalendarIntoPipeModule_1;
    CalendarIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
    CalendarIntoPipeModule = CalendarIntoPipeModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [CalendarComponent],
            exports: [CalendarComponent],
            entryComponents: [CalendarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__param(0, Inject(ComponentPool))
    ], CalendarIntoPipeModule);
    return CalendarIntoPipeModule;
}());
export { CalendarIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jYWxlbmRhci9jYWxlbmRhci1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVekQ7SUFRRSxnQ0FBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7K0JBVlUsc0JBQXNCO0lBQzFCLDhCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLHdCQUFzQjtZQUNoQyxTQUFTLEVBQUUsRUFDVjtTQUNGLENBQUE7SUFDSCxDQUFDOzs7Z0JBQ3lDLGFBQWEsdUJBQTFDLE1BQU0sU0FBQyxhQUFhOztJQVJ0QixzQkFBc0I7UUFSbEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUM7UUFVYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7T0FSdkIsc0JBQXNCLENBV2xDO0lBQUQsNkJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0NhbGVuZGFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ2FsZW5kYXJDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbGVuZGFyQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDYWxlbmRhckludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdjYWxlbmRhcicsIENhbGVuZGFyQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIl19