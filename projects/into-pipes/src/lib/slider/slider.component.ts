import { Component, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'slider-component',
    template: `
    <span 
      class="slidecontainer" 
      [style.width]="!vertical ? length + 'px' : null"
      [style.height]="vertical ? length + 'px' : null"
      [class.vertical]="vertical">
      <span class="range" *ngIf="showRange">
      <span class="min" [textContent]="min"></span>
      <span class="value" [textContent]="source"></span>
      <span class="max" [textContent]="max"></span>
      </span>
      <input 
        type="range"
        class="slider" 
        (input)="oninput($event)"
        (change)="onchange($event)"
        [attr.value]="source" 
        [attr.min]="min" 
        [attr.max]="max" 
        [attr.id]="id" />
    </span>
    `,
    styles: [
        `
        :host .slidecontainer {display: table;}
        :host .slidecontainer .range {position: relative; display: table; height: 12px; font-size: 0.8rem;width: 100%}
        :host .slidecontainer .range .min {position: absolute;left: 0;top: 0}
        :host .slidecontainer .range .value {position: absolute;left: 50%;top: 0}
        :host .slidecontainer .range .max {position: absolute;right: 0;top: 0}
        :host .slidecontainer .slider {
          -webkit-appearance: none;
          background: #d3d3d3;
          outline: none;
          opacity: 0.7;
          -webkit-transition: .2s;
          transition: opacity .2s;
          border: 2px inset #aaa;
          border-radius: 33%;
          width: 100%;
          height: 1px;
        }
        :host .slidecontainer.vertical .slider {transform: rotate(270deg); margin: 50% -50%;}
        :host .slidecontainer.vertical .range {width: 33px;height: 85%; float: left}
        :host .slidecontainer.vertical .range .min {top: inherit; right:5px; bottom: 0;}
        :host .slidecontainer.vertical .range .value {left: inherit;right: 5px;top: 50%}
        :host .slidecontainer.vertical .range .max {right:5px; top: 0;}
        :host .slider:hover {opacity: 1;}
        :host .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background: #444;
          background-image: linear-gradient(#444, #ddd, #444);
          cursor: pointer;
          border-radius: 5px;
          border: 2px solid #000;
          width: 22px;
          height: 12px;
        }
        :host .slider::-moz-range-thumb {
          background: #444;
          background-image: linear-gradient(#444, #ddd, #444);
          border-radius: 5px;
          border: 2px solid #000;
          cursor: pointer;
          width: 22px;
          height: 10px;
        }
        `
    ]
})
export class SliderComponent implements PipeComponent {

  data: any;
  source!: string;
  id!: string;
  name!: string;
  vertical!: boolean;
  showRange!: boolean;
  length!: number;
  min!: string;
  max!: string;

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  keyup(event: any) {
    event.stopPropagation();
    event.preventDefault();

    const code = event.which;
    if (((code >= 48) && (code <= 90)) ||
        ((code >= 96) && (code <= 111)) ||
        ((code == 32) || (code == 8)) ||
        ((code >= 186) && (code <= 222))) {
          this.source = event.target.value;
    }
  }

  oninput(event: any) {
    this.source = event.target.value;
  }
  onchange(event: any) {
    this.source = event.target.value;
    this.onIntoComponentChange.emit({
      id: this.id,
      name: this.name,
      value: this.source,
      type: "slider",
      item: this.data
    });
  }

  transform(source: any, data: any, args: any[]) {
    this.source= source;
    this.data = data;
    this.length= args.length ?  parseFloat(args[0]) : 200;
    this.vertical= args.length > 1 ?  String(args[1]) === 'true' : false;
    this.showRange= args.length > 2 ?  String(args[2]) === 'true' : false;
    this.min = args.length > 3 ? args[3] : 0;
    this.max = args.length > 4 ? args[4] : 100;
  }
}

