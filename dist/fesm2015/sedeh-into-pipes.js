import { __decorate, __param } from 'tslib';
import { EventEmitter, Component, Pipe, Injectable, Inject, NgModule, CUSTOM_ELEMENTS_SCHEMA, Renderer, Output, ViewChild, HostListener, ViewContainerRef, ElementRef, ComponentFactoryResolver, Input, Directive } from '@angular/core';
import { CommonModule, SlicePipe, DecimalPipe, CurrencyPipe, LowerCasePipe, UpperCasePipe, JsonPipe, DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

let AddressComponent = class AddressComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] : true;
        this.hasTarget = args.length > 1 ? args[1] : false;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        if (this.isLink) {
            const x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
            this.url = x.replace("\\s+", "+");
        }
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: event.type
        });
    }
};
AddressComponent = __decorate([
    Component({
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
        styles: [`:host .address {float: left;margin-right: 4px;}
        :host .google-map {float: left;margin-right: 4px;}
        :host .fa {float:left;color: #f00;margin: 0 5px;}
        :host .off-screen {position: absolute;left: -999em;}
        :host a:hover .fa-map-marker{color: #fabdab;}
        :host span{float-left;}
        :host {display: table;float:left;min-height: 23px}
        @media print {
            :host {
                text-decoration: none;
            }
            :host .fa-map-marker {display: none;}
        }
        `]
    })
], AddressComponent);

var AddressPipe_1;
let AddressPipe = AddressPipe_1 = class AddressPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            return new AddressPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    }
    transform(source, ...args) {
        const isLink = args.length ? args[0] : true;
        const hasTarget = args.length > 1 ? args[1] : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source, isLink, hasTarget);
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(this.addressFromString(item, isLink, hasTarget));
            });
            return result;
        }
    }
    addressFromString(source, isLink, hasTarget) {
        if (isLink) {
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
};
AddressPipe = AddressPipe_1 = __decorate([
    Pipe({ name: 'address' })
], AddressPipe);

let ComponentPool = class ComponentPool {
    constructor() {
        this.registeredPipes = {};
        this.registeredComponents = {};
        this.registeredServices = {};
    }
    registerPipeTransformation(name, pipe) {
        this.registeredPipes[name] = pipe;
    }
    registeredForPipeTransformationNamed(key) {
        return this.registeredPipes[key] !== undefined;
    }
    registeredPipeTransformation(key, content, args, callback, data) {
        const pipe = this.registeredPipes[key];
        return pipe ? pipe(content, args, callback, data) : null;
    }
    removePipeTransformation(key) {
        delete this.registeredPipes[key];
    }
    registerComponent(name, component) {
        this.registeredComponents[name] = component;
    }
    registeredForComponentWithNamed(name) {
        return this.registeredComponents[name] !== undefined;
    }
    registeredComponent(name, resolver, viewRefrence, el) {
        const component = this.registeredComponents[name];
        let result = null;
        if (component) {
            let componentFactory = resolver.resolveComponentFactory(component);
            const componentRef = viewRefrence.createComponent(componentFactory);
            const domElem = componentRef.hostView.rootNodes[0];
            el.appendChild(domElem);
            domElem.setAttribute("class", "into");
            result = componentRef.instance;
        }
        return result;
    }
    removeComponent(name) {
        delete this.registeredComponents[name];
    }
    registerServiceForComponent(name, service) {
        this.registeredServices[name] = service;
    }
    registeredServiceForComponent(name) {
        return this.registeredServices[name];
    }
    registeredForServiceNamed(name) {
        return this.registeredServices[name] !== undefined;
    }
    removeServiceForComponent(name) {
        delete this.registeredServices[name];
    }
};
ComponentPool = __decorate([
    Injectable()
], ComponentPool);

var AddressIntoPipeModule_1;
let AddressIntoPipeModule = AddressIntoPipeModule_1 = class AddressIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('address', AddressComponent);
        pool.registerPipeTransformation('address', AddressPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: AddressIntoPipeModule_1,
            providers: [
                AddressPipe
            ]
        };
    }
};
AddressIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
AddressIntoPipeModule = AddressIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [AddressComponent, AddressPipe],
        exports: [AddressComponent, AddressPipe],
        entryComponents: [AddressComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], AddressIntoPipeModule);

let AudioComponent = class AudioComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.source = source;
    }
    isPlaying(audio) {
        return !!(audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
    }
    keyup(event) {
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
};
AudioComponent = __decorate([
    Component({
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
], AudioComponent);

var AudioPipe_1;
let AudioPipe = AudioPipe_1 = class AudioPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            return new AudioPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    }
    stringToAudio(source) {
        return "<audio src=\'" + source + "\' controls=\'true\' />";
    }
    arrayToAudio(sources) {
        const result = [];
        sources.map((source) => {
            result.push(this.stringToAudio(source));
        });
        return result;
    }
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToAudio(source);
        }
        return this.arrayToAudio(source);
    }
};
AudioPipe = AudioPipe_1 = __decorate([
    Pipe({ name: 'audio' })
], AudioPipe);

var AudioIntoPipeModule_1;
let AudioIntoPipeModule = AudioIntoPipeModule_1 = class AudioIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('audio', AudioComponent);
        pool.registerPipeTransformation('audio', AudioPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: AudioIntoPipeModule_1,
            providers: [
                AudioPipe
            ]
        };
    }
};
AudioIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
AudioIntoPipeModule = AudioIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [AudioComponent, AudioPipe],
        exports: [AudioComponent, AudioPipe],
        entryComponents: [AudioComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], AudioIntoPipeModule);

let CalendarComponent = class CalendarComponent {
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
    keyup(event) {
        event.stopPropagation();
        event.preventDefault();
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    popdatepicker(event) {
        event.stopPropagation();
        event.preventDefault();
        this.showCalendar = !this.showCalendar;
    }
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
    isSelected(date) {
        let index = -1;
        for (let i = 0; i < this.selectedDays.length; i++) {
            const selectedDate = this.selectedDays[i];
            if (this.isSameDay(date, selectedDate)) {
                index = i;
            }
        }
        return index > -1;
    }
    isSelectedMonth(date) {
        return this.isSameMonth(date, this.currentDate);
    }
    toggleSelectedDates(day) {
        let found = false;
        if (this.multiselect) {
            for (let i = 0; i < this.selectedDays.length; i++) {
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
    // actions from calendar
    prevMonth(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
        this.generateCalendar();
    }
    nextMonth(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
        this.generateCalendar();
    }
    prevYear(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() - 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    }
    nextYear(event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    }
    // generate the calendar grid
    generateCalendar() {
        const dates = this.fillDates(this.currentDate);
        const weeks = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    }
    isSameDay(a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    }
    isSameMonth(a, b) {
        return a.getYear() === b.getYear() &&
            a.getMonth() === b.getMonth();
    }
    fillDates(currentDate) {
        const cm = new Date(currentDate);
        const tm = new Date();
        const firstDay = new Date(cm.getFullYear(), cm.getMonth(), 1);
        const firstOfMonth = firstDay.getDay();
        const firstDayOfGrid = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstOfMonth);
        const start = firstDayOfGrid.getDate();
        const list = [];
        for (let i = start; i < (start + 42); i++) {
            const d = new Date(firstDayOfGrid.getFullYear(), firstDayOfGrid.getMonth(), i);
            list.push({
                today: this.isSameDay(tm, d),
                selected: this.isSelected(d),
                date: d
            });
        }
        return list;
    }
};
CalendarComponent.ctorParameters = () => [
    { type: Renderer }
];
__decorate([
    Output("onIntoComponentChange")
], CalendarComponent.prototype, "onIntoComponentChange", void 0);
CalendarComponent = __decorate([
    Component({
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
        @media print {
            .calendar-box .popper {
                display: none;
            }
        }
        `]
    })
], CalendarComponent);

var CalendarIntoPipeModule_1;
let CalendarIntoPipeModule = CalendarIntoPipeModule_1 = class CalendarIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('calendar', CalendarComponent);
    }
    static forRoot() {
        return {
            ngModule: CalendarIntoPipeModule_1,
            providers: []
        };
    }
};
CalendarIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
CalendarIntoPipeModule = CalendarIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [CalendarComponent],
        exports: [CalendarComponent],
        entryComponents: [CalendarComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], CalendarIntoPipeModule);

let CheckboxComponent = class CheckboxComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    keyup(event) {
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    click(event) {
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
    transform(source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.useFont = args.length > 1 ? Boolean(args[1]) : false;
        this.onOff = args.length > 2 ? Boolean(args[2]) : false;
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
    }
};
__decorate([
    ViewChild("check", { static: false })
], CheckboxComponent.prototype, "check", void 0);
__decorate([
    ViewChild("uncheck", { static: false })
], CheckboxComponent.prototype, "uncheck", void 0);
__decorate([
    Output("onIntoComponentChange")
], CheckboxComponent.prototype, "onIntoComponentChange", void 0);
CheckboxComponent = __decorate([
    Component({
        selector: 'checkbox-component',
        template: `
    <span *ngIf="useFont" class="check-font">
      <span *ngIf="source === ideal" 
          #check tabindex="0" 
          class="fa" 
          [class.fa-toggle-on]="onOff" 
          [class.fa-check]="!onOff" 
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
      <span *ngIf="source !== ideal"
          #uncheck tabindex="0" 
          class="fa" 
          [class.fa-toggle-off]="onOff" 
          [class.fa-close]="!onOff" 
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
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
    })
], CheckboxComponent);

var CheckboxIntoPipeModule_1;
let CheckboxIntoPipeModule = CheckboxIntoPipeModule_1 = class CheckboxIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('checkbox', CheckboxComponent);
    }
    static forRoot() {
        return {
            ngModule: CheckboxIntoPipeModule_1,
            providers: []
        };
    }
};
CheckboxIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
CheckboxIntoPipeModule = CheckboxIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [CheckboxComponent],
        exports: [CheckboxComponent],
        entryComponents: [CheckboxComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], CheckboxIntoPipeModule);

let EmailComponent = class EmailComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.isLink = args.length ? args[0] : true;
        this.source = source;
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "mail-to",
            item: event.type
        });
    }
};
EmailComponent = __decorate([
    Component({
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
        @media print {
            :host a { text-decoration: none;}
            :host a .fa-envelope {display: none;}
            :host .fa-envelope {display: none;}
        }
        `]
    })
], EmailComponent);

var EmailPipe_1;
let EmailPipe = EmailPipe_1 = class EmailPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // email
            return new EmailPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    }
    emailFromString(source, isLink) {
        let x;
        if (isLink) {
            x = "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
        }
        else {
            x = "<span><span class='fa fa-envelope' style='margin: 0 5px' aria-hidden='true'></span><span>" + source + "</span></span>";
        }
        return x;
    }
    transform(source, ...args) {
        const isLink = args.length ? args[0] : true;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source, isLink);
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(this.emailFromString(item, isLink));
            });
            return result;
        }
    }
};
EmailPipe = EmailPipe_1 = __decorate([
    Pipe({ name: 'email' })
], EmailPipe);

var EmailIntoPipeModule_1;
let EmailIntoPipeModule = EmailIntoPipeModule_1 = class EmailIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('email', EmailComponent);
        pool.registerPipeTransformation('email', EmailPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: EmailIntoPipeModule_1,
            providers: [EmailPipe]
        };
    }
};
EmailIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
EmailIntoPipeModule = EmailIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [EmailComponent, EmailPipe],
        exports: [EmailComponent, EmailPipe],
        entryComponents: [EmailComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], EmailIntoPipeModule);

let FontComponent = class FontComponent {
    transform(source, data, args) {
        this.source = source;
        this.font = args[0];
        this.location = args.length > 1 ? args[1] : "left";
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    }
};
FontComponent = __decorate([
    Component({
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
    })
], FontComponent);

var FontPipe_1;
let FontPipe = FontPipe_1 = class FontPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // font:fa fa-check:left:*
            return new FontPipe_1().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
        };
        return x;
    }
    fontFromString(font, location, action, content) {
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
    }
    transform(source, ...args) {
        const font = args.length ? "<span class=\'" + args[0] + "\' style='margin: 0 5px' aria-hidden='true'></span>" : "";
        const location = args.length > 1 ? args[1] : "";
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        const content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(this.fontFromString(font, location, action, item));
            });
            return result;
        }
    }
};
FontPipe = FontPipe_1 = __decorate([
    Pipe({ name: 'font' })
], FontPipe);

var FontIntoPipeModule_1;
let FontIntoPipeModule = FontIntoPipeModule_1 = class FontIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('font', FontComponent);
        pool.registerPipeTransformation('font', FontPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: FontIntoPipeModule_1,
            providers: [FontPipe]
        };
    }
};
FontIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
FontIntoPipeModule = FontIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [FontComponent, FontPipe],
        exports: [FontComponent, FontPipe],
        entryComponents: [FontComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], FontIntoPipeModule);

let ImageComponent = class ImageComponent {
    constructor() {
        this.magnification = 0;
        this.onIntoComponentChange = new EventEmitter();
    }
    enter(event) {
        if (this.popLocation) {
            const image = event.target.children[0];
            const popper = event.target.children[1];
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
    hoverOut(event) {
        if (this.popLocation) {
            const popper = event.target.children[1];
            popper.style.display = 'none';
        }
        else if (this.magnification) {
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
    hoverViewPort(event) {
        if (this.magnification && !this.popLocation) {
            const image = event.target.tagName === 'IMG' ? event.target : event.target.children[0];
            if (image) {
                image.style.top = -(event.layerY * this.magnification) + "px";
                image.style.left = -(event.layerX * this.magnification) + "px";
            }
        }
    }
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
                const q = source.indexOf("?");
                const t = q < 0 ? source : source.substring(0, q);
                const d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    }
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: event.type,
            item: { x: event.layerX, y: event.layerY }
        });
    }
};
__decorate([
    HostListener('mouseenter', ['$event'])
], ImageComponent.prototype, "enter", null);
__decorate([
    HostListener('mouseout', ['$event'])
], ImageComponent.prototype, "hoverOut", null);
__decorate([
    HostListener('mousemove', ['$event'])
], ImageComponent.prototype, "hoverViewPort", null);
ImageComponent = __decorate([
    Component({
        selector: 'image-component',
        template: `<img [src]="source" 
        [style.width]="width" 
        [style.height]="height" 
        [title]="alt" /><img *ngIf="popLocation" 
        [src]="source" class='popper'
        [style.width]="(origWidth * magnification) + 'px'" 
        [style.height]="(origHeight * magnification) + 'px'" />`,
        styles: [`
    :host {display:block;overflow:hidden;margin:0;position:relative;float:left;min-width: 23px;min-height: 23px}
    :host .popper{position:absolute;pointer-events: none;display: none;z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;border-radius: 4px}
    :host img{position:relative;pointer-events: none;}
    `]
    })
], ImageComponent);

var ImagePipe_1;
let ImagePipe = ImagePipe_1 = class ImagePipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // image:200px:auto:alttext OR image:200px:alternate-text OR image:200px OR image
            if (args.length > 3) {
                return new ImagePipe_1().transform(content, args[1], args[2], args[3]);
            }
            else if (args.length > 2) {
                return new ImagePipe_1().transform(content, args[1], args[2]);
            }
            else if (args.length > 1) {
                return new ImagePipe_1().transform(content, args[1]);
            }
            else {
                return new ImagePipe_1().transform(content, "");
            }
        };
        return x;
    }
    stringToImage(source, width, height, alt) {
        if (!alt || !alt.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
    }
    arrayToImage(sources, width, height, alt) {
        const result = [];
        sources.map((source) => {
            result.push(this.stringToImage(source, width, height, alt));
        });
        return result;
    }
    transform(source, ...args) {
        const width = (args && args.length) ? "width: " + args[0] + ";" : "";
        const height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        const alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");
    }
};
ImagePipe = ImagePipe_1 = __decorate([
    Pipe({ name: 'image' })
], ImagePipe);

var ImageIntoPipeModule_1;
let ImageIntoPipeModule = ImageIntoPipeModule_1 = class ImageIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('image', ImageComponent);
        pool.registerPipeTransformation('image', ImagePipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: ImageIntoPipeModule_1,
            providers: [ImagePipe]
        };
    }
};
ImageIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
ImageIntoPipeModule = ImageIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [ImageComponent, ImagePipe],
        exports: [ImageComponent, ImagePipe],
        entryComponents: [ImageComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], ImageIntoPipeModule);

let InputComponent = class InputComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.editName = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    keyup(event) {
        event.stopPropagation();
        event.preventDefault();
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
    keydown(event) {
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
    clickName(event) {
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        this.oldValue = String(this.source);
        setTimeout(() => {
            this.renderer.invokeElementMethod(this.nameEditor.nativeElement, "focus");
        }, 66);
    }
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.placeholder = args.length ? args[0] : "";
        this.formatting = args.length > 1 ? args[1] : "";
    }
};
InputComponent.ctorParameters = () => [
    { type: Renderer }
];
__decorate([
    ViewChild("nameEditor", { static: false })
], InputComponent.prototype, "nameEditor", void 0);
__decorate([
    ViewChild("nameHolder", { static: false })
], InputComponent.prototype, "nameHolder", void 0);
__decorate([
    Output("onIntoComponentChange")
], InputComponent.prototype, "onIntoComponentChange", void 0);
InputComponent = __decorate([
    Component({
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
    })
], InputComponent);

var AppendPipe_1;
let AppendPipe = AppendPipe_1 = class AppendPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // append:something
            return new AppendPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    transform(source, ...args) {
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(item + key);
            });
            return result;
        }
    }
};
AppendPipe = AppendPipe_1 = __decorate([
    Pipe({ name: 'append' })
], AppendPipe);

var ConditionalPipe_1;
let ConditionalPipe = ConditionalPipe_1 = class ConditionalPipe {
    static transformationMethod() {
        function split(item) {
            return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
        }
        const x = function (content, args, callback, data) {
            // if:=:true:fa fa-check:fa fa-bell
            const acondition = args.length > 1 ? args[1] : "";
            const value = args.length > 2 ? args[2] : "";
            const action = args.length > 3 ? args[3] : "";
            const altAction = args.length > 4 ? args[4] : "";
            let result = new ConditionalPipe_1().transform(content, acondition, value, action, altAction);
            if (typeof result === "string") {
                result = result[0] === '"' ? result.substring(1, result.length - 1) : result;
                result = split(result);
                result = callback(content, result, data);
            }
            return result;
        };
        return x;
    }
    conditionFromString(content, acondition, value, action, altAction) {
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
    transform(source, ...args) {
        const acondition = args.length ? args[0] : "";
        const value = args.length > 1 ? args[1] : "";
        const action = args.length > 2 ? args[2] : "";
        const altAction = args.length > 3 ? args[3] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        }
        else {
            const result = {};
            source.map((item) => {
                result[item] = this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result;
        }
    }
};
ConditionalPipe = ConditionalPipe_1 = __decorate([
    Pipe({ name: 'if' })
], ConditionalPipe);

var JoinPipe_1;
let JoinPipe = JoinPipe_1 = class JoinPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            //join or join:character
            return new JoinPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    transform(source, ...args) {
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source.join(args[0]);
        }
        else {
            const result = [];
            Object.keys(source).map((key) => {
                result.push(source[key]);
            });
            return result.join(args[0]);
        }
    }
};
JoinPipe = JoinPipe_1 = __decorate([
    Pipe({ name: 'join' })
], JoinPipe);

var MapPipe_1;
let MapPipe = MapPipe_1 = class MapPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // map:key1;value1/key2;value2/key3;value3
            return new MapPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    valuesFor(list, map) {
        const result = [];
        list.map((key) => {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    }
    geMapping(mapping) {
        const map = mapping;
        if (mapping.trim) {
            const map = {};
            mapping.split('/').map((key) => {
                const x = key.split(';');
                map[x[0]] = x[1];
            });
            mapping = map;
        }
        return mapping;
    }
    transform(source, ...args) {
        const map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    }
};
MapPipe = MapPipe_1 = __decorate([
    Pipe({ name: 'map' })
], MapPipe);

var MaskPipe_1;
let MaskPipe = MaskPipe_1 = class MaskPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // mask:4:*  OR mask:4
            if (args.length > 2) {
                return new MaskPipe_1().transform(content, parseInt(args[1], 10), args[2]);
            }
            else if (args.length > 1) {
                return new MaskPipe_1().transform(content, args[1]);
            }
            else {
                return new MaskPipe_1().transform(content);
            }
        };
        return x;
    }
    maskString(item, visibleDigits, maskWith) {
        const maskedSection = item ? item.slice(0, -visibleDigits) : "";
        const visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    }
    maskArray(items, visibleDigits, maskWith) {
        const result = [];
        items.map((item) => {
            result.push(this.maskString(item, visibleDigits, maskWith));
        });
        return result;
    }
    transform(source, ...args) {
        const visibleDigits = (args && args.length) ? args[0] : 4;
        const maskWith = args.length > 1 ? args[1] : '*';
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.maskString(source, visibleDigits, maskWith);
        }
        return this.maskArray(source, visibleDigits, maskWith);
    }
};
MaskPipe = MaskPipe_1 = __decorate([
    Pipe({ name: 'mask' })
], MaskPipe);

var PrependPipe_1;
let PrependPipe = PrependPipe_1 = class PrependPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // prepend:something
            return new PrependPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    transform(source, ...args) {
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return key + source;
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(key + item);
            });
            return result;
        }
    }
};
PrependPipe = PrependPipe_1 = __decorate([
    Pipe({ name: 'prepend' })
], PrependPipe);

let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
};
SanitizeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SanitizeHtmlPipe = __decorate([
    Pipe({
        name: 'sanitizeHtml'
    })
], SanitizeHtmlPipe);

var ValueOfPipe_1;
let ValueOfPipe = ValueOfPipe_1 = class ValueOfPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // valueof:key
            return new ValueOfPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }
    valueOfSingle(source, key) {
        return source[key];
    }
    valueOfMultiple(sources, key) {
        const result = [];
        sources.map((source) => {
            result.push(this.valueOfSingle(source, key));
        });
        return result;
    }
    transform(object, ...args) {
        if ((typeof object === "string") || !(object instanceof Array)) {
            return this.valueOfSingle(object, args[0]);
        }
        return this.valueOfMultiple(object, args[0]);
    }
};
ValueOfPipe = ValueOfPipe_1 = __decorate([
    Pipe({ name: 'valueof' })
], ValueOfPipe);

var WrapPipe_1;
let WrapPipe = WrapPipe_1 = class WrapPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // wrap:something:something  OR wrap:something
            return new WrapPipe_1().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
        };
        return x;
    }
    transform(source, ...args) {
        const pre = (args && args.length) ? args[0] : "";
        const post = pre.length ?
            (args.length > 1 ? args[1] : "") : pre;
        const key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(pre + item + post);
            });
            return result;
        }
    }
};
WrapPipe = WrapPipe_1 = __decorate([
    Pipe({ name: 'wrap' })
], WrapPipe);

let InToPipe = class InToPipe {
    constructor(pool) {
        this.pool = pool;
    }
    transform(content, list) {
        let result = content;
        list.split("|").map((item) => {
            result = this._transform(result, this.split(item));
        });
        return result;
    }
    split(item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter((x) => x.length);
    }
    _transform(content, args) {
        let result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this));
        return result ? result : content;
    }
};
InToPipe.ctorParameters = () => [
    { type: ComponentPool }
];
InToPipe = __decorate([
    Pipe({ name: 'into' })
], InToPipe);

let IntoDirective = class IntoDirective {
    constructor(viewRef, el, pool, componentFactoryResolver) {
        this.viewRef = viewRef;
        this.el = el;
        this.pool = pool;
        this.componentFactoryResolver = componentFactoryResolver;
        this.onComponentChange = (event) => { };
    }
    split(item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter((x) => x.length);
    }
    _transform(content, args, data) {
        let result = content;
        if (this.pool.registeredForComponentWithNamed(args[0])) {
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
    transformComponent(type, content, id, name, data, ...args) {
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
            let counter = 0;
            result = content;
            content.map((source) => {
                if (typeof source === "string" ||
                    typeof content === "number" ||
                    typeof content === "boolean" ||
                    Object.keys(content).length) {
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
    registeredComponentFor(name) {
        return this.pool.registeredComponent(name, this.componentFactoryResolver, this.viewRef, this.el.nativeElement);
    }
    ngOnInit() {
        if (this.into || this.rawContent) {
            let result = this.rawContent;
            if (this.into) {
                this.into.split("|").map((item) => {
                    result = this._transform(result, this.split(item), this.intoData);
                });
            }
            if (typeof result === "string") {
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
};
IntoDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: ComponentPool },
    { type: ComponentFactoryResolver }
];
__decorate([
    Input("rawContent")
], IntoDirective.prototype, "rawContent", void 0);
__decorate([
    Input("intoId")
], IntoDirective.prototype, "intoId", void 0);
__decorate([
    Input("intoName")
], IntoDirective.prototype, "intoName", void 0);
__decorate([
    Input("intoData")
], IntoDirective.prototype, "intoData", void 0);
__decorate([
    Input("into")
], IntoDirective.prototype, "into", void 0);
__decorate([
    Input("onComponentChange")
], IntoDirective.prototype, "onComponentChange", void 0);
IntoDirective = __decorate([
    Directive({
        selector: '[into]'
    })
], IntoDirective);

var CommonPipesModule_1;
let CommonPipesModule = CommonPipesModule_1 = class CommonPipesModule {
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
            // slice 5:12 OR slice 5
            let result;
            let start = parseInt(args[1], 10);
            let end = undefined;
            if (args.length > 2) {
                end = parseInt(args[2], 10);
            }
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
            // number:en_US:2   or number:en_US or number
            let result;
            let numLocal = "en_US";
            let numDecimal = undefined;
            if (args.length > 2) {
                numLocal = args[1];
                numDecimal = args[2];
            }
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
            // currency:en_US or currency
            let result;
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
            // lowercase
            let result;
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
            // uppercase
            let result;
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
            // json
            let result;
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
            // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
            // const date = ((typeof content === "string") || !(content instanceof Array)) ? new Date(content) : content;
            let result;
            let dateLocal = "en_US";
            let dateFormat = args[1];
            if (args.length > 2) {
                dateLocal = args[1];
                dateFormat = args[2];
            }
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
    static forRoot() {
        return {
            ngModule: CommonPipesModule_1,
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
};
CommonPipesModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
CommonPipesModule = CommonPipesModule_1 = __decorate([
    NgModule({
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
    }),
    __param(0, Inject(ComponentPool))
], CommonPipesModule);

var InputIntoPipeModule_1;
let InputIntoPipeModule = InputIntoPipeModule_1 = class InputIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('input', InputComponent);
    }
    static forRoot() {
        return {
            ngModule: InputIntoPipeModule_1,
            providers: []
        };
    }
};
InputIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
InputIntoPipeModule = InputIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, CommonPipesModule.forRoot()],
        declarations: [InputComponent],
        exports: [InputComponent],
        entryComponents: [InputComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], InputIntoPipeModule);

let InputGroupComponent = class InputGroupComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    focused(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.type === 'radio') {
            this.source = event.target.value;
        }
        else {
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
    isSelected(item) {
        const xitem = item.value ? item.value : item;
        if (this.type === 'radio') {
            return xitem === this.source;
        }
        let found = false;
        this.source.map((x) => {
            if (xitem === x) {
                found = true;
            }
        });
        return found;
    }
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.type = (source instanceof Array) ? 'checkbox' : 'radio';
    }
};
InputGroupComponent.ctorParameters = () => [
    { type: Renderer }
];
__decorate([
    Output("onIntoComponentChange")
], InputGroupComponent.prototype, "onIntoComponentChange", void 0);
InputGroupComponent = __decorate([
    Component({
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
    <span class="selected-value" [textContent]="source"></span>
    `,
        styles: [`
      :host {display:table;float:left;min-height: 23px}
      :host .selected-value {display:none}
      @media print {
        :host .selected-value {display: block;}
        :host .input-group-item {display: none;}
      }
      `]
    })
], InputGroupComponent);

var InputGroupIntoPipeModule_1;
let InputGroupIntoPipeModule = InputGroupIntoPipeModule_1 = class InputGroupIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('inputgroup', InputGroupComponent);
    }
    static forRoot() {
        return {
            ngModule: InputGroupIntoPipeModule_1,
            providers: []
        };
    }
};
InputGroupIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
InputGroupIntoPipeModule = InputGroupIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [InputGroupComponent],
        exports: [InputGroupComponent],
        entryComponents: [InputGroupComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], InputGroupIntoPipeModule);

let JsonComponent = class JsonComponent {
    transform(source, data, args) {
        this.source = source;
    }
};
JsonComponent = __decorate([
    Component({
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
    })
], JsonComponent);

var JsonIntoPipeModule_1;
let JsonIntoPipeModule = JsonIntoPipeModule_1 = class JsonIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('json', JsonComponent);
    }
    static forRoot() {
        return {
            ngModule: JsonIntoPipeModule_1,
            providers: []
        };
    }
};
JsonIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
JsonIntoPipeModule = JsonIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [JsonComponent],
        exports: [JsonComponent],
        entryComponents: [JsonComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], JsonIntoPipeModule);

let LastUpdateComponent = class LastUpdateComponent {
    transform(source, data, args) {
        this.source = source;
        this.showIcon = (args && args.length && args[0] === 'true');
    }
    formatDate() {
        const currentDate = new Date();
        const minute = 60000; // one minute
        const hour = 3600000; // one hour limit
        const day = 86400000; // 24 hours limit
        const week = 604800000; // 7 days limit
        const month = 604800000 * 4; // 7 days limit
        const year = 604800000 * 52; // 7 days limit
        let result = "";
        let diff = currentDate.getTime() - this.source.getTime();
        if (diff <= minute) { // up to a minute
            result = "seconds ago";
        }
        else if (diff <= hour) { // up to an hour
            let minutes = Math.floor(diff / minute);
            let seconds = Math.floor((diff - (minutes * minute)) / 1000);
            result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
        }
        else if (diff <= day) { // up to a day
            let hours = Math.floor(diff / hour);
            let minutes = Math.floor((diff - (hours * hour)) / minute);
            result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
        }
        else if (diff <= week) { // up to a week
            let days = Math.floor(diff / day);
            let hours = Math.floor((diff - (days * day)) / hour);
            result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
        }
        else if (diff <= month) { // up to a month
            let weeks = Math.floor(diff / week);
            let days = Math.floor((diff - (weeks * week)) / day);
            result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
        }
        else if (diff <= year) { // up to a week
            let months = Math.floor(diff / month);
            let weeks = Math.floor((diff - (months * month)) / week);
            result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
        }
        else {
            let years = Math.floor(diff / year);
            let months = Math.floor((diff - (years * year)) / month);
            result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
        }
        return result;
    }
};
LastUpdateComponent = __decorate([
    Component({
        selector: 'lastupdate-component',
        template: `
    <span *ngIf="showIcon" class="fa fa-clock-o" aria-hidden="true"></span>
    <span>{{formatDate()}}</span>
    `,
        styles: [`
        :host {display:table;float:left;min-height: 23px;position: relative}
        .fa {margin:0 5px 0 0}
        @media print {
            :host .fa-clock-o {
                display: none;
            }
        }
        `]
    })
], LastUpdateComponent);

var LastUpdateIntoPipeModule_1;
let LastUpdateIntoPipeModule = LastUpdateIntoPipeModule_1 = class LastUpdateIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('lastupdate', LastUpdateComponent);
    }
    static forRoot() {
        return {
            ngModule: LastUpdateIntoPipeModule_1,
            providers: []
        };
    }
};
LastUpdateIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
LastUpdateIntoPipeModule = LastUpdateIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [LastUpdateComponent],
        exports: [LastUpdateComponent],
        entryComponents: [LastUpdateComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], LastUpdateIntoPipeModule);

let LikeComponent = class LikeComponent {
    constructor() {
        this.thumbs = "";
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
    }
    keyup(event) {
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    addItem(id) {
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
            const savedItems = JSON.parse(saved);
            savedItems.push(id);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
        }
        else {
            localStorage.setItem(this.thumbs, JSON.stringify([id]));
        }
        this.source++;
    }
    removeItem(id) {
        const saved = localStorage.getItem(this.thumbs);
        if (saved) {
            const savedItems = JSON.parse(saved);
            const i = savedItems.indexOf(id);
            savedItems.splice(i, 1);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
            this.source--;
        }
    }
    getItem(id) {
        const saved = localStorage.getItem(this.thumbs);
        let found = null;
        if (saved) {
            const savedItems = JSON.parse(saved);
            const i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    }
    formatterSource() {
        let result = this.source;
        if (this.source > 1000) {
            result = (this.source / 1000).toFixed(1) + " k";
        }
        return result;
    }
    toggleCount(event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        if (this.selected) {
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
};
LikeComponent = __decorate([
    Component({
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
    })
], LikeComponent);

var LikeIntoPipeModule_1;
let LikeIntoPipeModule = LikeIntoPipeModule_1 = class LikeIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('like', LikeComponent);
    }
    static forRoot() {
        return {
            ngModule: LikeIntoPipeModule_1,
            providers: []
        };
    }
};
LikeIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
LikeIntoPipeModule = LikeIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [LikeComponent],
        exports: [LikeComponent],
        entryComponents: [LikeComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], LikeIntoPipeModule);

let LinkComponent = class LinkComponent {
    constructor() {
        this.poped = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.source = source;
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
        this.poper = (args && args.length > 2) ? (args[1] == 'true') : false;
        if (!this.title || !this.title.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d + 1);
        }
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
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
};
LinkComponent = __decorate([
    Component({
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
        :host {display:table;float:left;min-height: 23px; position:relative}
        :host img{z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;display:table;float:left;min-height: 23px; width: 250px;top: 22px;position:absolute;border-radius: 4px}
        @media print {
            :host a {
                text-decoration: none;
            }
        }
        `]
    })
], LinkComponent);

var LinkPipe_1;
let LinkPipe = LinkPipe_1 = class LinkPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // link:target:text
            if (args.length > 2) {
                return new LinkPipe_1().transform(content, args[1], args[2]);
            }
            else if (args.length > 1) {
                return new LinkPipe_1().transform(content, "", args[1]);
            }
            else {
                return new LinkPipe_1().transform(content, "", "");
            }
        };
        return x;
    }
    stringToLink(source, target, title) {
        if (!title || !title.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            title = d < 0 ? t : t.substring(d + 1);
        }
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
    }
    arrayToImagLink(sources, target, title) {
        const result = [];
        sources.map((source) => {
            result.push(this.stringToLink(source, target, ""));
        });
        return result;
    }
    transform(source, ...args) {
        const target = (args && args.length) ? args[0] : "";
        const title = (args && args.length > 1) ? args[1] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
    }
};
LinkPipe = LinkPipe_1 = __decorate([
    Pipe({ name: 'link' })
], LinkPipe);

var LinkIntoPipeModule_1;
let LinkIntoPipeModule = LinkIntoPipeModule_1 = class LinkIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('link', LinkComponent);
        pool.registerPipeTransformation('link', LinkPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: LinkIntoPipeModule_1,
            providers: [LinkPipe]
        };
    }
};
LinkIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
LinkIntoPipeModule = LinkIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [LinkComponent, LinkPipe],
        exports: [LinkComponent, LinkPipe],
        entryComponents: [LinkComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], LinkIntoPipeModule);

let PhoneComponent = class PhoneComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] === 'true' : false;
        this.formatting = args.length > 1 ? args[1] === 'true' : false;
    }
    normalizeSource() {
        let result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            const b = result.slice(0, 10);
            const e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    }
    formattedSource() {
        let result = this.source;
        if (this.formatting) {
            result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
            result = result[0] === '1' ? result.substring(1) : result;
            if (result.length === 10) {
                result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            }
            else if (result.length > 10) {
                const b = result.slice(0, 10);
                const e = result.slice(10);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                result += (' ext. ' + e);
            }
        }
        return result;
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: event.type
        });
    }
};
PhoneComponent = __decorate([
    Component({
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
        @media print {
            :host a { text-decoration: none }
            :host .fa-phone {display: none;}
            :host a .fa-phone {display: none;}
        }
        `]
    })
], PhoneComponent);

var PhonePipe_1;
let PhonePipe = PhonePipe_1 = class PhonePipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // prepend:something
            return new PhonePipe_1().transform(content, args.length > 1 ? args[1] === 'true' : false, args.length > 2 ? args[2] === 'true' : false);
        };
        return x;
    }
    phoneFromString(source, link, format) {
        return link ?
            "<a href='tel:" + this.normalizeSource(source) + "'><span class='fa fa-phone' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></a>" :
            "<span><span class='fa fa-phone' style='margin: 0 5px' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></span>";
    }
    transform(source, ...args) {
        const link = ((args && args.length) ? args[0] : false);
        const format = ((args && args.length > 1) ? args[1] : false);
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.phoneFromString(source, link, format);
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(this.phoneFromString(item, link, format));
            });
            return result;
        }
    }
    normalizeSource(source) {
        let result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            const b = result.slice(0, 10);
            const e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    }
    formattedSource(source) {
        let result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        }
        else if (result.length > 10) {
            const b = result.slice(0, 10);
            const e = result.slice(10);
            result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            result += (' ext. ' + e);
        }
        return result;
    }
};
PhonePipe = PhonePipe_1 = __decorate([
    Pipe({ name: 'phone' })
], PhonePipe);

var PhoneIntoPipeModule_1;
let PhoneIntoPipeModule = PhoneIntoPipeModule_1 = class PhoneIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('phone', PhoneComponent);
        pool.registerPipeTransformation('phone', PhonePipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: PhoneIntoPipeModule_1,
            providers: [PhonePipe]
        };
    }
};
PhoneIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
PhoneIntoPipeModule = PhoneIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [PhoneComponent, PhonePipe],
        exports: [PhoneComponent, PhonePipe],
        entryComponents: [PhoneComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], PhoneIntoPipeModule);

let RatingComponent = class RatingComponent {
    constructor(el) {
        this.el = el;
        this.singleStar = false;
        this.value = [];
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    click() {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'rating'
        });
    }
    transform(source, data, args) {
        this.float = parseFloat(source);
        this.singleStar = args.length ? (args[0] === 'true') : false;
        this.source = source;
        const size = parseInt(source, 10);
        for (let i = 0; i < size; i++) {
            this.value.push(i);
        }
    }
};
RatingComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    HostListener('keyup', ['$event'])
], RatingComponent.prototype, "keyup", null);
__decorate([
    HostListener('click', [])
], RatingComponent.prototype, "click", null);
RatingComponent = __decorate([
    Component({
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
        :host {display:table;float:left;min-height: 23px;cursor:pointer}
        .rating {
            display: inline-block;
        }
        @media print {
            :host .rating {
                display: none;
            }
        }
        `]
    })
], RatingComponent);

var RatingPipe_1;
let RatingPipe = RatingPipe_1 = class RatingPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            return new RatingPipe_1().transform(content, "");
        };
        return x;
    }
    rateString(source, multiStart) {
        const value = parseInt(source, 10);
        const float = parseFloat(source);
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
    transform(source, ...args) {
        const singleStar = args.length ? (args[0] === 'true') : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source, singleStar);
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(this.rateString(item, singleStar));
            });
            return result;
        }
    }
};
RatingPipe = RatingPipe_1 = __decorate([
    Pipe({ name: 'raiting' })
], RatingPipe);

var RatingIntoPipeModule_1;
let RatingIntoPipeModule = RatingIntoPipeModule_1 = class RatingIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('rating', RatingComponent);
        pool.registerPipeTransformation('rating', RatingPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: RatingIntoPipeModule_1,
            providers: [RatingPipe]
        };
    }
};
RatingIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
RatingIntoPipeModule = RatingIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [RatingComponent, RatingPipe],
        exports: [RatingComponent, RatingPipe],
        entryComponents: [RatingComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], RatingIntoPipeModule);

let NoticeComponent = class NoticeComponent {
    constructor(el) {
        this.el = el;
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    click() {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'notice'
        });
    }
    transform(source, data, args) {
        this.message = args.length ? args[0] : undefined;
        this.source = source;
        this.el.nativeElement.setAttribute('title', this.message);
    }
};
NoticeComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    HostListener('keyup', ['$event'])
], NoticeComponent.prototype, "keyup", null);
__decorate([
    HostListener('click', [])
], NoticeComponent.prototype, "click", null);
NoticeComponent = __decorate([
    Component({
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
    })
], NoticeComponent);

var NoticePipe_1;
let NoticePipe = NoticePipe_1 = class NoticePipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            return new NoticePipe_1().transform(content, "");
        };
        return x;
    }
    noticeString(source, message) {
        return `
        <span style='display:table;possition:relative;float:left' alt='` + message + `'>
          <span class='fa fa-star' aria-hidden='true'></span>
          <span style='display: table;width: 17px;height: 15px;border-radius: 50%;text-align: center;background-color: rgba(200,200,200,0.2);float: right;font-size: 0.8rem;margin-left: -5px'>` +
            source +
            ` </span>
        </span>`;
    }
    transform(source, ...args) {
        const message = args.length ? args[0] : undefined;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.noticeString(source, message);
        }
        else {
            const result = [];
            source.map((item) => {
                result.push(this.noticeString(item, message));
            });
            return result;
        }
    }
};
NoticePipe = NoticePipe_1 = __decorate([
    Pipe({ name: 'notice' })
], NoticePipe);

var NoticeIntoPipeModule_1;
let NoticeIntoPipeModule = NoticeIntoPipeModule_1 = class NoticeIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('notice', NoticeComponent);
        pool.registerPipeTransformation('notice', NoticePipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: NoticeIntoPipeModule_1,
            providers: [NoticePipe]
        };
    }
};
NoticeIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
NoticeIntoPipeModule = NoticeIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [NoticeComponent, NoticePipe],
        exports: [NoticeComponent, NoticePipe],
        entryComponents: [NoticeComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], NoticeIntoPipeModule);

let SelectComponent = class SelectComponent {
    constructor() {
        this.multiselect = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    click(event) {
        event.stopPropagation();
        event.preventDefault();
    }
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
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.multiselect = args.length ? args[0] === true : false;
    }
};
__decorate([
    Output("onIntoComponentChange")
], SelectComponent.prototype, "onIntoComponentChange", void 0);
SelectComponent = __decorate([
    Component({
        selector: 'select-component',
        template: `
    <select tabindex="0" 
      [multiple]="multiselect ? true:null" 
      (click)="click($event)" 
      (change)="change($event)">
        <option *ngFor="let x of options" 
          [attr.selected]="source === x ? 'selected' : null"  
          [value]="x" 
          [textContent]="x"></option>
    </select>
    `,
        styles: [`
      :host {display:table;float:left;min-height: 23px}
      @media print {
        :host select {
            border: 0;
        }
        :host select::-ms-expand {display: none;}
        :host select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          text-indent: 0.01px;
          text-overflow: "";
          text-indent: 1px;
          text-overflow: '';
        }
      }
      `]
    })
], SelectComponent);

var SelectIntoPipeModule_1;
let SelectIntoPipeModule = SelectIntoPipeModule_1 = class SelectIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('select', SelectComponent);
    }
    static forRoot() {
        return {
            ngModule: SelectIntoPipeModule_1,
            providers: []
        };
    }
};
SelectIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
SelectIntoPipeModule = SelectIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [SelectComponent],
        exports: [SelectComponent],
        entryComponents: [SelectComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], SelectIntoPipeModule);

let ShareComponent = class ShareComponent {
    constructor() {
        this.shouldDisplay = false;
        this.shareList = []; // list of sites to show on share view.
        this.onIntoComponentChange = new EventEmitter();
    }
    shareInfo(type, address) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with ' + type
        };
    }
    keyup(event) {
        const code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    }
    change(event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: event.title
        });
    }
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
    transform(source, data, args) {
        this.source = source;
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
};
ShareComponent = __decorate([
    Component({
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
    })
], ShareComponent);

var ShareIntoPipeModule_1;
let ShareIntoPipeModule = ShareIntoPipeModule_1 = class ShareIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('share', ShareComponent);
    }
    static forRoot() {
        return {
            ngModule: ShareIntoPipeModule_1,
            providers: []
        };
    }
};
ShareIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
ShareIntoPipeModule = ShareIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [ShareComponent],
        exports: [ShareComponent],
        entryComponents: [ShareComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], ShareIntoPipeModule);

let SpanComponent = class SpanComponent {
    transform(source, data, args) {
        this.source = source;
    }
};
SpanComponent = __decorate([
    Component({
        selector: 'span-component',
        template: `<span [textContent]="source"></span>`,
        styles: [`
        :host {display:table;float:left;min-height: 23px}
        `]
    })
], SpanComponent);

var SpanIntoPipeModule_1;
let SpanIntoPipeModule = SpanIntoPipeModule_1 = class SpanIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('span', SpanComponent);
    }
    static forRoot() {
        return {
            ngModule: SpanIntoPipeModule_1,
            providers: []
        };
    }
};
SpanIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
SpanIntoPipeModule = SpanIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [SpanComponent],
        exports: [SpanComponent],
        entryComponents: [SpanComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], SpanIntoPipeModule);

let TableComponent = class TableComponent {
    constructor() {
        this.headers = [];
        this.rows = [];
        this.onIntoComponentChange = new EventEmitter();
    }
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
    getHeaders(obj) {
        Object.keys(obj).map((item) => {
            this.headers.push(item);
        });
    }
};
TableComponent = __decorate([
    Component({
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
    })
], TableComponent);

var TablePipe_1;
let TablePipe = TablePipe_1 = class TablePipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            return new TablePipe_1().transform(content, args.length > 1 ? args[1] : '', args.length > 2 ? args[2] : undefined);
        };
        return x;
    }
    transform(source, ...args) {
        const id = args.length ? args[0] : '';
        const name = args.length > 1 ? args[1] : undefined;
        const headers = [];
        const rows = [];
        this.buildTable(source, rows, headers);
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
    getHeaders(obj, headers) {
        Object.keys(obj).map((item) => {
            headers.push(item);
        });
    }
};
TablePipe = TablePipe_1 = __decorate([
    Pipe({ name: 'table' })
], TablePipe);

var TableIntoPipeModule_1;
let TableIntoPipeModule = TableIntoPipeModule_1 = class TableIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('table', TableComponent);
        pool.registerPipeTransformation('table', TablePipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: TableIntoPipeModule_1,
            providers: [
                TablePipe
            ]
        };
    }
};
TableIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
TableIntoPipeModule = TableIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [TableComponent, TablePipe],
        exports: [TableComponent, TablePipe],
        entryComponents: [TableComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], TableIntoPipeModule);

let TextComponent = class TextComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.rows = 4;
        this.limit = 0;
        this.editName = false;
        this.counter = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    keyup(event) {
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
    focus(event) {
        this.click(event);
    }
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
    transform(source, data, args) {
        this.source = source;
        this.oldValue = source;
        this.rows = args.length ? args[0] : 4;
        this.limit = args.length > 1 ? args[1] : 0;
        this.counter = args.length > 2 ? args[2] : false;
    }
};
TextComponent.ctorParameters = () => [
    { type: Renderer }
];
__decorate([
    ViewChild("nameEditor", { static: false })
], TextComponent.prototype, "nameEditor", void 0);
__decorate([
    ViewChild("nameHolder", { static: false })
], TextComponent.prototype, "nameHolder", void 0);
__decorate([
    Output("onIntoComponentChange")
], TextComponent.prototype, "onIntoComponentChange", void 0);
TextComponent = __decorate([
    Component({
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
          min-height: 23px;
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
        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 23px;min-width: 33px;}
        :host .locked:hover{border: 1px solid #fabdab;}
        `]
    })
], TextComponent);

var TextIntoPipeModule_1;
let TextIntoPipeModule = TextIntoPipeModule_1 = class TextIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('text', TextComponent);
    }
    static forRoot() {
        return {
            ngModule: TextIntoPipeModule_1,
            providers: []
        };
    }
};
TextIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
TextIntoPipeModule = TextIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, CommonPipesModule.forRoot()],
        declarations: [TextComponent],
        exports: [TextComponent],
        entryComponents: [TextComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], TextIntoPipeModule);

let VideoComponent = class VideoComponent {
    constructor() {
        this.hasControls = true;
        this.hoverPlay = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    transform(source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        this.hasControls = (args && args.length > 3) ? (args[3] === 'true') : true;
        this.hoverPlay = (args && args.length > 4) ? (args[4] === 'true') : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                const q = source.indexOf("?");
                const t = q < 0 ? source : source.substring(0, q);
                const d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    }
    updateControls(event) {
        if (this.hasControls) {
            event.target.setAttribute('controls', 'true');
        }
        if (this.hoverPlay) {
            event.target.play();
        }
    }
    resetControls(event) {
        if (this.hoverPlay && this.isPlaying(event.target)) {
            event.target.pause();
        }
    }
    isPlaying(video) {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    }
    keyup(event) {
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
};
VideoComponent = __decorate([
    Component({
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
], VideoComponent);

var VideoPipe_1;
let VideoPipe = VideoPipe_1 = class VideoPipe {
    static transformationMethod() {
        const x = function (content, args, callback, data) {
            // video:200px:auto:alttext OR video:200px:alternate-text OR video:200px OR video
            if (args.length > 3) {
                return new VideoPipe_1().transform(content, args[1], args[2], args[3]);
            }
            else if (args.length > 2) {
                return new VideoPipe_1().transform(content, args[1], args[2]);
            }
            else if (args.length > 1) {
                return new VideoPipe_1().transform(content, args[1]);
            }
            else {
                return new VideoPipe_1().transform(content, "");
            }
        };
        return x;
    }
    stringToVideo(source, width, height, alt) {
        if (!alt || !alt.length) {
            const q = source.indexOf("?");
            const t = q < 0 ? source : source.substring(0, q);
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<video src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\'  controls=\'true\' />";
    }
    arrayToVideo(sources, width, height, alt) {
        const result = [];
        sources.map((source) => {
            result.push(this.stringToVideo(source, width, height, alt));
        });
        return result;
    }
    transform(source, ...args) {
        const width = (args && args.length) ? "width: " + args[0] + ";" : "";
        const height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        const alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToVideo(source, width, height, alt);
        }
        return this.arrayToVideo(source, width, height, "");
    }
};
VideoPipe = VideoPipe_1 = __decorate([
    Pipe({ name: 'video' })
], VideoPipe);

var VideoIntoPipeModule_1;
let VideoIntoPipeModule = VideoIntoPipeModule_1 = class VideoIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('video', VideoComponent);
        pool.registerPipeTransformation('video', VideoPipe.transformationMethod());
    }
    static forRoot() {
        return {
            ngModule: VideoIntoPipeModule_1,
            providers: [VideoPipe]
        };
    }
};
VideoIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
VideoIntoPipeModule = VideoIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [VideoComponent, VideoPipe],
        exports: [VideoComponent, VideoPipe],
        entryComponents: [VideoComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], VideoIntoPipeModule);

let SwitchComponent = class SwitchComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    keyup(event) {
        const code = event.which;
        if (code === 13) {
            event.target.click();
        }
    }
    click(event) {
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
            type: "switch",
            item: this.data
        });
        setTimeout(() => {
            if (this.check) {
                this.check.nativeElement.focus();
            }
            if (this.uncheck) {
                this.uncheck.nativeElement.focus();
            }
        }, 66);
    }
    transform(source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.onText = args.length > 1 ? args[1] : 'ON';
        this.offText = args.length > 2 ? args[2] : 'OFF';
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
    }
};
__decorate([
    ViewChild("check", { static: false })
], SwitchComponent.prototype, "check", void 0);
__decorate([
    ViewChild("uncheck", { static: false })
], SwitchComponent.prototype, "uncheck", void 0);
__decorate([
    Output("onIntoComponentChange")
], SwitchComponent.prototype, "onIntoComponentChange", void 0);
SwitchComponent = __decorate([
    Component({
        selector: 'switch-component',
        template: `
      <span *ngIf="source === ideal" 
          #check tabindex="0" 
          class="switch fa fa-toggle-on" 
          aria-checked="true"
          role="checkbox"
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
      <span *ngIf="source !== ideal"
          #uncheck tabindex="0" 
          class="switch fa fa-toggle-off" 
          aria-checked="false"
          role="checkbox"
          (keyup)="keyup($event)" 
          (click)="click($event)"></span>
      <span class="text" [class.selected]="source === ideal" 
        [textContent]="source === ideal ? onText : offText"></span>

    `,
        styles: [`
      :host {display:table;float:left;min-height: 23px}
      :host .switch {font-size: 1.4rem; cursor: pointer;float: left}
      :host .switch:hover{color: #fabdab;}
      :host .switch.fa-toggle-on {color: green}
      :host .switch.fa-toggle-off {color: red}
      :host .text {font-size: 1.2rem; text-transform: uppercase; float: left; margin-left: 5px; color: red}
      :host .text.selected {color:  green}
      `]
    })
], SwitchComponent);

var SwitchIntoPipeModule_1;
let SwitchIntoPipeModule = SwitchIntoPipeModule_1 = class SwitchIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('switch', SwitchComponent);
    }
    static forRoot() {
        return {
            ngModule: SwitchIntoPipeModule_1,
            providers: []
        };
    }
};
SwitchIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
SwitchIntoPipeModule = SwitchIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [SwitchComponent],
        exports: [SwitchComponent],
        entryComponents: [SwitchComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], SwitchIntoPipeModule);

let SliderComponent = class SliderComponent {
    constructor() {
        this.onIntoComponentChange = new EventEmitter();
    }
    keyup(event) {
        event.stopPropagation();
        event.preventDefault();
        const code = event.which;
        if (((code >= 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) ||
            ((code == 32) || (code == 8)) ||
            ((code >= 186) && (code <= 222))) {
            this.source = event.target.value;
        }
    }
    oninput(event) {
        this.source = event.target.value;
    }
    onchange(event) {
        this.source = event.target.value;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "slider",
            item: this.data
        });
    }
    transform(source, data, args) {
        this.source = source;
        this.data = data;
        this.length = args.length ? parseFloat(args[0]) : 200;
        this.vertical = args.length > 1 ? String(args[1]) === 'true' : false;
        this.showRange = args.length > 2 ? String(args[2]) === 'true' : false;
        this.min = args.length > 3 ? args[3] : 0;
        this.max = args.length > 4 ? args[4] : 100;
    }
};
__decorate([
    Output("onIntoComponentChange")
], SliderComponent.prototype, "onIntoComponentChange", void 0);
SliderComponent = __decorate([
    Component({
        selector: 'slider-component',
        template: `
    <span 
      class="slidecontainer" 
      [style.width]="!vertical ? length + 'px' : null"
      [style.height]="vertical ? length + 'px' : null"
      [class.vertical]="vertical">
      <span class="range" *ngIf="showRange">
      <span class="min" [textContent]="min"></span>
      <span class="value" [textContent]="source"></span>
      <span class="max" [textContent]="max"></span>
      </span>
      <input 
        type="range"
        class="slider" 
        (input)="oninput($event)"
        (change)="onchange($event)"
        [attr.value]="source" 
        [attr.min]="min" 
        [attr.max]="max" 
        [attr.id]="id" />
    </span>
    `,
        styles: [`
        :host .slidecontainer {display: table;}
        :host .slidecontainer .range {position: relative; display: table; height: 12px; font-size: 0.8rem;width: 100%}
        :host .slidecontainer .range .min {position: absolute;left: 0;top: 0}
        :host .slidecontainer .range .value {position: absolute;left: 50%;top: 0}
        :host .slidecontainer .range .max {position: absolute;right: 0;top: 0}
        :host .slidecontainer .slider {
          -webkit-appearance: none;
          background: #d3d3d3;
          outline: none;
          opacity: 0.7;
          -webkit-transition: .2s;
          transition: opacity .2s;
          border: 2px inset #aaa;
          border-radius: 33%;
          width: 100%;
          height: 1px;
        }
        :host .slidecontainer.vertical .slider {transform: rotate(270deg); margin: 50% -50%;}
        :host .slidecontainer.vertical .range {width: 33px;height: 85%; float: left}
        :host .slidecontainer.vertical .range .min {top: inherit; right:5px; bottom: 0;}
        :host .slidecontainer.vertical .range .value {left: inherit;right: 5px;top: 50%}
        :host .slidecontainer.vertical .range .max {right:5px; top: 0;}
        :host .slider:hover {opacity: 1;}
        :host .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background: #444;
          background-image: linear-gradient(#444, #ddd, #444);
          cursor: pointer;
          border-radius: 5px;
          border: 2px solid #000;
          width: 22px;
          height: 12px;
        }
        :host .slider::-moz-range-thumb {
          background: #444;
          background-image: linear-gradient(#444, #ddd, #444);
          border-radius: 5px;
          border: 2px solid #000;
          cursor: pointer;
          width: 22px;
          height: 10px;
        }
        `]
    })
], SliderComponent);

var SliderIntoPipeModule_1;
let SliderIntoPipeModule = SliderIntoPipeModule_1 = class SliderIntoPipeModule {
    constructor(pool) {
        pool.registerComponent('slider', SliderComponent);
    }
    static forRoot() {
        return {
            ngModule: SliderIntoPipeModule_1,
            providers: []
        };
    }
};
SliderIntoPipeModule.ctorParameters = () => [
    { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
];
SliderIntoPipeModule = SliderIntoPipeModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, CommonPipesModule.forRoot()],
        declarations: [SliderComponent],
        exports: [SliderComponent],
        entryComponents: [SliderComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __param(0, Inject(ComponentPool))
], SliderIntoPipeModule);

let IntoPipeModule = class IntoPipeModule {
};
IntoPipeModule = __decorate([
    NgModule({
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
            SliderIntoPipeModule.forRoot(),
            SpanIntoPipeModule.forRoot(),
            SwitchIntoPipeModule.forRoot(),
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
            SliderIntoPipeModule,
            SpanIntoPipeModule,
            SwitchIntoPipeModule,
            TableIntoPipeModule,
            TableIntoPipeModule,
            TextIntoPipeModule,
            VideoIntoPipeModule
        ],
        entryComponents: [],
        providers: [],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IntoPipeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AddressComponent, AddressIntoPipeModule, AddressPipe, AppendPipe, AudioComponent, AudioIntoPipeModule, AudioPipe, CalendarComponent, CalendarIntoPipeModule, CheckboxComponent, CheckboxIntoPipeModule, CommonPipesModule, ComponentPool, ConditionalPipe, EmailComponent, EmailIntoPipeModule, EmailPipe, FontComponent, FontIntoPipeModule, FontPipe, ImageComponent, ImageIntoPipeModule, ImagePipe, InToPipe, InputComponent, InputGroupComponent, InputGroupIntoPipeModule, InputIntoPipeModule, IntoDirective, IntoPipeModule, JoinPipe, JsonComponent, JsonIntoPipeModule, LastUpdateComponent, LastUpdateIntoPipeModule, LikeComponent, LikeIntoPipeModule, LinkComponent, LinkIntoPipeModule, LinkPipe, MapPipe, MaskPipe, NoticeComponent, NoticeIntoPipeModule, NoticePipe, PhoneComponent, PhoneIntoPipeModule, PrependPipe, RatingComponent, RatingIntoPipeModule, RatingPipe, SanitizeHtmlPipe, SelectComponent, SelectIntoPipeModule, ShareComponent, ShareIntoPipeModule, SpanComponent, SpanIntoPipeModule, TableComponent, TableIntoPipeModule, TablePipe, TextComponent, TextIntoPipeModule, ValueOfPipe, VideoComponent, VideoIntoPipeModule, VideoPipe, WrapPipe, PhonePipe as ɵa, SliderIntoPipeModule as ɵb, SliderComponent as ɵc, SwitchIntoPipeModule as ɵd, SwitchComponent as ɵe };
//# sourceMappingURL=sedeh-into-pipes.js.map
