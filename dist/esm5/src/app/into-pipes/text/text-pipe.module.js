import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';
import { ComponentPool } from '../common/component.pool';
import { CommonPipesModule } from '../common/common-pipes.module';
var TextIntoPipeModule = /** @class */ (function () {
    function TextIntoPipeModule(pool) {
        pool.registerComponent('text', TextComponent);
    }
    TextIntoPipeModule_1 = TextIntoPipeModule;
    TextIntoPipeModule.forRoot = function () {
        return {
            ngModule: TextIntoPipeModule_1,
            providers: []
        };
    };
    var TextIntoPipeModule_1;
    TextIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return TextIntoPipeModule;
}());
export { TextIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1waXBlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3RleHQvdGV4dC1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVWxFO0lBT0UsNEJBQW9DLElBQW1CO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzsyQkFUVSxrQkFBa0I7SUFDdEIsMEJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQTtJQUNILENBQUM7OztnQkFDeUMsYUFBYSx1QkFBMUMsTUFBTSxTQUFDLGFBQWE7O0lBUHRCLGtCQUFrQjtRQVI5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEQsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUN4QixlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDbEMsQ0FBQztRQVNhLG1CQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtPQVB2QixrQkFBa0IsQ0FVOUI7SUFBRCx5QkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL3RleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcbmltcG9ydCB7IENvbW1vblBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi1waXBlcy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb21tb25QaXBlc01vZHVsZS5mb3JSb290KCldLFxyXG4gIGRlY2xhcmF0aW9uczogW1RleHRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUZXh0Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUZXh0Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRleHRJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCd0ZXh0JywgVGV4dENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==