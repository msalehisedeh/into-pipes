import { Component, Renderer2, Output, EventEmitter } from '@angular/core';
import { PipeComponentInterface, PipeServiceComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'input-group-component',
    template: `
    <span class="input-group-item" *ngFor="let x of options; let i = index">
      <input 
        [type]="type" 
        [id]="name + i" 
        tabindex="{{active ? 0 : -1}}"
        [name]="name + (type === 'radio' ? '' : i)" 
        [value]="x.value ? x.value : x" 
        [disabled]="disabled"
        [checked]="isSelected(x)"
        (keyup)='keyup($event)'
        (change)="change($event)"/>
      <label [for]="name + i" [textContent]="x.label ? x.label : x"></label>
    </span>
    <span class="selected-value" [textContent]="source"></span>
    `,
    styles: [
      `
      :host {display:table;float:left;min-height: var(--sedeh-min-height, 25px)}
      :host .selected-value {display:none}
      @media print {
        :host .selected-value {display: block;}
        :host .input-group-item {display: none;}
      }
      `
    ]
})
export class InputGroupComponent implements PipeComponentInterface {

  data: any;
  source: any;
  options!: any;
  id!: string;
  name!: string;
  type!: string;
  disabled = false;
  active = true;
  validate = (item: any, newValue: any) => true;

  service!: PipeServiceComponentInterface;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  keyup(event: any) {
    const code = event.which;
    event.stopPropagation();
    event.preventDefault();

    if (code === 13 && !this.disabled) {
        event.target.click();
    }
  }
  change(event:any) {
    event.stopPropagation();
    event.preventDefault();
    if (!this.disabled) {
      let index = -1;
      this.options.map((option: any, i: number) => {const v = option.value ? option.value : option; if (v === event.target.value)index = i});
      const change = {index:  index, value: event.target.value};
      if (this.validate(this.data, change)) {
        if (this.type === 'radio') {
          this.source = change.value;
        } else {
          if (event.target.checked) {
            this.source.push(event.target.value);
          } else {
            const x = (<any[]>this.source).indexOf(event.target.value);
            this.source.splice(change.index,x);
          }
        }
        this.onIntoComponentChange.emit({
          id: this.id,
          name: this.name,
          value: this.source,
          type: "select",
          item: this.data
        });
      } else {
        this.options = JSON.parse(JSON.stringify(this.options))
      }
    }
  }
  isSelected(item: any) {
    const xitem = item.value ? item.value : item;
    if (this.type === 'radio') {
      return xitem === this.source;
    }
    let found = false;
    this.source.map((x: any) => {
      if (xitem === x) {
        found = true;
      }
    });
    return found;
  }

  static settingsPatterns() {
    return ['inputgroup']; //no argument
  }
  transform(source: any, data: any, args: any[]) {
    this.source= source;
    this.data = data;
    this.options = this.service.getDataFor(this.name, this.id, data);
    this.type = (source instanceof Array) ? 'checkbox' : 'radio';
  }
}

