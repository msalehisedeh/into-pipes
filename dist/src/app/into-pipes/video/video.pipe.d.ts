import { PipeTransform } from '@angular/core';
export declare class VideoPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    stringToVideo(source: any, width: any, height: any, alt: any): string;
    arrayToVideo(sources: any, width: any, height: any, alt: any): any[];
    transform(source: any, ...args: any[]): any;
}
