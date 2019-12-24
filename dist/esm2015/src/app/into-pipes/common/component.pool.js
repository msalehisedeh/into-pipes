import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ComponentPool = class ComponentPool {
    constructor() {
        this.registeredPipes = {};
        this.registeredComponents = {};
        this.registeredServices = {};
    }
    registerPipeTransformation(name, pipe) {
        this.registeredPipes[name] = pipe;
    }
    registeredForPipeTransformationNamed(key) {
        return this.registeredPipes[key] !== undefined;
    }
    registeredPipeTransformation(key, content, args, callback, data) {
        const pipe = this.registeredPipes[key];
        return pipe ? pipe(content, args, callback, data) : null;
    }
    removePipeTransformation(key) {
        delete this.registeredPipes[key];
    }
    registerComponent(name, component) {
        this.registeredComponents[name] = component;
    }
    registeredForComponentWithNamed(name) {
        return this.registeredComponents[name] !== undefined;
    }
    registeredComponent(name, resolver, viewRefrence, el) {
        const component = this.registeredComponents[name];
        let result = null;
        if (component) {
            let componentFactory = resolver.resolveComponentFactory(component);
            const componentRef = viewRefrence.createComponent(componentFactory);
            const domElem = componentRef.hostView.rootNodes[0];
            el.appendChild(domElem);
            domElem.setAttribute("class", "into");
            result = componentRef.instance;
        }
        return result;
    }
    removeComponent(name) {
        delete this.registeredComponents[name];
    }
    registerServiceForComponent(name, service) {
        this.registeredServices[name] = service;
    }
    registeredServiceForComponent(name) {
        return this.registeredServices[name];
    }
    registeredForServiceNamed(name) {
        return this.registeredServices[name] !== undefined;
    }
    removeServiceForComponent(name) {
        delete this.registeredServices[name];
    }
};
ComponentPool = tslib_1.__decorate([
    Injectable()
], ComponentPool);
export { ComponentPool };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnBvb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29tcG9uZW50LnBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTixVQUFVLEVBS1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUQxQjtRQUVTLG9CQUFlLEdBQUUsRUFBRSxDQUFDO1FBQ3BCLHlCQUFvQixHQUFFLEVBQUUsQ0FBQztRQUN6Qix1QkFBa0IsR0FBRSxFQUFFLENBQUM7SUF5RGhDLENBQUM7SUF2REEsMEJBQTBCLENBQUUsSUFBWSxFQUFFLElBQVM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUNELG9DQUFvQyxDQUFDLEdBQVc7UUFDL0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsNEJBQTRCLENBQUMsR0FBVyxFQUFFLE9BQVksRUFBRSxJQUFjLEVBQUUsUUFBYyxFQUFFLElBQVU7UUFDM0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDaEUsQ0FBQztJQUNELHdCQUF3QixDQUFFLEdBQVc7UUFDcEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQkFBaUIsQ0FBRSxJQUFZLEVBQUUsU0FBYztRQUM5QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFDRCwrQkFBK0IsQ0FBQyxJQUFZO1FBQzNDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsbUJBQW1CLENBQ2xCLElBQVksRUFDWixRQUFrQyxFQUNsQyxZQUE4QixFQUM5QixFQUFlO1FBQ2YsTUFBTSxTQUFTLEdBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksTUFBTSxHQUFrQixJQUFJLENBQUM7UUFFM0IsSUFBSSxTQUFTLEVBQUU7WUFDcEIsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkUsTUFBTSxZQUFZLEdBQXNCLFlBQVksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN2RixNQUFNLE9BQU8sR0FBSSxZQUFZLENBQUMsUUFBcUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFnQixDQUFDO1lBQ2hHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdEMsTUFBTSxHQUFtQixZQUFZLENBQUMsUUFBUyxDQUFDO1NBQzFDO1FBQ0QsT0FBUSxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNELGVBQWUsQ0FBRSxJQUFZO1FBQzVCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQkFBMkIsQ0FBRSxJQUFZLEVBQUUsT0FBWTtRQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ3pDLENBQUM7SUFDRCw2QkFBNkIsQ0FBQyxJQUFZO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCx5QkFBeUIsQ0FBQyxJQUFZO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QseUJBQXlCLENBQUUsSUFBWTtRQUN0QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0QsQ0FBQTtBQTVEWSxhQUFhO0lBRHpCLFVBQVUsRUFBRTtHQUNBLGFBQWEsQ0E0RHpCO1NBNURZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG5cdEluamVjdGFibGUsIFxuXHRDb21wb25lbnRSZWYsIFxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxuXHRWaWV3Q29udGFpbmVyUmVmLFxuXHRFbWJlZGRlZFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuL3BpcGUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvb2wge1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRQaXBlcz0ge307XG5cdHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudHM9IHt9O1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRTZXJ2aWNlcz0ge307XG5cblx0cmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24gKG5hbWU6IHN0cmluZywgcGlwZTogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkUGlwZXNbbmFtZV0gPSBwaXBlO1xuXHR9XG5cdHJlZ2lzdGVyZWRGb3JQaXBlVHJhbnNmb3JtYXRpb25OYW1lZChrZXk6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRQaXBlc1trZXldICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0cmVnaXN0ZXJlZFBpcGVUcmFuc2Zvcm1hdGlvbihrZXk6IHN0cmluZywgY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgcGlwZSA9IHRoaXMucmVnaXN0ZXJlZFBpcGVzW2tleV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcGlwZSA/IHBpcGUoY29udGVudCwgYXJncywgY2FsbGJhY2ssIGRhdGEpIDogbnVsbDtcblx0fVxuXHRyZW1vdmVQaXBlVHJhbnNmb3JtYXRpb24gKGtleTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFBpcGVzW2tleV07XG5cdH1cblxuXHRyZWdpc3RlckNvbXBvbmVudCAobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG5cdH1cblx0cmVnaXN0ZXJlZEZvckNvbXBvbmVudFdpdGhOYW1lZChuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cdHJlZ2lzdGVyZWRDb21wb25lbnQoXG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0dmlld1JlZnJlbmNlOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdGVsOiBIVE1MRWxlbWVudCk6IFBpcGVDb21wb25lbnQge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdO1xuXHRcdGxldCByZXN1bHQ6IFBpcGVDb21wb25lbnQgPSBudWxsO1xuXHRcdFxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRsZXQgY29tcG9uZW50RmFjdG9yeSA9IHJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+ID0gdmlld1JlZnJlbmNlLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHRcdGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZiA8IGFueSA+ICkucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG5cdFx0XHRkb21FbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW50b1wiKTtcblx0XHRcdHJlc3VsdCA9ICg8UGlwZUNvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAgcmVzdWx0O1xuXHR9XG5cdHJlbW92ZUNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV07XG5cdH1cblxuXHRyZWdpc3RlclNlcnZpY2VGb3JDb21wb25lbnQgKG5hbWU6IHN0cmluZywgc2VydmljZTogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV0gPSBzZXJ2aWNlO1xuXHR9XG5cdHJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG5cdHJlZ2lzdGVyZWRGb3JTZXJ2aWNlTmFtZWQobmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0cmVtb3ZlU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG59Il19