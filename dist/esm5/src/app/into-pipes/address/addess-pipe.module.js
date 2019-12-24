import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressPipe } from './address.pipe';
import { ComponentPool } from '../common/component.pool';
var AddressIntoPipeModule = /** @class */ (function () {
    function AddressIntoPipeModule(pool) {
        pool.registerComponent('address', AddressComponent);
        pool.registerPipeTransformation('address', AddressPipe.transformationMethod());
    }
    AddressIntoPipeModule_1 = AddressIntoPipeModule;
    AddressIntoPipeModule.forRoot = function () {
        return {
            ngModule: AddressIntoPipeModule_1,
            providers: [
                AddressPipe
            ]
        };
    };
    var AddressIntoPipeModule_1;
    AddressIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return AddressIntoPipeModule;
}());
export { AddressIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZXNzLXBpcGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvYWRkcmVzcy9hZGRlc3MtcGlwZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVV6RDtJQVNFLCtCQUFtQyxJQUFtQjtRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7OEJBWlUscUJBQXFCO0lBQ3pCLDZCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsV0FBVzthQUNaO1NBQ0YsQ0FBQTtJQUNILENBQUM7OztnQkFDd0MsYUFBYSx1QkFBekMsTUFBTSxTQUFDLGFBQWE7O0lBVHRCLHFCQUFxQjtRQVJqQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDO1lBQzdDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztZQUN4QyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNsQyxDQUFDO1FBV2EsbUJBQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO09BVHZCLHFCQUFxQixDQWFqQztJQUFELDRCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRyZXNzUGlwZSB9IGZyb20gJy4vYWRkcmVzcy5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FkZHJlc3NDb21wb25lbnQsIEFkZHJlc3NQaXBlXSxcclxuICBleHBvcnRzOiBbQWRkcmVzc0NvbXBvbmVudCwgQWRkcmVzc1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0FkZHJlc3NDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQWRkcmVzc0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBBZGRyZXNzUGlwZVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnYWRkcmVzcycsIEFkZHJlc3NDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignYWRkcmVzcycsIEFkZHJlc3NQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=