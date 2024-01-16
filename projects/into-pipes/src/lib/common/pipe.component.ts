import { EventEmitter } from '@angular/core';

export interface PipeComponent {
	source: any;
	id: string;
	name: string;
	service?:PipeServiceComponent;
	onIntoComponentChange: EventEmitter<any>;

	transform(source: any, data: any, args?: any[]): void;
}

export interface PipeServiceComponent {
	getDataFor(name: string, id: string, item: any): any;
}