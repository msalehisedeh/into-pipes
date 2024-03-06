import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'json-component',
    template: `<span class="json-view" [textContent]="source | json"></span>`,
    styles: [
        `
        :host {display:table;float:left;min-height: 23px}
        .json-view {
            display: inline-block;
            float: left;
            font-family: monospace;
            padding: 5px;
            white-space: pre-wrap;
            unicode-bidi: embed;        
        }
        `
    ]
})
export class JsonComponent implements PipeComponentInterface {
	id!: string;
	name!: string;
    source!: string;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange!: EventEmitter<any>;

    static settingsPatterns() {
        return ['json']; //no arguments
    }
    transform(source: any, data: any, args: any[]) {
        this.source = source
    }
}
