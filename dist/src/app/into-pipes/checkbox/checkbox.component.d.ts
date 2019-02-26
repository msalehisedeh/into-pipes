import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class CheckboxComponent implements PipeComponent {
    data: any;
    source: string;
    original: string;
    ideal: string;
    id: string;
    name: string;
    useFont: boolean;
    check: any;
    uncheck: any;
    onIntoComponentChange: EventEmitter<{}>;
    keyup(event: any): void;
    click(event: any): void;
    transform(source: any, data: any, args: any[]): void;
}
