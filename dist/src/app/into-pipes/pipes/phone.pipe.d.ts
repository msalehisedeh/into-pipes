import { PipeTransform } from '@angular/core';
export declare class PhonePipe implements PipeTransform {
    phoneFromString(source: any, link: any, format: any): string;
    transform(source: any, ...args: any[]): any;
    private normalizeSource(source);
    private formattedSource(source);
}
