import { PipeTransform } from '@angular/core';
export declare class RatingPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    rateString(source: any, multiStart: boolean): string;
    transform(source: any, ...args: any[]): any;
}
