/*
* Defines a filter to convert url into an email display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'email' })
export class EmailPipe implements PipeTransform {
    transform(source: string, ...args: any[]): string {
        return "<a href=\'mailto:"+source+"\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
    }
}
