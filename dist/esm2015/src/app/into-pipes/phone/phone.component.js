/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
export class PhoneComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] === 'true' : false;
        this.formatting = args.length > 1 ? args[1] === 'true' : false;
    }
    /**
     * @return {?}
     */
    normalizeSource() {
        /** @type {?} */
        let result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            /** @type {?} */
            const b = result.slice(0, 10);
            /** @type {?} */
            const e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    }
    /**
     * @return {?}
     */
    formattedSource() {
        /** @type {?} */
        let result = this.source;
        if (this.formatting) {
            result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
            result = result[0] === '1' ? result.substring(1) : result;
            if (result.length === 10) {
                result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            }
            else if (result.length > 10) {
                /** @type {?} */
                const b = result.slice(0, 10);
                /** @type {?} */
                const e = result.slice(10);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                result += (' ext. ' + e);
            }
        }
        return result;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: event.type
        });
    }
}
PhoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'phone',
                template: `
    <a  *ngIf="isLink" [href]="'tel:' + normalizeSource()" (keyup)='keyup($event)' (click)="change($event)">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </a>
    <span *ngIf="!isLink">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        :host a:hover .fa-phone{color: #fabdab;}
        :host .fa{margin: 0 5px;}
        `]
            }] }
];
if (false) {
    /** @type {?} */
    PhoneComponent.prototype.source;
    /** @type {?} */
    PhoneComponent.prototype.id;
    /** @type {?} */
    PhoneComponent.prototype.name;
    /** @type {?} */
    PhoneComponent.prototype.isLink;
    /** @type {?} */
    PhoneComponent.prototype.formatting;
    /** @type {?} */
    PhoneComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGhvbmUvcGhvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVCeEQsTUFBTTs7cUNBTW1CLElBQUksWUFBWSxFQUFFOzs7Ozs7OztJQUV2QyxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUNqRTs7OztJQUNELGVBQWU7O1FBQ1gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUxRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUM5QztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQzVCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztZQUM5QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDbkM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzs7O0lBQ0QsZUFBZTs7UUFDWCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXpCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRCxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRTFELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Z0JBQzVCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztnQkFDOUIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNqRSxNQUFNLElBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Ozs7O0lBQ0QsS0FBSyxDQUFDLEtBQVU7O1FBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtLQUNKOzs7OztJQUNELE1BQU0sQ0FBQyxLQUFVO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0tBQ047OztZQWpGSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7O0tBU1Q7eUJBRUc7Ozs7U0FJQzthQUVSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGhvbmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICAqbmdJZj1cImlzTGlua1wiIFtocmVmXT1cIid0ZWw6JyArIG5vcm1hbGl6ZVNvdXJjZSgpXCIgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZWRTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuICpuZ0lmPVwiIWlzTGlua1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVkU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICA6aG9zdCBhOmhvdmVyIC5mYS1waG9uZXtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgOmhvc3QgLmZhe21hcmdpbjogMCA1cHg7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBob25lQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaXNMaW5rOiBib29sZWFuO1xyXG4gICAgZm9ybWF0dGluZzogYm9vbGVhbjtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5pc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA9PT0gJ3RydWUnIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdID09PSAndHJ1ZScgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVNvdXJjZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2UucmVwbGFjZSgvW1xcIFxcLVxcLlxcKFxcKVxcK10vZywgJycpO1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgcmVzdWx0ICsgJztleHQ9JyArIHJlc3VsdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgZSA9IHJlc3VsdC5zbGljZSgxMCk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICcrMScgKyBiICsgJztleHQ9JyArIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBmb3JtYXR0ZWRTb3VyY2UoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291cmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmZvcm1hdHRpbmcpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zb3VyY2UucmVwbGFjZSgvW1xcIFxcLVxcLlxcKFxcKVxcK10vZywgJycpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICcxJyA/IHJlc3VsdC5zdWJzdHJpbmcoMSkgOiByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgcmVzdWx0LnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sIFwiKCQxKSQyLSQzXCIpOyBcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IHJlc3VsdC5zbGljZSgxMCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIGIucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Kz0gKCcgZXh0LiAnICsgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdjbGljaycsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnR5cGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=