/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AddressComponent } from '../components/address.component';
import { EmailComponent } from '../components/email.component';
import { PhoneComponent } from '../components/phone.component';
import { FontComponent } from '../components/font.component';
import { ImageComponent } from '../components/image.component';
import { VideoComponent } from '../components/video.component';
import { JsonComponent } from '../components/json.component';
import { LinkComponent } from '../components/link.component';
import { RatingComponent } from '../components/rating.component';
import { InputComponent } from '../components/input.component';
import { CheckboxComponent } from '../components/checkbox.component';
import { SelectComponent } from '../components/select.component';
import { SpanComponent } from '../components/span.component';
import { ShareComponent } from '../components/share.component';
import { LikeComponent } from '../components/like.component';
import { CalendarComponent } from '../components/calendar.component';
import { LastUpdateComponent } from '../components/lastupdate.component';
import { InputGroupComponent } from '../components/input-group.component';
var ComponentPool = /** @class */ (function () {
    function ComponentPool() {
        this.registeredComponents = {};
        this.registeredServices = {};
        this.registerComponent("span", SpanComponent);
        this.registerComponent("address", AddressComponent);
        this.registerComponent("email", EmailComponent);
        this.registerComponent("phone", PhoneComponent);
        this.registerComponent("font", FontComponent);
        this.registerComponent("image", ImageComponent);
        this.registerComponent("video", VideoComponent);
        this.registerComponent("json", JsonComponent);
        this.registerComponent("link", LinkComponent);
        this.registerComponent("rating", RatingComponent);
        this.registerComponent("input", InputComponent);
        this.registerComponent("checkbox", CheckboxComponent);
        this.registerComponent("select", SelectComponent);
        this.registerComponent("share", ShareComponent);
        this.registerComponent("like", LikeComponent);
        this.registerComponent("lastupdate", LastUpdateComponent);
        this.registerComponent("calendar", CalendarComponent);
        this.registerComponent("inputgroup", InputGroupComponent);
    }
    /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    ComponentPool.prototype.registerComponent = /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    function (name, component) {
        this.registeredComponents[name] = component;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.removeComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        delete this.registeredComponents[name];
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.registeredComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.registeredComponents[name];
    };
    /**
     * @param {?} name
     * @param {?} service
     * @return {?}
     */
    ComponentPool.prototype.registerServiceForComponent = /**
     * @param {?} name
     * @param {?} service
     * @return {?}
     */
    function (name, service) {
        this.registeredServices[name] = service;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.removeServiceForComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        delete this.registeredServices[name];
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.registeredServiceForComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.registeredServices[name];
    };
    ComponentPool.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentPool.ctorParameters = function () { return []; };
    return ComponentPool;
}());
export { ComponentPool };
if (false) {
    /** @type {?} */
    ComponentPool.prototype.registeredComponents;
    /** @type {?} */
    ComponentPool.prototype.registeredServices;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnBvb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9pbmplY3RhYmxlcy9jb21wb25lbnQucG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0lBT3pFO29DQUg4QixFQUFFO2tDQUNKLEVBQUU7UUFHN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0tBQzFEOzs7Ozs7SUFFRCx5Q0FBaUI7Ozs7O0lBQWpCLFVBQW1CLElBQVksRUFBRSxTQUFjO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7S0FDNUM7Ozs7O0lBQ0QsdUNBQWU7Ozs7SUFBZixVQUFpQixJQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZDOzs7OztJQUNELDJDQUFtQjs7OztJQUFuQixVQUFvQixJQUFZO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7Ozs7OztJQUVELG1EQUEyQjs7Ozs7SUFBM0IsVUFBNkIsSUFBWSxFQUFFLE9BQVk7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUN4Qzs7Ozs7SUFDRCxpREFBeUI7Ozs7SUFBekIsVUFBMkIsSUFBWTtRQUN0QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFDRCxxREFBNkI7Ozs7SUFBN0IsVUFBOEIsSUFBWTtRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOztnQkE1Q0QsVUFBVTs7Ozt3QkF0Qlg7O1NBdUJhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWRkcmVzcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1haWxDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2VtYWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG9uZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGhvbmUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlkZW9Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3ZpZGVvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKc29uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9qc29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGFuQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zcGFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmUuY29tcG9uZW50JztcbmltcG9ydCB7IExpa2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpa2UuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFzdFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGFzdHVwZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvb2wge1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRDb21wb25lbnRzPSB7fTtcblx0cHJpdmF0ZSByZWdpc3RlcmVkU2VydmljZXM9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJzcGFuXCIsIFNwYW5Db21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJhZGRyZXNzXCIsIEFkZHJlc3NDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJlbWFpbFwiLCBFbWFpbENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInBob25lXCIsIFBob25lQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiZm9udFwiLCBGb250Q29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiaW1hZ2VcIiwgSW1hZ2VDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJ2aWRlb1wiLCBWaWRlb0NvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImpzb25cIiwgSnNvbkNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImxpbmtcIiwgTGlua0NvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInJhdGluZ1wiLCBSYXRpbmdDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJpbnB1dFwiLCBJbnB1dENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImNoZWNrYm94XCIsIENoZWNrYm94Q29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwic2VsZWN0XCIsIFNlbGVjdENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInNoYXJlXCIsIFNoYXJlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwibGlrZVwiLCBMaWtlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwibGFzdHVwZGF0ZVwiLCBMYXN0VXBkYXRlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiY2FsZW5kYXJcIiwgQ2FsZW5kYXJDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJpbnB1dGdyb3VwXCIsIElucHV0R3JvdXBDb21wb25lbnQpO1xuXHR9XG4gIFxuXHRyZWdpc3RlckNvbXBvbmVudCAobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG5cdH1cblx0cmVtb3ZlQ29tcG9uZW50IChuYW1lOiBzdHJpbmcpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0fVxuXHRyZWdpc3RlcmVkQ29tcG9uZW50KG5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdO1xuXHR9XG5cblx0cmVnaXN0ZXJTZXJ2aWNlRm9yQ29tcG9uZW50IChuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdID0gc2VydmljZTtcblx0fVxuXHRyZW1vdmVTZXJ2aWNlRm9yQ29tcG9uZW50IChuYW1lOiBzdHJpbmcpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV07XG5cdH1cblx0cmVnaXN0ZXJlZFNlcnZpY2VGb3JDb21wb25lbnQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV07XG5cdH1cbn0iXX0=