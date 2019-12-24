import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class CheckboxComponent implements PipeComponent {
    data: any;
    source: string;
    original: string;
    ideal: string;
    id: string;
    name: string;
    onOff: boolean;
    useFont: boolean;
    check: any;
    uncheck: any;
    onIntoComponentChange: EventEmitter<any>;
    keyup(event: any): void;
    click(event: any): void;
    transform(source: any, data: any, args: any[]): void;
}
