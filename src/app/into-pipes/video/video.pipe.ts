/*
* Defines a filter to convert url into an image display. 
* if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'video' })
export class VideoPipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            // video:200px:auto:alttext OR video:200px:alternate-text OR video:200px OR video
            if (args.length > 3) {
                return new VideoPipe().transform(content, args[1], args[2], args[3]);
            } else if (args.length > 2) {
                return new VideoPipe().transform(content, args[1], args[2]);
            } else if (args.length > 1) {
                return new VideoPipe().transform(content, args[1]);
            } else {
                return new VideoPipe().transform(content, "");
            }
        };
        return x;
    }

    stringToVideo(source, width, height, alt) {
        if(!alt || !alt.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d+1);
        }
        return "<video src=\'"+source+"\' style=\'"+ width + height + "\' title=\'"+alt+"\'  controls=\'true\' />";
    }
    arrayToVideo(sources, width, height, alt) {
        const result = [];
        sources.map((source) => {
            result.push(this.stringToVideo(source, width, height, alt));
        });
        return result;
    }
    transform(source: any, ...args: any[]): any {

        const width:string = (args && args.length) ? "width: " + args[0] + ";" : "";
        const height:string = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        const alt:string = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToVideo(source, width, height, alt);
        }
        return this.arrayToVideo(source, width, height, "");

    }
}
