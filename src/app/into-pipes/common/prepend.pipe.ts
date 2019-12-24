/*
* Defines a filter to prepend character(s) to a content.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prepend' })
export class PrependPipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            // prepend:something
            return new PrependPipe().transform(content, args.length > 1 ? args[1] : ""); 
        };
        return x;
    }

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
