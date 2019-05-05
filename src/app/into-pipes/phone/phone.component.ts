import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'phone',
    template: `
    <a  *ngIf="isLink" [href]="'tel:' + normalizeSource()" (keyup)='keyup($event)' (click)="change($event)">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </a>
    <span *ngIf="!isLink">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </span>
    `,
    styles: [
        `
        :host {display:table;float:left;min-height: 20px}
        :host a:hover .fa-phone{color: #fabdab;}
        :host .fa{margin: 0 5px;}
        `
    ]
})
export class PhoneComponent implements PipeComponent {
    source: string;
	id: string;
    name: string;
    isLink: boolean;
    formatting: boolean;
	onIntoComponentChange = new EventEmitter();

    transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.isLink= args.length ? args[0] === 'true' : false;
        this.formatting= args.length > 1 ? args[1] === 'true' : false;
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
    
        if (code === 13) {
            event.target.click();
        }
    }
    change(event: any) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: event.type
        });
    }
}
