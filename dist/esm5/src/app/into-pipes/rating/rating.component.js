import * as tslib_1 from "tslib";
import { Component, EventEmitter, ElementRef, HostListener } from '@angular/core';
var RatingComponent = /** @class */ (function () {
    function RatingComponent(el) {
        this.el = el;
        this.singleStar = false;
        this.value = [];
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    RatingComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    RatingComponent.prototype.click = function () {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'rating'
        });
    };
    RatingComponent.prototype.transform = function (source, data, args) {
        this.float = parseFloat(source);
        this.singleStar = args.length ? (args[0] === 'true') : false;
        this.source = source;
        var size = parseInt(source, 10);
        for (var i = 0; i < size; i++) {
            this.value.push(i);
        }
    };
    RatingComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        HostListener('keyup', ['$event'])
    ], RatingComponent.prototype, "keyup", null);
    tslib_1.__decorate([
        HostListener('click', [])
    ], RatingComponent.prototype, "click", null);
    RatingComponent = tslib_1.__decorate([
        Component({
            selector: 'rating-component',
            template: "\n    <span class='rating' *ngIf=\"singleStar\">\n        <span class='fa fa-star' aria-hidden='true'></span>\n    </span>\n    <span class='rating' *ngIf=\"!singleStar\">\n        <span class='fa fa-star' aria-hidden='true' *ngFor=\"let x of value\"></span>\n        <span class='fa fa-star-half' aria-hidden='true' *ngIf=\"float != value\"></span>\n    </span>\n    <span class='rate-value' [textContent]=\"source\"></span>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px;cursor:pointer}\n        .rating {\n            display: inline-block;\n        }\n        @media print {\n            :host .rating {\n                display: none;\n            }\n        }\n        "]
        })
    ], RatingComponent);
    return RatingComponent;
}());
export { RatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNkJsRjtJQVNJLHlCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUxsQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFVBQUssR0FBVSxFQUFFLENBQUM7UUFFckIsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdwQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUdELCtCQUFLLEdBQUwsVUFBTSxLQUFVO1FBQ1osSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELG1DQUFTLEdBQVQsVUFBVSxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7O2dCQWhDdUIsVUFBVTs7SUFLbEM7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0RBU2hDO0lBRUQ7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQztnREFTeEI7SUFoQ1EsZUFBZTtRQTFCM0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsaWJBU1Q7cUJBRUcsdVFBVUM7U0FFUixDQUFDO09BQ1csZUFBZSxDQTBDM0I7SUFBRCxzQkFBQztDQUFBLEFBMUNELElBMENDO1NBMUNZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JhdGluZy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPSdyYXRpbmcnICpuZ0lmPVwic2luZ2xlU3RhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGluZycgKm5nSWY9XCIhc2luZ2xlU3RhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZScgKm5nRm9yPVwibGV0IHggb2YgdmFsdWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXItaGFsZicgYXJpYS1oaWRkZW49J3RydWUnICpuZ0lmPVwiZmxvYXQgIT0gdmFsdWVcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZScgW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4O2N1cnNvcjpwb2ludGVyfVxyXG4gICAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBwcmludCB7XHJcbiAgICAgICAgICAgIDpob3N0IC5yYXRpbmcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaW5nbGVTdGFyID0gZmFsc2U7XHJcbiAgICB2YWx1ZTogYW55W10gPSBbXTtcclxuICAgIGZsb2F0OiBhbnk7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpe1xyXG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJzAnKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXl1cCcsWyckZXZlbnQnXSlcclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsW10pXHJcbiAgICBjbGljaygpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiAnY2xpY2snLFxyXG4gICAgICAgICAgICBpdGVtOiAncmF0aW5nJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLmZsb2F0ID0gcGFyc2VGbG9hdChzb3VyY2UpO1xyXG4gICAgICAgIHRoaXMuc2luZ2xlU3RhciA9IGFyZ3MubGVuZ3RoID8gKGFyZ3NbMF0gPT09ICd0cnVlJykgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==