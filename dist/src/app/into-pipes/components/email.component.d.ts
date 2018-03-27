import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class EmailComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, args: any[]): void;
}
