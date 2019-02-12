import { Component, EventEmitter, Pipe, Injectable, NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA, Renderer, Output, ViewChild, Directive, ViewContainerRef, ElementRef, Input, ComponentFactoryResolver } from '@angular/core';
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
        :host {display: table;float:left;min-height: 23px}
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
     * @param {?} event
     * @return {?}
     */
    change(event) {
        console.log(event);
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
        (playing)="change($event)"
        (ended)="change($event)"
        (pause)="change($event)"
        (seeked)="change($event)"
        (error)="change($event)"
        controls="true">Your browser does not support the audio element.</audio>`,
                styles: [`
    :host {display:table;float:left;min-height: 23px}
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
        this.origDate = new Date();
        if (source instanceof Array) {
            this.multiselect = true;
            source.map((item) => {
                this.selectedDays.push(new Date(item));
            });
        }
        else {
            this.multiselect = false;
            this.selectedDays.push(new Date(this.source));
        }
        this.item = data;
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
        :host {display:table;float:left;min-height: 23px}
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
    keyup(event) {
        /** @type {?} */
        const code = event.which;
        if (code === 13) {
            this.renderer.invokeElementMethod(event.target, "click");
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
            item: this.data
        });
        if (this.useFont) {
            setTimeout(() => {
                if (this.check) {
                    this.renderer.invokeElementMethod(this.check.nativeElement, "focus");
                }
                if (this.uncheck) {
                    this.renderer.invokeElementMethod(this.uncheck.nativeElement, "focus");
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
        :host {display:table;float:left;min-height: 23px}
        .check-font:hover{color: #fabdab;}
        .check-font {cursor: pointer;}
        `]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: Renderer }
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
        :host {display:table;float:left;min-height: 23px}
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
        :host {display:table;float:left;min-height: 23px}
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
            item: event.type
        });
    }
}
ImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'image-component',
                template: `
        <img [src]="source" 
             [style.width]="width" 
             [style.height]="height" 
             [title]="alt" 
             (mouseleave)="change($event)"
             (mouseenter)="change($event)" />`,
                styles: [`
    :host {display:table;float:left;min-height: 23px}
    `]
            }] }
];

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
        :host {display:table;float:left;min-height: 23px}
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
    click(event) {
        event.stopPropagation();
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
            (click)="click($event)"/>
        <label [for]="name + i" [textContent]="x.label ? x.label : x"></label>
    </span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 23px}
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
        :host {display:table;float:left;min-height: 23px}
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
    <span [textContent]="formatDate()"></span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 23px;position: relative}
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
        :host {display:table;float:left;min-height: 23px;position: relative}
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
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
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
        (keyup)='keyup($event)' 
        (click)="change($event)"></a>`,
                styles: [`
        :host {display:table;float:left;min-height: 23px}
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
            // link:target:text or link:text or link
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
        :host {display:table;float:left;min-height: 23px}
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
    constructor() {
        this.value = [];
    }
    /**
     * @param {?} source
     * @param {?} data
     * @param {?} args
     * @return {?}
     */
    transform(source, data, args) {
        this.float = parseFloat(source);
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
    <span class='rating'>
        <span class='fa fa-star' aria-hidden='true' *ngFor="let x of value"></span>
        <span class='fa fa-star-half' aria-hidden='true' *ngIf="float != value"></span>
    </span>
    <span class='rate-value' [textContent]="source"></span>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 23px}
        .rating {
            display: inline-block;
        }
        `]
            }] }
];

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
     * @return {?}
     */
    rateString(source) {
        /** @type {?} */
        const value = parseInt(source, 10);
        /** @type {?} */
        const float = parseFloat(source);
        /** @type {?} */
        let x = "<span class='rating'>";
        for (let i = 0; i < value; i++) {
            x += "<span class='fa fa-star' aria-hidden='true'></span>";
        }
        if (float !== value) {
            x += "<span class='fa fa-star-half' aria-hidden='true'></span>";
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
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.rateString(item));
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
    <select tabindex="0" [multiple]="multiselect ? true:null" (click)="click($event)" (change)="change($event)">
        <option *ngFor="let x of options" [selected]="source === x ? true : null"  [value]="x" [textContent]="x"></option>
    </select>
    `,
                styles: [`
        :host {display:table;float:left;min-height: 23px}
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
    :host {display:table;float:left;min-height: 23px;position: relative}
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
        :host {display:table;float:left;min-height: 23px}
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
          display: table;
          cursor: pointer;
          min-width: 30px;
          -webkit-user-select: none;       
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
        }
        .text-wrapper{box-sizing: border-box;display:table;width: 100%;}
        .text-wrapper textarea {box-sizing: border-box;display:block;cursor: beam;width: 100%;}
        .counter{display: table;float:right;color: #ddd;}
        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 23px}
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
class VideoComponent {
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
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
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
    <video controls="true" 
        (playing)="change($event)"
        (ended)="change($event)"
        (pause)="change($event)"
        (seeked)="change($event)"
        (error)="change($event)"
        [src]="source" 
        [style.width]="width" 
        [style.height]="height"
        [title]="alt"></video>
    `,
                styles: [`
    :host {display:table;float:left;min-height: 23px}
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

export { IntoPipeModule, AddressComponent, AddressPipe, AddressIntoPipeModule, AudioComponent, AudioPipe, AudioIntoPipeModule, CalendarComponent, CalendarIntoPipeModule, CheckboxComponent, CheckboxIntoPipeModule, EmailComponent, EmailPipe, EmailIntoPipeModule, FontComponent, FontPipe, FontIntoPipeModule, ImageComponent, ImagePipe, ImageIntoPipeModule, InputComponent, InputIntoPipeModule, InputGroupComponent, InputGroupIntoPipeModule, JsonComponent, JsonIntoPipeModule, LastUpdateComponent, LastUpdateIntoPipeModule, LikeComponent, LikeIntoPipeModule, LinkComponent, LinkPipe, LinkIntoPipeModule, PhoneComponent, PhoneIntoPipeModule, RatingComponent, RatingPipe, RatingIntoPipeModule, SelectComponent, SelectIntoPipeModule, ShareComponent, ShareIntoPipeModule, SpanComponent, SpanIntoPipeModule, TextComponent, TextIntoPipeModule, TableComponent, TablePipe, TableIntoPipeModule, VideoComponent, VideoPipe, VideoIntoPipeModule, AppendPipe, ConditionalPipe, JoinPipe, MapPipe, MaskPipe, PrependPipe, SanitizeHtmlPipe, ValueOfPipe, WrapPipe, InToPipe, IntoDirective, ComponentPool, CommonPipesModule, PhonePipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtaW50by1waXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9hZGRyZXNzL2FkZHJlc3MucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9jb21wb25lbnQucG9vbC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2FkZHJlc3MvYWRkZXNzLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvYXVkaW8vYXVkaW8uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvYXVkaW8vYXVkaW8ucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2F1ZGlvL2F1ZGlvLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY2FsZW5kYXIvY2FsZW5kYXItcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jaGVja2JveC9jaGVja2JveC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2VtYWlsL2VtYWlsLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2VtYWlsL2VtYWlsLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9lbWFpbC9lbWFpbC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2ZvbnQvZm9udC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9mb250L2ZvbnQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2ZvbnQvZm9udC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2ltYWdlL2ltYWdlLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbWFnZS9pbWFnZS1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9hcHBlbmQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9jb25kaXRpb25hbC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2pvaW4ucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9tYXAucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9tYXNrLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vcHJlcGVuZC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL3Nhbml0aXplSHRtbC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL3ZhbHVlb2YucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi93cmFwLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vaW50by5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2ludG8uZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2NvbW1vbi1waXBlcy5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbnB1dC9pbnB1dC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2lucHV0Z3JvdXAvaW5wdXQtZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvaW5wdXRncm91cC9pbnB1dGdyb3VwLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvanNvbi9qc29uLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2pzb24vanNvbi1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2xhc3R1cGRhdGUvbGFzdHVwZGF0ZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9sYXN0dXBkYXRlL2xhc3R1cGRhdGUtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9saWtlL2xpa2UuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGlrZS9saWtlLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGluay9saW5rLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2xpbmsvbGluay5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGluay9saW5rLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGhvbmUvcGhvbmUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGhvbmUvcGhvbmUucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3Bob25lL3Bob25lLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zZWxlY3Qvc2VsZWN0LXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvc2hhcmUvc2hhcmUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvc2hhcmUvc2hhcmUtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zcGFuL3NwYW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvc3Bhbi9zcGFuLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3RleHQvdGV4dC1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3RhYmxlL3RhYmxlLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy90YWJsZS90YWJsZS1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3ZpZGVvL3ZpZGVvLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy92aWRlby92aWRlby1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3BpcGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FkZHJlc3MtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cImlzTGlua1wiIFxyXG4gICAgICAgIFtocmVmXT1cInVybFwiIFxyXG4gICAgICAgIFt0YXJnZXRdPVwiaGFzVGFyZ2V0ID8gJ19ibGFuaycgOiBudWxsXCJcclxuICAgICAgICBjbGFzcz1cImdvb2dsZS1tYXBcIiBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJyBcclxuICAgICAgICAoY2xpY2spPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+VmlldyBpbiBnb29nbGUgbWFwPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiIFt0ZXh0Q29udGVudF09XCJhZGRyMVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIiBbdGV4dENvbnRlbnRdPVwiYWRkcjJcIj48L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFpc0xpbmtcIiBjbGFzcz1cImdvb2dsZS1tYXBcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgW3RleHRDb250ZW50XT1cImFkZHIxXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiIFt0ZXh0Q29udGVudF09XCJhZGRyMlwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgLmFkZHJlc3Mge2Zsb2F0OiBsZWZ0O21hcmdpbi1yaWdodDogNHB4O31cclxuICAgICAgICAuZ29vZ2xlLW1hcCB7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXJpZ2h0OiA0cHg7fVxyXG4gICAgICAgIC5mYSB7ZmxvYXQ6bGVmdDtjb2xvcjogI2YwMDttYXJnaW46IDAgNXB4O31cclxuICAgICAgICAub2ZmLXNjcmVlbiB7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IC05OTllbTt9XHJcbiAgICAgICAgOmhvc3QgYTpob3ZlciAuZmEtbWFwLW1hcmtlcntjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgOmhvc3Qgc3BhbntmbG9hdC1sZWZ0O31cclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTogdGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgaXNMaW5rOiBib29sZWFuO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIGFkZHIxOiBzdHJpbmc7XHJcbiAgICBhZGRyMjogc3RyaW5nO1xyXG4gICAgaGFzVGFyZ2V0OiBib29sZWFuO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuaXNMaW5rPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGFzVGFyZ2V0ID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkcjEgPSBzb3VyY2Uuc3RyZWV0ICsgJywgJyArIHNvdXJjZS5zdWl0ZTtcclxuICAgICAgICB0aGlzLmFkZHIyID0gc291cmNlLmNpdHkgKyAnLCAnICsgc291cmNlLnppcGNvZGU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGluaykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT1cIiArIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyB0aGlzLmFkZHIyICtcIiZpZT1VVEYtOFwiO1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHgucmVwbGFjZShcIlxcXFxzK1wiLCBcIitcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGFkZHJlc3MgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYWRkcmVzcycgfSlcclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3NQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV09PT0ndHJ1ZScgOiB0cnVlKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYXNUYXJnZXQgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRyZXNzRnJvbVN0cmluZyhzb3VyY2UsIGlzTGluaywgaGFzVGFyZ2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5hZGRyZXNzRnJvbVN0cmluZyhpdGVtLCBpc0xpbmssIGhhc1RhcmdldCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZTogYW55LCBpc0xpbms6IGJvb2xlYW4sIGhhc1RhcmdldDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChpc0xpbmspIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vP3E9XCIgKyBcclxuICAgICAgICAgICAgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5jaXR5ICsgXCIsIFwiICsgc291cmNlLnppcGNvZGUgK1wiJmllPVVURi04XCI7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBcIjxhIGhyZWY9XFwnXCIgKyB1cmwgKyBcIlxcJyBcIiArIFxyXG4gICAgICAgICAgICAgICAgICAgIChoYXNUYXJnZXQgPyBcInRhcmdldD0nX2JsYW5rJ1wiIDogXCJcIikgKyBcclxuICAgICAgICAgICAgICAgICAgICBcImNsYXNzPSdnb29nbGUtbWFwJz48c3BhbiBjbGFzcz0nZmEgZmEtbWFwLW1hcmtlcicgYXJpYS1oaWRkZW49J3RydWUnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48c3BhbiBjbGFzcz0nb2ZmLXNjcmVlbic+VmlldyBpbiBnb29nbGUgbWFwPC9zcGFuPjxzcGFuIGNsYXNzPSdhZGRyZXNzJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHNvdXJjZS5zdWl0ZSArIFwiPC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdhZGRyZXNzJz4gXCIgKyBzb3VyY2UuY2l0eSArXCIsIFwiICsgc291cmNlLnppcGNvZGUgKyBcIjwvc3Bhbj48L2E+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdnb29nbGUtbWFwJz48c3BhbiBjbGFzcz0nZmEgZmEtbWFwLW1hcmtlcicgc3R5bGU9J21hcmdpbjogMCA1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjwvc3Bhbj48c3BhbiBjbGFzcz0nYWRkcmVzcyc+XCIgKyBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgc291cmNlLnN1aXRlICsgXCI8L3NwYW4+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0nYWRkcmVzcyc+IFwiICsgc291cmNlLmNpdHkgK1wiLCBcIiArIHNvdXJjZS56aXBjb2RlICsgXCI8L3NwYW4+PC9zcGFuPlwiO1xyXG4gICAgfVxyXG59XHJcbiIsIlxuaW1wb3J0IHtcblx0SW5qZWN0YWJsZSwgXG5cdENvbXBvbmVudFJlZiwgXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdEVtYmVkZGVkVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4vcGlwZS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9vbCB7XG5cdHByaXZhdGUgcmVnaXN0ZXJlZFBpcGVzPSB7fTtcblx0cHJpdmF0ZSByZWdpc3RlcmVkQ29tcG9uZW50cz0ge307XG5cdHByaXZhdGUgcmVnaXN0ZXJlZFNlcnZpY2VzPSB7fTtcblxuXHRyZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbiAobmFtZTogc3RyaW5nLCBwaXBlOiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRQaXBlc1tuYW1lXSA9IHBpcGU7XG5cdH1cblx0cmVnaXN0ZXJlZEZvclBpcGVUcmFuc2Zvcm1hdGlvbk5hbWVkKGtleTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFBpcGVzW2tleV0gIT09IHVuZGVmaW5lZDtcblx0fVxuXHRyZWdpc3RlcmVkUGlwZVRyYW5zZm9ybWF0aW9uKGtleTogc3RyaW5nLCBjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xuICAgICAgICBjb25zdCBwaXBlID0gdGhpcy5yZWdpc3RlcmVkUGlwZXNba2V5XTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwaXBlID8gcGlwZShjb250ZW50LCBhcmdzLCBjYWxsYmFjaywgZGF0YSkgOiBudWxsO1xuXHR9XG5cdHJlbW92ZVBpcGVUcmFuc2Zvcm1hdGlvbiAoa2V5OiBzdHJpbmcpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkUGlwZXNba2V5XTtcblx0fVxuXG5cdHJlZ2lzdGVyQ29tcG9uZW50IChuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblx0fVxuXHRyZWdpc3RlcmVkRm9yQ29tcG9uZW50V2l0aE5hbWVkKG5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0cmVnaXN0ZXJlZENvbXBvbmVudChcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0cmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHR2aWV3UmVmcmVuY2U6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0ZWw6IEhUTUxFbGVtZW50KTogUGlwZUNvbXBvbmVudCB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV07XG5cdFx0bGV0IHJlc3VsdDogUGlwZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcblx0XHRcdGxldCBjb21wb25lbnRGYWN0b3J5ID0gcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSB2aWV3UmVmcmVuY2UuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdFx0Y29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmIDwgYW55ID4gKS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRlbC5hcHBlbmRDaGlsZChkb21FbGVtKTtcblx0XHRcdHJlc3VsdCA9ICg8UGlwZUNvbXBvbmVudD5jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAgcmVzdWx0O1xuXHR9XG5cdHJlbW92ZUNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV07XG5cdH1cblxuXHRyZWdpc3RlclNlcnZpY2VGb3JDb21wb25lbnQgKG5hbWU6IHN0cmluZywgc2VydmljZTogYW55KSB7XG5cdFx0dGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV0gPSBzZXJ2aWNlO1xuXHR9XG5cdHJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG5cdHJlZ2lzdGVyZWRGb3JTZXJ2aWNlTmFtZWQobmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdICE9PSB1bmRlZmluZWQ7XG5cdH1cblx0cmVtb3ZlU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVnaXN0ZXJlZFNlcnZpY2VzW25hbWVdO1xuXHR9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRyZXNzUGlwZSB9IGZyb20gJy4vYWRkcmVzcy5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FkZHJlc3NDb21wb25lbnQsIEFkZHJlc3NQaXBlXSxcclxuICBleHBvcnRzOiBbQWRkcmVzc0NvbXBvbmVudCwgQWRkcmVzc1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0FkZHJlc3NDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQWRkcmVzc0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBBZGRyZXNzUGlwZVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnYWRkcmVzcycsIEFkZHJlc3NDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignYWRkcmVzcycsIEFkZHJlc3NQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhdWRpby1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhdWRpbyBbc3JjXT1cInNvdXJjZVwiIFxyXG4gICAgICAgIChwbGF5aW5nKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoZW5kZWQpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChwYXVzZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKHNlZWtlZCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGVycm9yKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBjb250cm9scz1cInRydWVcIj5Zb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC48L2F1ZGlvPmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXVkaW9Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IGV2ZW50LnR5cGUsXHJcbiAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBldmVudC50YXJnZXQuYXV0b3BsYXksXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogZXZlbnQudGFyZ2V0LmNvbnRyb2xzLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGV2ZW50LnRhcmdldC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lOiBldmVudC50YXJnZXQuY3VycmVudFRpbWUsXHJcbiAgICAgICAgICAgICAgICBlbmRlZDogZXZlbnQudGFyZ2V0LmVuZGVkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGV2ZW50LnRhcmdldC5lcnJvcixcclxuICAgICAgICAgICAgICAgIHBhdXNlZDogZXZlbnQudGFyZ2V0LnBhdXNlZCxcclxuICAgICAgICAgICAgICAgIG11dGVkOiBldmVudC50YXJnZXQubXV0ZWQsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TXV0ZWQ6IGV2ZW50LnRhcmdldC5kZWZhdWx0TXV0ZWQsXHJcbiAgICAgICAgICAgICAgICB2b2x1bWU6IGV2ZW50LnRhcmdldC52b2x1bWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGltYWdlIGRpc3BsYXkuIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSB0cmFuc2Zvcm1lZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhdWRpbycgfSlcclxuZXhwb3J0IGNsYXNzIEF1ZGlvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBdWRpb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXT09PSd0cnVlJyA6IHRydWUpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1RvQXVkaW8oc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGF1ZGlvIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgY29udHJvbHM9XFwndHJ1ZVxcJyAvPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb0F1ZGlvKHNvdXJjZXMpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9BdWRpbyhzb3VyY2UpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvQXVkaW8oc291cmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb0F1ZGlvKHNvdXJjZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQXVkaW9Db21wb25lbnQgfSBmcm9tICcuL2F1ZGlvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1ZGlvUGlwZSB9IGZyb20gJy4vYXVkaW8ucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBdWRpb0NvbXBvbmVudCwgQXVkaW9QaXBlXSxcclxuICBleHBvcnRzOiBbQXVkaW9Db21wb25lbnQsIEF1ZGlvUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbQXVkaW9Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGlvSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEF1ZGlvSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEF1ZGlvUGlwZVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2F1ZGlvJywgQXVkaW9Db21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignYXVkaW8nLCBBdWRpb1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGNhbGVuZGFyIGNvZGUgaXMgY29waWVkIGZyb20gXCJiZW4gdGVkZGVyXCIgXHJcbiogaHR0cDovL3d3dy5iZW50ZWRkZXIuY29tL2NyZWF0ZS1jYWxlbmRhci1ncmlkLWNvbXBvbmVudC1hbmd1bGFyLTQvXHJcbiovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyRGF0ZSB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgdG9kYXk/OiBib29sZWFuO1xyXG4gIH1cclxuICBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NhbGVuZGFyLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJjYWxlbmRhci1ib3hcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCIgW3RleHRDb250ZW50XT1cIm9yaWdEYXRlIHwgZGF0ZTpmb3JtYXR0aW5nXCI+PC9zcGFuPlxyXG4gICAgICA8YSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInBvcHBlclwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cInBvcGRhdGVwaWNrZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPlBpY2sgYSBkYXRlPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIiAqbmdJZj1cInNob3dDYWxlbmRhclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyLW5hdnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vbnRoLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldk1vbnRoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5CYWNrIGEgbW9udGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInA0XCI+e3sgY3VycmVudERhdGUgfCBkYXRlOidNTU1NJyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRNb250aCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkZvcndhcmQgYSBtb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInllYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwcmV2WWVhcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+QmFjayBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0XHQ8c3Bhbj57eyBjdXJyZW50RGF0ZSB8IGRhdGU6ICd5eXl5JyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm5leHRZZWFyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+Rm9yd2FyZCBhIHllYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb250aC1ncmlkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkYXktbmFtZXNcIj5cclxuXHRcdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBuYW1lIG9mIGRheU5hbWVzXCIgY2xhc3M9XCJkYXktbmFtZSBwOVwiPnt7IG5hbWUgfX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrc1wiPlxyXG5cdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IHdlZWsgb2Ygd2Vla3NcIiBjbGFzcz1cIndlZWtcIj5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrLWRhdGUgZGlzYWJsZWRcIiAqbmdJZj1cIiFpc1NlbGVjdGVkTW9udGgoZGF5LmRhdGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2Vlay1kYXRlIGVuYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzU2VsZWN0ZWRNb250aChkYXkuZGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcblx0XHRcdFx0XHRcdCAgIChjbGljayk9XCJzZWxlY3REYXRlKCRldmVudCwgZGF5KVwiXHJcblx0XHRcdFx0XHRcdCAgIFtjbGFzcy50b2RheV09XCJkYXkudG9kYXlcIlxyXG5cdFx0XHRcdFx0XHQgICBbY2xhc3Muc2VsZWN0ZWRdPVwiZGF5LnNlbGVjdGVkXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj57eyBkYXkuZGF0ZS5nZXREYXRlKCkgfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICAucG9wcGVyIC5mYS1jYWxlbmRhcntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luOiAwIDVweH1cclxuICAgICAgICAucG9wcGVyOmhvdmVyIC5mYS1jYWxlbmRhcntjb2xvcjogI2ZhYmRhYn1cclxuICAgICAgICAuY2FsZW5kYXItYm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhci1ib3ggZGF0ZSB7ZmxleDogMTt9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCAucG9wcGVyIHtjdXJzb3I6IHBvaW50ZXI7ZmxleDogMCAwIDE1cHh9XHJcbiAgICAgICAgLmNhbGVuZGFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAqIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5jYWxlbmRhci1uYXZzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiBidXR0b24sXHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IGJ1dHRvbjpob3ZlcixcclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAuZGF5LW5hbWVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWtzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZXMge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICNkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGxpbmVhciwgY29sb3IgMTUwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5kaXNhYmxlZCB7Y29sb3I6ICNhYWE7fVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmhvdmVyIC5kYXRlLXRleHQsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1cyAuZGF0ZS10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmhvdmVyOjphZnRlcixcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnNlbGVjdGVkIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5zZWxlY3RlZDo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUudG9kYXk6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGl0ZW06IGFueTtcclxuICBzaG93Q2FsZW5kYXIgPSBmYWxzZTtcclxuICBmb3JtYXR0aW5nOnN0cmluZztcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gIG9yaWdEYXRlOiBEYXRlO1xyXG4gIGN1cnJlbnREYXRlOiBEYXRlO1xyXG4gIGRheU5hbWVzID0gWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ107XHJcbiAgd2Vla3M6IENhbGVuZGFyRGF0ZVtdW10gPSBbXTtcclxuICBzZWxlY3RlZERheXM6IERhdGVbXSA9IFtdO1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcblxyXG4gIGtleXVwKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvcGRhdGVwaWNrZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNob3dDYWxlbmRhciA9ICF0aGlzLnNob3dDYWxlbmRhcjtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy5vcmlnRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgc291cmNlLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChuZXcgRGF0ZShpdGVtKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2gobmV3IERhdGUodGhpcy5zb3VyY2UpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbSA9IGRhdGE7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICAgIHRoaXMuZm9ybWF0dGluZz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkRGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlOiBEYXRlID0gdGhpcy5zZWxlY3RlZERheXNbaV07XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1NhbWVEYXkoZGF0ZSwgc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIHJldHVybiBpbmRleCA+IC0xO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZE1vbnRoKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuY3VycmVudERhdGUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0ZWREYXRlcyhkYXk6IENhbGVuZGFyRGF0ZSkge1xyXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMubXVsdGlzZWxlY3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWREYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSB0aGlzLnNlbGVjdGVkRGF5c1tpXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTYW1lRGF5KGRheS5kYXRlLCBkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkYXkuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZighZm91bmQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKGRheS5kYXRlKTtcclxuICAgICAgICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzID0gW2RheS5kYXRlXTtcclxuICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdERhdGUoZXZlbnQsIGRheTogQ2FsZW5kYXJEYXRlKTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5vcmlnRGF0ZSA9IGRheS5kYXRlO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRheS5kYXRlO1xyXG4gICAgdGhpcy50b2dnbGVTZWxlY3RlZERhdGVzKCBkYXkgKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF5cy5zb3J0KCAoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBhID4gYiA/IC0xIDogMTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGVkRGF5cyxcclxuICAgICAgICBpdGVtOiB0aGlzLml0ZW1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaG93Q2FsZW5kYXIgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWN0aW9ucyBmcm9tIGNhbGVuZGFyXHJcbiAgcHJldk1vbnRoKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCktMSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBuZXh0TW9udGgoZXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSsxLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIHByZXZZZWFyKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKS0xLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBuZXh0WWVhcihldmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkrMSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCksIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB0aGUgY2FsZW5kYXIgZ3JpZFxyXG4gICAgZ2VuZXJhdGVDYWxlbmRhcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZmlsbERhdGVzKHRoaXMuY3VycmVudERhdGUpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtzOiBDYWxlbmRhckRhdGVbXVtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3ZWVrcy5wdXNoKGRhdGVzLnNwbGljZSgwLCA3KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2Vla3MgPSB3ZWVrcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTYW1lRGF5KGE6IERhdGUsIGI6IERhdGUpIHtcclxuICAgICAgICByZXR1cm4gYS5nZXRGdWxsWWVhcigpID09PSBiLmdldEZ1bGxZZWFyKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpICYmIFxyXG4gICAgICAgICAgICBhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2FtZU1vbnRoKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5nZXRZZWFyKCkgPT09IGIuZ2V0WWVhcigpICYmIFxyXG4gICAgICAgICAgICBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsRGF0ZXMoY3VycmVudERhdGU6IERhdGUpOiBDYWxlbmRhckRhdGVbXSB7XHJcbiAgICAgICAgY29uc3QgY20gPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdG0gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoY20uZ2V0RnVsbFllYXIoKSwgY20uZ2V0TW9udGgoKSwgMSlcclxuICAgICAgICBjb25zdCBmaXJzdE9mTW9udGggPSBmaXJzdERheS5nZXREYXkoKTtcclxuICAgICAgICBjb25zdCBmaXJzdERheU9mR3JpZCA9IG5ldyBEYXRlKGZpcnN0RGF5LmdldEZ1bGxZZWFyKCksIGZpcnN0RGF5LmdldE1vbnRoKCksIGZpcnN0RGF5LmdldERhdGUoKSAtIGZpcnN0T2ZNb250aCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaXJzdERheU9mR3JpZC5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaTwgKHN0YXJ0ICsgNDIpO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShmaXJzdERheU9mR3JpZC5nZXRGdWxsWWVhcigpLCBmaXJzdERheU9mR3JpZC5nZXRNb250aCgpLCBpKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRvZGF5OiB0aGlzLmlzU2FtZURheSh0bSwgZCksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5pc1NlbGVjdGVkKGQpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ2FsZW5kYXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtDYWxlbmRhckNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbQ2FsZW5kYXJDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbGVuZGFySW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENhbGVuZGFySW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2NhbGVuZGFyJywgQ2FsZW5kYXJDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NoZWNrYm94LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJ1c2VGb250XCIgY2xhc3M9XCJjaGVjay1mb250XCI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwic291cmNlID09PSBpZGVhbFwiICNjaGVjayB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZhIGZhLWNoZWNrXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzb3VyY2UgIT09IGlkZWFsXCIgI3VuY2hlY2sgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYSBmYS1jbG9zZVwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8aW5wdXQgKm5nSWY9XCIhdXNlRm9udFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcclxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIiBcclxuICAgICAgICAgICAgW2NoZWNrZWRdPVwic291cmNlPT09aWRlYWwgPyB0cnVlIDogbnVsbFwiIFxyXG4gICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgLz5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3QgLmNoZWNrLWZvbnQgLmZhe21hcmdpbjogMCA1cHh9XHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIC5jaGVjay1mb250OmhvdmVye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICAuY2hlY2stZm9udCB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgb3JpZ2luYWw6IHN0cmluZztcclxuICBpZGVhbDogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVzZUZvbnQ6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJjaGVja1wiKVxyXG4gIGNoZWNrO1xyXG5cclxuICBAVmlld0NoaWxkKFwidW5jaGVja1wiKVxyXG4gIHVuY2hlY2s7XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxyXG5cclxuICBrZXl1cChldmVudCkge1xyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChldmVudC50YXJnZXQsIFwiY2xpY2tcIik7XHJcblx0XHR9XHJcbiAgfVxyXG5cclxuICBjbGljayhldmVudCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc291cmNlID09PSB0aGlzLmlkZWFsKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gdGhpcy5vcmlnaW5hbDtcclxuXHRcdH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gdGhpcy5pZGVhbDtcclxuICAgIH1cclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy51c2VGb250KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5jaGVjay5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy51bmNoZWNrKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy51bmNoZWNrLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDY2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5pZGVhbD0gYXJncy5sZW5ndGggPyBTdHJpbmcoYXJnc1swXSkgOiBcIlwiO1xyXG4gICAgdGhpcy51c2VGb250PSBhcmdzLmxlbmd0aCA+IDEgPyBCb29sZWFuKGFyZ3NbMV0pIDogZmFsc2U7XHJcbiAgICB0aGlzLnNvdXJjZT0gU3RyaW5nKHNvdXJjZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcmlnaW5hbD0gdGhpcy5zb3VyY2UgPT09IHRoaXMuaWRlYWwgPyBcIlwiIDogc291cmNlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtDaGVja2JveENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NoZWNrYm94Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja2JveENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ2hlY2tib3hJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnY2hlY2tib3gnLCBDaGVja2JveENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VtYWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cImlzTGlua1wiIFtocmVmXT1cIidtYWlsdG86JyArIHNvdXJjZVwiIChrZXl1cCk9J2tleXVwKCRldmVudCknIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNMaW5rXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICA6aG9zdDpob3ZlciAuZmEtZW52ZWxvcGV7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIDpob3N0IC5mYXttYXJnaW46IDAgNXB4O31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzTGluazogYm9vbGVhbjtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5pc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gZW1haWwgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZW1haWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBlbWFpbFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVtYWlsUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdPT09J3RydWUnIDogdHJ1ZSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgZW1haWxGcm9tU3RyaW5nKHNvdXJjZTogc3RyaW5nLCBpc0xpbms6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgeDogc3RyaW5nO1xyXG4gICAgICAgIGlmIChpc0xpbmspIHtcclxuICAgICAgICAgICAgeCA9IFwiPGEgaHJlZj1cXCdtYWlsdG86XCIrc291cmNlK1wiXFwnID48c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj48L2E+XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeCA9IFwiPHNwYW4+PHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBzdHlsZT0nbWFyZ2luOiAwIDVweCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj48c3Bhbj5cIiArIHNvdXJjZSArIFwiPC9zcGFuPjwvc3Bhbj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBpc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbWFpbEZyb21TdHJpbmcoc291cmNlLCBpc0xpbmspO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmVtYWlsRnJvbVN0cmluZyhpdGVtLCBpc0xpbmspKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gJy4vZW1haWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1haWxQaXBlIH0gZnJvbSAnLi9lbWFpbC5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0VtYWlsQ29tcG9uZW50LCBFbWFpbFBpcGVdLFxyXG4gIGV4cG9ydHM6IFtFbWFpbENvbXBvbmVudCwgRW1haWxQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtFbWFpbENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pIFxyXG5cclxuZXhwb3J0IGNsYXNzIEVtYWlsSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEVtYWlsSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0VtYWlsUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnZW1haWwnLCBFbWFpbENvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdlbWFpbCcsIEVtYWlsUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm9udC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAnbGVmdCdcIiAgICBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiAhPT0gJ3JlcGxhY2UnXCIgW3RleHRDb250ZW50XT1cImNvbnRlbnRcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ3JpZ2h0J1wiICAgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdyZXBsYWNlJ1wiIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0IHNwYW4ge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9udENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgZm9udDogc3RyaW5nO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5mb250ID0gYXJnc1swXTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwibGVmdFwiO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0udG9Mb3dlckNhc2UoKSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gYWN0aW9uID09PSBcIipcIiA/IHNvdXJjZSA6IChcInJlcGxhY2VcIiA9PT0gYWN0aW9uLnRvTG93ZXJDYXNlKCkgPyBcIlwiIDogc291cmNlKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBlbWFpbCBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdmb250JyB9KVxyXG5leHBvcnQgY2xhc3MgRm9udFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBmb250OmZhIGZhLWNoZWNrOmxlZnQ6KlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvbnRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCIpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvbnRGcm9tU3RyaW5nKGZvbnQsIGxvY2F0aW9uLCBhY3Rpb24sIGNvbnRlbnQpIHtcclxuICAgICAgICByZXR1cm4gKGxvY2F0aW9uID09PSBcImxlZnRcIiA/IFxyXG4gICAgICAgICAgICAgICAgKGZvbnQgKyBjb250ZW50KSA6IFxyXG4gICAgICAgICAgICAgICAgKChsb2NhdGlvbiA9PT0gXCJyaWdodFwiKSA/IGNvbnRlbnQgKyBmb250IDogZm9udCkpO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgZm9udCA9IGFyZ3MubGVuZ3RoID8gXCI8c3BhbiBjbGFzcz1cXCdcIiArIGFyZ3NbMF0gKyBcIlxcJyBzdHlsZT0nbWFyZ2luOiAwIDVweCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhY3Rpb24gPT09IFwiKlwiID8gc291cmNlIDogKFwicmVwbGFjZVwiID09PSBhY3Rpb24udG9Mb3dlckNhc2UoKSA/IFwiXCIgOiBzb3VyY2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRm9udENvbXBvbmVudCB9IGZyb20gJy4vZm9udC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb250UGlwZSB9IGZyb20gJy4vZm9udC5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZvbnRDb21wb25lbnQsIEZvbnRQaXBlXSxcclxuICBleHBvcnRzOiBbRm9udENvbXBvbmVudCwgRm9udFBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0ZvbnRDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvbnRJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm9udEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtGb250UGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnZm9udCcsIEZvbnRDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignZm9udCcsIEZvbnRQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbWFnZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aW1nIFtzcmNdPVwic291cmNlXCIgXHJcbiAgICAgICAgICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBcclxuICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCIgXHJcbiAgICAgICAgICAgICBbdGl0bGVdPVwiYWx0XCIgXHJcbiAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJjaGFuZ2UoJGV2ZW50KVwiIC8+YCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBhbHQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFsdCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5hbHQgfHwgIXRoaXMuYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnR5cGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBpbWFnZSBkaXNwbGF5LiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnaW1hZ2UnIH0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGltYWdlOjIwMHB4OmF1dG86YWx0dGV4dCBPUiBpbWFnZToyMDBweDphbHRlcm5hdGUtdGV4dCBPUiBpbWFnZToyMDBweCBPUiBpbWFnZVxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbWFnZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCkge1xyXG4gICAgICAgIGlmKCFhbHQgfHwgIWFsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICBhbHQgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgc3R5bGU9XFwnXCIrIHdpZHRoICsgaGVpZ2h0ICsgXCJcXCcgdGl0bGU9XFwnXCIrYWx0K1wiXFwnIC8+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvSW1hZ2Uoc291cmNlcywgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IFwid2lkdGg6IFwiICsgYXJnc1swXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBoZWlnaHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IFwiaGVpZ2h0OiBcIiArIGFyZ3NbMV0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvSW1hZ2Uoc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBcIlwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtJbWFnZUNvbXBvbmVudCwgSW1hZ2VQaXBlXSxcclxuICBleHBvcnRzOiBbSW1hZ2VDb21wb25lbnQsIEltYWdlUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbSW1hZ2VDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEltYWdlSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ltYWdlUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnaW1hZ2UnLCBJbWFnZUNvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdpbWFnZScsIEltYWdlUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwiZWRpdE5hbWVcIj5cclxuICAgIDxpbnB1dCAjbmFtZUVkaXRvclxyXG4gICAgICAgIHR5cGU9J3RleHQnIFxyXG4gICAgICAgIFtpZF09XCJpZFwiXHJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiXHJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAoYmx1cik9XCJibHVyKCRldmVudClcIiBcclxuICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJz5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICNuYW1lSG9sZGVyXHJcbiAgICAgICAgKm5nSWY9JyFlZGl0TmFtZSAmJiBmb3JtYXR0aW5nJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoa2V5dXApPSdrZXlkb3duKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmFtZSgkZXZlbnQpXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZSA/IChzb3VyY2UgfCBpbnRvOmZvcm1hdHRpbmcpIDogJyZuYnNwOydcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuICNuYW1lSG9sZGVyXHJcbiAgICAgICAgKm5nSWY9JyFlZGl0TmFtZSAmJiAhZm9ybWF0dGluZydcclxuICAgICAgICBjbGFzcz0nbG9ja2VkJyBcclxuICAgICAgICB0YWJpbmRleD0nMCcgXHJcbiAgICAgICAgKGtleXVwKT0na2V5ZG93bigkZXZlbnQpJ1xyXG4gICAgICAgIChjbGljayk9XCJjbGlja05hbWUoJGV2ZW50KVwiXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJzb3VyY2UgPyBzb3VyY2UgOiAnJm5ic3A7J1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAubG9ja2VkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIFxyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGN1cnNvcjogYmVhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0IC5sb2NrZWQ6aG92ZXJ7Ym9yZGVyOiAxcHggc29saWQgI2ZhYmRhYjt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgZm9ybWF0dGluZzpzdHJpbmc7XHJcbiAgZWRpdE5hbWUgPSBmYWxzZTtcclxuICBvbGRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUVkaXRvclwiKVxyXG4gIG5hbWVFZGl0b3I7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lSG9sZGVyXCIpXHJcbiAgbmFtZUhvbGRlclxyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcblxyXG4gIGtleXVwKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKCgoY29kZSA+PSA0OCkgJiYgKGNvZGUgPD0gOTApKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSA5NikgJiYgKGNvZGUgPD0gMTExKSkgfHxcclxuICAgICAgICAoKGNvZGUgPT0gMzIpIHx8IChjb2RlID09IDgpKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSAxODYpICYmIChjb2RlIDw9IDIyMikpKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoKGNvZGUgPT09IDEzKSB8fCAoY29kZSA9PT0gOSkgfHwgKGNvZGUgPT09IDI3KSApIHtcclxuICAgICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lSG9sZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVIb2xkZXIubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LDY2KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBibHVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlkb3duKGV2ZW50KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChldmVudC50YXJnZXQsIFwiY2xpY2tcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBpZiAodGhpcy5uYW1lRWRpdG9yKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lRWRpdG9yLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDY2KTtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGNsaWNrTmFtZShldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmVkaXROYW1lID0gdHJ1ZTtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBTdHJpbmcodGhpcy5zb3VyY2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgIH0sNjYpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXI9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBhcHBlbmQgY2hhcmFjdGVyKHMpIHRvIGEgY29udGVudC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYXBwZW5kJyB9KVxyXG5leHBvcnQgY2xhc3MgQXBwZW5kUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gYXBwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwcGVuZFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlICsga2V5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtICsga2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gcmV0dXJuIGEgdHJhbnNmb3JtYXRpb24gYXJndW1lbnQgd2hpY2ggc2hvdWxkIGJlIHBpcGVkIGludG8gYW5vdGhlciB0cmFuc2Zvcm0gb2JqZWN0XHJcbiogdG8gdHJhbnNmb3JtIHRoZSBvYmplY3QgdmFsdWUgcGFzc2VkIHRvIHRoaXMgcGlwZS5cclxuKiB0aGUgYXJndW1lbnRzIGFyZSBhcyBmb2xsb3dzOiAxKSBjb25kaXRpb24sIDIpIHZhbHVlIHRvIGV2YWx1YXRlIHRoZSBjb25kaXRpb24sIDMpIGFjdGlvbiwgNCkgZWxzZSBhY3Rpb24uXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2lmJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gc3BsaXQoaXRlbTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKGZ1bmN0aW9uKHgpe3JldHVybiB4Lmxlbmd0aH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGlmOj06dHJ1ZTpmYSBmYS1jaGVjazpmYSBmYS1iZWxsXHJcbiAgICAgICAgICAgIGNvbnN0IGFjb25kaXRpb24gPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogXCJcIjtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBDb25kaXRpb25hbFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICdcIicgPyByZXN1bHQuc3Vic3RyaW5nKDEscmVzdWx0Lmxlbmd0aC0xKSA6IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNwbGl0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhjb250ZW50LCByZXN1bHQsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIGNvbmRpdGlvbkZyb21TdHJpbmcoY29udGVudCwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHN3aXRjaChhY29uZGl0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSBcIj1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA9PT0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIiE9XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgIT09IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI+XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPiB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPj1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA+PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPFwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50IDwgdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjw9XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPD0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIn5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCAhPT0gdW5kZWZpbmVkICYmIGNvbnRlbnQgIT09IG51bGwgJiYgY29udGVudCAhPT0gXCJudWxsXCIgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIiF+XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IFwibnVsbFwiID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ+PVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ICYmIHZhbHVlICYmIFN0cmluZyhjb250ZW50KS50b0xvd2VyQ2FzZSgpID09PSBTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCkgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImluXCIgOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA/IGNvbnRlbnQuaW5kZXhPZihhY3Rpb24pIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgYWNvbmRpdGlvbiA9ICBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhbHRBY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uRnJvbVN0cmluZyhzb3VyY2UsIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpdGVtXSA9IHRoaXMuY29uZGl0aW9uRnJvbVN0cmluZyhpdGVtLCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBqb2luIGFycmF5cyBvciBqc29uIGF0dHJpYnV0ZSB2YWx1ZXMuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2pvaW4nIH0pXHJcbmV4cG9ydCBjbGFzcyBKb2luUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vam9pbiBvciBqb2luOmNoYXJhY3RlclxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEpvaW5QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2Uuam9pbihhcmdzWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc291cmNlW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKGFyZ3NbMF0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHRha2UgYSBzdHJpbmcgYXMgYSBrZXkgYW5kIHJldHVybnMgdmFsdWUgb2Yga2V5IGZyb20gdGhlIGdpdmVuIG1hcCBvYmplY3QuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ21hcCcgfSlcclxuZXhwb3J0IGNsYXNzIE1hcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBtYXA6a2V5MTt2YWx1ZTEva2V5Mjt2YWx1ZTIva2V5Mzt2YWx1ZTNcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlc0ZvcihsaXN0LCBtYXApIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsaXN0Lm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXBba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWFwW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdlTWFwcGluZyhtYXBwaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbWFwID0gbWFwcGluZztcclxuICAgICAgICBpZiggbWFwcGluZy50cmltICkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPXt9O1xyXG4gICAgICAgICAgICBtYXBwaW5nLnNwbGl0KCcvJykubWFwKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGtleS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgbWFwW3hbMF1dID0geFsxXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1hcHBpbmcgPSBtYXA7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXBwaW5nO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2VNYXBwaW5nKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtzb3VyY2VdIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzRm9yKHNvdXJjZSwgbWFwKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gbWFzayBzZW5zaXRpdmUgaW5mb3JtYXRpb24uIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSBtYXNrZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbWFzaycgfSlcclxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gbWFzazo0OiogIE9SIG1hc2s6NFxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIHBhcnNlSW50KGFyZ3NbMV0sIDEwKSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBuZXcgTWFza1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hc2tTdHJpbmcoaXRlbSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpIHtcclxuICAgICAgICBjb25zdCBtYXNrZWRTZWN0aW9uID0gaXRlbSAgPyBpdGVtLnNsaWNlKDAsIC12aXNpYmxlRGlnaXRzKSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZVNlY3Rpb24gPSBpdGVtID8gaXRlbS5zbGljZSgtdmlzaWJsZURpZ2l0cykgOiBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbSA/IG1hc2tlZFNlY3Rpb24ucmVwbGFjZSgvLi9nLCBtYXNrV2l0aCkgKyB2aXNpYmxlU2VjdGlvbiA6IFwiXCI7XHJcbiAgICB9XHJcbiAgICBtYXNrQXJyYXkoaXRlbXMsIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMubWFza1N0cmluZyhpdGVtLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlzaWJsZURpZ2l0cyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiA0O1xyXG4gICAgICAgIGNvbnN0IG1hc2tXaXRoID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6ICcqJztcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tTdHJpbmcoc291cmNlLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tBcnJheShzb3VyY2UsIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gcHJlcGVuZCBjaGFyYWN0ZXIocykgdG8gYSBjb250ZW50LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdwcmVwZW5kJyB9KVxyXG5leHBvcnQgY2xhc3MgUHJlcGVuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBwcmVwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByZXBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkgKyBzb3VyY2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSArIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogVGFrZXMgY2FyZSBvZiBwcm9ibGVtIHdpdGggc2VjdXJpdHkgcHJlY2F1c2lvbnMgdGhhdCBzdHJpcCBvdXQgY2VydGFpbiBjaGFyYWN0ZXJzIFxyXG4qIGZyb20gZW5kIHJlc3VsdCBvZiB5b3VyIHJlcXVlc3RzLlxyXG4qIGNvZGUgdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTY4MTE2My9hbmd1bGFyLTItc2FuaXRpemluZy1odG1sLXN0cmlwcGVkLXNvbWUtY29udGVudC13aXRoLWRpdi1pZC10aGlzLWlzLWJ1Zy1vci1mZVxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzYW5pdGl6ZUh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjpEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2OnN0cmluZyk6U2FmZUh0bWwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2KTtcclxuICB9XHJcbn0iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgbWFwIG9iamVjdC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndmFsdWVvZicgfSlcclxuZXhwb3J0IGNsYXNzIFZhbHVlT2ZQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gdmFsdWVvZjprZXlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWx1ZU9mUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZU9mU2luZ2xlKHNvdXJjZTogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICAgIHZhbHVlT2ZNdWx0aXBsZShzb3VyY2VzOiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsdWVPZlNpbmdsZShzb3VyY2UsIGtleSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0ob2JqZWN0OiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBvYmplY3QgPT09IFwic3RyaW5nXCIpIHx8ICEob2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2ZTaW5nbGUob2JqZWN0LCBhcmdzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZk11bHRpcGxlKG9iamVjdCwgYXJnc1swXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHdyYXAgYSBjb250ZW50IGludG8gY2hhcmFjdGVyKHMpLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd3cmFwJyB9KVxyXG5leHBvcnQgY2xhc3MgV3JhcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyB3cmFwOnNvbWV0aGluZzpzb21ldGhpbmcgIE9SIHdyYXA6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgV3JhcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBhcmdzWzFdKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgXHJcbiAgICAgICAgY29uc3QgcHJlID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgcG9zdD0gcHJlLmxlbmd0aCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIChhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIikgOiBwcmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBzb3VyY2UgKyBwb3N0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwcmUgKyBpdGVtICsgcG9zdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRGF0ZVBpcGUsXHJcbiAgQ3VycmVuY3lQaXBlLFxyXG4gIERlY2ltYWxQaXBlLFxyXG4gIEpzb25QaXBlLFxyXG4gIFNsaWNlUGlwZSxcclxuICBVcHBlckNhc2VQaXBlLFxyXG4gIExvd2VyQ2FzZVBpcGVcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQFBpcGUoe25hbWU6J2ludG8nfSlcclxuZXhwb3J0IGNsYXNzIEluVG9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb29sOiBDb21wb25lbnRQb29sKSB7fVxyXG5cclxuICB0cmFuc2Zvcm0oY29udGVudDogYW55LCBsaXN0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICBcclxuICAgIGxpc3Quc3BsaXQoXCJ8XCIpLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLl90cmFuc2Zvcm0ocmVzdWx0LCB0aGlzLnNwbGl0KGl0ZW0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gaXRlbS50cmltKCkubWF0Y2goLyg/PVxcUylbXlwiXFw6XSooPzpcIlteXFxcXFwiXSooPzpcXFxcW1xcOlxcU11bXlxcXFxcIl0qKSpcIlteXCJcXDpdKikqL2cpLmZpbHRlcigoeCk9PngubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybShjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRQaXBlVHJhbnNmb3JtYXRpb24oYXJnc1swXSwgY29udGVudCwgYXJncywgdGhpcy5fdHJhbnNmb3JtLmJpbmQodGhpcykpOyBcclxuICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQgOiBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uSW5pdCxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuL3BpcGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tpbnRvXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEludG9EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJyYXdDb250ZW50XCIpXHJcbiAgICByYXdDb250ZW50OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9JZFwiKVxyXG4gICAgaW50b0lkOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9OYW1lXCIpXHJcbiAgICBpbnRvTmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvRGF0YVwiKVxyXG4gICAgaW50b0RhdGE6IGFueTtcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b1wiKVxyXG4gICAgaW50bzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dChcIm9uQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgICBvbkNvbXBvbmVudENoYW5nZSA9IChldmVudCkgPT4ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHB1YmxpYyBlbDpFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCxcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF90cmFuc2Zvcm0oY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBvb2wucmVnaXN0ZXJlZEZvckNvbXBvbmVudFdpdGhOYW1lZChhcmdzWzBdKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdBcmdzID0gYXJncy5zcGxpY2UoMSxhcmdzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KGFyZ3NbMF0sIGNvbnRlbnQsIHRoaXMuaW50b0lkLCB0aGlzLmludG9OYW1lLCBkYXRhLCAuLi5uZXdBcmdzKTsgXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBvb2wucmVnaXN0ZXJlZEZvclBpcGVUcmFuc2Zvcm1hdGlvbk5hbWVkKGFyZ3NbMF0pKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucG9vbC5yZWdpc3RlcmVkUGlwZVRyYW5zZm9ybWF0aW9uKGFyZ3NbMF0sIGNvbnRlbnQsIGFyZ3MsIHRoaXMuX3RyYW5zZm9ybS5iaW5kKHRoaXMpLCBkYXRhKTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdW5rbm93biBmb3JtYXR0ZXJcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtQ29tcG9uZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50b0lkLCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9OYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLCBcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA1ID8gYXJnc1s1XSA6IFwiXCIpO1xyXG4gICAgICAgICAgICB9Y2F0Y2goeCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJhbnNmb3JtQ29tcG9uZW50KHR5cGUsIGNvbnRlbnQ6IGFueSwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBkYXRhOiBhbnksLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGNvbnRlbnQgPT09IFwiYm9vbGVhblwiIHx8IE9iamVjdC5rZXlzKGNvbnRlbnQpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAgdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50Rm9yKHR5cGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIGNvbXBvbmVudCAnXCIgKyB0eXBlKyBcIicgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmlkID0gaWQ7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuc2VydmljZSA9IHRoaXMucG9vbC5yZWdpc3RlcmVkU2VydmljZUZvckNvbXBvbmVudCh0eXBlKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC50cmFuc2Zvcm0oY29udGVudC5zb3VyY2UgPyBjb250ZW50LnNvdXJjZSA6IGNvbnRlbnQsIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5vbkludG9Db21wb25lbnRDaGFuZ2UgJiYgdGhpcy5vbkNvbXBvbmVudENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbkludG9Db21wb25lbnRDaGFuZ2Uuc3Vic2NyaWJlKHRoaXMub25Db21wb25lbnRDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY29udGVudCA9PT0gXCJib29sZWFuXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN4ID0gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50Rm9yKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzeCA9PT0gbnVsbCB8fCBzeCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdcIiArIHR5cGUrIFwiJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3guaWQgPSBpZCArICctJyArIChjb3VudGVyKyspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3guc2VydmljZSA9IHRoaXMucG9vbC5yZWdpc3RlcmVkU2VydmljZUZvckNvbXBvbmVudCh0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3gudHJhbnNmb3JtKHNvdXJjZS5zb3VyY2UgPyBzb3VyY2Uuc291cmNlIDogc291cmNlLCBkYXRhLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN4Lm9uSW50b0NvbXBvbmVudENoYW5nZSAmJiB0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeC5vbkludG9Db21wb25lbnRDaGFuZ2Uuc3Vic2NyaWJlKHRoaXMub25Db21wb25lbnRDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRDb21wb25lbnRGb3IobmFtZSk6IFBpcGVDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvb2wucmVnaXN0ZXJlZENvbXBvbmVudChuYW1lLCB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy52aWV3UmVmLCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5pbnRvIHx8IHRoaXMucmF3Q29udGVudCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSAgdGhpcy5yYXdDb250ZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludG8uc3BsaXQoXCJ8XCIpLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl90cmFuc2Zvcm0ocmVzdWx0LCB0aGlzLnNwbGl0KGl0ZW0pLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wOiBQaXBlQ29tcG9uZW50ID0gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50Rm9yKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wKSAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXAudHJhbnNmb3JtKHJlc3VsdCwgW10sIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIGNvbXBvbmVudCAnc3BhbicgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wOiBQaXBlQ29tcG9uZW50ID0gdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50Rm9yKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXApICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wLnRyYW5zZm9ybShzb3VyY2UsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdzcGFuJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRGF0ZVBpcGUsXHJcbiAgICBDdXJyZW5jeVBpcGUsXHJcbiAgICBEZWNpbWFsUGlwZSxcclxuICAgIEpzb25QaXBlLFxyXG4gICAgU2xpY2VQaXBlLFxyXG4gICAgVXBwZXJDYXNlUGlwZSxcclxuICAgIExvd2VyQ2FzZVBpcGVcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtBcHBlbmRQaXBlfSBmcm9tICcuL2FwcGVuZC5waXBlJztcclxuaW1wb3J0IHtDb25kaXRpb25hbFBpcGV9IGZyb20gJy4vY29uZGl0aW9uYWwucGlwZSc7XHJcbmltcG9ydCB7Sm9pblBpcGV9IGZyb20gJy4vam9pbi5waXBlJztcclxuaW1wb3J0IHtNYXBQaXBlfSBmcm9tICcuL21hcC5waXBlJztcclxuaW1wb3J0IHtNYXNrUGlwZX0gZnJvbSAnLi9tYXNrLnBpcGUnO1xyXG5pbXBvcnQge1ByZXBlbmRQaXBlfSBmcm9tICcuL3ByZXBlbmQucGlwZSc7XHJcbmltcG9ydCB7U2FuaXRpemVIdG1sUGlwZX0gZnJvbSAnLi9zYW5pdGl6ZUh0bWwucGlwZSc7XHJcbmltcG9ydCB7VmFsdWVPZlBpcGV9IGZyb20gJy4vdmFsdWVvZi5waXBlJztcclxuaW1wb3J0IHtXcmFwUGlwZX0gZnJvbSAnLi93cmFwLnBpcGUnO1xyXG5pbXBvcnQgeyBJblRvUGlwZSB9IGZyb20gJy4vaW50by5waXBlJztcclxuaW1wb3J0IHsgSW50b0RpcmVjdGl2ZSB9IGZyb20gJy4vaW50by5kaXJlY3RpdmUnXHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuL2NvbXBvbmVudC5wb29sJztcclxuXHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcGVuZFBpcGUsXHJcbiAgICBDb25kaXRpb25hbFBpcGUsXHJcbiAgICBKb2luUGlwZSxcclxuICAgIE1hcFBpcGUsXHJcbiAgICBNYXNrUGlwZSxcclxuICAgIFByZXBlbmRQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIFZhbHVlT2ZQaXBlLFxyXG4gICAgV3JhcFBpcGUsXHJcbiAgICBJblRvUGlwZSxcclxuICAgIEludG9EaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFwcGVuZFBpcGUsXHJcbiAgICBDb25kaXRpb25hbFBpcGUsXHJcbiAgICBKb2luUGlwZSxcclxuICAgIE1hcFBpcGUsXHJcbiAgICBNYXNrUGlwZSxcclxuICAgIFByZXBlbmRQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIFZhbHVlT2ZQaXBlLFxyXG4gICAgV3JhcFBpcGUsXHJcbiAgICBJblRvUGlwZSxcclxuICAgIEludG9EaXJlY3RpdmVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW10sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25QaXBlc01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ29tbW9uUGlwZXNNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIERhdGVQaXBlLFxyXG4gICAgICAgIEN1cnJlbmN5UGlwZSxcclxuICAgICAgICBEZWNpbWFsUGlwZSxcclxuICAgICAgICBKc29uUGlwZSxcclxuICAgICAgICBTbGljZVBpcGUsXHJcbiAgICAgICAgVXBwZXJDYXNlUGlwZSxcclxuICAgICAgICBMb3dlckNhc2VQaXBlLFxyXG4gICAgXHJcbiAgICAgICAgQXBwZW5kUGlwZSxcclxuICAgICAgICBDb25kaXRpb25hbFBpcGUsXHJcbiAgICAgICAgSm9pblBpcGUsXHJcbiAgICAgICAgTWFwUGlwZSxcclxuICAgICAgICBNYXNrUGlwZSxcclxuICAgICAgICBQcmVwZW5kUGlwZSxcclxuICAgICAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgICAgIFZhbHVlT2ZQaXBlLFxyXG4gICAgICAgIFdyYXBQaXBlLFxyXG4gICAgICAgIENvbXBvbmVudFBvb2wsXHJcbiAgICAgICAgSW5Ub1BpcGVcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdhcHBlbmQnLCBBcHBlbmRQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignaWYnLCBDb25kaXRpb25hbFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdqb2luJywgSm9pblBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdtYXAnLCBNYXBQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbWFzaycsIE1hc2tQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigncHJlcGVuZCcsIFByZXBlbmRQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigndmFsdWVvZicsIFZhbHVlT2ZQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignd3JhcCcsIFdyYXBQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3NsaWNlJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gc2xpY2UgNToxMiBPUiBzbGljZSA1XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGxldCBzdGFydCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcclxuICAgICAgICBsZXQgZW5kID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgZW5kPSBwYXJzZUludChhcmdzWzJdLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNsaWNlciA9bmV3IFNsaWNlUGlwZSgpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjb250ZW50LCBzdGFydCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuZCA/IHNsaWNlci50cmFuc2Zvcm0oY250LCBzdGFydCwgZW5kKSA6IHNsaWNlci50cmFuc2Zvcm0oY250LCBzdGFydCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdudW1iZXInLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBudW1iZXI6ZW5fVVM6MiAgIG9yIG51bWJlcjplbl9VUyBvciBudW1iZXJcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgbGV0IG51bUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgIGxldCBudW1EZWNpbWFsPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICBudW1Mb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgIG51bURlY2ltYWw9IGFyZ3NbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlY2ltYWxlciA9bmV3IERlY2ltYWxQaXBlKG51bUxvY2FsKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtRGVjaW1hbCA/IGRlY2ltYWxlci50cmFuc2Zvcm0oY29udGVudCwgbnVtRGVjaW1hbCkgOiBkZWNpbWFsZXIudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignY3VycmVuY3knLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBjdXJyZW5jeTplbl9VUyBvciBjdXJyZW5jeVxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBjb25zdCBjcCA9IG5ldyBDdXJyZW5jeVBpcGUoYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiZW5fVVNcIik7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdsb3dlcmNhc2UnLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBsb3dlcmNhc2VcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgY29uc3QgbGNwID0gIG5ldyBMb3dlckNhc2VQaXBlKCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGxjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3VwcGVyY2FzZScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIHVwcGVyY2FzZVxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBjb25zdCB1Y3AgPSAgbmV3IFVwcGVyQ2FzZVBpcGUoKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdWNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godWNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignanNvbicsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGpzb25cclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgY29uc3QgamNwID0gIG5ldyBKc29uUGlwZSgpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBqY3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChqY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdkYXRlJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gZGF0ZTplbl9VUzpNTWRkeXkgT1IgZGF0ZTpcXFwiTU0vZGQveXl5eSBoaDpzc1xcXCJcclxuICAgICAgICAvLyBjb25zdCBkYXRlID0gKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSA/IG5ldyBEYXRlKGNvbnRlbnQpIDogY29udGVudDtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgbGV0IGRhdGVMb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICBsZXQgZGF0ZUZvcm1hdD0gYXJnc1sxXTtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIGRhdGVMb2NhbCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ9IGFyZ3NbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGVyID1uZXcgRGF0ZVBpcGUoZGF0ZUxvY2FsKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZGF0ZXIudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkYXRlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcbmltcG9ydCB7IENvbW1vblBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi1waXBlcy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb21tb25QaXBlc01vZHVsZS5mb3JSb290KCldLFxyXG4gIGRlY2xhcmF0aW9uczogW0lucHV0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0lucHV0Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBJbnB1dEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2lucHV0JywgSW5wdXRDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50LCBQaXBlU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXQtZ3JvdXAtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWl0ZW1cIiAqbmdGb3I9XCJsZXQgeCBvZiBvcHRpb25zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICBbdHlwZV09XCJ0eXBlXCIgXHJcbiAgICAgICAgICAgIFtpZF09XCJuYW1lICsgaVwiIFxyXG4gICAgICAgICAgICBbbmFtZV09XCJuYW1lICsgKHR5cGUgPT09ICdyYWRpbycgPyAnJyA6IGkpXCIgXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJ4LnZhbHVlID8geC52YWx1ZSA6IHhcIiBcclxuICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXNTZWxlY3RlZCh4KVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIvPlxyXG4gICAgICAgIDxsYWJlbCBbZm9yXT1cIm5hbWUgKyBpXCIgW3RleHRDb250ZW50XT1cIngubGFiZWwgPyB4LmxhYmVsIDogeFwiPjwvbGFiZWw+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IGFueTtcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHNlcnZpY2U6IFBpcGVTZXJ2aWNlQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAgY2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpID0gdGhpcy5zb3VyY2UuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBpZiAoaSA8IDApIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3BsaWNlKGksMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuICBpc1NlbGVjdGVkKGl0ZW0pIHtcclxuICAgIGNvbnN0IHhpdGVtID0gaXRlbS52YWx1ZSA/IGl0ZW0udmFsdWUgOiBpdGVtO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICByZXR1cm4geGl0ZW0gPT09IHRoaXMuc291cmNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLnNvdXJjZS5tYXAoKHgpID0+IHtcclxuICAgICAgaWYgKHhpdGVtID09PSB4KSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3VuZDtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZvcih0aGlzLm5hbWUsIHRoaXMuaWQsIGRhdGEpO1xyXG4gICAgdGhpcy50eXBlID0gKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0lucHV0R3JvdXBDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtJbnB1dEdyb3VwQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtJbnB1dEdyb3VwQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IElucHV0R3JvdXBJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdpbnB1dGdyb3VwJywgSW5wdXRHcm91cENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2pzb24tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJqc29uLXZpZXdcIiBbdGV4dENvbnRlbnRdPVwic291cmNlIHwganNvblwiPjwvc3Bhbj5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICAuanNvbi12aWV3IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgICAgICAgIHVuaWNvZGUtYmlkaTogZW1iZWQ7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSnNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzICwgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBKc29uQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtKc29uQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSnNvbkNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbSnNvbkNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBKc29uSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnanNvbicsIEpzb25Db21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsYXN0dXBkYXRlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJzaG93SWNvblwiIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXREYXRlKClcIj48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAgICAgLmZhIHttYXJnaW46MCA1cHggMCAwfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93SWNvbjogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb3VudDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbiA9IChhcmdzICYmIGFyZ3MubGVuZ3RoICYmIGFyZ3NbMF0gPT09ICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZSgpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdGNvbnN0IG1pbnV0ZSA9IDYwMDAwOy8vIG9uZSBtaW51dGVcclxuXHRcdGNvbnN0IGhvdXIgPSAzNjAwMDAwOy8vIG9uZSBob3VyIGxpbWl0XHJcblx0XHRjb25zdCBkYXkgPSA4NjQwMDAwMDsvLyAyNCBob3VycyBsaW1pdFxyXG5cdFx0Y29uc3Qgd2VlayA9IDYwNDgwMDAwMDsvLyA3IGRheXMgbGltaXRcclxuXHRcdGNvbnN0IG1vbnRoID0gNjA0ODAwMDAwKjQ7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRjb25zdCB5ZWFyID0gNjA0ODAwMDAwKjUyOy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0bGV0IHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0bGV0IGRpZmYgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLSB0aGlzLnNvdXJjZS5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYoZGlmZiA8PSBtaW51dGUpIHsvLyB1cCB0byBhIG1pbnV0ZVxyXG5cdFx0XHRyZXN1bHQgPSBcInNlY29uZHMgYWdvXCI7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IGhvdXIpIHsvLyB1cCB0byBhbiBob3VyXHJcblx0XHRcdGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmL21pbnV0ZSk7XHJcblx0XHRcdGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAtIChtaW51dGVzICogbWludXRlKSkvMTAwMCk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAobWludXRlcyA8IDIgPyBcImEgbWludXRlXCIgOiBtaW51dGVzICsgXCIgbWludXRlcyBcIikgKyAoc2Vjb25kcyA+IDAgPyBcIiBhbmQgXCIgKyBzZWNvbmRzICsgXCIgc2Vjb25kcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gZGF5KSB7Ly8gdXAgdG8gYSBkYXlcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcihkaWZmL2hvdXIpO1xyXG5cdFx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoaG91cnMgKiBob3VyKSkvbWludXRlKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdCA9IChob3VycyA8IDIgPyBcImFuIGhvdXJcIiA6IGhvdXJzICsgXCIgaG91cnMgXCIpICsgKG1pbnV0ZXMgPiAwID8gXCIgYW5kIFwiICsgbWludXRlcyArIFwiIG1pbnV0ZXMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IHdlZWspIHsvLyB1cCB0byBhIHdlZWtcclxuXHRcdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKGRpZmYvZGF5KTtcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAtIChkYXlzICogZGF5KSkvaG91cik7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAoZGF5cyA8IDIgPyBcImEgZGF5XCIgOiBkYXlzICsgXCIgZGF5cyBcIikgKyAoaG91cnMgPiAwID8gXCIgYW5kIFwiICsgaG91cnMgKyBcIiBob3VycyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gbW9udGgpIHsvLyB1cCB0byBhIG1vbnRoXHJcblx0XHRcdGxldCB3ZWVrcyA9IE1hdGguZmxvb3IoZGlmZi93ZWVrKTtcclxuXHRcdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKChkaWZmIC0gKHdlZWtzICogd2VlaykpL2RheSk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAod2Vla3MgPCAyID8gXCJhIHdlZWtcIiA6IHdlZWtzICsgXCIgd2Vla3MgXCIpICsgKGRheXMgPiAwID8gXCIgYW5kIFwiICsgZGF5cyArIFwiIGRheXMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IHllYXIpIHsvLyB1cCB0byBhIHdlZWtcclxuXHRcdFx0bGV0IG1vbnRocyA9IE1hdGguZmxvb3IoZGlmZi9tb250aCk7XHJcblx0XHRcdGxldCB3ZWVrcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAobW9udGhzICogbW9udGgpKS93ZWVrKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChtb250aHMgPCAyID8gXCJhIG1vbnRoXCIgOiBtb250aHMgKyBcIiBtb250aHMgXCIpICsgKHdlZWtzID4gMCA/IFwiIGFuZCBcIiArIHdlZWtzICsgXCIgd2Vla3MgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgeWVhcnMgPSBNYXRoLmZsb29yKGRpZmYveWVhcik7XHJcblx0XHRcdGxldCBtb250aHMgPSBNYXRoLmZsb29yKChkaWZmIC0gKHllYXJzICogeWVhcikpL21vbnRoKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9ICh5ZWFycyA8IDIgPyBcImEgeWVhclwiIDogeWVhcnMgKyBcIiB5ZWFycyBcIikgKyAobW9udGhzID4gMCA/IFwiIGFuZCBcIiArIG1vbnRocyArIFwiIG1vbnRocyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBMYXN0VXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9sYXN0dXBkYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtMYXN0VXBkYXRlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTGFzdFVwZGF0ZUNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTGFzdFVwZGF0ZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBMYXN0VXBkYXRlSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnbGFzdHVwZGF0ZScsIExhc3RVcGRhdGVDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWtlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgXHJcbiAgICAgICAgaWQ9J2xpa2Ute3tpZH19JyBcclxuICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICBjbGFzcz1cImxpa2VcIiBcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIiBcclxuICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIFxyXG4gICAgICAgIChjbGljayk9J3RvZ2dsZUNvdW50KCRldmVudCknPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwXCIgKm5nSWY9XCJ0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtdXAgc2VsZWN0ZWRcIiAqbmdJZj1cInRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLWRvd25cIiAqbmdJZj1cIiF0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtZG93biBzZWxlY3RlZFwiICpuZ0lmPVwiIXRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRzXCIgKm5nSWY9XCJzaG93Q291bnRcIiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVyU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L2E+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgICAgIC5saWtlIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAgIC5saWtlIC5jb3VudHN7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAgICAgLmxpa2UgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgICAgIC5saWtlIC5mYS5zZWxlY3RlZCB7Y29sb3I6IGdyZWVuO31cclxuICAgICAgICAubGlrZTpob3ZlciwgLmxpa2U6aG92ZXIgLmZhLCAubGlrZTpob3ZlciAuZmEuc2VsZWN0ZWR7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpa2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRhdGE6IGFueTtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93Q291bnQ6IGJvb2xlYW47XHJcbiAgICB0aHVtYnN1cDogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB0aHVtYnMgPSBcIlwiO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvdW50ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLnRodW1ic3VwID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxICYmIGFyZ3NbMV0gPT09ICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aHVtYnMgPSB0aGlzLnRodW1ic3VwID8gXCJ0aHVtYnMtdXAtaXRlbXNcIiA6IFwidGh1bWJzLWRvd24taXRlbXNcIjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gKHRoaXMuZ2V0SXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKSAhPT0gbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIGtleXVwKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZEl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgc2F2ZWRJdGVtcy5wdXNoKGlkKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShzYXZlZEl0ZW1zKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShbaWRdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc291cmNlICsrO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1vdmVJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIGNvbnN0IGkgPSBzYXZlZEl0ZW1zLmluZGV4T2YoaWQpO1xyXG4gICAgICAgICAgc2F2ZWRJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICBcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudGh1bWJzLCBKU09OLnN0cmluZ2lmeShzYXZlZEl0ZW1zKSk7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZSAtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXM6IGFueVtdID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBjb25zdCBpID0gc2F2ZWRJdGVtcy5pbmRleE9mKGlkKTtcclxuICAgIFxyXG4gICAgICAgICAgZm91bmQgPSBpIDwgMCA/IG51bGwgOiBzYXZlZEl0ZW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybWF0dGVyU291cmNlKCkge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291cmNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc291cmNlID4gMTAwMCkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCA9ICh0aGlzLnNvdXJjZS8xMDAwKS50b0ZpeGVkKDEpICsgXCIga1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHRvZ2dsZUNvdW50KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5nZXRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgYWN0aW9uOiB0aGlzLnRodW1ic1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTGlrZUNvbXBvbmVudCB9IGZyb20gJy4vbGlrZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGlrZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0xpa2VDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0xpa2VDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpa2VJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGlrZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2xpa2UnLCBMaWtlQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGluay1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIFtocmVmXT1cInNvdXJjZVwiIFxyXG4gICAgICAgIFt0YXJnZXRdPVwidGFyZ2V0XCIgXHJcbiAgICAgICAgW3RleHRDb250ZW50XT1cInRpdGxlXCIgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgXHJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+PC9hPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICBcclxuICAgICAgICBpZighdGhpcy50aXRsZSB8fCAhdGhpcy50aXRsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYSBsaW5rLlxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSB0cmFuc2Zvcm1lZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdsaW5rJyB9KVxyXG5leHBvcnQgY2xhc3MgTGlua1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBsaW5rOnRhcmdldDp0ZXh0IG9yIGxpbms6dGV4dCBvciBsaW5rXHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGlua1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpbmtQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5rUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSkge1xyXG4gICAgICAgIGlmKCF0aXRsZSB8fCAhdGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgdGl0bGUgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8YSBocmVmPSdcIitzb3VyY2UrXCInIHRhcmdldD0nXCIrdGFyZ2V0K1wiJz5cIit0aXRsZStcIjwvYT5cIjtcclxuICAgIH1cclxuICAgIGFycmF5VG9JbWFnTGluayhzb3VyY2VzLCB0YXJnZXQsIHRpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvTGluayhzb3VyY2UsIHRhcmdldCwgXCJcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9JbWFnTGluayhzb3VyY2UsIHRhcmdldCwgdGl0bGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IExpbmtDb21wb25lbnQgfSBmcm9tICcuL2xpbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlua1BpcGUgfSBmcm9tICcuL2xpbmsucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtMaW5rQ29tcG9uZW50LExpbmtQaXBlXSxcclxuICBleHBvcnRzOiBbTGlua0NvbXBvbmVudCxMaW5rUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTGlua0NvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlua0ludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBMaW5rSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0xpbmtQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdsaW5rJywgTGlua0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdsaW5rJywgTGlua1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Bob25lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAgKm5nSWY9XCJpc0xpbmtcIiBbaHJlZl09XCIndGVsOicgKyBub3JtYWxpemVTb3VyY2UoKVwiIChrZXl1cCk9J2tleXVwKCRldmVudCknIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVkU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFpc0xpbmtcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtcGhvbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImZvcm1hdHRlZFNvdXJjZSgpXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgOmhvc3QgYTpob3ZlciAuZmEtcGhvbmV7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIDpob3N0IC5mYXttYXJnaW46IDAgNXB4O31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzTGluazogYm9vbGVhbjtcclxuICAgIGZvcm1hdHRpbmc6IGJvb2xlYW47XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuaXNMaW5rPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gPT09ICd0cnVlJyA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZz0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA9PT0gJ3RydWUnIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBub3JtYWxpemVTb3VyY2UoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291cmNlLnJlcGxhY2UoL1tcXCBcXC1cXC5cXChcXClcXCtdL2csICcnKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICcxJyA/IHJlc3VsdC5zdWJzdHJpbmcoMSkgOiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIHJlc3VsdCArICc7ZXh0PScgKyByZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHJlc3VsdC5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSByZXN1bHQuc2xpY2UoMTApO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEnICsgYiArICc7ZXh0PScgKyBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZm9ybWF0dGVkU291cmNlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5mb3JtYXR0aW5nKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuc291cmNlLnJlcGxhY2UoL1tcXCBcXC1cXC5cXChcXClcXCtdL2csICcnKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIHJlc3VsdC5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCBcIigkMSkkMi0kM1wiKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSByZXN1bHQuc2xpY2UoMTApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyBiLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sIFwiKCQxKSQyLSQzXCIpOyBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCs9ICgnIGV4dC4gJyArIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gZW1haWwgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncGhvbmUnIH0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBwcmVwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBob25lUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdPT09J3RydWUnIDogZmFsc2UsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gPT09ICd0cnVlJyA6IGZhbHNlKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBwaG9uZUZyb21TdHJpbmcoc291cmNlLCBsaW5rLCBmb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gbGluayA/IFxyXG4gICAgICAgICAgICBcIjxhIGhyZWY9J3RlbDpcIiArIHRoaXMubm9ybWFsaXplU291cmNlKHNvdXJjZSkgKyBcIic+PHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPjxzcGFuPlwiICsgKGZvcm1hdCA/IHRoaXMuZm9ybWF0dGVkU291cmNlKHNvdXJjZSkgOiBzb3VyY2UpICsgXCI8L3NwYW4+PC9hPlwiIDpcclxuICAgICAgICAgICAgXCI8c3Bhbj48c3BhbiBjbGFzcz0nZmEgZmEtcGhvbmUnIHN0eWxlPSdtYXJnaW46IDAgNXB4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPjxzcGFuPlwiICsgKGZvcm1hdCA/IHRoaXMuZm9ybWF0dGVkU291cmNlKHNvdXJjZSkgOiBzb3VyY2UpICsgXCI8L3NwYW4+PC9zcGFuPlwiO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IGxpbmsgPSAoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IGZhbHNlKTtcclxuICAgICAgICBjb25zdCBmb3JtYXQgPSAoKGFyZ3MgJiYgYXJncy5sZW5ndGg+MSkgPyBhcmdzWzFdIDogZmFsc2UpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGhvbmVGcm9tU3RyaW5nKHNvdXJjZSwgbGluaywgZm9ybWF0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5waG9uZUZyb21TdHJpbmcoaXRlbSwgbGluaywgZm9ybWF0KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG5vcm1hbGl6ZVNvdXJjZShzb3VyY2U6IHN0cmluZykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzb3VyY2UucmVwbGFjZSgvW1xcIFxcLVxcLlxcKFxcKVxcK10vZywgJycpO1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgcmVzdWx0ICsgJztleHQ9JyArIHJlc3VsdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgZSA9IHJlc3VsdC5zbGljZSgxMCk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICcrMScgKyBiICsgJztleHQ9JyArIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZvcm1hdHRlZFNvdXJjZShzb3VyY2U6IHN0cmluZykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzb3VyY2UucmVwbGFjZSgvW1xcIFxcLVxcLlxcKFxcKVxcK10vZywgJycpO1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgcmVzdWx0LnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sIFwiKCQxKSQyLSQzXCIpOyBcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgZSA9IHJlc3VsdC5zbGljZSgxMCk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgYi5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCBcIigkMSkkMi0kM1wiKTsgXHJcbiAgICAgICAgICAgIHJlc3VsdCs9ICgnIGV4dC4gJyArIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFBob25lQ29tcG9uZW50IH0gZnJvbSAnLi9waG9uZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaG9uZVBpcGUgfSBmcm9tICcuL3Bob25lLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUGhvbmVDb21wb25lbnQsIFBob25lUGlwZV0sXHJcbiAgZXhwb3J0czogW1Bob25lQ29tcG9uZW50LCBQaG9uZVBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1Bob25lQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQaG9uZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBQaG9uZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtQaG9uZVBpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3Bob25lJywgUGhvbmVDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigncGhvbmUnLCBQaG9uZVBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JhdGluZy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPSdyYXRpbmcnPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZScgKm5nRm9yPVwibGV0IHggb2YgdmFsdWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXItaGFsZicgYXJpYS1oaWRkZW49J3RydWUnICpuZ0lmPVwiZmxvYXQgIT0gdmFsdWVcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz0ncmF0ZS12YWx1ZScgW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogYW55W10gPSBbXTtcclxuICAgIGZsb2F0OiBhbnk7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLmZsb2F0ID0gcGFyc2VGbG9hdChzb3VyY2UpO1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUludChzb3VyY2UsIDEwKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYSByYWl0aW5nIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3JhaXRpbmcnIH0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSYXRpbmdQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgcmF0ZVN0cmluZyhzb3VyY2UpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHNvdXJjZSwgMTApO1xyXG4gICAgICAgIGNvbnN0IGZsb2F0ID0gcGFyc2VGbG9hdChzb3VyY2UpO1xyXG5cclxuICAgICAgICBsZXQgeCA9IFwiPHNwYW4gY2xhc3M9J3JhdGluZyc+XCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrICkge1xyXG4gICAgICAgICAgICB4ICs9IFwiPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXInIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBmbG9hdCAhPT0gdmFsdWUgKSB7XHJcbiAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3Rhci1oYWxmJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggKz0gXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3JhdGUtdmFsdWUnPlwiICsgc291cmNlICsgXCI8L3NwYW4+XCI7XHJcblxyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF0ZVN0cmluZyhzb3VyY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnJhdGVTdHJpbmcoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcmF0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhdGluZ1BpcGUgfSBmcm9tICcuL3JhdGluZy5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1JhdGluZ0NvbXBvbmVudCwgUmF0aW5nUGlwZV0sXHJcbiAgZXhwb3J0czogW1JhdGluZ0NvbXBvbmVudCwgUmF0aW5nUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUmF0aW5nQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUmF0aW5nSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1JhdGluZ1BpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3JhdGluZycsIFJhdGluZ0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdyYXRpbmcnLCBSYXRpbmdQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQsIFBpcGVTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VsZWN0IHRhYmluZGV4PVwiMFwiIFttdWx0aXBsZV09XCJtdWx0aXNlbGVjdCA/IHRydWU6bnVsbFwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uc1wiIFtzZWxlY3RlZF09XCJzb3VyY2UgPT09IHggPyB0cnVlIDogbnVsbFwiICBbdmFsdWVdPVwieFwiIFt0ZXh0Q29udGVudF09XCJ4XCI+PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgb3B0aW9uczogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcbiAgc2VydmljZTogUGlwZVNlcnZpY2VDb21wb25lbnQ7XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgY2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbiAgY2hhbmdlKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICBpdGVtOiB0aGlzLmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuc2VydmljZS5nZXREYXRhRm9yKHRoaXMubmFtZSwgdGhpcy5pZCwgZGF0YSk7XHJcbiAgICB0aGlzLm11bHRpc2VsZWN0ID0gYXJncy5sZW5ndGggPyBhcmdzWzBdID09PSB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2VsZWN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2VsZWN0Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtTZWxlY3RDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTZWxlY3RJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdzZWxlY3QnLCBTZWxlY3RDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzaGFyZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fScgXHJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgY2xhc3M9J3NoYXJlLWl0ZW0tdGlwcycgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPSd0b2dnbGVTaGFyZSgpJz5cclxuICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc2hhcmUtYWx0XCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzaGFyZVwiPnNoYXJlPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gaWQ9J3NoYXJlLWNvbW1lbnQte3tpZH19LXRpcHMnIGNsYXNzPSd0aXBzJyAqbmdJZj0nc2hvdWxkRGlzcGxheSc+XHJcbiAgICAgIDxzcGFuIGNsYXNzPSdzb2NpYWwtcmVmZXJhbCc+XHJcbiAgICAgICAgPGEgKm5nRm9yPVwibGV0IHNoYXJlIG9mIHNoYXJlTGlzdFwiIFxyXG4gICAgICAgICAgICAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJ1xyXG4gICAgICAgICAgICAoY2xpY2spPSdjaGFuZ2Uoc2hhcmUpJ1xyXG4gICAgICAgICAgICBbY2xhc3NdPSdzaGFyZS5pY29uJyB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgIFtocmVmXT0nc2hhcmUuaHJlZic+PHNwYW4gY2xhc3M9J29mZi1zY3JlZW4nIFt0ZXh0Q29udGVudF09XCJzaGFyZS50aXRsZVwiPjwvc3Bhbj48L2E+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwczpob3ZlciB7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyAuZmEge21hcmdpbjogMDt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzOmhvdmVyIC5mYXtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAuc2hhcmUtaXRlbS10aXBzIC5zaGFyZXttYXJnaW4tbGVmdDogNXB4O31cclxuICAgIC50aXBzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCAuZmEge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMCAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIC5mYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc2hvdWxkRGlzcGxheSA9IGZhbHNlO1xyXG4gICAgc291cmNlOiBzdHJpbmc7IC8vIGl0IHNob3VsZCBiZSBhIGxpbmsgcmVmZXJlbmNlIHRvIHdoYXQgaXMgYmVpbmcgc2hhcmVkLlxyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaGFyZUxpc3QgPSBbXTsgLy8gbGlzdCBvZiBzaXRlcyB0byBzaG93IG9uIHNoYXJlIHZpZXcuXHJcbiAgICBcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc2hhcmVJbmZvKHR5cGUsIGFkZHJlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpY29uOiAnZmEgZmEtJyArIHR5cGUsXHJcbiAgICAgICAgICAgIGhyZWY6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2hhcmUgd2l0aCAnKyB0eXBlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnRpdGxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVTaGFyZSgpIHtcclxuICAgICAgICB0aGlzLnNob3VsZERpc3BsYXkgPSAhdGhpcy5zaG91bGREaXNwbGF5O1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ1NoYXJlIG9wdGlvbnMnLFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLnNob3VsZERpc3BsYXkgPyAnb3BlbicgOiAnY2xvc2UnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICBcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IChhcmdzWzBdIGluc3RhbmNlb2YgQXJyYXkpID8gYXJnc1swXSA6IGFyZ3M7XHJcbiAgICAgICAgbGlzdC5tYXAoIChhcmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhcmcgPT09ICdmYWNlYm9vaycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2ZhY2Vib29rJywgJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3R3aXR0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd0d2l0dGVyJywgJ2h0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdsaW5rZWRpbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2xpbmtlZGluJywnaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP3RpdGxlPSZhbXA7dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ29vZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAncGludGVyZXN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cDovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9saW5rLz91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdkaWdnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZGlnZycsICdodHRwOi8vZGlnZy5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2dldC1wb2NrZXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnZXQtcG9ja2V0JywgJ2h0dHBzOi8vZ2V0cG9ja2V0LmNvbS9lZGl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3hpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd4aW5nJywgJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJnVybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3N0dW1ibGV1cG9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnc3R1bWJsZXVwb24nLCAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NoYXJlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2hhcmVDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1NoYXJlQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3NoYXJlJywgU2hhcmVDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzcGFuLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BhbkNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNwYW5Db21wb25lbnQgfSBmcm9tICcuL3NwYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NwYW5Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTcGFuQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtTcGFuQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFuSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNwYW5JbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdzcGFuJywgU3BhbkNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGV4dC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwidGV4dC13cmFwcGVyXCIgKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgICA8dGV4dGFyZWEgI25hbWVFZGl0b3JcclxuICAgICAgICBbaWRdPVwiaWRcIlxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIlxyXG4gICAgICAgIFthdHRyLm1heGxlbmd0aF09XCJsaW1pdCA/IGxpbWl0IDogbnVsbFwiXHJcbiAgICAgICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICAgICAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCIgXHJcbiAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSc+PC90ZXh0YXJlYT5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJjb3VudGVyXCIgY2xhc3M9XCJjb3VudGVyXCIgXHJcbiAgICAgICAgW3RleHRDb250ZW50XT1cImxpbWl0ID8gKGxpbWl0IC0gc291cmNlLmxlbmd0aCkgKyAnIHJlbWFpbmluZycgOiBzb3VyY2UubGVuZ3RoICsgJyB0eXBlZCdcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiAjbmFtZUhvbGRlclxyXG4gICAgICAgICpuZ0lmPSchZWRpdE5hbWUnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChjbGljayk9J2NsaWNrKCRldmVudCknXHJcbiAgICAgICAgKGtleXVwKT0nZm9jdXMoJGV2ZW50KSdcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZVwiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAubG9ja2VkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAgICAgXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtd3JhcHBlcntib3gtc2l6aW5nOiBib3JkZXItYm94O2Rpc3BsYXk6dGFibGU7d2lkdGg6IDEwMCU7fVxyXG4gICAgICAgIC50ZXh0LXdyYXBwZXIgdGV4dGFyZWEge2JveC1zaXppbmc6IGJvcmRlci1ib3g7ZGlzcGxheTpibG9jaztjdXJzb3I6IGJlYW07d2lkdGg6IDEwMCU7fVxyXG4gICAgICAgIC5jb3VudGVye2Rpc3BsYXk6IHRhYmxlO2Zsb2F0OnJpZ2h0O2NvbG9yOiAjZGRkO31cclxuICAgICAgICA6aG9zdCB7Ym94LXNpemluZzogYm9yZGVyLWJveDt3aWR0aDogMTAwJTtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICA6aG9zdCAubG9ja2VkOmhvdmVye2JvcmRlcjogMXB4IHNvbGlkICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcm93cyA9IDQ7XHJcbiAgbGltaXQgPSAwO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgY291bnRlciA9IGZhbHNlO1xyXG4gIG9sZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lRWRpdG9yXCIpXHJcbiAgbmFtZUVkaXRvcjtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVIb2xkZXJcIilcclxuICBuYW1lSG9sZGVyXHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuICBrZXl1cChldmVudDogYW55KSB7ICAgIFxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKChjb2RlID09PSA0OCkgfHwgKGNvZGUgPT09IDgpKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICgoKGNvZGUgPiA0OCkgJiYgKGNvZGUgPD0gOTApKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSA5NikgJiYgKGNvZGUgPD0gMTExKSkgfHwgKGNvZGUgPT0gMzIpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDE4NikgJiYgKGNvZGUgPD0gMjIyKSkpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5saW1pdCB8fCB0aGlzLnNvdXJjZS5sZW5ndGggPCB0aGlzLmxpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSB8fCAoY29kZSA9PT0gMjcpICkge1xyXG4gICAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICBpdGVtOiB0aGlzLm9sZFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgaWYgKHRoaXMubmFtZUhvbGRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lSG9sZGVyLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSw5OSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYmx1cihldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICBpdGVtOiB0aGlzLm9sZFZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9sZFZhbHVlID0gU3RyaW5nKHRoaXMuc291cmNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZm9jdXMoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICB0aGlzLmVkaXROYW1lID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgaWYgKHRoaXMubmFtZUVkaXRvcikge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgfVxyXG4gICAgfSw5OSk7XHJcbn1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBzb3VyY2U7XHJcbiAgICB0aGlzLnJvd3MgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiA0O1xyXG4gICAgdGhpcy5saW1pdCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAwO1xyXG4gICAgdGhpcy5jb3VudGVyID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuaW1wb3J0IHsgQ29tbW9uUGlwZXNNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLXBpcGVzLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvbW1vblBpcGVzTW9kdWxlLmZvclJvb3QoKV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVGV4dENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RleHRDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1RleHRDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGV4dEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3RleHQnLCBUZXh0Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFibGUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8dGFibGUgW2lkXT1cImlkXCIgY2xhc3M9XCJwaXBlZC10YWJsZVwiPlxyXG4gICAgICAgIDxjYXB0aW9uICpuZ0lmPVwibmFtZVwiIFt0ZXh0Q29udGVudF09XCJuYW1lXCI+PC9jYXB0aW9uPlxyXG4gICAgICAgIDx0cj48dGggc2NvcGU9XCJjb2xcIiAqbmdGb3I9XCJsZXQgaGVhZGVyIG9mIGhlYWRlcnNcIiBbdGV4dENvbnRlbnRdPVwiaGVhZGVyXCI+PC90aD48L3RyPlxyXG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3NcIj48dGQgKm5nRm9yPVwibGV0IGhlYWRlciBvZiBoZWFkZXJzXCIgW3RleHRDb250ZW50XT1cInJvd1toZWFkZXJdXCI+PC90ZD48L3RyPlxyXG4gICAgPC90YWJsZT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3QgLnBpcGVkLXRhYmxlIHtwYWRkaW5nOiAwO3dpZHRoOiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7fVxyXG4gICAgICAgIDpob3N0IC5waXBlZC10YWJsZSBjYXB0aW9uIHtiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNWUyO2JvcmRlci1yYWRpdXM6IDJweDtjb2xvcjogIzFiMWIxYjtjYXB0aW9uLXNpZGU6IHRvcDtmb250LXNpemU6IDE0cHg7cGFkZGluZzogNXB4IDZweDttYXJnaW4tYm90dG9tOiAxNXB4O3RleHQtYWxpZ246IGxlZnQ7fVxyXG4gICAgICAgIDpob3N0IC5waXBlZC10YWJsZSB0aCB7dXNlci1zZWxlY3Q6IG5vbmU7aGVpZ2h0OiAyNHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt3aGl0ZS1zcGFjZTogbm93cmFwO2ZvbnQtd2VpZ2h0OiBub3JtYWw7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtmb250LXNpemU6IDE0cHg7cGFkZGluZy10b3A6IDZweDtwYWRkaW5nLWJvdHRvbTogNnB4O3RleHQtYWxpZ246IGxlZnQ7fVxyXG4gICAgICAgIDpob3N0IC5waXBlZC10YWJsZSB0ZCB7cGFkZGluZy1sZWZ0OiAzcHg7bWluLWhlaWdodDogMjFweDt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGhlYWRlcnMgPSBbXTtcclxuICAgIHJvd3MgPSBbXTtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmlkPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiAnJztcclxuICAgICAgICB0aGlzLm5hbWU9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnJvd3MucHVzaChzb3VyY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEhlYWRlcnMoc291cmNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gc291cmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRIZWFkZXJzKHNvdXJjZVswXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2UubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93cy5wdXNoKHt2YWx1ZTogaXRlbX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVycy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2goe3ZhbHVlOiBzb3VyY2V9KTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRIZWFkZXJzKG9iajogYW55KSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5tYXAoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gYWRkcmVzcyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd0YWJsZScgfSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUYWJsZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6ICcnLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogdW5kZWZpbmVkKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGlkPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiAnJztcclxuICAgICAgICBjb25zdCBuYW1lID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gW107XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkVGFibGUoc291cmNlLCByb3dzLCBoZWFkZXJzKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCI8dGFibGUgc3R5bGU9J3dpZHRoOiAxMDAlJyBpZD0nXCIgKyBpZCArIFwiJz5cIiArIChuYW1lID8gXCI8Y2FwdGlvbiBzdHlsZT0ndGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6ICNjM2U1ZTI7Jz5cIiArIG5hbWUgKyBcIjwvY2FwdGlvbj5cIiA6IFwiXCIpICsgXCI8dHI+XCI7XHJcbiAgICAgICAgaGVhZGVycy5tYXAoXHJcbiAgICAgICAgICAgIChoZWFkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAoXCI8dGggc3R5bGU9J3RleHQtYWxpZ246IGxlZnQ7Zm9udC13ZWlnaHQ6bm9ybWFsO3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7JyBzY29wZT0nY29sJz5cIiArIGhlYWRlciArIFwiPC90aD5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc3VsdCArPSBcIjwvdHI+XCI7XHJcbiAgICAgICAgcm93cy5tYXAoXHJcbiAgICAgICAgICAgIChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjx0cj5cIjtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChoZWFkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IChcIjx0ZD5cIiArIHJvd1toZWFkZXJdICsgXCI8L3RkPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiPC90cj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiPC90YWJsZT5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYnVpbGRUYWJsZShzb3VyY2U6IGFueSwgcm93czogYW55W10sIGhlYWRlcnM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaChzb3VyY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEhlYWRlcnMoc291cmNlLCBoZWFkZXJzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcm93cyA9IHNvdXJjZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SGVhZGVycyhzb3VyY2VbMF0sIGhlYWRlcnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goe3ZhbHVlOiBpdGVtfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm93cy5wdXNoKHt2YWx1ZTogc291cmNlfSk7XHJcbiAgICAgICAgICAgIGhlYWRlcnMucHVzaCgndmFsdWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEhlYWRlcnMob2JqOiBhbnksIGhlYWRlcnM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqKS5tYXAoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZVBpcGUgfSBmcm9tICcuL3RhYmxlLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnQsIFRhYmxlUGlwZV0sXHJcbiAgZXhwb3J0czogW1RhYmxlQ29tcG9uZW50LCBUYWJsZVBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1RhYmxlQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYWJsZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBUYWJsZVBpcGVcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3RhYmxlJywgVGFibGVDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigndGFibGUnLCBUYWJsZVBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZpZGVvLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHZpZGVvIGNvbnRyb2xzPVwidHJ1ZVwiIFxyXG4gICAgICAgIChwbGF5aW5nKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoZW5kZWQpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChwYXVzZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKHNlZWtlZCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGVycm9yKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbc3JjXT1cInNvdXJjZVwiIFxyXG4gICAgICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFxyXG4gICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgICAgICBbdGl0bGVdPVwiYWx0XCI+PC92aWRlbz5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgd2lkdGg6IHN0cmluZztcclxuICAgIGhlaWdodDogc3RyaW5nO1xyXG4gICAgYWx0OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5hbHQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYWx0IHx8ICF0aGlzLmFsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHQgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiBldmVudC50eXBlLFxyXG4gICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZXZlbnQudGFyZ2V0LmF1dG9wbGF5LFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGV2ZW50LnRhcmdldC5jb250cm9scyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBldmVudC50YXJnZXQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBlbmRlZDogZXZlbnQudGFyZ2V0LmVuZGVkLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGV2ZW50LnRhcmdldC5lcnJvcixcclxuICAgICAgICAgICAgICAgIHBhdXNlZDogZXZlbnQudGFyZ2V0LnBhdXNlZCxcclxuICAgICAgICAgICAgICAgIG11dGVkOiBldmVudC50YXJnZXQubXV0ZWQsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZTogZXZlbnQudGFyZ2V0LmN1cnJlbnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgdm9sdW1lOiBldmVudC50YXJnZXQudm9sdW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBpbWFnZSBkaXNwbGF5LiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndmlkZW8nIH0pXHJcbmV4cG9ydCBjbGFzcyBWaWRlb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyB2aWRlbzoyMDBweDphdXRvOmFsdHRleHQgT1IgdmlkZW86MjAwcHg6YWx0ZXJuYXRlLXRleHQgT1IgdmlkZW86MjAwcHggT1IgdmlkZW9cclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZpZGVvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBpZighYWx0IHx8ICFhbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPHZpZGVvIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgc3R5bGU9XFwnXCIrIHdpZHRoICsgaGVpZ2h0ICsgXCJcXCcgdGl0bGU9XFwnXCIrYWx0K1wiXFwnICBjb250cm9scz1cXCd0cnVlXFwnIC8+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvVmlkZW8oc291cmNlcywgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoOnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IFwid2lkdGg6IFwiICsgYXJnc1swXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBoZWlnaHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IFwiaGVpZ2h0OiBcIiArIGFyZ3NbMV0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWx0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBhbHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvVmlkZW8oc291cmNlLCB3aWR0aCwgaGVpZ2h0LCBcIlwiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVmlkZW9Db21wb25lbnQgfSBmcm9tICcuL3ZpZGVvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZpZGVvUGlwZSB9IGZyb20gJy4vdmlkZW8ucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtWaWRlb0NvbXBvbmVudCwgVmlkZW9QaXBlXSxcclxuICBleHBvcnRzOiBbVmlkZW9Db21wb25lbnQsIFZpZGVvUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVmlkZW9Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZGVvSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFZpZGVvSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1ZpZGVvUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgndmlkZW8nLCBWaWRlb0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd2aWRlbycsIFZpZGVvUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENvbW1vblBpcGVzTW9kdWxlIH0gZnJvbSAnLi9jb21tb24vY29tbW9uLXBpcGVzLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBBZGRyZXNzSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2FkZHJlc3MvYWRkZXNzLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgQXVkaW9JbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vYXVkaW8vYXVkaW8tcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDYWxlbmRhckludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhci1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IENoZWNrYm94SW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgRW1haWxJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vZW1haWwvZW1haWwtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGb250SW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2ZvbnQvZm9udC1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEltYWdlSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2ltYWdlL2ltYWdlLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgSW5wdXRJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vaW5wdXQvaW5wdXQtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJbnB1dEdyb3VwSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2lucHV0Z3JvdXAvaW5wdXRncm91cC1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEpzb25JbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vanNvbi9qc29uLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9sYXN0dXBkYXRlL2xhc3R1cGRhdGUtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBMaWtlSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2xpa2UvbGlrZS1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IExpbmtJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vbGluay9saW5rLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgUGhvbmVJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vcGhvbmUvcGhvbmUtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSYXRpbmdJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vcmF0aW5nL3JhdGluZy1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbGVjdEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgU2hhcmVJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vc2hhcmUvc2hhcmUtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTcGFuSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3NwYW4vc3Bhbi1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRhYmxlSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3RhYmxlL3RhYmxlLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgVGV4dEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi90ZXh0L3RleHQtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBWaWRlb0ludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi92aWRlby92aWRlby1waXBlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIENvbW1vblBpcGVzTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEFkZHJlc3NJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBBdWRpb0ludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIENhbGVuZGFySW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQ2hlY2tib3hJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBFbWFpbEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEZvbnRJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBJbWFnZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIElucHV0SW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgSW5wdXRHcm91cEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEpzb25JbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBMYXN0VXBkYXRlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTGlrZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIExpbmtJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBQaG9uZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFJhdGluZ0ludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNlbGVjdEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNoYXJlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgU3BhbkludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRhYmxlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVGV4dEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFZpZGVvSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbW1vblBpcGVzTW9kdWxlLFxyXG4gICAgQWRkcmVzc0ludG9QaXBlTW9kdWxlLFxyXG4gICAgQXVkaW9JbnRvUGlwZU1vZHVsZSxcclxuICAgIENhbGVuZGFySW50b1BpcGVNb2R1bGUsXHJcbiAgICBDaGVja2JveEludG9QaXBlTW9kdWxlLFxyXG4gICAgRW1haWxJbnRvUGlwZU1vZHVsZSxcclxuICAgIEZvbnRJbnRvUGlwZU1vZHVsZSxcclxuICAgIEltYWdlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBJbnB1dEludG9QaXBlTW9kdWxlLFxyXG4gICAgSW5wdXRHcm91cEludG9QaXBlTW9kdWxlLFxyXG4gICAgSnNvbkludG9QaXBlTW9kdWxlLFxyXG4gICAgTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlLFxyXG4gICAgTGlrZUludG9QaXBlTW9kdWxlLFxyXG4gICAgTGlua0ludG9QaXBlTW9kdWxlLFxyXG4gICAgUGhvbmVJbnRvUGlwZU1vZHVsZSxcclxuICAgIFJhdGluZ0ludG9QaXBlTW9kdWxlLFxyXG4gICAgU2VsZWN0SW50b1BpcGVNb2R1bGUsXHJcbiAgICBTaGFyZUludG9QaXBlTW9kdWxlLFxyXG4gICAgU3BhbkludG9QaXBlTW9kdWxlLFxyXG4gICAgVGFibGVJbnRvUGlwZU1vZHVsZSxcclxuICAgIFRhYmxlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBUZXh0SW50b1BpcGVNb2R1bGUsXHJcbiAgICBWaWRlb0ludG9QaXBlTW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW50b1BpcGVNb2R1bGUge1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztxQ0EyQ3lCLElBQUksWUFBWSxFQUFFOzs7Ozs7OztJQUV2QyxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRWpELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs7WUFDYixNQUFNLENBQUMsR0FBRyw2QkFBNkIsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJ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QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBRSxJQUFJLENBQUMsQ0FBQztZQUVuRCxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsUUFBUSxLQUFLLEtBQUssR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDeEc7YUFBSyxJQUFHLElBQUksSUFBSSxLQUFLLEVBQUU7O1lBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDOztZQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBRSxHQUFHLENBQUMsQ0FBQztZQUVuRCxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsU0FBUyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDekc7YUFBSyxJQUFHLElBQUksSUFBSSxJQUFJLEVBQUU7O1lBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNwQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBRSxJQUFJLENBQUMsQ0FBQztZQUV2RCxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxNQUFNLEdBQUcsVUFBVSxLQUFLLEtBQUssR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDaEg7YUFBTTs7WUFDTixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDbEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUUsS0FBSyxDQUFDLENBQUM7WUFFdkQsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsS0FBSyxHQUFHLFNBQVMsS0FBSyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1NBQy9HO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDZDs7O1lBMUVELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7OztLQUdUO3lCQUVHOzs7U0FHQzthQUVSOzs7Ozs7O0FDZkQ7Ozs7SUFxQkUsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0tBQzNEOzs7O0lBUkQsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFBO0tBQ0Y7OztZQWRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDOzs7O1lBUlEsYUFBYSx1QkFpQlAsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7OztBQ3JCbkM7O3NCQXVDYSxFQUFFO3FDQUNVLElBQUksWUFBWSxFQUFFOzs7Ozs7OztJQUV2QyxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixHQUFHLG1CQUFtQixDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0tBQzlEOzs7OztJQUNILEtBQUssQ0FBQyxLQUFLOztRQUNQLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFekIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtLQUNKOzs7OztJQUNPLE9BQU8sQ0FBQyxFQUFVOztRQUN0QixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssRUFBRTs7WUFDVCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0wsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFHLENBQUM7Ozs7OztJQUVYLFVBQVUsQ0FBQyxFQUFVOztRQUN6QixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssRUFBRTs7WUFDVCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUNyQyxNQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXhCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sRUFBRyxDQUFDO1NBQ2hCOzs7Ozs7SUFFRyxPQUFPLENBQUMsRUFBVTs7UUFDdEIsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBQ2hELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLEtBQUssRUFBRTs7WUFDVCxNQUFNLFVBQVUsR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUM1QyxNQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWpDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLEtBQUssQ0FBQzs7Ozs7SUFFZixlQUFlOztRQUNYLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRTtZQUNwQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBO1NBQ2hEO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDakI7Ozs7O0lBQ0QsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7WUFDakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0tBQ0o7OztZQXJITixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O1NBYUw7eUJBRUQ7Ozs7Ozs7U0FPQzthQUVSOzs7Ozs7O0FDN0JEOzs7O0lBcUJFLFlBQW9DLElBQW1CO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDL0M7Ozs7SUFSRCxPQUFPLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUE7S0FDRjs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hCLGVBQWUsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7Ozs7WUFSUSxhQUFhLHVCQWlCUCxNQUFNLFNBQUMsYUFBYTs7Ozs7Ozs7Ozs7O0FDckJuQzs7cUNBdUJ5QixJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7SUFFdkMsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdEQsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7WUFDbEMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QztLQUNKOzs7OztJQUNELEtBQUssQ0FBQyxLQUFVOztRQUNaLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDYixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0tBQ0o7Ozs7O0lBQ0QsTUFBTSxDQUFDLEtBQVU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0tBQ047OztZQWxESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7OztzQ0FLd0I7eUJBRTlCOztTQUVDO2FBRVI7Ozs7Ozs7QUNaRDs7OztJQUlJLE9BQU8sb0JBQW9COztRQUN2QixNQUFNLENBQUMsR0FBRyxVQUFXLE9BQVksRUFBRSxJQUFjLEVBQUUsUUFBYyxFQUFFLElBQVU7O1lBRXpFLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5RDtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLElBQUksUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0osQ0FBQztRQUNGLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7Ozs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLO1FBQzlCLElBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOztZQUN4QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLFdBQVcsR0FBQyxNQUFNLEdBQUMsWUFBWSxHQUFDLE1BQU0sR0FBQyxJQUFJLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQztLQUNuRTs7Ozs7OztJQUNELGVBQWUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUs7O1FBQ2xDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7S0FDakI7Ozs7OztJQUNELFNBQVMsQ0FBQyxNQUFXLEVBQUUsR0FBRyxJQUFXOztRQUVqQyxNQUFNLE1BQU0sR0FBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7O1FBQzNELE1BQU0sS0FBSyxHQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFOUQsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sWUFBWSxLQUFLLENBQUMsRUFBRTtZQUM1RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3REOzs7WUF6Q0osSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7Ozs7OztBQ050Qjs7OztJQXNCRSxZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUMxRTs7OztJQVRELE9BQU8sT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUN0QixDQUFBO0tBQ0Y7OztZQWRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBQyxRQUFRLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBQyxRQUFRLENBQUM7Z0JBQ2pDLGVBQWUsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7Ozs7WUFSUSxhQUFhLHVCQWlCUCxNQUFNLFNBQUMsYUFBYTs7Ozs7Ozs7Ozs7O0FDdEJuQzs7cUNBNkJ5QixJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7SUFFdkMsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNqRTs7OztJQUNELGVBQWU7O1FBQ1gsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFFMUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN0QixNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQzlDO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTs7WUFDM0IsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O1lBQzlCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0IsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sTUFBTSxDQUFDO0tBQ2pCOzs7O0lBQ0QsZUFBZTs7UUFDWCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFFMUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtnQkFDdEIsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7O2dCQUMzQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Z0JBQzlCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDakUsTUFBTSxLQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMzQjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDakI7Ozs7O0lBQ0QsS0FBSyxDQUFDLEtBQVU7O1FBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDSjs7Ozs7SUFDRCxNQUFNLENBQUMsS0FBVTtRQUNiLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixDQUFDLENBQUM7S0FDTjs7O1lBaEZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFOzs7Ozs7Ozs7S0FTVDt5QkFFRzs7OztTQUlDO2FBRVI7Ozs7Ozs7QUNuQkQ7Ozs7SUFJSSxPQUFPLG9CQUFvQjs7UUFDdkIsTUFBTSxDQUFDLEdBQUcsVUFBVyxPQUFZLEVBQUUsSUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVOztZQUV6RSxPQUFPLElBQUksU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUcsTUFBTSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3ZJLENBQUM7UUFDRixPQUFPLENBQUMsQ0FBQztLQUNaOzs7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTTtRQUNoQyxPQUFPLElBQUk7WUFDUCxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyw4REFBOEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxhQUFhO1lBQ2xMLHdGQUF3RixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0tBQ3RLOzs7Ozs7SUFDRCxTQUFTLENBQUMsTUFBVyxFQUFFLEdBQUcsSUFBVzs7UUFDakMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7O1FBQ3ZELE1BQU0sTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEO2FBQU07O1lBQ0gsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDekQsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUM7U0FDakI7S0FDSjs7Ozs7SUFDTyxlQUFlLENBQUMsTUFBYzs7UUFDbEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuRCxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUUxRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDOUM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFOztZQUMzQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7WUFDOUIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxNQUFNLENBQUM7Ozs7OztJQUVWLGVBQWUsQ0FBQyxNQUFjOztRQUNsQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBRTFELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pFO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTs7WUFDM0IsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O1lBQzlCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0IsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sS0FBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLE1BQU0sQ0FBQzs7OztZQXJEckIsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7Ozs7OztBQ0x2Qjs7OztJQXNCRSxZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUM1RTs7OztJQVRELE9BQU8sT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUN2QixDQUFBO0tBQ0Y7OztZQWRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7Z0JBQ3BDLGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7Ozs7WUFSUSxhQUFhLHVCQWlCUCxNQUFNLFNBQUMsYUFBYTs7Ozs7Ozs7Ozs7O0FDdEJuQzs7cUJBeUJtQixFQUFFOzs7Ozs7OztJQUlqQixTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztRQUNyQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7S0FDSjs7O1lBakNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7OztLQU1UO3lCQUVHOzs7OztTQUtDO2FBRVI7Ozs7Ozs7QUNqQkQ7Ozs7SUFJSSxPQUFPLG9CQUFvQjs7UUFDdkIsTUFBTSxDQUFDLEdBQUcsVUFBVyxPQUFZLEVBQUUsSUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVO1lBQ3pFLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2xELENBQUM7UUFDRixPQUFPLENBQUMsQ0FBQztLQUNaOzs7OztJQUNELFVBQVUsQ0FBQyxNQUFNOztRQUNiLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7O1FBQ25DLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFFakMsSUFBSSxDQUFDLEdBQUcsdUJBQXVCLENBQUM7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRztZQUM3QixDQUFDLElBQUkscURBQXFELENBQUE7U0FDN0Q7UUFDRCxJQUFLLEtBQUssS0FBSyxLQUFNLEVBQUU7WUFDbkIsQ0FBQyxJQUFJLDBEQUEwRCxDQUFBO1NBQ2xFO1FBQ0QsQ0FBQyxJQUFJLGtDQUFrQyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFFN0QsT0FBTyxDQUFDLENBQUM7S0FDWjs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRSxHQUFHLElBQVc7UUFDakMsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sWUFBWSxLQUFLLENBQUMsRUFBRTtZQUM1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7YUFBTTs7WUFDSCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUM7U0FDakI7S0FDSjs7O1lBbENKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7Ozs7Ozs7QUNMekI7Ozs7SUFzQkUsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7S0FDOUU7Ozs7SUFURCxPQUFPLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDeEIsQ0FBQTtLQUNGOzs7WUFkRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDO2dCQUN0QyxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDOzs7O1lBUlEsYUFBYSx1QkFpQlAsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7OztBQ3RCbkM7SUE2QkU7MkJBTmMsS0FBSztxQ0FJSyxJQUFJLFlBQVksRUFBRTtLQUUxQjs7Ozs7SUFFaEIsS0FBSyxDQUFDLEtBQUs7UUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3hCOzs7OztJQUNELE1BQU0sQ0FBQyxLQUFLO1FBQ1YsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDOUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7S0FDSjs7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQzNEOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7OztLQUlUO3lCQUVHOztTQUVDO2FBRVI7Ozs7O29DQVdFLE1BQU0sU0FBQyx1QkFBdUI7Ozs7Ozs7QUMxQmpDOzs7O0lBcUJFLFlBQW9DLElBQW1CO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFSRCxPQUFPLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUE7S0FDRjs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzFCLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7Ozs7WUFSUSxhQUFhLHVCQWlCUCxNQUFNLFNBQUMsYUFBYTs7Ozs7Ozs7Ozs7O0FDckJuQzs7NkJBK0RvQixLQUFLO3lCQUlULEVBQUU7cUNBRU8sSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7SUFFL0IsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPO1FBQzNCLE9BQU87WUFDSCxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUk7WUFDckIsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsYUFBYSxHQUFFLElBQUk7U0FDN0IsQ0FBQTs7Ozs7O0lBRUwsS0FBSyxDQUFDLEtBQUs7O1FBQ1AsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDSjs7Ozs7SUFDRCxNQUFNLENBQUMsS0FBVTtRQUNiLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSztTQUNwQixDQUFDLENBQUM7S0FDTjs7OztJQUNELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzVCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxlQUFlO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sR0FBRyxPQUFPO1NBQzlDLENBQUMsQ0FBQztLQUNOOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUV6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7UUFDckIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLEdBQUc7WUFDVixJQUFLLEdBQUcsS0FBSyxVQUFVLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLHVDQUF1QyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDbEc7aUJBQU0sSUFBSyxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSwyQ0FBMkMsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQ3JHO2lCQUFNLElBQUssR0FBRyxLQUFLLFVBQVUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsc0RBQXNELEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTthQUNoSDtpQkFBTSxJQUFLLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLG9DQUFvQyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDbEc7aUJBQU0sSUFBSyxHQUFHLEtBQUssV0FBVyxFQUFFO2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSw0Q0FBNEMsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQzFHO2lCQUFNLElBQUssR0FBRyxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsNkJBQTZCLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTthQUNwRjtpQkFBTSxJQUFLLEdBQUcsS0FBSyxZQUFZLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLGlDQUFpQyxHQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDOUY7aUJBQU0sSUFBSyxHQUFHLEtBQUssTUFBTSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSw2Q0FBNkMsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQ3BHO2lCQUFNLElBQUssR0FBRyxLQUFLLGFBQWEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsd0NBQXdDLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTthQUN0RztTQUNKLENBQUMsQ0FBQztLQUNOOzs7WUEvSEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JiO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvQ1I7YUFDSjs7Ozs7OztBQzdERDs7OztJQXFCRSxZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0tBQ2pEOzs7O0lBUkQsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFBO0tBQ0Y7OztZQWRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUN6QixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDOzs7O1lBUlEsYUFBYSx1QkFpQlAsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7OztBQ3JCbkM7Ozs7Ozs7SUFrQkksU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtLQUN2Qjs7O1lBakJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsc0NBQXNDO3lCQUU1Qzs7U0FFQzthQUVSOzs7Ozs7O0FDWEQ7Ozs7SUFxQkUsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztLQUMvQzs7OztJQVJELE9BQU8sT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQTtLQUNGOzs7WUFkRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDeEIsZUFBZSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7OztZQVJRLGFBQWEsdUJBaUJQLE1BQU0sU0FBQyxhQUFhOzs7Ozs7Ozs7Ozs7QUNyQm5DOzs7O0lBbUVFLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBZi9CLENBQUM7cUJBQ0EsQ0FBQzt3QkFDRSxLQUFLO3VCQUNOLEtBQUs7cUNBVVMsSUFBSSxZQUFZLEVBQUU7S0FJekM7Ozs7O0lBQ0QsS0FBSyxDQUFDLEtBQVU7O1FBQ2QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNsQzthQUFNLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUNsQyxDQUFDLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUM5QyxDQUFDLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNsQztTQUNOO2FBQU0sSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFLENBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUV0QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztvQkFDOUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtnQkFDZixVQUFVLENBQUM7b0JBQ1QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUMzRTtpQkFDRixFQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ1A7U0FDRjtLQUNGOzs7OztJQUNELElBQUksQ0FBQyxLQUFVO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO2dCQUM5QixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3BCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztLQUNGOzs7OztJQUNELEtBQUssQ0FBQyxLQUFVOztRQUNkLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtLQUNGOzs7OztJQUNELEtBQUssQ0FBQyxLQUFVO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixVQUFVLENBQUM7WUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDM0U7U0FDRixFQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ1Q7Ozs7Ozs7SUFFQyxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDbEQ7OztZQXpJRixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQlQ7eUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQkM7YUFFUjs7OztZQTlDOEIsUUFBUTs7O3lCQTBEcEMsU0FBUyxTQUFDLFlBQVk7eUJBR3RCLFNBQVMsU0FBQyxZQUFZO29DQUd0QixNQUFNLFNBQUMsdUJBQXVCOzs7Ozs7O0FDaEVqQzs7OztJQXNCRSxZQUFvQyxJQUFtQjtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBUkQsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFBO0tBQ0Y7OztZQWRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BELFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixlQUFlLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDOzs7O1lBVFEsYUFBYSx1QkFrQlAsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7OztBQ3RCbkM7O3VCQXlCYyxFQUFFO29CQUNMLEVBQUU7cUNBQ1ksSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7O0lBRXZDLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRWpELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7YUFBTSxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDaEMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxHQUFHLENBQ04sQ0FBQyxJQUFJO29CQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7aUJBQ2pDLENBQ0osQ0FBQTtnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM5QjtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO0tBQ0o7Ozs7O0lBQ08sVUFBVSxDQUFDLEdBQVE7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQ2hCLENBQUMsSUFBSTtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCLENBQ0osQ0FBQzs7OztZQXhEVCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7S0FNVDt5QkFFRzs7Ozs7U0FLQzthQUVSOzs7Ozs7O0FDakJEOzs7O0lBSUksT0FBTyxvQkFBb0I7O1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLFVBQVUsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTtZQUN4RSxPQUFPLElBQUksU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztTQUNwSCxDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUM7S0FDWjs7Ozs7O0lBQ0QsU0FBUyxDQUFDLE1BQVcsRUFBRSxHQUFHLElBQVc7O1FBQ2pDLE1BQU0sRUFBRSxHQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7UUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7UUFDbkQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDOztRQUNuQixNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztRQUN2QyxJQUFJLE1BQU0sR0FBRyxpQ0FBaUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyw4REFBOEQsR0FBRyxJQUFJLEdBQUcsWUFBWSxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN6SyxPQUFPLENBQUMsR0FBRyxDQUNQLENBQUMsTUFBTTtZQUNILE1BQU0sS0FBSyx5RkFBeUYsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDNUgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxJQUFJLE9BQU8sQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUNKLENBQUMsR0FBRztZQUNBLE1BQU0sSUFBSSxNQUFNLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FDUCxDQUFDLE1BQU07Z0JBQ0gsTUFBTSxLQUFLLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7YUFDOUMsQ0FDSixDQUFDO1lBQ0YsTUFBTSxJQUFJLE9BQU8sQ0FBQztTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLElBQUksVUFBVSxDQUFDO1FBRXJCLE9BQU8sTUFBTSxDQUFDO0tBQ2pCOzs7Ozs7O0lBQ08sVUFBVSxDQUFDLE1BQVcsRUFBRSxJQUFXLEVBQUUsT0FBaUI7UUFDMUQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNwQzthQUFNLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUNoQyxJQUFJLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBSSxHQUFHLE1BQU0sQ0FBQztnQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxDQUNOLENBQUMsSUFBSTtvQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7aUJBQzVCLENBQ0osQ0FBQTtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3pCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCOzs7Ozs7O0lBRUcsVUFBVSxDQUFDLEdBQVEsRUFBRSxPQUFpQjtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FDaEIsQ0FBQyxJQUFJO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QixDQUNKLENBQUM7Ozs7WUEvRFQsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7Ozs7OztBQ0x2Qjs7OztJQXdCRSxZQUFtQyxJQUFtQjtRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUM1RTs7OztJQVhELE9BQU8sT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxTQUFTO2FBQ1Y7U0FDRixDQUFBO0tBQ0Y7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO2dCQUNwQyxlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDOzs7O1lBUlEsYUFBYSx1QkFtQlAsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7OztBQ3hCbkM7O3FDQTRCeUIsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7O0lBRXZDLFNBQVMsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLElBQVc7UUFFekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVwRCxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVELElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7O2dCQUM5QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztnQkFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2dCQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNDO1NBQ0o7S0FDSjs7Ozs7SUFDRCxNQUFNLENBQUMsS0FBVTtRQUNiLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDNUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDL0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDL0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDL0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDekIsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDekIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDM0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDekIsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVztnQkFDckMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTthQUM5QjtTQUNKLENBQUMsQ0FBQztLQUNOOzs7WUE3REosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7S0FXVDt5QkFDUTs7S0FFUjthQUNKOzs7Ozs7O0FDaEJEOzs7O0lBSUksT0FBTyxvQkFBb0I7O1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLFVBQVcsT0FBWSxFQUFFLElBQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTs7WUFFekUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakIsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4RTtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLElBQUksU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDakQ7U0FDSixDQUFDO1FBQ0YsT0FBTyxDQUFDLENBQUM7S0FDWjs7Ozs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRztRQUNwQyxJQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTs7WUFDcEIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxlQUFlLEdBQUMsTUFBTSxHQUFDLGFBQWEsR0FBRSxLQUFLLEdBQUcsTUFBTSxHQUFHLGFBQWEsR0FBQyxHQUFHLEdBQUMsMEJBQTBCLENBQUM7S0FDOUc7Ozs7Ozs7O0lBQ0QsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUc7O1FBQ3BDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0tBQ2pCOzs7Ozs7SUFDRCxTQUFTLENBQUMsTUFBVyxFQUFFLEdBQUcsSUFBVzs7UUFFakMsTUFBTSxLQUFLLEdBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7O1FBQzVFLE1BQU0sTUFBTSxHQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQzs7UUFDbEYsTUFBTSxHQUFHLEdBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztLQUV2RDs7O1lBNUNKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Ozs7Ozs7QUNOdkI7Ozs7SUFzQkUsWUFBb0MsSUFBbUI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7S0FDNUU7Ozs7SUFURCxPQUFPLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDdkIsQ0FBQTtLQUNGOzs7WUFkRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO2dCQUNwQyxlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDOzs7O1lBUlEsYUFBYSx1QkFpQlAsTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJuQzs7O1lBMkJDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7b0JBQzNCLHFCQUFxQixDQUFDLE9BQU8sRUFBRTtvQkFDL0IsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3QixzQkFBc0IsQ0FBQyxPQUFPLEVBQUU7b0JBQ2hDLHNCQUFzQixDQUFDLE9BQU8sRUFBRTtvQkFDaEMsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3QixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtvQkFDN0IsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3Qix3QkFBd0IsQ0FBQyxPQUFPLEVBQUU7b0JBQ2xDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtvQkFDNUIsd0JBQXdCLENBQUMsT0FBTyxFQUFFO29CQUNsQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtvQkFDNUIsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzlCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDOUIsbUJBQW1CLENBQUMsT0FBTyxFQUFFO29CQUM3QixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtvQkFDN0Isa0JBQWtCLENBQUMsT0FBTyxFQUFFO29CQUM1QixtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7aUJBQzlCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLHdCQUF3QjtvQkFDeEIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixtQkFBbUI7aUJBQ3BCO2dCQUNELGVBQWUsRUFBRSxFQUFFO2dCQUNuQixTQUFTLEVBQUUsRUFDVjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=