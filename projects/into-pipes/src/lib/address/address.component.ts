import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'address-component',
    template: `
    <a *ngIf="isLink" 
        [href]="disabled ? null : url" 
        [target]="!disabled && hasTarget ? '_blank' : null"
        class="google-map {{disabled ? 'disabled':''}}" 
        tabindex="{{active ? 0 : -1}}"
        (keyup)='keyup($event)' 
        (click)="change($event)">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="off-screen">View in google map</span>
        <span class="address" [textContent]="addr1"></span>
        <span class="address" [textContent]="addr2"></span>
    </a>
    <span *ngIf="!isLink" class="google-map">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="address" [textContent]="addr1"></span>
        <span class="address" [textContent]="addr2"></span>
    </span>
    `,
    styles: [
        `:host .address {float: left;margin-right: 4px;}
        :host .google-map {float: left;margin-right: 4px;}
        :host .fa {float:left;color: #f00;margin: 0 5px;}
        :host .off-screen {position: absolute;left: -999em;}
        :host a:hover .fa-map-marker{color: #fabdab;}
        :host a.disabled:hover .fa-map-marker{color: #f00;}
        :host a.disabled{color: #000;cursor:default;text-decoration: none;}
        :host span{float: left;}
        :host {display: table;float:left;min-height: 23px}
        @media print {
            :host {
                text-decoration: none;
            }
            :host .fa-map-marker {display: none;}
        }
        `
    ]
})
export class AddressComponent implements PipeComponentInterface {
    url!: string;
    source!: string;
    id!: string;
    isLink!: boolean;
	name!: string;
    addr1!: string;
    addr2!: string;
    hasTarget!: boolean;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange = new EventEmitter();

    static settingsPatterns() {
        return ['address:true:false', 'address:true:true']; //link, target
    }
    transform(source: any, data: any, args: any[]) {
        this.source= source;
        this.isLink= (args && args.length && args[0].length) ? args[0]=== 'true' : true;
        this.hasTarget = (args && args.length > 1 && args[1].length) ? args[1] === 'true' : false;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;

        if (this.isLink) {
            const x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 +"&ie=UTF-8";
            this.url = x.replace("\\s+", "+");
        }
    }
    keyup(event: any) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
    
        if (code === 13 && !this.disabled) {
            event.target.click();
        }
    }
    change(event: any) {
        event.stopPropagation();
        event.preventDefault();

        if (!this.disabled) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                item: event.type
            });
        }
    }
}
