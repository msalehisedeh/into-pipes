import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
let LinkComponent = class LinkComponent {
    constructor() {
        this.poped = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.source = source;
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
        this.poper = (args && args.length > 2) ? (args[1] == 'true') : false;
        if (!this.title || !this.title.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d + 1);
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
        this.poped = false;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "click",
            item: event.type
        });
    }
};
LinkComponent = tslib_1.__decorate([
    Component({
        selector: 'link-component',
        template: `
    <a [href]="source" 
        [target]="target" 
        [textContent]="title" 
        (mouseenter)='poped = true' 
        (mouseleave)='poped = false' 
        (keyup)='keyup($event)' 
        (click)="change($event)"></a>
        <img *ngIf='poped' [src]='source' />`,
        styles: [`
        :host {display:table;float:left;min-height: 23px; position:relative}
        :host img{z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;display:table;float:left;min-height: 23px; width: 250px;top: 22px;position:absolute;border-radius: 4px}
        @media print {
            :host a {
                text-decoration: none;
            }
        }
        `]
    })
], LinkComponent);
export { LinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9saW5rL2xpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTBCeEQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXZCMUI7UUE0QkksVUFBSyxHQUFHLEtBQUssQ0FBQztRQUdqQiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBa0M1QyxDQUFDO0lBaENHLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXBFLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbEMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNELEtBQUssQ0FBQyxLQUFVO1FBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQVU7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTtBQTFDWSxhQUFhO0lBdkJ6QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7NkNBUStCO2lCQUVyQzs7Ozs7Ozs7U0FRQztLQUVSLENBQUM7R0FDVyxhQUFhLENBMEN6QjtTQTFDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGluay1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIFtocmVmXT1cInNvdXJjZVwiIFxyXG4gICAgICAgIFt0YXJnZXRdPVwidGFyZ2V0XCIgXHJcbiAgICAgICAgW3RleHRDb250ZW50XT1cInRpdGxlXCIgXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPSdwb3BlZCA9IHRydWUnIFxyXG4gICAgICAgIChtb3VzZWxlYXZlKT0ncG9wZWQgPSBmYWxzZScgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgXHJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+PC9hPlxyXG4gICAgICAgIDxpbWcgKm5nSWY9J3BvcGVkJyBbc3JjXT0nc291cmNlJyAvPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4OyBwb3NpdGlvbjpyZWxhdGl2ZX1cclxuICAgICAgICA6aG9zdCBpbWd7ei1pbmRleDoyO2JvcmRlcjoycHggc29saWQ7Ym94LXNoYWRvdzogM3B4IDNweCAzcHggIzk5OTtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDsgd2lkdGg6IDI1MHB4O3RvcDogMjJweDtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOiA0cHh9XHJcbiAgICAgICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgICAgICAgOmhvc3QgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgcG9wZWQgPSBmYWxzZTtcclxuICAgIHBvcGVyOiBib29sZWFuO1xyXG4gICAgdGFyZ2V0OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLnBvcGVyID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IChhcmdzWzFdID09J3RydWUnKSA6IGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgaWYoIXRoaXMudGl0bGUgfHwgIXRoaXMudGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wb3BlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY2xpY2tcIixcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==