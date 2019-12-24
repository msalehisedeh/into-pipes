var InputIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ComponentPool } from '../common/component.pool';
import { CommonPipesModule } from '../common/common-pipes.module';
let InputIntoPipeModule = InputIntoPipeModule_1 = class InputIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('input', InputComponent);
    }
    static forRoot() {
        return {
            ngModule: InputIntoPipeModule_1,
            providers: []
        };
    }
};
InputIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
InputIntoPipeModule = InputIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, CommonPipesModule.forRoot()],
        declarations: [InputComponent],
        exports: [InputComponent],
        entryComponents: [InputComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], InputIntoPipeModule);
export { InputIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9pbnB1dC9pbnB1dC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVVsRSxJQUFhLG1CQUFtQiwyQkFBaEMsTUFBYSxtQkFBbUI7SUFPOUIsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUkQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFtQjtZQUM3QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUE7SUFDSCxDQUFDO0NBSUYsQ0FBQTs7WUFIMkMsYUFBYSx1QkFBMUMsTUFBTSxTQUFDLGFBQWE7O0FBUHRCLG1CQUFtQjtJQVIvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEQsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztRQUN6QixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDbEMsQ0FBQztJQVNhLG1CQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtHQVB2QixtQkFBbUIsQ0FVL0I7U0FWWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcbmltcG9ydCB7IENvbW1vblBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi1waXBlcy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb21tb25QaXBlc01vZHVsZS5mb3JSb290KCldLFxyXG4gIGRlY2xhcmF0aW9uczogW0lucHV0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0lucHV0Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBJbnB1dEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2lucHV0JywgSW5wdXRDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=