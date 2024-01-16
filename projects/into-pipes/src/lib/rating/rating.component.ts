import { Component, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'rating-component',
    template: `
    <span class='rating' *ngIf="singleStar">
        <span class='fa fa-star' aria-hidden='true'></span>
    </span>
    <span class='rating' *ngIf="!singleStar">
        <span class='fa fa-star' aria-hidden='true' *ngFor="let x of value"></span>
        <span class='fa fa-star-half' aria-hidden='true' *ngIf="float != value"></span>
    </span>
    <span class='rate-value' [textContent]="source"></span>
    `,
    styles: [
        `
        :host {display:table;float:left;min-height: 23px;cursor:pointer}
        .rating {
            display: inline-block;
        }
        @media print {
            :host .rating {
                display: none;
            }
        }
        `
    ]
})
export class RatingComponent implements PipeComponent {
    source!: string;
	id!: string;
    name!: string;
    singleStar = false;
    value: any[] = [];
    float: any;
	onIntoComponentChange = new EventEmitter();

    constructor(private el: ElementRef){
        el.nativeElement.setAttribute('tabindex','0');
    }

    @HostListener('keyup',['$event'])
    keyup(event: any) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
    
        if (code === 13) {
            event.target.click();
        }
    }
    @HostListener('click',[])
    click() {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'rating'
        })
    }
    transform(source: any, data: any, args: any[]) {
        this.float = parseFloat(source);
        this.singleStar = args.length ? (args[0] === 'true') : false;
        this.source = source;
        const size = parseInt(source, 10);
        for(let i = 0; i < size; i++) {
            this.value.push(i);
        }
    }
}
