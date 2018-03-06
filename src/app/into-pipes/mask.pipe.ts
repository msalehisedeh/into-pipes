/*
* Defines a filter to mask sensitive information.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mask' })
export class MaskPipe implements PipeTransform {
    transform(item: string, ...args: any[]): string {

        const visibleDigits = (args && args.length) ? args[0] : 4;
        const maskWith = args.length > 1 ? args[1] : '*';
        const maskedSection = item  ? item.slice(0, -visibleDigits) : "";
        const visibleSection = item ? item.slice(-visibleDigits) : "";

        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    }
}
