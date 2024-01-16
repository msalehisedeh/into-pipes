import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'switch-component',
    template: `
      <span *ngIf="source === ideal" 
          #check tabindex="0" 
          class="switch fa fa-toggle-on" 
          aria-checked="true"
          role="checkbox"
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
      <span *ngIf="source !== ideal"
          #uncheck tabindex="0" 
          class="switch fa fa-toggle-off" 
          aria-checked="false"
          role="checkbox"
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
      <span class="text" [class.selected]="source === ideal" 
        [textContent]="source === ideal ? onText : offText"></span>

    `,
    styles: [
      `
      :host {display:table;float:left;min-height: 23px}
      :host .switch {font-size: 1.4rem; cursor: pointer;float: left}
      :host .switch:hover{color: #fabdab;}
      :host .switch.fa-toggle-on {color: green}
      :host .switch.fa-toggle-off {color: red}
      :host .text {font-size: 1.2rem; text-transform: uppercase; float: left; margin-left: 5px; color: red}
      :host .text.selected {color:  green}
      `
    ]
})
export class SwitchComponent implements PipeComponent {

  data: any;
  source!: string;
  original!: string;
  ideal!: string;
  id!: string;
  name!: string;
  onText!: string;
  offText!: string;

  @ViewChild("check")
  check: any;

  @ViewChild("uncheck")
  uncheck: any;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  keyup(event: any) {
    const code = event.which;
    if (code === 13) {
      event.target.click();
		}
  }

  click(event: any) {
    event.stopPropagation();
    event.preventDefault();

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

  transform(source: any, data: any, args: any[]) {
    this.ideal= args.length ? String(args[0]) : "";
    this.onText= args.length > 1 ? args[1] : 'ON';
    this.offText= args.length > 2 ? args[2] : 'OFF';
    this.source= String(source);
    this.data = data;
    this.original= this.source === this.ideal ? "" : source;
  }
}

