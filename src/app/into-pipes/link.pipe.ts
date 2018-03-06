/*
* Defines a filter to convert url into a link.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'link' })
export class LinkPipe implements PipeTransform {
    transform(source: string, ...args: any[]): string {

        const target:string = (args && args.length) ? args[0] : "";
        const title:string = (args && args.length > 1) ? args[1] : "";
    
        return "<a href='"+source+"' target='"+target+"'>"+title+"</a>";
    }
}
