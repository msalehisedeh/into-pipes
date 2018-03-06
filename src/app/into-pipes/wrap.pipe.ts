/*
* Defines a filter to wrap a content into character(s).
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'wrap' })
export class WrapPipe implements PipeTransform {
    transform(source: string, ...args: any[]): string {  
        const pre = (args && args.length) ? args[0] : "";
        const post= pre.length ? 
                    (args.length > 1 ? args[1] : "") : pre;
        
        return pre + source + post;
    }
}
