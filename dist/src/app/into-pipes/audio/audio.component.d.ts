import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class AudioComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
    private isPlaying;
    keyup(event: any): void;
    change(event: any): void;
}
