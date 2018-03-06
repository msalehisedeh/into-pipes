/*
* Defines a filter to convert url into an image display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'image' })
export class ImagePipe implements PipeTransform {
    transform(source: string, ...args: any[]): string {

        const width:string = (args && args.length) ? "width: " + args[0] + ";" : "";
        const height:string = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        const alt:string = (args && args.length > 2) ? args[2] : "";

        return "<img src=\'"+source+"\' style=\'"+ width + height + "\' title=\'"+alt+"\' />";
    }
}
