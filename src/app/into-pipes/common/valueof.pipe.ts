/*
* Defines a filter to convert a string into a map object.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'valueof' })
export class ValueOfPipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            // valueof:key
            return new ValueOfPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }

    valueOfSingle(source: any, key: string) {
        return source[key];
    }
    valueOfMultiple(sources: any, key: string) {
        const result = [];
        sources.map((source: any) => {
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
