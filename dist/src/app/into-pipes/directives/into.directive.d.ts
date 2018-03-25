import { ViewContainerRef, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentPool } from '../injectables/component.pool';
export declare class IntoDirective implements OnInit {
    private el;
    private pool;
    private componentFactoryResolver;
    rawContent: string;
    intoId: string;
    intoName: string;
    into: string;
    constructor(el: ViewContainerRef, pool: ComponentPool, componentFactoryResolver: ComponentFactoryResolver);
    private split(item);
    private _transform(content, args);
    private transformComponent(type, content, id, name, ...args);
    private registeredComponentFor(name);
    ngOnInit(): void;
}
