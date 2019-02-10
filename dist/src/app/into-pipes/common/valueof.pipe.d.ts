import { PipeTransform } from '@angular/core';
export declare class ValueOfPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    valueOfSingle(source: any, key: string): any;
    valueOfMultiple(sources: any, key: string): any[];
    transform(object: any, ...args: any[]): any;
}
