import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
let AddressComponent = class AddressComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] : true;
        this.hasTarget = args.length > 1 ? args[1] : false;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        if (this.isLink) {
            const x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
            this.url = x.replace("\\s+", "+");
        }
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
            item: event.type
        });
    }
};
AddressComponent = tslib_1.__decorate([
    Component({
        selector: 'address-component',
        template: `
    <a *ngIf="isLink" 
        [href]="url" 
        [target]="hasTarget ? '_blank' : null"
        class="google-map" 
        (keyup)='keyup($event)' 
        (click)="change($event)">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="off-screen">View in google map</span>
        <span class="address" [textContent]="addr1"></span>
        <span class="address" [textContent]="addr2"></span>
    </a>
    <span *ngIf="!isLink" class="google-map">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="address" [textContent]="addr1"></span>
        <span class="address" [textContent]="addr2"></span>
    </span>
    `,
        styles: [`:host .address {float: left;margin-right: 4px;}
        :host .google-map {float: left;margin-right: 4px;}
        :host .fa {float:left;color: #f00;margin: 0 5px;}
        :host .off-screen {position: absolute;left: -999em;}
        :host a:hover .fa-map-marker{color: #fabdab;}
        :host span{float-left;}
        :host {display: table;float:left;min-height: 23px}
        @media print {
            :host {
                text-decoration: none;
            }
            :host .fa-map-marker {display: none;}
        }
        `]
    })
], AddressComponent);
export { AddressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdDeEQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFyQzdCO1FBOENDLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUErQjVDLENBQUM7SUE3QkcsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFFLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFakQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsTUFBTSxDQUFDLEdBQUcsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRSxXQUFXLENBQUM7WUFDekYsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFDRCxLQUFLLENBQUMsS0FBVTtRQUNaLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDYixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFVO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFBO0FBeENZLGdCQUFnQjtJQXJDNUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJUO2lCQUVHOzs7Ozs7Ozs7Ozs7O1NBYUM7S0FFUixDQUFDO0dBQ1csZ0JBQWdCLENBd0M1QjtTQXhDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhZGRyZXNzLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgKm5nSWY9XCJpc0xpbmtcIiBcclxuICAgICAgICBbaHJlZl09XCJ1cmxcIiBcclxuICAgICAgICBbdGFyZ2V0XT1cImhhc1RhcmdldCA/ICdfYmxhbmsnIDogbnVsbFwiXHJcbiAgICAgICAgY2xhc3M9XCJnb29nbGUtbWFwXCIgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgXHJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlZpZXcgaW4gZ29vZ2xlIG1hcDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIiBbdGV4dENvbnRlbnRdPVwiYWRkcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgW3RleHRDb250ZW50XT1cImFkZHIyXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNMaW5rXCIgY2xhc3M9XCJnb29nbGUtbWFwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiIFt0ZXh0Q29udGVudF09XCJhZGRyMVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIiBbdGV4dENvbnRlbnRdPVwiYWRkcjJcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYDpob3N0IC5hZGRyZXNzIHtmbG9hdDogbGVmdDttYXJnaW4tcmlnaHQ6IDRweDt9XHJcbiAgICAgICAgOmhvc3QgLmdvb2dsZS1tYXAge2Zsb2F0OiBsZWZ0O21hcmdpbi1yaWdodDogNHB4O31cclxuICAgICAgICA6aG9zdCAuZmEge2Zsb2F0OmxlZnQ7Y29sb3I6ICNmMDA7bWFyZ2luOiAwIDVweDt9XHJcbiAgICAgICAgOmhvc3QgLm9mZi1zY3JlZW4ge3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAtOTk5ZW07fVxyXG4gICAgICAgIDpob3N0IGE6aG92ZXIgLmZhLW1hcC1tYXJrZXJ7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIDpob3N0IHNwYW57ZmxvYXQtbGVmdDt9XHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6IHRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICBAbWVkaWEgcHJpbnQge1xyXG4gICAgICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOmhvc3QgLmZhLW1hcC1tYXJrZXIge2Rpc3BsYXk6IG5vbmU7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGlzTGluazogYm9vbGVhbjtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBhZGRyMTogc3RyaW5nO1xyXG4gICAgYWRkcjI6IHN0cmluZztcclxuICAgIGhhc1RhcmdldDogYm9vbGVhbjtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLmhhc1RhcmdldCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZHIxID0gc291cmNlLnN0cmVldCArICcsICcgKyBzb3VyY2Uuc3VpdGU7XHJcbiAgICAgICAgdGhpcy5hZGRyMiA9IHNvdXJjZS5jaXR5ICsgJywgJyArIHNvdXJjZS56aXBjb2RlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0xpbmspIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9XCIgKyBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgdGhpcy5hZGRyMiArXCImaWU9VVRGLThcIjtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSB4LnJlcGxhY2UoXCJcXFxccytcIiwgXCIrXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnR5cGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=