/*
* Defines a filter to convert a string into a map object.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'valueof' })
export class ValueOfPipe implements PipeTransform {

    valueOfSingle(source, key) {
        return source[key];
    }
    valueOfMultiple(sources, key) {
        const result = [];
        sources.map((source) => {
            result.push(this.valueOfSingle(source, key));
        });
        return result;
    }
    transform(object: any, ...args: any[]): any {
        if ((typeof object === "string") || !(object instanceof Array)) {
            return this.valueOfSingle(object, args[0]);
        }
        return this.valueOfMultiple(object, args[0]);
    }
}
