import { Component, Renderer, Output, EventEmitter } from '@angular/core';
import { PipeComponent, PipeServiceComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'input-group-component',
    template: `
    <span class="input-group-item" *ngFor="let x of options; let i = index">
        <input 
            [type]="type" 
            [id]="name + i" 
            [name]="name + (type === 'radio' ? '' : i)" 
            [value]="x.value ? x.value : x" 
            [checked]="isSelected(x)"
            (click)="click($event)"/>
        <label [for]="name + i" [textContent]="x.label ? x.label : x"></label>
    </span>
    `,
    styles: [
        `
        :host {display:table;float:left;min-height: 23px}
        `
    ]
})
export class InputGroupComponent implements PipeComponent {

  data: any;
  source: any;
  options: string;
  id: string;
  name: string;
  type: string;
  service: PipeServiceComponent;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer) {}

  click(event) {
    event.stopPropagation();

    if (this.type === 'radio') {
      this.source = event.target.value;
    } else {
      const i = this.source.indexOf(event.target.value);
      if (event.target.checked) {
        if (i < 0) {
          this.source.push(event.target.value);
        }
      } else {
        this.source.splice(i,1);
      }
    }

    this.onIntoComponentChange.emit({
      id: this.id,
      name: this.name,
      value: this.source,
      item: this.data
    });
  }
  isSelected(item) {
    const xitem = item.value ? item.value : item;
    if (this.type === 'radio') {
      return xitem === this.source;
    }
    let found = false;
    this.source.map((x) => {
      if (xitem === x) {
        found = true;
      }
    });
    return found;
  }

  transform(source: any, data: any, args: any[]) {
    this.source= source;
    this.data = data;
    this.options = this.service.getDataFor(this.name, this.id, data);
    this.type = (source instanceof Array) ? 'checkbox' : 'radio';
  }
}

