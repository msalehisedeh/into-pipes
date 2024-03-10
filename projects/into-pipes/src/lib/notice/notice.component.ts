import { Component, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'notice-component',
    template: `
        <span tabindex="{{active ? o : -1" class="noticable {{disabled ? 'disabled' : ''}}">
            <span class="fa fa-bell" aria-hidden='true'></span>
            <span class="notice" [textContent]="source"></span>
        </span>
    `,
    styles: [
        `
        :host .noticable{display: table;position: relative;float: left;cursor:pointer}
        :host .noticable .fa{font-size: 1rem;}
        :host .noticable:hover{opacity: var(--sedeh-hover-opacity, 0.5);}
        :host .noticable:hover .fa{opacity: var(--sedeh-hover-opacity, 0.5);}
        :host .noticable.disabled {color: var(--sedeh-disabled-color, #888);cursor:default}
        :host .noticable.disabled:hover .fa{opacity: 1;}
        :host .noticable.disabled:hover {opacity:1;color: var(--sedeh-disabled-color, #888);cursor:default}
        :host .noticable.disabled .notice{color: var(--sedeh-disabled-color, #888);background-color:transparent;}
        :host .noticable .notice {
            display: table;
            width: 17px;
            height: 15px;
            border-radius: 50%;text-align: center;
            color: var(--sedeh-notice-color, white);
            background-color: var(--sedeh-notice-background-color, rgb(4, 159, 255));
            float: right;font-size: 0.7rem;line-height: 1rem;
            margin-left: -5px;z-index: 2;
        }
        `
    ]
})
export class NoticeComponent implements PipeComponentInterface {
    source!: string;
	id!: string;
    name!: string;
    message!: string;
    count!: number;
    float: any;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

    onIntoComponentChange = new EventEmitter();
    
    constructor(private el: ElementRef){
    }

    @HostListener('keyup',['$event'])
    keyup(event: any) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
    
        if (!this.disabled && code === 13) {
            event.target.click();
        }
    }
    @HostListener('click',[])
    click() {
        if (!this.disabled) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                type: 'click',
                item: 'notice'
            })
        }
    }
    static settingsPatterns() {
        return ['notice:']; //message
    }
    transform(source: any, data: any, args: any[]) {
        this.message = args.length ? args[0] : undefined;
        this.source = source;
        this.el.nativeElement.setAttribute('title', this.message);
        this.el.nativeElement.setAttribute('class', this.disabled ? 'disabled' : '');
    }
}
