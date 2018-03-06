/*
* Defines a filter to convert a string into a map object.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'map' })
export class MapPipe implements PipeTransform {
    transform(item: string, ...args: any[]): string {

        const mapping = (args && args.length) ? args[0].split('/') : [];
        let result = item;

        mapping.map((key: string) => {
            if (key.indexOf(item) === 0) {
                result = key.split(';')[1];
            }
        });
        return result;
    }
}
