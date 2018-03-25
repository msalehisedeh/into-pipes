import { Component } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'json-component',
    template: `<span class="json-view" [textContent]="source | json"></span>`,
    styles: [
        `.json-view {
            display: inline-block;
            float: left;
            font-family: monospace;
            padding: 5px;
            white-space: pre-wrap;
            unicode-bidi: embed;        
        }
        `
    ]
})
export class JsonComponent implements PipeComponent {
    source: string;

    transform(source: any, args: any[]) {
        this.source = source
    }
}
