import {
    Directive,
    ViewContainerRef,
    ElementRef,
    Input,
    OnInit,
	ComponentFactoryResolver
} from '@angular/core';

import { PipeComponent } from './pipe.component';
import { ComponentPool } from './component.pool';

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
    
    @Input("intoData")
    intoData: any;
    
    @Input("into")
    into: string;

    @Input("onComponentChange")
    onComponentChange = (event) => {};

    constructor(
        private viewRef: ViewContainerRef,
        public el:ElementRef,
        private pool: ComponentPool,
		private componentFactoryResolver: ComponentFactoryResolver
    ) {
    }
    
    private split(item: string) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter((x)=>x.length);
    }
    
    private _transform(content: any, args: string[], data: any) {
        let result = content;

        if (this.pool.registeredForComponentWithNamed(args[0])) {
            const newArgs = args.splice(1,args.length);
            result = this.transformComponent(args[0], content, this.intoId, this.intoName, data, ...newArgs); 
        } else if (this.pool.registeredForPipeTransformationNamed(args[0])) {
            result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this), data); 
        } else {
            // unknown formatter
            try {
                result = this.transformComponent(
                    args[0], 
                    content, 
                    this.intoId, 
                    this.intoName, 
                    data, 
                    args.length > 1 ? args[1] : "", 
                    args.length > 2 ? args[2] : "", 
                    args.length > 3 ? args[3] : "", 
                    args.length > 4 ? args[4] : "", 
                    args.length > 5 ? args[5] : "");
            }catch(x) {
                console.error(x);
            }
        }
        return result;
    }

    private transformComponent(type, content: any, id: string, name: string, data: any,...args: any[]): any {
        let result: any;
        if (content === undefined) {
            return "";
        }
        if (content instanceof Date || typeof content === "string" || typeof content === "number" || typeof content === "boolean" || Object.keys(content).length) {
            result =  this.registeredComponentFor(type);
            if (result === null || result === undefined) {
                console.error("Custom component '" + type+ "' is not defined.");
            } else {
                result.id = id;
                result.name = name;
                result.service = this.pool.registeredServiceForComponent(type);
                result.transform(content.source ? content.source : content, data, args);
                if (result.onIntoComponentChange && this.onComponentChange) {
                    result.onIntoComponentChange.subscribe(this.onComponentChange);
                }
            }
        } else if (content instanceof Array) {
            let counter = 0;
            result = content;
            content.map((source) => {
                if (typeof source === "string" || 
                    typeof content === "number" || 
                    typeof content === "boolean" || 
                    Object.keys(content).length) {

                    const sx = this.registeredComponentFor(type);
                    if (sx === null || sx === undefined) {
                        console.error("Custom component '" + type+ "' is not defined.");
                    } else {
                        sx.id = id + '-' + (counter++);
                        sx.name = name;
                        sx.service = this.pool.registeredServiceForComponent(type);
                        sx.transform(source.source ? source.source : source, data, args);
                        if (sx.onIntoComponentChange && this.onComponentChange) {
                            sx.onIntoComponentChange.subscribe(this.onComponentChange);
                        }
                    }
                }
            });        
        }
        return result;

    }

    private registeredComponentFor(name): PipeComponent {
        return this.pool.registeredComponent(name, this.componentFactoryResolver, this.viewRef, this.el.nativeElement);
    }
    
	ngOnInit() {
		if (this.into || this.rawContent) {
            let result: any =  this.rawContent;
        
            if (this.into) {
                this.into.split("|").map( (item) => {
                    result = this._transform(result, this.split(item), this.intoData);
                });
            }
            if (typeof result === "string") {
                const comp: PipeComponent = this.registeredComponentFor("span");
                if (comp)  {
                    comp.transform(result, [], this.intoData);
                } else {
                    console.error("Custom component 'span' is not defined.");
                }
            } else if (result instanceof Array) {
                result.map((source) => {
                    if (typeof source === "string") {
                        const comp: PipeComponent = this.registeredComponentFor("span");
                        if (comp)  {
                            comp.transform(source, [], this.intoData);
                        } else {
                            console.error("Custom component 'span' is not defined.");
                        }
                    }
                });
            }
        }
    }
}
