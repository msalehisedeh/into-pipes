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
        `:host {

        }
        `
    ]
})
export class EmailComponent implements PipeComponent {
    source: string;

    transform(source: any, args: any[]) {
        this.source = source;
    }
}
