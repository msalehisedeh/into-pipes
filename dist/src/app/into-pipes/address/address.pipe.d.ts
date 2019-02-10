import { PipeTransform } from '@angular/core';
export declare class AddressPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    transform(source: any, ...args: any[]): any;
    private addressFromString(source, isLink, hasTarget);
}
