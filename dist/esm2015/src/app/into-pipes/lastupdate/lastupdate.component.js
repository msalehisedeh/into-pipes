import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LastUpdateComponent = class LastUpdateComponent {
    transform(source, data, args) {
        this.source = source;
        this.showIcon = (args && args.length && args[0] === 'true');
    }
    formatDate() {
        const currentDate = new Date();
        const minute = 60000; // one minute
        const hour = 3600000; // one hour limit
        const day = 86400000; // 24 hours limit
        const week = 604800000; // 7 days limit
        const month = 604800000 * 4; // 7 days limit
        const year = 604800000 * 52; // 7 days limit
        let result = "";
        let diff = currentDate.getTime() - this.source.getTime();
        if (diff <= minute) { // up to a minute
            result = "seconds ago";
        }
        else if (diff <= hour) { // up to an hour
            let minutes = Math.floor(diff / minute);
            let seconds = Math.floor((diff - (minutes * minute)) / 1000);
            result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
        }
        else if (diff <= day) { // up to a day
            let hours = Math.floor(diff / hour);
            let minutes = Math.floor((diff - (hours * hour)) / minute);
            result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
        }
        else if (diff <= week) { // up to a week
            let days = Math.floor(diff / day);
            let hours = Math.floor((diff - (days * day)) / hour);
            result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
        }
        else if (diff <= month) { // up to a month
            let weeks = Math.floor(diff / week);
            let days = Math.floor((diff - (weeks * week)) / day);
            result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
        }
        else if (diff <= year) { // up to a week
            let months = Math.floor(diff / month);
            let weeks = Math.floor((diff - (months * month)) / week);
            result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
        }
        else {
            let years = Math.floor(diff / year);
            let months = Math.floor((diff - (years * year)) / month);
            result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
        }
        return result;
    }
};
LastUpdateComponent = tslib_1.__decorate([
    Component({
        selector: 'lastupdate-component',
        template: `
    <span *ngIf="showIcon" class="fa fa-clock-o" aria-hidden="true"></span>
    <span>{{formatDate()}}</span>
    `,
        styles: [`
        :host {display:table;float:left;min-height: 23px;position: relative}
        .fa {margin:0 5px 0 0}
        @media print {
            :host .fa-clock-o {
                display: none;
            }
        }
        `]
    })
], LastUpdateComponent);
export { LastUpdateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdHVwZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9sYXN0dXBkYXRlL2xhc3R1cGRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQXFCeEQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFVNUIsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxVQUFVO1FBQ1osTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMvQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQSxhQUFhO1FBQ2xDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFBLGlCQUFpQjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQSxpQkFBaUI7UUFDdEMsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUEsZUFBZTtRQUN0QyxNQUFNLEtBQUssR0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDLENBQUEsZUFBZTtRQUN6QyxNQUFNLElBQUksR0FBRyxTQUFTLEdBQUMsRUFBRSxDQUFDLENBQUEsZUFBZTtRQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFekQsSUFBRyxJQUFJLElBQUksTUFB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QUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2RCxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoSDthQUFNO1lBQ04sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXZELE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9HO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0NBRUQsQ0FBQTtBQS9EWSxtQkFBbUI7SUFsQi9CLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsUUFBUSxFQUFFOzs7S0FHVDtpQkFFRzs7Ozs7Ozs7U0FRQztLQUVSLENBQUM7R0FDVyxtQkFBbUIsQ0ErRC9CO1NBL0RZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xhc3R1cGRhdGUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cInNob3dJY29uXCIgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4+e3tmb3JtYXREYXRlKCl9fTwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4O3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgICAgICAuZmEge21hcmdpbjowIDVweCAwIDB9XHJcbiAgICAgICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgICAgICAgOmhvc3QgLmZhLWNsb2NrLW8ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXN0VXBkYXRlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IGFueTtcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2hvd0ljb246IGJvb2xlYW47XHJcbiAgICBcclxuICAgIFxyXG4gICAgY291bnQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0ljb24gPSAoYXJncyAmJiBhcmdzLmxlbmd0aCAmJiBhcmdzWzBdID09PSAndHJ1ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoKSB7XHJcblx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRjb25zdCBtaW51dGUgPSA2MDAwMDsvLyBvbmUgbWludXRlXHJcblx0XHRjb25zdCBob3VyID0gMzYwMDAwMDsvLyBvbmUgaG91ciBsaW1pdFxyXG5cdFx0Y29uc3QgZGF5ID0gODY0MDAwMDA7Ly8gMjQgaG91cnMgbGltaXRcclxuXHRcdGNvbnN0IHdlZWsgPSA2MDQ4MDAwMDA7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRjb25zdCBtb250aCA9IDYwNDgwMDAwMCo0Oy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0Y29uc3QgeWVhciA9IDYwNDgwMDAwMCo1MjsvLyA3IGRheXMgbGltaXRcclxuXHRcdGxldCByZXN1bHQgPSBcIlwiO1xyXG5cclxuXHRcdGxldCBkaWZmID0gY3VycmVudERhdGUuZ2V0VGltZSgpIC0gdGhpcy5zb3VyY2UuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmKGRpZmYgPD0gbWludXRlKSB7Ly8gdXAgdG8gYSBtaW51dGVcclxuXHRcdFx0cmVzdWx0ID0gXCJzZWNvbmRzIGFnb1wiO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBob3VyKSB7Ly8gdXAgdG8gYW4gaG91clxyXG5cdFx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZi9taW51dGUpO1xyXG5cdFx0XHRsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAobWludXRlcyAqIG1pbnV0ZSkpLzEwMDApO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKG1pbnV0ZXMgPCAyID8gXCJhIG1pbnV0ZVwiIDogbWludXRlcyArIFwiIG1pbnV0ZXMgXCIpICsgKHNlY29uZHMgPiAwID8gXCIgYW5kIFwiICsgc2Vjb25kcyArIFwiIHNlY29uZHMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IGRheSkgey8vIHVwIHRvIGEgZGF5XHJcblx0XHRcdGxldCBob3VycyA9IE1hdGguZmxvb3IoZGlmZi9ob3VyKTtcclxuXHRcdFx0bGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmIC0gKGhvdXJzICogaG91cikpL21pbnV0ZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXN1bHQgPSAoaG91cnMgPCAyID8gXCJhbiBob3VyXCIgOiBob3VycyArIFwiIGhvdXJzIFwiKSArIChtaW51dGVzID4gMCA/IFwiIGFuZCBcIiArIG1pbnV0ZXMgKyBcIiBtaW51dGVzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSB3ZWVrKSB7Ly8gdXAgdG8gYSB3ZWVrXHJcblx0XHRcdGxldCBkYXlzID0gTWF0aC5mbG9vcihkaWZmL2RheSk7XHJcblx0XHRcdGxldCBob3VycyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoZGF5cyAqIGRheSkpL2hvdXIpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKGRheXMgPCAyID8gXCJhIGRheVwiIDogZGF5cyArIFwiIGRheXMgXCIpICsgKGhvdXJzID4gMCA/IFwiIGFuZCBcIiArIGhvdXJzICsgXCIgaG91cnMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IG1vbnRoKSB7Ly8gdXAgdG8gYSBtb250aFxyXG5cdFx0XHRsZXQgd2Vla3MgPSBNYXRoLmZsb29yKGRpZmYvd2Vlayk7XHJcblx0XHRcdGxldCBkYXlzID0gTWF0aC5mbG9vcigoZGlmZiAtICh3ZWVrcyAqIHdlZWspKS9kYXkpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKHdlZWtzIDwgMiA/IFwiYSB3ZWVrXCIgOiB3ZWVrcyArIFwiIHdlZWtzIFwiKSArIChkYXlzID4gMCA/IFwiIGFuZCBcIiArIGRheXMgKyBcIiBkYXlzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSB5ZWFyKSB7Ly8gdXAgdG8gYSB3ZWVrXHJcblx0XHRcdGxldCBtb250aHMgPSBNYXRoLmZsb29yKGRpZmYvbW9udGgpO1xyXG5cdFx0XHRsZXQgd2Vla3MgPSBNYXRoLmZsb29yKChkaWZmIC0gKG1vbnRocyAqIG1vbnRoKSkvd2Vlayk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAobW9udGhzIDwgMiA/IFwiYSBtb250aFwiIDogbW9udGhzICsgXCIgbW9udGhzIFwiKSArICh3ZWVrcyA+IDAgPyBcIiBhbmQgXCIgKyB3ZWVrcyArIFwiIHdlZWtzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHllYXJzID0gTWF0aC5mbG9vcihkaWZmL3llYXIpO1xyXG5cdFx0XHRsZXQgbW9udGhzID0gTWF0aC5mbG9vcigoZGlmZiAtICh5ZWFycyAqIHllYXIpKS9tb250aCk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAoeWVhcnMgPCAyID8gXCJhIHllYXJcIiA6IHllYXJzICsgXCIgeWVhcnMgXCIpICsgKG1vbnRocyA+IDAgPyBcIiBhbmQgXCIgKyBtb250aHMgKyBcIiBtb250aHMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcbn1cclxuIl19