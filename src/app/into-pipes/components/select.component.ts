import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
import { PipeComponent, PipeServiceComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'select-component',
    template: `
    <select tabindex="0" (click)="click($event)" (change)="change($event)">
        <option *ngFor="let x of options" [selected]="source === x ? true : null"  [value]="x" [textContent]="x"></option>
    </select>
    `,
    styles: [
        `
        `
    ]
})
export class SelectComponent implements PipeComponent {

  source: string;
  options: string;
  id: string;
  name: string;
  service: PipeServiceComponent;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer) {}

  click(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  change(event) {
    event.stopPropagation();
    event.preventDefault();

    this.source = event.target.value;
    this.onIntoComponentChange.emit({
      id: this.id,
      name: this.name,
      value: this.source
    });
  }

  transform(source: any, data: any, args: any[]) {
    this.source= source;
    this.options = this.service.getDataFor(this.name, this.id, data);
  }
}

