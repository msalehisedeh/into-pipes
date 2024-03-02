import {
    Directive,
    ViewContainerRef,
    ElementRef,
    Input,
    OnInit,
	ComponentFactoryResolver
} from '@angular/core';

import { PipeComponentInterface } from './pipe.component.interface';
import { ComponentPool } from './component.pool';

@Directive({
    selector: '[into]'
})
export class IntoDirective implements OnInit {
    private components: any = [];
    private disabledComponents = false;
    private activeComponents = true;
    private validatingMethod = (item: any, value: any) => true;
    
    @Input("rawContent")
    rawContent!: any;
    
    @Input("intoId")
    intoId!: any;
    
    @Input("intoName")
    intoName!: any;
    
    @Input("intoData")
    intoData: any;

    @Input("disabled")
    set disabled(value: boolean){
        this.disabledComponents = value;
        this.components.map((c: any) => c.disabled = value);
    }
    
    @Input("active")
    set active(value: boolean){
        this.activeComponents = value;
        this.components.map((c: any) => c.active = value);
    }
    
    @Input("validate")
    set validate(value: any){
        this.validatingMethod = value;
        this.components.map((c: any) => c.validate = value);
    }
    
    @Input("into")
    into!: string | string[] | undefined;

    @Input("onComponentChange")
    onComponentChange = (event: any) => {};

    constructor(
        private viewRef: ViewContainerRef,
        public el:ElementRef,
        private pool: ComponentPool,
		private componentFactoryResolver: ComponentFactoryResolver
    ) {
    }
    
    private split(item: any) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g)?.filter((x: any)=>x.length);
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

    private transformComponent(type: any, content: any, id: string, name: string, data: any,...args: any[]): any {
        let result = content;
        if (content === undefined) {
            return "";
        }
        if (content instanceof Date || typeof content === "string" || typeof content === "number" || typeof content === "boolean" || Object.keys(content).length) {
            result =  this.registeredComponentFor(type);
            if (result === null || result === undefined) {
                console.error("Custom component '" + type+ "' is not defined.");
                result = content;
            } else {
                result.id = id;
                result.name = name;
                result.active = this.activeComponents;
                result.disabled = this.disabledComponents;
                result.validate = this.validatingMethod;
                result.service = this.pool.registeredServiceForComponent(type);
                result.transform(content.source ? content.source : content, data, args);
                if (result.onIntoComponentChange && this.onComponentChange) {
                    result.onIntoComponentChange.subscribe(this.onComponentChange);
                }
                this.components.push(result);
            }
        } else if (content instanceof Array) {
            let counter = 0;
            result = content;
            content.map((source) => {
                if (typeof source === "string" || 
                    typeof content === "number" || 
                    typeof content === "boolean" || 
                    Object.keys(content).length) {

                    const comp = this.registeredComponentFor(type);
                    if (comp === null || comp === undefined) {
                        console.error("Custom component '" + type+ "' is not defined.");
                    } else {
                        comp.id = id + '-' + (counter++);
                        comp.name = name;
                        comp.active = this.activeComponents;
                        comp.disabled = this.disabledComponents;
                        comp.validate = this.validatingMethod;
                        comp.service = this.pool.registeredServiceForComponent(type);
                        comp.transform(source.source ? source.source : source, data, args);
                        if (comp.onIntoComponentChange && this.onComponentChange) {
                            comp.onIntoComponentChange.subscribe(this.onComponentChange);
                        }
                        this.components.push(comp);
                    }
                }
            });        
        }
        return result;

    }

    private registeredComponentFor(name: string): PipeComponentInterface {
        return this.pool.registeredComponent(name, this.componentFactoryResolver, this.viewRef, this.el.nativeElement);
    }
    private initInstance(into: string) {
        let result: any =  this.rawContent;
        if (into) {
            into.split("|").map( (item) => {
                result = this._transform(result, this.split(item), this.intoData);
            });
        }
        if (typeof result === "string") {
            const comp: PipeComponentInterface = this.registeredComponentFor("span");
            if (comp)  {
                comp.transform(result, [], this.intoData);
                this.components.push(comp);
            } else {
                console.error("Custom component 'span' is not defined.");
            }
        } else if (result instanceof Array) {
            result.map((source) => {
                if (typeof source === "string") {
                    const comp: PipeComponentInterface = this.registeredComponentFor("span");
                    if (comp)  {
                        comp.transform(source, [], this.intoData);
                        this.components.push(comp);
                    } else {
                        console.error("Custom component 'span' is not defined.");
                    }
                }
            });
        }
    }
    
	ngOnInit() {
		if (this.into) {
            if (typeof this.into === 'string') {
                this.initInstance(this.into);
            } else {
                this.into.map((into: string) => this.initInstance(into));
            }
        }
    }
}
