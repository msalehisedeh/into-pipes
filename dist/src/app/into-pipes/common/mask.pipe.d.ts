import { PipeTransform } from '@angular/core';
export declare class MaskPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    maskString(item: any, visibleDigits: any, maskWith: any): any;
    maskArray(items: any, visibleDigits: any, maskWith: any): any[];
    transform(source: any, ...args: any[]): any;
}
