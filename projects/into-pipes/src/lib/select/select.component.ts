import { Component, Output, EventEmitter, ViewChild, Renderer2 } from '@angular/core';
import { PipeComponentInterface, PipeServiceComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'select-component',
    template: `
    <select 
      *ngIf="locked || editMode"
      tabindex="{{active ? 0 : -1}}" 
      [multiple]="multiselect ? true:null" 
      [disabled]="disabled"
      (change)="change($event)">
        <option *ngFor="let x of options" 
          [attr.selected]="source.indexOf(x) < 0 ? null : 'selected'"  
          [value]="x" 
          [textContent]="x"></option>
    </select>
    <span *ngIf="!locked && !editMode"
      class="locked {{disabled ? 'disabled' : ''}}" 
      tabindex="{{active ? 0 : -1}}"
      (keyup)='handleEdit($event)'
      (click)="clickName($event)">{{source}}</span>
    `,
    styles: [
      `
      .locked {
        display: inline-block;
        cursor: pointer;
        min-width: 30px;
        width: 100%;
        -webkit-user-select: none;       
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
      }
      :host {width: 100%;display:table;float:left;min-height: 23px}
      :host .locked:hover{border: 1px solid #fabdab;}
      :host .locked.disabled:hover{border-color: transparent;cursor: default;}
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
export class SelectComponent implements PipeComponentInterface {

  data: any;
  source!: string;
  options!: string;
  original!: string;
  id!: string;
  name!: string;
  multiselect = false;
  editMode = false;
  locked = false;
  service!: PipeServiceComponentInterface;
  disabled = false;
  active = true;
  validate = (item: any, newValue: any) => true;

  @ViewChild("selectEditor")
  selectEditor: any;
  
  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer2) {
  }

  private getOptions(options: any) {
    const list = [];
    for (let i = 0; i < options.length; i++) {
      list.push(options[i].label);
    }
    return list;
  }
  change(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const options = this.multiselect ? this.getOptions(event.target.selectedOptions) : event.target.value;

    if (!this.disabled && this.validate(this.data, options)) {
      this.source = options;
      this.original = this.source;
      this.editMode = false;
      this.onIntoComponentChange.emit({
        id: this.id,
        name: this.name,
        value: options,
        type: 'change',
        item: this.data
      });
    } else {
      this.source = this.original;
      this.editMode = false;
      event.target.value = this.source;
    }
  }

  handleEdit(event: any) {
    const code = event.which;
    event.stopPropagation();
    event.preventDefault();

    if(!this.disabled && ((code === 13) || (code === 9))) {
      event.target.click();
    }
  }

  clickName(event: any) {
    event.stopPropagation();
    event.preventDefault();

    if (!this.disabled) {
      this.editMode = true;
    }
  }

  transform(source: any, data: any, args: any[]) {
    this.original = source;
    this.source= source;
    this.data = data;
    this.options = this.service.getDataFor(this.name, this.id, data);
    this.multiselect = args.length ? args[0] === 'true' : false;
    this.locked = args.length > 1 ? args[1] : false;
  }
}

