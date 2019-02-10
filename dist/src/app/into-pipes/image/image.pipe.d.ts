import { PipeTransform } from '@angular/core';
export declare class ImagePipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    stringToImage(source: any, width: any, height: any, alt: any): string;
    arrayToImage(sources: any, width: any, height: any, alt: any): any[];
    transform(source: any, ...args: any[]): any;
}
