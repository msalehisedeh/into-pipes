/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
        this.shouldDisplay = false;
        this.shareList = [];
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
                    template: "\n    <a id='share-comment-{{id}}' \n        tabindex=\"0\" \n        class='share-item-tips' \n        (keyup)='keyup($event)'\n        (click)='shouldDisplay = !shouldDisplay'>\n    <span class=\"fa fa-share-alt\"></span>\n    <span class=\"share\">share</span>\n    </a>\n    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>\n      <span class='social-referal'>\n        <a *ngFor=\"let share of shareList\" [class]='share.icon' target='_blank' [href]='share.href'><span class='off-screen' [textContent]=\"share.title\"></span></a>\n      </span>\n    </span>\n",
                    styles: ["\n    :host {display: table;position: relative}\n    .share-item-tips {\n        cursor: pointer;\n    }\n    .share-item-tips .fa {\n        margin: 0;\n    }\n    .tips {\n        position: absolute;\n        display: flex;\n        flex-direction: row;\n        padding: 5px;\n        border: 1px solid #aaa;\n        border-radius: 2px;\n        background-color: #fff;\n        z-index: 2;\n    }\n    .tips .social-referal {\n        display: flex;\n        flex-direction: row;\n    }\n    .tips .social-referal .fa {\n        float: left;\n        padding: 2px 4px;\n        color: blue;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        text-decoration: none;\n        margin: 0 1px;\n        width: 20px;\n        text-align: center;\n    }\n    .tips .social-referal .fa:hover {\n        color: #fff;\n        background-color: blue;\n    }\n    "]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9zaGFyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sZUFBZSxDQUFDOzs7NkJBNERwQyxLQUFLO3lCQUlULEVBQUU7Ozs7Ozs7SUFJTixrQ0FBUzs7Ozs7Y0FBQyxJQUFJLEVBQUUsT0FBTztRQUMzQixNQUFNLENBQUM7WUFDSCxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUk7WUFDckIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsYUFBYSxHQUFFLElBQUk7U0FDN0IsQ0FBQTs7Ozs7O0lBRUwsOEJBQUs7Ozs7SUFBTCxVQUFNLEtBQUs7O1FBQ1AsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtLQUNKOzs7Ozs7O0lBR0Qsa0NBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQTdDLGlCQXlCQztRQXZCRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7UUFDckIsSUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUUsVUFBQyxHQUFHO1lBQ1YsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLHVDQUF1QyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDbEc7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLDJDQUEyQyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDckc7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLHNEQUFzRCxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDaEg7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLG9DQUFvQyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDbEc7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLDRDQUE0QyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDMUc7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLDZCQUE2QixHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDcEY7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLGlDQUFpQyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDOUY7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLDZDQUE2QyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDcEc7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUUsR0FBRyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLHdDQUF3QyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDdEc7U0FDSixDQUFDLENBQUM7S0FDTjs7Z0JBNUdKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsOGtCQWNiOzZCQUNZLGczQkFxQ1I7aUJBQ0o7O3lCQTFERDs7U0EyRGEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaGFyZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fScgXHJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgY2xhc3M9J3NoYXJlLWl0ZW0tdGlwcycgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPSdzaG91bGREaXNwbGF5ID0gIXNob3VsZERpc3BsYXknPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zaGFyZS1hbHRcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cInNoYXJlXCI+c2hhcmU8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiBpZD0nc2hhcmUtY29tbWVudC17e2lkfX0tdGlwcycgY2xhc3M9J3RpcHMnICpuZ0lmPSdzaG91bGREaXNwbGF5Jz5cclxuICAgICAgPHNwYW4gY2xhc3M9J3NvY2lhbC1yZWZlcmFsJz5cclxuICAgICAgICA8YSAqbmdGb3I9XCJsZXQgc2hhcmUgb2Ygc2hhcmVMaXN0XCIgW2NsYXNzXT0nc2hhcmUuaWNvbicgdGFyZ2V0PSdfYmxhbmsnIFtocmVmXT0nc2hhcmUuaHJlZic+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nIFt0ZXh0Q29udGVudF09XCJzaGFyZS50aXRsZVwiPjwvc3Bhbj48L2E+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0IHtkaXNwbGF5OiB0YWJsZTtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIC5mYSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnRpcHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIC5mYSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwgLmZhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzaG91bGREaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBzb3VyY2U6IHN0cmluZzsgLy8gaXQgc2hvdWxkIGJlIGEgbGluayByZWZlcmVuY2UgdG8gd2hhdCBpcyBiZWluZyBzaGFyZWQuXHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNoYXJlTGlzdCA9IFtdOyAvLyBsaXN0IG9mIHNpdGVzIHRvIHNob3cgb24gc2hhcmUgdmlldy5cclxuICAgIFxyXG4gICAgb25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzaGFyZUluZm8odHlwZSwgYWRkcmVzcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGljb246ICdmYSBmYS0nICsgdHlwZSxcclxuICAgICAgICAgICAgaHJlZjogYWRkcmVzcyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzaGFyZSB3aXRoICcrIHR5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gKGFyZ3NbMF0gaW5zdGFuY2VvZiBBcnJheSkgPyBhcmdzWzBdIDogYXJncztcclxuICAgICAgICBsaXN0Lm1hcCggKGFyZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGFyZyA9PT0gJ2ZhY2Vib29rJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZmFjZWJvb2snLCAnaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAndHdpdHRlcicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3R3aXR0ZXInLCAnaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT90aXRsZT0mYW1wO3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2xpbmtlZGluJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnbGlua2VkaW4nLCdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdnb29nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnb29nbGUtcGx1cycsICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdwaW50ZXJlc3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnb29nbGUtcGx1cycsICdodHRwOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2xpbmsvP3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2RpZ2cnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdkaWdnJywgJ2h0dHA6Ly9kaWdnLmNvbS9zdWJtaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ2V0LXBvY2tldCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2dldC1wb2NrZXQnLCAnaHR0cHM6Ly9nZXRwb2NrZXQuY29tL2VkaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAneGluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3hpbmcnLCAnaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXI/b3A9c2hhcmUmdXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnc3R1bWJsZXVwb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdzdHVtYmxldXBvbicsICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==