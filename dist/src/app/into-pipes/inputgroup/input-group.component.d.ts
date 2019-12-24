import { Renderer, EventEmitter } from '@angular/core';
import { PipeComponent, PipeServiceComponent } from '../common/pipe.component';
export declare class InputGroupComponent implements PipeComponent {
    private renderer;
    data: any;
    source: any;
    options: string;
    id: string;
    name: string;
    type: string;
    service: PipeServiceComponent;
    onIntoComponentChange: EventEmitter<any>;
    constructor(renderer: Renderer);
    focused(event: any): void;
    isSelected(item: any): boolean;
    transform(source: any, data: any, args: any[]): void;
}
