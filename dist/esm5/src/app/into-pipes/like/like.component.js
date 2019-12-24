import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.thumbs = "";
        this.onIntoComponentChange = new EventEmitter();
    }
    LikeComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
    };
    LikeComponent.prototype.keyup = function (event) {
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    LikeComponent.prototype.addItem = function (id) {
        var saved = localStorage.getItem(this.thumbs);
        if (saved) {
            var savedItems = JSON.parse(saved);
            savedItems.push(id);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
        }
        else {
            localStorage.setItem(this.thumbs, JSON.stringify([id]));
        }
        this.source++;
    };
    LikeComponent.prototype.removeItem = function (id) {
        var saved = localStorage.getItem(this.thumbs);
        if (saved) {
            var savedItems = JSON.parse(saved);
            var i = savedItems.indexOf(id);
            savedItems.splice(i, 1);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
            this.source--;
        }
    };
    LikeComponent.prototype.getItem = function (id) {
        var saved = localStorage.getItem(this.thumbs);
        var found = null;
        if (saved) {
            var savedItems = JSON.parse(saved);
            var i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    };
    LikeComponent.prototype.formatterSource = function () {
        var result = this.source;
        if (this.source > 1000) {
            result = (this.source / 1000).toFixed(1) + " k";
        }
        return result;
    };
    LikeComponent.prototype.toggleCount = function (event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        if (this.selected) {
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
            type: "change",
            item: this.data,
            selected: this.selected,
            action: this.thumbs
        });
    };
    LikeComponent = tslib_1.__decorate([
        Component({
            selector: 'like-component',
            template: "\n    <a \n        id='like-{{id}}' \n        tabindex=\"0\" \n        class=\"like\" \n        [class.selected]=\"selected\" \n        (keyup)=\"keyup($event)\" \n        (click)='toggleCount($event)'>\n        <span class=\"fa fa-thumbs-up\" *ngIf=\"thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-up selected\" *ngIf=\"thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down\" *ngIf=\"!thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down selected\" *ngIf=\"!thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"counts\" *ngIf=\"showCount\" [textContent]=\"formatterSource()\"></span>\n    </a>",
            styles: ["\n        :host {display:table;float:left;min-height: 23px;position: relative}\n        .like {cursor: pointer;}\n        .like .counts{margin-left: 5px;}\n        .like .fa {margin: 0;}\n        .like .fa.selected {color: green;}\n        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}\n        "]
        })
    ], LikeComponent);
    return LikeComponent;
}());
export { LikeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9saWtlL2xpa2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQThCeEQ7SUEzQkE7UUFvQ0ksV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNmLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFrRnhDLENBQUM7SUFoRkQsaUNBQVMsR0FBVCxVQUFVLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMs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QUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0ZNLGFBQWE7UUEzQnpCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLG91QkFhTDtxQkFFRCxtVUFPQztTQUVSLENBQUM7T0FDVyxhQUFhLENBNEZyQjtJQUFELG9CQUFDO0NBQUEsQUE1RkwsSUE0Rks7U0E1RlEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpa2UtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBcclxuICAgICAgICBpZD0nbGlrZS17e2lkfX0nIFxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgIGNsYXNzPVwibGlrZVwiIFxyXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJzZWxlY3RlZFwiIFxyXG4gICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgXHJcbiAgICAgICAgKGNsaWNrKT0ndG9nZ2xlQ291bnQoJGV2ZW50KSc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtdXBcIiAqbmdJZj1cInRodW1ic3VwICYmICFzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy11cCBzZWxlY3RlZFwiICpuZ0lmPVwidGh1bWJzdXAgJiYgc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtZG93blwiICpuZ0lmPVwiIXRodW1ic3VwICYmICFzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy1kb3duIHNlbGVjdGVkXCIgKm5nSWY9XCIhdGh1bWJzdXAgJiYgc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudHNcIiAqbmdJZj1cInNob3dDb3VudFwiIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZXJTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvYT5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAgICAgLmxpa2Uge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAgICAgLmxpa2UgLmNvdW50c3ttYXJnaW4tbGVmdDogNXB4O31cclxuICAgICAgICAubGlrZSAuZmEge21hcmdpbjogMDt9XHJcbiAgICAgICAgLmxpa2UgLmZhLnNlbGVjdGVkIHtjb2xvcjogZ3JlZW47fVxyXG4gICAgICAgIC5saWtlOmhvdmVyLCAubGlrZTpob3ZlciAuZmEsIC5saWtlOmhvdmVyIC5mYS5zZWxlY3RlZHtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlrZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBhbnk7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZGF0YTogYW55O1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNob3dDb3VudDogYm9vbGVhbjtcclxuICAgIHRodW1ic3VwOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHRodW1icyA9IFwiXCI7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zaG93Q291bnQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCAmJiBhcmdzWzBdID09PSAndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMudGh1bWJzdXAgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEgJiYgYXJnc1sxXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLmtleSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICB0aGlzLnRodW1icyA9IHRoaXMudGh1bWJzdXAgPyBcInRodW1icy11cC1pdGVtc1wiIDogXCJ0aHVtYnMtZG93bi1pdGVtc1wiO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAodGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pICE9PSBudWxsKTtcclxuICAgICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIHNhdmVkSXRlbXMucHVzaChpZCk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRJdGVtcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoW2lkXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdXJjZSArKztcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVtb3ZlSXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRodW1icyk7XHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBjb25zdCBpID0gc2F2ZWRJdGVtcy5pbmRleE9mKGlkKTtcclxuICAgICAgICAgIHNhdmVkSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRJdGVtcykpO1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zOiBhbnlbXSA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgY29uc3QgaSA9IHNhdmVkSXRlbXMuaW5kZXhPZihpZCk7XHJcbiAgICBcclxuICAgICAgICAgIGZvdW5kID0gaSA8IDAgPyBudWxsIDogc2F2ZWRJdGVtc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1hdHRlclNvdXJjZSgpIHtcclxuICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZTtcclxuICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSA+IDEwMDApIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSAodGhpcy5zb3VyY2UvMTAwMCkudG9GaXhlZCgxKSArIFwiIGtcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICB0b2dnbGVDb3VudChldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogXCJjaGFuZ2VcIixcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLnRodW1ic1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9Il19