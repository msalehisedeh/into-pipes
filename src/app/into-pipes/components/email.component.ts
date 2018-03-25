import { Component } from '@angular/core';
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
        ``
    ]
})
export class EmailComponent implements PipeComponent {
    source: string;
	id: string;
	name: string;

    transform(source: any, args: any[]) {
        this.source = source;
    }
}