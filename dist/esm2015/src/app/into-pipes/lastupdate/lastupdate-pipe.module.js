var LastUpdateIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastUpdateComponent } from './lastupdate.component';
import { ComponentPool } from '../common/component.pool';
let LastUpdateIntoPipeModule = LastUpdateIntoPipeModule_1 = class LastUpdateIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('lastupdate', LastUpdateComponent);
    }
    static forRoot() {
        return {
            ngModule: LastUpdateIntoPipeModule_1,
            providers: []
        };
    }
};
LastUpdateIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
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
export { LastUpdateIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdHVwZGF0ZS1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2xhc3R1cGRhdGUvbGFzdHVwZGF0ZS1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsd0JBQXdCLGdDQUFyQyxNQUFhLHdCQUF3QjtJQU9uQyxZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVJELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSwwQkFBd0I7WUFDbEMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFBO0lBQ0gsQ0FBQztDQUlGLENBQUE7O1lBSDJDLGFBQWEsdUJBQTFDLE1BQU0sU0FBQyxhQUFhOztBQVB0Qix3QkFBd0I7SUFScEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzlCLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FQdkIsd0JBQXdCLENBVXBDO1NBVlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTGFzdFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vbGFzdHVwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGFzdFVwZGF0ZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0xhc3RVcGRhdGVDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0xhc3RVcGRhdGVDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExhc3RVcGRhdGVJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2xhc3R1cGRhdGUnLCBMYXN0VXBkYXRlQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIl19