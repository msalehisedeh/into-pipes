import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'address-component',
    template: `
    <span class="address">
        <span [textContent]="addr1"></span>
        <span [textContent]="addr2"></span>
    </span> 
    <a [href]="url" class="google-map">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="off-screen">View in google map</span>
    </a>
    `,
    styles: [
        `.address {
            display: inline-block;
            float: left;
        }
        .google-map {
            display: inline-block;
            float: left;
        }
        .fa {
            color: #f00;
            margin: 0 3px;
        }
        .off-screen {
            position: absolute;
            left: -999em;
        }
        `
    ]
})
export class AddressComponent implements PipeComponent {
    url: string;
    source: string;
	id: string;
	name: string;
    addr1: string;
    addr2: string;
	onIntoComponentChange: EventEmitter<any>;

    transform(source: any, args: any[]) {
        this.source= source;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;

        const x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 +"&ie=UTF-8";
        this.url = x.replace("\\s+", "+");
    }
}
