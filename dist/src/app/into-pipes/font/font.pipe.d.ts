import { PipeTransform } from '@angular/core';
export declare class FontPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    fontFromString(font: any, location: any, action: any, content: any): any;
    transform(source: any, ...args: any[]): any;
}
