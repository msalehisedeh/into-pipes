/*
* Defines a filter to convert url into an email display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'font' })
export class FontPipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            // font:fa fa-check:left:*
            return new FontPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : ""); 
        };
        return x;
    }

    fontFromString(font: any, location: any, action: any, content: any) {
        return (location === "left" ? 
                (font + content) : 
                ((location === "right") ? content + font : font));
    }
    transform(source: any, ...args: any[]): any {
        const font = args.length ? "<span class=\'" + args[0] + "\' style='margin: 0 5px' aria-hidden='true'></span>" : "";
        const location = args.length > 1 ? args[1] : "";
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        const content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        } else {
            const result: any[] = [];
            source.map((item: any) => {
                result.push(this.fontFromString(font, location, action, item));
            });
            return result;                
        }
    }
}
