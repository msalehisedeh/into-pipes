import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    EmailComponent.prototype.transform = function (source, data, args) {
        this.isLink = args.length ? args[0] : true;
        this.source = source;
    };
    EmailComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    EmailComponent.prototype.change = function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "mail-to",
            item: event.type
        });
    };
    EmailComponent = tslib_1.__decorate([
        Component({
            selector: 'email',
            template: "\n    <a *ngIf=\"isLink\" [href]=\"'mailto:' + source\" (keyup)='keyup($event)' (click)=\"change($event)\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </a>\n    <span *ngIf=\"!isLink\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </span>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        :host:hover .fa-envelope{color: #fabdab;}\n        :host .fa{margin: 0 5px;}\n        @media print {\n            :host a { text-decoration: none;}\n            :host a .fa-envelope {display: none;}\n            :host .fa-envelope {display: none;}\n        }\n        "]
        })
    ], EmailComponent);
    return EmailComponent;
}());
export { EmailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvZW1haWwvZW1haWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTRCeEQ7SUF6QkE7UUE4QkMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXdCNUMsQ0FBQztJQXRCRyxrQ0FBUyxHQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNELDhCQUFLLEdBQUwsVUFBTSxLQUFVO1FBQ1osSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBQ0QsK0JBQU0sR0FBTixVQUFPLEtBQVU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUJRLGNBQWM7UUF6QjFCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSwwWUFTVDtxQkFFRyxtVkFTQztTQUVSLENBQUM7T0FDVyxjQUFjLENBNkIxQjtJQUFELHFCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E3QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VtYWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cImlzTGlua1wiIFtocmVmXT1cIidtYWlsdG86JyArIHNvdXJjZVwiIChrZXl1cCk9J2tleXVwKCRldmVudCknIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNMaW5rXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICA6aG9zdDpob3ZlciAuZmEtZW52ZWxvcGV7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIDpob3N0IC5mYXttYXJnaW46IDAgNXB4O31cclxuICAgICAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAgICAgICA6aG9zdCBhIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lO31cclxuICAgICAgICAgICAgOmhvc3QgYSAuZmEtZW52ZWxvcGUge2Rpc3BsYXk6IG5vbmU7fVxyXG4gICAgICAgICAgICA6aG9zdCAuZmEtZW52ZWxvcGUge2Rpc3BsYXk6IG5vbmU7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzTGluazogYm9vbGVhbjtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5pc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiBcIm1haWwtdG9cIixcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==