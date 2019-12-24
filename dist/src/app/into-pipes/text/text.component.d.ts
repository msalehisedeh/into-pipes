import { Renderer, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class TextComponent implements PipeComponent {
    private renderer;
    source: string;
    id: string;
    name: string;
    rows: number;
    limit: number;
    editName: boolean;
    counter: boolean;
    oldValue: string;
    nameEditor: any;
    nameHolder: any;
    onIntoComponentChange: EventEmitter<any>;
    constructor(renderer: Renderer);
    keyup(event: any): void;
    blur(event: any): void;
    focus(event: any): void;
    click(event: any): void;
    transform(source: any, data: any, args: any[]): void;
}
