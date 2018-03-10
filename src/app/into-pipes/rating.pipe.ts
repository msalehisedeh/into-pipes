/*
* Defines a filter to convert url into a raiting display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'raiting' })
export class RatingPipe implements PipeTransform {
    transform(source: string, ...args: any[]): string {
        const value = parseInt(source, 10);
        const float = parseFloat(source);

        let x = "<span class='rating'>";
        for (let i = 0; i < value; i++ ) {
            x += "<span class='fa fa-star' aria-hidden='true'></span>"
        }
        if ( float !== value ) {
            x += "<span class='fa fa-star-half' aria-hidden='true'></span>"
        }
        x += "</span><span class='rate-value'>" + source + "</span>";

        return x;
    }
}
