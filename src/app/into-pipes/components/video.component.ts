import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'video-component',
    template: `<video [src]="source" [style.width]="width" [style.height]="height" controls="true" [title]="alt"></video>`,
    styles: [``]
})
export class VideoComponent implements PipeComponent {
    source: string;
	id: string;
	name: string;
    width: string;
    height: string;
    alt: string;
	onIntoComponentChange: EventEmitter<any>;

    transform(source: any, args: any[]) {

        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";

        if ((typeof source === "string") || !(source instanceof Array)) {
            if(!this.alt || !this.alt.length) {
                const q = source.indexOf("?");
                const t = q < 0 ? source : source.substring(0, q);
                const d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d+1);
            }
        }
    }
}