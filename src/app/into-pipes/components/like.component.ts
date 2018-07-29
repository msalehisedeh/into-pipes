import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';

@Component({
    selector: 'like-component',
    template: `
    <a 
        id='like-{{id}}' 
        tabindex="0" 
        class="like" 
        [class.selected]="selected" 
        (keyup)="keyup($event)" 
        (click)='toggleCount($event)'>
        <span class="fa fa-thumbs-up" *ngIf="thumbsup && !selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-up selected" *ngIf="thumbsup && selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-down" *ngIf="!thumbsup && !selected" aria-hidden="true"></span>
        <span class="fa fa-thumbs-down selected" *ngIf="!thumbsup && selected" aria-hidden="true"></span>
        <span class="counts" *ngIf="showCount" [textContent]="formatterSource()"></span>
    </a>`,
    styles: [
        `
        :host {display: table;position: relative}
        .like {
            cursor: pointer;
        }
        .like .fa {
            margin: 0;
        }
        .like .fa.selected {
            color: green;
        }
        `
    ]
})
export class LikeComponent implements PipeComponent {
    source: any;
    id: string;
    item: any;
	name: string;
    showCount: boolean;
    thumbsup: boolean;
    selected: boolean;
    key: string;
    thumbs = "";
	onIntoComponentChange = new EventEmitter();

    transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.item = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.item[this.key]) !== null);
      }
    keyup(event) {
        const code = event.which;
    
        if (code === 13) {
          event.target.click();
        }
    }
    private addItem(id) {
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
    private removeItem(id) {
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
          const savedItems = JSON.parse(saved);
          const i = savedItems.indexOf(id);
          savedItems.splice(i, 1);
    
          localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
          this.source --;
        }
    }
    private getItem(id) {
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
          let result = "";
          if (this.source > 1000) {
              result = (this.source/1000).toFixed(1) + " k"
          }
          return result;
      }
      toggleCount(event) {
        this.selected = !this.selected;
    
        if (this.selected) {
          const existing = this.getItem(this.item[this.key]);
          if (!existing) {
            this.addItem(this.item[this.key]);
          }
        } else {
          this.removeItem(this.item[this.key]);
        }
        this.onIntoComponentChange.emit({
          item: this.item,
          selected: this.selected,
          action: this.thumbs
        });
      }
    }