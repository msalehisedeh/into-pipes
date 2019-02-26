import { EventEmitter, ElementRef } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class RatingComponent implements PipeComponent {
    private el;
    source: string;
    id: string;
    name: string;
    singleStar: boolean;
    value: any[];
    float: any;
    onIntoComponentChange: EventEmitter<{}>;
    constructor(el: ElementRef);
    keyup(event: any): void;
    click(): void;
    transform(source: any, data: any, args: any[]): void;
}
