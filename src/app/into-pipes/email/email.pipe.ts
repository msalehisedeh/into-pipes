/*
* Defines a filter to convert url into an email display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'email' })
export class EmailPipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            // email
            return new EmailPipe().transform(content, args.length > 1 ? args[1]==='true' : true); 
        };
        return x;
    }

    emailFromString(source: string, isLink: boolean) {
        let x: string;
        if (isLink) {
            x = "<a href=\'mailto:"+source+"\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
        } else {
            x = "<span><span class='fa fa-envelope' style='margin: 0 5px' aria-hidden='true'></span><span>" + source + "</span></span>";
        }
        return x;
    }
    transform(source: any, ...args: any[]): any {
        const isLink= args.length ? args[0] : true;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source, isLink);
        } else {
            const result = [];
            source.map((item) => {
                result.push(this.emailFromString(item, isLink));
            });
            return result;
        } 
    }
}
