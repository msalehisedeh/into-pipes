import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { VideoPipe } from './video.pipe';
import { ComponentPool } from '../common/component.pool';
var VideoIntoPipeModule = /** @class */ (function () {
    function VideoIntoPipeModule(pool) {
        pool.registerComponent('video', VideoComponent);
        pool.registerPipeTransformation('video', VideoPipe.transformationMethod());
    }
    VideoIntoPipeModule_1 = VideoIntoPipeModule;
    VideoIntoPipeModule.forRoot = function () {
        return {
            ngModule: VideoIntoPipeModule_1,
            providers: [VideoPipe]
        };
    };
    var VideoIntoPipeModule_1;
    VideoIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
    VideoIntoPipeModule = VideoIntoPipeModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [VideoComponent, VideoPipe],
            exports: [VideoComponent, VideoPipe],
            entryComponents: [VideoComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__param(0, Inject(ComponentPool))
    ], VideoIntoPipeModule);
    return VideoIntoPipeModule;
}());
export { VideoIntoPipeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tcGlwZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy92aWRlby92aWRlby1waXBlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVekQ7SUFPRSw2QkFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs0QkFWVSxtQkFBbUI7SUFDdkIsMkJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUN2QixDQUFBO0lBQ0gsQ0FBQzs7O2dCQUN5QyxhQUFhLHVCQUExQyxNQUFNLFNBQUMsYUFBYTs7SUFQdEIsbUJBQW1CO1FBUi9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7WUFDcEMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUM7UUFTYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7T0FQdkIsbUJBQW1CLENBVy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vdmlkZW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlkZW9QaXBlIH0gZnJvbSAnLi92aWRlby5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1ZpZGVvQ29tcG9uZW50LCBWaWRlb1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtWaWRlb0NvbXBvbmVudCwgVmlkZW9QaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtWaWRlb0NvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmlkZW9JbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVmlkZW9JbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbVmlkZW9QaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCd2aWRlbycsIFZpZGVvQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3ZpZGVvJywgVmlkZW9QaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=