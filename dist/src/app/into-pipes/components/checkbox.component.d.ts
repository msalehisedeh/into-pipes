import { Renderer } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class CheckboxComponent implements PipeComponent {
    private renderer;
    source: string;
    ideal: string;
    constructor(renderer: Renderer);
    keyup(event: any): void;
    transform(source: any, args: any[]): void;
}
