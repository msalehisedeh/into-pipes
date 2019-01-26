import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'email',
    template: `
    <a [href]="'mailto:' + source">
        <span class='fa fa-envelope' aria-hidden='true'></span>
        <span [textContent]="source"></span>
    </a>
    `,
    styles: [
        `
        :host:hover .fa-envelope{color: #fabdab;}
        `
    ]
})
export class EmailComponent implements PipeComponent {
    source: string;
	id: string;
	name: string;
	onIntoComponentChange: EventEmitter<any>;

    transform(source: any, data: any, args: any[]) {
        this.source = source;
    }
}
