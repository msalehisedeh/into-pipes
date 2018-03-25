import { Component, Renderer } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'input-component',
    template: `
    <input type="checkbox" [value]="source" [checked]="source===ideal ? true : null" (keyup)="keyUp($event)" />
    `,
    styles: [
        `
        `
    ]
})
export class CheckboxComponent implements PipeComponent {

  source: string;
  ideal: string;

  constructor(private renderer: Renderer) {}

  keyup(event) {
    const code = event.which;
    if (code === 13) {
      this.renderer.invokeElementMethod(event.target, "click");
		}
  }

  transform(source: any, args: any[]) {
    this.source= source;
    this.ideal= args.length > 1 ? args[0] : "";
  }
}

