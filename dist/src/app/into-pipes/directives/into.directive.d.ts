/// <reference types="node" />
import { ViewContainerRef, ElementRef, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentPool } from '../injectables/component.pool';
import { EventEmitter } from 'events';
export declare class IntoDirective implements OnInit {
    private viewRef;
    el: ElementRef;
    private pool;
    private componentFactoryResolver;
    rawContent: string;
    intoId: string;
    intoName: string;
    into: string;
    onComponentChange: EventEmitter;
    constructor(viewRef: ViewContainerRef, el: ElementRef, pool: ComponentPool, componentFactoryResolver: ComponentFactoryResolver);
    private split(item);
    private _transform(content, args);
    private transformComponent(type, content, id, name, ...args);
    onIntoComponentChange(event: any): void;
    private registeredComponentFor(name);
    ngOnInit(): void;
}
