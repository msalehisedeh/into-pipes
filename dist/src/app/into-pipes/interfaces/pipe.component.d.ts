import { EventEmitter } from '@angular/core';
export interface PipeComponent {
    source: any;
    id: string;
    name: string;
    service?: PipeServiceComponent;
    onIntoComponentChange: EventEmitter<any>;
    transform(content: any, args?: any[]): any;
}
export interface PipeServiceComponent {
    getDataFor(itemName: any, itemId: any): any;
}
