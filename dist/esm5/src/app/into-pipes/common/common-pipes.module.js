import * as tslib_1 from "tslib";
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { AppendPipe } from './append.pipe';
import { ConditionalPipe } from './conditional.pipe';
import { JoinPipe } from './join.pipe';
import { MapPipe } from './map.pipe';
import { MaskPipe } from './mask.pipe';
import { PrependPipe } from './prepend.pipe';
import { SanitizeHtmlPipe } from './sanitizeHtml.pipe';
import { ValueOfPipe } from './valueof.pipe';
import { WrapPipe } from './wrap.pipe';
import { InToPipe } from './into.pipe';
import { IntoDirective } from './into.directive';
import { ComponentPool } from './component.pool';
var CommonPipesModule = /** @class */ (function () {
    function CommonPipesModule(pool) {
        pool.registerPipeTransformation('append', AppendPipe.transformationMethod());
        pool.registerPipeTransformation('if', ConditionalPipe.transformationMethod());
        pool.registerPipeTransformation('join', JoinPipe.transformationMethod());
        pool.registerPipeTransformation('map', MapPipe.transformationMethod());
        pool.registerPipeTransformation('mask', MaskPipe.transformationMethod());
        pool.registerPipeTransformation('prepend', PrependPipe.transformationMethod());
        pool.registerPipeTransformation('valueof', ValueOfPipe.transformationMethod());
        pool.registerPipeTransformation('wrap', WrapPipe.transformationMethod());
        pool.registerPipeTransformation('slice', function (content, args, callback, data) {
            // slice 5:12 OR slice 5
            var result;
            var start = parseInt(args[1], 10);
            var end = undefined;
            if (args.length > 2) {
                end = parseInt(args[2], 10);
            }
            var slicer = new SlicePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = end ? slicer.transform(content, start, end) : slicer.transform(content, start);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(end ? slicer.transform(cnt, start, end) : slicer.transform(cnt, start));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('number', function (content, args, callback, data) {
            // number:en_US:2   or number:en_US or number
            var result;
            var numLocal = "en_US";
            var numDecimal = undefined;
            if (args.length > 2) {
                numLocal = args[1];
                numDecimal = args[2];
            }
            var decimaler = new DecimalPipe(numLocal);
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = numDecimal ? decimaler.transform(content, numDecimal) : decimaler.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(numDecimal ? decimaler.transform(cnt, numDecimal) : decimaler.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('currency', function (content, args, callback, data) {
            // currency:en_US or currency
            var result;
            var cp = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = cp.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(cp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('lowercase', function (content, args, callback, data) {
            // lowercase
            var result;
            var lcp = new LowerCasePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = lcp.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(lcp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('uppercase', function (content, args, callback, data) {
            // uppercase
            var result;
            var ucp = new UpperCasePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = ucp.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(ucp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('json', function (content, args, callback, data) {
            // json
            var result;
            var jcp = new JsonPipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = jcp.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(jcp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('date', function (content, args, callback, data) {
            // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
            // const date = ((typeof content === "string") || !(content instanceof Array)) ? new Date(content) : content;
            var result;
            var dateLocal = "en_US";
            var dateFormat = args[1];
            if (args.length > 2) {
                dateLocal = args[1];
                dateFormat = args[2];
            }
            var dater = new DatePipe(dateLocal);
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = dater.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(dater.transform(cnt));
                });
            }
            return result;
        });
    }
    CommonPipesModule_1 = CommonPipesModule;
    CommonPipesModule.forRoot = function () {
        return {
            ngModule: CommonPipesModule_1,
            providers: [
                DatePipe,
                CurrencyPipe,
                DecimalPipe,
                JsonPipe,
                SlicePipe,
                UpperCasePipe,
                LowerCasePipe,
                AppendPipe,
                ConditionalPipe,
                JoinPipe,
                MapPipe,
                MaskPipe,
                PrependPipe,
                SanitizeHtmlPipe,
                ValueOfPipe,
                WrapPipe,
                ComponentPool,
                InToPipe
            ]
        };
    };
    var CommonPipesModule_1;
    CommonPipesModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
    CommonPipesModule = CommonPipesModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                AppendPipe,
                ConditionalPipe,
                JoinPipe,
                MapPipe,
                MaskPipe,
                PrependPipe,
                SanitizeHtmlPipe,
                ValueOfPipe,
                WrapPipe,
                InToPipe,
                IntoDirective
            ],
            exports: [
                AppendPipe,
                ConditionalPipe,
                JoinPipe,
                MapPipe,
                MaskPipe,
                PrependPipe,
                SanitizeHtmlPipe,
                ValueOfPipe,
                WrapPipe,
                InToPipe,
                IntoDirective
            ],
            entryComponents: [],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__param(0, Inject(ComponentPool))
    ], CommonPipesModule);
    return CommonPipesModule;
}());
export { CommonPipesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9jb21tb24tcGlwZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUNILFlBQVksRUFDWixRQUFRLEVBQ1IsWUFBWSxFQUNaLFdBQVcsRUFDWCxRQUFRLEVBQ1IsU0FBUyxFQUNULGFBQWEsRUFDYixhQUFhLEVBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXNDakQ7SUEyQkUsMkJBQW9DLElBQW1CO1FBQ3JELElBQUksQ0FBQywwQkFB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QU0sU0FBQyxhQUFhOztJQTNCdEIsaUJBQWlCO1FBakM3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZixRQUFRO2dCQUNSLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsV0FBVztnQkFDWCxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsYUFBYTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZixRQUFRO2dCQUNSLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsV0FBVztnQkFDWCxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsYUFBYTthQUNkO1lBQ0QsZUFBZSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDbEMsQ0FBQztRQTRCYSxtQkFBQSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7T0EzQnZCLGlCQUFpQixDQThLN0I7SUFBRCx3QkFBQztDQUFBLEFBOUtELElBOEtDO1NBOUtZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIEN1cnJlbmN5UGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gICAgSnNvblBpcGUsXHJcbiAgICBTbGljZVBpcGUsXHJcbiAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgTG93ZXJDYXNlUGlwZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge0FwcGVuZFBpcGV9IGZyb20gJy4vYXBwZW5kLnBpcGUnO1xyXG5pbXBvcnQge0NvbmRpdGlvbmFsUGlwZX0gZnJvbSAnLi9jb25kaXRpb25hbC5waXBlJztcclxuaW1wb3J0IHtKb2luUGlwZX0gZnJvbSAnLi9qb2luLnBpcGUnO1xyXG5pbXBvcnQge01hcFBpcGV9IGZyb20gJy4vbWFwLnBpcGUnO1xyXG5pbXBvcnQge01hc2tQaXBlfSBmcm9tICcuL21hc2sucGlwZSc7XHJcbmltcG9ydCB7UHJlcGVuZFBpcGV9IGZyb20gJy4vcHJlcGVuZC5waXBlJztcclxuaW1wb3J0IHtTYW5pdGl6ZUh0bWxQaXBlfSBmcm9tICcuL3Nhbml0aXplSHRtbC5waXBlJztcclxuaW1wb3J0IHtWYWx1ZU9mUGlwZX0gZnJvbSAnLi92YWx1ZW9mLnBpcGUnO1xyXG5pbXBvcnQge1dyYXBQaXBlfSBmcm9tICcuL3dyYXAucGlwZSc7XHJcbmltcG9ydCB7IEluVG9QaXBlIH0gZnJvbSAnLi9pbnRvLnBpcGUnO1xyXG5pbXBvcnQgeyBJbnRvRGlyZWN0aXZlIH0gZnJvbSAnLi9pbnRvLmRpcmVjdGl2ZSdcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwZW5kUGlwZSxcclxuICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgIEpvaW5QaXBlLFxyXG4gICAgTWFwUGlwZSxcclxuICAgIE1hc2tQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgVmFsdWVPZlBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIEluVG9QaXBlLFxyXG4gICAgSW50b0RpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQXBwZW5kUGlwZSxcclxuICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgIEpvaW5QaXBlLFxyXG4gICAgTWFwUGlwZSxcclxuICAgIE1hc2tQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgVmFsdWVPZlBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIEluVG9QaXBlLFxyXG4gICAgSW50b0RpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vblBpcGVzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb21tb25QaXBlc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRGF0ZVBpcGUsXHJcbiAgICAgICAgQ3VycmVuY3lQaXBlLFxyXG4gICAgICAgIERlY2ltYWxQaXBlLFxyXG4gICAgICAgIEpzb25QaXBlLFxyXG4gICAgICAgIFNsaWNlUGlwZSxcclxuICAgICAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgICAgIExvd2VyQ2FzZVBpcGUsXHJcbiAgICBcclxuICAgICAgICBBcHBlbmRQaXBlLFxyXG4gICAgICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgICAgICBKb2luUGlwZSxcclxuICAgICAgICBNYXBQaXBlLFxyXG4gICAgICAgIE1hc2tQaXBlLFxyXG4gICAgICAgIFByZXBlbmRQaXBlLFxyXG4gICAgICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICAgICAgVmFsdWVPZlBpcGUsXHJcbiAgICAgICAgV3JhcFBpcGUsXHJcbiAgICAgICAgQ29tcG9uZW50UG9vbCxcclxuICAgICAgICBJblRvUGlwZVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2FwcGVuZCcsIEFwcGVuZFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdpZicsIENvbmRpdGlvbmFsUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2pvaW4nLCBKb2luUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ21hcCcsIE1hcFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdtYXNrJywgTWFza1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdwcmVwZW5kJywgUHJlcGVuZFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd2YWx1ZW9mJywgVmFsdWVPZlBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd3cmFwJywgV3JhcFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignc2xpY2UnLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBzbGljZSA1OjEyIE9SIHNsaWNlIDVcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xyXG4gICAgICAgIGxldCBlbmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICBlbmQ9IHBhcnNlSW50KGFyZ3NbMl0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2xpY2VyID1uZXcgU2xpY2VQaXBlKCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGVuZCA/IHNsaWNlci50cmFuc2Zvcm0oY29udGVudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5kID8gc2xpY2VyLnRyYW5zZm9ybShjbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjbnQsIHN0YXJ0KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ251bWJlcicsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIG51bWJlcjplbl9VUzoyICAgb3IgbnVtYmVyOmVuX1VTIG9yIG51bWJlclxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBsZXQgbnVtTG9jYWwgPSBcImVuX1VTXCI7XHJcbiAgICAgICAgbGV0IG51bURlY2ltYWw9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIG51bUxvY2FsID0gYXJnc1sxXTtcclxuICAgICAgICAgICAgbnVtRGVjaW1hbD0gYXJnc1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbGVyID1uZXcgRGVjaW1hbFBpcGUobnVtTG9jYWwpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG51bURlY2ltYWwgPyBkZWNpbWFsZXIudHJhbnNmb3JtKGNudCwgbnVtRGVjaW1hbCkgOiBkZWNpbWFsZXIudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdjdXJyZW5jeScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGN1cnJlbmN5OmVuX1VTIG9yIGN1cnJlbmN5XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGNvbnN0IGNwID0gbmV3IEN1cnJlbmN5UGlwZShhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJlbl9VU1wiKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gY3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2xvd2VyY2FzZScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGxvd2VyY2FzZVxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBjb25zdCBsY3AgPSAgbmV3IExvd2VyQ2FzZVBpcGUoKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigndXBwZXJjYXNlJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gdXBwZXJjYXNlXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGNvbnN0IHVjcCA9ICBuZXcgVXBwZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB1Y3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh1Y3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdqc29uJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8ganNvblxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBjb25zdCBqY3AgPSAgbmV3IEpzb25QaXBlKCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGpjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGpjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2RhdGUnLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBkYXRlOmVuX1VTOk1NZGR5eSBPUiBkYXRlOlxcXCJNTS9kZC95eXl5IGhoOnNzXFxcIlxyXG4gICAgICAgIC8vIGNvbnN0IGRhdGUgPSAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpID8gbmV3IERhdGUoY29udGVudCkgOiBjb250ZW50O1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBsZXQgZGF0ZUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgIGxldCBkYXRlRm9ybWF0PSBhcmdzWzFdO1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgZGF0ZUxvY2FsID0gYXJnc1sxXTtcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdD0gYXJnc1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZXIgPW5ldyBEYXRlUGlwZShkYXRlTG9jYWwpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBkYXRlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRhdGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==