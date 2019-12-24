var InputGroupIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupComponent } from './input-group.component';
import { ComponentPool } from '../common/component.pool';
let InputGroupIntoPipeModule = InputGroupIntoPipeModule_1 = class InputGroupIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('inputgroup', InputGroupComponent);
    }
    static forRoot() {
        return {
            ngModule: InputGroupIntoPipeModule_1,
            providers: []
        };
    }
};
InputGroupIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
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
export { InputGroupIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRncm91cC1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2lucHV0Z3JvdXAvaW5wdXRncm91cC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsd0JBQXdCLGdDQUFyQyxNQUFhLHdCQUF3QjtJQU9uQyxZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVJELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSwwQkFBd0I7WUFDbEMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFBO0lBQ0gsQ0FBQztDQUlGLENBQUE7O1lBSDJDLGFBQWEsdUJBQTFDLE1BQU0sU0FBQyxhQUFhOztBQVB0Qix3QkFBd0I7SUFScEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzlCLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FQdkIsd0JBQXdCLENBVXBDO1NBVlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0lucHV0R3JvdXBDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtJbnB1dEdyb3VwQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtJbnB1dEdyb3VwQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IElucHV0R3JvdXBJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdpbnB1dGdyb3VwJywgSW5wdXRHcm91cENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==