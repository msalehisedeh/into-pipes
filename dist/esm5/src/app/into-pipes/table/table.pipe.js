/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TablePipe = /** @class */ (function () {
    function TablePipe() {
    }
    /**
     * @return {?}
     */
    TablePipe.transformationMethod = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = function (content, args, callback, data) {
            return new TablePipe().transform(content, args.length > 1 ? args[1] : '', args.length > 2 ? args[2] : undefined);
        };
        return x;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    TablePipe.prototype.transform = /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var id = args.length ? args[0] : '';
        /** @type {?} */
        var name = args.length > 1 ? args[1] : undefined;
        /** @type {?} */
        var headers = [];
        /** @type {?} */
        var rows = [];
        this.buildTable(source, rows, headers);
        /** @type {?} */
        var result = "<table style='width: 100%' id='" + id + "'>" + (name ? "<caption style='text-align:left;background-color: #c3e5e2;'>" + name + "</caption>" : "") + "<tr>";
        headers.map(function (header) {
            result += ("<th style='text-align: left;font-weight:normal;text-transform: uppercase;' scope='col'>" + header + "</th>");
        });
        result += "</tr>";
        rows.map(function (row) {
            result += "<tr>";
            headers.map(function (header) {
                result += ("<td>" + row[header] + "</td>");
            });
            result += "</tr>";
        });
        result += "</table>";
        return result;
    };
    /**
     * @param {?} source
     * @param {?} rows
     * @param {?} headers
     * @return {?}
     */
    TablePipe.prototype.buildTable = /**
     * @param {?} source
     * @param {?} rows
     * @param {?} headers
     * @return {?}
     */
    function (source, rows, headers) {
        if (typeof source === 'object') {
            rows.push(source);
            this.getHeaders(source, headers);
        }
        else if (source instanceof Array) {
            if (typeof source[0] === 'object') {
                rows = source;
                this.getHeaders(source[0], headers);
            }
            else {
                source.map(function (item) {
                    rows.push({ value: item });
                });
                headers.push('value');
            }
        }
        else {
            rows.push({ value: source });
            headers.push('value');
        }
    };
    /**
     * @param {?} obj
     * @param {?} headers
     * @return {?}
     */
    TablePipe.prototype.getHeaders = /**
     * @param {?} obj
     * @param {?} headers
     * @return {?}
     */
    function (obj, headers) {
        Object.keys(obj).map(function (item) {
            headers.push(item);
        });
    };
    TablePipe.decorators = [
        { type: Pipe, args: [{ name: 'table' },] }
    ];
    return TablePipe;
}());
export { TablePipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3RhYmxlL3RhYmxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBSXpDLDhCQUFvQjs7O0lBQTNCOztRQUNJLElBQU0sQ0FBQyxHQUFHLFVBQVUsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTtZQUN4RSxNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwSCxDQUFDO1FBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNaOzs7Ozs7SUFDRCw2QkFBUzs7Ozs7SUFBVCxVQUFVLE1BQVc7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7UUFDakMsSUFBTSxFQUFFLEdBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQ3JDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs7UUFDbkQsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDOztRQUNuQixJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztRQUN2QyxJQUFJLE1BQU0sR0FBRyxpQ0FBaUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4REFBOEQsR0FBRyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDekssT0FBTyxDQUFDLEdBQUcsQ0FDUCxVQUFDLE1BQU07WUFDSCxNQUFNLElBQUksQ0FBQyx5RkFBeUYsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDNUgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxJQUFJLE9BQU8sQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUNKLFVBQUMsR0FBRztZQUNBLE1BQU0sSUFBSSxNQUFNLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FDUCxVQUFDLE1BQU07Z0JBQ0gsTUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQzthQUM5QyxDQUNKLENBQUM7WUFDRixNQUFNLElBQUksT0FBTyxDQUFDO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sSUFBSSxVQUFVLENBQUM7UUFFckIsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs7Ozs7OztJQUNPLDhCQUFVOzs7Ozs7Y0FBQyxNQUFXLEVBQUUsSUFBVyxFQUFFLE9BQWlCO1FBQzFELEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNwQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLEdBQUcsQ0FDTixVQUFDLElBQUk7b0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2lCQUM1QixDQUNKLENBQUE7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QjtTQUNKO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6Qjs7Ozs7OztJQUVHLDhCQUFVOzs7OztjQUFDLEdBQVEsRUFBRSxPQUFpQjtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FDaEIsVUFBQyxJQUFJO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QixDQUNKLENBQUM7OztnQkEvRFQsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7b0JBTHZCOztTQU1hLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBhZGRyZXNzIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RhYmxlJyB9KVxyXG5leHBvcnQgY2xhc3MgVGFibGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRhYmxlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogJycsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiB1bmRlZmluZWQpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgaWQ9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6ICcnO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBbXTtcclxuICAgICAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRUYWJsZShzb3VyY2UsIHJvd3MsIGhlYWRlcnMpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIjx0YWJsZSBzdHlsZT0nd2lkdGg6IDEwMCUnIGlkPSdcIiArIGlkICsgXCInPlwiICsgKG5hbWUgPyBcIjxjYXB0aW9uIHN0eWxlPSd0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjogI2MzZTVlMjsnPlwiICsgbmFtZSArIFwiPC9jYXB0aW9uPlwiIDogXCJcIikgKyBcIjx0cj5cIjtcclxuICAgICAgICBoZWFkZXJzLm1hcChcclxuICAgICAgICAgICAgKGhlYWRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IChcIjx0aCBzdHlsZT0ndGV4dC1hbGlnbjogbGVmdDtmb250LXdlaWdodDpub3JtYWw7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsnIHNjb3BlPSdjb2wnPlwiICsgaGVhZGVyICsgXCI8L3RoPlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiPC90cj5cIjtcclxuICAgICAgICByb3dzLm1hcChcclxuICAgICAgICAgICAgKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiPHRyPlwiO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGhlYWRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gKFwiPHRkPlwiICsgcm93W2hlYWRlcl0gKyBcIjwvdGQ+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCI8L3RyPlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXN1bHQgKz0gXCI8L3RhYmxlPlwiO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBidWlsZFRhYmxlKHNvdXJjZTogYW55LCByb3dzOiBhbnlbXSwgaGVhZGVyczogc3RyaW5nW10pIHtcclxuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcm93cy5wdXNoKHNvdXJjZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SGVhZGVycyhzb3VyY2UsIGhlYWRlcnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbMF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzID0gc291cmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRIZWFkZXJzKHNvdXJjZVswXSwgaGVhZGVycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaCh7dmFsdWU6IGl0ZW19KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3dzLnB1c2goe3ZhbHVlOiBzb3VyY2V9KTtcclxuICAgICAgICAgICAgaGVhZGVycy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SGVhZGVycyhvYmo6IGFueSwgaGVhZGVyczogc3RyaW5nW10pIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhvYmopLm1hcChcclxuICAgICAgICAgICAgKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19