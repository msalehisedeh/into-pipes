import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class PhoneComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    isLink: boolean;
    formatting: boolean;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
    normalizeSource(): string;
    formattedSource(): string;
    keyup(event: any): void;
    change(event: any): void;
}
