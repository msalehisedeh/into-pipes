import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'span-component',
    template: `<span [textContent]="source"></span>`,
    styles: [
        `
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
