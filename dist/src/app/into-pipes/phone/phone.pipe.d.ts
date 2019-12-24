import { PipeTransform } from '@angular/core';
export declare class PhonePipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    phoneFromString(source: any, link: any, format: any): string;
    transform(source: any, ...args: any[]): any;
    private normalizeSource;
    private formattedSource;
}
