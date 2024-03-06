
import {
	Injectable, 
	ComponentRef, 
	ViewContainerRef,
	EmbeddedViewRef
} from '@angular/core';

import { PipeComponentInterface } from './pipe.component.interface';

@Injectable()
export class ComponentPool {
	private registeredPipes: any= {};
	private registeredComponents: any= {};
	private registeredServices: any= {};
	private registeredPatterns:any = {};

	getRegisteredPatterns() {
		return this.registeredPatterns;
	}
	registerPipeTransformation (name: string, pipe: any) {
		this.registeredPipes[name] = pipe;
	}
	registeredForPipeTransformationNamed(key: string) {
		return this.registeredPipes[key] !== undefined;
	}
	registeredPipeTransformation(key: string, content: any, args: string[], callback?: any, data?: any) {
        const pipe = this.registeredPipes[key];
        
        return pipe ? pipe(content, args, callback, data) : null;
	}
	removePipeTransformation (key: string) {
		delete this.registeredPipes[key];
	}

	registerComponent (name: string, component: any) {
		this.registeredComponents[name] = component;
		this.registeredPatterns[name] = component.settingsPatterns()
	}
	registeredForComponentWithNamed(name: string) {
		return this.registeredComponents[name] !== undefined;
	}
	registeredComponent(
		name: string,
		viewRefrence: ViewContainerRef,
		el: HTMLElement): PipeComponentInterface {
		const component =  name ? this.registeredComponents[name] : undefined;
		let result!: PipeComponentInterface;
		
        if (component) {
			const componentRef: ComponentRef<any> = viewRefrence.createComponent(component);
			const domElem = (componentRef.hostView as EmbeddedViewRef < any > ).rootNodes[0] as HTMLElement;
			el.appendChild(domElem);
			domElem.setAttribute("class", "into");
			result = (<PipeComponentInterface>componentRef.instance);
        }
        return  result;
	}
	removeComponent (name: string) {
		delete this.registeredComponents[name];
	}

	registerServiceForComponent (name: string, service: any) {
		this.registeredServices[name] = service;
	}
	registeredServiceForComponent(name: string): any {
		return this.registeredServices[name];
	}
	registeredForServiceNamed(name: string) {
		return this.registeredServices[name] !== undefined;
	}
	removeServiceForComponent (name: string) {
		delete this.registeredServices[name];
	}
}