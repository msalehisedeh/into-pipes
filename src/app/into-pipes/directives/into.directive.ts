import {
    Directive,
    ViewContainerRef,
    Input,
    OnInit,
	ComponentFactoryResolver
} from '@angular/core';

import {
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    SlicePipe,
    UpperCasePipe,
    LowerCasePipe
} from '@angular/common';

import {PrependPipe} from '../pipes/prepend.pipe';
import {AppendPipe} from '../pipes/append.pipe';
import {WrapPipe} from '../pipes/wrap.pipe';
import {MapPipe} from '../pipes/map.pipe';
import {MaskPipe} from '../pipes/mask.pipe';
import {ValueOfPipe} from '../pipes/valueof.pipe';
import {ConditionalPipe} from '../pipes/conditional.pipe';
import {JoinPipe} from '../pipes/join.pipe';

import { PipeComponent } from '../interfaces/pipe.component';
import { ComponentPool } from '../injectables/component.pool';

@Directive({
    selector: '[into]'
})
export class IntoDirective implements OnInit {
    
    @Input("rawContent")
    rawContent: string;
    
    @Input("intoId")
    intoId: string;
    
    @Input("intoName")
    intoName: string;
    
    @Input("into")
    into: string;

    constructor(
        private el: ViewContainerRef,
        private pool: ComponentPool,
		private componentFactoryResolver: ComponentFactoryResolver
    ) {
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
            case "map" : 
                // map:key1;value1/key2;value2/key3;value3
                result =  new MapPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "date" : 
                // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
                const date = ((typeof content === "string") || !(content instanceof Array)) ? new Date(content) : content;
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
            case "join" : 
                // json
                result = new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
                break;
            case "json" : 
                // json
                result = this.transformComponent("json", content, this.intoId, this.intoName, ""); 
                break;
            case "font" : 
                // font:fa fa-check:left:*
                result = this.transformComponent("font", content, this.intoId, this.intoName, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : ""); 
                break;
            case "email" : 
                // email
                result = this.transformComponent("email", content, this.intoId, this.intoName, ""); 
                break;
            case "address" : 
                // address
                result = this.transformComponent("address", content, this.intoId, this.intoName, ""); 
                break;
            case "rating" : 
                // rating
                result = this.transformComponent("rating", content, this.intoId, this.intoName, "");
                break;
            case "link" : 
                // link:target:text or link:text or link
                if (args.length > 2) {
                    result = this.transformComponent("link", content, this.intoId, this.intoName, args[1], args[2]);
                } else if (args.length > 1) {
                    result = this.transformComponent("link", content, this.intoId, this.intoName, "", args[1]);
                } else {
                    result = this.transformComponent("link", content, this.intoId, this.intoName, "", "");
                }
                break;
            case "input" : 
                // input:placeholder:pipe
                result = this.transformComponent("input", content, this.intoId, this.intoName, args[1], args.length > 2 ? args[2] : "");
                break;
            case "checkbox" : 
                // input:ideal:useFont
                result = this.transformComponent("checkbox", content, this.intoId, this.intoName, args[1], args.length > 2 ? args[2] : "");
                break;
            case "image" : 
                // image:200px:auto:alttext OR image:200px:alternate-text OR image:200px OR image
                if (args.length > 3) {
                    result = this.transformComponent("image", content, this.intoId, this.intoName, args[1], args[2], args[3]);
                } else if (args.length > 2) {
                    result = this.transformComponent("image", content, this.intoId, this.intoName, args[1], args[2]);
                } else if (args.length > 1) {
                    result = this.transformComponent("image", content, this.intoId, this.intoName, args[1]);
                } else {
                    result = this.transformComponent("image", content, this.intoId, this.intoName, "");
                }
                break;
            default:
                // unknown formatter
                try {
                    result = this.transformComponent(
                        args[0], 
                        content, 
                        this.intoId, 
                        this.intoName, 
                        args.length > 1 ? args[1] : "", 
                        args.length > 2 ? args[2] : "", 
                        args.length > 3 ? args[3] : "", 
                        args.length > 4 ? args[4] : "", 
                        args.length > 5 ? args[5] : "");
                }catch(x) {
                    console.error(x);
                }
                break;
        }
        return result;
    }

    private transformComponent(type, content: any, id: string, name: string,...args: any[]): any {
        let result: any;

        if (typeof content === "string" || typeof content === "number" || Object.keys(content).length) {
            result =  this.registeredComponentFor(type);
            result.id = id;
            result.name = name;
            result.transform(content.source ? content.source : content, args);
        } else if (content instanceof Array) {
            let counter = 0;
            result = content;
            content.map((source) => {
                if (typeof source === "string" || typeof content === "number" || Object.keys(content).length) {
                    const sx = this.registeredComponentFor(name);
                    sx.id = id + '-' + (counter++);
                    sx.name = name;
                    sx.transform(source.source ? source.source : source, args);
                }
            });        
        }
        return result;

    }

    private registeredComponentFor(name): PipeComponent {
        const component = this.pool.registeredComponent(name);
        let componentRef;
        if (component) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            componentRef = this.el.createComponent(componentFactory);
        }
        return  (<PipeComponent>componentRef.instance);
    }
    
	ngOnInit() {
		if (this.into && this.rawContent) {
            let result: any =  this.rawContent;
        
            this.into.split("|").map( (item) => {
                result = this._transform(result, this.split(item));
            });
            if (typeof result === "string") {
                this.registeredComponentFor("span").transform(result);
            } else if (result instanceof Array) {
                result.map((source) => {
                    if (typeof source === "string") {
                        this.registeredComponentFor("span").transform(source);
                    }
                });
            }
        }
	}
}