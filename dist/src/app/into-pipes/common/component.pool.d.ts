import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PipeComponent } from './pipe.component';
export declare class ComponentPool {
    private registeredPipes;
    private registeredComponents;
    private registeredServices;
    registerPipeTransformation(name: string, pipe: any): void;
    registeredForPipeTransformationNamed(key: string): boolean;
    registeredPipeTransformation(key: string, content: any, args: string[], callback?: any, data?: any): any;
    removePipeTransformation(key: string): void;
    registerComponent(name: string, component: any): void;
    registeredForComponentWithNamed(name: string): boolean;
    registeredComponent(name: string, resolver: ComponentFactoryResolver, viewRefrence: ViewContainerRef, el: HTMLElement): PipeComponent;
    removeComponent(name: string): void;
    registerServiceForComponent(name: string, service: any): void;
    registeredServiceForComponent(name: string): any;
    registeredForServiceNamed(name: string): boolean;
    removeServiceForComponent(name: string): void;
}
