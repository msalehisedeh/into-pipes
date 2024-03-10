import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'phone',
    template: `
    <a  
        *ngIf="isLink" 
        tabindex="{{active ? 0 : -1}}"
        class="phone {{disabled ? 'disabled' : ''}}"
        [href]="disabled ? null : 'tel:' + normalizeSource()" 
        (keyup)='keyup($event)' 
        (click)="change($event)">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </a>
    <span *ngIf="!isLink phone">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </span>
    `,
    styles: [
        `
        :host {display:table;float:left;min-height: var(--sedeh-min-height, 25px)}
        :host .phone {text-decoration: none;}
        :host .phone:hover {opacity: var(--sedeh-hover-opacity , 0.5);}
        :host .phone.disabled .fa-phone{color: var(--sedeh-disabled-color, #888);}
        :host .phone.disabled:hover .fa-phone{color: var(--sedeh-disabled-color, #888);}
        :host .phone.disabled{color: var(--sedeh-disabled-color, #888);cursor:default;pointer-events: none;text-decoration: none;}
        :host .fa{margin: var(--sedeh-margin , 0 5px);}
        @media print {
            :host a { text-decoration: none }
            :host .fa-phone {display: none;}
            :host a .fa-phone {display: none;}
        }
        `
    ]
})
export class PhoneComponent implements PipeComponentInterface {
    source!: string;
	id!: string;
    name!: string;
    isLink!: boolean;
    formatting!: boolean;  disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange = new EventEmitter();

    static settingsPatterns() {
        return ['phone:true:true']; //islink, format
    }
    transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.isLink= (args?.length && args[0].length) ? (args[0] === 'true') : false;
        this.formatting= (args?.length > 1 && args[1].length) ? (args[1] === 'true') : false;
    }
    normalizeSource() {
        let result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;

        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        } else if (result.length > 10) {
            const b = result.slice(0, 10);
            const e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    }
    formattedSource() {
        let result = this.source;
        
        if (this.formatting) {
            result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
            result = result[0] === '1' ? result.substring(1) : result;

            if (result.length === 10) {
                result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3"); 
            } else if (result.length > 10) {
                const b = result.slice(0, 10);
                const e = result.slice(10);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3"); 
                result+= (' ext. ' + e);
            }
        }
        return result;
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
        if (!this.disabled) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                type: 'click',
                item: event.type
            });
        }
    }
}
