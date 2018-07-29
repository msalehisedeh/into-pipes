import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'lastupdate-component',
    template: `
    <span *ngIf="showIcon" class="fa fa-clock-o" aria-hidden="true"></span>
    <span [textContent]="formatDate()"></span>
    `,
    styles: [
        `
        :host {display: table;position: relative}
        .fa {margin:0 5px 0 0}
        `
    ]
})
export class LastUpdateComponent implements PipeComponent {
    source: any;
	id: string;
    name: string;
    showIcon: boolean;
    
    
    count: string;
	onIntoComponentChange: EventEmitter<any>;

    transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.showIcon = (args && args.length && args[0] === 'true');
    }

    formatDate() {
		const currentDate = new Date();
		const minute = 60000;// one minute
		const hour = 3600000;// one hour limit
		const day = 86400000;// 24 hours limit
		const week = 604800000;// 7 days limit
		let result = "";

		let diff = currentDate.getTime() - this.source.getTime();

		if(diff <= minute) {// up to a minute
			result = "seconds ago";
		}else if(diff <= hour) {// up to an hour
			let count = diff/minute;
			if(count < 2) {
				result = "a minute ago";
			}else {
				result = count.toFixed(1) + " minutes ago";
			}
		}else if(diff <= day) {// up to a day
			let count = diff/hour;
			if(count < 2) {
				result = "an hour ago";
			}else {
				result = count.toFixed(1) + " hours ago";
			}
		}else if(diff <= week) {// up to a week
			let count = diff/day;
			if(count < 2) {
				result = "a day ago";
			}else {
				result = count.toFixed(1) + " days ago";
			}
		}else if(diff <= (week*4)) {// up to a week
			let count = diff/day;
			if(count < 2) {
				result = "a month ago";
			}else {
				result = count.toFixed(1) + " months ago";
			}
		}else if(diff <= (week*52)) {// up to a week
			let count = diff/day;
			if(count < 2) {
				result = "a year ago";
			}else {
				result = count.toFixed(1) + " years ago";
			}
		}
		return result;
	}

}
