/*
* Defines a filter to convert url into an email display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'email' })
export class FontPipe implements PipeTransform {
    fontFromString(font, location, action, content) {
        return (location === "left" ? 
                (font + content) : 
                ((location === "right") ? content + font : font));
    }
    transform(source: any, ...args: any[]): any {
        const font = args.length ? "<span class=\'" + args[0] + "\' aria-hidden='true'></span>" : "";
        const location = args.length > 1 ? args[1] : "";
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        const content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        } else {
            const result = [];
            source.map((item) => {
                result.push(this.fontFromString(font, location, action, item));
            });
            return result;                
        }
    }
}
