import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'span-component',
    template: `<span [textContent]="source"></span>`,
    styles: [
        `
        :host {display:table;float:left;min-height: 23px}
        `
    ]
})
export class SpanComponent implements PipeComponent {
	id: string;
	name: string;
    source: string;
	onIntoComponentChange: EventEmitter<any>;

    transform(source: any, data: any, args: any[]) {
        this.source = source
    }
}
