import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class EmailComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    isLink: boolean;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
    keyup(event: any): void;
    change(event: any): void;
}
