import { Component } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'font-component',
    template: `
    <span *ngIf="location === 'left'">
        <span [class]="font" aria-hidden='true'></span>
        <span [textContent]="content"></span>
    </span>
    <span *ngIf="location === 'right'">
        <span [textContent]="content"></span>
        <span [class]="font" aria-hidden='true'></span>
    </span>
    <span *ngIf="location === 'replace'">
        <span [class]="font" aria-hidden='true'></span>
    </span>
    `,
    styles: [
        `span span {
            float: left;
        }
        `
    ]
})
export class FontComponent implements PipeComponent {
    font: string;
    location: string;
    source: string;
	id: string;
	name: string;
    content: string;

    transform(source: any, args: any[]) {
        this.source = source;
        this.font = args[0];
        this.location = args.length > 1 ? args[1] : "left";
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    }
}
