import { Component, EventEmitter, Pipe, Injectable, NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA, Renderer, Output, ViewChild, HostListener, Directive, ViewContainerRef, ElementRef, Input, ComponentFactoryResolver } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, SlicePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AddressComponent {
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
        this.isLink = args.length ? args[0] : true;
        this.hasTarget = args.length > 1 ? args[1] : false;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        if (this.isLink) {
            /** @type {?} */
            const x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
            this.url = x.replace("\\s+", "+");
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
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
            item: event.type
        });
    }
}
AddressComponent.decorators = [
    { type: Component, args: [{
                selector: 'address-component',
                template: `
    <a *ngIf="isLink" 
        [href]="url" 
        [target]="hasTarget ? '_blank' : null"
        class="google-map" 
        (keyup)='keyup($event)' 
        (click)="change($event)">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="off-screen">View in google map</span>
        <span class="address" [textContent]="addr1"></span>
        <span class="address" [textContent]="addr2"></span>
    </a>
    <span *ngIf="!isLink" class="google-map">
        <span class="fa fa-map-marker" aria-hidden="true"></span>
        <span class="address" [textContent]="addr1"></span>
        <span class="address" [textContent]="addr2"></span>
    </span>
    `,
                styles: [`.address {float: left;margin-right: 4px;}
        .google-map {float: left;margin-right: 4px;}
        .fa {float:left;color: #f00;margin: 0 5px;}
        .off-screen {position: absolute;left: -999em;}
        :host a:hover .fa-map-marker{color: #fabdab;}
        :host span{float-left;}
        :host {display: table;float:left;min-height: 20px}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AddressPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            return new AddressPipe().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const isLink = args.length ? args[0] : true;
        /** @type {?} */
        const hasTarget = args.length > 1 ? args[1] : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source, isLink, hasTarget);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.addressFromString(item, isLink, hasTarget));
            });
            return result;
        }
    }
    /**
     * @param {?} source
     * @param {?} isLink
     * @param {?} hasTarget
     * @return {?}
     */
    addressFromString(source, isLink, hasTarget) {
        if (isLink) {
            /** @type {?} */
            let url = "https://maps.google.com/?q=" +
                source.street + ", " + source.city + ", " + source.zipcode + "&ie=UTF-8";
            url = url.replace("\\s+", "+");
            return "<a href=\'" + url + "\' " +
                (hasTarget ? "target='_blank'" : "") +
                "class='google-map'><span class='fa fa-map-marker' aria-hidden='true'>" +
                "</span><span class='off-screen'>View in google map</span><span class='address'>" +
                source.street + ", " + source.suite + "</span>" +
                "<span class='address'> " + source.city + ", " + source.zipcode + "</span></a>";
        }
        return "<span class='google-map'><span class='fa fa-map-marker' style='margin: 0 5px' aria-hidden='true'>" +
            "</span><span class='address'>" + source.street + ", " + source.suite + "</span>" +
            "<span class='address'> " + source.city + ", " + source.zipcode + "</span></span>";
    }
}
AddressPipe.decorators = [
    { type: Pipe, args: [{ name: 'address' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ComponentPool {
    constructor() {
        this.registeredPipes = {};
        this.registeredComponents = {};
        this.registeredServices = {};
    }
    /**
     * @param {?} name
     * @param {?} pipe
     * @return {?}
     */
    registerPipeTransformation(name, pipe) {
        this.registeredPipes[name] = pipe;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    registeredForPipeTransformationNamed(key) {
        return this.registeredPipes[key] !== undefined;
    }
    /**
     * @param {?} key
     * @param {?} content
     * @param {?} args
     * @param {?=} callback
     * @param {?=} data
     * @return {?}
     */
    registeredPipeTransformation(key, content, args, callback, data) {
        /** @type {?} */
        const pipe = this.registeredPipes[key];
        return pipe ? pipe(content, args, callback, data) : null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removePipeTransformation(key) {
        delete this.registeredPipes[key];
    }
    /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    registerComponent(name, component) {
        this.registeredComponents[name] = component;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredForComponentWithNamed(name) {
        return this.registeredComponents[name] !== undefined;
    }
    /**
     * @param {?} name
     * @param {?} resolver
     * @param {?} viewRefrence
     * @param {?} el
     * @return {?}
     */
    registeredComponent(name, resolver, viewRefrence, el) {
        /** @type {?} */
        const component = this.registeredComponents[name];
        /** @type {?} */
        let result = null;
        if (component) {
            /** @type {?} */
            let componentFactory = resolver.resolveComponentFactory(component);
            /** @type {?} */
            const componentRef = viewRefrence.createComponent(componentFactory);
            /** @type {?} */
            const domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
            el.appendChild(domElem);
            result = (/** @type {?} */ (componentRef.instance));
        }
        return result;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeComponent(name) {
        delete this.registeredComponents[name];
    }
    /**
     * @param {?} name
     * @param {?} service
     * @return {?}
     */
    registerServiceForComponent(name, service) {
        this.registeredServices[name] = service;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredServiceForComponent(name) {
        return this.registeredServices[name];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredForServiceNamed(name) {
        return this.registeredServices[name] !== undefined;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeServiceForComponent(name) {
        delete this.registeredServices[name];
    }
}
ComponentPool.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AddressIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('address', AddressComponent);
        pool.registerPipeTransformation('address', AddressPipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AddressIntoPipeModule,
            providers: [
                AddressPipe
            ]
        };
    }
}
AddressIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AddressComponent, AddressPipe],
                exports: [AddressComponent, AddressPipe],
                entryComponents: [AddressComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
AddressIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AudioComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AudioPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            return new AudioPipe().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    stringToAudio(source) {
        return "<audio src=\'" + source + "\' controls=\'true\' />";
    }
    /**
     * @param {?} sources
     * @return {?}
     */
    arrayToAudio(sources) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.stringToAudio(source));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToAudio(source);
        }
        return this.arrayToAudio(source);
    }
}
AudioPipe.decorators = [
    { type: Pipe, args: [{ name: 'audio' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AudioIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('audio', AudioComponent);
        pool.registerPipeTransformation('audio', AudioPipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AudioIntoPipeModule,
            providers: [
                AudioPipe
            ]
        };
    }
}
AudioIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AudioComponent, AudioPipe],
                exports: [AudioComponent, AudioPipe],
                entryComponents: [AudioComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
AudioIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.showCalendar = false;
        this.editName = false;
        this.multiselect = false;
        this.dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.weeks = [];
        this.selectedDays = [];
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        event.stopPropagation();
        event.preventDefault();
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    popdatepicker(event) {
        event.stopPropagation();
        event.preventDefault();
        this.showCalendar = !this.showCalendar;
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.currentDate = new Date();
        if (source instanceof Array) {
            this.multiselect = true;
            source.map((item) => {
                this.selectedDays.push(new Date(item));
            });
            this.origDate = this.selectedDays.length ? this.selectedDays[0] : new Date();
        }
        else {
            this.origDate = new Date(this.source);
            this.multiselect = false;
            this.selectedDays.push(this.origDate);
        }
        this.item = data;
        this.currentDate.setFullYear(this.origDate.getFullYear());
        this.currentDate.setMonth(this.origDate.getMonth());
        this.generateCalendar();
        this.formatting = args.length ? args[0] : "";
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSelected(date) {
        /** @type {?} */
        let index = -1;
        for (let i = 0; i < this.selectedDays.length; i++) {
            /** @type {?} */
            const selectedDate = this.selectedDays[i];
            if (this.isSameDay(date, selectedDate)) {
                index = i;
            }
        }
        return index > -1;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSelectedMonth(date) {
        return this.isSameMonth(date, this.currentDate);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    toggleSelectedDates(day) {
        /** @type {?} */
        let found = false;
        if (this.multiselect) {
            for (let i = 0; i < this.selectedDays.length; i++) {
                /** @type {?} */
                const date = this.selectedDays[i];
                if (this.isSameDay(day.date, date)) {
                    this.selectedDays.splice(i, 1);
                    found = true;
                    day.selected = false;
                    break;
                }
            }
            if (!found) {
                this.selectedDays.push(day.date);
                day.selected = true;
            }
        }
        else {
            this.selectedDays = [day.date];
            day.selected = true;
        }
    }
    /**
     * @param {?} event
     * @param {?} day
     * @return {?}
     */
    selectDate(event, day) {
        event.stopPropagation();
        event.preventDefault();
        this.origDate = day.date;
        this.currentDate = day.date;
        this.toggleSelectedDates(day);
        this.selectedDays.sort((a, b) => {
            return a > b ? -1 : 1;
        });
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.selectedDays,
            type: "select",
            item: this.item
        });
        this.showCalendar = false;
        this.generateCalendar();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    prevMonth(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
        this.generateCalendar();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nextMonth(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
        this.generateCalendar();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    prevYear(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() - 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    nextYear(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    }
    /**
     * @return {?}
     */
    generateCalendar() {
        /** @type {?} */
        const dates = this.fillDates(this.currentDate);
        /** @type {?} */
        const weeks = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    isSameDay(a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    isSameMonth(a, b) {
        return a.getYear() === b.getYear() &&
            a.getMonth() === b.getMonth();
    }
    /**
     * @param {?} currentDate
     * @return {?}
     */
    fillDates(currentDate) {
        /** @type {?} */
        const cm = new Date(currentDate);
        /** @type {?} */
        const tm = new Date();
        /** @type {?} */
        const firstDay = new Date(cm.getFullYear(), cm.getMonth(), 1);
        /** @type {?} */
        const firstOfMonth = firstDay.getDay();
        /** @type {?} */
        const firstDayOfGrid = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstOfMonth);
        /** @type {?} */
        const start = firstDayOfGrid.getDate();
        /** @type {?} */
        const list = [];
        for (let i = start; i < (start + 42); i++) {
            /** @type {?} */
            const d = new Date(firstDayOfGrid.getFullYear(), firstDayOfGrid.getMonth(), i);
            list.push({
                today: this.isSameDay(tm, d),
                selected: this.isSelected(d),
                date: d
            });
        }
        return list;
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-component',
                template: `
    <span class="calendar-box">
      <span class="date" [textContent]="origDate | date:formatting"></span>
      <a tabindex="0" class="popper" (keyup)="keyup($event)" (click)="popdatepicker($event)">
          <span class="fa fa-calendar" aria-hidden="true"></span>
          <span class="off-screen">Pick a date</span>
      </a>
    </span>
    <div class="calendar" *ngIf="showCalendar">
		<div class="calendar-navs">
			<div class="month-nav">
                <button (click)="prevMonth($event)">
                    <span class="fa fa-chevron-left"></span>
                    <span class="off-screen">Back a month</span>
                </button>
				<span class="p4">{{ currentDate | date:'MMMM' }}</span>
                <button (click)="nextMonth($event)">
                    <span class="fa fa-chevron-right"></span>
                    <span class="off-screen">Forward a month</span>
                </button>
			</div>
			<div class="year-nav">
                <button (click)="prevYear($event)">
                    <span class="fa fa-chevron-left"></span>
                    <span class="off-screen">Back a year</span>
                </button>
				<span>{{ currentDate | date: 'yyyy' }}</span>
                <button (click)="nextYear($event)">
                    <span class="fa fa-chevron-right"></span>
                    <span class="off-screen">Forward a year</span>
                </button>
			</div>
		</div>
		<div class="month-grid">
			<div class="day-names">
				<div *ngFor="let name of dayNames" class="day-name p9">{{ name }}</div>
			</div>
			<div class="weeks">
				<div *ngFor="let week of weeks" class="week">
					<ng-container *ngFor="let day of week">
						<div class="week-date disabled" *ngIf="!isSelectedMonth(day.date)">
							<span class="date-text">{{ day.date.getDate() }}</span>
						</div>
						<div class="week-date enabled"
                           *ngIf="isSelectedMonth(day.date)"
                           tabindex="0"
                           (keyup)="keyup($event)"
						   (click)="selectDate($event, day)"
						   [class.today]="day.today"
						   [class.selected]="day.selected">
							<span class="date-text">{{ day.date.getDate() }}</span>
						</div>
					</ng-container>
				</div>
			</div>
		</div>
	</div>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        .popper .fa-calendar{display: inline-block;margin: 0 5px}
        .popper:hover .fa-calendar{color: #fabdab}
        .calendar-box {
          display: flex;
          flex-direction: row;
          cursor: default;
          width: 100%;
          display: inline-block;
        }
        .calendar-box date {flex: 1;}
        .calendar-box .popper {cursor: pointer;flex: 0 0 15px}
        .calendar {
            display: table;
            width: 210px;
            position: absolute;
            background-color: #fff;
            z-index: 2;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .calendar * {
            box-sizing: border-box;
        }
        .calendar .calendar-navs {
            background-color: whitesmoke;
        }
        .calendar .month-nav {
            padding: 2px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .calendar .year-nav {
            padding: 2px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .calendar .month-nav button,
        .calendar .year-nav button {
            border: 0;
            background: transparent;
            cursor: pointer;
        }
        .calendar .month-nav button:hover,
        .calendar .year-nav button:hover {
            color: red;
        }
        .calendar .month-grid .day-names {
            display: flex;
            flex-direction: row;
            background: whitesmoke;
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        .calendar .month-grid .weeks {
            display: flex;
            flex-direction: column;
        }
        .calendar .month-grid .week {
            display: flex;
            flex-direction: row;
        }
        .calendar .month-grid .day-names {
            border-top: 1px dotted #ddd;
            border-bottom: 1px dashed #ddd;
        }
        .calendar .month-grid .week-date,
        .calendar .month-grid .day-name {
            text-align: center;
            padding: 2px;
            display: block;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .calendar .month-grid .week-date {
            height: 30px;
            position: relative;
            padding: 5px;
        }
        .calendar .month-grid .week-date .date-text {
            font-size: 10px;
            z-index: 10;
        }
        .calendar .month-grid .week-date::after {
            content: '';
            height: 24px;
            width: 24px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            transition: background-color 150ms linear, color 150ms linear;
            z-index: 1;
        }
        .calendar .month-grid .week-date.disabled {color: #aaa;}
        .calendar .month-grid .week-date.enabled {
            cursor: pointer;
        }
        .calendar .month-grid .week-date.enabled:focus {
            outline: 0;
        }
        .calendar .month-grid .week-date.enabled:hover .date-text,
        .calendar .month-grid .week-date.enabled:focus .date-text {
            font-weight: bold;
            color: blue;
        }
        .calendar .month-grid .week-date.enabled:hover::after,
        .calendar .month-grid .week-date.enabled:focus::after {
            background-color: whitesmoke;
        }
        .calendar .month-grid .week-date.selected .date-text {
            color: #fff !important;
        }
        .calendar .month-grid .week-date.selected::after{
            background-color: blue !important;
        }
        .calendar .month-grid .week-date.today::after {
            background-color: lightblue;
            font-weight: bold;
            color: #fff;
        }
        `]
            }] }
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [
    { type: Renderer }
];
CalendarComponent.propDecorators = {
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CalendarIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('calendar', CalendarComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CalendarIntoPipeModule,
            providers: []
        };
    }
}
CalendarIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CalendarComponent],
                exports: [CalendarComponent],
                entryComponents: [CalendarComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
CalendarIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        /** @type {?} */
        const input = event.target;
        event.stopPropagation();
        event.preventDefault();
        if (this.source === this.ideal) {
            this.source = this.original;
        }
        else {
            this.source = this.ideal;
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "check",
            item: this.data
        });
        if (this.useFont) {
            setTimeout(() => {
                if (this.check) {
                    this.check.nativeElement.focus();
                }
                if (this.uncheck) {
                    this.uncheck.nativeElement.focus();
                }
            }, 66);
        }
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.useFont = args.length > 1 ? Boolean(args[1]) : false;
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox-component',
                template: `
    <span *ngIf="useFont" class="check-font">
      <span *ngIf="source === ideal" #check tabindex="0" class="fa fa-check" (keyup)="keyup($event)" (click)="click($event)"></span>
      <span *ngIf="source !== ideal" #uncheck tabindex="0" class="fa fa-close" (keyup)="keyup($event)" (click)="click($event)"></span>
    </span>
    <input *ngIf="!useFont" 
            type="checkbox" 
            tabindex="0" 
            [value]="source" 
            [checked]="source===ideal ? true : null" 
            (keyup)="keyup($event)"
            (click)="click($event)" />
    `,
                styles: [`
        :host .check-font .fa{margin: 0 5px}
        :host {display:table;float:left;min-height: 20px}
        .check-font:hover{color: #fabdab;}
        .check-font {cursor: pointer;}
        `]
            }] }
];
CheckboxComponent.propDecorators = {
    check: [{ type: ViewChild, args: ["check",] }],
    uncheck: [{ type: ViewChild, args: ["uncheck",] }],
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('checkbox', CheckboxComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CheckboxIntoPipeModule,
            providers: []
        };
    }
}
CheckboxIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CheckboxComponent],
                exports: [CheckboxComponent],
                entryComponents: [CheckboxComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
CheckboxIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EmailComponent {
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
        this.isLink = args.length ? args[0] : true;
        this.source = source;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
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
            type: "mail-to",
            item: event.type
        });
    }
}
EmailComponent.decorators = [
    { type: Component, args: [{
                selector: 'email',
                template: `
    <a *ngIf="isLink" [href]="'mailto:' + source" (keyup)='keyup($event)' (click)="change($event)">
        <span class='fa fa-envelope' aria-hidden='true'></span>
        <span [textContent]="source"></span>
    </a>
    <span *ngIf="!isLink">
        <span class='fa fa-envelope' aria-hidden='true'></span>
        <span [textContent]="source"></span>
    </span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        :host:hover .fa-envelope{color: #fabdab;}
        :host .fa{margin: 0 5px;}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EmailPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // email
            return new EmailPipe().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} isLink
     * @return {?}
     */
    emailFromString(source, isLink) {
        /** @type {?} */
        let x;
        if (isLink) {
            x = "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
        }
        else {
            x = "<span><span class='fa fa-envelope' style='margin: 0 5px' aria-hidden='true'></span><span>" + source + "</span></span>";
        }
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const isLink = args.length ? args[0] : true;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source, isLink);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.emailFromString(item, isLink));
            });
            return result;
        }
    }
}
EmailPipe.decorators = [
    { type: Pipe, args: [{ name: 'email' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EmailIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('email', EmailComponent);
        pool.registerPipeTransformation('email', EmailPipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: EmailIntoPipeModule,
            providers: [EmailPipe]
        };
    }
}
EmailIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [EmailComponent, EmailPipe],
                exports: [EmailComponent, EmailPipe],
                entryComponents: [EmailComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
EmailIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FontComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.font = args[0];
        this.location = args.length > 1 ? args[1] : "left";
        /** @type {?} */
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    }
}
FontComponent.decorators = [
    { type: Component, args: [{
                selector: 'font-component',
                template: `
        <span *ngIf="location === 'left'"    [class]="font" aria-hidden='true'></span>
        <span *ngIf="location !== 'replace'" [textContent]="content"></span>
        <span *ngIf="location === 'right'"   [class]="font" aria-hidden='true'></span>
        <span *ngIf="location === 'replace'" [class]="font" aria-hidden='true'></span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        :host span {
            float: left;
            margin: 0 5px;
        }
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FontPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // font:fa fa-check:left:*
            return new FontPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
        };
        return x;
    }
    /**
     * @param {?} font
     * @param {?} location
     * @param {?} action
     * @param {?} content
     * @return {?}
     */
    fontFromString(font, location, action, content) {
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const font = args.length ? "<span class=\'" + args[0] + "\' style='margin: 0 5px' aria-hidden='true'></span>" : "";
        /** @type {?} */
        const location = args.length > 1 ? args[1] : "";
        /** @type {?} */
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        /** @type {?} */
        const content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.fontFromString(font, location, action, item));
            });
            return result;
        }
    }
}
FontPipe.decorators = [
    { type: Pipe, args: [{ name: 'font' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FontIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('font', FontComponent);
        pool.registerPipeTransformation('font', FontPipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FontIntoPipeModule,
            providers: [FontPipe]
        };
    }
}
FontIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [FontComponent, FontPipe],
                exports: [FontComponent, FontPipe],
                entryComponents: [FontComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
FontIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ImageComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ImagePipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // image:200px:auto:alttext OR image:200px:alternate-text OR image:200px OR image
            if (args.length > 3) {
                return new ImagePipe().transform(content, args[1], args[2], args[3]);
            }
            else if (args.length > 2) {
                return new ImagePipe().transform(content, args[1], args[2]);
            }
            else if (args.length > 1) {
                return new ImagePipe().transform(content, args[1]);
            }
            else {
                return new ImagePipe().transform(content, "");
            }
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    stringToImage(source, width, height, alt) {
        if (!alt || !alt.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
    }
    /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    arrayToImage(sources, width, height, alt) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.stringToImage(source, width, height, alt));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const width = (args && args.length) ? "width: " + args[0] + ";" : "";
        /** @type {?} */
        const height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        /** @type {?} */
        const alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");
    }
}
ImagePipe.decorators = [
    { type: Pipe, args: [{ name: 'image' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ImageIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('image', ImageComponent);
        pool.registerPipeTransformation('image', ImagePipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ImageIntoPipeModule,
            providers: [ImagePipe]
        };
    }
}
ImageIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ImageComponent, ImagePipe],
                exports: [ImageComponent, ImagePipe],
                entryComponents: [ImageComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
ImageIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.editName = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        event.stopPropagation();
        event.preventDefault();
        /** @type {?} */
        const code = event.which;
        if (((code >= 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) ||
            ((code == 32) || (code == 8)) ||
            ((code >= 186) && (code <= 222))) {
            this.source = event.target.value;
        }
        else if ((code === 13) || (code === 9) || (code === 27)) {
            this.editName = false;
            if (this.oldValue !== String(this.source)) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: "change",
                    item: this.data
                });
            }
            if (code === 13) {
                setTimeout(() => {
                    if (this.nameHolder) {
                        this.renderer.invokeElementMethod(this.nameHolder.nativeElement, "focus");
                    }
                }, 66);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    blur(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = false;
        if (this.oldValue !== String(this.source)) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                item: this.data
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydown(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if ((code === 13) || (code === 9)) {
            this.renderer.invokeElementMethod(event.target, "click");
            setTimeout(() => {
                if (this.nameEditor) {
                    this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
                }
            }, 66);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickName(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        this.oldValue = String(this.source);
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
        }, 66);
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.placeholder = args.length ? args[0] : "";
        this.formatting = args.length > 1 ? args[1] : "";
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-component',
                template: `
    <span *ngIf="editName">
    <input #nameEditor
        type='text' 
        [id]="id"
        [name]="name"
        [value]="source"
        [placeholder]="placeholder"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'>
    </span>
    <span #nameHolder
        *ngIf='!editName && formatting'
        class='locked' 
        tabindex='0' 
        (keyup)='keydown($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? (source | into:formatting) : '&nbsp;'">
    </span>
    <span #nameHolder
        *ngIf='!editName && !formatting'
        class='locked' 
        tabindex='0' 
        (keyup)='keydown($event)'
        (click)="clickName($event)"
        [innerHTML]="source ? source : '&nbsp;'">
    </span>
    `,
                styles: [`
        .locked {
          display: inline-block;
          cursor: pointer;
          min-width: 30px;
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
        }
        input {
          cursor: beam;
        }
        :host {display:table;float:left;min-height: 20px}
        :host .locked:hover{border: 1px solid #fabdab;}
        `]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: Renderer }
];
InputComponent.propDecorators = {
    nameEditor: [{ type: ViewChild, args: ["nameEditor",] }],
    nameHolder: [{ type: ViewChild, args: ["nameHolder",] }],
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AppendPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // append:something
            return new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(item + key);
            });
            return result;
        }
    }
}
AppendPipe.decorators = [
    { type: Pipe, args: [{ name: 'append' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ConditionalPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /**
         * @param {?} item
         * @return {?}
         */
        function split(item) {
            return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
        }
        /** @type {?} */
        const x = function (content, args, callback, data) {
            /** @type {?} */
            const acondition = args.length > 1 ? args[1] : "";
            /** @type {?} */
            const value = args.length > 2 ? args[2] : "";
            /** @type {?} */
            const action = args.length > 3 ? args[3] : "";
            /** @type {?} */
            const altAction = args.length > 4 ? args[4] : "";
            /** @type {?} */
            let result = new ConditionalPipe().transform(content, acondition, value, action, altAction);
            if (typeof result === "string") {
                result = result[0] === '"' ? result.substring(1, result.length - 1) : result;
                result = split(result);
                result = callback(content, result, data);
            }
            return result;
        };
        return x;
    }
    /**
     * @param {?} content
     * @param {?} acondition
     * @param {?} value
     * @param {?} action
     * @param {?} altAction
     * @return {?}
     */
    conditionFromString(content, acondition, value, action, altAction) {
        /** @type {?} */
        let result = "";
        switch (acondition) {
            case "=":
                result = content === value ? action : altAction;
                break;
            case "!=":
                result = content !== value ? action : altAction;
                break;
            case ">":
                result = content > value ? action : altAction;
                break;
            case ">=":
                result = content >= value ? action : altAction;
                break;
            case "<":
                result = content < value ? action : altAction;
                break;
            case "<=":
                result = content <= value ? action : altAction;
                break;
            case "~":
                result = content !== undefined && content !== null && content !== "null" ? action : altAction;
                break;
            case "!~":
                result = content === undefined || content === null || content === "null" ? action : altAction;
                break;
            case "~=":
                result = content && value && String(content).toLowerCase() === String(value).toLowerCase() ? action : altAction;
                break;
            case "in":
                result = content ? content.indexOf(action) : altAction;
                break;
        }
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const acondition = args.length ? args[0] : "";
        /** @type {?} */
        const value = args.length > 1 ? args[1] : "";
        /** @type {?} */
        const action = args.length > 2 ? args[2] : "";
        /** @type {?} */
        const altAction = args.length > 3 ? args[3] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        }
        else {
            /** @type {?} */
            const result = {};
            source.map((item) => {
                result[item] = this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result;
        }
    }
}
ConditionalPipe.decorators = [
    { type: Pipe, args: [{ name: 'if' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JoinPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            //join or join:character
            return new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source.join(args[0]);
        }
        else {
            /** @type {?} */
            const result = [];
            Object.keys(source).map((key) => {
                result.push(source[key]);
            });
            return result.join(args[0]);
        }
    }
}
JoinPipe.decorators = [
    { type: Pipe, args: [{ name: 'join' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MapPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // map:key1;value1/key2;value2/key3;value3
            return new MapPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    /**
     * @param {?} list
     * @param {?} map
     * @return {?}
     */
    valuesFor(list, map) {
        /** @type {?} */
        const result = [];
        list.map((key) => {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    }
    /**
     * @param {?} mapping
     * @return {?}
     */
    geMapping(mapping) {
        if (mapping.trim) {
            /** @type {?} */
            const map = {};
            mapping.split('/').map((key) => {
                /** @type {?} */
                const x = key.split(';');
                map[x[0]] = x[1];
            });
            mapping = map;
        }
        return mapping;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    }
}
MapPipe.decorators = [
    { type: Pipe, args: [{ name: 'map' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MaskPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // mask:4:*  OR mask:4
            if (args.length > 2) {
                return new MaskPipe().transform(content, parseInt(args[1], 10), args[2]);
            }
            else if (args.length > 1) {
                return new MaskPipe().transform(content, args[1]);
            }
            else {
                return new MaskPipe().transform(content);
            }
        };
        return x;
    }
    /**
     * @param {?} item
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    maskString(item, visibleDigits, maskWith) {
        /** @type {?} */
        const maskedSection = item ? item.slice(0, -visibleDigits) : "";
        /** @type {?} */
        const visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    }
    /**
     * @param {?} items
     * @param {?} visibleDigits
     * @param {?} maskWith
     * @return {?}
     */
    maskArray(items, visibleDigits, maskWith) {
        /** @type {?} */
        const result = [];
        items.map((item) => {
            result.push(this.maskString(item, visibleDigits, maskWith));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const visibleDigits = (args && args.length) ? args[0] : 4;
        /** @type {?} */
        const maskWith = args.length > 1 ? args[1] : '*';
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.maskString(source, visibleDigits, maskWith);
        }
        return this.maskArray(source, visibleDigits, maskWith);
    }
}
MaskPipe.decorators = [
    { type: Pipe, args: [{ name: 'mask' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PrependPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // prepend:something
            return new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return key + source;
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(key + item);
            });
            return result;
        }
    }
}
PrependPipe.decorators = [
    { type: Pipe, args: [{ name: 'prepend' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SanitizeHtmlPipe {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
}
SanitizeHtmlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sanitizeHtml'
            },] }
];
/** @nocollapse */
SanitizeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ValueOfPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // valueof:key
            return new ValueOfPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} key
     * @return {?}
     */
    valueOfSingle(source, key) {
        return source[key];
    }
    /**
     * @param {?} sources
     * @param {?} key
     * @return {?}
     */
    valueOfMultiple(sources, key) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.valueOfSingle(source, key));
        });
        return result;
    }
    /**
     * @param {?} object
     * @param {...?} args
     * @return {?}
     */
    transform(object, ...args) {
        if ((typeof object === "string") || !(object instanceof Array)) {
            return this.valueOfSingle(object, args[0]);
        }
        return this.valueOfMultiple(object, args[0]);
    }
}
ValueOfPipe.decorators = [
    { type: Pipe, args: [{ name: 'valueof' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WrapPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // wrap:something:something  OR wrap:something
            return new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const pre = (args && args.length) ? args[0] : "";
        /** @type {?} */
        const post = pre.length ?
            (args.length > 1 ? args[1] : "") : pre;
        /** @type {?} */
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(pre + item + post);
            });
            return result;
        }
    }
}
WrapPipe.decorators = [
    { type: Pipe, args: [{ name: 'wrap' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InToPipe {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        this.pool = pool;
    }
    /**
     * @param {?} content
     * @param {?} list
     * @return {?}
     */
    transform(content, list) {
        /** @type {?} */
        let result = content;
        list.split("|").map((item) => {
            result = this._transform(result, this.split(item));
        });
        return result;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    split(item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter((x) => x.length);
    }
    /**
     * @param {?} content
     * @param {?} args
     * @return {?}
     */
    _transform(content, args) {
        /** @type {?} */
        let result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this));
        return result ? result : content;
    }
}
InToPipe.decorators = [
    { type: Pipe, args: [{ name: 'into' },] }
];
/** @nocollapse */
InToPipe.ctorParameters = () => [
    { type: ComponentPool }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class IntoDirective {
    /**
     * @param {?} viewRef
     * @param {?} el
     * @param {?} pool
     * @param {?} componentFactoryResolver
     */
    constructor(viewRef, el, pool, componentFactoryResolver) {
        this.viewRef = viewRef;
        this.el = el;
        this.pool = pool;
        this.componentFactoryResolver = componentFactoryResolver;
        this.onComponentChange = (event) => { };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    split(item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter((x) => x.length);
    }
    /**
     * @param {?} content
     * @param {?} args
     * @param {?} data
     * @return {?}
     */
    _transform(content, args, data) {
        /** @type {?} */
        let result = content;
        if (this.pool.registeredForComponentWithNamed(args[0])) {
            /** @type {?} */
            const newArgs = args.splice(1, args.length);
            result = this.transformComponent(args[0], content, this.intoId, this.intoName, data, ...newArgs);
        }
        else if (this.pool.registeredForPipeTransformationNamed(args[0])) {
            result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this), data);
        }
        else {
            // unknown formatter
            try {
                result = this.transformComponent(args[0], content, this.intoId, this.intoName, data, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "", args.length > 4 ? args[4] : "", args.length > 5 ? args[5] : "");
            }
            catch (x) {
                console.error(x);
            }
        }
        return result;
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?} id
     * @param {?} name
     * @param {?} data
     * @param {...?} args
     * @return {?}
     */
    transformComponent(type, content, id, name, data, ...args) {
        /** @type {?} */
        let result;
        if (content === undefined) {
            return "";
        }
        if (content instanceof Date || typeof content === "string" || typeof content === "number" || typeof content === "boolean" || Object.keys(content).length) {
            result = this.registeredComponentFor(type);
            if (result === null || result === undefined) {
                console.error("Custom component '" + type + "' is not defined.");
            }
            else {
                result.id = id;
                result.name = name;
                result.service = this.pool.registeredServiceForComponent(type);
                result.transform(content.source ? content.source : content, data, args);
                if (result.onIntoComponentChange && this.onComponentChange) {
                    result.onIntoComponentChange.subscribe(this.onComponentChange);
                }
            }
        }
        else if (content instanceof Array) {
            /** @type {?} */
            let counter = 0;
            result = content;
            content.map((source) => {
                if (typeof source === "string" ||
                    typeof content === "number" ||
                    typeof content === "boolean" ||
                    Object.keys(content).length) {
                    /** @type {?} */
                    const sx = this.registeredComponentFor(type);
                    if (sx === null || sx === undefined) {
                        console.error("Custom component '" + type + "' is not defined.");
                    }
                    else {
                        sx.id = id + '-' + (counter++);
                        sx.name = name;
                        sx.service = this.pool.registeredServiceForComponent(type);
                        sx.transform(source.source ? source.source : source, data, args);
                        if (sx.onIntoComponentChange && this.onComponentChange) {
                            sx.onIntoComponentChange.subscribe(this.onComponentChange);
                        }
                    }
                }
            });
        }
        return result;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    registeredComponentFor(name) {
        return this.pool.registeredComponent(name, this.componentFactoryResolver, this.viewRef, this.el.nativeElement);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.into || this.rawContent) {
            /** @type {?} */
            let result = this.rawContent;
            if (this.into) {
                this.into.split("|").map((item) => {
                    result = this._transform(result, this.split(item), this.intoData);
                });
            }
            if (typeof result === "string") {
                /** @type {?} */
                const comp = this.registeredComponentFor("span");
                if (comp) {
                    comp.transform(result, [], this.intoData);
                }
                else {
                    console.error("Custom component 'span' is not defined.");
                }
            }
            else if (result instanceof Array) {
                result.map((source) => {
                    if (typeof source === "string") {
                        /** @type {?} */
                        const comp = this.registeredComponentFor("span");
                        if (comp) {
                            comp.transform(source, [], this.intoData);
                        }
                        else {
                            console.error("Custom component 'span' is not defined.");
                        }
                    }
                });
            }
        }
    }
}
IntoDirective.decorators = [
    { type: Directive, args: [{
                selector: '[into]'
            },] }
];
/** @nocollapse */
IntoDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: ComponentPool },
    { type: ComponentFactoryResolver }
];
IntoDirective.propDecorators = {
    rawContent: [{ type: Input, args: ["rawContent",] }],
    intoId: [{ type: Input, args: ["intoId",] }],
    intoName: [{ type: Input, args: ["intoName",] }],
    intoData: [{ type: Input, args: ["intoData",] }],
    into: [{ type: Input, args: ["into",] }],
    onComponentChange: [{ type: Input, args: ["onComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommonPipesModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerPipeTransformation('append', AppendPipe.transformationMethod());
        pool.registerPipeTransformation('if', ConditionalPipe.transformationMethod());
        pool.registerPipeTransformation('join', JoinPipe.transformationMethod());
        pool.registerPipeTransformation('map', MapPipe.transformationMethod());
        pool.registerPipeTransformation('mask', MaskPipe.transformationMethod());
        pool.registerPipeTransformation('prepend', PrependPipe.transformationMethod());
        pool.registerPipeTransformation('valueof', ValueOfPipe.transformationMethod());
        pool.registerPipeTransformation('wrap', WrapPipe.transformationMethod());
        pool.registerPipeTransformation('slice', (content, args, callback, data) => {
            /** @type {?} */
            let result;
            /** @type {?} */
            let start = parseInt(args[1], 10);
            /** @type {?} */
            let end = undefined;
            if (args.length > 2) {
                end = parseInt(args[2], 10);
            }
            /** @type {?} */
            const slicer = new SlicePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = end ? slicer.transform(content, start, end) : slicer.transform(content, start);
            }
            else {
                result = [];
                content.map((cnt) => {
                    result.push(end ? slicer.transform(cnt, start, end) : slicer.transform(cnt, start));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('number', (content, args, callback, data) => {
            /** @type {?} */
            let result;
            /** @type {?} */
            let numLocal = "en_US";
            /** @type {?} */
            let numDecimal = undefined;
            if (args.length > 2) {
                numLocal = args[1];
                numDecimal = args[2];
            }
            /** @type {?} */
            const decimaler = new DecimalPipe(numLocal);
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = numDecimal ? decimaler.transform(content, numDecimal) : decimaler.transform(content);
            }
            else {
                result = [];
                content.map((cnt) => {
                    result.push(numDecimal ? decimaler.transform(cnt, numDecimal) : decimaler.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('currency', (content, args, callback, data) => {
            /** @type {?} */
            let result;
            /** @type {?} */
            const cp = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = cp.transform(content);
            }
            else {
                result = [];
                content.map((cnt) => {
                    result.push(cp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('lowercase', (content, args, callback, data) => {
            /** @type {?} */
            let result;
            /** @type {?} */
            const lcp = new LowerCasePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = lcp.transform(content);
            }
            else {
                result = [];
                content.map((cnt) => {
                    result.push(lcp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('uppercase', (content, args, callback, data) => {
            /** @type {?} */
            let result;
            /** @type {?} */
            const ucp = new UpperCasePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = ucp.transform(content);
            }
            else {
                result = [];
                content.map((cnt) => {
                    result.push(ucp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('json', (content, args, callback, data) => {
            /** @type {?} */
            let result;
            /** @type {?} */
            const jcp = new JsonPipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = jcp.transform(content);
            }
            else {
                result = [];
                content.map((cnt) => {
                    result.push(jcp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('date', (content, args, callback, data) => {
            /** @type {?} */
            let result;
            /** @type {?} */
            let dateLocal = "en_US";
            /** @type {?} */
            let dateFormat = args[1];
            if (args.length > 2) {
                dateLocal = args[1];
                dateFormat = args[2];
            }
            /** @type {?} */
            const dater = new DatePipe(dateLocal);
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = dater.transform(content);
            }
            else {
                result = [];
                content.map((cnt) => {
                    result.push(dater.transform(cnt));
                });
            }
            return result;
        });
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CommonPipesModule,
            providers: [
                DatePipe,
                CurrencyPipe,
                DecimalPipe,
                JsonPipe,
                SlicePipe,
                UpperCasePipe,
                LowerCasePipe,
                AppendPipe,
                ConditionalPipe,
                JoinPipe,
                MapPipe,
                MaskPipe,
                PrependPipe,
                SanitizeHtmlPipe,
                ValueOfPipe,
                WrapPipe,
                ComponentPool,
                InToPipe
            ]
        };
    }
}
CommonPipesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    AppendPipe,
                    ConditionalPipe,
                    JoinPipe,
                    MapPipe,
                    MaskPipe,
                    PrependPipe,
                    SanitizeHtmlPipe,
                    ValueOfPipe,
                    WrapPipe,
                    InToPipe,
                    IntoDirective
                ],
                exports: [
                    AppendPipe,
                    ConditionalPipe,
                    JoinPipe,
                    MapPipe,
                    MaskPipe,
                    PrependPipe,
                    SanitizeHtmlPipe,
                    ValueOfPipe,
                    WrapPipe,
                    InToPipe,
                    IntoDirective
                ],
                entryComponents: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
CommonPipesModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('input', InputComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: InputIntoPipeModule,
            providers: []
        };
    }
}
InputIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CommonPipesModule.forRoot()],
                declarations: [InputComponent],
                exports: [InputComponent],
                entryComponents: [InputComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
InputIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputGroupComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    focused(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.type === 'radio') {
            this.source = event.target.value;
        }
        else {
            /** @type {?} */
            const i = this.source.indexOf(event.target.value);
            if (event.target.checked) {
                if (i < 0) {
                    this.source.push(event.target.value);
                }
            }
            else {
                this.source.splice(i, 1);
            }
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "select",
            item: this.data
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelected(item) {
        /** @type {?} */
        const xitem = item.value ? item.value : item;
        if (this.type === 'radio') {
            return xitem === this.source;
        }
        /** @type {?} */
        let found = false;
        this.source.map((x) => {
            if (xitem === x) {
                found = true;
            }
        });
        return found;
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.type = (source instanceof Array) ? 'checkbox' : 'radio';
    }
}
InputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-group-component',
                template: `
    <span class="input-group-item" *ngFor="let x of options; let i = index">
        <input 
            [type]="type" 
            [id]="name + i" 
            [name]="name + (type === 'radio' ? '' : i)" 
            [value]="x.value ? x.value : x" 
            [checked]="isSelected(x)"
            (focus)="focused($event)"/>
        <label [for]="name + i" [textContent]="x.label ? x.label : x"></label>
    </span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        `]
            }] }
];
/** @nocollapse */
InputGroupComponent.ctorParameters = () => [
    { type: Renderer }
];
InputGroupComponent.propDecorators = {
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputGroupIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('inputgroup', InputGroupComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: InputGroupIntoPipeModule,
            providers: []
        };
    }
}
InputGroupIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [InputGroupComponent],
                exports: [InputGroupComponent],
                entryComponents: [InputGroupComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
InputGroupIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JsonComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
    }
}
JsonComponent.decorators = [
    { type: Component, args: [{
                selector: 'json-component',
                template: `<span class="json-view" [textContent]="source | json"></span>`,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        .json-view {
            display: inline-block;
            float: left;
            font-family: monospace;
            padding: 5px;
            white-space: pre-wrap;
            unicode-bidi: embed;        
        }
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JsonIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('json', JsonComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: JsonIntoPipeModule,
            providers: []
        };
    }
}
JsonIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [JsonComponent],
                exports: [JsonComponent],
                entryComponents: [JsonComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
JsonIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LastUpdateComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.showIcon = (args && args.length && args[0] === 'true');
    }
    /**
     * @return {?}
     */
    formatDate() {
        /** @type {?} */
        const currentDate = new Date();
        /** @type {?} */
        const minute = 60000;
        /** @type {?} */
        const hour = 3600000;
        /** @type {?} */
        const day = 86400000;
        /** @type {?} */
        const week = 604800000;
        /** @type {?} */
        const month = 604800000 * 4;
        /** @type {?} */
        const year = 604800000 * 52;
        /** @type {?} */
        let result = "";
        /** @type {?} */
        let diff = currentDate.getTime() - this.source.getTime();
        if (diff <= minute) {
            // up to a minute
            result = "seconds ago";
        }
        else if (diff <= hour) {
            /** @type {?} */
            let minutes = Math.floor(diff / minute);
            /** @type {?} */
            let seconds = Math.floor((diff - (minutes * minute)) / 1000);
            result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
        }
        else if (diff <= day) {
            /** @type {?} */
            let hours = Math.floor(diff / hour);
            /** @type {?} */
            let minutes = Math.floor((diff - (hours * hour)) / minute);
            result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
        }
        else if (diff <= week) {
            /** @type {?} */
            let days = Math.floor(diff / day);
            /** @type {?} */
            let hours = Math.floor((diff - (days * day)) / hour);
            result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
        }
        else if (diff <= month) {
            /** @type {?} */
            let weeks = Math.floor(diff / week);
            /** @type {?} */
            let days = Math.floor((diff - (weeks * week)) / day);
            result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
        }
        else if (diff <= year) {
            /** @type {?} */
            let months = Math.floor(diff / month);
            /** @type {?} */
            let weeks = Math.floor((diff - (months * month)) / week);
            result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
        }
        else {
            /** @type {?} */
            let years = Math.floor(diff / year);
            /** @type {?} */
            let months = Math.floor((diff - (years * year)) / month);
            result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
        }
        return result;
    }
}
LastUpdateComponent.decorators = [
    { type: Component, args: [{
                selector: 'lastupdate-component',
                template: `
    <span *ngIf="showIcon" class="fa fa-clock-o" aria-hidden="true"></span>
    <span>{{formatDate()}}</span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px;position: relative}
        .fa {margin:0 5px 0 0}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LastUpdateIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('lastupdate', LastUpdateComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LastUpdateIntoPipeModule,
            providers: []
        };
    }
}
LastUpdateIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [LastUpdateComponent],
                exports: [LastUpdateComponent],
                entryComponents: [LastUpdateComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
LastUpdateIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LikeComponent {
    constructor() {
        this.thumbs = "";
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
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    addItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            savedItems.push(id);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
        }
        else {
            localStorage.setItem(this.thumbs, JSON.stringify([id]));
        }
        this.source++;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    removeItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            /** @type {?} */
            const i = savedItems.indexOf(id);
            savedItems.splice(i, 1);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
            this.source--;
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getItem(id) {
        /** @type {?} */
        const saved = localStorage.getItem(this.thumbs);
        /** @type {?} */
        let found = null;
        if (saved) {
            /** @type {?} */
            const savedItems = JSON.parse(saved);
            /** @type {?} */
            const i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    }
    /**
     * @return {?}
     */
    formatterSource() {
        /** @type {?} */
        let result = this.source;
        if (this.source > 1000) {
            result = (this.source / 1000).toFixed(1) + " k";
        }
        return result;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleCount(event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        if (this.selected) {
            /** @type {?} */
            const existing = this.getItem(this.data[this.key]);
            if (!existing) {
                this.addItem(this.data[this.key]);
            }
        }
        else {
            this.removeItem(this.data[this.key]);
        }
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "change",
            item: this.data,
            selected: this.selected,
            action: this.thumbs
        });
    }
}
LikeComponent.decorators = [
    { type: Component, args: [{
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
                styles: [`
        :host {display:table;float:left;min-height: 20px;position: relative}
        .like {cursor: pointer;}
        .like .counts{margin-left: 5px;}
        .like .fa {margin: 0;}
        .like .fa.selected {color: green;}
        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LikeIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('like', LikeComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LikeIntoPipeModule,
            providers: []
        };
    }
}
LikeIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [LikeComponent],
                exports: [LikeComponent],
                entryComponents: [LikeComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
LikeIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LinkComponent {
    constructor() {
        this.poped = false;
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
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
        this.poper = (args && args.length > 2) ? (args[1] == 'true') : false;
        if (!this.title || !this.title.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d + 1);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        this.poped = false;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "click",
            item: event.type
        });
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'link-component',
                template: `
    <a [href]="source" 
        [target]="target" 
        [textContent]="title" 
        (mouseenter)='poped = true' 
        (mouseleave)='poped = false' 
        (keyup)='keyup($event)' 
        (click)="change($event)"></a>
        <img *ngIf='poped' [src]='source' />`,
                styles: [`
        :host {display:table;float:left;min-height: 20px; position:relative}
        :host img{z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;display:table;float:left;min-height: 20px; width: 250px;top: 22px;position:absolute;border-radius: 4px}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LinkPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // link:target:text
            if (args.length > 2) {
                return new LinkPipe().transform(content, args[1], args[2]);
            }
            else if (args.length > 1) {
                return new LinkPipe().transform(content, "", args[1]);
            }
            else {
                return new LinkPipe().transform(content, "", "");
            }
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    stringToLink(source, target, title) {
        if (!title || !title.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            title = d < 0 ? t : t.substring(d + 1);
        }
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
    }
    /**
     * @param {?} sources
     * @param {?} target
     * @param {?} title
     * @return {?}
     */
    arrayToImagLink(sources, target, title) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.stringToLink(source, target, ""));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const target = (args && args.length) ? args[0] : "";
        /** @type {?} */
        const title = (args && args.length > 1) ? args[1] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
    }
}
LinkPipe.decorators = [
    { type: Pipe, args: [{ name: 'link' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LinkIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('link', LinkComponent);
        pool.registerPipeTransformation('link', LinkPipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LinkIntoPipeModule,
            providers: [LinkPipe]
        };
    }
}
LinkIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [LinkComponent, LinkPipe],
                exports: [LinkComponent, LinkPipe],
                entryComponents: [LinkComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
LinkIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PhoneComponent {
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
        this.isLink = args.length ? args[0] === 'true' : false;
        this.formatting = args.length > 1 ? args[1] === 'true' : false;
    }
    /**
     * @return {?}
     */
    normalizeSource() {
        /** @type {?} */
        let result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            /** @type {?} */
            const b = result.slice(0, 10);
            /** @type {?} */
            const e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    }
    /**
     * @return {?}
     */
    formattedSource() {
        /** @type {?} */
        let result = this.source;
        if (this.formatting) {
            result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
            result = result[0] === '1' ? result.substring(1) : result;
            if (result.length === 10) {
                result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            }
            else if (result.length > 10) {
                /** @type {?} */
                const b = result.slice(0, 10);
                /** @type {?} */
                const e = result.slice(10);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                result += (' ext. ' + e);
            }
        }
        return result;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
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
            type: 'click',
            item: event.type
        });
    }
}
PhoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'phone',
                template: `
    <a  *ngIf="isLink" [href]="'tel:' + normalizeSource()" (keyup)='keyup($event)' (click)="change($event)">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </a>
    <span *ngIf="!isLink">
        <span class='fa fa-phone' aria-hidden='true'></span>
        <span [textContent]="formattedSource()"></span>
    </span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        :host a:hover .fa-phone{color: #fabdab;}
        :host .fa{margin: 0 5px;}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PhonePipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // prepend:something
            return new PhonePipe().transform(content, args.length > 1 ? args[1] === 'true' : false, args.length > 2 ? args[2] === 'true' : false);
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} link
     * @param {?} format
     * @return {?}
     */
    phoneFromString(source, link, format) {
        return link ?
            "<a href='tel:" + this.normalizeSource(source) + "'><span class='fa fa-phone' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></a>" :
            "<span><span class='fa fa-phone' style='margin: 0 5px' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></span>";
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const link = ((args && args.length) ? args[0] : false);
        /** @type {?} */
        const format = ((args && args.length > 1) ? args[1] : false);
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.phoneFromString(source, link, format);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.phoneFromString(item, link, format));
            });
            return result;
        }
    }
    /**
     * @param {?} source
     * @return {?}
     */
    normalizeSource(source) {
        /** @type {?} */
        let result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            /** @type {?} */
            const b = result.slice(0, 10);
            /** @type {?} */
            const e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    formattedSource(source) {
        /** @type {?} */
        let result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        }
        else if (result.length > 10) {
            /** @type {?} */
            const b = result.slice(0, 10);
            /** @type {?} */
            const e = result.slice(10);
            result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            result += (' ext. ' + e);
        }
        return result;
    }
}
PhonePipe.decorators = [
    { type: Pipe, args: [{ name: 'phone' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PhoneIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('phone', PhoneComponent);
        pool.registerPipeTransformation('phone', PhonePipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PhoneIntoPipeModule,
            providers: [PhonePipe]
        };
    }
}
PhoneIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PhoneComponent, PhonePipe],
                exports: [PhoneComponent, PhonePipe],
                entryComponents: [PhoneComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
PhoneIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RatingComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.singleStar = false;
        this.value = [];
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @return {?}
     */
    click() {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'rating'
        });
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.float = parseFloat(source);
        this.singleStar = args.length ? (args[0] === 'true') : false;
        this.source = source;
        /** @type {?} */
        const size = parseInt(source, 10);
        for (let i = 0; i < size; i++) {
            this.value.push(i);
        }
    }
}
RatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'rating-component',
                template: `
    <span class='rating' *ngIf="singleStar">
        <span class='fa fa-star' aria-hidden='true'></span>
    </span>
    <span class='rating' *ngIf="!singleStar">
        <span class='fa fa-star' aria-hidden='true' *ngFor="let x of value"></span>
        <span class='fa fa-star-half' aria-hidden='true' *ngIf="float != value"></span>
    </span>
    <span class='rate-value' [textContent]="source"></span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px;cursor:pointer}
        .rating {
            display: inline-block;
        }
        `]
            }] }
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [
    { type: ElementRef }
];
RatingComponent.propDecorators = {
    keyup: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    click: [{ type: HostListener, args: ['click', [],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RatingPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            return new RatingPipe().transform(content, "");
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} multiStart
     * @return {?}
     */
    rateString(source, multiStart) {
        /** @type {?} */
        const value = parseInt(source, 10);
        /** @type {?} */
        const float = parseFloat(source);
        /** @type {?} */
        let x = "<span class='rating'>";
        if (multiStart) {
            for (let i = 0; i < value; i++) {
                x += "<span class='fa fa-star' aria-hidden='true'></span>";
            }
            if (float !== value) {
                x += "<span class='fa fa-star-half' aria-hidden='true'></span>";
            }
        }
        else {
            x += "<span class='fa fa-star' aria-hidden='true'></span>";
        }
        x += "</span><span class='rate-value'>" + source + "</span>";
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const singleStar = args.length ? (args[0] === 'true') : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source, singleStar);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.rateString(item, singleStar));
            });
            return result;
        }
    }
}
RatingPipe.decorators = [
    { type: Pipe, args: [{ name: 'raiting' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RatingIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('rating', RatingComponent);
        pool.registerPipeTransformation('rating', RatingPipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: RatingIntoPipeModule,
            providers: [RatingPipe]
        };
    }
}
RatingIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [RatingComponent, RatingPipe],
                exports: [RatingComponent, RatingPipe],
                entryComponents: [RatingComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
RatingIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NoticeComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    /**
     * @return {?}
     */
    click() {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'notice'
        });
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.message = args.length ? args[0] : undefined;
        this.source = source;
        this.el.nativeElement.setAttribute('title', this.message);
    }
}
NoticeComponent.decorators = [
    { type: Component, args: [{
                selector: 'notice-component',
                template: `
        <span class='fa fa-bell' aria-hidden='true'></span>
        <span class='notice' [textContent]="source"></span>
    `,
                styles: [`
        :host {display: table;position: relative;float: left;cursor:pointer}
        :host .fa{font-size: 1rem;}
        :host:hover{color: red;}
        :host:hover .fa{color: red;}
        :host:hover .notice{background-color: #000;}
        .notice {display: table;width: 17px;height: 15px;
            border-radius: 50%;text-align: center;
            background-color: rgba(55,155,255,0.9);
            float: right;font-size: 0.7rem;line-height: 1rem;
            margin-left: -5px;z-index: 2;color: #fff;
        }
        `]
            }] }
];
/** @nocollapse */
NoticeComponent.ctorParameters = () => [
    { type: ElementRef }
];
NoticeComponent.propDecorators = {
    keyup: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    click: [{ type: HostListener, args: ['click', [],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NoticePipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            return new NoticePipe().transform(content, "");
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} message
     * @return {?}
     */
    noticeString(source, message) {
        return `
        <span style='display:table;possition:relative;float:left' alt='` + message + `'>
          <span class='fa fa-star' aria-hidden='true'></span>
          <span style='display: table;width: 17px;height: 15px;border-radius: 50%;text-align: center;background-color: rgba(200,200,200,0.2);float: right;font-size: 0.8rem;margin-left: -5px'>` +
            source +
            ` </span>
        </span>`;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const message = args.length ? args[0] : undefined;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.noticeString(source, message);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.noticeString(item, message));
            });
            return result;
        }
    }
}
NoticePipe.decorators = [
    { type: Pipe, args: [{ name: 'notice' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NoticeIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('notice', NoticeComponent);
        pool.registerPipeTransformation('notice', NoticePipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NoticeIntoPipeModule,
            providers: [NoticePipe]
        };
    }
}
NoticeIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NoticeComponent, NoticePipe],
                exports: [NoticeComponent, NoticePipe],
                entryComponents: [NoticeComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
NoticeIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() {
        this.multiselect = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        event.stopPropagation();
        event.preventDefault();
        this.source = event.target.value;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'change',
            item: this.data
        });
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.multiselect = args.length ? args[0] === true : false;
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-component',
                template: `
    <select tabindex="0" 
      [multiple]="multiselect ? true:null" 
      (click)="click($event)" 
      (change)="change($event)">
        <option *ngFor="let x of options" 
          [selected]="source === x ? true : null"  
          [value]="x" 
          [textContent]="x"></option>
    </select>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        `]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SelectIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('select', SelectComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SelectIntoPipeModule,
            providers: []
        };
    }
}
SelectIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SelectComponent],
                exports: [SelectComponent],
                entryComponents: [SelectComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
SelectIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ShareComponent {
    constructor() {
        this.shouldDisplay = false;
        this.shareList = [];
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} type
     * @param {?} address
     * @return {?}
     */
    shareInfo(type, address) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with ' + type
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
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
            item: event.title
        });
    }
    /**
     * @return {?}
     */
    toggleShare() {
        this.shouldDisplay = !this.shouldDisplay;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: 'Share options',
            type: 'share',
            item: this.shouldDisplay ? 'open' : 'close'
        });
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        /** @type {?} */
        const list = (args[0] instanceof Array) ? args[0] : args;
        list.map((arg) => {
            if (arg === 'facebook') {
                this.shareList.push(this.shareInfo('facebook', 'http://www.facebook.com/sharer.php?u=' + source));
            }
            else if (arg === 'twitter') {
                this.shareList.push(this.shareInfo('twitter', 'https://twitter.com/share?title=&amp;url=' + source));
            }
            else if (arg === 'linkedin') {
                this.shareList.push(this.shareInfo('linkedin', 'http://www.linkedin.com/shareArticle?title=&amp;url=' + source));
            }
            else if (arg === 'google') {
                this.shareList.push(this.shareInfo('google-plus', 'https://plus.google.com/share?url=' + source));
            }
            else if (arg === 'pinterest') {
                this.shareList.push(this.shareInfo('google-plus', 'http://pinterest.com/pin/create/link/?url=' + source));
            }
            else if (arg === 'digg') {
                this.shareList.push(this.shareInfo('digg', 'http://digg.com/submit?url=' + source));
            }
            else if (arg === 'get-pocket') {
                this.shareList.push(this.shareInfo('get-pocket', 'https://getpocket.com/edit?url=' + source));
            }
            else if (arg === 'xing') {
                this.shareList.push(this.shareInfo('xing', 'https://www.xing.com/app/user?op=share&url=' + source));
            }
            else if (arg === 'stumbleupon') {
                this.shareList.push(this.shareInfo('stumbleupon', 'http://www.stumbleupon.com/submit?url=' + source));
            }
        });
    }
}
ShareComponent.decorators = [
    { type: Component, args: [{
                selector: 'share-component',
                template: `
    <a id='share-comment-{{id}}' 
        tabindex="0" 
        class='share-item-tips' 
        (keyup)='keyup($event)'
        (click)='toggleShare()'>
    <span class="fa fa-share-alt"></span>
    <span class="share">share</span>
    </a>
    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>
      <span class='social-referal'>
        <a *ngFor="let share of shareList" 
            (keyup)='keyup($event)'
            (click)='change(share)'
            [class]='share.icon' target='_blank' 
            [href]='share.href'><span class='off-screen' [textContent]="share.title"></span></a>
      </span>
    </span>
`,
                styles: [`
    :host {display:table;float:left;min-height: 20px;position: relative}
    .share-item-tips {cursor: pointer;}
    .share-item-tips:hover {color: #fabdab;}
    .share-item-tips .fa {margin: 0;}
    .share-item-tips:hover .fa{color: #fabdab;}
    .share-item-tips .share{margin-left: 5px;}
    .tips {
        position: absolute;
        display: flex;
        flex-direction: row;
        padding: 5px;
        border: 1px solid #aaa;
        border-radius: 2px;
        background-color: #fff;
        z-index: 2;
    }
    .tips .social-referal {
        display: flex;
        flex-direction: row;
    }
    .tips .social-referal .fa {
        float: left;
        padding: 2px 4px;
        color: blue;
        border: 1px solid #ccc;
        border-radius: 4px;
        text-decoration: none;
        margin: 0 1px;
        width: 20px;
        text-align: center;
    }
    .tips .social-referal .fa:hover {
        color: #fff;
        background-color: blue;
    }
    `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ShareIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('share', ShareComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ShareIntoPipeModule,
            providers: []
        };
    }
}
ShareIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ShareComponent],
                exports: [ShareComponent],
                entryComponents: [ShareComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
ShareIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SpanComponent {
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
    }
}
SpanComponent.decorators = [
    { type: Component, args: [{
                selector: 'span-component',
                template: `<span [textContent]="source"></span>`,
                styles: [`
        :host {display:table;float:left;min-height: 20px}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SpanIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('span', SpanComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SpanIntoPipeModule,
            providers: []
        };
    }
}
SpanIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SpanComponent],
                exports: [SpanComponent],
                entryComponents: [SpanComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
SpanIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TableComponent {
    constructor() {
        this.headers = [];
        this.rows = [];
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
        this.id = args.length ? args[0] : '';
        this.name = args.length > 1 ? args[1] : undefined;
        if (typeof source === 'object') {
            this.rows.push(source);
            this.getHeaders(source);
        }
        else if (source instanceof Array) {
            if (typeof source[0] === 'object') {
                this.rows = source;
                this.getHeaders(source[0]);
            }
            else {
                source.map((item) => {
                    this.rows.push({ value: item });
                });
                this.headers.push('value');
            }
        }
        else {
            this.rows.push({ value: source });
            this.headers.push('value');
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getHeaders(obj) {
        Object.keys(obj).map((item) => {
            this.headers.push(item);
        });
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-component',
                template: `
    <table [id]="id" class="piped-table">
        <caption *ngIf="name" [textContent]="name"></caption>
        <tr><th scope="col" *ngFor="let header of headers" [textContent]="header"></th></tr>
        <tr *ngFor="let row of rows"><td *ngFor="let header of headers" [textContent]="row[header]"></td></tr>
    </table>
    `,
                styles: [`
        :host .piped-table {padding: 0;width: 100%;border-collapse: collapse;}
        :host .piped-table caption {background-color: #c3e5e2;border-radius: 2px;color: #1b1b1b;caption-side: top;font-size: 14px;padding: 5px 6px;margin-bottom: 15px;text-align: left;}
        :host .piped-table th {user-select: none;height: 24px;position: relative;white-space: nowrap;font-weight: normal;text-transform: uppercase;font-size: 14px;padding-top: 6px;padding-bottom: 6px;text-align: left;}
        :host .piped-table td {padding-left: 3px;min-height: 21px;}
        `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TablePipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            return new TablePipe().transform(content, args.length > 1 ? args[1] : '', args.length > 2 ? args[2] : undefined);
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const id = args.length ? args[0] : '';
        /** @type {?} */
        const name = args.length > 1 ? args[1] : undefined;
        /** @type {?} */
        const headers = [];
        /** @type {?} */
        const rows = [];
        this.buildTable(source, rows, headers);
        /** @type {?} */
        let result = "<table style='width: 100%' id='" + id + "'>" + (name ? "<caption style='text-align:left;background-color: #c3e5e2;'>" + name + "</caption>" : "") + "<tr>";
        headers.map((header) => {
            result += ("<th style='text-align: left;font-weight:normal;text-transform: uppercase;' scope='col'>" + header + "</th>");
        });
        result += "</tr>";
        rows.map((row) => {
            result += "<tr>";
            headers.map((header) => {
                result += ("<td>" + row[header] + "</td>");
            });
            result += "</tr>";
        });
        result += "</table>";
        return result;
    }
    /**
     * @param {?} source
     * @param {?} rows
     * @param {?} headers
     * @return {?}
     */
    buildTable(source, rows, headers) {
        if (typeof source === 'object') {
            rows.push(source);
            this.getHeaders(source, headers);
        }
        else if (source instanceof Array) {
            if (typeof source[0] === 'object') {
                rows = source;
                this.getHeaders(source[0], headers);
            }
            else {
                source.map((item) => {
                    rows.push({ value: item });
                });
                headers.push('value');
            }
        }
        else {
            rows.push({ value: source });
            headers.push('value');
        }
    }
    /**
     * @param {?} obj
     * @param {?} headers
     * @return {?}
     */
    getHeaders(obj, headers) {
        Object.keys(obj).map((item) => {
            headers.push(item);
        });
    }
}
TablePipe.decorators = [
    { type: Pipe, args: [{ name: 'table' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TableIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('table', TableComponent);
        pool.registerPipeTransformation('table', TablePipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TableIntoPipeModule,
            providers: [
                TablePipe
            ]
        };
    }
}
TableIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TableComponent, TablePipe],
                exports: [TableComponent, TablePipe],
                entryComponents: [TableComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
TableIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.rows = 4;
        this.limit = 0;
        this.editName = false;
        this.counter = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if ((code === 48) || (code === 8)) {
            this.source = event.target.value;
        }
        else if (((code > 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) || (code == 32) ||
            ((code >= 186) && (code <= 222))) {
            if (!this.limit || this.source.length < this.limit) {
                this.source = event.target.value;
            }
        }
        else if ((code === 13) || (code === 9) || (code === 27)) {
            this.editName = false;
            if (this.oldValue !== String(this.source)) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: 'change',
                    item: this.oldValue
                });
                this.oldValue = String(this.source);
            }
            if (code === 13) {
                setTimeout(() => {
                    if (this.nameHolder) {
                        this.renderer.invokeElementMethod(this.nameHolder.nativeElement, "focus");
                    }
                }, 99);
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    blur(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = false;
        if (this.oldValue !== String(this.source)) {
            this.onIntoComponentChange.emit({
                id: this.id,
                name: this.name,
                value: this.source,
                type: 'blur',
                item: this.oldValue
            });
            this.oldValue = String(this.source);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    focus(event) {
        this.click(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        setTimeout(() => {
            if (this.nameEditor) {
                this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
            }
        }, 99);
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.source = source;
        this.oldValue = source;
        this.rows = args.length ? args[0] : 4;
        this.limit = args.length > 1 ? args[1] : 0;
        this.counter = args.length > 2 ? args[2] : false;
    }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: 'text-component',
                template: `
    <span class="text-wrapper" *ngIf="editName">
      <textarea #nameEditor
        [id]="id"
        [name]="name"
        [value]="source"
        [attr.maxlength]="limit ? limit : null"
        [rows]="rows"
        (blur)="blur($event)" 
        (keyup)='keyup($event)'></textarea>
      <span *ngIf="counter" class="counter" 
        [textContent]="limit ? (limit - source.length) + ' remaining' : source.length + ' typed'"></span>
    </span>
    <span #nameHolder
        *ngIf='!editName'
        class='locked' 
        tabindex='0' 
        (click)='click($event)'
        (keyup)='focus($event)'
        [innerHTML]="source">
    </span>
    `,
                styles: [`
        .locked {
          display: block;
          cursor: pointer;
          min-height: 20px;
          min-width: 33px;
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
        }
        .text-wrapper{box-sizing: border-box;display:table;width: 100%;}
        .text-wrapper textarea {box-sizing: border-box;display:block;cursor: beam;width: 100%;}
        .counter{display: table;float:right;color: #ddd;}
        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 20px;min-width: 33px;}
        :host .locked:hover{border: 1px solid #fabdab;}
        `]
            }] }
];
/** @nocollapse */
TextComponent.ctorParameters = () => [
    { type: Renderer }
];
TextComponent.propDecorators = {
    nameEditor: [{ type: ViewChild, args: ["nameEditor",] }],
    nameHolder: [{ type: ViewChild, args: ["nameHolder",] }],
    onIntoComponentChange: [{ type: Output, args: ["onIntoComponentChange",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('text', TextComponent);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TextIntoPipeModule,
            providers: []
        };
    }
}
TextIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CommonPipesModule.forRoot()],
                declarations: [TextComponent],
                exports: [TextComponent],
                entryComponents: [TextComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
TextIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class VideoComponent {
    constructor() {
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
    transform(source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        this.hasControls = (args && args.length > 3) ? (args[3] === 'true') : true;
        this.hoverPlay = (args && args.length > 4) ? (args[4] === 'true') : false;
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
    updateControls(event) {
        if (this.hasControls) {
            event.target.setAttribute('controls', 'true');
        }
        if (this.hoverPlay) {
            event.target.play();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resetControls(event) {
        if (this.hoverPlay && this.isPlaying(event.target)) {
            event.target.pause();
        }
    }
    /**
     * @param {?} video
     * @return {?}
     */
    isPlaying(video) {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
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
VideoComponent.decorators = [
    { type: Component, args: [{
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
    :host {display:table;float:left;min-height: 20px}
    `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class VideoPipe {
    /**
     * @return {?}
     */
    static transformationMethod() {
        /** @type {?} */
        const x = function (content, args, callback, data) {
            // video:200px:auto:alttext OR video:200px:alternate-text OR video:200px OR video
            if (args.length > 3) {
                return new VideoPipe().transform(content, args[1], args[2], args[3]);
            }
            else if (args.length > 2) {
                return new VideoPipe().transform(content, args[1], args[2]);
            }
            else if (args.length > 1) {
                return new VideoPipe().transform(content, args[1]);
            }
            else {
                return new VideoPipe().transform(content, "");
            }
        };
        return x;
    }
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    stringToVideo(source, width, height, alt) {
        if (!alt || !alt.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<video src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\'  controls=\'true\' />";
    }
    /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    arrayToVideo(sources, width, height, alt) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.stringToVideo(source, width, height, alt));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const width = (args && args.length) ? "width: " + args[0] + ";" : "";
        /** @type {?} */
        const height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        /** @type {?} */
        const alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToVideo(source, width, height, alt);
        }
        return this.arrayToVideo(source, width, height, "");
    }
}
VideoPipe.decorators = [
    { type: Pipe, args: [{ name: 'video' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class VideoIntoPipeModule {
    /**
     * @param {?} pool
     */
    constructor(pool) {
        pool.registerComponent('video', VideoComponent);
        pool.registerPipeTransformation('video', VideoPipe.transformationMethod());
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: VideoIntoPipeModule,
            providers: [VideoPipe]
        };
    }
}
VideoIntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [VideoComponent, VideoPipe],
                exports: [VideoComponent, VideoPipe],
                entryComponents: [VideoComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
/** @nocollapse */
VideoIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class IntoPipeModule {
}
IntoPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CommonPipesModule.forRoot(),
                    AddressIntoPipeModule.forRoot(),
                    AudioIntoPipeModule.forRoot(),
                    CalendarIntoPipeModule.forRoot(),
                    CheckboxIntoPipeModule.forRoot(),
                    EmailIntoPipeModule.forRoot(),
                    FontIntoPipeModule.forRoot(),
                    ImageIntoPipeModule.forRoot(),
                    InputIntoPipeModule.forRoot(),
                    InputGroupIntoPipeModule.forRoot(),
                    JsonIntoPipeModule.forRoot(),
                    LastUpdateIntoPipeModule.forRoot(),
                    LikeIntoPipeModule.forRoot(),
                    LinkIntoPipeModule.forRoot(),
                    PhoneIntoPipeModule.forRoot(),
                    RatingIntoPipeModule.forRoot(),
                    NoticeIntoPipeModule.forRoot(),
                    SelectIntoPipeModule.forRoot(),
                    ShareIntoPipeModule.forRoot(),
                    SpanIntoPipeModule.forRoot(),
                    TableIntoPipeModule.forRoot(),
                    TextIntoPipeModule.forRoot(),
                    VideoIntoPipeModule.forRoot()
                ],
                declarations: [],
                exports: [
                    CommonPipesModule,
                    AddressIntoPipeModule,
                    AudioIntoPipeModule,
                    CalendarIntoPipeModule,
                    CheckboxIntoPipeModule,
                    EmailIntoPipeModule,
                    FontIntoPipeModule,
                    ImageIntoPipeModule,
                    InputIntoPipeModule,
                    InputGroupIntoPipeModule,
                    JsonIntoPipeModule,
                    LastUpdateIntoPipeModule,
                    LikeIntoPipeModule,
                    LinkIntoPipeModule,
                    PhoneIntoPipeModule,
                    RatingIntoPipeModule,
                    NoticeIntoPipeModule,
                    SelectIntoPipeModule,
                    ShareIntoPipeModule,
                    SpanIntoPipeModule,
                    TableIntoPipeModule,
                    TableIntoPipeModule,
                    TextIntoPipeModule,
                    VideoIntoPipeModule
                ],
                entryComponents: [],
                providers: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { IntoPipeModule, AddressComponent, AddressPipe, AddressIntoPipeModule, AudioComponent, AudioPipe, AudioIntoPipeModule, CalendarComponent, CalendarIntoPipeModule, CheckboxComponent, CheckboxIntoPipeModule, EmailComponent, EmailPipe, EmailIntoPipeModule, FontComponent, FontPipe, FontIntoPipeModule, ImageComponent, ImagePipe, ImageIntoPipeModule, InputComponent, InputIntoPipeModule, InputGroupComponent, InputGroupIntoPipeModule, JsonComponent, JsonIntoPipeModule, LastUpdateComponent, LastUpdateIntoPipeModule, LikeComponent, LikeIntoPipeModule, LinkComponent, LinkPipe, LinkIntoPipeModule, PhoneComponent, PhoneIntoPipeModule, RatingComponent, RatingPipe, RatingIntoPipeModule, NoticeComponent, NoticePipe, NoticeIntoPipeModule, SelectComponent, SelectIntoPipeModule, ShareComponent, ShareIntoPipeModule, SpanComponent, SpanIntoPipeModule, TableComponent, TablePipe, TableIntoPipeModule, TextComponent, TextIntoPipeModule, VideoComponent, VideoPipe, VideoIntoPipeModule, AppendPipe, ConditionalPipe, JoinPipe, MapPipe, MaskPipe, PrependPipe, SanitizeHtmlPipe, ValueOfPipe, WrapPipe, InToPipe, IntoDirective, ComponentPool, CommonPipesModule, PhonePipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtaW50by1waXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9hZGRyZXNzL2FkZHJlc3MucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9jb21wb25lbnQucG9vbC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2FkZHJlc3MvYWRkZXNzLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvYXVkaW8vYXVkaW8uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvYXVkaW8vYXVkaW8ucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2F1ZGlvL2F1ZGlvLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY2FsZW5kYXIvY2FsZW5kYXItcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jaGVja2JveC9jaGVja2JveC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2VtYWlsL2VtYWlsLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2VtYWlsL2VtYWlsLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9lbWFpbC9lbWFpbC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2ZvbnQvZm9udC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9mb250L2ZvbnQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2ZvbnQvZm9udC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2ltYWdlL2ltYWdlLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbWFnZS9pbWFnZS1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9hcHBlbmQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9jb25kaXRpb25hbC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2pvaW4ucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9tYXAucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9tYXNrLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vcHJlcGVuZC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL3Nhbml0aXplSHRtbC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL3ZhbHVlb2YucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi93cmFwLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vaW50by5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2ludG8uZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2NvbW1vbi1waXBlcy5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbnB1dC9pbnB1dC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2lucHV0Z3JvdXAvaW5wdXQtZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvaW5wdXRncm91cC9pbnB1dGdyb3VwLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvanNvbi9qc29uLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2pzb24vanNvbi1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2xhc3R1cGRhdGUvbGFzdHVwZGF0ZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9sYXN0dXBkYXRlL2xhc3R1cGRhdGUtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9saWtlL2xpa2UuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGlrZS9saWtlLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGluay9saW5rLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2xpbmsvbGluay5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGluay9saW5rLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGhvbmUvcGhvbmUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGhvbmUvcGhvbmUucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3Bob25lL3Bob25lLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbm90aWNlL25vdGljZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9ub3RpY2Uvbm90aWNlLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9ub3RpY2Uvbm90aWNlLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zZWxlY3Qvc2VsZWN0LXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvc2hhcmUvc2hhcmUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvc2hhcmUvc2hhcmUtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zcGFuL3NwYW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvc3Bhbi9zcGFuLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGFibGUvdGFibGUucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3RhYmxlL3RhYmxlLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3RleHQvdGV4dC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3ZpZGVvL3ZpZGVvLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy92aWRlby92aWRlby1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkZHJlc3MtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cImlzTGlua1wiIFxyXG4gICAgICAgIFtocmVmXT1cInVybFwiIFxyXG4gICAgICAgIFt0YXJnZXRdPVwiaGFzVGFyZ2V0ID8gJ19ibGFuaycgOiBudWxsXCJcclxuICAgICAgICBjbGFzcz1cImdvb2dsZS1tYXBcIiBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJyBcclxuICAgICAgICAoY2xpY2spPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+VmlldyBpbiBnb29nbGUgbWFwPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiIFt0ZXh0Q29udGVudF09XCJhZGRyMVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIiBbdGV4dENvbnRlbnRdPVwiYWRkcjJcIj48L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFpc0xpbmtcIiBjbGFzcz1cImdvb2dsZS1tYXBcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgW3RleHRDb250ZW50XT1cImFkZHIxXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiIFt0ZXh0Q29udGVudF09XCJhZGRyMlwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgLmFkZHJlc3Mge2Zsb2F0OiBsZWZ0O21hcmdpbi1yaWdodDogNHB4O31cclxuICAgICAgICAuZ29vZ2xlLW1hcCB7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXJpZ2h0OiA0cHg7fVxyXG4gICAgICAgIC5mYSB7ZmxvYXQ6bGVmdDtjb2xvcjogI2YwMDttYXJnaW46IDAgNXB4O31cclxuICAgICAgICAub2ZmLXNjcmVlbiB7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IC05OTllbTt9XHJcbiAgICAgICAgOmhvc3QgYTpob3ZlciAuZmEtbWFwLW1hcmtlcntjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgOmhvc3Qgc3BhbntmbG9hdC1sZWZ0O31cclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTogdGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaXNMaW5rOiBib29sZWFuO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIGFkZHIxOiBzdHJpbmc7XHJcbiAgICBhZGRyMjogc3RyaW5nO1xyXG4gICAgaGFzVGFyZ2V0OiBib29sZWFuO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuaXNMaW5rPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFzVGFyZ2V0ID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkcjEgPSBzb3VyY2Uuc3RyZWV0ICsgJywgJyArIHNvdXJjZS5zdWl0ZTtcclxuICAgICAgICB0aGlzLmFkZHIyID0gc291cmNlLmNpdHkgKyAnLCAnICsgc291cmNlLnppcGNvZGU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGluaykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT1cIiArIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyB0aGlzLmFkZHIyICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHgucmVwbGFjZShcIlxcXFxzK1wiLCBcIitcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGFkZHJlc3MgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYWRkcmVzcycgfSlcclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3NQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV09PT0ndHJ1ZScgOiB0cnVlKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYXNUYXJnZXQgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzRnJvbVN0cmluZyhzb3VyY2UsIGlzTGluaywgaGFzVGFyZ2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5hZGRyZXNzRnJvbVN0cmluZyhpdGVtLCBpc0xpbmssIGhhc1RhcmdldCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZTogYW55LCBpc0xpbms6IGJvb2xlYW4sIGhhc1RhcmdldDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChpc0xpbmspIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9XCIgKyBcclxuICAgICAgICAgICAgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5jaXR5ICsgXCIsIFwiICsgc291cmNlLnppcGNvZGUgK1wiJmllPVVURi04XCI7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBcIjxhIGhyZWY9XFwnXCIgKyB1cmwgKyBcIlxcJyBcIiArIFxyXG4gICAgICAgICAgICAgICAgICAgIChoYXNUYXJnZXQgPyBcInRhcmdldD0nX2JsYW5rJ1wiIDogXCJcIikgKyBcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXNzPSdnb29nbGUtbWFwJz48c3BhbiBjbGFzcz0nZmEgZmEtbWFwLW1hcmtlcicgYXJpYS1oaWRkZW49J3RydWUnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48c3BhbiBjbGFzcz0nb2ZmLXNjcmVlbic+VmlldyBpbiBnb29nbGUgbWFwPC9zcGFuPjxzcGFuIGNsYXNzPSdhZGRyZXNzJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdhZGRyZXNzJz4gXCIgKyBzb3VyY2UuY2l0eSArXCIsIFwiICsgc291cmNlLnppcGNvZGUgKyBcIjwvc3Bhbj48L2E+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdnb29nbGUtbWFwJz48c3BhbiBjbGFzcz0nZmEgZmEtbWFwLW1hcmtlcicgc3R5bGU9J21hcmdpbjogMCA1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjwvc3Bhbj48c3BhbiBjbGFzcz0nYWRkcmVzcyc+XCIgKyBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgc291cmNlLnN1aXRlICsgXCI8L3NwYW4+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nYWRkcmVzcyc+IFwiICsgc291cmNlLmNpdHkgK1wiLCBcIiArIHNvdXJjZS56aXBjb2RlICsgXCI8L3NwYW4+PC9zcGFuPlwiO1xyXG4gICAgfVxyXG59XHJcbiIsIlxuaW1wb3J0IHtcblx0SW5qZWN0YWJsZSwgXG5cdENvbXBvbmVudFJlZiwgXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdEVtYmVkZGVkVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4vcGlwZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9vbCB7XG5cdHByaXZhdGUgcmVnaXN0ZXJlZFBpcGVzPSB7fTtcblx0cHJpdmF0ZSByZWdpc3RlcmVkQ29tcG9uZW50cz0ge307XG5cdHByaXZhdGUgcmVnaXN0ZXJlZFNlcnZpY2VzPSB7fTtcblxuXHRyZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbiAobmFtZTogc3RyaW5nLCBwaXBlOiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRQaXBlc1tuYW1lXSA9IHBpcGU7XG5cdH1cblx0cmVnaXN0ZXJlZEZvclBpcGVUcmFuc2Zvcm1hdGlvbk5hbWVkKGtleTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFBpcGVzW2tleV0gIT09IHVuZGVmaW5lZDtcblx0fVxuXHRyZWdpc3RlcmVkUGlwZVRyYW5zZm9ybWF0aW9uKGtleTogc3RyaW5nLCBjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xuICAgICAgICBjb25zdCBwaXBlID0gdGhpcy5yZWdpc3RlcmVkUGlwZXNba2V5XTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwaXBlID8gcGlwZShjb250ZW50LCBhcmdzLCBjYWxsYmFjaywgZGF0YSkgOiBudWxsO1xuXHR9XG5cdHJlbW92ZVBpcGVUcmFuc2Zvcm1hdGlvbiAoa2V5OiBzdHJpbmcpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkUGlwZXNba2V5XTtcblx0fVxuXG5cdHJlZ2lzdGVyQ29tcG9uZW50IChuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblx0fVxuXHRyZWdpc3RlcmVkRm9yQ29tcG9uZW50V2l0aE5hbWVkKG5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0cmVnaXN0ZXJlZENvbXBvbmVudChcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0cmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHR2aWV3UmVmcmVuY2U6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0ZWw6IEhUTUxFbGVtZW50KTogUGlwZUNvbXBvbmVudCB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV07XG5cdFx0bGV0IHJlc3VsdDogUGlwZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcblx0XHRcdGxldCBjb21wb25lbnRGYWN0b3J5ID0gcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSB2aWV3UmVmcmVuY2UuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdFx0Y29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmIDwgYW55ID4gKS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRlbC5hcHBlbmRDaGlsZChkb21FbGVtKTtcblx0XHRcdHJlc3VsdCA9ICg8UGlwZUNvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAgcmVzdWx0O1xuXHR9XG5cdHJlbW92ZUNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV07XG5cdH1cblxuXHRyZWdpc3RlclNlcnZpY2VGb3JDb21wb25lbnQgKG5hbWU6IHN0cmluZywgc2VydmljZTogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV0gPSBzZXJ2aWNlO1xuXHR9XG5cdHJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG5cdHJlZ2lzdGVyZWRGb3JTZXJ2aWNlTmFtZWQobmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0cmVtb3ZlU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRyZXNzUGlwZSB9IGZyb20gJy4vYWRkcmVzcy5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FkZHJlc3NDb21wb25lbnQsIEFkZHJlc3NQaXBlXSxcclxuICBleHBvcnRzOiBbQWRkcmVzc0NvbXBvbmVudCwgQWRkcmVzc1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0FkZHJlc3NDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQWRkcmVzc0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBBZGRyZXNzUGlwZVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnYWRkcmVzcycsIEFkZHJlc3NDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignYWRkcmVzcycsIEFkZHJlc3NQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhdWRpby1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhdWRpbyBbc3JjXT1cInNvdXJjZVwiIFxyXG4gICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCJcclxuICAgICAgICAocGxheSk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGVuZGVkKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAocGF1c2UpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChzZWVrZWQpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChlcnJvcik9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgY29udHJvbHM9XCJ0cnVlXCI+WW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGF1ZGlvIGVsZW1lbnQuPC9hdWRpbz5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4fVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1ZGlvQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1BsYXlpbmcoYXVkaW86IGFueSkge1xyXG4gICAgICAgIHJldHVybiAhIShhdWRpby5jdXJyZW50VGltZSA+IDAgJiYgIWF1ZGlvLnBhdXNlZCAmJiAhYXVkaW8uZW5kZWQgJiYgYXVkaW8ucmVhZHlTdGF0ZSA+IDIpO1xyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGV2ZW50LnRhcmdldC5hdXRvcGxheSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBldmVudC50YXJnZXQuY29udHJvbHMsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZXZlbnQudGFyZ2V0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWU6IGV2ZW50LnRhcmdldC5jdXJyZW50VGltZSxcclxuICAgICAgICAgICAgICAgIGVuZGVkOiBldmVudC50YXJnZXQuZW5kZWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXZlbnQudGFyZ2V0LmVycm9yLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VkOiBldmVudC50YXJnZXQucGF1c2VkLFxyXG4gICAgICAgICAgICAgICAgbXV0ZWQ6IGV2ZW50LnRhcmdldC5tdXRlZCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRNdXRlZDogZXZlbnQudGFyZ2V0LmRlZmF1bHRNdXRlZCxcclxuICAgICAgICAgICAgICAgIHZvbHVtZTogZXZlbnQudGFyZ2V0LnZvbHVtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gaW1hZ2UgZGlzcGxheS4gXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2F1ZGlvJyB9KVxyXG5leHBvcnQgY2xhc3MgQXVkaW9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEF1ZGlvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdPT09J3RydWUnIDogdHJ1ZSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyaW5nVG9BdWRpbyhzb3VyY2U6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBcIjxhdWRpbyBzcmM9XFwnXCIrc291cmNlK1wiXFwnIGNvbnRyb2xzPVxcJ3RydWVcXCcgLz5cIjtcclxuICAgIH1cclxuICAgIGFycmF5VG9BdWRpbyhzb3VyY2VzOiBhbnkpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9BdWRpbyhzb3VyY2UpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvQXVkaW8oc291cmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb0F1ZGlvKHNvdXJjZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQXVkaW9Db21wb25lbnQgfSBmcm9tICcuL2F1ZGlvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1ZGlvUGlwZSB9IGZyb20gJy4vYXVkaW8ucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBdWRpb0NvbXBvbmVudCwgQXVkaW9QaXBlXSxcclxuICBleHBvcnRzOiBbQXVkaW9Db21wb25lbnQsIEF1ZGlvUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbQXVkaW9Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGlvSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEF1ZGlvSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEF1ZGlvUGlwZVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2F1ZGlvJywgQXVkaW9Db21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignYXVkaW8nLCBBdWRpb1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGNhbGVuZGFyIGNvZGUgaXMgY29waWVkIGZyb20gXCJiZW4gdGVkZGVyXCIgXHJcbiogaHR0cDovL3d3dy5iZW50ZWRkZXIuY29tL2NyZWF0ZS1jYWxlbmRhci1ncmlkLWNvbXBvbmVudC1hbmd1bGFyLTQvXHJcbiovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyRGF0ZSB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgdG9kYXk/OiBib29sZWFuO1xyXG4gIH1cclxuICBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhbGVuZGFyLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJjYWxlbmRhci1ib3hcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCIgW3RleHRDb250ZW50XT1cIm9yaWdEYXRlIHwgZGF0ZTpmb3JtYXR0aW5nXCI+PC9zcGFuPlxyXG4gICAgICA8YSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInBvcHBlclwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cInBvcGRhdGVwaWNrZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlBpY2sgYSBkYXRlPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIiAqbmdJZj1cInNob3dDYWxlbmRhclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLW5hdnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vbnRoLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5CYWNrIGEgbW9udGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInA0XCI+e3sgY3VycmVudERhdGUgfCBkYXRlOidNTU1NJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkZvcndhcmQgYSBtb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInllYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwcmV2WWVhcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+QmFjayBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3Bhbj57eyBjdXJyZW50RGF0ZSB8IGRhdGU6ICd5eXl5JyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRZZWFyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+Rm9yd2FyZCBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb250aC1ncmlkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkYXktbmFtZXNcIj5cclxuXHRcdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBuYW1lIG9mIGRheU5hbWVzXCIgY2xhc3M9XCJkYXktbmFtZSBwOVwiPnt7IG5hbWUgfX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrc1wiPlxyXG5cdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IHdlZWsgb2Ygd2Vla3NcIiBjbGFzcz1cIndlZWtcIj5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrLWRhdGUgZGlzYWJsZWRcIiAqbmdJZj1cIiFpc1NlbGVjdGVkTW9udGgoZGF5LmRhdGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2Vlay1kYXRlIGVuYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzU2VsZWN0ZWRNb250aChkYXkuZGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcblx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJzZWxlY3REYXRlKCRldmVudCwgZGF5KVwiXHJcblx0XHRcdFx0XHRcdCAgIFtjbGFzcy50b2RheV09XCJkYXkudG9kYXlcIlxyXG5cdFx0XHRcdFx0XHQgICBbY2xhc3Muc2VsZWN0ZWRdPVwiZGF5LnNlbGVjdGVkXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICAucG9wcGVyIC5mYS1jYWxlbmRhcntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luOiAwIDVweH1cclxuICAgICAgICAucG9wcGVyOmhvdmVyIC5mYS1jYWxlbmRhcntjb2xvcjogI2ZhYmRhYn1cclxuICAgICAgICAuY2FsZW5kYXItYm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhci1ib3ggZGF0ZSB7ZmxleDogMTt9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCAucG9wcGVyIHtjdXJzb3I6IHBvaW50ZXI7ZmxleDogMCAwIDE1cHh9XHJcbiAgICAgICAgLmNhbGVuZGFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAqIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5jYWxlbmRhci1uYXZzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiBidXR0b24sXHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IGJ1dHRvbjpob3ZlcixcclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAuZGF5LW5hbWVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWtzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZXMge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICNkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGxpbmVhciwgY29sb3IgMTUwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5kaXNhYmxlZCB7Y29sb3I6ICNhYWE7fVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmhvdmVyIC5kYXRlLXRleHQsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1cyAuZGF0ZS10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmhvdmVyOjphZnRlcixcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnNlbGVjdGVkIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5zZWxlY3RlZDo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUudG9kYXk6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGl0ZW06IGFueTtcclxuICBzaG93Q2FsZW5kYXIgPSBmYWxzZTtcclxuICBmb3JtYXR0aW5nOnN0cmluZztcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gIG9yaWdEYXRlOiBEYXRlO1xyXG4gIGN1cnJlbnREYXRlOiBEYXRlO1xyXG4gIGRheU5hbWVzID0gWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ107XHJcbiAgd2Vla3M6IENhbGVuZGFyRGF0ZVtdW10gPSBbXTtcclxuICBzZWxlY3RlZERheXM6IERhdGVbXSA9IFtdO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcblxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9wZGF0ZXBpY2tlcihldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5zaG93Q2FsZW5kYXIgPSAhdGhpcy5zaG93Q2FsZW5kYXI7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICB0aGlzLm11bHRpc2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICBzb3VyY2UubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKG5ldyBEYXRlKGl0ZW0pKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMub3JpZ0RhdGUgPSB0aGlzLnNlbGVjdGVkRGF5cy5sZW5ndGggPyB0aGlzLnNlbGVjdGVkRGF5c1swXSA6IG5ldyBEYXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub3JpZ0RhdGUgPSBuZXcgRGF0ZSh0aGlzLnNvdXJjZSk7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2godGhpcy5vcmlnRGF0ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW0gPSBkYXRhO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZS5zZXRGdWxsWWVhcih0aGlzLm9yaWdEYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZS5zZXRNb250aCh0aGlzLm9yaWdEYXRlLmdldE1vbnRoKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmc9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZERheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZTogRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXlzW2ldO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNTYW1lRGF5KGRhdGUsIHNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gaW5kZXggPiAtMTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRNb250aChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWVNb250aChkYXRlLCB0aGlzLmN1cnJlbnREYXRlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdGVkRGF0ZXMoZGF5OiBDYWxlbmRhckRhdGUpIHtcclxuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm11bHRpc2VsZWN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkRGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlOiBEYXRlID0gdGhpcy5zZWxlY3RlZERheXNbaV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2FtZURheShkYXkuZGF0ZSwgZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGF5LnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChkYXkuZGF0ZSk7XHJcbiAgICAgICAgICAgICAgZGF5LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cyA9IFtkYXkuZGF0ZV07XHJcbiAgICAgICAgZGF5LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gIH1cclxuICBzZWxlY3REYXRlKGV2ZW50OiBhbnksIGRheTogQ2FsZW5kYXJEYXRlKTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5vcmlnRGF0ZSA9IGRheS5kYXRlO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRheS5kYXRlO1xyXG4gICAgdGhpcy50b2dnbGVTZWxlY3RlZERhdGVzKCBkYXkgKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF5cy5zb3J0KCAoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBhID4gYiA/IC0xIDogMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkRGF5cyxcclxuICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgIGl0ZW06IHRoaXMuaXRlbVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dDYWxlbmRhciA9IGZhbHNlO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBhY3Rpb25zIGZyb20gY2FsZW5kYXJcclxuICBwcmV2TW9udGgoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLTEsIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgbmV4dE1vbnRoKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSsxLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIHByZXZZZWFyKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLTEsdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIG5leHRZZWFyKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpKzEsdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgdGhlIGNhbGVuZGFyIGdyaWRcclxuICAgIGdlbmVyYXRlQ2FsZW5kYXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmZpbGxEYXRlcyh0aGlzLmN1cnJlbnREYXRlKTtcclxuICAgICAgICBjb25zdCB3ZWVrczogQ2FsZW5kYXJEYXRlW11bXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgd2Vla3MucHVzaChkYXRlcy5zcGxpY2UoMCwgNykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndlZWtzID0gd2Vla3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2FtZURheShhOiBEYXRlLCBiOiBEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGEuZ2V0RnVsbFllYXIoKSA9PT0gYi5nZXRGdWxsWWVhcigpICYmIFxyXG4gICAgICAgICAgICBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKSAmJiBcclxuICAgICAgICAgICAgYS5nZXREYXRlKCkgPT09IGIuZ2V0RGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1NhbWVNb250aChhOiBhbnksIGI6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBhLmdldFllYXIoKSA9PT0gYi5nZXRZZWFyKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxEYXRlcyhjdXJyZW50RGF0ZTogRGF0ZSk6IENhbGVuZGFyRGF0ZVtdIHtcclxuICAgICAgICBjb25zdCBjbSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICAgICAgICBjb25zdCB0bSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZShjbS5nZXRGdWxsWWVhcigpLCBjbS5nZXRNb250aCgpLCAxKVxyXG4gICAgICAgIGNvbnN0IGZpcnN0T2ZNb250aCA9IGZpcnN0RGF5LmdldERheSgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZHcmlkID0gbmV3IERhdGUoZmlyc3REYXkuZ2V0RnVsbFllYXIoKSwgZmlyc3REYXkuZ2V0TW9udGgoKSwgZmlyc3REYXkuZ2V0RGF0ZSgpIC0gZmlyc3RPZk1vbnRoKTtcclxuICAgICAgICBjb25zdCBzdGFydCA9IGZpcnN0RGF5T2ZHcmlkLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpPCAoc3RhcnQgKyA0Mik7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZHcmlkLmdldEZ1bGxZZWFyKCksIGZpcnN0RGF5T2ZHcmlkLmdldE1vbnRoKCksIGkpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdG9kYXk6IHRoaXMuaXNTYW1lRGF5KHRtLCBkKSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLmlzU2VsZWN0ZWQoZCksXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtDYWxlbmRhckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NhbGVuZGFyQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtDYWxlbmRhckNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ2FsZW5kYXJJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnY2FsZW5kYXInLCBDYWxlbmRhckNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaGVja2JveC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwidXNlRm9udFwiIGNsYXNzPVwiY2hlY2stZm9udFwiPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNvdXJjZSA9PT0gaWRlYWxcIiAjY2hlY2sgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYSBmYS1jaGVja1wiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwic291cmNlICE9PSBpZGVhbFwiICN1bmNoZWNrIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZmEgZmEtY2xvc2VcIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGlucHV0ICpuZ0lmPVwiIXVzZUZvbnRcIiBcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgICAgICBbdmFsdWVdPVwic291cmNlXCIgXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNvdXJjZT09PWlkZWFsID8gdHJ1ZSA6IG51bGxcIiBcclxuICAgICAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiIC8+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IC5jaGVjay1mb250IC5mYXttYXJnaW46IDAgNXB4fVxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICAuY2hlY2stZm9udDpob3Zlcntjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgLmNoZWNrLWZvbnQge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIG9yaWdpbmFsOiBzdHJpbmc7XHJcbiAgaWRlYWw6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB1c2VGb250OiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKFwiY2hlY2tcIilcclxuICBjaGVjaztcclxuXHJcbiAgQFZpZXdDaGlsZChcInVuY2hlY2tcIilcclxuICB1bmNoZWNrO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcblx0XHR9XHJcbiAgfVxyXG5cclxuICBjbGljayhldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5zb3VyY2UgPT09IHRoaXMuaWRlYWwpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLm9yaWdpbmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmlkZWFsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgdHlwZTogXCJjaGVja1wiLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMudXNlRm9udCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy5jaGVjay5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnVuY2hlY2spIHtcclxuICAgICAgICAgIHRoaXMudW5jaGVjay5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDY2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5pZGVhbD0gYXJncy5sZW5ndGggPyBTdHJpbmcoYXJnc1swXSkgOiBcIlwiO1xyXG4gICAgdGhpcy51c2VGb250PSBhcmdzLmxlbmd0aCA+IDEgPyBCb29sZWFuKGFyZ3NbMV0pIDogZmFsc2U7XHJcbiAgICB0aGlzLnNvdXJjZT0gU3RyaW5nKHNvdXJjZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcmlnaW5hbD0gdGhpcy5zb3VyY2UgPT09IHRoaXMuaWRlYWwgPyBcIlwiIDogc291cmNlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtDaGVja2JveENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NoZWNrYm94Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja2JveENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ2hlY2tib3hJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnY2hlY2tib3gnLCBDaGVja2JveENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VtYWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cImlzTGlua1wiIFtocmVmXT1cIidtYWlsdG86JyArIHNvdXJjZVwiIChrZXl1cCk9J2tleXVwKCRldmVudCknIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNMaW5rXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICA6aG9zdDpob3ZlciAuZmEtZW52ZWxvcGV7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIDpob3N0IC5mYXttYXJnaW46IDAgNXB4O31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzTGluazogYm9vbGVhbjtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5pc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiBcIm1haWwtdG9cIixcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGVtYWlsIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2VtYWlsJyB9KVxyXG5leHBvcnQgY2xhc3MgRW1haWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gZW1haWxcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbWFpbFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXT09PSd0cnVlJyA6IHRydWUpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIGVtYWlsRnJvbVN0cmluZyhzb3VyY2U6IHN0cmluZywgaXNMaW5rOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHg6IHN0cmluZztcclxuICAgICAgICBpZiAoaXNMaW5rKSB7XHJcbiAgICAgICAgICAgIHggPSBcIjxhIGhyZWY9XFwnbWFpbHRvOlwiK3NvdXJjZStcIlxcJyA+PHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPjxzcGFuPlwiICsgc291cmNlICsgXCI8L3NwYW4+PC9hPlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHggPSBcIjxzcGFuPjxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgc3R5bGU9J21hcmdpbjogMCA1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj48L3NwYW4+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgaXNMaW5rPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiB0cnVlO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1haWxGcm9tU3RyaW5nKHNvdXJjZSwgaXNMaW5rKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5lbWFpbEZyb21TdHJpbmcoaXRlbSwgaXNMaW5rKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRW1haWxDb21wb25lbnQgfSBmcm9tICcuL2VtYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtYWlsUGlwZSB9IGZyb20gJy4vZW1haWwucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtFbWFpbENvbXBvbmVudCwgRW1haWxQaXBlXSxcclxuICBleHBvcnRzOiBbRW1haWxDb21wb25lbnQsIEVtYWlsUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbRW1haWxDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KSBcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBFbWFpbEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtFbWFpbFBpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2VtYWlsJywgRW1haWxDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignZW1haWwnLCBFbWFpbFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZvbnQtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ2xlZnQnXCIgICAgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gIT09ICdyZXBsYWNlJ1wiIFt0ZXh0Q29udGVudF09XCJjb250ZW50XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdyaWdodCdcIiAgIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAncmVwbGFjZSdcIiBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICA6aG9zdCBzcGFuIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvbnRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIGZvbnQ6IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuZm9udCA9IGFyZ3NbMF07XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcImxlZnRcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGFjdGlvbiA9PT0gXCIqXCIgPyBzb3VyY2UgOiAoXCJyZXBsYWNlXCIgPT09IGFjdGlvbi50b0xvd2VyQ2FzZSgpID8gXCJcIiA6IHNvdXJjZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gZW1haWwgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZm9udCcgfSlcclxuZXhwb3J0IGNsYXNzIEZvbnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gZm9udDpmYSBmYS1jaGVjazpsZWZ0OipcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb250UGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIiwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiBcIlwiKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBmb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIChsb2NhdGlvbiA9PT0gXCJsZWZ0XCIgPyBcclxuICAgICAgICAgICAgICAgIChmb250ICsgY29udGVudCkgOiBcclxuICAgICAgICAgICAgICAgICgobG9jYXRpb24gPT09IFwicmlnaHRcIikgPyBjb250ZW50ICsgZm9udCA6IGZvbnQpKTtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGZvbnQgPSBhcmdzLmxlbmd0aCA/IFwiPHNwYW4gY2xhc3M9XFwnXCIgKyBhcmdzWzBdICsgXCJcXCcgc3R5bGU9J21hcmdpbjogMCA1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYWN0aW9uID09PSBcIipcIiA/IHNvdXJjZSA6IChcInJlcGxhY2VcIiA9PT0gYWN0aW9uLnRvTG93ZXJDYXNlKCkgPyBcIlwiIDogc291cmNlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZyb21TdHJpbmcoZm9udCwgbG9jYXRpb24sIGFjdGlvbiwgY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZm9udEZyb21TdHJpbmcoZm9udCwgbG9jYXRpb24sIGFjdGlvbiwgaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEZvbnRDb21wb25lbnQgfSBmcm9tICcuL2ZvbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9udFBpcGUgfSBmcm9tICcuL2ZvbnQucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtGb250Q29tcG9uZW50LCBGb250UGlwZV0sXHJcbiAgZXhwb3J0czogW0ZvbnRDb21wb25lbnQsIEZvbnRQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtGb250Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb250SW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvbnRJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbRm9udFBpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2ZvbnQnLCBGb250Q29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2ZvbnQnLCBGb250UGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbWFnZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8aW1nIFtzcmNdPVwic291cmNlXCIgXHJcbiAgICAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgXHJcbiAgICAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIiBcclxuICAgICAgICBbdGl0bGVdPVwiYWx0XCIgLz48aW1nICpuZ0lmPVwicG9wTG9jYXRpb25cIiBcclxuICAgICAgICBbc3JjXT1cInNvdXJjZVwiIGNsYXNzPSdwb3BwZXInXHJcbiAgICAgICAgW3N0eWxlLndpZHRoXT1cIihvcmlnV2lkdGggKiBtYWduaWZpY2F0aW9uKSArICdweCdcIiBcclxuICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cIihvcmlnSGVpZ2h0ICogbWFnbmlmaWNhdGlvbikgKyAncHgnXCIgLz5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbjowO3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnQ7bWluLXdpZHRoOiAyM3B4O21pbi1oZWlnaHQ6IDIwcHh9XHJcbiAgICA6aG9zdCAucG9wcGVye3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOiBub25lO2Rpc3BsYXk6IG5vbmU7ei1pbmRleDoyO2JvcmRlcjoycHggc29saWQ7Ym94LXNoYWRvdzogM3B4IDNweCAzcHggIzk5OTtib3JkZXItcmFkaXVzOiA0cHh9XHJcbiAgICA6aG9zdCBpbWd7cG9zaXRpb246cmVsYXRpdmU7cG9pbnRlci1ldmVudHM6IG5vbmU7fVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIG9yaWdXaWR0aDogbnVtYmVyO1xyXG4gICAgb3JpZ0hlaWdodDogbnVtYmVyO1xyXG4gICAgbWFnbmlmaWNhdGlvbiA9IDA7XHJcbiAgICBwb3BMb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgd2lkdGg6IHN0cmluZztcclxuICAgIGhlaWdodDogc3RyaW5nO1xyXG4gICAgYWx0OiBzdHJpbmc7XHJcbiAgICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLFsnJGV2ZW50J10pXHJcblx0ZW50ZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBwb3BwZXIgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZS5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3JpZ1dpZHRoICYmICF0aGlzLm9yaWdIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ1dpZHRoID0gaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ0hlaWdodCA9IGltYWdlLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5zdHlsZS53aWR0aCA9IHRoaXMub3JpZ1dpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLm9yaWdIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9wcGVyLnBhcmVudE5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaW5oZXJpdCc7XHJcbiAgICAgICAgICAgIHBvcHBlci5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlJztcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnBvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JyA6IFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS5yaWdodCA9IChyZWN0LndpZHRoICsgMjApICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUudG9wID0gKCgoMSAtIHRoaXMubWFnbmlmaWNhdGlvbikgKiB0aGlzLm9yaWdIZWlnaHQpIC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOiBcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUubGVmdCA9IChyZWN0LndpZHRoICsgMjApICArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLnRvcCA9ICgoKDEgLSB0aGlzLm1hZ25pZmljYXRpb24pICogdGhpcy5vcmlnSGVpZ2h0KSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCcgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmJvdHRvbSA9IChyZWN0LmhlaWdodCArIDIwKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmxlZnQgPSAoKCgxIC0gdGhpcy5tYWduaWZpY2F0aW9uKSAqIHRoaXMub3JpZ1dpZHRoKSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6IFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS50b3AgPSAocmVjdC5oZWlnaHQgKyAyMCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS5sZWZ0ID0gKCgoMSAtIHRoaXMubWFnbmlmaWNhdGlvbikgKiB0aGlzLm9yaWdXaWR0aCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFnbmlmaWNhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9yaWdXaWR0aCAmJiAhdGhpcy5vcmlnSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdXaWR0aCA9IGltYWdlLnBhcmVudE5vZGUuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdIZWlnaHQgPSBpbWFnZS5wYXJlbnROb2RlLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGltYWdlLnBhcmVudE5vZGUuc3R5bGUud2lkdGggPSB0aGlzLm9yaWdXaWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIGltYWdlLnBhcmVudE5vZGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5vcmlnSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSAodGhpcy5vcmlnV2lkdGggKiB0aGlzLiBtYWduaWZpY2F0aW9uICogMikgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLm9yaWdIZWlnaHQgKiB0aGlzLiBtYWduaWZpY2F0aW9uICogMikgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoZXZlbnQpO1xyXG5cdH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3V0JyxbJyRldmVudCddKVxyXG5cdGhvdmVyT3V0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3BMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBwb3BwZXIgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMV07XHJcbiAgICAgICAgICAgIHBvcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYWduaWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTUcnID8gZXZlbnQudGFyZ2V0IDogZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm9yaWdXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMub3JpZ0hlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhbmdlKGV2ZW50KTtcclxuXHR9XHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLFsnJGV2ZW50J10pXHJcblx0aG92ZXJWaWV3UG9ydChldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFnbmlmaWNhdGlvbiAmJiAhdGhpcy5wb3BMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnSU1HJyA/IGV2ZW50LnRhcmdldCA6IGV2ZW50LnRhcmdldC5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgaWYgKGltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS50b3AgPSAtKGV2ZW50LmxheWVyWSAqIHRoaXMuIG1hZ25pZmljYXRpb24pICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUubGVmdCA9IC0oZXZlbnQubGF5ZXJYICogdGhpcy4gbWFnbmlmaWNhdGlvbikgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFsdCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICB0aGlzLm1hZ25pZmljYXRpb24gPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDMpID8gcGFyc2VJbnQoYXJnc1szXSwxMCkgOiAwO1xyXG4gICAgICAgIHRoaXMucG9wTG9jYXRpb24gPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDQpID8gYXJnc1s0XSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgdGhpcy5tYWduaWZpY2F0aW9uID0gdGhpcy5tYWduaWZpY2F0aW9uIDwgMCA/IDAgOiB0aGlzLm1hZ25pZmljYXRpb247XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5hbHQgfHwgIXRoaXMuYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICAgICAgICAgIGl0ZW06IHt4OiBldmVudC5sYXllclgsIHk6IGV2ZW50LmxheWVyWX1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBpbWFnZSBkaXNwbGF5LiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnaW1hZ2UnIH0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGltYWdlOjIwMHB4OmF1dG86YWx0dGV4dCBPUiBpbWFnZToyMDBweDphbHRlcm5hdGUtdGV4dCBPUiBpbWFnZToyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbWFnZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCkge1xyXG4gICAgICAgIGlmKCFhbHQgfHwgIWFsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICBhbHQgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgc3R5bGU9XFwnXCIrIHdpZHRoICsgaGVpZ2h0ICsgXCJcXCcgdGl0bGU9XFwnXCIrYWx0K1wiXFwnIC8+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvSW1hZ2Uoc291cmNlcywgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IFwid2lkdGg6IFwiICsgYXJnc1swXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBoZWlnaHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IFwiaGVpZ2h0OiBcIiArIGFyZ3NbMV0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBcIlwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtJbWFnZUNvbXBvbmVudCwgSW1hZ2VQaXBlXSxcclxuICBleHBvcnRzOiBbSW1hZ2VDb21wb25lbnQsIEltYWdlUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbSW1hZ2VDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEltYWdlSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ltYWdlUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnaW1hZ2UnLCBJbWFnZUNvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdpbWFnZScsIEltYWdlUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwiZWRpdE5hbWVcIj5cclxuICAgIDxpbnB1dCAjbmFtZUVkaXRvclxyXG4gICAgICAgIHR5cGU9J3RleHQnIFxyXG4gICAgICAgIFtpZF09XCJpZFwiXHJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAoYmx1cik9XCJibHVyKCRldmVudClcIiBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJz5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICNuYW1lSG9sZGVyXHJcbiAgICAgICAgKm5nSWY9JyFlZGl0TmFtZSAmJiBmb3JtYXR0aW5nJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoa2V5dXApPSdrZXlkb3duKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmFtZSgkZXZlbnQpXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZSA/IChzb3VyY2UgfCBpbnRvOmZvcm1hdHRpbmcpIDogJyZuYnNwOydcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICNuYW1lSG9sZGVyXHJcbiAgICAgICAgKm5nSWY9JyFlZGl0TmFtZSAmJiAhZm9ybWF0dGluZydcclxuICAgICAgICBjbGFzcz0nbG9ja2VkJyBcclxuICAgICAgICB0YWJpbmRleD0nMCcgXHJcbiAgICAgICAgKGtleXVwKT0na2V5ZG93bigkZXZlbnQpJ1xyXG4gICAgICAgIChjbGljayk9XCJjbGlja05hbWUoJGV2ZW50KVwiXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJzb3VyY2UgPyBzb3VyY2UgOiAnJm5ic3A7J1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAubG9ja2VkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIFxyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGN1cnNvcjogYmVhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4fVxyXG4gICAgICAgIDpob3N0IC5sb2NrZWQ6aG92ZXJ7Ym9yZGVyOiAxcHggc29saWQgI2ZhYmRhYjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgZm9ybWF0dGluZzpzdHJpbmc7XHJcbiAgZWRpdE5hbWUgPSBmYWxzZTtcclxuICBvbGRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUVkaXRvclwiKVxyXG4gIG5hbWVFZGl0b3I7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lSG9sZGVyXCIpXHJcbiAgbmFtZUhvbGRlclxyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcblxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoKChjb2RlID49IDQ4KSAmJiAoY29kZSA8PSA5MCkpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDk2KSAmJiAoY29kZSA8PSAxMTEpKSB8fFxyXG4gICAgICAgICgoY29kZSA9PSAzMikgfHwgKGNvZGUgPT0gOCkpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDE4NikgJiYgKGNvZGUgPD0gMjIyKSkpIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSB8fCAoY29kZSA9PT0gMjcpICkge1xyXG4gICAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgIHR5cGU6IFwiY2hhbmdlXCIsXHJcbiAgICAgICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lSG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVIb2xkZXIubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDY2KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBibHVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleWRvd24oZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoZXZlbnQudGFyZ2V0LCBcImNsaWNrXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZUVkaXRvcikge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSw2Nik7XHJcblx0XHR9XHJcbiAgfVxyXG5cclxuICBjbGlja05hbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5lZGl0TmFtZSA9IHRydWU7XHJcbiAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lRWRpdG9yLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICB9LDY2KTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gYXBwZW5kIGNoYXJhY3RlcihzKSB0byBhIGNvbnRlbnQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2FwcGVuZCcgfSlcclxuZXhwb3J0IGNsYXNzIEFwcGVuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcHBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgICBcclxuICAgICAgICBjb25zdCBrZXkgPSAoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIGtleTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSArIGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHJldHVybiBhIHRyYW5zZm9ybWF0aW9uIGFyZ3VtZW50IHdoaWNoIHNob3VsZCBiZSBwaXBlZCBpbnRvIGFub3RoZXIgdHJhbnNmb3JtIG9iamVjdFxyXG4qIHRvIHRyYW5zZm9ybSB0aGUgb2JqZWN0IHZhbHVlIHBhc3NlZCB0byB0aGlzIHBpcGUuXHJcbiogdGhlIGFyZ3VtZW50cyBhcmUgYXMgZm9sbG93czogMSkgY29uZGl0aW9uLCAyKSB2YWx1ZSB0byBldmFsdWF0ZSB0aGUgY29uZGl0aW9uLCAzKSBhY3Rpb24sIDQpIGVsc2UgYWN0aW9uLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpZicgfSlcclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS50cmltKCkubWF0Y2goLyg/PVxcUylbXlwiXFw6XSooPzpcIlteXFxcXFwiXSooPzpcXFxcW1xcOlxcU11bXlxcXFxcIl0qKSpcIlteXCJcXDpdKikqL2cpLmZpbHRlcihmdW5jdGlvbih4KXtyZXR1cm4geC5sZW5ndGh9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBpZjo9OnRydWU6ZmEgZmEtY2hlY2s6ZmEgZmEtYmVsbFxyXG4gICAgICAgICAgICBjb25zdCBhY29uZGl0aW9uID0gIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBhbHRBY3Rpb24gPSAgYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBuZXcgQ29uZGl0aW9uYWxQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnXCInID8gcmVzdWx0LnN1YnN0cmluZygxLHJlc3VsdC5sZW5ndGgtMSkgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzcGxpdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soY29udGVudCwgcmVzdWx0LCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICBjb25kaXRpb25Gcm9tU3RyaW5nKGNvbnRlbnQsIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbikge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG5cclxuICAgICAgICBzd2l0Y2goYWNvbmRpdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgXCI9XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPT09IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIhPVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ICE9PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPlwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID4gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIj49XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPj0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjxcIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA8IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI8PVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50IDw9IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ+XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgIT09IHVuZGVmaW5lZCAmJiBjb250ZW50ICE9PSBudWxsICYmIGNvbnRlbnQgIT09IFwibnVsbFwiID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIhflwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID09PSB1bmRlZmluZWQgfHwgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSBcIm51bGxcIiA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwifj1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCAmJiB2YWx1ZSAmJiBTdHJpbmcoY29udGVudCkudG9Mb3dlckNhc2UoKSA9PT0gU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpblwiIDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPyBjb250ZW50LmluZGV4T2YoYWN0aW9uKSA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGFjb25kaXRpb24gPSAgYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0QWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbkZyb21TdHJpbmcoc291cmNlLCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaXRlbV0gPSB0aGlzLmNvbmRpdGlvbkZyb21TdHJpbmcoaXRlbSwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gam9pbiBhcnJheXMgb3IganNvbiBhdHRyaWJ1dGUgdmFsdWVzLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdqb2luJyB9KVxyXG5leHBvcnQgY2xhc3MgSm9pblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvL2pvaW4gb3Igam9pbjpjaGFyYWN0ZXJcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBKb2luUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlLmpvaW4oYXJnc1swXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNvdXJjZVtrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuam9pbihhcmdzWzBdKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byB0YWtlIGEgc3RyaW5nIGFzIGEga2V5IGFuZCByZXR1cm5zIHZhbHVlIG9mIGtleSBmcm9tIHRoZSBnaXZlbiBtYXAgb2JqZWN0LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdtYXAnIH0pXHJcbmV4cG9ydCBjbGFzcyBNYXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gbWFwOmtleTE7dmFsdWUxL2tleTI7dmFsdWUyL2tleTM7dmFsdWUzXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFwUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZXNGb3IobGlzdCwgbWFwKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGlzdC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFwW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hcFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBnZU1hcHBpbmcobWFwcGluZykge1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1hcHBpbmc7XHJcbiAgICAgICAgaWYoIG1hcHBpbmcudHJpbSApIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwID17fTtcclxuICAgICAgICAgICAgbWFwcGluZy5zcGxpdCgnLycpLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBrZXkuc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgICAgIG1hcFt4WzBdXSA9IHhbMV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXBwaW5nID0gbWFwOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwcGluZztcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdlTWFwcGluZygoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbc291cmNlXSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc0Zvcihzb3VyY2UsIG1hcCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIG1hc2sgc2Vuc2l0aXZlIGluZm9ybWF0aW9uLiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgbWFza2VkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ21hc2snIH0pXHJcbmV4cG9ydCBjbGFzcyBNYXNrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIG1hc2s6NDoqICBPUiBtYXNrOjRcclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBwYXJzZUludChhcmdzWzFdLCAxMCksIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBtYXNrU3RyaW5nKGl0ZW0sIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSB7XHJcbiAgICAgICAgY29uc3QgbWFza2VkU2VjdGlvbiA9IGl0ZW0gID8gaXRlbS5zbGljZSgwLCAtdmlzaWJsZURpZ2l0cykgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVTZWN0aW9uID0gaXRlbSA/IGl0ZW0uc2xpY2UoLXZpc2libGVEaWdpdHMpIDogXCJcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBtYXNrZWRTZWN0aW9uLnJlcGxhY2UoLy4vZywgbWFza1dpdGgpICsgdmlzaWJsZVNlY3Rpb24gOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgbWFza0FycmF5KGl0ZW1zLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLm1hc2tTdHJpbmcoaXRlbSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2libGVEaWdpdHMgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogNDtcclxuICAgICAgICBjb25zdCBtYXNrV2l0aCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAnKic7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrU3RyaW5nKHNvdXJjZSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXNrQXJyYXkoc291cmNlLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHByZXBlbmQgY2hhcmFjdGVyKHMpIHRvIGEgY29udGVudC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncHJlcGVuZCcgfSlcclxuZXhwb3J0IGNsYXNzIFByZXBlbmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gcHJlcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcmVwZW5kUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5ICsgc291cmNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChrZXkgKyBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIFRha2VzIGNhcmUgb2YgcHJvYmxlbSB3aXRoIHNlY3VyaXR5IHByZWNhdXNpb25zIHRoYXQgc3RyaXAgb3V0IGNlcnRhaW4gY2hhcmFjdGVycyBcclxuKiBmcm9tIGVuZCByZXN1bHQgb2YgeW91ciByZXF1ZXN0cy5cclxuKiBjb2RlIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzk2ODExNjMvYW5ndWxhci0yLXNhbml0aXppbmctaHRtbC1zdHJpcHBlZC1zb21lLWNvbnRlbnQtd2l0aC1kaXYtaWQtdGhpcy1pcy1idWctb3ItZmVcclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc2FuaXRpemVIdG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FuaXRpemVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6RG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odjpzdHJpbmcpOlNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodik7XHJcbiAgfVxyXG59IiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIG1hcCBvYmplY3QuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3ZhbHVlb2YnIH0pXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZU9mUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIHZhbHVlb2Y6a2V5XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFsdWVPZlBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVPZlNpbmdsZShzb3VyY2U6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XHJcbiAgICB9XHJcbiAgICB2YWx1ZU9mTXVsdGlwbGUoc291cmNlczogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnZhbHVlT2ZTaW5nbGUoc291cmNlLCBrZXkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKG9iamVjdDogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqZWN0ID09PSBcInN0cmluZ1wiKSB8fCAhKG9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mU2luZ2xlKG9iamVjdCwgYXJnc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2ZNdWx0aXBsZShvYmplY3QsIGFyZ3NbMF0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byB3cmFwIGEgY29udGVudCBpbnRvIGNoYXJhY3RlcihzKS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnd3JhcCcgfSlcclxuZXhwb3J0IGNsYXNzIFdyYXBQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gd3JhcDpzb21ldGhpbmc6c29tZXRoaW5nICBPUiB3cmFwOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFdyYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogYXJnc1sxXSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgIFxyXG4gICAgICAgIGNvbnN0IHByZSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHBvc3Q9IHByZS5sZW5ndGggPyBcclxuICAgICAgICAgICAgICAgICAgICAoYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpIDogcHJlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlICsgc291cmNlICsgcG9zdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJlICsgaXRlbSArIHBvc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIERhdGVQaXBlLFxyXG4gIEN1cnJlbmN5UGlwZSxcclxuICBEZWNpbWFsUGlwZSxcclxuICBKc29uUGlwZSxcclxuICBTbGljZVBpcGUsXHJcbiAgVXBwZXJDYXNlUGlwZSxcclxuICBMb3dlckNhc2VQaXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBQaXBlKHtuYW1lOidpbnRvJ30pXHJcbmV4cG9ydCBjbGFzcyBJblRvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCkge31cclxuXHJcbiAgdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgbGlzdDogc3RyaW5nKTogYW55IHtcclxuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgXHJcbiAgICBsaXN0LnNwbGl0KFwifFwiKS5tYXAoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKHJlc3VsdCwgdGhpcy5zcGxpdChpdGVtKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzcGxpdChpdGVtOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpLm1hdGNoKC8oPz1cXFMpW15cIlxcOl0qKD86XCJbXlxcXFxcIl0qKD86XFxcXFtcXDpcXFNdW15cXFxcXCJdKikqXCJbXlwiXFw6XSopKi9nKS5maWx0ZXIoKHgpPT54Lmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm0oY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucG9vbC5yZWdpc3RlcmVkUGlwZVRyYW5zZm9ybWF0aW9uKGFyZ3NbMF0sIGNvbnRlbnQsIGFyZ3MsIHRoaXMuX3RyYW5zZm9ybS5iaW5kKHRoaXMpKTsgXHJcbiAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDogY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi9waXBlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaW50b10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnRvRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIFxyXG4gICAgQElucHV0KFwicmF3Q29udGVudFwiKVxyXG4gICAgcmF3Q29udGVudDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvSWRcIilcclxuICAgIGludG9JZDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvTmFtZVwiKVxyXG4gICAgaW50b05hbWU6IHN0cmluZztcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b0RhdGFcIilcclxuICAgIGludG9EYXRhOiBhbnk7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9cIilcclxuICAgIGludG86IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoXCJvbkNvbXBvbmVudENoYW5nZVwiKVxyXG4gICAgb25Db21wb25lbnRDaGFuZ2UgPSAoZXZlbnQpID0+IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwdWJsaWMgZWw6RWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHBvb2w6IENvbXBvbmVudFBvb2wsXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICApIHtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzcGxpdChpdGVtOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50cmltKCkubWF0Y2goLyg/PVxcUylbXlwiXFw6XSooPzpcIlteXFxcXFwiXSooPzpcXFxcW1xcOlxcU11bXlxcXFxcIl0qKSpcIlteXCJcXDpdKikqL2cpLmZpbHRlcigoeCk9PngubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wb29sLnJlZ2lzdGVyZWRGb3JDb21wb25lbnRXaXRoTmFtZWQoYXJnc1swXSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3QXJncyA9IGFyZ3Muc3BsaWNlKDEsYXJncy5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChhcmdzWzBdLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgZGF0YSwgLi4ubmV3QXJncyk7IFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb29sLnJlZ2lzdGVyZWRGb3JQaXBlVHJhbnNmb3JtYXRpb25OYW1lZChhcmdzWzBdKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnBvb2wucmVnaXN0ZXJlZFBpcGVUcmFuc2Zvcm1hdGlvbihhcmdzWzBdLCBjb250ZW50LCBhcmdzLCB0aGlzLl90cmFuc2Zvcm0uYmluZCh0aGlzKSwgZGF0YSk7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHVua25vd24gZm9ybWF0dGVyXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICAgICBhcmdzWzBdLCBcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9JZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRvTmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gNSA/IGFyZ3NbNV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgfWNhdGNoKHgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyYW5zZm9ybUNvbXBvbmVudCh0eXBlLCBjb250ZW50OiBhbnksIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZGF0YTogYW55LC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiBjb250ZW50ID09PSBcImJvb2xlYW5cIiB8fCBPYmplY3Qua2V5cyhjb250ZW50KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcih0eXBlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ1wiICsgdHlwZSsgXCInIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pZCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNlcnZpY2UgPSB0aGlzLnBvb2wucmVnaXN0ZXJlZFNlcnZpY2VGb3JDb21wb25lbnQodHlwZSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQudHJhbnNmb3JtKGNvbnRlbnQuc291cmNlID8gY29udGVudC5zb3VyY2UgOiBjb250ZW50LCBkYXRhLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQub25JbnRvQ29tcG9uZW50Q2hhbmdlICYmIHRoaXMub25Db21wb25lbnRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25JbnRvQ29tcG9uZW50Q2hhbmdlLnN1YnNjcmliZSh0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudDtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNvbnRlbnQgPT09IFwiYm9vbGVhblwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbnRlbnQpLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeCA9IHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcih0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ggPT09IG51bGwgfHwgc3ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIGNvbXBvbmVudCAnXCIgKyB0eXBlKyBcIicgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4LmlkID0gaWQgKyAnLScgKyAoY291bnRlcisrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3gubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4LnNlcnZpY2UgPSB0aGlzLnBvb2wucmVnaXN0ZXJlZFNlcnZpY2VGb3JDb21wb25lbnQodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4LnRyYW5zZm9ybShzb3VyY2Uuc291cmNlID8gc291cmNlLnNvdXJjZSA6IHNvdXJjZSwgZGF0YSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeC5vbkludG9Db21wb25lbnRDaGFuZ2UgJiYgdGhpcy5vbkNvbXBvbmVudENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3gub25JbnRvQ29tcG9uZW50Q2hhbmdlLnN1YnNjcmliZSh0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcmVkQ29tcG9uZW50Rm9yKG5hbWUpOiBQaXBlQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29sLnJlZ2lzdGVyZWRDb21wb25lbnQobmFtZSwgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMudmlld1JlZiwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMuaW50byB8fCB0aGlzLnJhd0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gIHRoaXMucmF3Q29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW50bykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRvLnNwbGl0KFwifFwiKS5tYXAoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKHJlc3VsdCwgdGhpcy5zcGxpdChpdGVtKSwgdGhpcy5pbnRvRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDogUGlwZUNvbXBvbmVudCA9IHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcCkgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wLnRyYW5zZm9ybShyZXN1bHQsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ3NwYW4nIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcDogUGlwZUNvbXBvbmVudCA9IHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wKSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcC50cmFuc2Zvcm0oc291cmNlLCBbXSwgdGhpcy5pbnRvRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIGNvbXBvbmVudCAnc3BhbicgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIERhdGVQaXBlLFxyXG4gICAgQ3VycmVuY3lQaXBlLFxyXG4gICAgRGVjaW1hbFBpcGUsXHJcbiAgICBKc29uUGlwZSxcclxuICAgIFNsaWNlUGlwZSxcclxuICAgIFVwcGVyQ2FzZVBpcGUsXHJcbiAgICBMb3dlckNhc2VQaXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7QXBwZW5kUGlwZX0gZnJvbSAnLi9hcHBlbmQucGlwZSc7XHJcbmltcG9ydCB7Q29uZGl0aW9uYWxQaXBlfSBmcm9tICcuL2NvbmRpdGlvbmFsLnBpcGUnO1xyXG5pbXBvcnQge0pvaW5QaXBlfSBmcm9tICcuL2pvaW4ucGlwZSc7XHJcbmltcG9ydCB7TWFwUGlwZX0gZnJvbSAnLi9tYXAucGlwZSc7XHJcbmltcG9ydCB7TWFza1BpcGV9IGZyb20gJy4vbWFzay5waXBlJztcclxuaW1wb3J0IHtQcmVwZW5kUGlwZX0gZnJvbSAnLi9wcmVwZW5kLnBpcGUnO1xyXG5pbXBvcnQge1Nhbml0aXplSHRtbFBpcGV9IGZyb20gJy4vc2FuaXRpemVIdG1sLnBpcGUnO1xyXG5pbXBvcnQge1ZhbHVlT2ZQaXBlfSBmcm9tICcuL3ZhbHVlb2YucGlwZSc7XHJcbmltcG9ydCB7V3JhcFBpcGV9IGZyb20gJy4vd3JhcC5waXBlJztcclxuaW1wb3J0IHsgSW5Ub1BpcGUgfSBmcm9tICcuL2ludG8ucGlwZSc7XHJcbmltcG9ydCB7IEludG9EaXJlY3RpdmUgfSBmcm9tICcuL2ludG8uZGlyZWN0aXZlJ1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgQ29uZGl0aW9uYWxQaXBlLFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBQcmVwZW5kUGlwZSxcclxuICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICBWYWx1ZU9mUGlwZSxcclxuICAgIFdyYXBQaXBlLFxyXG4gICAgSW5Ub1BpcGUsXHJcbiAgICBJbnRvRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgQ29uZGl0aW9uYWxQaXBlLFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBQcmVwZW5kUGlwZSxcclxuICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICBWYWx1ZU9mUGlwZSxcclxuICAgIFdyYXBQaXBlLFxyXG4gICAgSW5Ub1BpcGUsXHJcbiAgICBJbnRvRGlyZWN0aXZlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uUGlwZXNNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENvbW1vblBpcGVzTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEYXRlUGlwZSxcclxuICAgICAgICBDdXJyZW5jeVBpcGUsXHJcbiAgICAgICAgRGVjaW1hbFBpcGUsXHJcbiAgICAgICAgSnNvblBpcGUsXHJcbiAgICAgICAgU2xpY2VQaXBlLFxyXG4gICAgICAgIFVwcGVyQ2FzZVBpcGUsXHJcbiAgICAgICAgTG93ZXJDYXNlUGlwZSxcclxuICAgIFxyXG4gICAgICAgIEFwcGVuZFBpcGUsXHJcbiAgICAgICAgQ29uZGl0aW9uYWxQaXBlLFxyXG4gICAgICAgIEpvaW5QaXBlLFxyXG4gICAgICAgIE1hcFBpcGUsXHJcbiAgICAgICAgTWFza1BpcGUsXHJcbiAgICAgICAgUHJlcGVuZFBpcGUsXHJcbiAgICAgICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgICAgICBWYWx1ZU9mUGlwZSxcclxuICAgICAgICBXcmFwUGlwZSxcclxuICAgICAgICBDb21wb25lbnRQb29sLFxyXG4gICAgICAgIEluVG9QaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignYXBwZW5kJywgQXBwZW5kUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2lmJywgQ29uZGl0aW9uYWxQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignam9pbicsIEpvaW5QaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbWFwJywgTWFwUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ21hc2snLCBNYXNrUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3ByZXBlbmQnLCBQcmVwZW5kUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3ZhbHVlb2YnLCBWYWx1ZU9mUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3dyYXAnLCBXcmFwUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdzbGljZScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIHNsaWNlIDU6MTIgT1Igc2xpY2UgNVxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBsZXQgc3RhcnQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XHJcbiAgICAgICAgbGV0IGVuZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIGVuZD0gcGFyc2VJbnQoYXJnc1syXSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzbGljZXIgPW5ldyBTbGljZVBpcGUoKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZW5kID8gc2xpY2VyLnRyYW5zZm9ybShjb250ZW50LCBzdGFydCwgZW5kKSA6IHNsaWNlci50cmFuc2Zvcm0oY29udGVudCwgc3RhcnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbnVtYmVyJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gbnVtYmVyOmVuX1VTOjIgICBvciBudW1iZXI6ZW5fVVMgb3IgbnVtYmVyXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGxldCBudW1Mb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICBsZXQgbnVtRGVjaW1hbD0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgbnVtTG9jYWwgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICBudW1EZWNpbWFsPSBhcmdzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWNpbWFsZXIgPW5ldyBEZWNpbWFsUGlwZShudW1Mb2NhbCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bURlY2ltYWwgPyBkZWNpbWFsZXIudHJhbnNmb3JtKGNvbnRlbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobnVtRGVjaW1hbCA/IGRlY2ltYWxlci50cmFuc2Zvcm0oY250LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2N1cnJlbmN5JyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gY3VycmVuY3k6ZW5fVVMgb3IgY3VycmVuY3lcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgY29uc3QgY3AgPSBuZXcgQ3VycmVuY3lQaXBlKGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcImVuX1VTXCIpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbG93ZXJjYXNlJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gbG93ZXJjYXNlXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGNvbnN0IGxjcCA9ICBuZXcgTG93ZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBsY3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChsY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd1cHBlcmNhc2UnLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyB1cHBlcmNhc2VcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgY29uc3QgdWNwID0gIG5ldyBVcHBlckNhc2VQaXBlKCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHVjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2pzb24nLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBqc29uXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGNvbnN0IGpjcCA9ICBuZXcgSnNvblBpcGUoKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gamNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goamNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignZGF0ZScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGRhdGU6ZW5fVVM6TU1kZHl5IE9SIGRhdGU6XFxcIk1NL2RkL3l5eXkgaGg6c3NcXFwiXHJcbiAgICAgICAgLy8gY29uc3QgZGF0ZSA9ICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkgPyBuZXcgRGF0ZShjb250ZW50KSA6IGNvbnRlbnQ7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGxldCBkYXRlTG9jYWwgPSBcImVuX1VTXCI7XHJcbiAgICAgICAgbGV0IGRhdGVGb3JtYXQ9IGFyZ3NbMV07XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICBkYXRlTG9jYWwgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICBkYXRlRm9ybWF0PSBhcmdzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlciA9bmV3IERhdGVQaXBlKGRhdGVMb2NhbCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGF0ZXIudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5pbXBvcnQgeyBDb21tb25QaXBlc01vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24tcGlwZXMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29tbW9uUGlwZXNNb2R1bGUuZm9yUm9vdCgpXSxcclxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0lucHV0Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtJbnB1dENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW5wdXRJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdpbnB1dCcsIElucHV0Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWdyb3VwLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1pdGVtXCIgKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiIFxyXG4gICAgICAgICAgICBbaWRdPVwibmFtZSArIGlcIiBcclxuICAgICAgICAgICAgW25hbWVdPVwibmFtZSArICh0eXBlID09PSAncmFkaW8nID8gJycgOiBpKVwiIFxyXG4gICAgICAgICAgICBbdmFsdWVdPVwieC52YWx1ZSA/IHgudmFsdWUgOiB4XCIgXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cImlzU2VsZWN0ZWQoeClcIlxyXG4gICAgICAgICAgICAoZm9jdXMpPVwiZm9jdXNlZCgkZXZlbnQpXCIvPlxyXG4gICAgICAgIDxsYWJlbCBbZm9yXT1cIm5hbWUgKyBpXCIgW3RleHRDb250ZW50XT1cIngubGFiZWwgPyB4LmxhYmVsIDogeFwiPjwvbGFiZWw+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IGFueTtcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHNlcnZpY2U6IFBpcGVTZXJ2aWNlQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAgZm9jdXNlZChldmVudDphbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5zb3VyY2UuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBpZiAoaSA8IDApIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3BsaWNlKGksMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuICBpc1NlbGVjdGVkKGl0ZW06IGFueSkge1xyXG4gICAgY29uc3QgeGl0ZW0gPSBpdGVtLnZhbHVlID8gaXRlbS52YWx1ZSA6IGl0ZW07XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIHJldHVybiB4aXRlbSA9PT0gdGhpcy5zb3VyY2U7XHJcbiAgICB9XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIHRoaXMuc291cmNlLm1hcCgoeCkgPT4ge1xyXG4gICAgICBpZiAoeGl0ZW0gPT09IHgpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvdW5kO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc2VydmljZS5nZXREYXRhRm9yKHRoaXMubmFtZSwgdGhpcy5pZCwgZGF0YSk7XHJcbiAgICB0aGlzLnR5cGUgPSAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpID8gJ2NoZWNrYm94JyA6ICdyYWRpbyc7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRHcm91cENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0lucHV0R3JvdXBDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0lucHV0R3JvdXBDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0R3JvdXBJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW5wdXRHcm91cEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2lucHV0Z3JvdXAnLCBJbnB1dEdyb3VwQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnanNvbi1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cImpzb24tdmlld1wiIFt0ZXh0Q29udGVudF09XCJzb3VyY2UgfCBqc29uXCI+PC9zcGFuPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4fVxyXG4gICAgICAgIC5qc29uLXZpZXcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgICAgICAgdW5pY29kZS1iaWRpOiBlbWJlZDsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc29uQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEpzb25Db21wb25lbnQgfSBmcm9tICcuL2pzb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0pzb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtKc29uQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtKc29uQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEpzb25JbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdqc29uJywgSnNvbkNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xhc3R1cGRhdGUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cInNob3dJY29uXCIgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4+e3tmb3JtYXREYXRlKCl9fTwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgICAgICAuZmEge21hcmdpbjowIDVweCAwIDB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFzdFVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBhbnk7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNob3dJY29uOiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvdW50OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnNob3dJY29uID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREYXRlKCkge1xyXG5cdFx0Y29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0Y29uc3QgbWludXRlID0gNjAwMDA7Ly8gb25lIG1pbnV0ZVxyXG5cdFx0Y29uc3QgaG91ciA9IDM2MDAwMDA7Ly8gb25lIGhvdXIgbGltaXRcclxuXHRcdGNvbnN0IGRheSA9IDg2NDAwMDAwOy8vIDI0IGhvdXJzIGxpbWl0XHJcblx0XHRjb25zdCB3ZWVrID0gNjA0ODAwMDAwOy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0Y29uc3QgbW9udGggPSA2MDQ4MDAwMDAqNDsvLyA3IGRheXMgbGltaXRcclxuXHRcdGNvbnN0IHllYXIgPSA2MDQ4MDAwMDAqNTI7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHJcblx0XHRsZXQgZGlmZiA9IGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIHRoaXMuc291cmNlLmdldFRpbWUoKTtcclxuXHJcblx0XHRpZihkaWZmIDw9IG1pbnV0ZSkgey8vIHVwIHRvIGEgbWludXRlXHJcblx0XHRcdHJlc3VsdCA9IFwic2Vjb25kcyBhZ29cIjtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gaG91cikgey8vIHVwIHRvIGFuIGhvdXJcclxuXHRcdFx0bGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGRpZmYvbWludXRlKTtcclxuXHRcdFx0bGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaWZmIC0gKG1pbnV0ZXMgKiBtaW51dGUpKS8xMDAwKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChtaW51dGVzIDwgMiA/IFwiYSBtaW51dGVcIiA6IG1pbnV0ZXMgKyBcIiBtaW51dGVzIFwiKSArIChzZWNvbmRzID4gMCA/IFwiIGFuZCBcIiArIHNlY29uZHMgKyBcIiBzZWNvbmRzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBkYXkpIHsvLyB1cCB0byBhIGRheVxyXG5cdFx0XHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKGRpZmYvaG91cik7XHJcblx0XHRcdGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAtIChob3VycyAqIGhvdXIpKS9taW51dGUpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVzdWx0ID0gKGhvdXJzIDwgMiA/IFwiYW4gaG91clwiIDogaG91cnMgKyBcIiBob3VycyBcIikgKyAobWludXRlcyA+IDAgPyBcIiBhbmQgXCIgKyBtaW51dGVzICsgXCIgbWludXRlcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gd2Vlaykgey8vIHVwIHRvIGEgd2Vla1xyXG5cdFx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IoZGlmZi9kYXkpO1xyXG5cdFx0XHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmIC0gKGRheXMgKiBkYXkpKS9ob3VyKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChkYXlzIDwgMiA/IFwiYSBkYXlcIiA6IGRheXMgKyBcIiBkYXlzIFwiKSArIChob3VycyA+IDAgPyBcIiBhbmQgXCIgKyBob3VycyArIFwiIGhvdXJzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBtb250aCkgey8vIHVwIHRvIGEgbW9udGhcclxuXHRcdFx0bGV0IHdlZWtzID0gTWF0aC5mbG9vcihkaWZmL3dlZWspO1xyXG5cdFx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IoKGRpZmYgLSAod2Vla3MgKiB3ZWVrKSkvZGF5KTtcclxuXHJcblx0XHRcdHJlc3VsdCA9ICh3ZWVrcyA8IDIgPyBcImEgd2Vla1wiIDogd2Vla3MgKyBcIiB3ZWVrcyBcIikgKyAoZGF5cyA+IDAgPyBcIiBhbmQgXCIgKyBkYXlzICsgXCIgZGF5cyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0geWVhcikgey8vIHVwIHRvIGEgd2Vla1xyXG5cdFx0XHRsZXQgbW9udGhzID0gTWF0aC5mbG9vcihkaWZmL21vbnRoKTtcclxuXHRcdFx0bGV0IHdlZWtzID0gTWF0aC5mbG9vcigoZGlmZiAtIChtb250aHMgKiBtb250aCkpL3dlZWspO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKG1vbnRocyA8IDIgPyBcImEgbW9udGhcIiA6IG1vbnRocyArIFwiIG1vbnRocyBcIikgKyAod2Vla3MgPiAwID8gXCIgYW5kIFwiICsgd2Vla3MgKyBcIiB3ZWVrcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB5ZWFycyA9IE1hdGguZmxvb3IoZGlmZi95ZWFyKTtcclxuXHRcdFx0bGV0IG1vbnRocyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoeWVhcnMgKiB5ZWFyKSkvbW9udGgpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKHllYXJzIDwgMiA/IFwiYSB5ZWFyXCIgOiB5ZWFycyArIFwiIHllYXJzIFwiKSArIChtb250aHMgPiAwID8gXCIgYW5kIFwiICsgbW9udGhzICsgXCIgbW9udGhzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IExhc3RVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuL2xhc3R1cGRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xhc3RVcGRhdGVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtMYXN0VXBkYXRlQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtMYXN0VXBkYXRlQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXN0VXBkYXRlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExhc3RVcGRhdGVJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdsYXN0dXBkYXRlJywgTGFzdFVwZGF0ZUNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpa2UtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBcclxuICAgICAgICBpZD0nbGlrZS17e2lkfX0nIFxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgIGNsYXNzPVwibGlrZVwiIFxyXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJzZWxlY3RlZFwiIFxyXG4gICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgXHJcbiAgICAgICAgKGNsaWNrKT0ndG9nZ2xlQ291bnQoJGV2ZW50KSc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtdXBcIiAqbmdJZj1cInRodW1ic3VwICYmICFzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy11cCBzZWxlY3RlZFwiICpuZ0lmPVwidGh1bWJzdXAgJiYgc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtZG93blwiICpuZ0lmPVwiIXRodW1ic3VwICYmICFzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy1kb3duIHNlbGVjdGVkXCIgKm5nSWY9XCIhdGh1bWJzdXAgJiYgc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudHNcIiAqbmdJZj1cInNob3dDb3VudFwiIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZXJTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvYT5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweDtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAgICAgLmxpa2Uge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICAgICAgLmxpa2UgLmNvdW50c3ttYXJnaW4tbGVmdDogNXB4O31cclxuICAgICAgICAubGlrZSAuZmEge21hcmdpbjogMDt9XHJcbiAgICAgICAgLmxpa2UgLmZhLnNlbGVjdGVkIHtjb2xvcjogZ3JlZW47fVxyXG4gICAgICAgIC5saWtlOmhvdmVyLCAubGlrZTpob3ZlciAuZmEsIC5saWtlOmhvdmVyIC5mYS5zZWxlY3RlZHtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlrZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBhbnk7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZGF0YTogYW55O1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNob3dDb3VudDogYm9vbGVhbjtcclxuICAgIHRodW1ic3VwOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHRodW1icyA9IFwiXCI7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zaG93Q291bnQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCAmJiBhcmdzWzBdID09PSAndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMudGh1bWJzdXAgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEgJiYgYXJnc1sxXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLmtleSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICB0aGlzLnRodW1icyA9IHRoaXMudGh1bWJzdXAgPyBcInRodW1icy11cC1pdGVtc1wiIDogXCJ0aHVtYnMtZG93bi1pdGVtc1wiO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAodGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pICE9PSBudWxsKTtcclxuICAgICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIHNhdmVkSXRlbXMucHVzaChpZCk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRJdGVtcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoW2lkXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdXJjZSArKztcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVtb3ZlSXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRodW1icyk7XHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBjb25zdCBpID0gc2F2ZWRJdGVtcy5pbmRleE9mKGlkKTtcclxuICAgICAgICAgIHNhdmVkSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRJdGVtcykpO1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zOiBhbnlbXSA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgY29uc3QgaSA9IHNhdmVkSXRlbXMuaW5kZXhPZihpZCk7XHJcbiAgICBcclxuICAgICAgICAgIGZvdW5kID0gaSA8IDAgPyBudWxsIDogc2F2ZWRJdGVtc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1hdHRlclNvdXJjZSgpIHtcclxuICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZTtcclxuICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSA+IDEwMDApIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSAodGhpcy5zb3VyY2UvMTAwMCkudG9GaXhlZCgxKSArIFwiIGtcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICB0b2dnbGVDb3VudChldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogXCJjaGFuZ2VcIixcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLnRodW1ic1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTGlrZUNvbXBvbmVudCB9IGZyb20gJy4vbGlrZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGlrZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0xpa2VDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0xpa2VDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpa2VJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGlrZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2xpa2UnLCBMaWtlQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGluay1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIFtocmVmXT1cInNvdXJjZVwiIFxyXG4gICAgICAgIFt0YXJnZXRdPVwidGFyZ2V0XCIgXHJcbiAgICAgICAgW3RleHRDb250ZW50XT1cInRpdGxlXCIgXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPSdwb3BlZCA9IHRydWUnIFxyXG4gICAgICAgIChtb3VzZWxlYXZlKT0ncG9wZWQgPSBmYWxzZScgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgXHJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+PC9hPlxyXG4gICAgICAgIDxpbWcgKm5nSWY9J3BvcGVkJyBbc3JjXT0nc291cmNlJyAvPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4OyBwb3NpdGlvbjpyZWxhdGl2ZX1cclxuICAgICAgICA6aG9zdCBpbWd7ei1pbmRleDoyO2JvcmRlcjoycHggc29saWQ7Ym94LXNoYWRvdzogM3B4IDNweCAzcHggIzk5OTtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweDsgd2lkdGg6IDI1MHB4O3RvcDogMjJweDtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOiA0cHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgcG9wZWQgPSBmYWxzZTtcclxuICAgIHBvcGVyOiBib29sZWFuO1xyXG4gICAgdGFyZ2V0OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLnBvcGVyID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IChhcmdzWzFdID09J3RydWUnKSA6IGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgaWYoIXRoaXMudGl0bGUgfHwgIXRoaXMudGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wb3BlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY2xpY2tcIixcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgbGluay5cclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbGluaycgfSlcclxuZXhwb3J0IGNsYXNzIExpbmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gbGluazp0YXJnZXQ6dGV4dFxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpbmtQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5rUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiLCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGlua1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1RvTGluayhzb3VyY2UsIHRhcmdldCwgdGl0bGUpIHtcclxuICAgICAgICBpZighdGl0bGUgfHwgIXRpdGxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIHRpdGxlID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPGEgaHJlZj0nXCIrc291cmNlK1wiJyB0YXJnZXQ9J1wiK3RhcmdldCtcIic+XCIrdGl0bGUrXCI8L2E+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvSW1hZ0xpbmsoc291cmNlcywgdGFyZ2V0LCB0aXRsZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb0xpbmsoc291cmNlLCB0YXJnZXQsIFwiXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCB0aXRsZTpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvTGluayhzb3VyY2UsIHRhcmdldCwgdGl0bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvSW1hZ0xpbmsoc291cmNlLCB0YXJnZXQsIHRpdGxlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9saW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpbmtQaXBlIH0gZnJvbSAnLi9saW5rLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGlua0NvbXBvbmVudCxMaW5rUGlwZV0sXHJcbiAgZXhwb3J0czogW0xpbmtDb21wb25lbnQsTGlua1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0xpbmtDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmtJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGlua0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtMaW5rUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnbGluaycsIExpbmtDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbGluaycsIExpbmtQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwaG9uZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgICpuZ0lmPVwiaXNMaW5rXCIgW2hyZWZdPVwiJ3RlbDonICsgbm9ybWFsaXplU291cmNlKClcIiAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJyAoY2xpY2spPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtcGhvbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImZvcm1hdHRlZFNvdXJjZSgpXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNMaW5rXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZWRTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4fVxyXG4gICAgICAgIDpob3N0IGE6aG92ZXIgLmZhLXBob25le2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICA6aG9zdCAuZmF7bWFyZ2luOiAwIDVweDt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpc0xpbms6IGJvb2xlYW47XHJcbiAgICBmb3JtYXR0aW5nOiBib29sZWFuO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdID09PSAndHJ1ZScgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmc9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gPT09ICd0cnVlJyA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU291cmNlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQgKyAnO2V4dD0nICsgcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxJyArIGIgKyAnO2V4dD0nICsgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGZvcm1hdHRlZFNvdXJjZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IHJlc3VsdC5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgYi5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCBcIigkMSkkMi0kM1wiKTsgXHJcbiAgICAgICAgICAgICAgICByZXN1bHQrPSAoJyBleHQuICcgKyBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogJ2NsaWNrJyxcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGVtYWlsIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Bob25lJyB9KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gcHJlcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQaG9uZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXT09PSd0cnVlJyA6IGZhbHNlLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdID09PSAndHJ1ZScgOiBmYWxzZSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgcGhvbmVGcm9tU3RyaW5nKHNvdXJjZSwgbGluaywgZm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmsgPyBcclxuICAgICAgICAgICAgXCI8YSBocmVmPSd0ZWw6XCIgKyB0aGlzLm5vcm1hbGl6ZVNvdXJjZShzb3VyY2UpICsgXCInPjxzcGFuIGNsYXNzPSdmYSBmYS1waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj48c3Bhbj5cIiArIChmb3JtYXQgPyB0aGlzLmZvcm1hdHRlZFNvdXJjZShzb3VyY2UpIDogc291cmNlKSArIFwiPC9zcGFuPjwvYT5cIiA6XHJcbiAgICAgICAgICAgIFwiPHNwYW4+PHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBzdHlsZT0nbWFyZ2luOiAwIDVweCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj48c3Bhbj5cIiArIChmb3JtYXQgPyB0aGlzLmZvcm1hdHRlZFNvdXJjZShzb3VyY2UpIDogc291cmNlKSArIFwiPC9zcGFuPjwvc3Bhbj5cIjtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgICBcclxuICAgICAgICBjb25zdCBsaW5rID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoPjEpID8gYXJnc1sxXSA6IGZhbHNlKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBob25lRnJvbVN0cmluZyhzb3VyY2UsIGxpbmssIGZvcm1hdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucGhvbmVGcm9tU3RyaW5nKGl0ZW0sIGxpbmssIGZvcm1hdCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBub3JtYWxpemVTb3VyY2Uoc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc291cmNlLnJlcGxhY2UoL1tcXCBcXC1cXC5cXChcXClcXCtdL2csICcnKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICcxJyA/IHJlc3VsdC5zdWJzdHJpbmcoMSkgOiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIHJlc3VsdCArICc7ZXh0PScgKyByZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHJlc3VsdC5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSByZXN1bHQuc2xpY2UoMTApO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEnICsgYiArICc7ZXh0PScgKyBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmb3JtYXR0ZWRTb3VyY2Uoc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc291cmNlLnJlcGxhY2UoL1tcXCBcXC1cXC5cXChcXClcXCtdL2csICcnKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICcxJyA/IHJlc3VsdC5zdWJzdHJpbmcoMSkgOiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIHJlc3VsdC5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCBcIigkMSkkMi0kM1wiKTsgXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHJlc3VsdC5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSByZXN1bHQuc2xpY2UoMTApO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIGIucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICByZXN1bHQrPSAoJyBleHQuICcgKyBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBQaG9uZUNvbXBvbmVudCB9IGZyb20gJy4vcGhvbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGhvbmVQaXBlIH0gZnJvbSAnLi9waG9uZS5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Bob25lQ29tcG9uZW50LCBQaG9uZVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtQaG9uZUNvbXBvbmVudCwgUGhvbmVQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtQaG9uZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGhvbmVJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUGhvbmVJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbUGhvbmVQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdwaG9uZScsIFBob25lQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3Bob25lJywgUGhvbmVQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JhdGluZy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPSdyYXRpbmcnICpuZ0lmPVwic2luZ2xlU3RhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGluZycgKm5nSWY9XCIhc2luZ2xlU3RhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZScgKm5nRm9yPVwibGV0IHggb2YgdmFsdWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXItaGFsZicgYXJpYS1oaWRkZW49J3RydWUnICpuZ0lmPVwiZmxvYXQgIT0gdmFsdWVcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZScgW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyMHB4O2N1cnNvcjpwb2ludGVyfVxyXG4gICAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNpbmdsZVN0YXIgPSBmYWxzZTtcclxuICAgIHZhbHVlOiBhbnlbXSA9IFtdO1xyXG4gICAgZmxvYXQ6IGFueTtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZil7XHJcbiAgICAgICAgZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywnMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXVwJyxbJyRldmVudCddKVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJyxbXSlcclxuICAgIGNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdjbGljaycsXHJcbiAgICAgICAgICAgIGl0ZW06ICdyYXRpbmcnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuZmxvYXQgPSBwYXJzZUZsb2F0KHNvdXJjZSk7XHJcbiAgICAgICAgdGhpcy5zaW5nbGVTdGFyID0gYXJncy5sZW5ndGggPyAoYXJnc1swXSA9PT0gJ3RydWUnKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUludChzb3VyY2UsIDEwKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYSByYWl0aW5nIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3JhaXRpbmcnIH0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSYXRpbmdQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgcmF0ZVN0cmluZyhzb3VyY2UsIG11bHRpU3RhcnQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHNvdXJjZSwgMTApO1xyXG4gICAgICAgIGNvbnN0IGZsb2F0ID0gcGFyc2VGbG9hdChzb3VyY2UpO1xyXG5cclxuICAgICAgICBsZXQgeCA9IFwiPHNwYW4gY2xhc3M9J3JhdGluZyc+XCI7XHJcbiAgICAgICAgaWYgKG11bHRpU3RhcnQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrICkge1xyXG4gICAgICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBmbG9hdCAhPT0gdmFsdWUgKSB7XHJcbiAgICAgICAgICAgICAgICB4ICs9IFwiPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXItaGFsZicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggKz0gXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3JhdGUtdmFsdWUnPlwiICsgc291cmNlICsgXCI8L3NwYW4+XCI7XHJcblxyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNpbmdsZVN0YXIgPSBhcmdzLmxlbmd0aCA/IChhcmdzWzBdID09PSAndHJ1ZScpIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYXRlU3RyaW5nKHNvdXJjZSwgc2luZ2xlU3Rhcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucmF0ZVN0cmluZyhpdGVtLCBzaW5nbGVTdGFyKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9yYXRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0aW5nUGlwZSB9IGZyb20gJy4vcmF0aW5nLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUmF0aW5nQ29tcG9uZW50LCBSYXRpbmdQaXBlXSxcclxuICBleHBvcnRzOiBbUmF0aW5nQ29tcG9uZW50LCBSYXRpbmdQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtSYXRpbmdDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhdGluZ0ludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBSYXRpbmdJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbUmF0aW5nUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgncmF0aW5nJywgUmF0aW5nQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3JhdGluZycsIFJhdGluZ1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbm90aWNlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1iZWxsJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdub3RpY2UnIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OiB0YWJsZTtwb3NpdGlvbjogcmVsYXRpdmU7ZmxvYXQ6IGxlZnQ7Y3Vyc29yOnBvaW50ZXJ9XHJcbiAgICAgICAgOmhvc3QgLmZhe2ZvbnQtc2l6ZTogMXJlbTt9XHJcbiAgICAgICAgOmhvc3Q6aG92ZXJ7Y29sb3I6IHJlZDt9XHJcbiAgICAgICAgOmhvc3Q6aG92ZXIgLmZhe2NvbG9yOiByZWQ7fVxyXG4gICAgICAgIDpob3N0OmhvdmVyIC5ub3RpY2V7YmFja2dyb3VuZC1jb2xvcjogIzAwMDt9XHJcbiAgICAgICAgLm5vdGljZSB7ZGlzcGxheTogdGFibGU7d2lkdGg6IDE3cHg7aGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LDE1NSwyNTUsMC45KTtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O2ZvbnQtc2l6ZTogMC43cmVtO2xpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDt6LWluZGV4OiAyO2NvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpY2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgZmxvYXQ6IGFueTtcclxuICAgIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZil7XHJcbiAgICAgICAgZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywnMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXVwJyxbJyRldmVudCddKVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJyxbXSlcclxuICAgIGNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdjbGljaycsXHJcbiAgICAgICAgICAgIGl0ZW06ICdub3RpY2UnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMubWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYSByYWl0aW5nIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ25vdGljZScgfSlcclxuZXhwb3J0IGNsYXNzIE5vdGljZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vdGljZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICBub3RpY2VTdHJpbmcoc291cmNlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPHNwYW4gc3R5bGU9J2Rpc3BsYXk6dGFibGU7cG9zc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnQnIGFsdD0nYCArIG1lc3NhZ2UgKyBgJz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9J2Rpc3BsYXk6IHRhYmxlO3dpZHRoOiAxN3B4O2hlaWdodDogMTVweDtib3JkZXItcmFkaXVzOiA1MCU7dGV4dC1hbGlnbjogY2VudGVyO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yKTtmbG9hdDogcmlnaHQ7Zm9udC1zaXplOiAwLjhyZW07bWFyZ2luLWxlZnQ6IC01cHgnPmAgK1xyXG4gICAgICAgICAgc291cmNlICtcclxuICAgICAgICBgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+YDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm90aWNlU3RyaW5nKHNvdXJjZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMubm90aWNlU3RyaW5nKGl0ZW0sIG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBOb3RpY2VDb21wb25lbnQgfSBmcm9tICcuL25vdGljZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RpY2VQaXBlIH0gZnJvbSAnLi9ub3RpY2UucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOb3RpY2VDb21wb25lbnQsIE5vdGljZVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtOb3RpY2VDb21wb25lbnQsIE5vdGljZVBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW05vdGljZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWNlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5vdGljZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtOb3RpY2VQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdub3RpY2UnLCBOb3RpY2VDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbm90aWNlJywgTm90aWNlUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50LCBQaXBlU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlbGVjdCB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgW211bHRpcGxlXT1cIm11bHRpc2VsZWN0ID8gdHJ1ZTpudWxsXCIgXHJcbiAgICAgIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgXHJcbiAgICAgIChjaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB4IG9mIG9wdGlvbnNcIiBcclxuICAgICAgICAgIFtzZWxlY3RlZF09XCJzb3VyY2UgPT09IHggPyB0cnVlIDogbnVsbFwiICBcclxuICAgICAgICAgIFt2YWx1ZV09XCJ4XCIgXHJcbiAgICAgICAgICBbdGV4dENvbnRlbnRdPVwieFwiPjwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBtdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG4gIHNlcnZpY2U6IFBpcGVTZXJ2aWNlQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbiAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIHR5cGU6ICdjaGFuZ2UnLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc2VydmljZS5nZXREYXRhRm9yKHRoaXMubmFtZSwgdGhpcy5pZCwgZGF0YSk7XHJcbiAgICB0aGlzLm11bHRpc2VsZWN0ID0gYXJncy5sZW5ndGggPyBhcmdzWzBdID09PSB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2VsZWN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2VsZWN0Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtTZWxlY3RDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTZWxlY3RJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdzZWxlY3QnLCBTZWxlY3RDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaGFyZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fScgXHJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgY2xhc3M9J3NoYXJlLWl0ZW0tdGlwcycgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPSd0b2dnbGVTaGFyZSgpJz5cclxuICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc2hhcmUtYWx0XCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzaGFyZVwiPnNoYXJlPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gaWQ9J3NoYXJlLWNvbW1lbnQte3tpZH19LXRpcHMnIGNsYXNzPSd0aXBzJyAqbmdJZj0nc2hvdWxkRGlzcGxheSc+XHJcbiAgICAgIDxzcGFuIGNsYXNzPSdzb2NpYWwtcmVmZXJhbCc+XHJcbiAgICAgICAgPGEgKm5nRm9yPVwibGV0IHNoYXJlIG9mIHNoYXJlTGlzdFwiIFxyXG4gICAgICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJ1xyXG4gICAgICAgICAgICAoY2xpY2spPSdjaGFuZ2Uoc2hhcmUpJ1xyXG4gICAgICAgICAgICBbY2xhc3NdPSdzaGFyZS5pY29uJyB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgIFtocmVmXT0nc2hhcmUuaHJlZic+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nIFt0ZXh0Q29udGVudF09XCJzaGFyZS50aXRsZVwiPjwvc3Bhbj48L2E+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweDtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwczpob3ZlciB7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyAuZmEge21hcmdpbjogMDt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzOmhvdmVyIC5mYXtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIC5zaGFyZXttYXJnaW4tbGVmdDogNXB4O31cclxuICAgIC50aXBzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCAuZmEge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMCAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIC5mYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc2hvdWxkRGlzcGxheSA9IGZhbHNlO1xyXG4gICAgc291cmNlOiBzdHJpbmc7IC8vIGl0IHNob3VsZCBiZSBhIGxpbmsgcmVmZXJlbmNlIHRvIHdoYXQgaXMgYmVpbmcgc2hhcmVkLlxyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaGFyZUxpc3QgPSBbXTsgLy8gbGlzdCBvZiBzaXRlcyB0byBzaG93IG9uIHNoYXJlIHZpZXcuXHJcbiAgICBcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc2hhcmVJbmZvKHR5cGUsIGFkZHJlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpY29uOiAnZmEgZmEtJyArIHR5cGUsXHJcbiAgICAgICAgICAgIGhyZWY6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2hhcmUgd2l0aCAnKyB0eXBlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudGl0bGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHRvZ2dsZVNoYXJlKCkge1xyXG4gICAgICAgIHRoaXMuc2hvdWxkRGlzcGxheSA9ICF0aGlzLnNob3VsZERpc3BsYXk7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnU2hhcmUgb3B0aW9ucycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdzaGFyZScsXHJcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuc2hvdWxkRGlzcGxheSA/ICdvcGVuJyA6ICdjbG9zZSdcclxuICAgICAgICB9KTtcclxuICAgIH0gIFxyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gKGFyZ3NbMF0gaW5zdGFuY2VvZiBBcnJheSkgPyBhcmdzWzBdIDogYXJncztcclxuICAgICAgICBsaXN0Lm1hcCggKGFyZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGFyZyA9PT0gJ2ZhY2Vib29rJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZmFjZWJvb2snLCAnaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAndHdpdHRlcicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3R3aXR0ZXInLCAnaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT90aXRsZT0mYW1wO3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2xpbmtlZGluJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnbGlua2VkaW4nLCdodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdnb29nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnb29nbGUtcGx1cycsICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdwaW50ZXJlc3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnb29nbGUtcGx1cycsICdodHRwOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2xpbmsvP3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2RpZ2cnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdkaWdnJywgJ2h0dHA6Ly9kaWdnLmNvbS9zdWJtaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ2V0LXBvY2tldCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2dldC1wb2NrZXQnLCAnaHR0cHM6Ly9nZXRwb2NrZXQuY29tL2VkaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAneGluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3hpbmcnLCAnaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXI/b3A9c2hhcmUmdXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnc3R1bWJsZXVwb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdzdHVtYmxldXBvbicsICdodHRwOi8vd3d3LnN0dW1ibGV1cG9uLmNvbS9zdWJtaXQ/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2hhcmVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTaGFyZUNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU2hhcmVDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYXJlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNoYXJlSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnc2hhcmUnLCBTaGFyZUNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NwYW4tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgPHNwYW4gW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGFuQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU3BhbkNvbXBvbmVudCB9IGZyb20gJy4vc3Bhbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU3BhbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NwYW5Db21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1NwYW5Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYW5JbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU3BhbkludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3NwYW4nLCBTcGFuQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFibGUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8dGFibGUgW2lkXT1cImlkXCIgY2xhc3M9XCJwaXBlZC10YWJsZVwiPlxyXG4gICAgICAgIDxjYXB0aW9uICpuZ0lmPVwibmFtZVwiIFt0ZXh0Q29udGVudF09XCJuYW1lXCI+PC9jYXB0aW9uPlxyXG4gICAgICAgIDx0cj48dGggc2NvcGU9XCJjb2xcIiAqbmdGb3I9XCJsZXQgaGVhZGVyIG9mIGhlYWRlcnNcIiBbdGV4dENvbnRlbnRdPVwiaGVhZGVyXCI+PC90aD48L3RyPlxyXG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3NcIj48dGQgKm5nRm9yPVwibGV0IGhlYWRlciBvZiBoZWFkZXJzXCIgW3RleHRDb250ZW50XT1cInJvd1toZWFkZXJdXCI+PC90ZD48L3RyPlxyXG4gICAgPC90YWJsZT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3QgLnBpcGVkLXRhYmxlIHtwYWRkaW5nOiAwO3dpZHRoOiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7fVxyXG4gICAgICAgIDpob3N0IC5waXBlZC10YWJsZSBjYXB0aW9uIHtiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNWUyO2JvcmRlci1yYWRpdXM6IDJweDtjb2xvcjogIzFiMWIxYjtjYXB0aW9uLXNpZGU6IHRvcDtmb250LXNpemU6IDE0cHg7cGFkZGluZzogNXB4IDZweDttYXJnaW4tYm90dG9tOiAxNXB4O3RleHQtYWxpZ246IGxlZnQ7fVxyXG4gICAgICAgIDpob3N0IC5waXBlZC10YWJsZSB0aCB7dXNlci1zZWxlY3Q6IG5vbmU7aGVpZ2h0OiAyNHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt3aGl0ZS1zcGFjZTogbm93cmFwO2ZvbnQtd2VpZ2h0OiBub3JtYWw7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtmb250LXNpemU6IDE0cHg7cGFkZGluZy10b3A6IDZweDtwYWRkaW5nLWJvdHRvbTogNnB4O3RleHQtYWxpZ246IGxlZnQ7fVxyXG4gICAgICAgIDpob3N0IC5waXBlZC10YWJsZSB0ZCB7cGFkZGluZy1sZWZ0OiAzcHg7bWluLWhlaWdodDogMjFweDt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGhlYWRlcnMgPSBbXTtcclxuICAgIHJvd3MgPSBbXTtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmlkPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiAnJztcclxuICAgICAgICB0aGlzLm5hbWU9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnJvd3MucHVzaChzb3VyY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEhlYWRlcnMoc291cmNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gc291cmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRIZWFkZXJzKHNvdXJjZVswXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93cy5wdXNoKHt2YWx1ZTogaXRlbX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVycy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2goe3ZhbHVlOiBzb3VyY2V9KTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRIZWFkZXJzKG9iajogYW55KSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5tYXAoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gYWRkcmVzcyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd0YWJsZScgfSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUYWJsZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6ICcnLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogdW5kZWZpbmVkKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGlkPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiAnJztcclxuICAgICAgICBjb25zdCBuYW1lID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gW107XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkVGFibGUoc291cmNlLCByb3dzLCBoZWFkZXJzKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCI8dGFibGUgc3R5bGU9J3dpZHRoOiAxMDAlJyBpZD0nXCIgKyBpZCArIFwiJz5cIiArIChuYW1lID8gXCI8Y2FwdGlvbiBzdHlsZT0ndGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6ICNjM2U1ZTI7Jz5cIiArIG5hbWUgKyBcIjwvY2FwdGlvbj5cIiA6IFwiXCIpICsgXCI8dHI+XCI7XHJcbiAgICAgICAgaGVhZGVycy5tYXAoXHJcbiAgICAgICAgICAgIChoZWFkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAoXCI8dGggc3R5bGU9J3RleHQtYWxpZ246IGxlZnQ7Zm9udC13ZWlnaHQ6bm9ybWFsO3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7JyBzY29wZT0nY29sJz5cIiArIGhlYWRlciArIFwiPC90aD5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc3VsdCArPSBcIjwvdHI+XCI7XHJcbiAgICAgICAgcm93cy5tYXAoXHJcbiAgICAgICAgICAgIChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjx0cj5cIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChoZWFkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IChcIjx0ZD5cIiArIHJvd1toZWFkZXJdICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiPC90cj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiPC90YWJsZT5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYnVpbGRUYWJsZShzb3VyY2U6IGFueSwgcm93czogYW55W10sIGhlYWRlcnM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaChzb3VyY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEhlYWRlcnMoc291cmNlLCBoZWFkZXJzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcm93cyA9IHNvdXJjZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SGVhZGVycyhzb3VyY2VbMF0sIGhlYWRlcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goe3ZhbHVlOiBpdGVtfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm93cy5wdXNoKHt2YWx1ZTogc291cmNlfSk7XHJcbiAgICAgICAgICAgIGhlYWRlcnMucHVzaCgndmFsdWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEhlYWRlcnMob2JqOiBhbnksIGhlYWRlcnM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5tYXAoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZVBpcGUgfSBmcm9tICcuL3RhYmxlLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnQsIFRhYmxlUGlwZV0sXHJcbiAgZXhwb3J0czogW1RhYmxlQ29tcG9uZW50LCBUYWJsZVBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1RhYmxlQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYWJsZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBUYWJsZVBpcGVcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3RhYmxlJywgVGFibGVDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigndGFibGUnLCBUYWJsZVBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGV4dC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwidGV4dC13cmFwcGVyXCIgKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgICA8dGV4dGFyZWEgI25hbWVFZGl0b3JcclxuICAgICAgICBbaWRdPVwiaWRcIlxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIlxyXG4gICAgICAgIFthdHRyLm1heGxlbmd0aF09XCJsaW1pdCA/IGxpbWl0IDogbnVsbFwiXHJcbiAgICAgICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICAgICAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCIgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSc+PC90ZXh0YXJlYT5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJjb3VudGVyXCIgY2xhc3M9XCJjb3VudGVyXCIgXHJcbiAgICAgICAgW3RleHRDb250ZW50XT1cImxpbWl0ID8gKGxpbWl0IC0gc291cmNlLmxlbmd0aCkgKyAnIHJlbWFpbmluZycgOiBzb3VyY2UubGVuZ3RoICsgJyB0eXBlZCdcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAjbmFtZUhvbGRlclxyXG4gICAgICAgICpuZ0lmPSchZWRpdE5hbWUnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChjbGljayk9J2NsaWNrKCRldmVudCknXHJcbiAgICAgICAgKGtleXVwKT0nZm9jdXMoJGV2ZW50KSdcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZVwiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAubG9ja2VkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzNweDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIFxyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LXdyYXBwZXJ7Ym94LXNpemluZzogYm9yZGVyLWJveDtkaXNwbGF5OnRhYmxlO3dpZHRoOiAxMDAlO31cclxuICAgICAgICAudGV4dC13cmFwcGVyIHRleHRhcmVhIHtib3gtc2l6aW5nOiBib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7Y3Vyc29yOiBiZWFtO3dpZHRoOiAxMDAlO31cclxuICAgICAgICAuY291bnRlcntkaXNwbGF5OiB0YWJsZTtmbG9hdDpyaWdodDtjb2xvcjogI2RkZDt9XHJcbiAgICAgICAgOmhvc3Qge2JveC1zaXppbmc6IGJvcmRlci1ib3g7d2lkdGg6IDEwMCU7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIwcHg7bWluLXdpZHRoOiAzM3B4O31cclxuICAgICAgICA6aG9zdCAubG9ja2VkOmhvdmVye2JvcmRlcjogMXB4IHNvbGlkICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcm93cyA9IDQ7XHJcbiAgbGltaXQgPSAwO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgY291bnRlciA9IGZhbHNlO1xyXG4gIG9sZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lRWRpdG9yXCIpXHJcbiAgbmFtZUVkaXRvcjtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVIb2xkZXJcIilcclxuICBuYW1lSG9sZGVyXHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuICBrZXl1cChldmVudDogYW55KSB7ICAgIFxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKChjb2RlID09PSA0OCkgfHwgKGNvZGUgPT09IDgpKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICgoKGNvZGUgPiA0OCkgJiYgKGNvZGUgPD0gOTApKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSA5NikgJiYgKGNvZGUgPD0gMTExKSkgfHwgKGNvZGUgPT0gMzIpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDE4NikgJiYgKGNvZGUgPD0gMjIyKSkpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5saW1pdCB8fCB0aGlzLnNvdXJjZS5sZW5ndGggPCB0aGlzLmxpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSB8fCAoY29kZSA9PT0gMjcpICkge1xyXG4gICAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICB0eXBlOiAnY2hhbmdlJyxcclxuICAgICAgICAgIGl0ZW06IHRoaXMub2xkVmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lSG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVIb2xkZXIubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDk5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBibHVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgIHR5cGU6ICdibHVyJyxcclxuICAgICAgICBpdGVtOiB0aGlzLm9sZFZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9jdXMoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5jbGljayhldmVudCk7XHJcbiAgfVxyXG4gIGNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIHRoaXMuZWRpdE5hbWUgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICBpZiAodGhpcy5uYW1lRWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LDk5KTtcclxufVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IHNvdXJjZTtcclxuICAgIHRoaXMucm93cyA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IDQ7XHJcbiAgICB0aGlzLmxpbWl0ID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IDA7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5pbXBvcnQgeyBDb21tb25QaXBlc01vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24tcGlwZXMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29tbW9uUGlwZXNNb2R1bGUuZm9yUm9vdCgpXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUZXh0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVGV4dENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVGV4dENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUZXh0SW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgndGV4dCcsIFRleHRDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2aWRlby1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDx2aWRlbyB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgIChmb2N1cyk9XCJ1cGRhdGVDb250cm9scygkZXZlbnQpXCJcclxuICAgICAgICAobW91c2VlbnRlcik9XCJ1cGRhdGVDb250cm9scygkZXZlbnQpXCJcclxuICAgICAgICAobW91c2VsZWF2ZSk9XCJyZXNldENvbnRyb2xzKCRldmVudClcIlxyXG4gICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCJcclxuICAgICAgICAocGxheSk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGVuZGVkKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAocGF1c2UpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChzZWVrZWQpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChlcnJvcik9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGZ1bGxzY3JlZW5jaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtzcmNdPVwic291cmNlXCIgXHJcbiAgICAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgXHJcbiAgICAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIlxyXG4gICAgICAgIFt0aXRsZV09XCJhbHRcIj48L3ZpZGVvPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjBweH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWRlb0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgaGFzQ29udHJvbHMgPSB0cnVlO1xyXG4gICAgaG92ZXJQbGF5ID0gZmFsc2U7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHdpZHRoOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IHN0cmluZztcclxuICAgIGFsdDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuYWx0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuaGFzQ29udHJvbHMgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDMpID8gKGFyZ3NbM10gPT09ICd0cnVlJykgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuaG92ZXJQbGF5ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiA0KSA/IChhcmdzWzRdID09PSAndHJ1ZScpIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYWx0IHx8ICF0aGlzLmFsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHQgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ29udHJvbHMoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0NvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywndHJ1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ob3ZlclBsYXkpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXNldENvbnRyb2xzKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5ob3ZlclBsYXkgJiYgdGhpcy5pc1BsYXlpbmcoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzUGxheWluZyh2aWRlbzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuICEhKHZpZGVvLmN1cnJlbnRUaW1lID4gMCAmJiAhdmlkZW8ucGF1c2VkICYmICF2aWRlby5lbmRlZCAmJiB2aWRlby5yZWFkeVN0YXRlID4gMik7XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiBldmVudC50eXBlLFxyXG4gICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZXZlbnQudGFyZ2V0LmF1dG9wbGF5LFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGV2ZW50LnRhcmdldC5jb250cm9scyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBldmVudC50YXJnZXQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBlbmRlZDogZXZlbnQudGFyZ2V0LmVuZGVkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGV2ZW50LnRhcmdldC5lcnJvcixcclxuICAgICAgICAgICAgICAgIHBhdXNlZDogZXZlbnQudGFyZ2V0LnBhdXNlZCxcclxuICAgICAgICAgICAgICAgIG11dGVkOiBldmVudC50YXJnZXQubXV0ZWQsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZTogZXZlbnQudGFyZ2V0LmN1cnJlbnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgdm9sdW1lOiBldmVudC50YXJnZXQudm9sdW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBpbWFnZSBkaXNwbGF5LiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndmlkZW8nIH0pXHJcbmV4cG9ydCBjbGFzcyBWaWRlb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyB2aWRlbzoyMDBweDphdXRvOmFsdHRleHQgT1IgdmlkZW86MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgdmlkZW86MjAwcHggT1IgdmlkZW9cclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZpZGVvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBpZighYWx0IHx8ICFhbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPHZpZGVvIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgc3R5bGU9XFwnXCIrIHdpZHRoICsgaGVpZ2h0ICsgXCJcXCcgdGl0bGU9XFwnXCIrYWx0K1wiXFwnICBjb250cm9scz1cXCd0cnVlXFwnIC8+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvVmlkZW8oc291cmNlcywgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IFwid2lkdGg6IFwiICsgYXJnc1swXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBoZWlnaHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IFwiaGVpZ2h0OiBcIiArIGFyZ3NbMV0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBcIlwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVmlkZW9Db21wb25lbnQgfSBmcm9tICcuL3ZpZGVvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZGVvUGlwZSB9IGZyb20gJy4vdmlkZW8ucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtWaWRlb0NvbXBvbmVudCwgVmlkZW9QaXBlXSxcclxuICBleHBvcnRzOiBbVmlkZW9Db21wb25lbnQsIFZpZGVvUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVmlkZW9Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZGVvSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFZpZGVvSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1ZpZGVvUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgndmlkZW8nLCBWaWRlb0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd2aWRlbycsIFZpZGVvUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENvbW1vblBpcGVzTW9kdWxlIH0gZnJvbSAnLi9jb21tb24vY29tbW9uLXBpcGVzLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBBZGRyZXNzSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2FkZHJlc3MvYWRkZXNzLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgQXVkaW9JbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vYXVkaW8vYXVkaW8tcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDYWxlbmRhckludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhci1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IENoZWNrYm94SW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgRW1haWxJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vZW1haWwvZW1haWwtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb250SW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2ZvbnQvZm9udC1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEltYWdlSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2ltYWdlL2ltYWdlLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgSW5wdXRJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vaW5wdXQvaW5wdXQtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJbnB1dEdyb3VwSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2lucHV0Z3JvdXAvaW5wdXRncm91cC1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEpzb25JbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vanNvbi9qc29uLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9sYXN0dXBkYXRlL2xhc3R1cGRhdGUtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBMaWtlSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2xpa2UvbGlrZS1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IExpbmtJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vbGluay9saW5rLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgUGhvbmVJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vcGhvbmUvcGhvbmUtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSYXRpbmdJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vcmF0aW5nL3JhdGluZy1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5vdGljZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9ub3RpY2Uvbm90aWNlLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgU2VsZWN0SW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3QtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9zaGFyZS9zaGFyZS1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNwYW5JbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vc3Bhbi9zcGFuLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgVGFibGVJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vdGFibGUvdGFibGUtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUZXh0SW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3RleHQvdGV4dC1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFZpZGVvSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3ZpZGVvL3ZpZGVvLXBpcGUubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQ29tbW9uUGlwZXNNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQWRkcmVzc0ludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEF1ZGlvSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQ2FsZW5kYXJJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBDaGVja2JveEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEVtYWlsSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRm9udEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEltYWdlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgSW5wdXRJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBJbnB1dEdyb3VwSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgSnNvbkludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIExhc3RVcGRhdGVJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBMaWtlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTGlua0ludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFBob25lSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUmF0aW5nSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTm90aWNlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgU2VsZWN0SW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgU2hhcmVJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTcGFuSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVGFibGVJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBUZXh0SW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVmlkZW9JbnRvUGlwZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW10sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uUGlwZXNNb2R1bGUsXHJcbiAgICBBZGRyZXNzSW50b1BpcGVNb2R1bGUsXHJcbiAgICBBdWRpb0ludG9QaXBlTW9kdWxlLFxyXG4gICAgQ2FsZW5kYXJJbnRvUGlwZU1vZHVsZSxcclxuICAgIENoZWNrYm94SW50b1BpcGVNb2R1bGUsXHJcbiAgICBFbWFpbEludG9QaXBlTW9kdWxlLFxyXG4gICAgRm9udEludG9QaXBlTW9kdWxlLFxyXG4gICAgSW1hZ2VJbnRvUGlwZU1vZHVsZSxcclxuICAgIElucHV0SW50b1BpcGVNb2R1bGUsXHJcbiAgICBJbnB1dEdyb3VwSW50b1BpcGVNb2R1bGUsXHJcbiAgICBKc29uSW50b1BpcGVNb2R1bGUsXHJcbiAgICBMYXN0VXBkYXRlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBMaWtlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBMaW5rSW50b1BpcGVNb2R1bGUsXHJcbiAgICBQaG9uZUludG9QaXBlTW9kdWxlLFxyXG4gICAgUmF0aW5nSW50b1BpcGVNb2R1bGUsXHJcbiAgICBOb3RpY2VJbnRvUGlwZU1vZHVsZSxcclxuICAgIFNlbGVjdEludG9QaXBlTW9kdWxlLFxyXG4gICAgU2hhcmVJbnRvUGlwZU1vZHVsZSxcclxuICAgIFNwYW5JbnRvUGlwZU1vZHVsZSxcclxuICAgIFRhYmxlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBUYWJsZUludG9QaXBlTW9kdWxlLFxyXG4gICAgVGV4dEludG9QaXBlTW9kdWxlLFxyXG4gICAgVmlkZW9JbnRvUGlwZU1vZHVsZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXSxcclxuICBwcm92aWRlcnM6IFtcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEludG9QaXBlTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7cUNBMkN5QixJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7SUFFdkMsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFFLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUVqRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O1lBQ2IsTUFBTSxDQUFDLEdBQUcsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRSxXQUFXLENBQUM7WUFDekYsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyQztLQUNKOzs7OztJQUNELEtBQUssQ0FBQyxLQUFVOztRQUNaLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDYixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0tBQ0o7Ozs7O0lBQ0QsTUFBTSxDQUFDLEtBQVU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0tBQ047OztZQXRFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCVDt5QkFFRzs7Ozs7OztTQU9DO2FBRVI7Ozs7Ozs7QUM5QkQ7Ozs7SUFJSSxPQUFPLG9CQUFvQjs7UUFDdkIsTUFBTSxDQUFDLEdBQUcsVUFBVSxPQUFZLEVBQUUsSUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVO1lBQ3hFLE9BQU8sSUFBSSxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDMUYsQ0FBQztRQUNGLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7Ozs7OztJQUNELFNBQVMsQ0FBQyxNQUFXLEVBQUUsR0FBRyxJQUFXOztRQUNqQyxNQUFNLE1BQU0sR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7O1FBQzNDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sWUFBWSxLQUFLLENBQUMsRUFBRTtZQUM1RCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO2FBQU07O1lBQ0gsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNoRSxDQUFDLENBQUM7WUFDSCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtLQUNKOzs7Ozs7O0lBQ08saUJBQWlCLENBQUMsTUFBVyxFQUFFLE1BQWUsRUFBRSxTQUFrQjtRQUN0RSxJQUFJLE1BQU0sRUFBRTs7WUFDUixJQUFJLEdBQUcsR0FBRyw2QkFBNkI7Z0JBQ3ZDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUUsV0FBVyxDQUFDO1lBQ3hFLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUUvQixPQUFPLFlBQVksR0FBRyxHQUFHLEdBQUcsS0FBSztpQkFDeEIsU0FBUyxHQUFHLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDcEMsdUVBQXVFO2dCQUN2RSxpRkFBaUY7Z0JBQ2pGLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUztnQkFDL0MseUJBQXlCLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7U0FDMUY7UUFDRCxPQUFPLG1HQUFtRztZQUNsRywrQkFBK0IsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVM7WUFDakYseUJBQXlCLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQzs7OztZQXBDakcsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7Ozs7OztBQ0p6Qjs7K0JBWTBCLEVBQUU7b0NBQ0csRUFBRTtrQ0FDSixFQUFFOzs7Ozs7O0lBRTlCLDBCQUEwQixDQUFFLElBQVksRUFBRSxJQUFTO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ2xDOzs7OztJQUNELG9DQUFvQyxDQUFDLEdBQVc7UUFDL0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQztLQUMvQzs7Ozs7Ozs7O0lBQ0QsNEJBQTRCLENBQUMsR0FBVyxFQUFFLE9BQVksRUFBRSxJQUFjLEVBQUUsUUFBYyxFQUFFLElBQVU7O1FBQzNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkMsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztLQUMvRDs7Ozs7SUFDRCx3QkFBd0IsQ0FBRSxHQUFXO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUUsSUFBWSxFQUFFLFNBQWM7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztLQUM1Qzs7Ozs7SUFDRCwrQkFBK0IsQ0FBQyxJQUFZO1FBQzNDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztLQUNyRDs7Ozs7Ozs7SUFDRCxtQkFBbUIsQ0FDbEIsSUFBWSxFQUNaLFFBQWtDLEVBQ2xDLFlBQThCLEVBQzlCLEVBQWU7O1FBQ2YsTUFBTSxTQUFTLEdBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDOztRQUNuRCxJQUFJLE1BQU0sR0FBa0IsSUFBSSxDQUFDO1FBRTNCLElBQUksU0FBUyxFQUFFOztZQUNwQixJQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7WUFDbkUsTUFBTSxZQUFZLEdBQXNCLFlBQVksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7WUFDdkYsTUFBTSxPQUFPLHFCQUFHLG1CQUFDLFlBQVksQ0FBQyxRQUFtQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQWdCLEVBQUM7WUFDaEcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixNQUFNLHNCQUFtQixZQUFZLENBQUMsUUFBUSxFQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFRLE1BQU0sQ0FBQztLQUNyQjs7Ozs7SUFDRCxlQUFlLENBQUUsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2Qzs7Ozs7O0lBRUQsMkJBQTJCLENBQUUsSUFBWSxFQUFFLE9BQVk7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUN4Qzs7Ozs7SUFDRCw2QkFBNkIsQ0FBQyxJQUFZO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7OztJQUNELHlCQUF5QixDQUFDLElBQVk7UUFDckMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDO0tBQ25EOzs7OztJQUNELHlCQUF5QixDQUFFLElBQVk7UUFDdEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7OztZQTNERCxVQUFVOzs7Ozs7O0FDWFg7Ozs7SUF3QkUsWUFBbUMsSUFBbUI7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUNoRjs7OztJQVhELE9BQU8sT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVCxXQUFXO2FBQ1o7U0FDRixDQUFBO0tBQ0Y7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztnQkFDeEMsZUFBZSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDOzs7O1lBUlEsYUFBYSx1QkFtQlAsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7OztBQ3hCbkM7O3FDQXNCeUIsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7O0lBRXZDLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDeEI7Ozs7O0lBRU8sU0FBUyxDQUFDLEtBQVU7UUFDeEIsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFFOUYsS0FBSyxDQUFDLEtBQVU7O1FBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdkI7U0FDSjtLQUNKOzs7OztJQUNELE1BQU0sQ0FBQyxLQUFVO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUMvQixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUMvQixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUMvQixXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXO2dCQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN6QixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN6QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN6QixZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZO2dCQUN2QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQzlCO1NBQ0osQ0FBQyxDQUFDO0tBQ047OztZQXpESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7OztpRkFRbUU7eUJBQ3BFOztLQUVSO2FBQ0o7Ozs7Ozs7QUNiRDs7OztJQUlJLE9BQU8sb0JBQW9COztRQUN2QixNQUFNLENBQUMsR0FBRyxVQUFVLE9BQVksRUFBRSxJQUFjLEVBQUUsUUFBYyxFQUFFLElBQVU7WUFDeEUsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN4RixDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUM7S0FDWjs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBVztRQUNyQixPQUFPLGVBQWUsR0FBQyxNQUFNLEdBQUMseUJBQXlCLENBQUM7S0FDM0Q7Ozs7O0lBQ0QsWUFBWSxDQUFDLE9BQVk7O1FBQ3JCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0tBQ2pCOzs7Ozs7SUFDRCxTQUFTLENBQUMsTUFBVyxFQUFFLEdBQUcsSUFBVztRQUNsQyxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwQzs7O1lBeEJKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Ozs7Ozs7QUNOdkI7Ozs7SUF3QkUsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7S0FDNUU7Ozs7SUFYRCxPQUFPLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1QsU0FBUzthQUNWO1NBQ0YsQ0FBQTtLQUNGOzs7WUFoQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztnQkFDcEMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7OztZQVJRLGFBQWEsdUJBbUJQLE1BQU0sU0FBQyxhQUFhOzs7Ozs7Ozs7Ozs7QUNyQm5DOzs7O0lBNE5FLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7NEJBZHZCLEtBQUs7d0JBRVQsS0FBSzsyQkFDRixLQUFLO3dCQUlSLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO3FCQUNwQixFQUFFOzRCQUNMLEVBQUU7cUNBR0QsSUFBSSxZQUFZLEVBQUU7S0FJekM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztRQUV2QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDRjs7Ozs7SUFDRCxhQUFhLENBQUMsS0FBVTtRQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQ3hDOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFFLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFOUIsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJO2dCQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDMUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDaEY7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDN0M7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVU7O1FBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMvQyxNQUFNLFlBQVksR0FBUyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUU7Z0JBQ3RDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDWDtTQUNKO1FBQ0gsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDbkI7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakQ7Ozs7O0lBRUQsbUJBQW1CLENBQUMsR0FBaUI7O1FBQ2pDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDL0MsTUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDYixHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDckIsTUFBTTtpQkFDVDthQUNGO1lBQ0QsSUFBRyxDQUFDLEtBQUssRUFBRTtnQkFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDckI7S0FDSjs7Ozs7O0lBQ0QsVUFBVSxDQUFDLEtBQVUsRUFBRSxHQUFpQjtRQUN0QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBVTtRQUNsQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEgsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3RILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEgsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7Ozs7SUFHQyxnQkFBZ0I7O1FBQ1osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O1FBQy9DLE1BQU0sS0FBSyxHQUFxQixFQUFFLENBQUM7UUFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7O0lBQ08sU0FBUyxDQUFDLENBQU8sRUFBRSxDQUFPO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDdEMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDN0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7OztJQUU1QixXQUFXLENBQUMsQ0FBTSxFQUFFLENBQU07UUFDOUIsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUM5QixDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7Ozs7SUFHdEMsU0FBUyxDQUFDLFdBQWlCOztRQUN2QixNQUFNLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7UUFDakMsTUFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTs7UUFDN0QsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDOztRQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQzs7UUFDaEgsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN2QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFHLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQzs7WUFDcEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLENBQUM7YUFDVixDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7OztZQTVYSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5RFQ7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErSEM7YUFFUjs7OztZQXZNOEIsUUFBUTs7O29DQXlOcEMsTUFBTSxTQUFDLHVCQUF1Qjs7Ozs7OztBQzVOakM7Ozs7SUFzQkUsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3ZEOzs7O0lBVEQsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFLEVBQ1Y7U0FDRixDQUFBO0tBQ0Y7OztZQWZGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDOzs7O1lBUlEsYUFBYSx1QkFrQlAsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7OztBQ3RCbkM7O3FDQTRDMEIsSUFBSSxZQUFZLEVBQUU7Ozs7OztJQUUxQyxLQUFLLENBQUMsS0FBVTs7UUFDZCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNmLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDQTs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBVTs7UUFDZCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQy9CO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDO2dCQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDcEM7YUFDRixFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ1A7S0FDRjs7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7S0FDekQ7OztZQXJGRixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZVDt5QkFFRzs7Ozs7U0FLQzthQUVSOzs7b0JBV0UsU0FBUyxTQUFDLE9BQU87c0JBR2pCLFNBQVMsU0FBQyxTQUFTO29DQUduQixNQUFNLFNBQUMsdUJBQXVCOzs7Ozs7O0FDM0NqQzs7OztJQXNCRSxZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDdkQ7Ozs7SUFURCxPQUFPLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxTQUFTLEVBQUUsRUFDVjtTQUNGLENBQUE7S0FDRjs7O1lBZkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7Ozs7WUFSUSxhQUFhLHVCQWtCUCxNQUFNLFNBQUMsYUFBYTs7Ozs7Ozs7Ozs7O0FDdEJuQzs7cUNBNEJ5QixJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7SUFFdkMsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN4Qjs7Ozs7SUFDRCxLQUFLLENBQUMsS0FBVTs7UUFDWixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtLQUNKOzs7OztJQUNELE1BQU0sQ0FBQyxLQUFVO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztZQUM1QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0tBQ047OztZQWhESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7O0tBU1Q7eUJBRUc7Ozs7U0FJQzthQUVSOzs7Ozs7O0FDbkJEOzs7O0lBSUksT0FBTyxvQkFBb0I7O1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLFVBQVcsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTs7WUFFekUsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN4RixDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUM7S0FDWjs7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWMsRUFBRSxNQUFlOztRQUMzQyxJQUFJLENBQUMsQ0FBUztRQUNkLElBQUksTUFBTSxFQUFFO1lBQ1IsQ0FBQyxHQUFHLG1CQUFtQixHQUFDLE1BQU0sR0FBQyxtRUFBbUUsR0FBRyxNQUFNLEdBQUcsYUFBYSxDQUFDO1NBQy9IO2FBQU07WUFDSCxDQUFDLEdBQUcsMkZBQTJGLEdBQUcsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1NBQy9IO1FBQ0QsT0FBTyxDQUFDLENBQUM7S0FDWjs7Ozs7O0lBQ0QsU0FBUyxDQUFDLE1BQVcsRUFBRSxHQUFHLElBQVc7O1FBQ2pDLE1BQU0sTUFBTSxHQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDL0M7YUFBTTs7WUFDSCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ25ELENBQUMsQ0FBQztZQUNILE9BQU8sTUFBTSxDQUFDO1NBQ2pCO0tBQ0o7OztZQTlCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7Ozs7O0FDTHZCOzs7O0lBc0JFLFlBQW9DLElBQW1CO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0tBQzVFOzs7O0lBVEQsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ3ZCLENBQUE7S0FDRjs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztnQkFDcEMsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7OztZQVJRLGFBQWEsdUJBaUJQLE1BQU0sU0FBQyxhQUFhOzs7Ozs7Ozs7Ozs7QUN0Qm5DOzs7Ozs7O0lBOEJJLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDOztRQUNuRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFNLElBQUksU0FBUyxLQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDL0Y7OztZQWpDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7OztLQUtUO3lCQUVHOzs7Ozs7U0FNQzthQUVSOzs7Ozs7O0FDakJEOzs7O0lBSUksT0FBTyxvQkFBb0I7O1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLFVBQVcsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTs7WUFFekUsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUM1SSxDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUM7S0FDWjs7Ozs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTztRQUMxQyxRQUFRLFFBQVEsS0FBSyxNQUFNO2FBQ2xCLElBQUksR0FBRyxPQUFPO2FBQ2QsQ0FBQyxRQUFRLEtBQUssT0FBTyxJQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7S0FDN0Q7Ozs7OztJQUNELFNBQVMsQ0FBQyxNQUFXLEVBQUUsR0FBRyxJQUFXOztRQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxxREFBcUQsR0FBRyxFQUFFLENBQUM7O1FBQ25ILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7O1FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7O1FBQzVELE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxHQUFHLEdBQUcsTUFBTSxJQUFJLFNBQVMsS0FBSyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLEtBQUssRUFBRSxPQUFPLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDOUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQy9EO2FBQU07O1lBQ0gsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2xFLENBQUMsQ0FBQztZQUNILE9BQU8sTUFBTSxDQUFDO1NBQ2pCO0tBQ0o7OztZQTlCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzs7Ozs7O0FDTHRCOzs7O0lBc0JFLFlBQW9DLElBQW1CO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0tBQzFFOzs7O0lBVEQsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ3RCLENBQUE7S0FDRjs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQztnQkFDbEMsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7OztZQVJRLGFBQWEsdUJBaUJQLE1BQU0sU0FBQyxhQUFhOzs7Ozs7Ozs7Ozs7QUN0Qm5DOzs2QkF3Qm9CLENBQUM7cUNBS08sSUFBSSxZQUFZLEVBQUU7Ozs7OztJQUc3QyxLQUFLLENBQUMsS0FBVTtRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTs7WUFDbEIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3ZDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUN4QyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO2dCQUNoRCxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3JELEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMxRDtZQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQy9CLFFBQVEsSUFBSSxDQUFDLFdBQVc7Z0JBQ3BCLEtBQUssTUFBTTtvQkFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQztvQkFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO29CQUM3RSxNQUFNO2dCQUNWLEtBQUssT0FBTztvQkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFLLElBQUksQ0FBQztvQkFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO29CQUM3RSxNQUFNO2dCQUNWLEtBQUssS0FBSztvQkFDTixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQztvQkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO29CQUM3RSxNQUFNO2dCQUNWLEtBQUssUUFBUTtvQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQztvQkFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFD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