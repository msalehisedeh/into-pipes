import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'email',
    template: `
    <a 
        *ngIf="isLink" 
        tabindex="{{active ? 0 : -1}}" 
        class="{{disabled ? 'disabled':''}}"
        [href]="'mailto:' + source" (keyup)='keyup($event)' 
        (click)="change($event)">
        <span class='fa fa-envelope' aria-hidden='true'></span>
        <span [textContent]="source"></span>
    </a>
    <span *ngIf="!isLink">
        <span class='fa fa-envelope' aria-hidden='true'></span>
        <span [textContent]="source"></span>
    </span>
    `,
    styles: [
        `
        :host {display:table;float:left;min-height: 23px}
        :host:hover .fa-envelope{color: #fabdab;}
        :host:hover .disabled .fa-envelope{color: #f00;}
        :host a.disabled{color: #000;cursor:default;pointer-events: none;text-decoration: none;}
        :host .fa{margin: 0 5px;}
        @media print {
            :host a { text-decoration: none;}
            :host a .fa-envelope {display: none;}
            :host .fa-envelope {display: none;}
        }
        `
    ]
})
export class EmailComponent implements PipeComponentInterface {
    source!: string;
	id!: string;
    name!: string;
    isLink!: boolean;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange = new EventEmitter();

    static settingsPatterns() {
        return ['email:true']; //islink
    }
    transform(source: any, data: any, args: any[]) {
        this.isLink= (args && args.length && args[0].length) ? args[0] === 'true' : true;
        this.source = source;
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
                type: "mail-to",
                item: event.type
            });
        }
    }
}
