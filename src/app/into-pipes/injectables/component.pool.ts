
import { Injectable } from '@angular/core';

import { AddressComponent } from '../components/address.component';
import { EmailComponent } from '../components/email.component';
import { PhoneComponent } from '../components/phone.component';
import { FontComponent } from '../components/font.component';
import { ImageComponent } from '../components/image.component';
import { VideoComponent } from '../components/video.component';
import { JsonComponent } from '../components/json.component';
import { LinkComponent } from '../components/link.component';
import { RatingComponent } from '../components/rating.component';
import { InputComponent } from '../components/input.component';
import { CheckboxComponent } from '../components/checkbox.component';
import { SelectComponent } from '../components/select.component';
import { SpanComponent } from '../components/span.component';
import { ShareComponent } from '../components/share.component';
import { LikeComponent } from '../components/like.component';
import { CalendarComponent } from '../components/calendar.component';
import { LastUpdateComponent } from '../components/lastupdate.component';
import { InputGroupComponent } from '../components/input-group.component';

@Injectable()
export class ComponentPool {
	private registeredComponents= {};
	private registeredServices= {};

	constructor() {
		this.registerComponent("span", SpanComponent);
		this.registerComponent("address", AddressComponent);
		this.registerComponent("email", EmailComponent);
		this.registerComponent("phone", PhoneComponent);
		this.registerComponent("font", FontComponent);
		this.registerComponent("image", ImageComponent);
		this.registerComponent("video", VideoComponent);
		this.registerComponent("json", JsonComponent);
		this.registerComponent("link", LinkComponent);
		this.registerComponent("rating", RatingComponent);
		this.registerComponent("input", InputComponent);
		this.registerComponent("checkbox", CheckboxComponent);
		this.registerComponent("select", SelectComponent);
		this.registerComponent("share", ShareComponent);
		this.registerComponent("like", LikeComponent);
		this.registerComponent("lastupdate", LastUpdateComponent);
		this.registerComponent("calendar", CalendarComponent);
		this.registerComponent("inputgroup", InputGroupComponent);
	}
  
	registerComponent (name: string, component: any) {
		this.registeredComponents[name] = component;
	}
	removeComponent (name: string) {
		delete this.registeredComponents[name];
	}
	registeredComponent(name: string) {
		return this.registeredComponents[name];
	}

	registerServiceForComponent (name: string, service: any) {
		this.registeredServices[name] = service;
	}
	removeServiceForComponent (name: string) {
		delete this.registeredServices[name];
	}
	registeredServiceForComponent(name: string): any {
		return this.registeredServices[name];
	}
}