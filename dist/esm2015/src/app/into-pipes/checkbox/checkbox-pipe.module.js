var CheckboxIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { ComponentPool } from '../common/component.pool';
let CheckboxIntoPipeModule = CheckboxIntoPipeModule_1 = class CheckboxIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('checkbox', CheckboxComponent);
    }
    static forRoot() {
        return {
            ngModule: CheckboxIntoPipeModule_1,
            providers: []
        };
    }
};
CheckboxIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
CheckboxIntoPipeModule = CheckboxIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [CheckboxComponent],
        exports: [CheckboxComponent],
        entryComponents: [CheckboxComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], CheckboxIntoPipeModule);
export { CheckboxIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jaGVja2JveC9jaGVja2JveC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUFzQjtJQVFqQyxZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQVRELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSx3QkFBc0I7WUFDaEMsU0FBUyxFQUFFLEVBQ1Y7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUlGLENBQUE7O1lBSDJDLGFBQWEsdUJBQTFDLE1BQU0sU0FBQyxhQUFhOztBQVJ0QixzQkFBc0I7SUFSbEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFVYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FSdkIsc0JBQXNCLENBV2xDO1NBWFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtDaGVja2JveENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NoZWNrYm94Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja2JveENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ2hlY2tib3hJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnY2hlY2tib3gnLCBDaGVja2JveENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==