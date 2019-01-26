import { EventEmitter } from '@angular/core';
import { PipeComponent, PipeServiceComponent } from '../interfaces/pipe.component';
export declare class SelectComponent implements PipeComponent {
    data: any;
    source: string;
    options: string;
    id: string;
    name: string;
    multiselect: boolean;
    service: PipeServiceComponent;
    onIntoComponentChange: EventEmitter<{}>;
    constructor();
    click(event: any): void;
    change(event: any): void;
    transform(source: any, data: any, args: any[]): void;
}
