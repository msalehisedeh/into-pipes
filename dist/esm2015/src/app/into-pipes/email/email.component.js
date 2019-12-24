import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
let EmailComponent = class EmailComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.isLink = args.length ? args[0] : true;
        this.source = source;
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "mail-to",
            item: event.type
        });
    }
};
EmailComponent = tslib_1.__decorate([
    Component({
        selector: 'email',
        template: `
    <a *ngIf="isLink" [href]="'mailto:' + source" (keyup)='keyup($event)' (click)="change($event)">
        <span class='fa fa-envelope' aria-hidden='true'></span>
        <span [textContent]="source"></span>
    </a>
    <span *ngIf="!isLink">
        <span class='fa fa-envelope' aria-hidden='true'></span>
        <span [textContent]="source"></span>
    </span>
    `,
        styles: [`
        :host {display:table;float:left;min-height: 23px}
        :host:hover .fa-envelope{color: #fabdab;}
        :host .fa{margin: 0 5px;}
        @media print {
            :host a { text-decoration: none;}
            :host a .fa-envelope {display: none;}
            :host .fa-envelope {display: none;}
        }
        `]
    })
], EmailComponent);
export { EmailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvZW1haWwvZW1haWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTRCeEQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQXpCM0I7UUE4QkMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXdCNUMsQ0FBQztJQXRCRyxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNELEtBQUssQ0FBQyxLQUFVO1FBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQVU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTtBQTdCWSxjQUFjO0lBekIxQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUU7Ozs7Ozs7OztLQVNUO2lCQUVHOzs7Ozs7Ozs7U0FTQztLQUVSLENBQUM7R0FDVyxjQUFjLENBNkIxQjtTQTdCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZW1haWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICpuZ0lmPVwiaXNMaW5rXCIgW2hyZWZdPVwiJ21haWx0bzonICsgc291cmNlXCIgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFpc0xpbmtcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0OmhvdmVyIC5mYS1lbnZlbG9wZXtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgOmhvc3QgLmZhe21hcmdpbjogMCA1cHg7fVxyXG4gICAgICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgICAgICAgIDpob3N0IGEgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxyXG4gICAgICAgICAgICA6aG9zdCBhIC5mYS1lbnZlbG9wZSB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAgICAgICAgIDpob3N0IC5mYS1lbnZlbG9wZSB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaXNMaW5rOiBib29sZWFuO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFwibWFpbC10b1wiLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19