import { PipeTransform } from '@angular/core';
export declare class ImagePipe implements PipeTransform {
    stringToImage(source: any, width: any, height: any, alt: any): string;
    arrayToImage(sources: any, width: any, height: any, alt: any): any[];
    transform(source: any, ...args: any[]): any;
}
