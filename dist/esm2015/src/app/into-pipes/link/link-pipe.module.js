var LinkIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link.component';
import { LinkPipe } from './link.pipe';
import { ComponentPool } from '../common/component.pool';
let LinkIntoPipeModule = LinkIntoPipeModule_1 = class LinkIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('link', LinkComponent);
        pool.registerPipeTransformation('link', LinkPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: LinkIntoPipeModule_1,
            providers: [LinkPipe]
        };
    }
};
LinkIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
LinkIntoPipeModule = LinkIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [LinkComponent, LinkPipe],
        exports: [LinkComponent, LinkPipe],
        entryComponents: [LinkComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], LinkIntoPipeModule);
export { LinkIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2xpbmsvbGluay1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXpELElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFrQjtJQU83QixZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBVEQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDdEIsQ0FBQTtJQUNILENBQUM7Q0FLRixDQUFBOztZQUoyQyxhQUFhLHVCQUExQyxNQUFNLFNBQUMsYUFBYTs7QUFQdEIsa0JBQWtCO0lBUjlCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUMsUUFBUSxDQUFDO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBQyxRQUFRLENBQUM7UUFDakMsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2hDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ2xDLENBQUM7SUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7R0FQdkIsa0JBQWtCLENBVzlCO1NBWFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4vbGluay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaW5rUGlwZSB9IGZyb20gJy4vbGluay5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xpbmtDb21wb25lbnQsTGlua1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtMaW5rQ29tcG9uZW50LExpbmtQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtMaW5rQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5rSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExpbmtJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbTGlua1BpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2xpbmsnLCBMaW5rQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2xpbmsnLCBMaW5rUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIl19