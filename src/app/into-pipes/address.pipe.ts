/*
* Defines a filter to convert url into an address display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'address' })
export class AddressPipe implements PipeTransform {
    transform(source: any, ...args: any[]): string {
        let url = "https://maps.google.com/?q=" + 
                        source.street + ", " + source.city + ", " + source.zipcode +"&ie=UTF-8";
        url = url.replace("\\s+", "+");

        return "<span class='address'><span>" + source.street + ", " + source.suite + "</span>" +
        "<span> " + source.city +", " + source.zipcode + "</span>" + 
        "</span> <a href=\'" + url + "\' class='google-map'><span class='fa fa-map-marker' aria-hidden='true'></span><span class='off-screen'>View in google map</a>";
    }
}
