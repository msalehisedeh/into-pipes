/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class LastUpdateComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.showIcon = (args && args.length && args[0] === 'true');
    }
    /**
     * @return {?}
     */
    formatDate() {
        /** @type {?} */
        const currentDate = new Date();
        /** @type {?} */
        const minute = 60000;
        /** @type {?} */
        const hour = 3600000;
        /** @type {?} */
        const day = 86400000;
        /** @type {?} */
        const week = 604800000;
        /** @type {?} */
        const month = 604800000 * 4;
        /** @type {?} */
        const year = 604800000 * 52;
        /** @type {?} */
        let result = "";
        /** @type {?} */
        let diff = currentDate.getTime() - this.source.getTime();
        if (diff <= minute) {
            // up to a minute
            result = "seconds ago";
        }
        else if (diff <= hour) {
            /** @type {?} */
            let minutes = Math.floor(diff / minute);
            /** @type {?} */
            let seconds = Math.floor((diff - (minutes * minute)) / 1000);
            result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
        }
        else if (diff <= day) {
            /** @type {?} */
            let hours = Math.floor(diff / hour);
            /** @type {?} */
            let minutes = Math.floor((diff - (hours * hour)) / minute);
            result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
        }
        else if (diff <= week) {
            /** @type {?} */
            let days = Math.floor(diff / day);
            /** @type {?} */
            let hours = Math.floor((diff - (days * day)) / hour);
            result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
        }
        else if (diff <= month) {
            /** @type {?} */
            let weeks = Math.floor(diff / week);
            /** @type {?} */
            let days = Math.floor((diff - (weeks * week)) / day);
            result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
        }
        else if (diff <= year) {
            /** @type {?} */
            let months = Math.floor(diff / month);
            /** @type {?} */
            let weeks = Math.floor((diff - (months * month)) / week);
            result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
        }
        else {
            /** @type {?} */
            let years = Math.floor(diff / year);
            /** @type {?} */
            let months = Math.floor((diff - (years * year)) / month);
            result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
        }
        return result;
    }
}
LastUpdateComponent.decorators = [
    { type: Component, args: [{
                selector: 'lastupdate-component',
                template: `
    <span *ngIf="showIcon" class="fa fa-clock-o" aria-hidden="true"></span>
    <span [textContent]="formatDate()"></span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 23px;position: relative}
        .fa {margin:0 5px 0 0}
        `]
            }] }
];
if (false) {
    /** @type {?} */
    LastUpdateComponent.prototype.source;
    /** @type {?} */
    LastUpdateComponent.prototype.id;
    /** @type {?} */
    LastUpdateComponent.prototype.name;
    /** @type {?} */
    LastUpdateComponent.prototype.showIcon;
    /** @type {?} */
    LastUpdateComponent.prototype.count;
    /** @type {?} */
    LastUpdateComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdHVwZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9sYXN0dXBkYXRlL2xhc3R1cGRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQWdCeEQsTUFBTTs7Ozs7OztJQVVGLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztLQUMvRDs7OztJQUVELFVBQVU7O1FBQ1osTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7UUFDL0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDOztRQUNyQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUM7O1FBQ3JCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQzs7UUFDckIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDOztRQUN2QixNQUFNLEtBQUssR0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDOztRQUMxQixNQUFNLElBQUksR0FBRyxTQUFTLEdBQUMsRUFBRSxDQUFDOztRQUMxQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O1FBRWhCLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXpELEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDOztZQUNuQixNQUFNLEdBQUcsYUFBYSxDQUFDO1NBQ3ZCO1FBQUEsSUFBSSxDQUFD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QyxLQUFLLENBQUMsQ0FBQzs7WUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDO1lBRXZELE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hIO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ1AsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2RCxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvRztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZDs7O1lBMUVELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7OztLQUdUO3lCQUVHOzs7U0FHQzthQUVSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGFzdHVwZGF0ZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwic2hvd0ljb25cIiBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0RGF0ZSgpXCI+PC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgICAgIC5mYSB7bWFyZ2luOjAgNXB4IDAgMH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXN0VXBkYXRlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IGFueTtcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2hvd0ljb246IGJvb2xlYW47XHJcbiAgICBcclxuICAgIFxyXG4gICAgY291bnQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0ljb24gPSAoYXJncyAmJiBhcmdzLmxlbmd0aCAmJiBhcmdzWzBdID09PSAndHJ1ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoKSB7XHJcblx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRjb25zdCBtaW51dGUgPSA2MDAwMDsvLyBvbmUgbWludXRlXHJcblx0XHRjb25zdCBob3VyID0gMzYwMDAwMDsvLyBvbmUgaG91ciBsaW1pdFxyXG5cdFx0Y29uc3QgZGF5ID0gODY0MDAwMDA7Ly8gMjQgaG91cnMgbGltaXRcclxuXHRcdGNvbnN0IHdlZWsgPSA2MDQ4MDAwMDA7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRjb25zdCBtb250aCA9IDYwNDgwMDAwMCo0Oy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0Y29uc3QgeWVhciA9IDYwNDgwMDAwMCo1MjsvLyA3IGRheXMgbGltaXRcclxuXHRcdGxldCByZXN1bHQgPSBcIlwiO1xyXG5cclxuXHRcdGxldCBkaWZmID0gY3VycmVudERhdGUuZ2V0VGltZSgpIC0gdGhpcy5zb3VyY2UuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmKGRpZmYgPD0gbWludXRlKSB7Ly8gdXAgdG8gYSBtaW51dGVcclxuXHRcdFx0cmVzdWx0ID0gXCJzZWNvbmRzIGFnb1wiO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBob3VyKSB7Ly8gdXAgdG8gYW4gaG91clxyXG5cdFx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZi9taW51dGUpO1xyXG5cdFx0XHRsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAobWludXRlcyAqIG1pbnV0ZSkpLzEwMDApO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKG1pbnV0ZXMgPCAyID8gXCJhIG1pbnV0ZVwiIDogbWludXRlcyArIFwiIG1pbnV0ZXMgXCIpICsgKHNlY29uZHMgPiAwID8gXCIgYW5kIFwiICsgc2Vjb25kcyArIFwiIHNlY29uZHMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IGRheSkgey8vIHVwIHRvIGEgZGF5XHJcblx0XHRcdGxldCBob3VycyA9IE1hdGguZmxvb3IoZGlmZi9ob3VyKTtcclxuXHRcdFx0bGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmIC0gKGhvdXJzICogaG91cikpL21pbnV0ZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXN1bHQgPSAoaG91cnMgPCAyID8gXCJhbiBob3VyXCIgOiBob3VycyArIFwiIGhvdXJzIFwiKSArIChtaW51dGVzID4gMCA/IFwiIGFuZCBcIiArIG1pbnV0ZXMgKyBcIiBtaW51dGVzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSB3ZWVrKSB7Ly8gdXAgdG8gYSB3ZWVrXHJcblx0XHRcdGxldCBkYXlzID0gTWF0aC5mbG9vcihkaWZmL2RheSk7XHJcblx0XHRcdGxldCBob3VycyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoZGF5cyAqIGRheSkpL2hvdXIpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKGRheXMgPCAyID8gXCJhIGRheVwiIDogZGF5cyArIFwiIGRheXMgXCIpICsgKGhvdXJzID4gMCA/IFwiIGFuZCBcIiArIGhvdXJzICsgXCIgaG91cnMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IG1vbnRoKSB7Ly8gdXAgdG8gYSBtb250aFxyXG5cdFx0XHRsZXQgd2Vla3MgPSBNYXRoLmZsb29yKGRpZmYvd2Vlayk7XHJcblx0XHRcdGxldCBkYXlzID0gTWF0aC5mbG9vcigoZGlmZiAtICh3ZWVrcyAqIHdlZWspKS9kYXkpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKHdlZWtzIDwgMiA/IFwiYSB3ZWVrXCIgOiB3ZWVrcyArIFwiIHdlZWtzIFwiKSArIChkYXlzID4gMCA/IFwiIGFuZCBcIiArIGRheXMgKyBcIiBkYXlzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSB5ZWFyKSB7Ly8gdXAgdG8gYSB3ZWVrXHJcblx0XHRcdGxldCBtb250aHMgPSBNYXRoLmZsb29yKGRpZmYvbW9udGgpO1xyXG5cdFx0XHRsZXQgd2Vla3MgPSBNYXRoLmZsb29yKChkaWZmIC0gKG1vbnRocyAqIG1vbnRoKSkvd2Vlayk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAobW9udGhzIDwgMiA/IFwiYSBtb250aFwiIDogbW9udGhzICsgXCIgbW9udGhzIFwiKSArICh3ZWVrcyA+IDAgPyBcIiBhbmQgXCIgKyB3ZWVrcyArIFwiIHdlZWtzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHllYXJzID0gTWF0aC5mbG9vcihkaWZmL3llYXIpO1xyXG5cdFx0XHRsZXQgbW9udGhzID0gTWF0aC5mbG9vcigoZGlmZiAtICh5ZWFycyAqIHllYXIpKS9tb250aCk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAoeWVhcnMgPCAyID8gXCJhIHllYXJcIiA6IHllYXJzICsgXCIgeWVhcnMgXCIpICsgKG1vbnRocyA+IDAgPyBcIiBhbmQgXCIgKyBtb250aHMgKyBcIiBtb250aHMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcbn1cclxuIl19