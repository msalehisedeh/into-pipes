/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    /**
     * @param {?} source
     * @param {?} link
     * @param {?} format
     * @return {?}
     */
    PhonePipe.prototype.phoneFromString = /**
     * @param {?} source
     * @param {?} link
     * @param {?} format
     * @return {?}
     */
    function (source, link, format) {
        return link ?
            "<a href='tel:" + this.normalizeSource(source) + "'><span class='fa fa-phone' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></a>" :
            "<span><span class='fa fa-phone' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></span>";
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    PhonePipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var link = ((args && args.length) ? args[0] : false);
        /** @type {?} */
        var format = ((args && args.length > 1) ? args[1] : false);
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.phoneFromString(source, link, format);
        }
        else {
            /** @type {?} */
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.phoneFromString(item, link, format));
            });
            return result_1;
        }
    };
    /**
     * @param {?} source
     * @return {?}
     */
    PhonePipe.prototype.normalizeSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            /** @type {?} */
            var b = result.slice(0, 10);
            /** @type {?} */
            var e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    PhonePipe.prototype.formattedSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        }
        else if (result.length > 10) {
            /** @type {?} */
            var b = result.slice(0, 10);
            /** @type {?} */
            var e = result.slice(10);
            result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            result += (' ext. ' + e);
        }
        return result;
    };
    PhonePipe.decorators = [
        { type: Pipe, args: [{ name: 'phone' },] }
    ];
    return PhonePipe;
}());
export { PhonePipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL3Bob25lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lBS2hELG1DQUFlOzs7Ozs7SUFBZixVQUFnQixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU07UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1QsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsOERBQThELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO1lBQ3BMLGtFQUFrRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztLQUNoSjs7Ozs7O0lBQ0QsNkJBQVM7Ozs7O0lBQVQsVUFBVSxNQUFXO1FBQXJCLGlCQVlDO1FBWnNCLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7OztRQUNqQyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFDdkQsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FB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O29CQUx2Qjs7U0FNYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gZW1haWwgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncGhvbmUnIH0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBwaG9uZUZyb21TdHJpbmcoc291cmNlLCBsaW5rLCBmb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gbGluayA/IFxyXG4gICAgICAgICAgICBcIjxhIGhyZWY9J3RlbDpcIiArIHRoaXMubm9ybWFsaXplU291cmNlKHNvdXJjZSkgKyBcIic+PHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPjxzcGFuPlwiICsgKGZvcm1hdCA/IHRoaXMuZm9ybWF0dGVkU291cmNlKHNvdXJjZSkgOiBzb3VyY2UpICsgXCI8L3NwYW4+PC9hPlwiIDpcclxuICAgICAgICAgICAgXCI8c3Bhbj48c3BhbiBjbGFzcz0nZmEgZmEtcGhvbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyAoZm9ybWF0ID8gdGhpcy5mb3JtYXR0ZWRTb3VyY2Uoc291cmNlKSA6IHNvdXJjZSkgKyBcIjwvc3Bhbj48L3NwYW4+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgICAgXHJcbiAgICAgICAgY29uc3QgbGluayA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aD4xKSA/IGFyZ3NbMV0gOiBmYWxzZSk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waG9uZUZyb21TdHJpbmcoc291cmNlLCBsaW5rLCBmb3JtYXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnBob25lRnJvbVN0cmluZyhpdGVtLCBsaW5rLCBmb3JtYXQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIHByaXZhdGUgbm9ybWFsaXplU291cmNlKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQgKyAnO2V4dD0nICsgcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxJyArIGIgKyAnO2V4dD0nICsgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9ybWF0dGVkU291cmNlKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyBiLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sIFwiKCQxKSQyLSQzXCIpOyBcclxuICAgICAgICAgICAgcmVzdWx0Kz0gKCcgZXh0LiAnICsgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIl19