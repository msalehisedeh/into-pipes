import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'checkbox-component',
    template: `
    <span *ngIf="useFont" class="check-font">
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
        .check-font:hover{color: #fabdab;}
        .check-font {cursor: pointer;}
        `
    ]
})
export class CheckboxComponent implements PipeComponent {

  data: any;
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
    event.stopPropagation();
    event.preventDefault();

    if (this.source === this.ideal) {
      this.source = this.original;
		} else {
      this.source = this.ideal;
    }
    this.onIntoComponentChange.emit({
      id: this.id,
      name: this.name,
      value: this.source,
      item: this.data
    });
    if (this.useFont) {
      setTimeout(() => {
        if (this.check) {
          this.renderer.invokeElementMethod(this.check.nativeElement, "focus");
        }
        if (this.uncheck) {
          this.renderer.invokeElementMethod(this.uncheck.nativeElement, "focus");
        }
      },66);
    }
  }

  transform(source: any, data: any, args: any[]) {
    this.ideal= args.length ? String(args[0]) : "";
    this.useFont= args.length > 1 ? Boolean(args[1]) : false;
    this.source= String(source);
    this.data = data;
    this.original= this.source === this.ideal ? "" : source;
  }
}

