/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.thumbs = "";
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    LikeComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
        this.source = source;
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LikeComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    LikeComponent.prototype.addItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            var savedItems = JSON.parse(saved);
            savedItems.push(id);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
        }
        else {
            localStorage.setItem(this.thumbs, JSON.stringify([id]));
        }
        this.source++;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    LikeComponent.prototype.removeItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            var savedItems = JSON.parse(saved);
            /** @type {?} */
            var i = savedItems.indexOf(id);
            savedItems.splice(i, 1);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
            this.source--;
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    LikeComponent.prototype.getItem = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var saved = localStorage.getItem(this.thumbs);
        /** @type {?} */
        var found = null;
        if (saved) {
            /** @type {?} */
            var savedItems = JSON.parse(saved);
            /** @type {?} */
            var i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    };
    /**
     * @return {?}
     */
    LikeComponent.prototype.formatterSource = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = this.source;
        if (this.source > 1000) {
            result = (this.source / 1000).toFixed(1) + " k";
        }
        return result;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LikeComponent.prototype.toggleCount = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        if (this.selected) {
            /** @type {?} */
            var existing = this.getItem(this.data[this.key]);
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
    };
    LikeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'like-component',
                    template: "\n    <a \n        id='like-{{id}}' \n        tabindex=\"0\" \n        class=\"like\" \n        [class.selected]=\"selected\" \n        (keyup)=\"keyup($event)\" \n        (click)='toggleCount($event)'>\n        <span class=\"fa fa-thumbs-up\" *ngIf=\"thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-up selected\" *ngIf=\"thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down\" *ngIf=\"!thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down selected\" *ngIf=\"!thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"counts\" *ngIf=\"showCount\" [textContent]=\"formatterSource()\"></span>\n    </a>",
                    styles: ["\n        :host {display: table;position: relative}\n        .like {cursor: pointer;}\n        .like .counts{margin-left: 5px;}\n        .like .fa {margin: 0;}\n        .like .fa.selected {color: green;}\n        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}\n        "]
                }] }
    ];
    return LikeComponent;
}());
export { LikeComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21wb25lbnRzL2xpa2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O3NCQXVDM0MsRUFBRTtxQ0FDVSxJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7SUFFdkMsaUNBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxH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QGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWtlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgXHJcbiAgICAgICAgaWQ9J2xpa2Ute3tpZH19JyBcclxuICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICBjbGFzcz1cImxpa2VcIiBcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIiBcclxuICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIFxyXG4gICAgICAgIChjbGljayk9J3RvZ2dsZUNvdW50KCRldmVudCknPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwXCIgKm5nSWY9XCJ0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtdXAgc2VsZWN0ZWRcIiAqbmdJZj1cInRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLWRvd25cIiAqbmdJZj1cIiF0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtZG93biBzZWxlY3RlZFwiICpuZ0lmPVwiIXRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRzXCIgKm5nSWY9XCJzaG93Q291bnRcIiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVyU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L2E+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTogdGFibGU7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgICAgIC5saWtlIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAgIC5saWtlIC5jb3VudHN7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAgICAgLmxpa2UgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgICAgIC5saWtlIC5mYS5zZWxlY3RlZCB7Y29sb3I6IGdyZWVuO31cclxuICAgICAgICAubGlrZTpob3ZlciwgLmxpa2U6aG92ZXIgLmZhLCAubGlrZTpob3ZlciAuZmEuc2VsZWN0ZWR7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpa2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRhdGE6IGFueTtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93Q291bnQ6IGJvb2xlYW47XHJcbiAgICB0aHVtYnN1cDogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB0aHVtYnMgPSBcIlwiO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvdW50ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLnRodW1ic3VwID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxICYmIGFyZ3NbMV0gPT09ICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aHVtYnMgPSB0aGlzLnRodW1ic3VwID8gXCJ0aHVtYnMtdXAtaXRlbXNcIiA6IFwidGh1bWJzLWRvd24taXRlbXNcIjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gKHRoaXMuZ2V0SXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKSAhPT0gbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIGtleXVwKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZEl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgc2F2ZWRJdGVtcy5wdXNoKGlkKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShzYXZlZEl0ZW1zKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShbaWRdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc291cmNlICsrO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1vdmVJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIGNvbnN0IGkgPSBzYXZlZEl0ZW1zLmluZGV4T2YoaWQpO1xyXG4gICAgICAgICAgc2F2ZWRJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICBcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShzYXZlZEl0ZW1zKSk7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZSAtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXM6IGFueVtdID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBjb25zdCBpID0gc2F2ZWRJdGVtcy5pbmRleE9mKGlkKTtcclxuICAgIFxyXG4gICAgICAgICAgZm91bmQgPSBpIDwgMCA/IG51bGwgOiBzYXZlZEl0ZW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybWF0dGVyU291cmNlKCkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291cmNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc291cmNlID4gMTAwMCkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9ICh0aGlzLnNvdXJjZS8xMDAwKS50b0ZpeGVkKDEpICsgXCIga1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHRvZ2dsZUNvdW50KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLnRodW1ic1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9Il19