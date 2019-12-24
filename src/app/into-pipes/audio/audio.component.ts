import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'audio-component',
    template: `
    <span class="audio-hidden" [innerText]="source"></span>
    <audio [src]="source" 
        (keyup)="keyup($event)"
        (play)="change($event)"
        (ended)="change($event)"
        (pause)="change($event)"
        (seeked)="change($event)"
        (error)="change($event)"
        controls="true">Your browser does not support the audio element.</audio>`,
    styles: [`
    :host {
        display: table;
        float: left;
        min-height: 23px;
    }
    :host .audio-hidden {
        display: none;
    }
    `]
})
export class AudioComponent implements PipeComponent {
    source: string;
	id: string;
	name: string;
	onIntoComponentChange = new EventEmitter();

    transform(source: any, data: any, args: any[]) {
        this.source = source;
    }

    private isPlaying(audio: any) {
        return !!(audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
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
