/*
* Defines a filter to join arrays or json attribute values.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'join' })
export class JoinPipe implements PipeTransform {
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
