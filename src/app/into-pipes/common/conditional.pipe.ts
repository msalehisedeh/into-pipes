/*
* Defines a filter to return a transformation argument which should be piped into another transform object
* to transform the object value passed to this pipe.
* the arguments are as follows: 1) condition, 2) value to evaluate the condition, 3) action, 4) else action.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'if' })
export class ConditionalPipe implements PipeTransform {
    static transformationMethod() {
        function split(item: string) {
            return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function(x){return x.length});
        }
        const x = function (content: any, args: string[], callback?: any, data?: any) {
            // if:=:true:fa fa-check:fa fa-bell
            const acondition =  args.length > 1 ? args[1] : "";
            const value =  args.length > 2 ? args[2] : "";
            const action =  args.length > 3 ? args[3] : "";
            const altAction =  args.length > 4 ? args[4] : "";
            let result = new ConditionalPipe().transform(content, acondition, value, action, altAction);

            if (typeof result === "string") {
                result = result[0] === '"' ? result.substring(1,result.length-1) : result;
                result = split(result);
                result = callback(content, result, data);
            }
            return result;
        };
        return x;
    }
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
