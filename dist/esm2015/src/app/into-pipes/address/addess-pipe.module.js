var AddressIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressPipe } from './address.pipe';
import { ComponentPool } from '../common/component.pool';
let AddressIntoPipeModule = AddressIntoPipeModule_1 = class AddressIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('address', AddressComponent);
        pool.registerPipeTransformation('address', AddressPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: AddressIntoPipeModule_1,
            providers: [
                AddressPipe
            ]
        };
    }
};
AddressIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
AddressIntoPipeModule = AddressIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [AddressComponent, AddressPipe],
        exports: [AddressComponent, AddressPipe],
        entryComponents: [AddressComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], AddressIntoPipeModule);
export { AddressIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZXNzLXBpcGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvYWRkcmVzcy9hZGRlc3MtcGlwZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVekQsSUFBYSxxQkFBcUIsNkJBQWxDLE1BQWEscUJBQXFCO0lBU2hDLFlBQW1DLElBQW1CO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQVhELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNULFdBQVc7YUFDWjtTQUNGLENBQUE7SUFDSCxDQUFDO0NBS0YsQ0FBQTs7WUFKMEMsYUFBYSx1QkFBekMsTUFBTSxTQUFDLGFBQWE7O0FBVHRCLHFCQUFxQjtJQVJqQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDO1FBQzdDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztRQUN4QyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuQyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNsQyxDQUFDO0lBV2EsbUJBQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0dBVHZCLHFCQUFxQixDQWFqQztTQWJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEFkZHJlc3NDb21wb25lbnQgfSBmcm9tICcuL2FkZHJlc3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRkcmVzc1BpcGUgfSBmcm9tICcuL2FkZHJlc3MucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBZGRyZXNzQ29tcG9uZW50LCBBZGRyZXNzUGlwZV0sXHJcbiAgZXhwb3J0czogW0FkZHJlc3NDb21wb25lbnQsIEFkZHJlc3NQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtBZGRyZXNzQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEFkZHJlc3NJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQWRkcmVzc1BpcGVcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2FkZHJlc3MnLCBBZGRyZXNzQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2FkZHJlc3MnLCBBZGRyZXNzUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIl19