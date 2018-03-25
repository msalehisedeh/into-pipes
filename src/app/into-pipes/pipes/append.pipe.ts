/*
* Defines a filter to append character(s) to a content.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'append' })
export class AppendPipe implements PipeTransform {
    transform(source: any, ...args: any[]): any {    
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        } else {
            const result = [];
            source.map((item) => {
                result.push(item + key);
            });
            return result;
        } 
    }
}
