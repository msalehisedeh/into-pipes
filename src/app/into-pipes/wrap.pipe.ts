/*
* Defines a filter to wrap a content into character(s).
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'wrap' })
export class WrapPipe implements PipeTransform {
    transform(source: any, ...args: any[]): any {  
        const pre = (args && args.length) ? args[0] : "";
        const post= pre.length ? 
                    (args.length > 1 ? args[1] : "") : pre;
        
        const key = ((args && args.length) ? args[0] : "");
        
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        } else {
            const result = [];
            source.map((item) => {
                result.push(pre + item + post);
            });
            return result;
        } 
    }
}
