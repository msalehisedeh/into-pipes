import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'checkbox-component',
    template: `
    <span *ngIf="useFont" class="check-font {{disabled ? 'disabled' : ''}}">
      <span *ngIf="source === state1" 
          #check tabindex="{{active ? 0 : -1}}" 
          class="fa" 
          [class.fa-toggle-on]="onOff" 
          [class.fa-check]="!onOff" 
          (keyup)="keyup($event)" 
          (click)="click($event, false)"></span>
      <span *ngIf="source === state2"
          #uncheck tabindex="{{active ? 0 : -1}}" 
          class="fa" 
          checked
          [class.fa-toggle-off]="onOff" 
          [class.fa-close]="!onOff" 
          (keyup)="keyup($event)" 
          (click)="click($event, true)"></span>
    </span>
    <input *ngIf="!useFont && displayable" 
            type="checkbox" 
            tabindex="{{active ? 0 : -1}}" 
            [disabled]="disabled"
            [checked]="source===state1" 
            (keyup)="keyup($event)"
            (click)="click($event, source!==state1)" />
    `,
    styles: [
      `
      :host .check-font .fa{margin: var(--sedeh-margin, 0 5px);}
      :host {display:table;float:left;min-height: var(--sedeh-min-height, 25px);}
      .check-font:hover{opacity: var(--sedeh-hover-opacity, 0.5);}
      .check-font .fa:focus{outline: none;zoom: 1.1;right: var(--sedeh-shift-right, 0);position: relative;color: var(--sedeh-focus-color, darkblue);}
      .check-font {cursor: pointer;}
      .check-font.disabled:hover{color: var(--sedeh-disabled-color, #888);}
      .check-font.disabled {color: var(--sedeh-disabled-color, #888); pointer-events: none}
      `
    ]
})
export class CheckboxComponent implements PipeComponentInterface {

  data: any;
  source!: string;
  state1!: string;
  state2!: string;
  id!: string;
  name!: string;
  onOff!: boolean;
  useFont!: boolean;
  displayable = true;
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

  click(event: any, checked: boolean) {
    event.stopPropagation();
    event.preventDefault();

    const newState = (checked ? this.state1 : this.state2);
    if (!this.disabled && this.validate(this.data, newState)) {
      this.displayable = false;
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
      } else {
        setTimeout(()=> this.displayable = true, 66)
      }
    }
  }

  static settingsPatterns() {
    return ['checkbox:true:false:false:false', 'checkbox:true:false:true:false', 'checkbox:true:false:true:true']; //state1 state2, useFont, onoff
  }
  transform(source: any, data: any, args: any[]) {
    this.state1= args && args.length ? String(args[0]) : "";
    this.state2= (args && args.length > 1) ? String(args[1])  : '';
    this.useFont= (args && args.length > 2 && args[2].length) ? args[2] === 'true' : false;
    this.onOff= (args && args.length > 3 && args[3].length) ? args[3] === 'true' : false;
    this.source= String(source);
    this.data = data;
  }
}

