import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastUpdateComponent } from './lastupdate.component';
import { ComponentPool } from '../common/component.pool';
var LastUpdateIntoPipeModule = /** @class */ (function () {
    function LastUpdateIntoPipeModule(pool) {
        pool.registerComponent('lastupdate', LastUpdateComponent);
    }
    LastUpdateIntoPipeModule_1 = LastUpdateIntoPipeModule;
    LastUpdateIntoPipeModule.forRoot = function () {
        return {
            ngModule: LastUpdateIntoPipeModule_1,
            providers: []
        };
    };
    var LastUpdateIntoPipeModule_1;
    LastUpdateIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
    LastUpdateIntoPipeModule = LastUpdateIntoPipeModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [LastUpdateComponent],
            exports: [LastUpdateComponent],
            entryComponents: [LastUpdateComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__param(0, Inject(ComponentPool))
    ], LastUpdateIntoPipeModule);
    return LastUpdateIntoPipeModule;
}());
export { LastUpdateIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdHVwZGF0ZS1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2xhc3R1cGRhdGUvbGFzdHVwZGF0ZS1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVekQ7SUFPRSxrQ0FBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7aUNBVFUsd0JBQXdCO0lBQzVCLGdDQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLDBCQUF3QjtZQUNsQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUE7SUFDSCxDQUFDOzs7Z0JBQ3lDLGFBQWEsdUJBQTFDLE1BQU0sU0FBQyxhQUFhOztJQVB0Qix3QkFBd0I7UUFScEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQzlCLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUM7UUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7T0FQdkIsd0JBQXdCLENBVXBDO0lBQUQsK0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBMYXN0VXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9sYXN0dXBkYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtMYXN0VXBkYXRlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTGFzdFVwZGF0ZUNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTGFzdFVwZGF0ZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBMYXN0VXBkYXRlSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnbGFzdHVwZGF0ZScsIExhc3RVcGRhdGVDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=