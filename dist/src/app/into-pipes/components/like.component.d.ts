import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export declare class LikeComponent implements PipeComponent {
    source: any;
    id: string;
    item: any;
    name: string;
    showCount: boolean;
    thumbsup: boolean;
    selected: boolean;
    key: string;
    thumbs: string;
    onIntoComponentChange: EventEmitter<{}>;
    transform(source: any, data: any, args: any[]): void;
    keyup(event: any): void;
    private addItem(id);
    private removeItem(id);
    private getItem(id);
    formatterSource(): any;
    toggleCount(event: any): void;
}
