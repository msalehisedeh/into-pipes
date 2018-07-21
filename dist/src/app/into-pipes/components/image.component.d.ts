import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class ImageComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    width: string;
    height: string;
    alt: string;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
}
