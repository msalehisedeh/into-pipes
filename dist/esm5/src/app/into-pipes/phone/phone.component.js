import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
var PhoneComponent = /** @class */ (function () {
    function PhoneComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    PhoneComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] === 'true' : false;
        this.formatting = args.length > 1 ? args[1] === 'true' : false;
    };
    PhoneComponent.prototype.normalizeSource = function () {
        var result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            var b = result.slice(0, 10);
            var e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    };
    PhoneComponent.prototype.formattedSource = function () {
        var result = this.source;
        if (this.formatting) {
            result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
            result = result[0] === '1' ? result.substring(1) : result;
            if (result.length === 10) {
                result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            }
            else if (result.length > 10) {
                var b = result.slice(0, 10);
                var e = result.slice(10);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                result += (' ext. ' + e);
            }
        }
        return result;
    };
    PhoneComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    PhoneComponent.prototype.change = function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: event.type
        });
    };
    PhoneComponent = tslib_1.__decorate([
        Component({
            selector: 'phone',
            template: "\n    <a  *ngIf=\"isLink\" [href]=\"'tel:' + normalizeSource()\" (keyup)='keyup($event)' (click)=\"change($event)\">\n        <span class='fa fa-phone' aria-hidden='true'></span>\n        <span [textContent]=\"formattedSource()\"></span>\n    </a>\n    <span *ngIf=\"!isLink\">\n        <span class='fa fa-phone' aria-hidden='true'></span>\n        <span [textContent]=\"formattedSource()\"></span>\n    </span>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        :host a:hover .fa-phone{color: #fabdab;}\n        :host .fa{margin: 0 5px;}\n        @media print {\n            :host a { text-decoration: none }\n            :host .fa-phone {display: none;}\n            :host a .fa-phone {display: none;}\n        }\n        "]
        })
    ], PhoneComponent);
    return PhoneComponent;
}());
export { PhoneComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGhvbmUvcGhvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTRCeEQ7SUF6QkE7UUErQkMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXdENUMsQ0FBQztJQXRERyxrQ0FBUyxHQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsRSxDQUFDO0lBQ0Qsd0NBQWUsR0FBZjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFMUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN0QixNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQzlDO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUMzQixJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QixJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0Qsd0NBQWUsR0FBZjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRCxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRTFELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7Z0JBQ3RCLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN6RTtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO2dCQUMzQixJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUIsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNqRSxNQUFNLElBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDRCw4QkFBSyxHQUFMLFVBQU0sS0FBVTtRQUNaLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDYixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUNELCtCQUFNLEdBQU4sVUFBTyxLQUFVO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdEUSxjQUFjO1FBekIxQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsbWFBU1Q7cUJBRUcsNFVBU0M7U0FFUixDQUFDO09BQ1csY0FBYyxDQThEMUI7SUFBRCxxQkFBQztDQUFBLEFBOURELElBOERDO1NBOURZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwaG9uZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgICpuZ0lmPVwiaXNMaW5rXCIgW2hyZWZdPVwiJ3RlbDonICsgbm9ybWFsaXplU291cmNlKClcIiAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJyAoY2xpY2spPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtcGhvbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImZvcm1hdHRlZFNvdXJjZSgpXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNMaW5rXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZWRTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0IGE6aG92ZXIgLmZhLXBob25le2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICA6aG9zdCAuZmF7bWFyZ2luOiAwIDVweDt9XHJcbiAgICAgICAgQG1lZGlhIHByaW50IHtcclxuICAgICAgICAgICAgOmhvc3QgYSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZSB9XHJcbiAgICAgICAgICAgIDpob3N0IC5mYS1waG9uZSB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAgICAgICAgIDpob3N0IGEgLmZhLXBob25lIHtkaXNwbGF5OiBub25lO31cclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpc0xpbms6IGJvb2xlYW47XHJcbiAgICBmb3JtYXR0aW5nOiBib29sZWFuO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdID09PSAndHJ1ZScgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmc9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gPT09ICd0cnVlJyA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU291cmNlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQgKyAnO2V4dD0nICsgcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxJyArIGIgKyAnO2V4dD0nICsgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGZvcm1hdHRlZFNvdXJjZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IHJlc3VsdC5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgYi5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCBcIigkMSkkMi0kM1wiKTsgXHJcbiAgICAgICAgICAgICAgICByZXN1bHQrPSAoJyBleHQuICcgKyBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogJ2NsaWNrJyxcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==