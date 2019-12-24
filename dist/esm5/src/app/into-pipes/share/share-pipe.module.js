import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { ComponentPool } from '../common/component.pool';
var ShareIntoPipeModule = /** @class */ (function () {
    function ShareIntoPipeModule(pool) {
        pool.registerComponent('share', ShareComponent);
    }
    ShareIntoPipeModule_1 = ShareIntoPipeModule;
    ShareIntoPipeModule.forRoot = function () {
        return {
            ngModule: ShareIntoPipeModule_1,
            providers: []
        };
    };
    var ShareIntoPipeModule_1;
    ShareIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return ShareIntoPipeModule;
}());
export { ShareIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9zaGFyZS9zaGFyZS1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpEO0lBT0UsNkJBQW9DLElBQW1CO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs0QkFUVSxtQkFBbUI7SUFDdkIsMkJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQTtJQUNILENBQUM7OztnQkFDeUMsYUFBYSx1QkFBMUMsTUFBTSxTQUFDLGFBQWE7O0lBUHRCLG1CQUFtQjtRQVIvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN6QixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDbEMsQ0FBQztRQVNhLG1CQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtPQVB2QixtQkFBbUIsQ0FVL0I7SUFBRCwwQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2hhcmVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTaGFyZUNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU2hhcmVDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYXJlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnc2hhcmUnLCBTaGFyZUNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==