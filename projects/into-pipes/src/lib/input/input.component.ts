import { Component, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'input-component',
    template: `
    <span *ngIf="editName || locked">
    <input #nameEditor
        type='text' 
        [id]="id"
        [name]="name"
        [disabled]="disabled"
        [value]="source"
        [placeholder]="placeholder"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'>
    </span>
    <span #nameHolder
        *ngIf="!locked && !editName && formatting"
        class="locked {{disabled ? 'disabled' : ''}}" 
        tabindex="{{active ? 0 : -1}}"
        (keyup)='handleEdit($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? (source | into:formatting) : '&nbsp;'">
    </span>
    <span #nameHolder
        *ngIf='!locked && !editName && !formatting'
        class='locked' 
        tabindex="{{active ? 0 : -1}}"
        (keyup)='handleEdit($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? source : '&nbsp;'">
    </span>
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
        input {
          cursor: beam;
        }
        :host {width: 100%;display:table;float:left;min-height: 23px}
        :host .locked:hover{border: 1px solid #fabdab;}
        :host .locked.disabled:hover{border-color: transparent;cursor: default;}
        `
    ]
})
export class InputComponent implements PipeComponentInterface {

  data: any;
  source!: string;
  id!: string;
  name!: string;
  placeholder!: string;
  formatting!:string;
  editName = false;
  oldValue!: string;
  disabled = false;
  active = true;
  locked = false;
  validate = (item: any, newValue: any) => true;

  @ViewChild("nameEditor")
  nameEditor: any;

  @ViewChild("nameHolder")
  nameHolder: any;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer2) {

  }

  keyup(event: any) {
    event.stopPropagation();
    event.preventDefault();

    if (!this.disabled) {
      const code = event.which;
      if (!code || (code === 13) || (code === 9) || (code === 27) ) {
        this.blur(event);
      }
    }
  }
  blur(event: any) {
    event.stopPropagation();
    event.preventDefault();

    const newValue = String(event.target.value);
    if (this.oldValue !== newValue) {
      if (this.validate(this.data, newValue)) {
        this.source = newValue;
        this.editName = false;
        this.onIntoComponentChange.emit({
          id: this.id,
          name: this.name,
          value: this.source,
          type: "change",
          item: this.data
        });
      } else {
        this.source = this.oldValue;
        this.editName = false;
      }
    }
    this.editName = false;
    if(!this.disabled && this.oldValue !== String(this.source) && this.validate(this.data, String(this.source))) {
      this.onIntoComponentChange.emit({
        id: this.id,
        name: this.name,
        value: this.source,
        item: this.data
      });
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
      this.editName = true;
      this.oldValue = String(this.source);
      setTimeout(() => {
        this.renderer.selectRootElement(this.nameEditor.nativeElement).focus();
      },66);
    }
  }

  transform(source: any, data: any, args: any[]) {
    this.source= source;
    this.data = data;
    this.placeholder= args.length ? args[0] : "";
    this.formatting = args.length > 1 ? args[1] : "";
    this.locked = args.length > 2;
  }
}

