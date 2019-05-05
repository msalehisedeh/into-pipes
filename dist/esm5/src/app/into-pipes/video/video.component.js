/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
        this.hasControls = true;
        this.hoverPlay = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    VideoComponent.prototype.transform = /**
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
        this.hasControls = (args && args.length > 3) ? (args[3] === 'true') : true;
        this.hoverPlay = (args && args.length > 4) ? (args[4] === 'true') : false;
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
    VideoComponent.prototype.updateControls = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.hasControls) {
            event.target.setAttribute('controls', 'true');
        }
        if (this.hoverPlay) {
            event.target.play();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VideoComponent.prototype.resetControls = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.hoverPlay && this.isPlaying(event.target)) {
            event.target.pause();
        }
    };
    /**
     * @param {?} video
     * @return {?}
     */
    VideoComponent.prototype.isPlaying = /**
     * @param {?} video
     * @return {?}
     */
    function (video) {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VideoComponent.prototype.keyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var code = event.which;
        if (code === 13) {
            if (this.isPlaying(event.target)) {
                event.target.pause();
            }
            else {
                event.target.play();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VideoComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: event.type,
            item: {
                autoplay: event.target.autoplay,
                controls: event.target.controls,
                duration: event.target.duration,
                ended: event.target.ended,
                error: event.target.error,
                paused: event.target.paused,
                muted: event.target.muted,
                currentTime: event.target.currentTime,
                volume: event.target.volume
            }
        });
    };
    VideoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'video-component',
                    template: "\n    <video tabindex=\"0\"\n        (focus)=\"updateControls($event)\"\n        (mouseenter)=\"updateControls($event)\"\n        (mouseleave)=\"resetControls($event)\"\n        (keyup)=\"keyup($event)\"\n        (play)=\"change($event)\"\n        (ended)=\"change($event)\"\n        (pause)=\"change($event)\"\n        (seeked)=\"change($event)\"\n        (error)=\"change($event)\"\n        (fullscreenchange)=\"change($event)\"\n        [src]=\"source\" \n        [style.width]=\"width\" \n        [style.height]=\"height\"\n        [title]=\"alt\"></video>\n    ",
                    styles: ["\n    :host {display:table;float:left;min-height: 20px}\n    "]
                }] }
    ];
    return VideoComponent;
}());
export { VideoComponent };
if (false) {
    /** @type {?} */
    VideoComponent.prototype.hasControls;
    /** @type {?} */
    VideoComponent.prototype.hoverPlay;
    /** @type {?} */
    VideoComponent.prototype.source;
    /** @type {?} */
    VideoComponent.prototype.id;
    /** @type {?} */
    VideoComponent.prototype.name;
    /** @type {?} */
    VideoComponent.prototype.width;
    /** @type {?} */
    VideoComponent.prototype.height;
    /** @type {?} */
    VideoComponent.prototype.alt;
    /** @type {?} */
    VideoComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvdmlkZW8vdmlkZW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OzJCQTJCdEMsSUFBSTt5QkFDTixLQUFLO3FDQU9JLElBQUksWUFBWSxFQUFFOzs7Ozs7OztJQUV2QyxrQ0FBUzs7Ozs7O0lBQVQsVUFBVSxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFFekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0UsSUFB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TTtZQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVc7Z0JBQ3JDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDOUI7U0FDSixDQUFDLENBQUM7S0FDTjs7Z0JBaEdKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsd2pCQWdCVDs2QkFDUSwrREFFUjtpQkFDSjs7eUJBekJEOztTQTBCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmlkZW8tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8dmlkZW8gdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAoZm9jdXMpPVwidXBkYXRlQ29udHJvbHMoJGV2ZW50KVwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwidXBkYXRlQ29udHJvbHMoJGV2ZW50KVwiXHJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwicmVzZXRDb250cm9scygkZXZlbnQpXCJcclxuICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgICAgKHBsYXkpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChlbmRlZCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKHBhdXNlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoc2Vla2VkKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoZXJyb3IpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChmdWxsc2NyZWVuY2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbc3JjXT1cInNvdXJjZVwiIFxyXG4gICAgICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFxyXG4gICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgICAgICBbdGl0bGVdPVwiYWx0XCI+PC92aWRlbz5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIwcHh9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIGhhc0NvbnRyb2xzID0gdHJ1ZTtcclxuICAgIGhvdmVyUGxheSA9IGZhbHNlO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBhbHQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFsdCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhhc0NvbnRyb2xzID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAzKSA/IChhcmdzWzNdID09PSAndHJ1ZScpIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLmhvdmVyUGxheSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gNCkgPyAoYXJnc1s0XSA9PT0gJ3RydWUnKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsdCB8fCAhdGhpcy5hbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUNvbnRyb2xzKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNDb250cm9scykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKCdjb250cm9scycsJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJQbGF5KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXRDb250cm9scyhldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJQbGF5ICYmIHRoaXMuaXNQbGF5aW5nKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1BsYXlpbmcodmlkZW86IGFueSkge1xyXG4gICAgICAgIHJldHVybiAhISh2aWRlby5jdXJyZW50VGltZSA+IDAgJiYgIXZpZGVvLnBhdXNlZCAmJiAhdmlkZW8uZW5kZWQgJiYgdmlkZW8ucmVhZHlTdGF0ZSA+IDIpO1xyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGV2ZW50LnRhcmdldC5hdXRvcGxheSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBldmVudC50YXJnZXQuY29udHJvbHMsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZXZlbnQudGFyZ2V0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgZW5kZWQ6IGV2ZW50LnRhcmdldC5lbmRlZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBldmVudC50YXJnZXQuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBwYXVzZWQ6IGV2ZW50LnRhcmdldC5wYXVzZWQsXHJcbiAgICAgICAgICAgICAgICBtdXRlZDogZXZlbnQudGFyZ2V0Lm11dGVkLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWU6IGV2ZW50LnRhcmdldC5jdXJyZW50VGltZSxcclxuICAgICAgICAgICAgICAgIHZvbHVtZTogZXZlbnQudGFyZ2V0LnZvbHVtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19