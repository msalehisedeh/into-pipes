import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class LastUpdateComponent implements PipeComponent {
    source: any;
    id: string;
    name: string;
    showIcon: boolean;
    count: string;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
    formatDate(): string;
}
