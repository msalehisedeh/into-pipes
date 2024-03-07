/*
* Defines a filter to wrap a content into character(s).
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'wrap' })
export class WrapPipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            // wrap:something:something  OR wrap:something
            const p1 = args && args.length > 1 ? args[1] : "";
            const p2 = args && args.length > 2 ? args[2] : args[1];

            return new WrapPipe().transform(content, p1, p2); 
        };
        return x;
    }
    transform(source: any, ...args: any[]): any {  
        const pre = (args && args.length) ? args[0] : "";
        const post= pre.length ? 
                    (args.length > 1 ? args[1] : "") : pre;
        
        const key = ((args && args.length) ? args[0] : "");
        
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        } else {
            const result: any[] = [];
            source.map((item) => {
                result.push(pre + item + post);
            });
            return result;
        } 
    }
}
