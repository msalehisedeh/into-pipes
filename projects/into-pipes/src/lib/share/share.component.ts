import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'share-component',
    template: `
    <a id='share-comment-{{id}}' 
        tabindex="{{active ? 0 : -1}}" 
        class="share-item-tips {{disabled ? 'disabled' : ''}}" 
        (keyup)='keyup($event)'
        (click)='toggleShare()'>
    <span class="fa fa-share-alt"></span>
    <span class="share">share</span>
    </a>
    <span id='share-comment-{{id}}-tips' class="tips {{disabled ? 'disabled' : ''}}" *ngIf='shouldDisplay'>
      <span class='social-referal'>
        <a *ngFor="let share of shareList" 
            tabindex="{{active ? 0 : -1}}" 
            (keyup)='keyup($event)'
            (click)='change(share)'
            class="{{disabled ? 'disabled' : ''}} {{share.icon}}" target='_blank' 
            [href]="disabled ? '' : share.href"><span class='off-screen' [textContent]="share.title"></span></a>
      </span>
    </span>
`,
    styles: [`
    :host {display:table;float:left;min-height: var(--sedeh-min-height, 25px);position: relative}
    :host .share-item-tips:focus{outline: none;}
    :host .share-item-tips:focus .fa{zoom: 1.1;right: var(--sedeh-shift-right, 0);position: relative;color: var(--sedeh-focus-color, darkblue);}
    :host a.disabled{color: var(--sedeh-disabled-color, #888);cursor:default;pointer-events:none;text-decoration: none;}
    :host a.disabled .fa{color: var(--sedeh-disabled-color, #888);}
    .share-item-tips {cursor: pointer;}
    .share-item-tips .fa {margin: 0;}
    :host:hover .share-item-tips .fa, :host:hover .share-item-tips .share, .tips a:hover {opacity: var(--sedeh-hover-opacity, 0.5);}
    :host:hover .share-item-tips.disabled .fa, :host:hover .share-item-tips.disabled .share, .tips.disabled, .tips.disabled a {opacity:1;color: var(--sedeh-disabled-color, #888) !important;}


    .share-item-tips .share{margin-left: var(--sedeh-margin-left, 5px);}
    .tips {
        position: absolute;
        display: flex;
        flex-direction: row;
        padding: 5px;
        border: 1px solid #aaa;
        border-radius: 2px;
        background-color: #fff;
        z-index: 2;
    }
    .tips .social-referal {
        display: flex;
        flex-direction: row;
    }
    .tips .social-referal a {
        min-width: 20px;
        min-height: 20px;
    }
    .tips .social-referal .fa {
        float: left;
        padding: 2px 4px;
        color: blue;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-decoration: none;
        margin: 0 1px;
        width: 20px;
        text-align: center;
    }
    .tips .social-referal .fa:hover {
        color: #fff;
        background-color: blue;
    }
    `]
})
export class ShareComponent implements PipeComponentInterface {
    shouldDisplay = false;
    source!: string; // it should be a link reference to what is being shared.
	id!: string;
    name!: string;
    shareList: any[] = []; // list of sites to show on share view.
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange = new EventEmitter();
    
    private shareInfo(type: string, address: string) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with '+ type
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
        if (!this.disabled) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                item: event.title
            });
        }
    }
    toggleShare() {
        if (!this.disabled) {
            this.shouldDisplay = !this.shouldDisplay;
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: 'Share options',
                type: 'share',
                item: this.shouldDisplay ? 'open' : 'close'
            });
        }
    }  

    static settingsPatterns() {
        return ['share:facebook:twitter:linkedin:google:pinterest:digg:get-pocket:xing:stumbleupon']; //options
    }
    transform(source: any, data: any, args: any[]) {

        this.source = source;
        const list = (args[0] instanceof Array) ? args[0] : args;
        list.map( (arg) => {
            if ( arg === 'facebook') {
                this.shareList.push(this.shareInfo('facebook', 'http://www.facebook.com/sharer.php?u='+source))
            } else if ( arg === 'twitter') {
                this.shareList.push(this.shareInfo('twitter', 'https://twitter.com/share?title=&amp;url='+source))
            } else if ( arg === 'linkedin') {
                this.shareList.push(this.shareInfo('linkedin','http://www.linkedin.com/shareArticle?title=&amp;url='+source))
            } else if ( arg === 'google') {
                this.shareList.push(this.shareInfo('google-plus', 'https://plus.google.com/share?url='+source))
            } else if ( arg === 'pinterest') {
                this.shareList.push(this.shareInfo('google-plus', 'http://pinterest.com/pin/create/link/?url='+source))
            } else if ( arg === 'digg') {
                this.shareList.push(this.shareInfo('digg', 'http://digg.com/submit?url='+source))
            } else if ( arg === 'get-pocket') {
                this.shareList.push(this.shareInfo('get-pocket', 'https://getpocket.com/edit?url='+source))
            } else if ( arg === 'xing') {
                this.shareList.push(this.shareInfo('xing', 'https://www.xing.com/app/user?op=share&url='+source))
            } else if ( arg === 'stumbleupon') {
                this.shareList.push(this.shareInfo('stumbleupon', 'http://www.stumbleupon.com/submit?url='+source))
            }
        });
    }
}
