import { Component, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'text-component',
    template: `
    <span class="text-wrapper" *ngIf="locked || editName">
      <textarea #nameEditor
        [id]="id"
        [name]="name"
        [value]="source"
        [disabled]="disabled"
        [attr.maxlength]="limit ? limit : null"
        [rows]="rows"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'>
      </textarea>
      <span 
        *ngIf="counter" 
        class="counter" 
        [textContent]="limit ? (limit - source.length) + ' remaining' : source.length + ' typed'">
      </span>
    </span>
    <span #nameHolder
        *ngIf="!locked && !editName"
        class="locked {{disabled ? 'disabled' : ''}}"
        tabindex="{{active ? 0 : -1}}"
        (click)="click($event)"
        (keyup)="focus($event)"
        [innerHTML]="source">
    </span>
    `,
    styles: [
        `
        .locked {
          display: block;
          cursor: pointer;
          min-height: 23px;
          min-width: 33px;
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
        }
        .text-wrapper{box-sizing: border-box;display:table;width: 100%;}
        .text-wrapper textarea {box-sizing: border-box;display:block;cursor: beam;width: 100%;}
        .counter{display: table;float:right;color: #ddd;}
        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 23px;min-width: 33px;}
        :host .locked:hover{border: 1px solid #fabdab;}
        :host .locked.disabled:hover{border-color: transparent;cursor: default;}
        `
    ]
})
export class TextComponent implements PipeComponentInterface {

  source!: string;
  data: any;
  id!: string;
  name!: string;
  rows = 4;
  limit = 0;
  editName = false;
  counter = false;
  locked = false;
  oldValue!: string;
  disabled = false;
  active = true;
  validate = (item: any, newValue: any) => true;

  @ViewChild("nameEditor")
  nameEditor: any;

  @ViewChild("nameHolder")
  nameHolder: any

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer2) {

  }
  keyup(event: any) {   
    if (!this.disabled) {
      const code = event.which;
      if ((code === 48) || (code === 8)) {
        this.source = event.target.value;
      } else if (((code > 48) && (code <= 90)) ||
          ((code >= 96) && (code <= 111)) || (code == 32) ||
          ((code >= 186) && (code <= 222))) {
            if (!this.limit || this.source.length < this.limit) {
              this.source = event.target.value;
            }
      } else if ((code === 13) || (code === 9) || (code === 27) ) {
        this.updateValue(code);
      }
    } 
  }
  private updateValue(code: number) {
    if (!this.disabled) {
      if (this.oldValue !== String(this.source)) {
        if (this.validate(this.data, String(this.source))) {
          this.editName = false;
          this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'blur',
            item: this.oldValue
          });
          this.oldValue = String(this.source);
        } else {
          this.source = this.oldValue;
          this.editName = false;
        }
      }
    }
    if (code === 9 || code === 0) {
      this.editName = false;
    }
  }
  blur(event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.updateValue(0);
  }
  focus(event: any) {
    if (!this.disabled) {
      this.click(event);
    }
  }
  click(event: any) {
    event.stopPropagation();
    event.preventDefault();
  
    if (!this.disabled) {
      this.editName = true;

      setTimeout(()=>{
        if (this.nameEditor) {
          this.renderer.selectRootElement(this.nameEditor.nativeElement).focus();
        }
      },99);
    }
  }
  static settingsPatterns() {
    return ['text:::true:false', 'text:::true:true']; //rows, limit, counter, locked by default
  }
  transform(source: any, data: any, args: any[]) {
    this.data = data;
    this.source = source;
    this.oldValue = source;
    this.rows = args?.length ? args[0] : 4;
    this.limit = args?.length > 1 ? args[1] : 0;
    this.counter = (args?.length && args[2].length) > 2 ? (args[2] === 'true') : false;
    this.locked = (args?.length > 3 && args[3].length) ? args[3] === 'true' : false;
  }
}
