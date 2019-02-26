/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
export class ShareComponent {
    constructor() {
        this.shouldDisplay = false;
        this.shareList = [];
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} type
     * @param {?} address
     * @return {?}
     */
    shareInfo(type, address) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with ' + type
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: event.title
        });
    }
    /**
     * @return {?}
     */
    toggleShare() {
        this.shouldDisplay = !this.shouldDisplay;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: 'Share options',
            type: 'share',
            item: this.shouldDisplay ? 'open' : 'close'
        });
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        /** @type {?} */
        const list = (args[0] instanceof Array) ? args[0] : args;
        list.map((arg) => {
            if (arg === 'facebook') {
                this.shareList.push(this.shareInfo('facebook', 'http://www.facebook.com/sharer.php?u=' + source));
            }
            else if (arg === 'twitter') {
                this.shareList.push(this.shareInfo('twitter', 'https://twitter.com/share?title=&amp;url=' + source));
            }
            else if (arg === 'linkedin') {
                this.shareList.push(this.shareInfo('linkedin', 'http://www.linkedin.com/shareArticle?title=&amp;url=' + source));
            }
            else if (arg === 'google') {
                this.shareList.push(this.shareInfo('google-plus', 'https://plus.google.com/share?url=' + source));
            }
            else if (arg === 'pinterest') {
                this.shareList.push(this.shareInfo('google-plus', 'http://pinterest.com/pin/create/link/?url=' + source));
            }
            else if (arg === 'digg') {
                this.shareList.push(this.shareInfo('digg', 'http://digg.com/submit?url=' + source));
            }
            else if (arg === 'get-pocket') {
                this.shareList.push(this.shareInfo('get-pocket', 'https://getpocket.com/edit?url=' + source));
            }
            else if (arg === 'xing') {
                this.shareList.push(this.shareInfo('xing', 'https://www.xing.com/app/user?op=share&url=' + source));
            }
            else if (arg === 'stumbleupon') {
                this.shareList.push(this.shareInfo('stumbleupon', 'http://www.stumbleupon.com/submit?url=' + source));
            }
        });
    }
}
ShareComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-component',
                template: `
    <a id='share-comment-{{id}}' 
        tabindex="0" 
        class='share-item-tips' 
        (keyup)='keyup($event)'
        (click)='toggleShare()'>
    <span class="fa fa-share-alt"></span>
    <span class="share">share</span>
    </a>
    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>
      <span class='social-referal'>
        <a *ngFor="let share of shareList" 
            (keyup)='keyup($event)'
            (click)='change(share)'
            [class]='share.icon' target='_blank' 
            [href]='share.href'><span class='off-screen' [textContent]="share.title"></span></a>
      </span>
    </span>
`,
                styles: [`
    :host {display:table;float:left;min-height: 23px;position: relative}
    .share-item-tips {cursor: pointer;}
    .share-item-tips:hover {color: #fabdab;}
    .share-item-tips .fa {margin: 0;}
    .share-item-tips:hover .fa{color: #fabdab;}
    .share-item-tips .share{margin-left: 5px;}
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
            }] }
];
if (false) {
    /** @type {?} */
    ShareComponent.prototype.shouldDisplay;
    /** @type {?} */
    ShareComponent.prototype.source;
    /** @type {?} */
    ShareComponent.prototype.id;
    /** @type {?} */
    ShareComponent.prototype.name;
    /** @type {?} */
    ShareComponent.prototype.shareList;
    /** @type {?} */
    ShareComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvc2hhcmUvc2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQThEeEQsTUFBTTs7NkJBQ2MsS0FBSzt5QkFJVCxFQUFFO3FDQUVPLElBQUksWUFBWSxFQUFFOzs7Ozs7O0lBRS9CLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUMzQixNQUFNLENBQUM7WUFDSCxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUk7WUFDckIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsYUFBYSxHQUFFLElBQUk7U0FDN0IsQ0FBQTs7Ozs7O0lBRUwsS0FBSyxDQUFDLEtBQVU7O1FBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtLQUNKOzs7OztJQUNELE1BQU0sQ0FBQyxLQUFVO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQztLQUNOOzs7O0lBQ0QsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENB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Q3BHO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSx3Q0FBd0MsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQ3RHO1NBQ0osQ0FBQyxDQUFDO0tBQ047OztZQWhJSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQmI7eUJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW9DUjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hhcmUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBpZD0nc2hhcmUtY29tbWVudC17e2lkfX0nIFxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgIGNsYXNzPSdzaGFyZS1pdGVtLXRpcHMnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT0ndG9nZ2xlU2hhcmUoKSc+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXNoYXJlLWFsdFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwic2hhcmVcIj5zaGFyZTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fS10aXBzJyBjbGFzcz0ndGlwcycgKm5nSWY9J3Nob3VsZERpc3BsYXknPlxyXG4gICAgICA8c3BhbiBjbGFzcz0nc29jaWFsLXJlZmVyYWwnPlxyXG4gICAgICAgIDxhICpuZ0Zvcj1cImxldCBzaGFyZSBvZiBzaGFyZUxpc3RcIiBcclxuICAgICAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSdcclxuICAgICAgICAgICAgKGNsaWNrKT0nY2hhbmdlKHNoYXJlKSdcclxuICAgICAgICAgICAgW2NsYXNzXT0nc2hhcmUuaWNvbicgdGFyZ2V0PSdfYmxhbmsnIFxyXG4gICAgICAgICAgICBbaHJlZl09J3NoYXJlLmhyZWYnPjxzcGFuIGNsYXNzPSdvZmYtc2NyZWVuJyBbdGV4dENvbnRlbnRdPVwic2hhcmUudGl0bGVcIj48L3NwYW4+PC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHM6aG92ZXIge2NvbG9yOiAjZmFiZGFiO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwczpob3ZlciAuZmF7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyAuc2hhcmV7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAudGlwcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwgLmZhIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgMXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCAuZmE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNob3VsZERpc3BsYXkgPSBmYWxzZTtcclxuICAgIHNvdXJjZTogc3RyaW5nOyAvLyBpdCBzaG91bGQgYmUgYSBsaW5rIHJlZmVyZW5jZSB0byB3aGF0IGlzIGJlaW5nIHNoYXJlZC5cclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2hhcmVMaXN0ID0gW107IC8vIGxpc3Qgb2Ygc2l0ZXMgdG8gc2hvdyBvbiBzaGFyZSB2aWV3LlxyXG4gICAgXHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHNoYXJlSW5mbyh0eXBlLCBhZGRyZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLScgKyB0eXBlLFxyXG4gICAgICAgICAgICBocmVmOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NoYXJlIHdpdGggJysgdHlwZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnRpdGxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVTaGFyZSgpIHtcclxuICAgICAgICB0aGlzLnNob3VsZERpc3BsYXkgPSAhdGhpcy5zaG91bGREaXNwbGF5O1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ1NoYXJlIG9wdGlvbnMnLFxyXG4gICAgICAgICAgICB0eXBlOiAnc2hhcmUnLFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLnNob3VsZERpc3BsYXkgPyAnb3BlbicgOiAnY2xvc2UnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICBcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IChhcmdzWzBdIGluc3RhbmNlb2YgQXJyYXkpID8gYXJnc1swXSA6IGFyZ3M7XHJcbiAgICAgICAgbGlzdC5tYXAoIChhcmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhcmcgPT09ICdmYWNlYm9vaycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2ZhY2Vib29rJywgJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3R3aXR0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd0d2l0dGVyJywgJ2h0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdsaW5rZWRpbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2xpbmtlZGluJywnaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP3RpdGxlPSZhbXA7dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ29vZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAncGludGVyZXN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cDovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9saW5rLz91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdkaWdnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZGlnZycsICdodHRwOi8vZGlnZy5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2dldC1wb2NrZXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnZXQtcG9ja2V0JywgJ2h0dHBzOi8vZ2V0cG9ja2V0LmNvbS9lZGl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3hpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd4aW5nJywgJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJnVybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3N0dW1ibGV1cG9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnc3R1bWJsZXVwb24nLCAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=