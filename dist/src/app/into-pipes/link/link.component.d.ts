import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class LinkComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    title: string;
    poped: boolean;
    poper: boolean;
    target: string;
    onIntoComponentChange: EventEmitter<{}>;
    transform(source: any, data: any, args: any[]): void;
    keyup(event: any): void;
    change(event: any): void;
}
