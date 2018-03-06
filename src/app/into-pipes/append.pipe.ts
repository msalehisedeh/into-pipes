/*
* Defines a filter to append character(s) to a content.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'append' })
export class AppendPipe implements PipeTransform {
    transform(source: string, ...args: any[]): string {    
        return source + ((args && args.length) ? args[0] : "");
    }
}
