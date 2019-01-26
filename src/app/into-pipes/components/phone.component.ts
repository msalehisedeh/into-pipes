import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'phone',
    template: `
    <a  *ngIf="isLink" [href]="'tel:' + normalizeSource()">
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
        :host a:hover .fa-phone{color: #fabdab;}
        `
    ]
})
export class PhoneComponent implements PipeComponent {
    source: string;
	id: string;
    name: string;
    isLink: boolean;
    formatting: boolean;
	onIntoComponentChange: EventEmitter<any>;

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
            const ext = (10 - result.length);
            const b = result.slice(0, ext);
            const e = result.slice(ext);
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
                const ext = (10 - result.length);
                const b = result.slice(0, ext);
                const e = result.slice(ext);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3"); 
                result+= (b + ' ext. ' + e);
            }
        }
        return result;
    }
}
