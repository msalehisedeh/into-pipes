import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'link-component',
    template: `
    <a 
        tabindex="{{active ? 0 : -1}}" 
        class="{{toggled ? status2 : status1}} {{disabled ? 'disabled' : ''}}" 
        (keyup)='keyup($event)' 
        (click)="change($event)">
    </a>`,
    styles: [
        `
        :host {display:inline-block;float:left}
        :host a{width: 23px;height: 23px;cursor: pointer;text-decoration: none;}
        :host a.disabled{pointer-events: none;color: #000;cursor:default;text-decoration: none;}
        @media print {
            :host a {
                width: 23px;
                height: 23px;
                text-decoration: none;
            }
        }
        `
    ]
})
export class ToggerComponent implements PipeComponentInterface {
    id!: string;
    data: any;
    name!: string;
    source!: string;
    status1!: string;
    status2!: string;
    toggled = false;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange = new EventEmitter();

    static settingsPatterns() {
        return ['toggle::1:0']; //name, status, alt status
    }
    transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.data = data;
        this.name = (args && args.length) ? args[0] : "";
        this.status1 = (args && args.length > 1) ? args[1] : "";
        this.status2 = (args && args.length > 2) ? args[2] : "";
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
        if (!this.disabled && this.validate(this.data, !this.toggled)) {
            this.toggled = !this.toggled;
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.toggled,
                type: "toggle",
                item: this.data
            });
        }
    }
}
