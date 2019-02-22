import { Component, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'notice-component',
    template: `
        <span class='fa fa-bell' aria-hidden='true'></span>
        <span class='notice' [textContent]="source"></span>
    `,
    styles: [
        `
        :host {display: table;position: relative;float: left;cursor:pointer}
        :host .fa{font-size: 1rem;}
        :host:hover{color: red;}
        :host:hover .fa{color: red;}
        :host:hover .notice{background-color: #000;}
        .notice {display: table;width: 17px;height: 15px;
            border-radius: 50%;text-align: center;
            background-color: rgba(55,155,255,0.9);
            float: right;font-size: 0.7rem;line-height: 1rem;
            margin-left: -5px;z-index: 2;color: #fff;
        }
        `
    ]
})
export class NoticeComponent implements PipeComponent {
    source: string;
	id: string;
    name: string;
    message: string;
    count: number;
    float: any;
    onIntoComponentChange = new EventEmitter();
    
    constructor(private el: ElementRef){
        el.nativeElement.setAttribute('tabindex','0');
    }

    @HostListener('keyup',['$event'])
    keyup(event: any) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
    
        if (code === 13) {
            event.target.click();
        }
    }
    @HostListener('click',[])
    click() {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'notice'
        })
    }
    transform(source: any, data: any, args: any[]) {
        this.message = args.length ? args[0] : undefined;
        this.source = source;
        this.el.nativeElement.setAttribute('title', this.message);
    }
}
