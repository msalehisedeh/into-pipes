import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class AudioComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    onIntoComponentChange: EventEmitter<{}>;
    transform(source: any, data: any, args: any[]): void;
    change(event: any): void;
}
