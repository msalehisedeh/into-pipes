import { PipeTransform } from '@angular/core';
export declare class InToPipe implements PipeTransform {
    transform(content: any, list: string): any;
    private split;
    private _transform;
}
