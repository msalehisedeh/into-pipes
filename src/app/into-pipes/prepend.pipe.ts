/*
* Defines a filter to prepend character(s) to a content.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'prepend' })
export class PrependPipe implements PipeTransform {
    transform(source: string, ...args: any[]): string {    
        return ((args && args.length) ? args[0] : "") + source;
    }
}
