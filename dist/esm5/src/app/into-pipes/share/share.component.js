import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
        this.shouldDisplay = false;
        this.shareList = []; // list of sites to show on share view.
        this.onIntoComponentChange = new EventEmitter();
    }
    ShareComponent.prototype.shareInfo = function (type, address) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with ' + type
        };
    };
    ShareComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    ShareComponent.prototype.change = function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: event.title
        });
    };
    ShareComponent.prototype.toggleShare = function () {
        this.shouldDisplay = !this.shouldDisplay;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: 'Share options',
            type: 'share',
            item: this.shouldDisplay ? 'open' : 'close'
        });
    };
    ShareComponent.prototype.transform = function (source, data, args) {
        var _this = this;
        this.source = source;
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
    ShareComponent = tslib_1.__decorate([
        Component({
            selector: 'share-component',
            template: "\n    <a id='share-comment-{{id}}' \n        tabindex=\"0\" \n        class='share-item-tips' \n        (keyup)='keyup($event)'\n        (click)='toggleShare()'>\n    <span class=\"fa fa-share-alt\"></span>\n    <span class=\"share\">share</span>\n    </a>\n    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>\n      <span class='social-referal'>\n        <a *ngFor=\"let share of shareList\" \n            (keyup)='keyup($event)'\n            (click)='change(share)'\n            [class]='share.icon' target='_blank' \n            [href]='share.href'><span class='off-screen' [textContent]=\"share.title\"></span></a>\n      </span>\n    </span>\n",
            styles: ["\n    :host {display:table;float:left;min-height: 23px;position: relative}\n    .share-item-tips {cursor: pointer;}\n    .share-item-tips:hover {color: #fabdab;}\n    .share-item-tips .fa {margin: 0;}\n    .share-item-tips:hover .fa{color: #fabdab;}\n    .share-item-tips .share{margin-left: 5px;}\n    .tips {\n        position: absolute;\n        display: flex;\n        flex-direction: row;\n        padding: 5px;\n        border: 1px solid #aaa;\n        border-radius: 2px;\n        background-color: #fff;\n        z-index: 2;\n    }\n    .tips .social-referal {\n        display: flex;\n        flex-direction: row;\n    }\n    .tips .social-referal .fa {\n        float: left;\n        padding: 2px 4px;\n        color: blue;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        text-decoration: none;\n        margin: 0 1px;\n        width: 20px;\n        text-align: center;\n    }\n    .tips .social-referal .fa:hover {\n        color: #fff;\n        background-color: blue;\n    }\n    "]
        })
    ], ShareComponent);
    return ShareComponent;
}());
export { ShareComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvc2hhcmUvc2hhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQThEeEQ7SUEzREE7UUE0REksa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFJdEIsY0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztRQUUxRCwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBK0Q1QyxDQUFDO0lBN0RXLGtDQUFTLEdBQWpCLFVBQWtCLElBQUksRUFBRSxPQUFPO1FBQzNCLE9BQU87WUFDSCxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUk7WUFDckIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsYUFBYSxHQUFFLElBQUk7U0FDN0IsQ0FBQTtJQUNMLENBQUM7SUFDRCw4QkFBSyxHQUFMLFVBQU0sS0FBVTtRQUNaLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDYixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUNELCtCQUFNLEdBQU4sVUFBTyxLQUFVO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ3BCLENB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Q0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckVRLGNBQWM7UUEzRDFCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLG1xQkFrQmI7cUJBQ1ksMC9CQW9DUjtTQUNKLENBQUM7T0FDVyxjQUFjLENBc0UxQjtJQUFELHFCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0F0RVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NoYXJlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgaWQ9J3NoYXJlLWNvbW1lbnQte3tpZH19JyBcclxuICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICBjbGFzcz0nc2hhcmUtaXRlbS10aXBzJyBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJ1xyXG4gICAgICAgIChjbGljayk9J3RvZ2dsZVNoYXJlKCknPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zaGFyZS1hbHRcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cInNoYXJlXCI+c2hhcmU8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiBpZD0nc2hhcmUtY29tbWVudC17e2lkfX0tdGlwcycgY2xhc3M9J3RpcHMnICpuZ0lmPSdzaG91bGREaXNwbGF5Jz5cclxuICAgICAgPHNwYW4gY2xhc3M9J3NvY2lhbC1yZWZlcmFsJz5cclxuICAgICAgICA8YSAqbmdGb3I9XCJsZXQgc2hhcmUgb2Ygc2hhcmVMaXN0XCIgXHJcbiAgICAgICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknXHJcbiAgICAgICAgICAgIChjbGljayk9J2NoYW5nZShzaGFyZSknXHJcbiAgICAgICAgICAgIFtjbGFzc109J3NoYXJlLmljb24nIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgW2hyZWZdPSdzaGFyZS5ocmVmJz48c3BhbiBjbGFzcz0nb2ZmLXNjcmVlbicgW3RleHRDb250ZW50XT1cInNoYXJlLnRpdGxlXCI+PC9zcGFuPjwvYT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4O3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzOmhvdmVyIHtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIC5mYSB7bWFyZ2luOiAwO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHM6aG92ZXIgLmZhe2NvbG9yOiAjZmFiZGFiO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMgLnNoYXJle21hcmdpbi1sZWZ0OiA1cHg7fVxyXG4gICAgLnRpcHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIC5mYSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwgLmZhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzaG91bGREaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBzb3VyY2U6IHN0cmluZzsgLy8gaXQgc2hvdWxkIGJlIGEgbGluayByZWZlcmVuY2UgdG8gd2hhdCBpcyBiZWluZyBzaGFyZWQuXHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNoYXJlTGlzdCA9IFtdOyAvLyBsaXN0IG9mIHNpdGVzIHRvIHNob3cgb24gc2hhcmUgdmlldy5cclxuICAgIFxyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzaGFyZUluZm8odHlwZSwgYWRkcmVzcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYSBmYS0nICsgdHlwZSxcclxuICAgICAgICAgICAgaHJlZjogYWRkcmVzcyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzaGFyZSB3aXRoICcrIHR5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50aXRsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlU2hhcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG91bGREaXNwbGF5ID0gIXRoaXMuc2hvdWxkRGlzcGxheTtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6ICdTaGFyZSBvcHRpb25zJyxcclxuICAgICAgICAgICAgdHlwZTogJ3NoYXJlJyxcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5zaG91bGREaXNwbGF5ID8gJ29wZW4nIDogJ2Nsb3NlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgXHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSAoYXJnc1swXSBpbnN0YW5jZW9mIEFycmF5KSA/IGFyZ3NbMF0gOiBhcmdzO1xyXG4gICAgICAgIGxpc3QubWFwKCAoYXJnKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggYXJnID09PSAnZmFjZWJvb2snKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdmYWNlYm9vaycsICdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICd0d2l0dGVyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygndHdpdHRlcicsICdodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlP3RpdGxlPSZhbXA7dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnbGlua2VkaW4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdsaW5rZWRpbicsJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT90aXRsZT0mYW1wO3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2dvb2dsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2dvb2dsZS1wbHVzJywgJ2h0dHBzOi8vcGx1cy5nb29nbGUuY29tL3NoYXJlP3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3BpbnRlcmVzdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2dvb2dsZS1wbHVzJywgJ2h0dHA6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvbGluay8/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZGlnZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2RpZ2cnLCAnaHR0cDovL2RpZ2cuY29tL3N1Ym1pdD91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdnZXQtcG9ja2V0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ2V0LXBvY2tldCcsICdodHRwczovL2dldHBvY2tldC5jb20vZWRpdD91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICd4aW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygneGluZycsICdodHRwczovL3d3dy54aW5nLmNvbS9hcHAvdXNlcj9vcD1zaGFyZSZ1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdzdHVtYmxldXBvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3N0dW1ibGV1cG9uJywgJ2h0dHA6Ly93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19