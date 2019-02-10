import { PipeTransform } from '@angular/core';
export declare class AudioPipe implements PipeTransform {
    static transformationMethod(): (content: any, args: string[], callback?: any, data?: any) => any;
    stringToAudio(source: any): string;
    arrayToAudio(sources: any): any[];
    transform(source: any, ...args: any[]): any;
}
