/*
* Defines a filter to convert url into a link.
* if transforming object is an array, all elements in the array will be transformed and the resulting array will be returned.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'link' })
export class LinkPipe implements PipeTransform {
    stringToLink(source, target, title) {
        if(!title || !title.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            title = d < 0 ? t : t.substring(d+1);
        }
        return "<a href='"+source+"' target='"+target+"'>"+title+"</a>";
    }
    arrayToImagLink(sources, target, title) {
        const result = [];
        sources.map((source) => {
            result.push(this.stringToLink(source, target, ""));
        });
        return result;
    }
    transform(source: any, ...args: any[]): any {

        const target:string = (args && args.length) ? args[0] : "";
        const title:string = (args && args.length > 1) ? args[1] : "";
    
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
    }
}
