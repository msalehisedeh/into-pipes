import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class SpanComponent implements PipeComponent {
    id: string;
    name: string;
    source: string;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, args: any[]): void;
}
