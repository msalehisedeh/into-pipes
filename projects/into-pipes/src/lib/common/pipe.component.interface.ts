import { EventEmitter } from '@angular/core';

export interface PipeComponentInterface {
	source: any;
	id: string;
	name: string;
	disabled: boolean;
    active: boolean;
    validate(item: any, newValue: any): boolean;

	service?:PipeServiceComponentInterface;
	onIntoComponentChange: EventEmitter<any>;

	transform(source: any, data: any, args?: any[]): void;
}

export interface PipeServiceComponentInterface {
	getDataFor(name: string, id: string, item: any): any;
}