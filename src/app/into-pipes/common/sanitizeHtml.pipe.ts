/*
* Takes care of problem with security precausions that strip out certain characters 
* from end result of your requests.
* code taken from https://stackoverflow.com/questions/39681163/angular-2-sanitizing-html-stripped-some-content-with-div-id-this-is-bug-or-fe
*/
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer:DomSanitizer) {
  }

  transform(v:string):SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}