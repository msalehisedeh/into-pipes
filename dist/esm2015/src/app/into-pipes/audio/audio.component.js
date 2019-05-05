/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
export class AudioComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
    }
    /**
     * @param {?} audio
     * @return {?}
     */
    isPlaying(audio) {
        return !!(audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            if (this.isPlaying(event.target)) {
                event.target.pause();
            }
            else {
                event.target.play();
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
            item: {
                autoplay: event.target.autoplay,
                controls: event.target.controls,
                duration: event.target.duration,
                currentTime: event.target.currentTime,
                ended: event.target.ended,
                error: event.target.error,
                paused: event.target.paused,
                muted: event.target.muted,
                defaultMuted: event.target.defaultMuted,
                volume: event.target.volume
            }
        });
    }
}
AudioComponent.decorators = [
    { type: Component, args: [{
                selector: 'audio-component',
                template: `
    <audio [src]="source" 
        (keyup)="keyup($event)"
        (play)="change($event)"
        (ended)="change($event)"
        (pause)="change($event)"
        (seeked)="change($event)"
        (error)="change($event)"
        controls="true">Your browser does not support the audio element.</audio>`,
                styles: [`
    :host {display:table;float:left;min-height: 20px}
    `]
            }] }
];
if (false) {
    /** @type {?} */
    AudioComponent.prototype.source;
    /** @type {?} */
    AudioComponent.prototype.id;
    /** @type {?} */
    AudioComponent.prototype.name;
    /** @type {?} */
    AudioComponent.prototype.onIntoComponentChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvYXVkaW8vYXVkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCeEQsTUFBTTs7cUNBSW1CLElBQUksWUFBWSxFQUFFOzs7Ozs7OztJQUV2QyxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3hCOzs7OztJQUVPLFNBQVMsQ0FBQyxLQUFVO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUU5RixLQUFLLENBQUMsS0FBVTs7UUFDWixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtTQUNKO0tBQ0o7Ozs7O0lBQ0QsTUFBTSxDQUFDLEtBQVU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVc7Z0JBQ3JDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVk7Z0JBQ3ZDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDOUI7U0FDSixDQUFDLENBQUM7S0FDTjs7O1lBekRKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7O2lGQVFtRTt5QkFDcEU7O0tBRVI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1ZGlvLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGF1ZGlvIFtzcmNdPVwic291cmNlXCIgXHJcbiAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIlxyXG4gICAgICAgIChwbGF5KT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoZW5kZWQpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChwYXVzZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKHNlZWtlZCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGVycm9yKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBjb250cm9scz1cInRydWVcIj5Zb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC48L2F1ZGlvPmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIwcHh9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXVkaW9Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUGxheWluZyhhdWRpbzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuICEhKGF1ZGlvLmN1cnJlbnRUaW1lID4gMCAmJiAhYXVkaW8ucGF1c2VkICYmICFhdWRpby5lbmRlZCAmJiBhdWRpby5yZWFkeVN0YXRlID4gMik7XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiBldmVudC50eXBlLFxyXG4gICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZXZlbnQudGFyZ2V0LmF1dG9wbGF5LFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGV2ZW50LnRhcmdldC5jb250cm9scyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBldmVudC50YXJnZXQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZTogZXZlbnQudGFyZ2V0LmN1cnJlbnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgZW5kZWQ6IGV2ZW50LnRhcmdldC5lbmRlZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBldmVudC50YXJnZXQuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBwYXVzZWQ6IGV2ZW50LnRhcmdldC5wYXVzZWQsXHJcbiAgICAgICAgICAgICAgICBtdXRlZDogZXZlbnQudGFyZ2V0Lm11dGVkLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE11dGVkOiBldmVudC50YXJnZXQuZGVmYXVsdE11dGVkLFxyXG4gICAgICAgICAgICAgICAgdm9sdW1lOiBldmVudC50YXJnZXQudm9sdW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=