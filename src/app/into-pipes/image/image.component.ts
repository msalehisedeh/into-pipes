import { Component, HostListener, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'image-component',
    template: `<img [src]="source" 
        [style.width]="width" 
        [style.height]="height" 
        [title]="alt" /><img *ngIf="popLocation" 
        [src]="source" class='popper'
        [style.width]="(origWidth * magnification) + 'px'" 
        [style.height]="(origHeight * magnification) + 'px'" />`,
    styles: [`
    :host {display:block;overflow:hidden;margin:0;position:relative;float:left;min-width: 23px;min-height: 23px}
    :host .popper{position:absolute;pointer-events: none;display: none;z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;border-radius: 4px}
    :host img{position:relative;pointer-events: none;}
    `]
})
export class ImageComponent implements PipeComponent {
    source: string;
	id: string;
	name: string;
    origWidth: number;
    origHeight: number;
    magnification = 0;
    popLocation: string;
    width: string;
    height: string;
    alt: string;
    onIntoComponentChange = new EventEmitter();
    
    @HostListener('mouseenter',['$event'])
	enter(event: any) {
        if (this.popLocation) {
            const image = event.target.children[0];
            const popper = event.target.children[1];
            const rect = image.parentNode.getBoundingClientRect();
            if (!this.origWidth && !this.origHeight) {
                this.origWidth = image.parentNode.clientWidth;
                this.origHeight = image.parentNode.clientHeight;
                image.parentNode.style.width = this.origWidth + "px";
                image.parentNode.style.height = this.origHeight + "px";
            }
            popper.parentNode.style.overflow = 'inherit';
            popper.style.display = 'table';
            switch (this.popLocation) {
                case 'left' : 
                    popper.style.right = (rect.width + 20) + 'px';
                    popper.style.top = (((1 - this.magnification) * this.origHeight) / 2) + 'px';
                    break;
                case 'right': 
                    popper.style.left = (rect.width + 20)  + 'px';
                    popper.style.top = (((1 - this.magnification) * this.origHeight) / 2) + 'px';
                    break;
                case 'top'  : 
                    popper.style.bottom = (rect.height + 20) + 'px';
                    popper.style.left = (((1 - this.magnification) * this.origWidth) / 2) + 'px';
                    break;
                case 'bottom': 
                    popper.style.top = (rect.height + 20) + 'px';
                    popper.style.left = (((1 - this.magnification) * this.origWidth) / 2) + 'px';
                    break;
            }
        } else if (this.magnification) {
            const image = event.target.children[0];
            if (!this.origWidth && !this.origHeight) {
                this.origWidth = image.parentNode.clientWidth;
                this.origHeight = image.parentNode.clientHeight;
                image.parentNode.style.width = this.origWidth + "px";
                image.parentNode.style.height = this.origHeight + "px";
            }
            this.width = (this.origWidth * this. magnification * 2) + 'px';
            this.height = (this.origHeight * this. magnification * 2) + 'px';
            image.style.position = "absolute";
        }
        this.change(event);
	}
    @HostListener('mouseout',['$event'])
	hoverOut(event: any) {
        if (this.popLocation) {
            const popper = event.target.children[1];
            popper.style.display = 'none';
        } else if (this.magnification) {
            const image = event.target.tagName === 'IMG' ? event.target : event.target.children[0];
            if (image) {
                this.width = this.origWidth + 'px';
                this.height = this.origHeight + 'px';
                image.style.position = "relative";
                image.style.left = "0";
                image.style.top = "0";
            }
        }
        this.change(event);
	}
    @HostListener('mousemove',['$event'])
	hoverViewPort(event: any) {
        if (this.magnification && !this.popLocation) {
            const image = event.target.tagName === 'IMG' ? event.target : event.target.children[0];
            if (image) {
                image.style.top = -(event.layerY * this. magnification) + "px";
                image.style.left = -(event.layerX * this. magnification) + "px";
            }
        }
	}
    transform(source: any, data: any, args: any[]) {

        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        this.magnification = (args && args.length > 3) ? parseInt(args[3],10) : 0;
        this.popLocation = (args && args.length > 4) ? args[4] : undefined;

        this.magnification = this.magnification < 0 ? 0 : this.magnification;
        if ((typeof source === "string") || !(source instanceof Array)) {
            if(!this.alt || !this.alt.length) {
                const q = source.indexOf("?");
                const t = q < 0 ? source : source.substring(0, q);
                const d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d+1);
            }
        }
    }
    change(event: any) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: event.type,
            item: {x: event.layerX, y: event.layerY}
        });
    }
}
