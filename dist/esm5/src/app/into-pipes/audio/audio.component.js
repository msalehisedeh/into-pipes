import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
var AudioComponent = /** @class */ (function () {
    function AudioComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    AudioComponent.prototype.transform = function (source, data, args) {
        this.source = source;
    };
    AudioComponent.prototype.isPlaying = function (audio) {
        return !!(audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
    };
    AudioComponent.prototype.keyup = function (event) {
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
    AudioComponent.prototype.change = function (event) {
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
    };
    AudioComponent = tslib_1.__decorate([
        Component({
            selector: 'audio-component',
            template: "\n    <span class=\"audio-hidden\" [innerText]=\"source\"></span>\n    <audio [src]=\"source\" \n        (keyup)=\"keyup($event)\"\n        (play)=\"change($event)\"\n        (ended)=\"change($event)\"\n        (pause)=\"change($event)\"\n        (seeked)=\"change($event)\"\n        (error)=\"change($event)\"\n        controls=\"true\">Your browser does not support the audio element.</audio>",
            styles: ["\n    :host {\n        display: table;\n        float: left;\n        min-height: 23px;\n    }\n    :host .audio-hidden {\n        display: none;\n    }\n    "]
        })
    ], AudioComponent);
    return AudioComponent;
}());
export { AudioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvYXVkaW8vYXVkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTBCeEQ7SUF2QkE7UUEyQkMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXVDNUMsQ0FBQztJQXJDRyxrQ0FBUyxHQUFULFVBQVUsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxrQ0FBUyxHQUFqQixVQUFrQixLQUFVO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFDRCw4QkFBSyxHQUFMLFVBQU0sS0FBVTtRQUNaLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsK0JBQU0sR0FBTixVQUFPLEtBQVU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVE7Z0JBQy9CLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVc7Z0JBQ3JDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVk7Z0JBQ3ZDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDOUI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBMUNRLGNBQWM7UUF2QjFCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLDRZQVNtRTtxQkFDcEUsZ0tBU1I7U0FDSixDQUFDO09BQ1csY0FBYyxDQTJDMUI7SUFBRCxxQkFBQztDQUFBLEFBM0NELElBMkNDO1NBM0NZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhdWRpby1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiYXVkaW8taGlkZGVuXCIgW2lubmVyVGV4dF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICA8YXVkaW8gW3NyY109XCJzb3VyY2VcIiBcclxuICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgICAgKHBsYXkpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChlbmRlZCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKHBhdXNlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoc2Vla2VkKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoZXJyb3IpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIGNvbnRyb2xzPVwidHJ1ZVwiPllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBhdWRpbyBlbGVtZW50LjwvYXVkaW8+YCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyM3B4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QgLmF1ZGlvLWhpZGRlbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNQbGF5aW5nKGF1ZGlvOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gISEoYXVkaW8uY3VycmVudFRpbWUgPiAwICYmICFhdWRpby5wYXVzZWQgJiYgIWF1ZGlvLmVuZGVkICYmIGF1ZGlvLnJlYWR5U3RhdGUgPiAyKTtcclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGF1c2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBldmVudC50YXJnZXQuYXV0b3BsYXksXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogZXZlbnQudGFyZ2V0LmNvbnRyb2xzLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGV2ZW50LnRhcmdldC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lOiBldmVudC50YXJnZXQuY3VycmVudFRpbWUsXHJcbiAgICAgICAgICAgICAgICBlbmRlZDogZXZlbnQudGFyZ2V0LmVuZGVkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGV2ZW50LnRhcmdldC5lcnJvcixcclxuICAgICAgICAgICAgICAgIHBhdXNlZDogZXZlbnQudGFyZ2V0LnBhdXNlZCxcclxuICAgICAgICAgICAgICAgIG11dGVkOiBldmVudC50YXJnZXQubXV0ZWQsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TXV0ZWQ6IGV2ZW50LnRhcmdldC5kZWZhdWx0TXV0ZWQsXHJcbiAgICAgICAgICAgICAgICB2b2x1bWU6IGV2ZW50LnRhcmdldC52b2x1bWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==