import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'lastupdate-component',
    template: `
    <span *ngIf="showIcon" class="fa fa-clock-o" aria-hidden="true"></span>
    <span>{{formatDate()}}</span>
    `,
    styles: [
        `
        :host {display:table;float:left;min-height: var(--sedeh-min-height, 25px);position: relative}
        .fa {margin:var(--sedeh-margin, 0 5px)}
        @media print {
            :host .fa-clock-o {
                display: none;
            }
        }
        `
    ]
})
export class LastUpdateComponent implements PipeComponentInterface {
    source: any;
	id!: string;
    name!: string;
    showIcon!: boolean;
	disabled = false;
	active = true;
	validate = (item: any, newValue: any) => true;
    
    count!: string;
	onIntoComponentChange!: EventEmitter<any>;

    static settingsPatterns() {
		return ['lastupdate:false', 'lastupdate:true']; //show icon
	}
	transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.showIcon = (args && args.length > 0 && args[0].length && args[0] === 'true');
    }

    formatDate() {
		const currentDate = new Date();
		const minute = 60000;// one minute
		const hour = 3600000;// one hour limit
		const day = 86400000;// 24 hours limit
		const week = 604800000;// 7 days limit
		const month = 604800000*4;// 7 days limit
		const year = 604800000*52;// 7 days limit
		let result = "";

		let diff = currentDate.getTime() - this.source.getTime();

		if(diff <= minute) {// up to a minute
			result = "seconds ago";
		}else if(diff <= hour) {// up to an hour
			let minutes = Math.floor(diff/minute);
			let seconds = Math.floor((diff - (minutes * minute))/1000);

			result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
		}else if(diff <= day) {// up to a day
			let hours = Math.floor(diff/hour);
			let minutes = Math.floor((diff - (hours * hour))/minute);
			
			result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
		}else if(diff <= week) {// up to a week
			let days = Math.floor(diff/day);
			let hours = Math.floor((diff - (days * day))/hour);

			result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
		}else if(diff <= month) {// up to a month
			let weeks = Math.floor(diff/week);
			let days = Math.floor((diff - (weeks * week))/day);

			result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
		}else if(diff <= year) {// up to a week
			let months = Math.floor(diff/month);
			let weeks = Math.floor((diff - (months * month))/week);

			result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
		} else {
			let years = Math.floor(diff/year);
			let months = Math.floor((diff - (years * year))/month);

			result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
		}
		return result;
	}

}
