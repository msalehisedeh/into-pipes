var RatingIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { RatingPipe } from './rating.pipe';
import { ComponentPool } from '../common/component.pool';
let RatingIntoPipeModule = RatingIntoPipeModule_1 = class RatingIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('rating', RatingComponent);
        pool.registerPipeTransformation('rating', RatingPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: RatingIntoPipeModule_1,
            providers: [RatingPipe]
        };
    }
};
RatingIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
RatingIntoPipeModule = RatingIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [RatingComponent, RatingPipe],
        exports: [RatingComponent, RatingPipe],
        entryComponents: [RatingComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], RatingIntoPipeModule);
export { RatingIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLXBpcGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcmF0aW5nL3JhdGluZy1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsb0JBQW9CLDRCQUFqQyxNQUFhLG9CQUFvQjtJQU8vQixZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBVEQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDeEIsQ0FBQTtJQUNILENBQUM7Q0FLRixDQUFBOztZQUoyQyxhQUFhLHVCQUExQyxNQUFNLFNBQUMsYUFBYTs7QUFQdEIsb0JBQW9CO0lBUmhDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDO1FBQzNDLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUM7UUFDdEMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FQdkIsb0JBQW9CLENBV2hDO1NBWFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9yYXRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0aW5nUGlwZSB9IGZyb20gJy4vcmF0aW5nLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUmF0aW5nQ29tcG9uZW50LCBSYXRpbmdQaXBlXSxcclxuICBleHBvcnRzOiBbUmF0aW5nQ29tcG9uZW50LCBSYXRpbmdQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtSYXRpbmdDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhdGluZ0ludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBSYXRpbmdJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbUmF0aW5nUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgncmF0aW5nJywgUmF0aW5nQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3JhdGluZycsIFJhdGluZ1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==