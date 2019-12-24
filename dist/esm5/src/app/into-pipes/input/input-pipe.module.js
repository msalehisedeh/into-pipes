import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ComponentPool } from '../common/component.pool';
import { CommonPipesModule } from '../common/common-pipes.module';
var InputIntoPipeModule = /** @class */ (function () {
    function InputIntoPipeModule(pool) {
        pool.registerComponent('input', InputComponent);
    }
    InputIntoPipeModule_1 = InputIntoPipeModule;
    InputIntoPipeModule.forRoot = function () {
        return {
            ngModule: InputIntoPipeModule_1,
            providers: []
        };
    };
    var InputIntoPipeModule_1;
    InputIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
    InputIntoPipeModule = InputIntoPipeModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, CommonPipesModule.forRoot()],
            declarations: [InputComponent],
            exports: [InputComponent],
            entryComponents: [InputComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__param(0, Inject(ComponentPool))
    ], InputIntoPipeModule);
    return InputIntoPipeModule;
}());
export { InputIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9pbnB1dC9pbnB1dC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVWxFO0lBT0UsNkJBQW9DLElBQW1CO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs0QkFUVSxtQkFBbUI7SUFDdkIsMkJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQTtJQUNILENBQUM7OztnQkFDeUMsYUFBYSx1QkFBMUMsTUFBTSxTQUFDLGFBQWE7O0lBUHRCLG1CQUFtQjtRQVIvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEQsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN6QixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDakMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDbEMsQ0FBQztRQVNhLG1CQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtPQVB2QixtQkFBbUIsQ0FVL0I7SUFBRCwwQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuaW1wb3J0IHsgQ29tbW9uUGlwZXNNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLXBpcGVzLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvbW1vblBpcGVzTW9kdWxlLmZvclJvb3QoKV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtJbnB1dENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0SW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IElucHV0SW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnaW5wdXQnLCBJbnB1dENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==