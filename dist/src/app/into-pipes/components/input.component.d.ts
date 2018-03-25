import { Renderer } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class InputComponent implements PipeComponent {
    private renderer;
    source: string;
    placeholder: string;
    editNameId: string;
    formatting: string;
    editName: boolean;
    constructor(renderer: Renderer);
    nameEditor: any;
    keyup(event: any): void;
    keydown(event: any): void;
    clickName(event: any): void;
    transform(source: any, args: any[]): void;
}
