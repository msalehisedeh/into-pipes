import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class ImageComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    origWidth: number;
    origHeight: number;
    magnification: number;
    popLocation: string;
    width: string;
    height: string;
    alt: string;
    onIntoComponentChange: EventEmitter<{}>;
    enter(event: any): void;
    hoverOut(event: any): void;
    hoverViewPort(event: any): void;
    transform(source: any, data: any, args: any[]): void;
    change(event: any): void;
}
