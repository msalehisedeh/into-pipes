import { PipeTransform } from '@angular/core';
export declare class EmailPipe implements PipeTransform {
    emailFromString(source: any): string;
    transform(source: any, ...args: any[]): any;
}
