import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.headers = [];
        this.rows = [];
        this.onIntoComponentChange = new EventEmitter();
    }
    TableComponent.prototype.transform = function (source, data, args) {
        var _this = this;
        this.source = source;
        this.id = args.length ? args[0] : '';
        this.name = args.length > 1 ? args[1] : undefined;
        if (typeof source === 'object') {
            this.rows.push(source);
            this.getHeaders(source);
        }
        else if (source instanceof Array) {
            if (typeof source[0] === 'object') {
                this.rows = source;
                this.getHeaders(source[0]);
            }
            else {
                source.map(function (item) {
                    _this.rows.push({ value: item });
                });
                this.headers.push('value');
            }
        }
        else {
            this.rows.push({ value: source });
            this.headers.push('value');
        }
    };
    TableComponent.prototype.getHeaders = function (obj) {
        var _this = this;
        Object.keys(obj).map(function (item) {
            _this.headers.push(item);
        });
    };
    TableComponent = tslib_1.__decorate([
        Component({
            selector: 'table-component',
            template: "\n    <table [id]=\"id\" class=\"piped-table\">\n        <caption *ngIf=\"name\" [textContent]=\"name\"></caption>\n        <tr><th scope=\"col\" *ngFor=\"let header of headers\" [textContent]=\"header\"></th></tr>\n        <tr *ngFor=\"let row of rows\"><td *ngFor=\"let header of headers\" [textContent]=\"row[header]\"></td></tr>\n    </table>\n    ",
            styles: ["\n        :host .piped-table {padding: 0;width: 100%;border-collapse: collapse;}\n        :host .piped-table caption {background-color: #c3e5e2;border-radius: 2px;color: #1b1b1b;caption-side: top;font-size: 14px;padding: 5px 6px;margin-bottom: 15px;text-align: left;}\n        :host .piped-table th {user-select: none;height: 24px;position: relative;white-space: nowrap;font-weight: normal;text-transform: uppercase;font-size: 14px;padding-top: 6px;padding-bottom: 6px;text-align: left;}\n        :host .piped-table td {padding-left: 3px;min-height: 21px;}\n        "]
        })
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFCeEQ7SUFsQkE7UUFzQkksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDYiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBa0M1QyxDQUFDO0lBaENHLGtDQUFTLEdBQVQsVUFBVSxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFBN0MsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFakQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjthQUFNLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUNoQyxJQUFJLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FDTixVQUFDLElBQUk7b0JBQ0QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUNKLENBQUE7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUI7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFDTyxtQ0FBVSxHQUFsQixVQUFtQixHQUFRO1FBQTNCLGlCQU1DO1FBTEcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQ2hCLFVBQUMsSUFBSTtZQUNELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQXZDUSxjQUFjO1FBbEIxQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxrV0FNVDtxQkFFRyx3akJBS0M7U0FFUixDQUFDO09BQ1csY0FBYyxDQXdDMUI7SUFBRCxxQkFBQztDQUFBLEFBeENELElBd0NDO1NBeENZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0YWJsZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDx0YWJsZSBbaWRdPVwiaWRcIiBjbGFzcz1cInBpcGVkLXRhYmxlXCI+XHJcbiAgICAgICAgPGNhcHRpb24gKm5nSWY9XCJuYW1lXCIgW3RleHRDb250ZW50XT1cIm5hbWVcIj48L2NhcHRpb24+XHJcbiAgICAgICAgPHRyPjx0aCBzY29wZT1cImNvbFwiICpuZ0Zvcj1cImxldCBoZWFkZXIgb2YgaGVhZGVyc1wiIFt0ZXh0Q29udGVudF09XCJoZWFkZXJcIj48L3RoPjwvdHI+XHJcbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93c1wiPjx0ZCAqbmdGb3I9XCJsZXQgaGVhZGVyIG9mIGhlYWRlcnNcIiBbdGV4dENvbnRlbnRdPVwicm93W2hlYWRlcl1cIj48L3RkPjwvdHI+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCAucGlwZWQtdGFibGUge3BhZGRpbmc6IDA7d2lkdGg6IDEwMCU7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTt9XHJcbiAgICAgICAgOmhvc3QgLnBpcGVkLXRhYmxlIGNhcHRpb24ge2JhY2tncm91bmQtY29sb3I6ICNjM2U1ZTI7Ym9yZGVyLXJhZGl1czogMnB4O2NvbG9yOiAjMWIxYjFiO2NhcHRpb24tc2lkZTogdG9wO2ZvbnQtc2l6ZTogMTRweDtwYWRkaW5nOiA1cHggNnB4O21hcmdpbi1ib3R0b206IDE1cHg7dGV4dC1hbGlnbjogbGVmdDt9XHJcbiAgICAgICAgOmhvc3QgLnBpcGVkLXRhYmxlIHRoIHt1c2VyLXNlbGVjdDogbm9uZTtoZWlnaHQ6IDI0cHg7cG9zaXRpb246IHJlbGF0aXZlO3doaXRlLXNwYWNlOiBub3dyYXA7Zm9udC13ZWlnaHQ6IG5vcm1hbDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO2ZvbnQtc2l6ZTogMTRweDtwYWRkaW5nLXRvcDogNnB4O3BhZGRpbmctYm90dG9tOiA2cHg7dGV4dC1hbGlnbjogbGVmdDt9XHJcbiAgICAgICAgOmhvc3QgLnBpcGVkLXRhYmxlIHRkIHtwYWRkaW5nLWxlZnQ6IDNweDttaW4taGVpZ2h0OiAyMXB4O31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaGVhZGVycyA9IFtdO1xyXG4gICAgcm93cyA9IFtdO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuaWQ9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6ICcnO1xyXG4gICAgICAgIHRoaXMubmFtZT0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm93cy5wdXNoKHNvdXJjZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SGVhZGVycyhzb3VyY2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbMF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEhlYWRlcnMoc291cmNlWzBdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2goe3ZhbHVlOiBpdGVtfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvd3MucHVzaCh7dmFsdWU6IHNvdXJjZX0pO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMucHVzaCgndmFsdWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEhlYWRlcnMob2JqOiBhbnkpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhvYmopLm1hcChcclxuICAgICAgICAgICAgKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVycy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=