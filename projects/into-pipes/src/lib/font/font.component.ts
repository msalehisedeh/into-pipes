import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'font-component',
    template: `
        <span *ngIf="location === 'left'"    [class]="font" aria-hidden='true'></span>
        <span *ngIf="location !== 'replace'" [textContent]="content"></span>
        <span *ngIf="location === 'right'"   [class]="font" aria-hidden='true'></span>
        <span *ngIf="location === 'replace'" [class]="font" aria-hidden='true'></span>
    `,
    styles: [
        `
        :host {display:table;float:left;min-height: var(--sedeh-min-height, 25px)}
        :host span {
            float: left;
            margin:  var(--sedeh-margin, 0 5px);
        }
        `
    ]
})
export class FontComponent implements PipeComponentInterface {
    font!: string;
    location!: string;
    source!: string;
	id!: string;
	name!: string;
    content!: string;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange!: EventEmitter<any>;

    static settingsPatterns() {
        return ['font:fa fa-check::*']; //font class, location left/right, action
    }
    transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.font = args[0];
        this.location = (args.length > 1 && args[1].length) ? args[1] : "left";
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    }
}
