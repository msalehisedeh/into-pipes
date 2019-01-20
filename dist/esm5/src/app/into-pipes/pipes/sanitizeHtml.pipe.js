/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    SanitizeHtmlPipe.prototype.transform = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sanitizeHtml'
                },] }
    ];
    /** @nocollapse */
    SanitizeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SanitizeHtmlPipe;
}());
export { SanitizeHtmlPipe };
if (false) {
    /** @type {?} */
    SanitizeHtmlPipe.prototype._sanitizer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVIdG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9waXBlcy9zYW5pdGl6ZUh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDOztJQU9qRSwwQkFBb0IsVUFBdUI7UUFBdkIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtLQUMxQzs7Ozs7SUFFRCxvQ0FBUzs7OztJQUFULFVBQVUsQ0FBUTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuRDs7Z0JBVkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxjQUFjO2lCQUNyQjs7OztnQkFKUSxZQUFZOzsyQkFOckI7O1NBV2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBUYWtlcyBjYXJlIG9mIHByb2JsZW0gd2l0aCBzZWN1cml0eSBwcmVjYXVzaW9ucyB0aGF0IHN0cmlwIG91dCBjZXJ0YWluIGNoYXJhY3RlcnMgXHJcbiogZnJvbSBlbmQgcmVzdWx0IG9mIHlvdXIgcmVxdWVzdHMuXHJcbiogY29kZSB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM5NjgxMTYzL2FuZ3VsYXItMi1zYW5pdGl6aW5nLWh0bWwtc3RyaXBwZWQtc29tZS1jb250ZW50LXdpdGgtZGl2LWlkLXRoaXMtaXMtYnVnLW9yLWZlXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3Nhbml0aXplSHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhbml0aXplSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2FuaXRpemVyOkRvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHY6c3RyaW5nKTpTYWZlSHRtbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHYpO1xyXG4gIH1cclxufSJdfQ==