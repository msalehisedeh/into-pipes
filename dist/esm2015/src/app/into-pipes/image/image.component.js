/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostListener, EventEmitter } from '@angular/core';
export class ImageComponent {
    constructor() {
        this.magnification = 0;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    enter(event) {
        if (this.popLocation) {
            /** @type {?} */
            const image = event.target.children[0];
            /** @type {?} */
            const popper = event.target.children[1];
            /** @type {?} */
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
                case 'left':
                    popper.style.right = (rect.width + 20) + 'px';
                    popper.style.top = (((1 - this.magnification) * this.origHeight) / 2) + 'px';
                    break;
                case 'right':
                    popper.style.left = (rect.width + 20) + 'px';
                    popper.style.top = (((1 - this.magnification) * this.origHeight) / 2) + 'px';
                    break;
                case 'top':
                    popper.style.bottom = (rect.height + 20) + 'px';
                    popper.style.left = (((1 - this.magnification) * this.origWidth) / 2) + 'px';
                    break;
                case 'bottom':
                    popper.style.top = (rect.height + 20) + 'px';
                    popper.style.left = (((1 - this.magnification) * this.origWidth) / 2) + 'px';
                    break;
            }
        }
        else if (this.magnification) {
            /** @type {?} */
            const image = event.target.children[0];
            if (!this.origWidth && !this.origHeight) {
                this.origWidth = image.parentNode.clientWidth;
                this.origHeight = image.parentNode.clientHeight;
                image.parentNode.style.width = this.origWidth + "px";
                image.parentNode.style.height = this.origHeight + "px";
            }
            this.width = (this.origWidth * this.magnification * 2) + 'px';
            this.height = (this.origHeight * this.magnification * 2) + 'px';
            image.style.position = "absolute";
        }
        this.change(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hoverOut(event) {
        if (this.popLocation) {
            /** @type {?} */
            const popper = event.target.children[1];
            popper.style.display = 'none';
        }
        else if (this.magnification) {
            /** @type {?} */
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
    /**
     * @param {?} event
     * @return {?}
     */
    hoverViewPort(event) {
        if (this.magnification && !this.popLocation) {
            /** @type {?} */
            const image = event.target.tagName === 'IMG' ? event.target : event.target.children[0];
            if (image) {
                image.style.top = -(event.layerY * this.magnification) + "px";
                image.style.left = -(event.layerX * this.magnification) + "px";
            }
        }
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        this.magnification = (args && args.length > 3) ? parseInt(args[3], 10) : 0;
        this.popLocation = (args && args.length > 4) ? args[4] : undefined;
        this.magnification = this.magnification < 0 ? 0 : this.magnification;
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                /** @type {?} */
                const q = source.indexOf("?");
                /** @type {?} */
                const t = q < 0 ? source : source.substring(0, q);
                /** @type {?} */
                const d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: event.type,
            item: { x: event.layerX, y: event.layerY }
        });
    }
}
ImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'image-component',
                template: `<img [src]="source" 
        [style.width]="width" 
        [style.height]="height" 
        [title]="alt" /><img *ngIf="popLocation" 
        [src]="source" class='popper'
        [style.width]="(origWidth * magnification) + 'px'" 
        [style.height]="(origHeight * magnification) + 'px'" />`,
                styles: [`
    :host {display:block;overflow:hidden;margin:0;position:relative;float:left;min-width: 23px;min-height: 20px}
    :host .popper{position:absolute;pointer-events: none;display: none;z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;border-radius: 4px}
    :host img{position:relative;pointer-events: none;}
    `]
            }] }
];
ImageComponent.propDecorators = {
    enter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
    hoverOut: [{ type: HostListener, args: ['mouseout', ['$event'],] }],
    hoverViewPort: [{ type: HostListener, args: ['mousemove', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ImageComponent.prototype.source;
    /** @type {?} */
    ImageComponent.prototype.id;
    /** @type {?} */
    ImageComponent.prototype.name;
    /** @type {?} */
    ImageComponent.prototype.origWidth;
    /** @type {?} */
    ImageComponent.prototype.origHeight;
    /** @type {?} */
    ImageComponent.prototype.magnification;
    /** @type {?} */
    ImageComponent.prototype.popLocation;
    /** @type {?} */
    ImageComponent.prototype.width;
    /** @type {?} */
    ImageComponent.prototype.height;
    /** @type {?} */
    ImageComponent.prototype.alt;
    /** @type {?} */
    ImageComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFrQnRFLE1BQU07OzZCQU1jLENBQUM7cUNBS08sSUFBSSxZQUFZLEVBQUU7Ozs7OztJQUc3QyxLQUFLLENBQUMsS0FBVTtRQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztZQUNuQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDdkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3hDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztnQkFDaEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUNyRCxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDMUQ7WUFDRCxN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QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0M7U0FDSjtLQUNKOzs7OztJQUNELE1BQU0sQ0FBQyxLQUFVO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFDO1NBQzNDLENBQUMsQ0FBQztLQUNOOzs7WUFoSUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O2dFQU1rRDt5QkFDbkQ7Ozs7S0FJUjthQUNKOzs7b0JBY0ksWUFBWSxTQUFDLFlBQVksRUFBQyxDQUFDLFFBQVEsQ0FBQzt1QkE4Q3BDLFlBQVksU0FBQyxVQUFVLEVBQUMsQ0FBQyxRQUFRLENBQUM7NEJBaUJsQyxZQUFZLFNBQUMsV0FBVyxFQUFDLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbWFnZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8aW1nIFtzcmNdPVwic291cmNlXCIgXHJcbiAgICAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgXHJcbiAgICAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIiBcclxuICAgICAgICBbdGl0bGVdPVwiYWx0XCIgLz48aW1nICpuZ0lmPVwicG9wTG9jYXRpb25cIiBcclxuICAgICAgICBbc3JjXT1cInNvdXJjZVwiIGNsYXNzPSdwb3BwZXInXHJcbiAgICAgICAgW3N0eWxlLndpZHRoXT1cIihvcmlnV2lkdGggKiBtYWduaWZpY2F0aW9uKSArICdweCdcIiBcclxuICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cIihvcmlnSGVpZ2h0ICogbWFnbmlmaWNhdGlvbikgKyAncHgnXCIgLz5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbjowO3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnQ7bWluLXdpZHRoOiAyM3B4O21pbi1oZWlnaHQ6IDIwcHh9XHJcbiAgICA6aG9zdCAucG9wcGVye3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOiBub25lO2Rpc3BsYXk6IG5vbmU7ei1pbmRleDoyO2JvcmRlcjoycHggc29saWQ7Ym94LXNoYWRvdzogM3B4IDNweCAzcHggIzk5OTtib3JkZXItcmFkaXVzOiA0cHh9XHJcbiAgICA6aG9zdCBpbWd7cG9zaXRpb246cmVsYXRpdmU7cG9pbnRlci1ldmVudHM6IG5vbmU7fVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIG9yaWdXaWR0aDogbnVtYmVyO1xyXG4gICAgb3JpZ0hlaWdodDogbnVtYmVyO1xyXG4gICAgbWFnbmlmaWNhdGlvbiA9IDA7XHJcbiAgICBwb3BMb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgd2lkdGg6IHN0cmluZztcclxuICAgIGhlaWdodDogc3RyaW5nO1xyXG4gICAgYWx0OiBzdHJpbmc7XHJcbiAgICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLFsnJGV2ZW50J10pXHJcblx0ZW50ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBwb3BwZXIgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZS5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3JpZ1dpZHRoICYmICF0aGlzLm9yaWdIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ1dpZHRoID0gaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ0hlaWdodCA9IGltYWdlLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5zdHlsZS53aWR0aCA9IHRoaXMub3JpZ1dpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLm9yaWdIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9wcGVyLnBhcmVudE5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaW5oZXJpdCc7XHJcbiAgICAgICAgICAgIHBvcHBlci5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlJztcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JyA6IFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS5yaWdodCA9IChyZWN0LndpZHRoICsgMjApICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUudG9wID0gKCgoMSAtIHRoaXMubWFnbmlmaWNhdGlvbikgKiB0aGlzLm9yaWdIZWlnaHQpIC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOiBcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUubGVmdCA9IChyZWN0LndpZHRoICsgMjApICArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLnRvcCA9ICgoKDEgLSB0aGlzLm1hZ25pZmljYXRpb24pICogdGhpcy5vcmlnSGVpZ2h0KSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCcgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmJvdHRvbSA9IChyZWN0LmhlaWdodCArIDIwKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmxlZnQgPSAoKCgxIC0gdGhpcy5tYWduaWZpY2F0aW9uKSAqIHRoaXMub3JpZ1dpZHRoKSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6IFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS50b3AgPSAocmVjdC5oZWlnaHQgKyAyMCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS5sZWZ0ID0gKCgoMSAtIHRoaXMubWFnbmlmaWNhdGlvbikgKiB0aGlzLm9yaWdXaWR0aCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFnbmlmaWNhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9yaWdXaWR0aCAmJiAhdGhpcy5vcmlnSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdXaWR0aCA9IGltYWdlLnBhcmVudE5vZGUuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdIZWlnaHQgPSBpbWFnZS5wYXJlbnROb2RlLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGltYWdlLnBhcmVudE5vZGUuc3R5bGUud2lkdGggPSB0aGlzLm9yaWdXaWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIGltYWdlLnBhcmVudE5vZGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5vcmlnSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSAodGhpcy5vcmlnV2lkdGggKiB0aGlzLiBtYWduaWZpY2F0aW9uICogMikgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLm9yaWdIZWlnaHQgKiB0aGlzLiBtYWduaWZpY2F0aW9uICogMikgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoZXZlbnQpO1xyXG5cdH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3V0JyxbJyRldmVudCddKVxyXG5cdGhvdmVyT3V0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3BMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBwb3BwZXIgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMV07XHJcbiAgICAgICAgICAgIHBvcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYWduaWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTUcnID8gZXZlbnQudGFyZ2V0IDogZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm9yaWdXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMub3JpZ0hlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhbmdlKGV2ZW50KTtcclxuXHR9XHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLFsnJGV2ZW50J10pXHJcblx0aG92ZXJWaWV3UG9ydChldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFnbmlmaWNhdGlvbiAmJiAhdGhpcy5wb3BMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSU1HJyA/IGV2ZW50LnRhcmdldCA6IGV2ZW50LnRhcmdldC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS50b3AgPSAtKGV2ZW50LmxheWVyWSAqIHRoaXMuIG1hZ25pZmljYXRpb24pICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUubGVmdCA9IC0oZXZlbnQubGF5ZXJYICogdGhpcy4gbWFnbmlmaWNhdGlvbikgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFsdCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICB0aGlzLm1hZ25pZmljYXRpb24gPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDMpID8gcGFyc2VJbnQoYXJnc1szXSwxMCkgOiAwO1xyXG4gICAgICAgIHRoaXMucG9wTG9jYXRpb24gPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDQpID8gYXJnc1s0XSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgdGhpcy5tYWduaWZpY2F0aW9uID0gdGhpcy5tYWduaWZpY2F0aW9uIDwgMCA/IDAgOiB0aGlzLm1hZ25pZmljYXRpb247XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5hbHQgfHwgIXRoaXMuYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICAgICAgICAgIGl0ZW06IHt4OiBldmVudC5sYXllclgsIHk6IGV2ZW50LmxheWVyWX1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=