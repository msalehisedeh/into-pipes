/*
* Defines a filter to prepend character(s) to a content.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prepend' })
export class PrependPipe implements PipeTransform {

    transform(source: any, ...args: any[]): any {    
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return key + source;
        } else {
            const result = [];
            source.map((item) => {
                result.push(key + item);
            });
            return result;
        } 
    }
}
