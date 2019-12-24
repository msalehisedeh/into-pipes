import { Renderer, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class InputComponent implements PipeComponent {
    private renderer;
    data: any;
    source: string;
    id: string;
    name: string;
    placeholder: string;
    formatting: string;
    editName: boolean;
    oldValue: string;
    nameEditor: any;
    nameHolder: any;
    onIntoComponentChange: EventEmitter<any>;
    constructor(renderer: Renderer);
    keyup(event: any): void;
    blur(event: any): void;
    keydown(event: any): void;
    clickName(event: any): void;
    transform(source: any, data: any, args: any[]): void;
}
