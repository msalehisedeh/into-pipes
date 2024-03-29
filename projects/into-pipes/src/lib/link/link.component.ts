import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'link-component',
    template: `
    <a [href]="disabled ? null : source" 
        [target]="target" 
        [textContent]="title" 
        (mouseenter)='poped = !disabled' 
        (mouseleave)='poped = false' 
        (keyup)='keyup($event)' 
        [class.disabled]="disabled"
        tabindex="{{active ? 0 : -1}}"
        (focus)="poped = true"
        (blur)="poped = false"
        (click)="change($event)">
        </a>
        <img *ngIf='poped' [src]='source' />`,
    styles: [
        `
        :host {display:table;float:left;min-height: var(--sedeh-min-height, 25px); position:relative}
        :host a{text-decoration: none}
        :host a.disabled{color: var(--sedeh-disabled-color, #888);cursor:default;text-decoration: none; pointer-events: none}
        :host a:focus{text-decoration: underline;outline: none;color: var(--sedeh-focus-color, darkblue);}
        :host img{z-index:2;border:2px solid;box-shadow: var(--sedeh-box-shadow, 3px 3px 3px #999);display:table;float:left;min-height: var(--sedeh-min-height, 25px); width: 250px;top: 22px;position:absolute;border-radius: 4px}
        @media print {
            :host a {
                text-decoration: none;
            }
        }
        `
    ]
})
export class LinkComponent implements PipeComponentInterface {
    source!: string;
	id!: string;
	name!: string;
    title!: string;
    poped = false;
    poper!: boolean;
    target!: string;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange = new EventEmitter();

    static settingsPatterns() {
        return ['link:::false', 'link:::true']; //target, label, popup
    }
    transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
        this.poper = (args && args.length > 2) ? (args[1] =='true') : false;
    
        if(!this.title || !this.title.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d+1);
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
        this.poped = false;
        if (!this.disabled) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                type: "click",
                item: event.type
            });
        }
    }
}
