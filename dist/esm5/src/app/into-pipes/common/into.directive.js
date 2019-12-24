import * as tslib_1 from "tslib";
import { Directive, ViewContainerRef, ElementRef, Input, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ComponentPool } from './component.pool';
var IntoDirective = /** @class */ (function () {
    function IntoDirective(viewRef, el, pool, componentFactoryResolver) {
        this.viewRef = viewRef;
        this.el = el;
        this.pool = pool;
        this.componentFactoryResolver = componentFactoryResolver;
        this.onComponentChange = function (event) { };
    }
    IntoDirective.prototype.split = function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    IntoDirective.prototype._transform = function (content, args, data) {
        var result = content;
        if (this.pool.registeredForComponentWithNamed(args[0])) {
            var newArgs = args.splice(1, args.length);
            result = this.transformComponent.apply(this, tslib_1.__spread([args[0], content, this.intoId, this.intoName, data], newArgs));
        }
        else if (this.pool.registeredForPipeTransformationNamed(args[0])) {
            result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this), data);
        }
        else {
            // unknown formatter
            try {
                result = this.transformComponent(args[0], content, this.intoId, this.intoName, data, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "", args.length > 4 ? args[4] : "", args.length > 5 ? args[5] : "");
            }
            catch (x) {
                console.error(x);
            }
        }
        return result;
    };
    IntoDirective.prototype.transformComponent = function (type, content, id, name, data) {
        var _this = this;
        var args = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            args[_i - 5] = arguments[_i];
        }
        var result;
        if (content === undefined) {
            return "";
        }
        if (content instanceof Date || typeof content === "string" || typeof content === "number" || typeof content === "boolean" || Object.keys(content).length) {
            result = this.registeredComponentFor(type);
            if (result === null || result === undefined) {
                console.error("Custom component '" + type + "' is not defined.");
            }
            else {
                result.id = id;
                result.name = name;
                result.service = this.pool.registeredServiceForComponent(type);
                result.transform(content.source ? content.source : content, data, args);
                if (result.onIntoComponentChange && this.onComponentChange) {
                    result.onIntoComponentChange.subscribe(this.onComponentChange);
                }
            }
        }
        else if (content instanceof Array) {
            var counter_1 = 0;
            result = content;
            content.map(function (source) {
                if (typeof source === "string" ||
                    typeof content === "number" ||
                    typeof content === "boolean" ||
                    Object.keys(content).length) {
                    var sx = _this.registeredComponentFor(type);
                    if (sx === null || sx === undefined) {
                        console.error("Custom component '" + type + "' is not defined.");
                    }
                    else {
                        sx.id = id + '-' + (counter_1++);
                        sx.name = name;
                        sx.service = _this.pool.registeredServiceForComponent(type);
                        sx.transform(source.source ? source.source : source, data, args);
                        if (sx.onIntoComponentChange && _this.onComponentChange) {
                            sx.onIntoComponentChange.subscribe(_this.onComponentChange);
                        }
                    }
                }
            });
        }
        return result;
    };
    IntoDirective.prototype.registeredComponentFor = function (name) {
        return this.pool.registeredComponent(name, this.componentFactoryResolver, this.viewRef, this.el.nativeElement);
    };
    IntoDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.into || this.rawContent) {
            var result_1 = this.rawContent;
            if (this.into) {
                this.into.split("|").map(function (item) {
                    result_1 = _this._transform(result_1, _this.split(item), _this.intoData);
                });
            }
            if (typeof result_1 === "string") {
                var comp = this.registeredComponentFor("span");
                if (comp) {
                    comp.transform(result_1, [], this.intoData);
                }
                else {
                    console.error("Custom component 'span' is not defined.");
                }
            }
            else if (result_1 instanceof Array) {
                result_1.map(function (source) {
                    if (typeof source === "string") {
                        var comp = _this.registeredComponentFor("span");
                        if (comp) {
                            comp.transform(source, [], _this.intoData);
                        }
                        else {
                            console.error("Custom component 'span' is not defined.");
                        }
                    }
                });
            }
        }
    };
    IntoDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef },
        { type: ComponentPool },
        { type: ComponentFactoryResolver }
    ]; };
    tslib_1.__decorate([
        Input("rawContent")
    ], IntoDirective.prototype, "rawContent", void 0);
    tslib_1.__decorate([
        Input("intoId")
    ], IntoDirective.prototype, "intoId", void 0);
    tslib_1.__decorate([
        Input("intoName")
    ], IntoDirective.prototype, "intoName", void 0);
    tslib_1.__decorate([
        Input("intoData")
    ], IntoDirective.prototype, "intoData", void 0);
    tslib_1.__decorate([
        Input("into")
    ], IntoDirective.prototype, "into", void 0);
    tslib_1.__decorate([
        Input("onComponentChange")
    ], IntoDirective.prototype, "onComponentChange", void 0);
    IntoDirective = tslib_1.__decorate([
        Directive({
            selector: '[into]'
        })
    ], IntoDirective);
    return IntoDirective;
}());
export { IntoDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50by5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9jb21tb24vaW50by5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNULHdCQUF3QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQ7SUFvQkksdUJBQ1ksT0FBeUIsRUFDMUIsRUFBYSxFQUNaLElBQW1CLEVBQ3pCLHdCQUFrRDtRQUg1QyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMxQixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBZTtRQUN6Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBTnhELHNCQUFpQixHQUFHLFVBQUMsS0FBSyxJQUFNLENBQUMsQ0FBQztJQVFsQyxDQUFDO0lBRU8sNkJBQUssR0FBYixVQUFjLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFHLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsT0FBWSxFQUFFLElBQWMsRUFBRSxJQUFTO1FBQ3RELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFD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ekI7SUFBRCxvQkFBQztDQUFBLEFBN0lELElBNklDO1NBN0lZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uSW5pdCxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuL3BpcGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tpbnRvXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEludG9EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJyYXdDb250ZW50XCIpXHJcbiAgICByYXdDb250ZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9JZFwiKVxyXG4gICAgaW50b0lkOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9OYW1lXCIpXHJcbiAgICBpbnRvTmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvRGF0YVwiKVxyXG4gICAgaW50b0RhdGE6IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b1wiKVxyXG4gICAgaW50bzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dChcIm9uQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgICBvbkNvbXBvbmVudENoYW5nZSA9IChldmVudCkgPT4ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHB1YmxpYyBlbDpFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCxcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF90cmFuc2Zvcm0oY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBvb2wucmVnaXN0ZXJlZEZvckNvbXBvbmVudFdpdGhOYW1lZChhcmdzWzBdKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdBcmdzID0gYXJncy5zcGxpY2UoMSxhcmdzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KGFyZ3NbMF0sIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCBkYXRhLCAuLi5uZXdBcmdzKTsgXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvb2wucmVnaXN0ZXJlZEZvclBpcGVUcmFuc2Zvcm1hdGlvbk5hbWVkKGFyZ3NbMF0pKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucG9vbC5yZWdpc3RlcmVkUGlwZVRyYW5zZm9ybWF0aW9uKGFyZ3NbMF0sIGNvbnRlbnQsIGFyZ3MsIHRoaXMuX3RyYW5zZm9ybS5iaW5kKHRoaXMpLCBkYXRhKTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdW5rbm93biBmb3JtYXR0ZXJcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50b0lkLCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9OYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLCBcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA1ID8gYXJnc1s1XSA6IFwiXCIpO1xyXG4gICAgICAgICAgICB9Y2F0Y2goeCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJhbnNmb3JtQ29tcG9uZW50KHR5cGUsIGNvbnRlbnQ6IGFueSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBkYXRhOiBhbnksLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGNvbnRlbnQgPT09IFwiYm9vbGVhblwiIHx8IE9iamVjdC5rZXlzKGNvbnRlbnQpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAgdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50Rm9yKHR5cGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIGNvbXBvbmVudCAnXCIgKyB0eXBlKyBcIicgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmlkID0gaWQ7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc2VydmljZSA9IHRoaXMucG9vbC5yZWdpc3RlcmVkU2VydmljZUZvckNvbXBvbmVudCh0eXBlKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC50cmFuc2Zvcm0oY29udGVudC5zb3VyY2UgPyBjb250ZW50LnNvdXJjZSA6IGNvbnRlbnQsIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5vbkludG9Db21wb25lbnRDaGFuZ2UgJiYgdGhpcy5vbkNvbXBvbmVudENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbkludG9Db21wb25lbnRDaGFuZ2Uuc3Vic2NyaWJlKHRoaXMub25Db21wb25lbnRDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY29udGVudCA9PT0gXCJib29sZWFuXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN4ID0gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50Rm9yKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzeCA9PT0gbnVsbCB8fCBzeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdcIiArIHR5cGUrIFwiJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3guaWQgPSBpZCArICctJyArIChjb3VudGVyKyspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3guc2VydmljZSA9IHRoaXMucG9vbC5yZWdpc3RlcmVkU2VydmljZUZvckNvbXBvbmVudCh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3gudHJhbnNmb3JtKHNvdXJjZS5zb3VyY2UgPyBzb3VyY2Uuc291cmNlIDogc291cmNlLCBkYXRhLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN4Lm9uSW50b0NvbXBvbmVudENoYW5nZSAmJiB0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeC5vbkludG9Db21wb25lbnRDaGFuZ2Uuc3Vic2NyaWJlKHRoaXMub25Db21wb25lbnRDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRDb21wb25lbnRGb3IobmFtZSk6IFBpcGVDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvb2wucmVnaXN0ZXJlZENvbXBvbmVudChuYW1lLCB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy52aWV3UmVmLCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5pbnRvIHx8IHRoaXMucmF3Q29udGVudCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSAgdGhpcy5yYXdDb250ZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludG8uc3BsaXQoXCJ8XCIpLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cmFuc2Zvcm0ocmVzdWx0LCB0aGlzLnNwbGl0KGl0ZW0pLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wOiBQaXBlQ29tcG9uZW50ID0gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50Rm9yKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wKSAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXAudHJhbnNmb3JtKHJlc3VsdCwgW10sIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIGNvbXBvbmVudCAnc3BhbicgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wOiBQaXBlQ29tcG9uZW50ID0gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50Rm9yKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXApICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wLnRyYW5zZm9ybShzb3VyY2UsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdzcGFuJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=