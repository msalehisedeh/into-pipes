import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'video-component',
    template: `
    <video tabindex="0"
        (focus)="updateControls($event)"
        (mouseenter)="updateControls($event)"
        (mouseleave)="resetControls($event)"
        (keyup)="keyup($event)"
        (play)="change($event)"
        (ended)="change($event)"
        (pause)="change($event)"
        (seeked)="change($event)"
        (error)="change($event)"
        (fullscreenchange)="change($event)"
        [src]="source" 
        [style.width]="width" 
        [style.height]="height"
        [title]="alt"></video>
    `,
    styles: [`
    :host {display:table;float:left;min-height: 23px}
    `]
})
export class VideoComponent implements PipeComponent {
    hasControls = true;
    hoverPlay = false;
    source: string;
	id: string;
	name: string;
    width: string;
    height: string;
    alt: string;
	onIntoComponentChange = new EventEmitter();

    transform(source: any, data: any, args: any[]) {

        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        this.hasControls = (args && args.length > 3) ? (args[3] === 'true') : true;
        this.hoverPlay = (args && args.length > 4) ? (args[4] === 'true') : false;

        if ((typeof source === "string") || !(source instanceof Array)) {
            if(!this.alt || !this.alt.length) {
                const q = source.indexOf("?");
                const t = q < 0 ? source : source.substring(0, q);
                const d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d+1);
            }
        }
    }
    updateControls(event: any) {
        if (this.hasControls) {
            event.target.setAttribute('controls','true');
        }
        if (this.hoverPlay) {
            event.target.play();
        }
    }
    resetControls(event: any) {
        if (this.hoverPlay && this.isPlaying(event.target)) {
            event.target.pause();
        }
    }
    private isPlaying(video: any) {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    }
    keyup(event: any) {
        const code = event.which;
        if (code === 13) {
            if (this.isPlaying(event.target)) {
                event.target.pause();
            } else {
                event.target.play();
            }
        }
    }
    change(event: any) {
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
    }
}
