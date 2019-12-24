import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { RatingPipe } from './rating.pipe';
import { ComponentPool } from '../common/component.pool';
var RatingIntoPipeModule = /** @class */ (function () {
    function RatingIntoPipeModule(pool) {
        pool.registerComponent('rating', RatingComponent);
        pool.registerPipeTransformation('rating', RatingPipe.transformationMethod());
    }
    RatingIntoPipeModule_1 = RatingIntoPipeModule;
    RatingIntoPipeModule.forRoot = function () {
        return {
            ngModule: RatingIntoPipeModule_1,
            providers: [RatingPipe]
        };
    };
    var RatingIntoPipeModule_1;
    RatingIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return RatingIntoPipeModule;
}());
export { RatingIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLXBpcGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcmF0aW5nL3JhdGluZy1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVekQ7SUFPRSw4QkFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs2QkFWVSxvQkFBb0I7SUFDeEIsNEJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN4QixDQUFBO0lBQ0gsQ0FBQzs7O2dCQUN5QyxhQUFhLHVCQUExQyxNQUFNLFNBQUMsYUFBYTs7SUFQdEIsb0JBQW9CO1FBUmhDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDO1lBQzNDLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUM7WUFDdEMsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUM7UUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7T0FQdkIsb0JBQW9CLENBV2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL3JhdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdQaXBlIH0gZnJvbSAnLi9yYXRpbmcucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtSYXRpbmdDb21wb25lbnQsIFJhdGluZ1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtSYXRpbmdDb21wb25lbnQsIFJhdGluZ1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1JhdGluZ0NvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmF0aW5nSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFJhdGluZ0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtSYXRpbmdQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdyYXRpbmcnLCBSYXRpbmdDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigncmF0aW5nJywgUmF0aW5nUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIl19