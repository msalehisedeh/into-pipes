import { PipeTransform } from '@angular/core';
import { ComponentPool } from './component.pool';
export declare class InToPipe implements PipeTransform {
    private pool;
    constructor(pool: ComponentPool);
    transform(content: any, list: string): any;
    private split(item);
    private _transform(content, args);
}
