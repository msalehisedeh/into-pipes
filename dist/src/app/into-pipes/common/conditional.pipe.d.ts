import { PipeTransform } from '@angular/core';
export declare class ConditionalPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    conditionFromString(content: any, acondition: any, value: any, action: any, altAction: any): string;
    transform(source: any, ...args: any[]): any;
}
