import { ViewContainerRef, ElementRef, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentPool } from './component.pool';
export declare class IntoDirective implements OnInit {
    private viewRef;
    el: ElementRef;
    private pool;
    private componentFactoryResolver;
    rawContent: string;
    intoId: string;
    intoName: string;
    intoData: any;
    into: string;
    onComponentChange: (event: any) => void;
    constructor(viewRef: ViewContainerRef, el: ElementRef, pool: ComponentPool, componentFactoryResolver: ComponentFactoryResolver);
    private split(item);
    private _transform(content, args, data);
    private transformComponent(type, content, id, name, data, ...args);
    private registeredComponentFor(name);
    ngOnInit(): void;
}
