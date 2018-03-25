import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'input-component',
    template: `
    <span *ngIf="useFont">
      <span *ngIf="source === ideal" #check tabindex="0" class="fa fa-check" (keyup)="keyup($event)" (click)="click($event)"></span>
      <span *ngIf="source !== ideal" #uncheck tabindex="0" class="fa fa-close" (keyup)="keyup($event)" (click)="click($event)"></span>
    </span>
    <input *ngIf="!useFont" 
            type="checkbox" 
            tabindex="0" 
            [value]="source" 
            [checked]="source===ideal ? true : null" 
            (keyup)="keyup($event)"
            (click)="click($event)" />
    `,
    styles: [
        `
        `
    ]
})
export class CheckboxComponent implements PipeComponent {

  source: string;
  original: string;
  ideal: string;
  id: string;
  name: string;
  useFont: boolean;

  @ViewChild("check")
  check;

  @ViewChild("uncheck")
  uncheck;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer) {}

  keyup(event) {
    const code = event.which;
    if (code === 13) {
      this.renderer.invokeElementMethod(event.target, "click");
		}
  }

  click(event) {
    const input = event.target;
    if (this.source === this.original) {
      this.source = "";
		} else {
      this.source = this.original;
    }
    this.onIntoComponentChange.emit({
      id: this.id,
      name: this.name,
      value: this.source
    });
    if (this.useFont) {
      setTimeout(()=>{
        if (this.source === this.original && this.check) {
          this.renderer.invokeElementMethod(this.check.nativeElement, "focus");
        }
        if (this.source === '' && this.uncheck) {
          this.renderer.invokeElementMethod(this.uncheck.nativeElement, "focus");
        }
      },66);
    }
  }

  transform(source: any, args: any[]) {
    this.source= source;
    this.original= source;
    this.id= source;
    this.ideal= args.length > 1 ? args[0] : "";
    this.useFont= args.length > 2 ? Boolean(args[1]) : false;
  }
}

