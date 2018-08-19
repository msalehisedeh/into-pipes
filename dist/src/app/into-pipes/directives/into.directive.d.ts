import { ViewContainerRef, ElementRef, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { ComponentPool } from '../injectables/component.pool';
export declare class IntoDirective implements OnInit, OnDestroy {
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
    private split;
    private _transform;
    private transformComponent;
    private registeredComponentFor;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
