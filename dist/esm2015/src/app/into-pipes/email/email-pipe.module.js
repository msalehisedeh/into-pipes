var EmailIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { EmailPipe } from './email.pipe';
import { ComponentPool } from '../common/component.pool';
let EmailIntoPipeModule = EmailIntoPipeModule_1 = class EmailIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('email', EmailComponent);
        pool.registerPipeTransformation('email', EmailPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: EmailIntoPipeModule_1,
            providers: [EmailPipe]
        };
    }
};
EmailIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
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
export { EmailIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9lbWFpbC9lbWFpbC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsbUJBQW1CLDJCQUFoQyxNQUFhLG1CQUFtQjtJQU85QixZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBVEQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDdkIsQ0FBQTtJQUNILENBQUM7Q0FLRixDQUFBOztZQUoyQyxhQUFhLHVCQUExQyxNQUFNLFNBQUMsYUFBYTs7QUFQdEIsbUJBQW1CO0lBUi9CLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7UUFDcEMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FQdkIsbUJBQW1CLENBVy9CO1NBWFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRW1haWxDb21wb25lbnQgfSBmcm9tICcuL2VtYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtYWlsUGlwZSB9IGZyb20gJy4vZW1haWwucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtFbWFpbENvbXBvbmVudCwgRW1haWxQaXBlXSxcclxuICBleHBvcnRzOiBbRW1haWxDb21wb25lbnQsIEVtYWlsUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbRW1haWxDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KSBcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBFbWFpbEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtFbWFpbFBpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2VtYWlsJywgRW1haWxDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignZW1haWwnLCBFbWFpbFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==