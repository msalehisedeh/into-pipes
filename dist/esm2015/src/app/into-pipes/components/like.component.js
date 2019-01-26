/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
export class LikeComponent {
    constructor() {
        this.thumbs = "";
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
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    addItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            savedItems.push(id);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
        }
        else {
            localStorage.setItem(this.thumbs, JSON.stringify([id]));
        }
        this.source++;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    removeItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            /** @type {?} */
            const i = savedItems.indexOf(id);
            savedItems.splice(i, 1);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
            this.source--;
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        /** @type {?} */
        let found = null;
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            /** @type {?} */
            const i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    }
    /**
     * @return {?}
     */
    formatterSource() {
        /** @type {?} */
        let result = this.source;
        if (this.source > 1000) {
            result = (this.source / 1000).toFixed(1) + " k";
        }
        return result;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleCount(event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        if (this.selected) {
            /** @type {?} */
            const existing = this.getItem(this.data[this.key]);
            if (!existing) {
                this.addItem(this.data[this.key]);
            }
        }
        else {
            this.removeItem(this.data[this.key]);
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: this.data,
            selected: this.selected,
            action: this.thumbs
        });
    }
}
LikeComponent.decorators = [
    { type: Component, args: [{
                selector: 'like-component',
                template: `
    <a 
        id='like-{{id}}' 
        tabindex="0" 
        class="like" 
        [class.selected]="selected" 
        (keyup)="keyup($event)" 
        (click)='toggleCount($event)'>
        <span class="fa fa-thumbs-up" *ngIf="thumbsup && !selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-up selected" *ngIf="thumbsup && selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-down" *ngIf="!thumbsup && !selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-down selected" *ngIf="!thumbsup && selected" aria-hidden="true"></span>
        <span class="counts" *ngIf="showCount" [textContent]="formatterSource()"></span>
    </a>`,
                styles: [`
        :host {display: table;position: relative}
        .like {cursor: pointer;}
        .like .counts{margin-left: 5px;}
        .like .fa {margin: 0;}
        .like .fa.selected {color: green;}
        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}
        `]
            }] }
];
if (false) {
    /** @type {?} */
    LikeComponent.prototype.source;
    /** @type {?} */
    LikeComponent.prototype.id;
    /** @type {?} */
    LikeComponent.prototype.data;
    /** @type {?} */
    LikeComponent.prototype.name;
    /** @type {?} */
    LikeComponent.prototype.showCount;
    /** @type {?} */
    LikeComponent.prototype.thumbsup;
    /** @type {?} */
    LikeComponent.prototype.selected;
    /** @type {?} */
    LikeComponent.prototype.key;
    /** @type {?} */
    LikeComponent.prototype.thumbs;
    /** @type {?} */
    LikeComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2xpa2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQThCeEQsTUFBTTs7c0JBU08sRUFBRTtxQ0FDVSxJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7SUFFdkMsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FB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LENBQUMsUUFBUSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O1lBQ2xCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0tBQ0o7OztZQXJITixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O1NBYUw7eUJBRUQ7Ozs7Ozs7U0FPQzthQUVSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpa2UtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBcclxuICAgICAgICBpZD0nbGlrZS17e2lkfX0nIFxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgIGNsYXNzPVwibGlrZVwiIFxyXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJzZWxlY3RlZFwiIFxyXG4gICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgXHJcbiAgICAgICAgKGNsaWNrKT0ndG9nZ2xlQ291bnQoJGV2ZW50KSc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtdXBcIiAqbmdJZj1cInRodW1ic3VwICYmICFzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy11cCBzZWxlY3RlZFwiICpuZ0lmPVwidGh1bWJzdXAgJiYgc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtZG93blwiICpuZ0lmPVwiIXRodW1ic3VwICYmICFzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy1kb3duIHNlbGVjdGVkXCIgKm5nSWY9XCIhdGh1bWJzdXAgJiYgc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudHNcIiAqbmdJZj1cInNob3dDb3VudFwiIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZXJTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvYT5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OiB0YWJsZTtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAgICAgLmxpa2Uge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAgICAgLmxpa2UgLmNvdW50c3ttYXJnaW4tbGVmdDogNXB4O31cclxuICAgICAgICAubGlrZSAuZmEge21hcmdpbjogMDt9XHJcbiAgICAgICAgLmxpa2UgLmZhLnNlbGVjdGVkIHtjb2xvcjogZ3JlZW47fVxyXG4gICAgICAgIC5saWtlOmhvdmVyLCAubGlrZTpob3ZlciAuZmEsIC5saWtlOmhvdmVyIC5mYS5zZWxlY3RlZHtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlrZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBhbnk7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZGF0YTogYW55O1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNob3dDb3VudDogYm9vbGVhbjtcclxuICAgIHRodW1ic3VwOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHRodW1icyA9IFwiXCI7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zaG93Q291bnQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCAmJiBhcmdzWzBdID09PSAndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMudGh1bWJzdXAgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEgJiYgYXJnc1sxXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLmtleSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICB0aGlzLnRodW1icyA9IHRoaXMudGh1bWJzdXAgPyBcInRodW1icy11cC1pdGVtc1wiIDogXCJ0aHVtYnMtZG93bi1pdGVtc1wiO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAodGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pICE9PSBudWxsKTtcclxuICAgICAgfVxyXG4gICAga2V5dXAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkSXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRodW1icyk7XHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBzYXZlZEl0ZW1zLnB1c2goaWQpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50aHVtYnMsIEpTT04uc3RyaW5naWZ5KHNhdmVkSXRlbXMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50aHVtYnMsIEpTT04uc3RyaW5naWZ5KFtpZF0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgKys7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbW92ZUl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgY29uc3QgaSA9IHNhdmVkSXRlbXMuaW5kZXhPZihpZCk7XHJcbiAgICAgICAgICBzYXZlZEl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgIFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50aHVtYnMsIEpTT04uc3RyaW5naWZ5KHNhdmVkSXRlbXMpKTtcclxuICAgICAgICAgIHRoaXMuc291cmNlIC0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRodW1icyk7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcclxuICAgIFxyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtczogYW55W10gPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIGNvbnN0IGkgPSBzYXZlZEl0ZW1zLmluZGV4T2YoaWQpO1xyXG4gICAgXHJcbiAgICAgICAgICBmb3VuZCA9IGkgPCAwID8gbnVsbCA6IHNhdmVkSXRlbXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgfVxyXG4gICAgICBmb3JtYXR0ZXJTb3VyY2UoKSB7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5zb3VyY2UgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gKHRoaXMuc291cmNlLzEwMDApLnRvRml4ZWQoMSkgKyBcIiBrXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgdG9nZ2xlQ291bnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmdldEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICBpZiAoIWV4aXN0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxyXG4gICAgICAgICAgICBhY3Rpb246IHRoaXMudGh1bWJzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0iXX0=