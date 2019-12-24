import { EventEmitter } from '@angular/core';
import { PipeComponent, PipeServiceComponent } from '../common/pipe.component';
export declare class SelectComponent implements PipeComponent {
    data: any;
    source: string;
    options: string;
    id: string;
    name: string;
    multiselect: boolean;
    service: PipeServiceComponent;
    onIntoComponentChange: EventEmitter<any>;
    constructor();
    click(event: any): void;
    change(event: any): void;
    transform(source: any, data: any, args: any[]): void;
}
