import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class ShareComponent implements PipeComponent {
    shouldDisplay: boolean;
    source: string;
    id: string;
    name: string;
    shareList: any[];
    onIntoComponentChange: EventEmitter<{}>;
    private shareInfo(type, address);
    keyup(event: any): void;
    change(event: any): void;
    toggleShare(): void;
    transform(source: any, data: any, args: any[]): void;
}
