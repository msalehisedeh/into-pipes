var FontIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontComponent } from './font.component';
import { FontPipe } from './font.pipe';
import { ComponentPool } from '../common/component.pool';
let FontIntoPipeModule = FontIntoPipeModule_1 = class FontIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('font', FontComponent);
        pool.registerPipeTransformation('font', FontPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: FontIntoPipeModule_1,
            providers: [FontPipe]
        };
    }
};
FontIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
FontIntoPipeModule = FontIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [FontComponent, FontPipe],
        exports: [FontComponent, FontPipe],
        entryComponents: [FontComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], FontIntoPipeModule);
export { FontIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2ZvbnQvZm9udC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFrQjtJQU83QixZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBVEQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDdEIsQ0FBQTtJQUNILENBQUM7Q0FLRixDQUFBOztZQUoyQyxhQUFhLHVCQUExQyxNQUFNLFNBQUMsYUFBYTs7QUFQdEIsa0JBQWtCO0lBUjlCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7UUFDbEMsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2hDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FQdkIsa0JBQWtCLENBVzlCO1NBWFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRm9udENvbXBvbmVudCB9IGZyb20gJy4vZm9udC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb250UGlwZSB9IGZyb20gJy4vZm9udC5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZvbnRDb21wb25lbnQsIEZvbnRQaXBlXSxcclxuICBleHBvcnRzOiBbRm9udENvbXBvbmVudCwgRm9udFBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0ZvbnRDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvbnRJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm9udEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtGb250UGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnZm9udCcsIEZvbnRDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignZm9udCcsIEZvbnRQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=