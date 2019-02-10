import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class AddressComponent implements PipeComponent {
    url: string;
    source: string;
    id: string;
    isLink: boolean;
    name: string;
    addr1: string;
    addr2: string;
    hasTarget: boolean;
    onIntoComponentChange: EventEmitter<{}>;
    transform(source: any, data: any, args: any[]): void;
    keyup(event: any): void;
    change(event: any): void;
}
