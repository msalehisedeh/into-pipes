import { PipeTransform } from '@angular/core';
export declare class ValueOfPipe implements PipeTransform {
    valueOfSingle(source: any, key: any): any;
    valueOfMultiple(sources: any, key: any): any[];
    transform(object: any, ...args: any[]): any;
}
