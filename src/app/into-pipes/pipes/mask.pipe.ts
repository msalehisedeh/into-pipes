/*
* Defines a filter to mask sensitive information. 
* if transforming object is an array, all elements in the array will be masked and the resulting array will be returned.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mask' })
export class MaskPipe implements PipeTransform {

    maskString(item, visibleDigits, maskWith) {
        const maskedSection = item  ? item.slice(0, -visibleDigits) : "";
        const visibleSection = item ? item.slice(-visibleDigits) : "";

        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    }
    maskArray(items, visibleDigits, maskWith) {
        const result = [];
        items.map((item) => {
            result.push(this.maskString(item, visibleDigits, maskWith));
        });
        return result;
    }
    transform(source: any, ...args: any[]): any {

        const visibleDigits = (args && args.length) ? args[0] : 4;
        const maskWith = args.length > 1 ? args[1] : '*';
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.maskString(source, visibleDigits, maskWith);
        }
        return this.maskArray(source, visibleDigits, maskWith);
    }
}
