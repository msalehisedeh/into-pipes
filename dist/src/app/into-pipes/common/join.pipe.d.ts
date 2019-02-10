import { PipeTransform } from '@angular/core';
export declare class JoinPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    transform(source: any, ...args: any[]): any;
}
