import { Renderer, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class InputComponent implements PipeComponent {
    private renderer;
    source: string;
    id: string;
    name: string;
    placeholder: string;
    formatting: string;
    editName: boolean;
    onIntoComponentChange: EventEmitter<{}>;
    constructor(renderer: Renderer);
    nameEditor: any;
    keyup(event: any): void;
    keydown(event: any): void;
    clickName(event: any): void;
    transform(source: any, data: any, args: any[]): void;
}
