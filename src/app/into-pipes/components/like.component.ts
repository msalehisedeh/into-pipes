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
        :host {display:table;float:left;min-height: 23px;position: relative}
        .like {cursor: pointer;}
        .like .counts{margin-left: 5px;}
        .like .fa {margin: 0;}
        .like .fa.selected {color: green;}
        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}
        `
    ]
})
export class LikeComponent implements PipeComponent {
    source: any;
    id: string;
    data: any;
	name: string;
    showCount: boolean;
    thumbsup: boolean;
    selected: boolean;
    key: string;
    thumbs = "";
	onIntoComponentChange = new EventEmitter();

    transform(source: any, data: any, args: any[]) {
        this.source = source;
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
      }
    keyup(event) {
        const code = event.which;
    
        if (code === 13) {
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
      toggleCount(event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        
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
            item: this.data,
            selected: this.selected,
            action: this.thumbs
        });
      }
    }