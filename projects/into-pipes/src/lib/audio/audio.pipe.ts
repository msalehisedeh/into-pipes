/*
* Defines a filter to convert url into an image display. 
* if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'audio' })
export class AudioPipe implements PipeTransform {
    static transformationMethod() {
        const x = function (content: any, args: string[], callback?: any, data?: any) {
            return new AudioPipe().transform(content, args.length > 1 ? args[1]==='true' : true); 
        };
        return x;
    }

    stringToAudio(source: any) {
        return "<audio src=\'"+source+"\' controls=\'true\' />";
    }
    arrayToAudio(sources: any) {
        const result: any[] = [];
        sources.map((source: any) => {
            result.push(this.stringToAudio(source));
        });
        return result;
    }
    transform(source: any, ...args: any[]): any {
       if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToAudio(source);
        }
        return this.arrayToAudio(source);
    }
}
