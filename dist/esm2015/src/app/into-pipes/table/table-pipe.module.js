var TableIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TablePipe } from './table.pipe';
import { ComponentPool } from '../common/component.pool';
let TableIntoPipeModule = TableIntoPipeModule_1 = class TableIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('table', TableComponent);
        pool.registerPipeTransformation('table', TablePipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: TableIntoPipeModule_1,
            providers: [
                TablePipe
            ]
        };
    }
};
TableIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
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
export { TableIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy90YWJsZS90YWJsZS1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsbUJBQW1CLDJCQUFoQyxNQUFhLG1CQUFtQjtJQVM5QixZQUFtQyxJQUFtQjtRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBWEQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1QsU0FBUzthQUNWO1NBQ0YsQ0FBQTtJQUNILENBQUM7Q0FLRixDQUFBOztZQUowQyxhQUFhLHVCQUF6QyxNQUFNLFNBQUMsYUFBYTs7QUFUdEIsbUJBQW1CO0lBUi9CLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7UUFDcEMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFXYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FUdkIsbUJBQW1CLENBYS9CO1NBYlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlUGlwZSB9IGZyb20gJy4vdGFibGUucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUYWJsZUNvbXBvbmVudCwgVGFibGVQaXBlXSxcclxuICBleHBvcnRzOiBbVGFibGVDb21wb25lbnQsIFRhYmxlUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVGFibGVDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRhYmxlSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFRhYmxlUGlwZVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgndGFibGUnLCBUYWJsZUNvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd0YWJsZScsIFRhYmxlUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIl19