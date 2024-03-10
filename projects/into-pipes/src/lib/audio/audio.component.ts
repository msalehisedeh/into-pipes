import { Component, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

@Component({
    selector: 'audio-component',
    template: `
    <span class="audio-hidden" [innerText]="source"></span>
    <audio [src]="source" 
        tabindex="{{active ? 0 : -1}}"
        [class.disabled]="disabled"
        (keyup)="keyup($event)"
        (play)="change($event)"
        (ended)="change($event)"
        (pause)="change($event)"
        (seeked)="change($event)"
        (error)="change($event)"
        controls="true">Your browser does not support the audio element.</audio>`,
    styles: [`
    :host {display: table;float: left;min-height: var(--sedeh-min-height, 25px);}
    :host audio.disabled{color: var(--sedeh-disabled-color, #888); opacity: var(--sedeh-hover-opacity, 0.5);pointer-events: none}
    :host .audio-hidden {
        display: none;
    }
    `]
})
export class AudioComponent implements PipeComponentInterface {
    source!: string;
	id!: string;
	name!: string;
    disabled = false;
    active = true;
    validate = (item: any, newValue: any) => true;

	onIntoComponentChange = new EventEmitter();

    static settingsPatterns() {
        return ['audio']; // no arguments
    }
    transform(source: any, data: any, args: any[]) {
        this.source = source;
    }

    private isPlaying(audio: any) {
        return !!(audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
    }
    keyup(event: any) {
        const code = event.which;
        if (code === 13 && !this.disabled) {
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
