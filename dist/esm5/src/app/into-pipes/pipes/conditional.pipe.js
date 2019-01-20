/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var ConditionalPipe = /** @class */ (function () {
    function ConditionalPipe() {
    }
    /**
     * @param {?} content
     * @param {?} acondition
     * @param {?} value
     * @param {?} action
     * @param {?} altAction
     * @return {?}
     */
    ConditionalPipe.prototype.conditionFromString = /**
     * @param {?} content
     * @param {?} acondition
     * @param {?} value
     * @param {?} action
     * @param {?} altAction
     * @return {?}
     */
    function (content, acondition, value, action, altAction) {
        /** @type {?} */
        var result = "";
        switch (acondition) {
            case "=":
                result = content === value ? action : altAction;
                break;
            case "!=":
                result = content !== value ? action : altAction;
                break;
            case ">":
                result = content > value ? action : altAction;
                break;
            case ">=":
                result = content >= value ? action : altAction;
                break;
            case "<":
                result = content < value ? action : altAction;
                break;
            case "<=":
                result = content <= value ? action : altAction;
                break;
            case "~":
                result = content !== undefined && content !== null && content !== "null" ? action : altAction;
                break;
            case "!~":
                result = content === undefined || content === null || content === "null" ? action : altAction;
                break;
            case "~=":
                result = content && value && String(content).toLowerCase() === String(value).toLowerCase() ? action : altAction;
                break;
            case "in":
                result = content ? content.indexOf(action) : altAction;
                break;
        }
        return result;
    };
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    ConditionalPipe.prototype.transform = /**
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
        var acondition = args.length ? args[0] : "";
        /** @type {?} */
        var value = args.length > 1 ? args[1] : "";
        /** @type {?} */
        var action = args.length > 2 ? args[2] : "";
        /** @type {?} */
        var altAction = args.length > 3 ? args[3] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        }
        else {
            /** @type {?} */
            var result_1 = {};
            source.map(function (item) {
                result_1[item] = _this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result_1;
        }
    };
    ConditionalPipe.decorators = [
        { type: Pipe, args: [{ name: 'if' },] }
    ];
    return ConditionalPipe;
}());
export { ConditionalPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9uYWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2NvbmRpdGlvbmFsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7SUFJaEQsNkNBQW1COzs7Ozs7OztJQUFuQixVQUFvQixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUzs7UUFDN0QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLE1BQU0sQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDZixLQUFLLEdBQUc7Z0JBQ0osTUFBTSxHQUFHLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNoRCxLQUFLLENBQUM7WUFDVixLQUFLLElBQUk7Z0JBQ0wsTUFBTSxHQUFHLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNoRCxLQUFLLENBQUM7WUFDVixLQUFLLEdBQUc7Z0JBQ0osTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUM5QyxLQUFLLENBQUM7WUFDVixLQUFLLElBQUk7Z0JBQ0wsTUFBTSxHQUFHLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUMvQyxLQUFLLENBQUM7WUFDVixLQUFLLEdBQUc7Z0JBQ0osTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUM5QyxL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dGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gcmV0dXJuIGEgdHJhbnNmb3JtYXRpb24gYXJndW1lbnQgd2hpY2ggc2hvdWxkIGJlIHBpcGVkIGludG8gYW5vdGhlciB0cmFuc2Zvcm0gb2JqZWN0XHJcbiogdG8gdHJhbnNmb3JtIHRoZSBvYmplY3QgdmFsdWUgcGFzc2VkIHRvIHRoaXMgcGlwZS5cclxuKiB0aGUgYXJndW1lbnRzIGFyZSBhcyBmb2xsb3dzOiAxKSBjb25kaXRpb24sIDIpIHZhbHVlIHRvIGV2YWx1YXRlIHRoZSBjb25kaXRpb24sIDMpIGFjdGlvbiwgNCkgZWxzZSBhY3Rpb24uXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2lmJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25kaXRpb25Gcm9tU3RyaW5nKGNvbnRlbnQsIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbikge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG5cclxuICAgICAgICBzd2l0Y2goYWNvbmRpdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgXCI9XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPT09IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIhPVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ICE9PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPlwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID4gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIj49XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPj0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjxcIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA8IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI8PVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50IDw9IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ+XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiBjb250ZW50ICE9PSBudWxsICYmIGNvbnRlbnQgIT09IFwibnVsbFwiID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIhflwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID09PSB1bmRlZmluZWQgfHwgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSBcIm51bGxcIiA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwifj1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCAmJiB2YWx1ZSAmJiBTdHJpbmcoY29udGVudCkudG9Mb3dlckNhc2UoKSA9PT0gU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpblwiIDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPyBjb250ZW50LmluZGV4T2YoYWN0aW9uKSA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGFjb25kaXRpb24gPSAgYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0QWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbkZyb21TdHJpbmcoc291cmNlLCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaXRlbV0gPSB0aGlzLmNvbmRpdGlvbkZyb21TdHJpbmcoaXRlbSwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iXX0=