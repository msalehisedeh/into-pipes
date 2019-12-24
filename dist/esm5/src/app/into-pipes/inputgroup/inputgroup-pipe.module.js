import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupComponent } from './input-group.component';
import { ComponentPool } from '../common/component.pool';
var InputGroupIntoPipeModule = /** @class */ (function () {
    function InputGroupIntoPipeModule(pool) {
        pool.registerComponent('inputgroup', InputGroupComponent);
    }
    InputGroupIntoPipeModule_1 = InputGroupIntoPipeModule;
    InputGroupIntoPipeModule.forRoot = function () {
        return {
            ngModule: InputGroupIntoPipeModule_1,
            providers: []
        };
    };
    var InputGroupIntoPipeModule_1;
    InputGroupIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
    InputGroupIntoPipeModule = InputGroupIntoPipeModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [InputGroupComponent],
            exports: [InputGroupComponent],
            entryComponents: [InputGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__param(0, Inject(ComponentPool))
    ], InputGroupIntoPipeModule);
    return InputGroupIntoPipeModule;
}());
export { InputGroupIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRncm91cC1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2lucHV0Z3JvdXAvaW5wdXRncm91cC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVekQ7SUFPRSxrQ0FBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7aUNBVFUsd0JBQXdCO0lBQzVCLGdDQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLDBCQUF3QjtZQUNsQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUE7SUFDSCxDQUFDOzs7Z0JBQ3lDLGFBQWEsdUJBQTFDLE1BQU0sU0FBQyxhQUFhOztJQVB0Qix3QkFBd0I7UUFScEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQzlCLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUM7UUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7T0FQdkIsd0JBQXdCLENBVXBDO0lBQUQsK0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRHcm91cENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0lucHV0R3JvdXBDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0lucHV0R3JvdXBDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0R3JvdXBJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW5wdXRHcm91cEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2lucHV0Z3JvdXAnLCBJbnB1dEdyb3VwQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIl19