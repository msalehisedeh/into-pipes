/*
* Defines a filter to convert url into an address display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'address' })
export class AddressPipe implements PipeTransform {
    addressFromString(source) {
        let url = "https://maps.google.com/?q=" + 
                        source.street + ", " + source.city + ", " + source.zipcode +"&ie=UTF-8";
        url = url.replace("\\s+", "+");

        return "<span class='address'><span>" + source.street + ", " + source.suite + "</span>" +
        "<span> " + source.city +", " + source.zipcode + "</span>" + 
        "</span> <a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</a>";
    }
    transform(source: any, ...args: any[]): any {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source);
        } else {
            const result = [];
            source.map((item) => {
                result.push(this.addressFromString(item));
            });
            return result;
        }
    }
}
