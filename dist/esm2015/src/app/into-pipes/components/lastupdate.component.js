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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdHVwZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2xhc3R1cGRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQWdCeEQsTUFBTTs7Ozs7OztJQVVGLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztLQUMvRDs7OztJQUVELFVBQVU7O1FBQ1osTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7UUFDL0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDOztRQUNyQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUM7O1FBQ3JCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQzs7UUFDckIsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDOztRQUN2QixNQUFNLEtBQUssR0FBRyxTQUFTLEdBQUMsQ0FBQyxDQUFDOztRQUMxQixNQUFNLElBQUksR0FBRyxTQUFTLEdBQUMsRUFBRSxDQUFDOztRQUMxQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O1FBRWhCLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXpELEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDOztZQUNuQixNQUFNLEdBQUcsYUFBYSxDQUFDO1NBQ3ZCO1FBQUEsSUFBSSxDQUFD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QyxLQUFLLENBQUMsQ0FBQzs7WUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDO1lBRXZELE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hIO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ1AsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2RCxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvRztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZDs7O1lBMUVELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7OztLQUdUO3lCQUVHOzs7U0FHQzthQUVSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xhc3R1cGRhdGUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cInNob3dJY29uXCIgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gW3RleHRDb250ZW50XT1cImZvcm1hdERhdGUoKVwiPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4O3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgICAgICAuZmEge21hcmdpbjowIDVweCAwIDB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFzdFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBhbnk7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNob3dJY29uOiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvdW50OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnNob3dJY29uID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREYXRlKCkge1xyXG5cdFx0Y29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Y29uc3QgbWludXRlID0gNjAwMDA7Ly8gb25lIG1pbnV0ZVxyXG5cdFx0Y29uc3QgaG91ciA9IDM2MDAwMDA7Ly8gb25lIGhvdXIgbGltaXRcclxuXHRcdGNvbnN0IGRheSA9IDg2NDAwMDAwOy8vIDI0IGhvdXJzIGxpbWl0XHJcblx0XHRjb25zdCB3ZWVrID0gNjA0ODAwMDAwOy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0Y29uc3QgbW9udGggPSA2MDQ4MDAwMDAqNDsvLyA3IGRheXMgbGltaXRcclxuXHRcdGNvbnN0IHllYXIgPSA2MDQ4MDAwMDAqNTI7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHJcblx0XHRsZXQgZGlmZiA9IGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIHRoaXMuc291cmNlLmdldFRpbWUoKTtcclxuXHJcblx0XHRpZihkaWZmIDw9IG1pbnV0ZSkgey8vIHVwIHRvIGEgbWludXRlXHJcblx0XHRcdHJlc3VsdCA9IFwic2Vjb25kcyBhZ29cIjtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gaG91cikgey8vIHVwIHRvIGFuIGhvdXJcclxuXHRcdFx0bGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGRpZmYvbWludXRlKTtcclxuXHRcdFx0bGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaWZmIC0gKG1pbnV0ZXMgKiBtaW51dGUpKS8xMDAwKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChtaW51dGVzIDwgMiA/IFwiYSBtaW51dGVcIiA6IG1pbnV0ZXMgKyBcIiBtaW51dGVzIFwiKSArIChzZWNvbmRzID4gMCA/IFwiIGFuZCBcIiArIHNlY29uZHMgKyBcIiBzZWNvbmRzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBkYXkpIHsvLyB1cCB0byBhIGRheVxyXG5cdFx0XHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKGRpZmYvaG91cik7XHJcblx0XHRcdGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAtIChob3VycyAqIGhvdXIpKS9taW51dGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVzdWx0ID0gKGhvdXJzIDwgMiA/IFwiYW4gaG91clwiIDogaG91cnMgKyBcIiBob3VycyBcIikgKyAobWludXRlcyA+IDAgPyBcIiBhbmQgXCIgKyBtaW51dGVzICsgXCIgbWludXRlcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gd2Vlaykgey8vIHVwIHRvIGEgd2Vla1xyXG5cdFx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IoZGlmZi9kYXkpO1xyXG5cdFx0XHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmIC0gKGRheXMgKiBkYXkpKS9ob3VyKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChkYXlzIDwgMiA/IFwiYSBkYXlcIiA6IGRheXMgKyBcIiBkYXlzIFwiKSArIChob3VycyA+IDAgPyBcIiBhbmQgXCIgKyBob3VycyArIFwiIGhvdXJzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBtb250aCkgey8vIHVwIHRvIGEgbW9udGhcclxuXHRcdFx0bGV0IHdlZWtzID0gTWF0aC5mbG9vcihkaWZmL3dlZWspO1xyXG5cdFx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IoKGRpZmYgLSAod2Vla3MgKiB3ZWVrKSkvZGF5KTtcclxuXHJcblx0XHRcdHJlc3VsdCA9ICh3ZWVrcyA8IDIgPyBcImEgd2Vla1wiIDogd2Vla3MgKyBcIiB3ZWVrcyBcIikgKyAoZGF5cyA+IDAgPyBcIiBhbmQgXCIgKyBkYXlzICsgXCIgZGF5cyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0geWVhcikgey8vIHVwIHRvIGEgd2Vla1xyXG5cdFx0XHRsZXQgbW9udGhzID0gTWF0aC5mbG9vcihkaWZmL21vbnRoKTtcclxuXHRcdFx0bGV0IHdlZWtzID0gTWF0aC5mbG9vcigoZGlmZiAtIChtb250aHMgKiBtb250aCkpL3dlZWspO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKG1vbnRocyA8IDIgPyBcImEgbW9udGhcIiA6IG1vbnRocyArIFwiIG1vbnRocyBcIikgKyAod2Vla3MgPiAwID8gXCIgYW5kIFwiICsgd2Vla3MgKyBcIiB3ZWVrcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB5ZWFycyA9IE1hdGguZmxvb3IoZGlmZi95ZWFyKTtcclxuXHRcdFx0bGV0IG1vbnRocyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoeWVhcnMgKiB5ZWFyKSkvbW9udGgpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKHllYXJzIDwgMiA/IFwiYSB5ZWFyXCIgOiB5ZWFycyArIFwiIHllYXJzIFwiKSArIChtb250aHMgPiAwID8gXCIgYW5kIFwiICsgbW9udGhzICsgXCIgbW9udGhzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==