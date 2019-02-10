import { PipeTransform } from '@angular/core';
export declare class MapPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    valuesFor(list: any, map: any): any[];
    geMapping(mapping: any): any;
    transform(source: any, ...args: any[]): any;
}
