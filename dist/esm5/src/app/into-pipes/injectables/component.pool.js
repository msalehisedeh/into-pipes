/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AddressComponent } from '../components/address.component';
import { EmailComponent } from '../components/email.component';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnBvb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9pbmplY3RhYmxlcy9jb21wb25lbnQucG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNILFVBQVUsRUFFYixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7SUFPekU7b0NBSDhCLEVBQUU7a0NBQ0osRUFBRTtRQUc3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0tBQzFEOzs7Ozs7SUFFRCx5Q0FBaUI7Ozs7O0lBQWpCLFVBQW1CLElBQUksRUFBRSxTQUFjO1FBQ3RDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7S0FDNUM7Ozs7O0lBQ0QsdUNBQWU7Ozs7SUFBZixVQUFpQixJQUFJO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZDOzs7OztJQUNELDJDQUFtQjs7OztJQUFuQixVQUFvQixJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7Ozs7OztJQUVELG1EQUEyQjs7Ozs7SUFBM0IsVUFBNkIsSUFBSSxFQUFFLE9BQVk7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUN4Qzs7Ozs7SUFDRCxpREFBeUI7Ozs7SUFBekIsVUFBMkIsSUFBSTtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFDRCxxREFBNkI7Ozs7SUFBN0IsVUFBOEIsSUFBSTtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOztnQkEzQ0QsVUFBVTs7Ozt3QkExQlg7O1NBMkJhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gICAgSW5qZWN0YWJsZSxcbiAgICBJbmplY3RvclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBBZGRyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9hZGRyZXNzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZW1haWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZvbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZvbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlkZW9Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3ZpZGVvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKc29uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9qc29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGFuQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zcGFuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmUuY29tcG9uZW50JztcbmltcG9ydCB7IExpa2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpa2UuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFzdFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGFzdHVwZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvb2wge1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRDb21wb25lbnRzPSB7fTtcblx0cHJpdmF0ZSByZWdpc3RlcmVkU2VydmljZXM9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJzcGFuXCIsIFNwYW5Db21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJhZGRyZXNzXCIsIEFkZHJlc3NDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJlbWFpbFwiLCBFbWFpbENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImZvbnRcIiwgRm9udENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImltYWdlXCIsIEltYWdlQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwidmlkZW9cIiwgVmlkZW9Db21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJqc29uXCIsIEpzb25Db21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJsaW5rXCIsIExpbmtDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJyYXRpbmdcIiwgUmF0aW5nQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiaW5wdXRcIiwgSW5wdXRDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJjaGVja2JveFwiLCBDaGVja2JveENvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcInNlbGVjdFwiLCBTZWxlY3RDb21wb25lbnQpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb21wb25lbnQoXCJzaGFyZVwiLCBTaGFyZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImxpa2VcIiwgTGlrZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImxhc3R1cGRhdGVcIiwgTGFzdFVwZGF0ZUNvbXBvbmVudCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbXBvbmVudChcImNhbGVuZGFyXCIsIENhbGVuZGFyQ29tcG9uZW50KTtcblx0XHR0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KFwiaW5wdXRncm91cFwiLCBJbnB1dEdyb3VwQ29tcG9uZW50KTtcblx0fVxuICBcblx0cmVnaXN0ZXJDb21wb25lbnQgKG5hbWUsIGNvbXBvbmVudDogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblx0fVxuXHRyZW1vdmVDb21wb25lbnQgKG5hbWUpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0fVxuXHRyZWdpc3RlcmVkQ29tcG9uZW50KG5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0fVxuXG5cdHJlZ2lzdGVyU2VydmljZUZvckNvbXBvbmVudCAobmFtZSwgc2VydmljZTogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV0gPSBzZXJ2aWNlO1xuXHR9XG5cdHJlbW92ZVNlcnZpY2VGb3JDb21wb25lbnQgKG5hbWUpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV07XG5cdH1cblx0cmVnaXN0ZXJlZFNlcnZpY2VGb3JDb21wb25lbnQobmFtZSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG59Il19