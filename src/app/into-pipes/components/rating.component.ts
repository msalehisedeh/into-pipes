import { Component } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'rating-component',
    template: `
    <span class='rating'>
        <span class='fa fa-star' aria-hidden='true' *ngFor="let x of value"></span>
        <span class='fa fa-star-half' aria-hidden='true' *ngIf="float !== value"></span>
    </span>
    <span class='rate-value' [textContent]="source"></span>
    `,
    styles: [
        `.rating {
            display: inline-block;
        }
        `
    ]
})
export class RatingComponent implements PipeComponent {
    source: string;
    value: number[] = [];
    float: number;

    transform(source: any, args: any[]) {
        const number = typeof source === "number" ? String(source) : source;
        this.float = parseFloat(source);
        this.source = source;
        const size = parseInt(source, 10);
        for(let i = 0; i < size; i++) {
            this.value.push(i);
        }
    }
}
