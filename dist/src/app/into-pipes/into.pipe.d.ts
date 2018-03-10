import { PipeTransform } from '@angular/core';
export declare class InToPipe implements PipeTransform {
    transform(content: string, list: string): string;
    private split(item);
    private _transform(content, args);
}
