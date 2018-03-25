import { PipeTransform } from '@angular/core';
export declare class ConditionalPipe implements PipeTransform {
    conditionFromString(content: any, acondition: any, value: any, action: any, altAction: any): string;
    transform(source: any, ...args: any[]): any;
}
