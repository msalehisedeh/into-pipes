import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'switch-component',
    template: `
      <span *ngIf="source === ideal" 
          #check 
          tabindex="{{active ? 0 : -1}}" 
          class="switch fa fa-toggle-on {{disabled ? 'disabled' : ''}}" 
          aria-checked="true"
          role="checkbox"
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
      <span *ngIf="source !== ideal"
          #uncheck tabindex="{{active ? 0 : -1}}" 
          class="switch fa fa-toggle-off {{disabled ? 'disabled' : ''}}" 
          aria-checked="false"
          role="checkbox"
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
      <span class="text {{disabled ? 'disabled' : ''}}" [class.selected]="source === ideal" 
        [textContent]="source === ideal ? onText : offText"></span>

    `,
    styles: [
      `
      :host {display:table;float:left;min-height: 23px}
      :host .switch {font-size: 1.4rem; cursor: pointer;float: left}
      :host .switch:hover{color: #fabdab;}
      :host .switch.fa-toggle-on {color: green}
      :host .switch.fa-toggle-off {color: red}
      :host .switch.disabled {opacity: 0.5}
      :host .switch.disabled.fa-toggle-on {color: gray}
      :host .switch.disabled.fa-toggle-off {color: gray}

      :host .text {font-size: 1.2rem; text-transform: uppercase; float: left; margin-left: 5px; color: red}
      :host .text.selected {color:  green}
      :host .text.disabled {color:  gray}
      `
    ]
})
export class SwitchComponent implements PipeComponentInterface {

  data: any;
  source!: string;
  original!: string;
  ideal!: string;
  id!: string;
  name!: string;
  onText!: string;
  offText!: string;
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
    event.stopPropagation();
    event.preventDefault();

    if (!this.disabled && this.validate(this.data, (this.source === this.ideal ? this.original : this.ideal))) {
      if (this.source === this.ideal) {
        this.source = this.original;
      } else {
        this.source = this.ideal;
      }
      this.onIntoComponentChange.emit({
        id: this.id,
        name: this.name,
        value: this.source,
        type: "switch",
        item: this.data
      });
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

  static settingsPatterns() {
    return ['switch:::']; //selected, state, alt state
  }
  transform(source: any, data: any, args: any[]) {
    this.ideal= args.length ? String(args[0]) : "";
    this.onText= args.length > 1 ? (args[1].length ? args[1] : 'ON') : 'ON';
    this.offText= args.length > 2 ? (args[2].length ? args[2] : 'OFF') : 'OFF';
    this.source= String(source);
    this.data = data;
    this.original= this.source === this.ideal ? "" : source;
  }
}

