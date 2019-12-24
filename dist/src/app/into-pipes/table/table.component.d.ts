import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class TableComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    headers: any[];
    rows: any[];
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
    private getHeaders;
}
