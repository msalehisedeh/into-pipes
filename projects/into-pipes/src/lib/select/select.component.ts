import { Component, Output, EventEmitter } from '@angular/core';
import { PipeComponent, PipeServiceComponent } from '../common/pipe.component';

@Component({
    selector: 'select-component',
    template: `
    <select tabindex="0" 
      [multiple]="multiselect ? true:null" 
      (click)="click($event)" 
      (change)="change($event)">
        <option *ngFor="let x of options" 
          [attr.selected]="source === x ? 'selected' : null"  
          [value]="x" 
          [textContent]="x"></option>
    </select>
    `,
    styles: [
      `
      :host {display:table;float:left;min-height: 23px}
      @media print {
        :host select {
            border: 0;
        }
        :host select::-ms-expand {display: none;}
        :host select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          text-indent: 0.01px;
          text-overflow: "";
          text-indent: 1px;
          text-overflow: '';
        }
      }
      `
    ]
})
export class SelectComponent implements PipeComponent {

  data: any;
  source!: string;
  options!: string;
  id!: string;
  name!: string;
  multiselect = false;
  service!: PipeServiceComponent;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor() {}

  click(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }
  change(event: any) {
    event.stopPropagation();
    event.preventDefault();

    this.source = event.target.value;
    this.onIntoComponentChange.emit({
      id: this.id,
      name: this.name,
      value: this.source,
      type: 'change',
      item: this.data
    });
  }

  transform(source: any, data: any, args: any[]) {
    this.source= source;
    this.data = data;
    this.options = this.service.getDataFor(this.name, this.id, data);
    this.multiselect = args.length ? args[0] === true : false;
  }
}

