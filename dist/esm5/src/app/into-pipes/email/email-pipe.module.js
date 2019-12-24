import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { EmailPipe } from './email.pipe';
import { ComponentPool } from '../common/component.pool';
var EmailIntoPipeModule = /** @class */ (function () {
    function EmailIntoPipeModule(pool) {
        pool.registerComponent('email', EmailComponent);
        pool.registerPipeTransformation('email', EmailPipe.transformationMethod());
    }
    EmailIntoPipeModule_1 = EmailIntoPipeModule;
    EmailIntoPipeModule.forRoot = function () {
        return {
            ngModule: EmailIntoPipeModule_1,
            providers: [EmailPipe]
        };
    };
    var EmailIntoPipeModule_1;
    EmailIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
    EmailIntoPipeModule = EmailIntoPipeModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [EmailComponent, EmailPipe],
            exports: [EmailComponent, EmailPipe],
            entryComponents: [EmailComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__param(0, Inject(ComponentPool))
    ], EmailIntoPipeModule);
    return EmailIntoPipeModule;
}());
export { EmailIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9lbWFpbC9lbWFpbC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVekQ7SUFPRSw2QkFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs0QkFWVSxtQkFBbUI7SUFDdkIsMkJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUN2QixDQUFBO0lBQ0gsQ0FBQzs7O2dCQUN5QyxhQUFhLHVCQUExQyxNQUFNLFNBQUMsYUFBYTs7SUFQdEIsbUJBQW1CO1FBUi9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7WUFDcEMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUM7UUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7T0FQdkIsbUJBQW1CLENBVy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gJy4vZW1haWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1haWxQaXBlIH0gZnJvbSAnLi9lbWFpbC5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0VtYWlsQ29tcG9uZW50LCBFbWFpbFBpcGVdLFxyXG4gIGV4cG9ydHM6IFtFbWFpbENvbXBvbmVudCwgRW1haWxQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtFbWFpbENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pIFxyXG5cclxuZXhwb3J0IGNsYXNzIEVtYWlsSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEVtYWlsSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0VtYWlsUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnZW1haWwnLCBFbWFpbENvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdlbWFpbCcsIEVtYWlsUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIl19