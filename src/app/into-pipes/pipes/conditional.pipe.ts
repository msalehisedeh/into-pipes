/*
* Defines a filter to return a transformation argument which should be piped into another transform object
* to transform the object value passed to this pipe.
* the arguments are as follows: 1) condition, 2) value to evaluate the condition, 3) action, 4) else action.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'if' })
export class ConditionalPipe implements PipeTransform {
    conditionFromString(content, acondition, value, action, altAction) {
        let result = "";

        switch(acondition){
            case "=" : 
                result = content === value ? action : altAction;
                break;
            case "!=" : 
                result = content !== value ? action : altAction;
                break;
            case ">" : 
                result = content > value ? action : altAction;
                break;
            case ">=" : 
                result = content >= value ? action : altAction;
                break;
            case "<" : 
                result = content < value ? action : altAction;
                break;
            case "<=" : 
                result = content <= value ? action : altAction;
                break;
            case "~" : 
                result = content !== undefined && content !== null && content !== "null" ? action : altAction;
                break;
            case "!~" : 
                result = content === undefined || content === null || content === "null" ? action : altAction;
                break;
            case "~=" : 
                result = content && value && String(content).toLowerCase() === String(value).toLowerCase() ? action : altAction;
                break;
            case "in" :
                result = content ? content.indexOf(action) : altAction;
                break;
        }
        return result;

    }
    transform(source: any, ...args: any[]): any {
        const acondition =  args.length ? args[0] : "";
        const value =  args.length > 1 ? args[1] : "";
        const action =  args.length > 2 ? args[2] : "";
        const altAction =  args.length > 3 ? args[3] : "";

        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        } else {
            const result = {};
            source.map((item) => {
                result[item] = this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result;
        } 
    }
}
