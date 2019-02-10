/*
* Defines a filter to convert url into an image display. 
* if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {
    static transformationMethod() {
        const x = function (content: any, args: string[], callback?: any, data?: any) {
            // image:200px:auto:alttext OR image:200px:alternate-text OR image:200px OR image
            if (args.length > 3) {
                return new ImagePipe().transform(content, args[1], args[2], args[3]);
            } else if (args.length > 2) {
                return new ImagePipe().transform(content, args[1], args[2]);
            } else if (args.length > 1) {
                return new ImagePipe().transform(content, args[1]);
            } else {
                return new ImagePipe().transform(content, "");
            }
        };
        return x;
    }

    stringToImage(source, width, height, alt) {
        if(!alt || !alt.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d+1);
        }
        return "<img src=\'"+source+"\' style=\'"+ width + height + "\' title=\'"+alt+"\' />";
    }
    arrayToImage(sources, width, height, alt) {
        const result = [];
        sources.map((source) => {
            result.push(this.stringToImage(source, width, height, alt));
        });
        return result;
    }
    transform(source: any, ...args: any[]): any {

        const width:string = (args && args.length) ? "width: " + args[0] + ";" : "";
        const height:string = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        const alt:string = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");

    }
}
