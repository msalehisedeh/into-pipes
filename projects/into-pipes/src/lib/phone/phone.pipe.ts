/*
* Defines a filter to convert url into an email display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            // prepend:something
            return new PhonePipe().transform(content, args.length > 1 ? args[1]==='true' : false, args.length > 2 ? args[2] === 'true' : false); 
        };
        return x;
    }

    phoneFromString(source: any, link: any, format: any) {
        return link ? 
            "<a href='tel:" + this.normalizeSource(source) + "'><span class='fa fa-phone' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></a>" :
            "<span><span class='fa fa-phone' style='margin: 0 5px' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></span>";
    }
    transform(source: any, ...args: any[]): any {    
        const link = ((args && args.length) ? args[0] : false);
        const format = ((args && args.length>1) ? args[1] : false);
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.phoneFromString(source, link, format);
        } else {
            const result: any[] = [];
            source.map((item) => {
                result.push(this.phoneFromString(item, link, format));
            });
            return result;
        } 
    }
    private normalizeSource(source: string) {
        let result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;

        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        } else if (result.length > 10) {
            const b = result.slice(0, 10);
            const e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    }
    private formattedSource(source: string) {
        let result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;

        if (result.length === 10) {
            result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3"); 
        } else if (result.length > 10) {
            const b = result.slice(0, 10);
            const e = result.slice(10);
            result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3"); 
            result+= (' ext. ' + e);
        }
        return result;
    }
}
