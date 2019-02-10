/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ComponentPool {
    constructor() {
        this.registeredPipes = {};
        this.registeredComponents = {};
        this.registeredServices = {};
    }
    /**
     * @param {?} name
     * @param {?} pipe
     * @return {?}
     */
    registerPipeTransformation(name, pipe) {
        this.registeredPipes[name] = pipe;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    registeredForPipeTransformationNamed(key) {
        return this.registeredPipes[key] !== undefined;
    }
    /**
     * @param {?} key
     * @param {?} content
     * @param {?} args
     * @param {?=} callback
     * @param {?=} data
     * @return {?}
     */
    registeredPipeTransformation(key, content, args, callback, data) {
        /** @type {?} */
        const pipe = this.registeredPipes[key];
        return pipe ? pipe(content, args, callback, data) : null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removePipeTransformation(key) {
        delete this.registeredPipes[key];
    }
    /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    registerComponent(name, component) {
        this.registeredComponents[name] = component;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredForComponentWithNamed(name) {
        return this.registeredComponents[name] !== undefined;
    }
    /**
     * @param {?} name
     * @param {?} resolver
     * @param {?} viewRefrence
     * @param {?} el
     * @return {?}
     */
    registeredComponent(name, resolver, viewRefrence, el) {
        /** @type {?} */
        const component = this.registeredComponents[name];
        /** @type {?} */
        let result = null;
        if (component) {
            /** @type {?} */
            let componentFactory = resolver.resolveComponentFactory(component);
            /** @type {?} */
            const componentRef = viewRefrence.createComponent(componentFactory);
            /** @type {?} */
            const domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
            el.appendChild(domElem);
            result = (/** @type {?} */ (componentRef.instance));
        }
        return result;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeComponent(name) {
        delete this.registeredComponents[name];
    }
    /**
     * @param {?} name
     * @param {?} service
     * @return {?}
     */
    registerServiceForComponent(name, service) {
        this.registeredServices[name] = service;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredServiceForComponent(name) {
        return this.registeredServices[name];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredForServiceNamed(name) {
        return this.registeredServices[name] !== undefined;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeServiceForComponent(name) {
        delete this.registeredServices[name];
    }
}
ComponentPool.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ComponentPool.prototype.registeredPipes;
    /** @type {?} */
    ComponentPool.prototype.registeredComponents;
    /** @type {?} */
    ComponentPool.prototype.registeredServices;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnBvb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29tcG9uZW50LnBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTixVQUFVLEVBS1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsTUFBTTs7K0JBQ29CLEVBQUU7b0NBQ0csRUFBRTtrQ0FDSixFQUFFOzs7Ozs7O0lBRTlCLDBCQUEwQixDQUFFLElBQVksRUFBRSxJQUFTO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2xDOzs7OztJQUNELG9DQUFvQyxDQUFDLEdBQVc7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxDQUFDO0tBQy9DOzs7Ozs7Ozs7SUFDRCw0QkFBNEIsQ0FBQyxHQUFXLEVBQUUsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTs7UUFDM0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUMvRDs7Ozs7SUFDRCx3QkFBd0IsQ0FBRSxHQUFXO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUUsSUFBWSxFQUFFLFNBQWM7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUM1Qzs7Ozs7SUFDRCwrQkFBK0IsQ0FBQyxJQUFZO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDO0tBQ3JEOzs7Ozs7OztJQUNELG1CQUFtQixDQUNsQixJQUFZLEVBQ1osUUFBa0MsRUFDbEMsWUFBOEIsRUFDOUIsRUFBZTs7UUFDZixNQUFNLFNBQVMsR0FBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBQ25ELElBQUksTUFBTSxHQUFrQixJQUFJLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7WUFDckIsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQ25FLE1BQU0sWUFBWSxHQUFzQixZQUFZLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O1lBQ3ZGLE1BQU0sT0FBTyxxQkFBRyxtQkFBQyxZQUFZLENBQUMsUUFBbUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQWdCLEVBQUM7WUFDaEcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixNQUFNLEdBQUcsbUJBQWdCLFlBQVksQ0FBQyxRQUFRLEVBQUMsQ0FBQztTQUMxQztRQUNELE1BQU0sQ0FBRSxNQUFNLENBQUM7S0FDckI7Ozs7O0lBQ0QsZUFBZSxDQUFFLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7Ozs7OztJQUVELDJCQUEyQixDQUFFLElBQVksRUFBRSxPQUFZO1FBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDeEM7Ozs7O0lBQ0QsNkJBQTZCLENBQUMsSUFBWTtRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7OztJQUNELHlCQUF5QixDQUFDLElBQVk7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUM7S0FDbkQ7Ozs7O0lBQ0QseUJBQXlCLENBQUUsSUFBWTtRQUN0QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7O1lBM0RELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG5cdEluamVjdGFibGUsIFxuXHRDb21wb25lbnRSZWYsIFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRFbWJlZGRlZFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuL3BpcGUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvb2wge1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRQaXBlcz0ge307XG5cdHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudHM9IHt9O1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRTZXJ2aWNlcz0ge307XG5cblx0cmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24gKG5hbWU6IHN0cmluZywgcGlwZTogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkUGlwZXNbbmFtZV0gPSBwaXBlO1xuXHR9XG5cdHJlZ2lzdGVyZWRGb3JQaXBlVHJhbnNmb3JtYXRpb25OYW1lZChrZXk6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRQaXBlc1trZXldICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0cmVnaXN0ZXJlZFBpcGVUcmFuc2Zvcm1hdGlvbihrZXk6IHN0cmluZywgY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgcGlwZSA9IHRoaXMucmVnaXN0ZXJlZFBpcGVzW2tleV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcGlwZSA/IHBpcGUoY29udGVudCwgYXJncywgY2FsbGJhY2ssIGRhdGEpIDogbnVsbDtcblx0fVxuXHRyZW1vdmVQaXBlVHJhbnNmb3JtYXRpb24gKGtleTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFBpcGVzW2tleV07XG5cdH1cblxuXHRyZWdpc3RlckNvbXBvbmVudCAobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG5cdH1cblx0cmVnaXN0ZXJlZEZvckNvbXBvbmVudFdpdGhOYW1lZChuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cdHJlZ2lzdGVyZWRDb21wb25lbnQoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0dmlld1JlZnJlbmNlOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdGVsOiBIVE1MRWxlbWVudCk6IFBpcGVDb21wb25lbnQge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdO1xuXHRcdGxldCByZXN1bHQ6IFBpcGVDb21wb25lbnQgPSBudWxsO1xuXHRcdFxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRsZXQgY29tcG9uZW50RmFjdG9yeSA9IHJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gdmlld1JlZnJlbmNlLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHRcdGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZiA8IGFueSA+ICkucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG5cdFx0XHRyZXN1bHQgPSAoPFBpcGVDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIHJlc3VsdDtcblx0fVxuXHRyZW1vdmVDb21wb25lbnQgKG5hbWU6IHN0cmluZykge1xuXHRcdGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdO1xuXHR9XG5cblx0cmVnaXN0ZXJTZXJ2aWNlRm9yQ29tcG9uZW50IChuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdID0gc2VydmljZTtcblx0fVxuXHRyZWdpc3RlcmVkU2VydmljZUZvckNvbXBvbmVudChuYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXTtcblx0fVxuXHRyZWdpc3RlcmVkRm9yU2VydmljZU5hbWVkKG5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cdHJlbW92ZVNlcnZpY2VGb3JDb21wb25lbnQgKG5hbWU6IHN0cmluZykge1xuXHRcdGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXTtcblx0fVxufSJdfQ==