/*
* Defines a filter to convert a string into a map object.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'valueof' })
export class ValueOfPipe implements PipeTransform {
    transform(object: any, ...args: any[]): string {
        return object[args[0]];
    }
}
