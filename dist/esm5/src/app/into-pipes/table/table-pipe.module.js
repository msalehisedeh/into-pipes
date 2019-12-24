import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TablePipe } from './table.pipe';
import { ComponentPool } from '../common/component.pool';
var TableIntoPipeModule = /** @class */ (function () {
    function TableIntoPipeModule(pool) {
        pool.registerComponent('table', TableComponent);
        pool.registerPipeTransformation('table', TablePipe.transformationMethod());
    }
    TableIntoPipeModule_1 = TableIntoPipeModule;
    TableIntoPipeModule.forRoot = function () {
        return {
            ngModule: TableIntoPipeModule_1,
            providers: [
                TablePipe
            ]
        };
    };
    var TableIntoPipeModule_1;
    TableIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
    TableIntoPipeModule = TableIntoPipeModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [TableComponent, TablePipe],
            exports: [TableComponent, TablePipe],
            entryComponents: [TableComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__param(0, Inject(ComponentPool))
    ], TableIntoPipeModule);
    return TableIntoPipeModule;
}());
export { TableIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy90YWJsZS90YWJsZS1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVekQ7SUFTRSw2QkFBbUMsSUFBbUI7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs0QkFaVSxtQkFBbUI7SUFDdkIsMkJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxTQUFTO2FBQ1Y7U0FDRixDQUFBO0lBQ0gsQ0FBQzs7O2dCQUN3QyxhQUFhLHVCQUF6QyxNQUFNLFNBQUMsYUFBYTs7SUFUdEIsbUJBQW1CO1FBUi9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7WUFDcEMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUM7UUFXYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7T0FUdkIsbUJBQW1CLENBYS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVQaXBlIH0gZnJvbSAnLi90YWJsZS5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RhYmxlQ29tcG9uZW50LCBUYWJsZVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudCwgVGFibGVQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUYWJsZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGFibGVJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgVGFibGVQaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCd0YWJsZScsIFRhYmxlQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3RhYmxlJywgVGFibGVQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=