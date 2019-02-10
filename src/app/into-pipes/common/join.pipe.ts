/*
* Defines a filter to join arrays or json attribute values.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'join' })
export class JoinPipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            //join or join:character
            return new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    transform(source: any, ...args: any[]): any {  
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source.join(args[0]);
        } else {
            const result = [];
            Object.keys(source).map((key) => {
                result.push(source[key]);
            });
            return result.join(args[0]);
        } 
    }
}
