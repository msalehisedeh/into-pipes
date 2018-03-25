import { Component } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'link-component',
    template: `<a [href]="source" [target]="target" [textContent]="title"></a>`,
    styles: [
        `
        `
    ]
})
export class LinkComponent implements PipeComponent {
    source: string;
    title: string;
    target: string;

    transform(source: any, args: any[]) {
        this.source = source;
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
    
        if(!this.title || !this.title.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d+1);
        }
    }
}
