/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ComponentPool = /** @class */ (function () {
    function ComponentPool() {
        this.registeredPipes = {};
        this.registeredComponents = {};
        this.registeredServices = {};
    }
    /**
     * @param {?} name
     * @param {?} pipe
     * @return {?}
     */
    ComponentPool.prototype.registerPipeTransformation = /**
     * @param {?} name
     * @param {?} pipe
     * @return {?}
     */
    function (name, pipe) {
        this.registeredPipes[name] = pipe;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ComponentPool.prototype.registeredForPipeTransformationNamed = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.registeredPipes[key] !== undefined;
    };
    /**
     * @param {?} key
     * @param {?} content
     * @param {?} args
     * @param {?=} callback
     * @param {?=} data
     * @return {?}
     */
    ComponentPool.prototype.registeredPipeTransformation = /**
     * @param {?} key
     * @param {?} content
     * @param {?} args
     * @param {?=} callback
     * @param {?=} data
     * @return {?}
     */
    function (key, content, args, callback, data) {
        /** @type {?} */
        var pipe = this.registeredPipes[key];
        return pipe ? pipe(content, args, callback, data) : null;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ComponentPool.prototype.removePipeTransformation = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        delete this.registeredPipes[key];
    };
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
    ComponentPool.prototype.registeredForComponentWithNamed = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.registeredComponents[name] !== undefined;
    };
    /**
     * @param {?} name
     * @param {?} resolver
     * @param {?} viewRefrence
     * @param {?} el
     * @return {?}
     */
    ComponentPool.prototype.registeredComponent = /**
     * @param {?} name
     * @param {?} resolver
     * @param {?} viewRefrence
     * @param {?} el
     * @return {?}
     */
    function (name, resolver, viewRefrence, el) {
        /** @type {?} */
        var component = this.registeredComponents[name];
        /** @type {?} */
        var result = null;
        if (component) {
            /** @type {?} */
            var componentFactory = resolver.resolveComponentFactory(component);
            /** @type {?} */
            var componentRef = viewRefrence.createComponent(componentFactory);
            /** @type {?} */
            var domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
            el.appendChild(domElem);
            result = (/** @type {?} */ (componentRef.instance));
        }
        return result;
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
    ComponentPool.prototype.registeredServiceForComponent = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.registeredServices[name];
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComponentPool.prototype.registeredForServiceNamed = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.registeredServices[name] !== undefined;
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
    ComponentPool.decorators = [
        { type: Injectable }
    ];
    return ComponentPool;
}());
export { ComponentPool };
if (false) {
    /** @type {?} */
    ComponentPool.prototype.registeredPipes;
    /** @type {?} */
    ComponentPool.prototype.registeredComponents;
    /** @type {?} */
    ComponentPool.prototype.registeredServices;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnBvb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29tcG9uZW50LnBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTixVQUFVLEVBS1YsTUFBTSxlQUFlLENBQUM7OzsrQkFNRyxFQUFFO29DQUNHLEVBQUU7a0NBQ0osRUFBRTs7Ozs7OztJQUU5QixrREFBMEI7Ozs7O0lBQTFCLFVBQTRCLElBQVksRUFBRSxJQUFTO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2xDOzs7OztJQUNELDREQUFvQzs7OztJQUFwQyxVQUFxQyxHQUFXO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQztLQUMvQzs7Ozs7Ozs7O0lBQ0Qsb0RBQTRCOzs7Ozs7OztJQUE1QixVQUE2QixHQUFXLEVBQUUsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTs7UUFDM0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUMvRDs7Ozs7SUFDRCxnREFBd0I7Ozs7SUFBeEIsVUFBMEIsR0FBVztRQUNwQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakM7Ozs7OztJQUVELHlDQUFpQjs7Ozs7SUFBakIsVUFBbUIsSUFBWSxFQUFFLFNBQWM7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUM1Qzs7Ozs7SUFDRCx1REFBK0I7Ozs7SUFBL0IsVUFBZ0MsSUFBWTtRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztLQUNyRDs7Ozs7Ozs7SUFDRCwyQ0FBbUI7Ozs7Ozs7SUFBbkIsVUFDQyxJQUFZLEVBQ1osUUFBa0MsRUFDbEMsWUFBOEIsRUFDOUIsRUFBZTs7UUFDZixJQUFNLFNBQVMsR0FBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBQ25ELElBQUksTUFBTSxHQUFrQixJQUFJLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7WUFDckIsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQ25FLElBQU0sWUFBWSxHQUFzQixZQUFZLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O1lBQ3ZGLElBQU0sT0FBTyxxQkFBRyxtQkFBQyxZQUFZLENBQUMsUUFBbUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQWdCLEVBQUM7WUFDaEcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixNQUFNLEdBQUcsbUJBQWdCLFlBQVksQ0FBQyxRQUFRLEVBQUMsQ0FBQztTQUMxQztRQUNELE1BQU0sQ0FBRSxNQUFNLENBQUM7S0FDckI7Ozs7O0lBQ0QsdUNBQWU7Ozs7SUFBZixVQUFpQixJQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZDOzs7Ozs7SUFFRCxtREFBMkI7Ozs7O0lBQTNCLFVBQTZCLElBQVksRUFBRSxPQUFZO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDeEM7Ozs7O0lBQ0QscURBQTZCOzs7O0lBQTdCLFVBQThCLElBQVk7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFDRCxpREFBeUI7Ozs7SUFBekIsVUFBMEIsSUFBWTtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztLQUNuRDs7Ozs7SUFDRCxpREFBeUI7Ozs7SUFBekIsVUFBMkIsSUFBWTtRQUN0QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7Z0JBM0RELFVBQVU7O3dCQVhYOztTQVlhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG5cdEluamVjdGFibGUsIFxuXHRDb21wb25lbnRSZWYsIFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRFbWJlZGRlZFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuL3BpcGUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvb2wge1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRQaXBlcz0ge307XG5cdHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudHM9IHt9O1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRTZXJ2aWNlcz0ge307XG5cblx0cmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24gKG5hbWU6IHN0cmluZywgcGlwZTogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkUGlwZXNbbmFtZV0gPSBwaXBlO1xuXHR9XG5cdHJlZ2lzdGVyZWRGb3JQaXBlVHJhbnNmb3JtYXRpb25OYW1lZChrZXk6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRQaXBlc1trZXldICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0cmVnaXN0ZXJlZFBpcGVUcmFuc2Zvcm1hdGlvbihrZXk6IHN0cmluZywgY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgcGlwZSA9IHRoaXMucmVnaXN0ZXJlZFBpcGVzW2tleV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcGlwZSA/IHBpcGUoY29udGVudCwgYXJncywgY2FsbGJhY2ssIGRhdGEpIDogbnVsbDtcblx0fVxuXHRyZW1vdmVQaXBlVHJhbnNmb3JtYXRpb24gKGtleTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFBpcGVzW2tleV07XG5cdH1cblxuXHRyZWdpc3RlckNvbXBvbmVudCAobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG5cdH1cblx0cmVnaXN0ZXJlZEZvckNvbXBvbmVudFdpdGhOYW1lZChuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cdHJlZ2lzdGVyZWRDb21wb25lbnQoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0dmlld1JlZnJlbmNlOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdGVsOiBIVE1MRWxlbWVudCk6IFBpcGVDb21wb25lbnQge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdO1xuXHRcdGxldCByZXN1bHQ6IFBpcGVDb21wb25lbnQgPSBudWxsO1xuXHRcdFxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRsZXQgY29tcG9uZW50RmFjdG9yeSA9IHJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gdmlld1JlZnJlbmNlLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHRcdGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZiA8IGFueSA+ICkucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG5cdFx0XHRyZXN1bHQgPSAoPFBpcGVDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIHJlc3VsdDtcblx0fVxuXHRyZW1vdmVDb21wb25lbnQgKG5hbWU6IHN0cmluZykge1xuXHRcdGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdO1xuXHR9XG5cblx0cmVnaXN0ZXJTZXJ2aWNlRm9yQ29tcG9uZW50IChuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdID0gc2VydmljZTtcblx0fVxuXHRyZWdpc3RlcmVkU2VydmljZUZvckNvbXBvbmVudChuYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXTtcblx0fVxuXHRyZWdpc3RlcmVkRm9yU2VydmljZU5hbWVkKG5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cdHJlbW92ZVNlcnZpY2VGb3JDb21wb25lbnQgKG5hbWU6IHN0cmluZykge1xuXHRcdGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXTtcblx0fVxufSJdfQ==