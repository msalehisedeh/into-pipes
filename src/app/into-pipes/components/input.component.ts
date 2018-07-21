import { Component, ViewChild, Renderer, Output, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'input-component',
    template: `
    <span *ngIf="editName">
    <input #nameEditor
        type='text' 
        [id]="id"
        [name]="name"
        [value]="source"
        [placeholder]="placeholder"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'>
    </span>
    <span *ngIf='!editName && formatting'
        class='locked' 
        tabindex='0' 
        (keydown)='keydown($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? (source | into:formatting) : '&nbsp;'">
    </span>
    <span *ngIf='!editName && !formatting'
        class='locked' 
        tabindex='0' 
        (keydown)='keydown($event)'
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
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        input{
          cursor: beam;
        }
        `
    ]
})
export class InputComponent implements PipeComponent {

  source: string;
  id: string;
  name: string;
  placeholder: string;
  formatting:string;
  editName = false;
  oldValue: string;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer) {

  }

  @ViewChild("nameEditor")
  nameEditor;

  keyup(event) {
    const code = event.which;
    if (((code >= 48) && (code <= 90)) ||
        ((code >= 96) && (code <= 111)) ||
        ((code == 32) || (code == 8)) ||
        ((code >= 186) && (code <= 222))) {
          this.source = event.target.value;
    } else if ((code === 13) || (code === 9) || (code === 27) ) {
      this.editName = false;
      if (this.oldValue !== String(this.source)) {
        this.onIntoComponentChange.emit({
          id: this.id,
          name: this.name,
          value: this.source
        });
      }
    }
  }
  blur(event) {
    this.editName = false;
    if (this.oldValue !== String(this.source)) {
      this.onIntoComponentChange.emit({
        id: this.id,
        name: this.name,
        value: this.source
      });
    }
  }

  keydown(event) {
    const code = event.which;
    console.log(code)
    if ((code === 13) || (code === 9)) {
      this.renderer.invokeElementMethod(event.target, "click");
      setTimeout(()=>{
        if (this.nameEditor) {
          this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
        }
      },66);
		}
  }

  clickName(event) {
    event.stopPropagation();
    event.preventDefault();
    this.editName = true;
    this.oldValue = String(this.source);
    setTimeout(() => {
      this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
    },66);
  }

  transform(source: any, data: any, args: any[]) {
    this.source= source;
    this.placeholder= args.length ? args[0] : "";
    this.formatting = args.length > 1 ? args[1] : "";
  }
}

