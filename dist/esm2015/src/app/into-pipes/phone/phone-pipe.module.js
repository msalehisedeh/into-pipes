var PhoneIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from './phone.component';
import { PhonePipe } from './phone.pipe';
import { ComponentPool } from '../common/component.pool';
let PhoneIntoPipeModule = PhoneIntoPipeModule_1 = class PhoneIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('phone', PhoneComponent);
        pool.registerPipeTransformation('phone', PhonePipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: PhoneIntoPipeModule_1,
            providers: [PhonePipe]
        };
    }
};
PhoneIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
PhoneIntoPipeModule = PhoneIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [PhoneComponent, PhonePipe],
        exports: [PhoneComponent, PhonePipe],
        entryComponents: [PhoneComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], PhoneIntoPipeModule);
export { PhoneIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9waG9uZS9waG9uZS1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsbUJBQW1CLDJCQUFoQyxNQUFhLG1CQUFtQjtJQU85QixZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBVEQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDdkIsQ0FBQTtJQUNILENBQUM7Q0FLRixDQUFBOztZQUoyQyxhQUFhLHVCQUExQyxNQUFNLFNBQUMsYUFBYTs7QUFQdEIsbUJBQW1CO0lBUi9CLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7UUFDcEMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FQdkIsbUJBQW1CLENBVy9CO1NBWFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUGhvbmVDb21wb25lbnQgfSBmcm9tICcuL3Bob25lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBob25lUGlwZSB9IGZyb20gJy4vcGhvbmUucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQaG9uZUNvbXBvbmVudCwgUGhvbmVQaXBlXSxcclxuICBleHBvcnRzOiBbUGhvbmVDb21wb25lbnQsIFBob25lUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUGhvbmVDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBob25lSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFBob25lSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1Bob25lUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgncGhvbmUnLCBQaG9uZUNvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdwaG9uZScsIFBob25lUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIl19