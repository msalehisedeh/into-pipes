/*
* Defines a filter to return a transformation argument which should be piped into another transform object
* to transform the object value passed to this pipe.
* the arguments are as follows: 1) condition, 2) value to evaluate the condition, 3) action, 4) else action.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'if' })
export class ConditionalPipe implements PipeTransform {
    transform(object: any, ...args: any[]): string {
        let result = "";

        switch(args[0]){
            case "=" : 
                result = object === args[1] ? args[2] : args[3];
                break;
            case "!=" : 
                result = object !== args[1] ? args[2] : args[3];
                break;
            case ">" : 
                result = object > args[1] ? args[2] : args[3];
                break;
            case "<" : 
                result = object < args[1] ? args[2] : args[3];
                break;
            case "~" : 
                result = object && object !== null && object !== "null" ? args[2] : args[3];
                break;
            case "!~" : 
                result = object === undefined || object === null || object === "null" ? args[2] : args[3];
                break;
            case "~=" : 
                result = object && String(object).toLowerCase() === String(args[1]).toLowerCase() ? args[2] : args[3];
                break;
            case "in" :
                result = object ? object.indexOf(args[2]) : args[3];
                break;
        }
        return result;
    }
}
