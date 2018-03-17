/*
* Defines a filter to convert url into an email display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'email' })
export class EmailPipe implements PipeTransform {

    emailFromString(source) {
        return "<a href=\'mailto:"+source+"\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
    }
    transform(source: any, ...args: any[]): any {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source);
        } else {
            const result = [];
            source.map((item) => {
                result.push(this.emailFromString(item));
            });
            return result;
        } 
    }
}
