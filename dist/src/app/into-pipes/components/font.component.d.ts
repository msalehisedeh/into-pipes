import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class FontComponent implements PipeComponent {
    font: string;
    location: string;
    source: string;
    id: string;
    name: string;
    content: string;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
}
