import { EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';
export declare class VideoComponent implements PipeComponent {
    hasControls: boolean;
    hoverPlay: boolean;
    source: string;
    id: string;
    name: string;
    width: string;
    height: string;
    alt: string;
    onIntoComponentChange: EventEmitter<{}>;
    transform(source: any, data: any, args: any[]): void;
    updateControls(event: any): void;
    resetControls(event: any): void;
    private isPlaying(video);
    keyup(event: any): void;
    change(event: any): void;
}
