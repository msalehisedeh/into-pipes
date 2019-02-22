import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'link-component',
    template: `
    <a [href]="source" 
        [target]="target" 
        [textContent]="title" 
        (mouseenter)='poped = true' 
        (mouseleave)='poped = false' 
        (keyup)='keyup($event)' 
        (click)="change($event)"></a>
        <img *ngIf='poped' [src]='source' />`,
    styles: [
        `
        :host {display:table;float:left;min-height: 23px; position:relative}
        :host img{z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;display:table;float:left;min-height: 23px; width: 250px;top: 22px;position:absolute;border-radius: 4px}
        `
    ]
})
export class LinkComponent implements PipeComponent {
    source: string;
	id: string;
	name: string;
    title: string;
    poped = false;
    poper: boolean;
    target: string;
	onIntoComponentChange = new EventEmitter();

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
    
        if (code === 13) {
            event.target.click();
        }
    }
    change(event: any) {
        this.poped = false;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "click",
            item: event.type
        });
    }
}
