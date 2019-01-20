import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class ShareComponent implements PipeComponent {
    shouldDisplay: boolean;
    source: string;
    id: string;
    name: string;
    shareList: any[];
    onIntoComponentChange: EventEmitter<any>;
    private shareInfo(type, address);
    keyup(event: any): void;
    transform(source: any, data: any, args: any[]): void;
}
