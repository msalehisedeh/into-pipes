import { PipeTransform } from '@angular/core';
export declare class MapPipe implements PipeTransform {
    valuesFor(list: any, map: any): any[];
    geMapping(mapping: any): any;
    transform(source: any, ...args: any[]): any;
}
