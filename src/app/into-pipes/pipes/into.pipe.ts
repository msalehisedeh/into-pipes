import { Pipe, PipeTransform  } from '@angular/core';

import {
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  JsonPipe,
  SlicePipe,
  UpperCasePipe,
  LowerCasePipe
} from '@angular/common';

import {MaskPipe} from './mask.pipe';
import {MapPipe} from './map.pipe';
import {ValueOfPipe} from './valueof.pipe';
import {LinkPipe} from './link.pipe';
import {ImagePipe} from './image.pipe';
import {VideoPipe} from './video.pipe';
import {PrependPipe} from './prepend.pipe';
import {AppendPipe} from './append.pipe';
import {WrapPipe} from './wrap.pipe';
import {PhonePipe} from './phone.pipe';
import {EmailPipe} from './email.pipe';
import {RatingPipe} from './rating.pipe';
import {AddressPipe} from './address.pipe';
import {JoinPipe} from './join.pipe';
import {FontPipe} from './font.pipe';
import {ConditionalPipe} from './conditional.pipe';

@Pipe({name:'into'})
export class InToPipe implements PipeTransform{
transform(content: any, list: string): any {
    let result = content;
    
    list.split("|").map( (item) => {
        result = this._transform(result, this.split(item));
    });

    return result;
  }

  private split(item) {
      return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter((x)=>x.length);
  }

  private _transform(content: any, args: string[]) {
    let result = content;

    switch(args[0]){
        case "slice" : 
            // slice 5:12 OR slice 5
            let start = parseInt(args[1], 10);
            let end = undefined;
            if (args.length > 2) {
                end= parseInt(args[2], 10);
            }
            const slicer =new SlicePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = end ? slicer.transform(content, start, end) : slicer.transform(content, start);
            } else {
                result = [];
                content.map((cnt) => {
                    result.push(end ? slicer.transform(cnt, start, end) : slicer.transform(cnt, start));
                });
            }
            break;
        case "number" : 
            // number:en_US:2   or number:en_US or number
            let numLocal = "en_US";
            let numDecimal= undefined;
            if (args.length > 2) {
                numLocal = args[1];
                numDecimal= args[2];
            }
            const decimaler =new DecimalPipe(numLocal);
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = numDecimal ? decimaler.transform(content, numDecimal) : decimaler.transform(content);
            } else {
                result = [];
                content.map((cnt) => {
                    result.push(numDecimal ? decimaler.transform(cnt, numDecimal) : decimaler.transform(cnt));
                });
            }
            break;
        case "if" : 
            // if:=:true:fa fa-check:fa fa-bell
            const acondition =  args.length > 1 ? args[1] : "";
            const value =  args.length > 2 ? args[2] : "";
            const action =  args.length > 3 ? args[3] : "";
            const altAction =  args.length > 4 ? args[4] : "";
            result = new ConditionalPipe().transform(content, acondition, value, action, altAction);
            if (typeof result === "string") {
                result = result[0] === '"' ? result.substring(1,result.length-1) : result;
                result = this._transform(content,this.split(result));
            }
            break;
        case "font" : 
            // font:fa fa-check:left:*
            result = new FontPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : ""); 
            break;
        case "currency" : 
            // currency:en_US or currency
            const cp = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = cp.transform(content);
            } else {
                result = [];
                content.map((cnt) => {
                    result.push(cp.transform(cnt));
                });
            }
            break;
        case "wrap" : 
            // wrap:something:something  OR wrap:something
            result = new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]); 
            break;
        case "append" : 
            // append:something
            result = new AppendPipe().transform(content, args.length > 1 ? args[1] : ""); 
            break;
            case "prepend" : 
            // prepend:something
            result = new PrependPipe().transform(content, args.length > 1 ? args[1] : ""); 
            break;
        case "phone" : 
            // prepend:something
            result = new PhonePipe().transform(content, args.length > 1 ? args[1]==='true' : false, args.length > 2 ? args[2] === 'true' : false); 
            break;
        case "email" : 
            // email
            result = new EmailPipe().transform(content, ""); 
            break;
        case "address" : 
            // address
            result = new AddressPipe().transform(content, ""); 
            break;
        case "rating" : 
            // rating
            result = new RatingPipe().transform(content, ""); 
            break;
        case "map" : 
            // map:key1;value1/key2;value2/key3;value3
            result =  new MapPipe().transform(content, args.length > 1 ? args[1] : "");
            break;
        case "date" : 
            // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
            // const date = ((typeof content === "string") || !(content instanceof Array)) ? new Date(content) : content;
            let dateLocal = "en_US";
            let dateFormat= args[1];
            if (args.length > 2) {
                dateLocal = args[1];
                dateFormat= args[2];
            }
            const dater =new DatePipe(dateLocal);
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = dater.transform(content);
            } else {
                result = [];
                content.map((cnt) => {
                    result.push(dater.transform(cnt));
                });
            }
            break;
        case "json" : 
            // json
            const jcp =  new JsonPipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = jcp.transform(content);
            } else {
                result = [];
                content.map((cnt) => {
                    result.push(jcp.transform(cnt));
                });
            }
            break;
        case "join" : 
            // json
            result = new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
            break;
        case "uppercase" : 
            // uppercase
            const ucp =  new UpperCasePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = ucp.transform(content);
            } else {
                result = [];
                content.map((cnt) => {
                    result.push(ucp.transform(cnt));
                });
            }
            break;
        case "lowercase" : 
            // lowercase
            const lcp =  new LowerCasePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = lcp.transform(content);
            } else {
                result = [];
                content.map((cnt) => {
                    result.push(lcp.transform(cnt));
                });
            }
            break;
        case "mask" : 
            // mask:4:*  OR mask:4
            if (args.length > 2) {
                result = new MaskPipe().transform(content, parseInt(args[1], 10), args[2]);
            }else if (args.length > 1) {
                result =  new MaskPipe().transform(content, args[1]);
            } else {
                result =  new MaskPipe().transform(content);
            }
            break;
        case "valueof" : 
            // valueof:key
            result =  new ValueOfPipe().transform(content, args.length > 1 ? args[1] : "");
            break;
        case "link" : 
            // link:target:text or link:text or link
            if (args.length > 2) {
                result =  new LinkPipe().transform(content, args[1], args[2]);
            } else if (args.length > 1) {
                result =  new LinkPipe().transform(content, "", args[1]);
            } else {
                result =  new LinkPipe().transform(content, "", "");
            }
            break;
        case "image" : 
            // image:200px:auto:alttext OR image:200px:alternate-text OR image:200px OR image
            if (args.length > 3) {
                result =  new ImagePipe().transform(content, args[1], args[2], args[3]);
            } else if (args.length > 2) {
                result =  new ImagePipe().transform(content, args[1], args[2]);
            } else if (args.length > 1) {
                result =  new ImagePipe().transform(content, args[1]);
            } else {
                result =  new ImagePipe().transform(content, "");
            }
            break;
        case "video" : 
            // video:200px:auto:alttext OR video:200px:alternate-text OR video:200px OR video
            if (args.length > 3) {
                result =  new VideoPipe().transform(content, args[1], args[2], args[3]);
            } else if (args.length > 2) {
                result =  new VideoPipe().transform(content, args[1], args[2]);
            } else if (args.length > 1) {
                result =  new VideoPipe().transform(content, args[1]);
            } else {
                result =  new VideoPipe().transform(content, "");
            }
            break;
    }
    return result;
  }
}
