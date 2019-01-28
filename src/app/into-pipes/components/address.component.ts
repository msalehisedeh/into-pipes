import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'address-component',
    template: `
    <a [href]="url" class="google-map">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="off-screen">View in google map</span>
        <span class="address" [textContent]="addr1"></span>
        <span class="address" [textContent]="addr2"></span>
    </a>
    `,
    styles: [
        `.address {float: left;margin-right: 4px;}
        .google-map {float: left;margin-right: 4px;}
        .fa {float:left;color: #f00;margin: 0 3px;}
        .off-screen {position: absolute;left: -999em;}
        :host a:hover .fa-map-marker{color: #fabdab;}
        :host span{float-left;}
        :host {display: table;float:left;min-height: 23px}
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

    transform(source: any, data: any, args: any[]) {
        this.source= source;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;

        const x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 +"&ie=UTF-8";
        this.url = x.replace("\\s+", "+");
    }
}
