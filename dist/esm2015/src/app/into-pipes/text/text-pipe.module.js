var TextIntoPipeModule_1;
import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import { ComponentPool } from '../common/component.pool';
import { CommonPipesModule } from '../common/common-pipes.module';
let TextIntoPipeModule = TextIntoPipeModule_1 = class TextIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('text', TextComponent);
    }
    static forRoot() {
        return {
            ngModule: TextIntoPipeModule_1,
            providers: []
        };
    }
};
TextIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
TextIntoPipeModule = TextIntoPipeModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, CommonPipesModule.forRoot()],
        declarations: [TextComponent],
        exports: [TextComponent],
        entryComponents: [TextComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    tslib_1.__param(0, Inject(ComponentPool))
], TextIntoPipeModule);
export { TextIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3RleHQvdGV4dC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVVsRSxJQUFhLGtCQUFrQiwwQkFBL0IsTUFBYSxrQkFBa0I7SUFPN0IsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBUkQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUE7SUFDSCxDQUFDO0NBSUYsQ0FBQTs7WUFIMkMsYUFBYSx1QkFBMUMsTUFBTSxTQUFDLGFBQWE7O0FBUHRCLGtCQUFrQjtJQVI5QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEQsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN4QixlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDaEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDbEMsQ0FBQztJQVNhLG1CQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtHQVB2QixrQkFBa0IsQ0FVOUI7U0FWWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5pbXBvcnQgeyBDb21tb25QaXBlc01vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24tcGlwZXMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29tbW9uUGlwZXNNb2R1bGUuZm9yUm9vdCgpXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUZXh0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVGV4dENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVGV4dENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUZXh0SW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgndGV4dCcsIFRleHRDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=