import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class LikeComponent implements PipeComponent {
    source: any;
    id: string;
    data: any;
    name: string;
    showCount: boolean;
    thumbsup: boolean;
    selected: boolean;
    key: string;
    thumbs: string;
    onIntoComponentChange: EventEmitter<any>;
    transform(source: any, data: any, args: any[]): void;
    keyup(event: any): void;
    private addItem;
    private removeItem;
    private getItem;
    formatterSource(): any;
    toggleCount(event: any): void;
}
