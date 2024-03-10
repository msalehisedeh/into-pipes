import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'like-component',
    template: `
    <a 
        id='like-{{id}}' 
        tabindex="{{active ? 0 : -1}}" 
        class="like" 
        [class.selected]="selected" 
        [class.disabled]="disabled" 
        (keyup)="keyup($event)" 
        (click)='toggleCount($event)'>
        <span class="fa fa-thumbs-up" *ngIf="thumbsup" aria-hidden="true"></span>
        <span class="fa fa-thumbs-down" *ngIf="!thumbsup" aria-hidden="true"></span>
        <span class="counts" *ngIf="showCount" [textContent]="formatterSource()"></span>
    </a>`,
    styles: [
        `
        :host {display:table;float:left;min-height: var(--sedeh-min-height, 25px);position: relative}
        .like {cursor: pointer;}
        .like.disabled {cursor: default;pointer-events: none}
        .like.disabled .fa{color: var(--sedeh-disabled-color, #888);}
        .like .counts{margin-left: var(--sedeh-margin-left, 5px);}
        .like .fa {margin: 0;}
        .like.selected .counts, .like.selected .fa {color: var(--sedeh-sected-color, green);}
        :host .like:hover, .like:hover .fa, .like:hover .fa.selected{opacity: var(--sedeh-hover-opacity, 0.5);}
        :host .like.disabled:hover, .like.disabled:hover .fa, .like.disabled:hover .fa.selected{color: var(--sedeh-disabled-color, #888);}
        `
    ]
})
export class LikeComponent implements PipeComponentInterface {
  source: any;
  id!: string;
  data: any;
	name!: string;
  showCount!: boolean;
  thumbsup!: boolean;
  selected!: boolean;
  key!: string;
  thumbs = "";
  disabled = false;
  active = true;
  validate = (item: any, newValue: any) => true;

	onIntoComponentChange = new EventEmitter();

  static settingsPatterns() {
    return ['like:true:true::true', 'like:true:false::true']; //show count, state, source attribute key, up/down
  }
  transform(source: any, data: any, args: any[]) {
    this.source = source;
    this.data = data;
    this.showCount = (args && args.length > 0 && args[0].length && args[0] === 'true');
    this.thumbsup = (args && args.length > 1 && args[1].length && args[1] === 'true');
    this.key = (args && args.length > 2) ? args[2] : "";
    this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
    this.selected = (this.getItem(this.data[this.key]) !== null);
  }
  keyup(event: any) {
    const code = event.which;

    if (code === 13 && !this.disabled) {
      event.target.click();
    }
  }
  private addItem(id: string) {
    const saved = localStorage.getItem(this.thumbs);
    if (saved) {
      const savedItems = JSON.parse(saved);
      savedItems.push(id);
      localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
    } else {
      localStorage.setItem(this.thumbs, JSON.stringify([id]));
    }
    this.source ++;
  }
  private removeItem(id: string) {
    const saved = localStorage.getItem(this.thumbs);
    if (saved) {
      const savedItems = JSON.parse(saved);
      const i = savedItems.indexOf(id);
      savedItems.splice(i, 1);

      localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
      this.source --;
    }
  }
  private getItem(id: string) {
    const saved = localStorage.getItem(this.thumbs);
    let found = null;

    if (saved) {
      const savedItems: any[] = JSON.parse(saved);
      const i = savedItems.indexOf(id);

      found = i < 0 ? null : savedItems[i];
    }
    return found;
  }
  formatterSource() {
    let result = this.source;
    if (this.source > 1000) {
      result = (this.source/1000).toFixed(1) + " k"
    }
    return result;
  }
  toggleCount(event: any) {
    event.stopPropagation();
    event.preventDefault();
    
    if (!this.disabled && this.validate(this.data, !this.source)) {
      this.selected = !this.selected;
      if (this.selected) {
        const existing = this.getItem(this.data[this.key]);
        if (!existing) {
          this.addItem(this.data[this.key]);
        }
      } else {
        this.removeItem(this.data[this.key]);
      }
      this.onIntoComponentChange.emit({
        id: this.id,
        name: this.name,
        value: this.source,
        type: "change",
        item: this.data,
        selected: this.selected,
        action: this.thumbs
      });
    }
  }
}