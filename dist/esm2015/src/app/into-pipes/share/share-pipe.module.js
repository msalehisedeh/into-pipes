var ShareIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { ComponentPool } from '../common/component.pool';
let ShareIntoPipeModule = ShareIntoPipeModule_1 = class ShareIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('share', ShareComponent);
    }
    static forRoot() {
        return {
            ngModule: ShareIntoPipeModule_1,
            providers: []
        };
    }
};
ShareIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
ShareIntoPipeModule = ShareIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [ShareComponent],
        exports: [ShareComponent],
        entryComponents: [ShareComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], ShareIntoPipeModule);
export { ShareIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9zaGFyZS9zaGFyZS1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVV6RCxJQUFhLG1CQUFtQiwyQkFBaEMsTUFBYSxtQkFBbUI7SUFPOUIsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUkQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUE7SUFDSCxDQUFDO0NBSUYsQ0FBQTs7WUFIMkMsYUFBYSx1QkFBMUMsTUFBTSxTQUFDLGFBQWE7O0FBUHRCLG1CQUFtQjtJQVIvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztRQUN6QixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDbEMsQ0FBQztJQVNhLG1CQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtHQVB2QixtQkFBbUIsQ0FVL0I7U0FWWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NoYXJlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2hhcmVDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1NoYXJlQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3NoYXJlJywgU2hhcmVDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=