var JoinPipe_1;
import * as tslib_1 from "tslib";
/*
* Defines a filter to join arrays or json attribute values.
*/
import { Pipe } from '@angular/core';
let JoinPipe = JoinPipe_1 = class JoinPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            //join or join:character
            return new JoinPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source.join(args[0]);
        }
        else {
            const result = [];
            Object.keys(source).map((key) => {
                result.push(source[key]);
            });
            return result.join(args[0]);
        }
    }
};
JoinPipe = JoinPipe_1 = tslib_1.__decorate([
    Pipe({ name: 'join' })
], JoinPipe);
export { JoinPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2pvaW4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztFQUVFO0FBQ0YsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsSUFBYSxRQUFRLGdCQUFyQixNQUFhLFFBQVE7SUFDakIsTUFBTSxDQUFDLG9CQUFvQjtRQUN2QixNQUFNLENBQUMsR0FBRyxVQUFXLE9BQVksRUFBRSxJQUFjLEVBQUUsUUFBYyxFQUFFLElBQVU7WUFDekUsd0JBQXdCO1lBQ3hCLE9BQU8sSUFBSSxVQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELFNBQVMsQ0FBQyxNQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ2pDLElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0gsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQW5CWSxRQUFRO0lBRHBCLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUNWLFFBQVEsQ0FtQnBCO1NBbkJZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gam9pbiBhcnJheXMgb3IganNvbiBhdHRyaWJ1dGUgdmFsdWVzLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdqb2luJyB9KVxyXG5leHBvcnQgY2xhc3MgSm9pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvL2pvaW4gb3Igam9pbjpjaGFyYWN0ZXJcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBKb2luUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlLmpvaW4oYXJnc1swXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNvdXJjZVtrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuam9pbihhcmdzWzBdKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==