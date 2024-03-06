import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'span-component',
    template: `<span [textContent]="source"></span>`,
    styles: [
        `
        :host {display:table;float:left;min-height: 23px}
        `
    ]
})
export class SpanComponent implements PipeComponentInterface {
	id!: string;
	name!: string;
    source!: string;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange!: EventEmitter<any>;

    static settingsPatterns() {
        return ['span']; //no arguments
    }
    transform(source: any, data: any, args: any[]) {
        this.source = source
    }
}
