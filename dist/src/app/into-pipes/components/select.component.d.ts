import { Renderer, EventEmitter } from '@angular/core';
import { PipeComponent, PipeServiceComponent } from '../interfaces/pipe.component';
export declare class SelectComponent implements PipeComponent {
    private renderer;
    source: string;
    options: string;
    id: string;
    name: string;
    service: PipeServiceComponent;
    onIntoComponentChange: EventEmitter<{}>;
    constructor(renderer: Renderer);
    change(event: any): void;
    transform(source: any, args: any[]): void;
}
