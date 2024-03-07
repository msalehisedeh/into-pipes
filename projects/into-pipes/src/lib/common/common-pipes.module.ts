import { NgModule, ModuleWithProviders, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { 
    CommonModule,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe
} from '@angular/common';

import {AppendPipe} from './append.pipe';
import {ConditionalPipe} from './conditional.pipe';
import {JoinPipe} from './join.pipe';
import {MapPipe} from './map.pipe';
import {MaskPipe} from './mask.pipe';
import {PrependPipe} from './prepend.pipe';
import {SanitizeHtmlPipe} from './sanitizeHtml.pipe';
import {ValueOfPipe} from './valueof.pipe';
import {WrapPipe} from './wrap.pipe';
import { InToPipe } from './into.pipe';
import { IntoDirective } from './into.directive'
import { ComponentPool } from './component.pool';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppendPipe,
    ConditionalPipe,
    JoinPipe,
    MapPipe,
    MaskPipe,
    PrependPipe,
    SanitizeHtmlPipe,
    ValueOfPipe,
    WrapPipe,
    InToPipe,
    IntoDirective
  ],
  exports: [
    AppendPipe,
    ConditionalPipe,
    JoinPipe,
    MapPipe,
    MaskPipe,
    PrependPipe,
    SanitizeHtmlPipe,
    ValueOfPipe,
    WrapPipe,
    InToPipe,
    IntoDirective
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonPipesModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CommonPipesModule,
      providers: [
        DatePipe,
        CurrencyPipe,
        DecimalPipe,
        JsonPipe,
        SlicePipe,
        UpperCasePipe,
        LowerCasePipe,
    
        AppendPipe,
        ConditionalPipe,
        JoinPipe,
        MapPipe,
        MaskPipe,
        PrependPipe,
        SanitizeHtmlPipe,
        ValueOfPipe,
        WrapPipe,
        ComponentPool,
        InToPipe
      ]
    }
  }
  constructor(@Inject(ComponentPool)  pool: ComponentPool) {
    pool.registerPipeTransformation('append', AppendPipe.transformationMethod());
    pool.registerPipeTransformation('if', ConditionalPipe.transformationMethod());
    pool.registerPipeTransformation('join', JoinPipe.transformationMethod());
    pool.registerPipeTransformation('map', MapPipe.transformationMethod());
    pool.registerPipeTransformation('mask', MaskPipe.transformationMethod());
    pool.registerPipeTransformation('prepend', PrependPipe.transformationMethod());
    pool.registerPipeTransformation('valueof', ValueOfPipe.transformationMethod());
    pool.registerPipeTransformation('wrap', WrapPipe.transformationMethod());

    pool.registerPipeTransformation('slice',
      (content: any, args: string[], callback?: any, data?: any) => {
        // slice 5:12 OR slice 5
        let result: any;
        let start = parseInt(args[1], 10);
        let end: any = undefined;
        if (args && args.length > 2) {
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
        return result;
      }
    );

    pool.registerPipeTransformation('number',
      (content: any, args: string[], callback?: any, data?: any) => {
        // number:en_US:2   or number:en_US or number
        let result: any;
        let numLocal = "en_US";
        let numDecimal: any= undefined;
        if (args && args.length > 2) {
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
        return result;
      }
    );

    pool.registerPipeTransformation('currency',
      (content: any, args: string[], callback?: any, data?: any) => {
        // currency:en_US or currency
        let result: any;
        const cp = new CurrencyPipe(args && args.length > 1 ? args[1] : "en_US");
        if ((typeof content === "string") || !(content instanceof Array)) {
            result = cp.transform(content);
        } else {
            result = [];
            content.map((cnt) => {
                result.push(cp.transform(cnt));
            });
        }
        return result;
      }
    );

    pool.registerPipeTransformation('lowercase',
      (content: any, args: string[], callback?: any, data?: any) => {
        // lowercase
        let result: any;
        const lcp =  new LowerCasePipe();
        if ((typeof content === "string") || !(content instanceof Array)) {
            result = lcp.transform(content);
        } else {
            result = [];
            content.map((cnt) => {
                result.push(lcp.transform(cnt));
            });
        }
        return result;
      }
    );

    pool.registerPipeTransformation('uppercase',
      (content: any, args: string[], callback?: any, data?: any) => {
        // uppercase
        let result: any;
        const ucp =  new UpperCasePipe();
        if ((typeof content === "string") || !(content instanceof Array)) {
            result = ucp.transform(content);
        } else {
            result = [];
            content.map((cnt) => {
                result.push(ucp.transform(cnt));
            });
        }
        return result;
      }
    );

    pool.registerPipeTransformation('json',
      (content: any, args: string[], callback?: any, data?: any) => {
        // json
        let result: any;
        const jcp =  new JsonPipe();
        if ((typeof content === "string") || !(content instanceof Array)) {
            result = jcp.transform(content);
        } else {
            result = [];
            content.map((cnt) => {
                result.push(jcp.transform(cnt));
            });
        }
        return result;
      }
    );

    pool.registerPipeTransformation('date',
      (content: any, args: string[], callback?: any, data?: any) => {
        // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
        // const date = ((typeof content === "string") || !(content instanceof Array)) ? new Date(content) : content;
        let result: any;
        let dateLocal = "en_US";
        let dateFormat= args[1];
        if (args && args.length > 2) {
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
        return result;
      }
    );
  }
}
