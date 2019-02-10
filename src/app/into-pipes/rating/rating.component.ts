import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'rating-component',
    template: `
    <span class='rating'>
        <span class='fa fa-star' aria-hidden='true' *ngFor="let x of value"></span>
        <span class='fa fa-star-half' aria-hidden='true' *ngIf="float != value"></span>
    </span>
    <span class='rate-value' [textContent]="source"></span>
    `,
    styles: [
        `
        :host {display:table;float:left;min-height: 23px}
        .rating {
            display: inline-block;
        }
        `
    ]
})
export class RatingComponent implements PipeComponent {
    source: string;
	id: string;
	name: string;
    value: any[] = [];
    float: any;
	onIntoComponentChange: EventEmitter<any>;

    transform(source: any, data: any, args: any[]) {
        this.float = parseFloat(source);
        this.source = source;
        const size = parseInt(source, 10);
        for(let i = 0; i < size; i++) {
            this.value.push(i);
        }
    }
}
