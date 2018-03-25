
import {
    Injectable,
    Injector
} from '@angular/core';

import { PipeComponent } from '../interfaces/pipe.component';

import { AddressComponent } from '../components/address.component';
import { EmailComponent } from '../components/email.component';
import { FontComponent } from '../components/font.component';
import { ImageComponent } from '../components/image.component';
import { JsonComponent } from '../components/json.component';
import { LinkComponent } from '../components/link.component';
import { RatingComponent } from '../components/rating.component';
import { InputComponent } from '../components/input.component';
import { CheckboxComponent } from '../components/checkbox.component';
import { SpanComponent } from '../components/span.component';

@Injectable()
export class ComponentPool {
	private registeredComponents= {};

	constructor() {
		this.registerComponent("span", SpanComponent);
		this.registerComponent("address", AddressComponent);
		this.registerComponent("email", EmailComponent);
		this.registerComponent("font", FontComponent);
		this.registerComponent("image", ImageComponent);
		this.registerComponent("json", JsonComponent);
		this.registerComponent("link", LinkComponent);
		this.registerComponent("rating", RatingComponent);
		this.registerComponent("input", InputComponent);
		this.registerComponent("checkbox", CheckboxComponent);
	}
  
	registerComponent (name, component: any) {
		this.registeredComponents[name] = component;
	}
	registeredComponent(name) {
		return this.registeredComponents[name];
	}
}