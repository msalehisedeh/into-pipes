import { PipeTransform } from '@angular/core';
export declare class LinkPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    stringToLink(source: any, target: any, title: any): string;
    arrayToImagLink(sources: any, target: any, title: any): any[];
    transform(source: any, ...args: any[]): any;
}
