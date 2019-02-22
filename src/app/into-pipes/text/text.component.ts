import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'text-component',
    template: `
    <span class="text-wrapper" *ngIf="editName">
      <textarea #nameEditor
        [id]="id"
        [name]="name"
        [value]="source"
        [attr.maxlength]="limit ? limit : null"
        [rows]="rows"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'></textarea>
      <span *ngIf="counter" class="counter" 
        [textContent]="limit ? (limit - source.length) + ' remaining' : source.length + ' typed'"></span>
    </span>
    <span #nameHolder
        *ngIf='!editName'
        class='locked' 
        tabindex='0' 
        (click)='click($event)'
        (keyup)='focus($event)'
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
        `
    ]
})
export class TextComponent implements PipeComponent {

  source: string;
  id: string;
  name: string;
  rows = 4;
  limit = 0;
  editName = false;
  counter = false;
  oldValue: string;

  @ViewChild("nameEditor")
  nameEditor;

  @ViewChild("nameHolder")
  nameHolder

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer) {

  }
  keyup(event: any) {    
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
      this.editName = false;

      if (this.oldValue !== String(this.source)) {
        this.onIntoComponentChange.emit({
          id: this.id,
          name: this.name,
          value: this.source,
          type: 'change',
          item: this.oldValue
        });
        this.oldValue = String(this.source);
      }
      if (code === 13) {
        setTimeout(()=>{
          if (this.nameHolder) {
            this.renderer.invokeElementMethod(this.nameHolder.nativeElement, "focus");
          }
        },99);
      }
    }
  }
  blur(event: any) {
    event.stopPropagation();
    event.preventDefault();

    this.editName = false;
    if (this.oldValue !== String(this.source)) {
      this.onIntoComponentChange.emit({
        id: this.id,
        name: this.name,
        value: this.source,
        type: 'blur',
        item: this.oldValue
      });
      this.oldValue = String(this.source);
    }
  }
  focus(event: any) {
    this.click(event);
  }
  click(event: any) {
    event.stopPropagation();
    event.preventDefault();
  
    this.editName = true;
    setTimeout(()=>{
      if (this.nameEditor) {
        this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
      }
    },99);
}

  transform(source: any, data: any, args: any[]) {
    this.source = source;
    this.oldValue = source;
    this.rows = args.length ? args[0] : 4;
    this.limit = args.length > 1 ? args[1] : 0;
    this.counter = args.length > 2 ? args[2] : false;
  }
}

