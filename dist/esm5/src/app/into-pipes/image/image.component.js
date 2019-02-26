/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, HostListener, EventEmitter } from '@angular/core';
var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
        this.magnification = 0;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ImageComponent.prototype.enter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.popLocation) {
            /** @type {?} */
            var image = event.target.children[0];
            /** @type {?} */
            var popper = event.target.children[1];
            /** @type {?} */
            var rect = image.parentNode.getBoundingClientRect();
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
            var image = event.target.children[0];
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageComponent.prototype.hoverOut = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.popLocation) {
            /** @type {?} */
            var popper = event.target.children[1];
            popper.style.display = 'none';
        }
        else if (this.magnification) {
            /** @type {?} */
            var image = event.target.tagName === 'IMG' ? event.target : event.target.children[0];
            if (image) {
                this.width = this.origWidth + 'px';
                this.height = this.origHeight + 'px';
                image.style.position = "relative";
                image.style.left = "0";
                image.style.top = "0";
            }
        }
        this.change(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageComponent.prototype.hoverViewPort = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.magnification && !this.popLocation) {
            /** @type {?} */
            var image = event.target.tagName === 'IMG' ? event.target : event.target.children[0];
            if (image) {
                image.style.top = -(event.layerY * this.magnification) + "px";
                image.style.left = -(event.layerX * this.magnification) + "px";
            }
        }
    };
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    ImageComponent.prototype.transform = /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    function (source, data, args) {
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
                var q = source.indexOf("?");
                /** @type {?} */
                var t = q < 0 ? source : source.substring(0, q);
                /** @type {?} */
                var d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: event.type,
            item: { x: event.layerX, y: event.layerY }
        });
    };
    ImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'image-component',
                    template: "<img [src]=\"source\" \n        [style.width]=\"width\" \n        [style.height]=\"height\" \n        [title]=\"alt\" /><img *ngIf=\"popLocation\" \n        [src]=\"source\" class='popper'\n        [style.width]=\"(origWidth * magnification) + 'px'\" \n        [style.height]=\"(origHeight * magnification) + 'px'\" />",
                    styles: ["\n    :host {display:block;overflow:hidden;margin:0;position:relative;float:left;min-width: 23px;min-height: 23px}\n    :host .popper{position:absolute;pointer-events: none;display: none;z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;border-radius: 4px}\n    :host img{position:relative;pointer-events: none;}\n    "]
                }] }
    ];
    ImageComponent.propDecorators = {
        enter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
        hoverOut: [{ type: HostListener, args: ['mouseout', ['$event'],] }],
        hoverViewPort: [{ type: HostListener, args: ['mousemove', ['$event'],] }]
    };
    return ImageComponent;
}());
export { ImageComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs2QkF3QmxELENBQUM7cUNBS08sSUFBSSxZQUFZLEVBQUU7Ozs7OztJQUc3Qyw4QkFBSzs7OztJQURGLFVBQ0csS0FBVTtRQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztZQUNuQixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDdkMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3hDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztnQkFDaEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUNyRCxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDMUQ7WUFDRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUMvQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsS0FBSyxNQUFNO29CQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDN0UsS0FBSyxDQUFDO2dCQUNWLEtBQUssT0FBTztvQkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUksSUFBSSxDQUFDO29CQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzdFLEtBQUssQ0FBQztnQkFDVixLQUFLLEtBQUs7b0JBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM3RSxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxRQUFRO29CQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDN0UsS0FBSyxDQUFDO2FBQ2I7U0FDSjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7WUFDNUIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2hELEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDckQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakUsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxpQ0FBUTs7OztJQURMLFVBQ00sS0FBVTtRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztZQUNuQixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDakM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7O1lBQzVCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ3pCO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7OztJQUVELHNDQUFhOzs7O0lBRFYsVUFDVyxLQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7WUFDMUMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNSLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBRSxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQy9ELEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBRSxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDbkU7U0FDSjtLQUNQOzs7Ozs7O0lBQ0Usa0NBQVM7Ozs7OztJQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBRXpDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUVuRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDckUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O2dCQUMvQixJQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFDOUIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ2xELElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQztTQUNKO0tBQ0o7Ozs7O0lBQ0QsK0JBQU07Ozs7SUFBTixVQUFPLEtBQVU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsSUFBSSxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUM7U0FDM0MsQ0FBQyxDQUFDO0tBQ047O2dCQWhJSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGdVQU1rRDs2QkFDbkQsc1VBSVI7aUJBQ0o7Ozt3QkFjSSxZQUFZLFNBQUMsWUFBWSxFQUFDLENBQUMsUUFBUSxDQUFDOzJCQThDcEMsWUFBWSxTQUFDLFVBQVUsRUFBQyxDQUFDLFFBQVEsQ0FBQztnQ0FpQmxDLFlBQVksU0FBQyxXQUFXLEVBQUMsQ0FBQyxRQUFRLENBQUM7O3lCQTlGeEM7O1NBa0JhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ltYWdlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxpbWcgW3NyY109XCJzb3VyY2VcIiBcclxuICAgICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBcclxuICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiIFxyXG4gICAgICAgIFt0aXRsZV09XCJhbHRcIiAvPjxpbWcgKm5nSWY9XCJwb3BMb2NhdGlvblwiIFxyXG4gICAgICAgIFtzcmNdPVwic291cmNlXCIgY2xhc3M9J3BvcHBlcidcclxuICAgICAgICBbc3R5bGUud2lkdGhdPVwiKG9yaWdXaWR0aCAqIG1hZ25pZmljYXRpb24pICsgJ3B4J1wiIFxyXG4gICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiKG9yaWdIZWlnaHQgKiBtYWduaWZpY2F0aW9uKSArICdweCdcIiAvPmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47bWFyZ2luOjA7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bGVmdDttaW4td2lkdGg6IDIzcHg7bWluLWhlaWdodDogMjNweH1cclxuICAgIDpob3N0IC5wb3BwZXJ7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6IG5vbmU7ZGlzcGxheTogbm9uZTt6LWluZGV4OjI7Ym9yZGVyOjJweCBzb2xpZDtib3gtc2hhZG93OiAzcHggM3B4IDNweCAjOTk5O2JvcmRlci1yYWRpdXM6IDRweH1cclxuICAgIDpob3N0IGltZ3twb3NpdGlvbjpyZWxhdGl2ZTtwb2ludGVyLWV2ZW50czogbm9uZTt9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgb3JpZ1dpZHRoOiBudW1iZXI7XHJcbiAgICBvcmlnSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtYWduaWZpY2F0aW9uID0gMDtcclxuICAgIHBvcExvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBhbHQ6IHN0cmluZztcclxuICAgIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsWyckZXZlbnQnXSlcclxuXHRlbnRlcihldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHBlciA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGltYWdlLnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcmlnV2lkdGggJiYgIXRoaXMub3JpZ0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnV2lkdGggPSBpbWFnZS5wYXJlbnROb2RlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnSGVpZ2h0ID0gaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5wYXJlbnROb2RlLnN0eWxlLndpZHRoID0gdGhpcy5vcmlnV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5wYXJlbnROb2RlLnN0eWxlLmhlaWdodCA9IHRoaXMub3JpZ0hlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3BwZXIucGFyZW50Tm9kZS5zdHlsZS5vdmVyZmxvdyA9ICdpbmhlcml0JztcclxuICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmRpc3BsYXkgPSAndGFibGUnO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucG9wTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnIDogXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLnJpZ2h0ID0gKHJlY3Qud2lkdGggKyAyMCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS50b3AgPSAoKCgxIC0gdGhpcy5tYWduaWZpY2F0aW9uKSAqIHRoaXMub3JpZ0hlaWdodCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6IFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS5sZWZ0ID0gKHJlY3Qud2lkdGggKyAyMCkgICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUudG9wID0gKCgoMSAtIHRoaXMubWFnbmlmaWNhdGlvbikgKiB0aGlzLm9yaWdIZWlnaHQpIC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJyAgOiBcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUuYm90dG9tID0gKHJlY3QuaGVpZ2h0ICsgMjApICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUubGVmdCA9ICgoKDEgLSB0aGlzLm1hZ25pZmljYXRpb24pICogdGhpcy5vcmlnV2lkdGgpIC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLnRvcCA9IChyZWN0LmhlaWdodCArIDIwKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmxlZnQgPSAoKCgxIC0gdGhpcy5tYWduaWZpY2F0aW9uKSAqIHRoaXMub3JpZ1dpZHRoKSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYWduaWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3JpZ1dpZHRoICYmICF0aGlzLm9yaWdIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ1dpZHRoID0gaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ0hlaWdodCA9IGltYWdlLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5zdHlsZS53aWR0aCA9IHRoaXMub3JpZ1dpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLm9yaWdIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLm9yaWdXaWR0aCAqIHRoaXMuIG1hZ25pZmljYXRpb24gKiAyKSArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMub3JpZ0hlaWdodCAqIHRoaXMuIG1hZ25pZmljYXRpb24gKiAyKSArICdweCc7XHJcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZShldmVudCk7XHJcblx0fVxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdXQnLFsnJGV2ZW50J10pXHJcblx0aG92ZXJPdXQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHBlciA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hZ25pZmljYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lNRycgPyBldmVudC50YXJnZXQgOiBldmVudC50YXJnZXQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMub3JpZ1dpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5vcmlnSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoZXZlbnQpO1xyXG5cdH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsWyckZXZlbnQnXSlcclxuXHRob3ZlclZpZXdQb3J0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWduaWZpY2F0aW9uICYmICF0aGlzLnBvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTUcnID8gZXZlbnQudGFyZ2V0IDogZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRvcCA9IC0oZXZlbnQubGF5ZXJZICogdGhpcy4gbWFnbmlmaWNhdGlvbikgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5sZWZ0ID0gLShldmVudC5sYXllclggKiB0aGlzLiBtYWduaWZpY2F0aW9uKSArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuYWx0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMubWFnbmlmaWNhdGlvbiA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMykgPyBwYXJzZUludChhcmdzWzNdLDEwKSA6IDA7XHJcbiAgICAgICAgdGhpcy5wb3BMb2NhdGlvbiA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gNCkgPyBhcmdzWzRdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLm1hZ25pZmljYXRpb24gPSB0aGlzLm1hZ25pZmljYXRpb24gPCAwID8gMCA6IHRoaXMubWFnbmlmaWNhdGlvbjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsdCB8fCAhdGhpcy5hbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgICAgICAgICAgaXRlbToge3g6IGV2ZW50LmxheWVyWCwgeTogZXZlbnQubGF5ZXJZfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==