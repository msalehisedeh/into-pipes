/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    EmailComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.isLink = args.length ? args[0] : true;
        this.source = source;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EmailComponent.prototype.keyup = /**
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
    EmailComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "mail-to",
            item: event.type
        });
    };
    EmailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'email',
                    template: "\n    <a *ngIf=\"isLink\" [href]=\"'mailto:' + source\" (keyup)='keyup($event)' (click)=\"change($event)\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </a>\n    <span *ngIf=\"!isLink\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </span>\n    ",
                    styles: ["\n        :host {display:table;float:left;min-height: 20px}\n        :host:hover .fa-envelope{color: #fabdab;}\n        :host .fa{margin: 0 5px;}\n        "]
                }] }
    ];
    return EmailComponent;
}());
export { EmailComponent };
if (false) {
    /** @type {?} */
    EmailComponent.prototype.source;
    /** @type {?} */
    EmailComponent.prototype.id;
    /** @type {?} */
    EmailComponent.prototype.name;
    /** @type {?} */
    EmailComponent.prototype.isLink;
    /** @type {?} */
    EmailComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvZW1haWwvZW1haWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O3FDQTRCL0IsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7O0lBRXZDLGtDQUFTOzs7Ozs7SUFBVCxVQUFVLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3hCOzs7OztJQUNELDhCQUFLOzs7O0lBQUwsVUFBTSxLQUFVOztRQUNaLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDSjs7Ozs7SUFDRCwrQkFBTTs7OztJQUFOLFVBQU8sS0FBVTtRQUNiLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLENBQUMsQ0FBQztLQUNOOztnQkFoREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsMFlBU1Q7NkJBRUcsNkpBSUM7aUJBRVI7O3lCQXRCRDs7U0F1QmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VtYWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cImlzTGlua1wiIFtocmVmXT1cIidtYWlsdG86JyArIHNvdXJjZVwiIChrZXl1cCk9J2tleXVwKCRldmVudCknIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNMaW5rXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICA6aG9zdDpob3ZlciAuZmEtZW52ZWxvcGV7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIDpob3N0IC5mYXttYXJnaW46IDAgNXB4O31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzTGluazogYm9vbGVhbjtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5pc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiBcIm1haWwtdG9cIixcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==