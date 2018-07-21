import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class LinkComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    title: string;
    target: string;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
}
