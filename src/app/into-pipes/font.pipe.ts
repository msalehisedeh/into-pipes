/*
* Defines a filter to convert url into an email display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'email' })
export class FontPipe implements PipeTransform {
    transform(source: string, ...args: any[]): string {
        const font = args.length ? "<span class=\'" + args[0] + "\' aria-hidden='true'></span>" : "";
        const location = args.length > 1 ? args[1] : "";
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        const content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);

        return (location === "left" ? 
                (font + content) : 
                ((location === "right") ? content + font : font));
    }
}
