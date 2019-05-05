/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
        this.shouldDisplay = false;
        this.shareList = [];
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} type
     * @param {?} address
     * @return {?}
     */
    ShareComponent.prototype.shareInfo = /**
     * @param {?} type
     * @param {?} address
     * @return {?}
     */
    function (type, address) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with ' + type
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ShareComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ShareComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: event.title
        });
    };
    /**
     * @return {?}
     */
    ShareComponent.prototype.toggleShare = /**
     * @return {?}
     */
    function () {
        this.shouldDisplay = !this.shouldDisplay;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: 'Share options',
            type: 'share',
            item: this.shouldDisplay ? 'open' : 'close'
        });
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    ShareComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        var _this = this;
        this.source = source;
        /** @type {?} */
        var list = (args[0] instanceof Array) ? args[0] : args;
        list.map(function (arg) {
            if (arg === 'facebook') {
                _this.shareList.push(_this.shareInfo('facebook', 'http://www.facebook.com/sharer.php?u=' + source));
            }
            else if (arg === 'twitter') {
                _this.shareList.push(_this.shareInfo('twitter', 'https://twitter.com/share?title=&amp;url=' + source));
            }
            else if (arg === 'linkedin') {
                _this.shareList.push(_this.shareInfo('linkedin', 'http://www.linkedin.com/shareArticle?title=&amp;url=' + source));
            }
            else if (arg === 'google') {
                _this.shareList.push(_this.shareInfo('google-plus', 'https://plus.google.com/share?url=' + source));
            }
            else if (arg === 'pinterest') {
                _this.shareList.push(_this.shareInfo('google-plus', 'http://pinterest.com/pin/create/link/?url=' + source));
            }
            else if (arg === 'digg') {
                _this.shareList.push(_this.shareInfo('digg', 'http://digg.com/submit?url=' + source));
            }
            else if (arg === 'get-pocket') {
                _this.shareList.push(_this.shareInfo('get-pocket', 'https://getpocket.com/edit?url=' + source));
            }
            else if (arg === 'xing') {
                _this.shareList.push(_this.shareInfo('xing', 'https://www.xing.com/app/user?op=share&url=' + source));
            }
            else if (arg === 'stumbleupon') {
                _this.shareList.push(_this.shareInfo('stumbleupon', 'http://www.stumbleupon.com/submit?url=' + source));
            }
        });
    };
    ShareComponent.decorators = [
        { type: Component, args: [{
                    selector: 'share-component',
                    template: "\n    <a id='share-comment-{{id}}' \n        tabindex=\"0\" \n        class='share-item-tips' \n        (keyup)='keyup($event)'\n        (click)='toggleShare()'>\n    <span class=\"fa fa-share-alt\"></span>\n    <span class=\"share\">share</span>\n    </a>\n    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>\n      <span class='social-referal'>\n        <a *ngFor=\"let share of shareList\" \n            (keyup)='keyup($event)'\n            (click)='change(share)'\n            [class]='share.icon' target='_blank' \n            [href]='share.href'><span class='off-screen' [textContent]=\"share.title\"></span></a>\n      </span>\n    </span>\n",
                    styles: ["\n    :host {display:table;float:left;min-height: 20px;position: relative}\n    .share-item-tips {cursor: pointer;}\n    .share-item-tips:hover {color: #fabdab;}\n    .share-item-tips .fa {margin: 0;}\n    .share-item-tips:hover .fa{color: #fabdab;}\n    .share-item-tips .share{margin-left: 5px;}\n    .tips {\n        position: absolute;\n        display: flex;\n        flex-direction: row;\n        padding: 5px;\n        border: 1px solid #aaa;\n        border-radius: 2px;\n        background-color: #fff;\n        z-index: 2;\n    }\n    .tips .social-referal {\n        display: flex;\n        flex-direction: row;\n    }\n    .tips .social-referal .fa {\n        float: left;\n        padding: 2px 4px;\n        color: blue;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        text-decoration: none;\n        margin: 0 1px;\n        width: 20px;\n        text-align: center;\n    }\n    .tips .social-referal .fa:hover {\n        color: #fff;\n        background-color: blue;\n    }\n    "]
                }] }
    ];
    return ShareComponent;
}());
export { ShareComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvc2hhcmUvc2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OzZCQStEcEMsS0FBSzt5QkFJVCxFQUFFO3FDQUVPLElBQUksWUFBWSxFQUFFOzs7Ozs7O0lBRS9CLGtDQUFTOzs7OztjQUFDLElBQUksRUFBRSxPQUFPO1FBQzNCLE1BQU0sQ0FBQztZQUNILElBQUksRUFBRSxRQUFRLEdBQUcsSUFBSTtZQUNyQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxhQUFhLEdBQUUsSUFBSTtTQUM3QixDQUFBOzs7Ozs7SUFFTCw4QkFBSzs7OztJQUFMLFVBQU0sS0FBVTs7UUFDWixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0tBQ0o7Ozs7O0lBQ0QsK0JBQU07Ozs7SUFBTixVQUFPLEtBQVU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFDRCxvQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMs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RSw2Q0FBNkMsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQ3BHO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSx3Q0FBd0MsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQ3RHO1NBQ0osQ0FBQyxDQUFDO0tBQ047O2dCQWhJSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG1xQkFrQmI7NkJBQ1ksMC9CQW9DUjtpQkFDSjs7eUJBN0REOztTQThEYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hhcmUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBpZD0nc2hhcmUtY29tbWVudC17e2lkfX0nIFxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgIGNsYXNzPSdzaGFyZS1pdGVtLXRpcHMnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT0ndG9nZ2xlU2hhcmUoKSc+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXNoYXJlLWFsdFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwic2hhcmVcIj5zaGFyZTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fS10aXBzJyBjbGFzcz0ndGlwcycgKm5nSWY9J3Nob3VsZERpc3BsYXknPlxyXG4gICAgICA8c3BhbiBjbGFzcz0nc29jaWFsLXJlZmVyYWwnPlxyXG4gICAgICAgIDxhICpuZ0Zvcj1cImxldCBzaGFyZSBvZiBzaGFyZUxpc3RcIiBcclxuICAgICAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSdcclxuICAgICAgICAgICAgKGNsaWNrKT0nY2hhbmdlKHNoYXJlKSdcclxuICAgICAgICAgICAgW2NsYXNzXT0nc2hhcmUuaWNvbicgdGFyZ2V0PSdfYmxhbmsnIFxyXG4gICAgICAgICAgICBbaHJlZl09J3NoYXJlLmhyZWYnPjxzcGFuIGNsYXNzPSdvZmYtc2NyZWVuJyBbdGV4dENvbnRlbnRdPVwic2hhcmUudGl0bGVcIj48L3NwYW4+PC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIwcHg7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHM6aG92ZXIge2NvbG9yOiAjZmFiZGFiO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwczpob3ZlciAuZmF7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyAuc2hhcmV7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAudGlwcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwgLmZhIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgMXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCAuZmE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNob3VsZERpc3BsYXkgPSBmYWxzZTtcclxuICAgIHNvdXJjZTogc3RyaW5nOyAvLyBpdCBzaG91bGQgYmUgYSBsaW5rIHJlZmVyZW5jZSB0byB3aGF0IGlzIGJlaW5nIHNoYXJlZC5cclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2hhcmVMaXN0ID0gW107IC8vIGxpc3Qgb2Ygc2l0ZXMgdG8gc2hvdyBvbiBzaGFyZSB2aWV3LlxyXG4gICAgXHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHNoYXJlSW5mbyh0eXBlLCBhZGRyZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLScgKyB0eXBlLFxyXG4gICAgICAgICAgICBocmVmOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NoYXJlIHdpdGggJysgdHlwZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnRpdGxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVTaGFyZSgpIHtcclxuICAgICAgICB0aGlzLnNob3VsZERpc3BsYXkgPSAhdGhpcy5zaG91bGREaXNwbGF5O1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ1NoYXJlIG9wdGlvbnMnLFxyXG4gICAgICAgICAgICB0eXBlOiAnc2hhcmUnLFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLnNob3VsZERpc3BsYXkgPyAnb3BlbicgOiAnY2xvc2UnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICBcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IChhcmdzWzBdIGluc3RhbmNlb2YgQXJyYXkpID8gYXJnc1swXSA6IGFyZ3M7XHJcbiAgICAgICAgbGlzdC5tYXAoIChhcmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhcmcgPT09ICdmYWNlYm9vaycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2ZhY2Vib29rJywgJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3R3aXR0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd0d2l0dGVyJywgJ2h0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdsaW5rZWRpbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2xpbmtlZGluJywnaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP3RpdGxlPSZhbXA7dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ29vZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAncGludGVyZXN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cDovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9saW5rLz91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdkaWdnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZGlnZycsICdodHRwOi8vZGlnZy5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2dldC1wb2NrZXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnZXQtcG9ja2V0JywgJ2h0dHBzOi8vZ2V0cG9ja2V0LmNvbS9lZGl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3hpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd4aW5nJywgJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJnVybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3N0dW1ibGV1cG9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnc3R1bWJsZXVwb24nLCAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=