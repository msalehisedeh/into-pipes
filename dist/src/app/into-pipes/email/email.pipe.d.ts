import { PipeTransform } from '@angular/core';
export declare class EmailPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    emailFromString(source: string, isLink: boolean): string;
    transform(source: any, ...args: any[]): any;
}
