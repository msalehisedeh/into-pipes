import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'checkbox-component',
    template: `
    <span *ngIf="useFont" class="check-font {{disabled ? 'disabled' : ''}}">
      <span *ngIf="source === ideal" 
          #check tabindex="{{active ? 0 : -1}}" 
          class="fa" 
          [class.fa-toggle-on]="onOff" 
          [class.fa-check]="!onOff" 
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
      <span *ngIf="source !== ideal"
          #uncheck tabindex="{{active ? 0 : -1}}" 
          class="fa" 
          [class.fa-toggle-off]="onOff" 
          [class.fa-close]="!onOff" 
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
    </span>
    <input *ngIf="!useFont" 
            type="checkbox" 
            tabindex="{{active ? 0 : -1}}" 
            [disabled]="disabled"
            [value]="source" 
            [checked]="source===ideal ? true : null" 
            (keyup)="keyup($event)"
            (click)="click($event)" />
    `,
    styles: [
      `
      :host .check-font .fa{margin: 0 5px}
      :host {display:table;float:left;min-height: 23px}
      .check-font:hover{color: #fabdab;}
      .check-font {cursor: pointer;}
      .check-font.disabled:hover{color: gray;}
      .check-font.disabled {color: gray; pointer-events: none}
      `
    ]
})
export class CheckboxComponent implements PipeComponentInterface {

  data: any;
  source!: string;
  original!: string;
  ideal!: string;
  id!: string;
  name!: string;
  onOff!: boolean;
  useFont!: boolean;
  disabled = false;
  active = true;
  validate = (item: any, newValue: any) => true;

  @ViewChild("check")
  check: any;

  @ViewChild("uncheck")
  uncheck: any;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  keyup(event: any) {
    const code = event.which;
    if (code === 13 && !this.disabled) {
      event.target.click();
		}
  }

  click(event: any) {
    const input = event.target;
    event.stopPropagation();
    event.preventDefault();

    const newState = ((this.source === this.ideal) ? this.original : this.ideal);
    if (!this.disabled && this.validate(this.data, newState)) {
      this.source = newState;
      this.onIntoComponentChange.emit({
        id: this.id,
        name: this.name,
        value: this.source,
        type: "check",
        item: this.data
      });
      if (this.useFont) {
        setTimeout(() => {
          if (this.check) {
            this.check.nativeElement.focus();
          }
          if (this.uncheck) {
            this.uncheck.nativeElement.focus();
          }
        },66);
      }
    }
  }

  transform(source: any, data: any, args: any[]) {
    this.ideal= args.length ? String(args[0]) : "";
    this.useFont= args.length > 1 ? Boolean(args[1]) : false;
    this.onOff= args.length > 2 ? Boolean(args[2]) : false;
    this.source= String(source);
    this.data = data;
    this.original= this.source === this.ideal ? "" : source;
  }
}

