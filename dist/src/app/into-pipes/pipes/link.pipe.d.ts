import { PipeTransform } from '@angular/core';
export declare class LinkPipe implements PipeTransform {
    stringToLink(source: any, target: any, title: any): string;
    arrayToImagLink(sources: any, target: any, title: any): any[];
    transform(source: any, ...args: any[]): any;
}
