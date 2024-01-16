/*
* Defines a filter to convert url into an address display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'address' })
export class AddressPipe implements PipeTransform {
    static transformationMethod() {
        const x = function (content: any, args: string[], callback?: any, data?: any) {
            return new AddressPipe().transform(content, args.length > 1 ? args[1]==='true' : true); 
        };
        return x;
    }
    transform(source: any, ...args: any[]): any {
        const isLink= args.length ? args[0] : true;
        const hasTarget = args.length > 1 ? args[1] : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source, isLink, hasTarget);
        } else {
            const result: any[] = [];
            source.map((item) => {
                result.push(this.addressFromString(item, isLink, hasTarget));
            });
            return result;
        }
    }
    private addressFromString(source: any, isLink: boolean, hasTarget: boolean) {
        if (isLink) {
            let url = "https://maps.google.com/?q=" + 
            source.street + ", " + source.city + ", " + source.zipcode +"&ie=UTF-8";
            url = url.replace("\\s+", "+");

            return "<a href=\'" + url + "\' " + 
                    (hasTarget ? "target='_blank'" : "") + 
                    "class='google-map'><span class='fa fa-map-marker' aria-hidden='true'>" +
                    "</span><span class='off-screen'>View in google map</span><span class='address'>" +
                    source.street + ", " + source.suite + "</span>" +
                    "<span class='address'> " + source.city +", " + source.zipcode + "</span></a>";
        }
        return "<span class='google-map'><span class='fa fa-map-marker' style='margin: 0 5px' aria-hidden='true'>" +
                "</span><span class='address'>" + source.street + ", " + source.suite + "</span>" +
                "<span class='address'> " + source.city +", " + source.zipcode + "</span></span>";
    }
}
