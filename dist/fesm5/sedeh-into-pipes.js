import { __decorate, __param, __spread } from 'tslib';
import { EventEmitter, Component, Pipe, Injectable, Inject, NgModule, CUSTOM_ELEMENTS_SCHEMA, Renderer, Output, ViewChild, HostListener, ViewContainerRef, ElementRef, ComponentFactoryResolver, Input, Directive } from '@angular/core';
import { CommonModule, SlicePipe, DecimalPipe, CurrencyPipe, LowerCasePipe, UpperCasePipe, JsonPipe, DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    AddressComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] : true;
        this.hasTarget = args.length > 1 ? args[1] : false;
        this.addr1 = source.street + ', ' + source.suite;
        this.addr2 = source.city + ', ' + source.zipcode;
        if (this.isLink) {
            var x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
            this.url = x.replace("\\s+", "+");
        }
    };
    AddressComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    AddressComponent.prototype.change = function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: event.type
        });
    };
    AddressComponent = __decorate([
        Component({
            selector: 'address-component',
            template: "\n    <a *ngIf=\"isLink\" \n        [href]=\"url\" \n        [target]=\"hasTarget ? '_blank' : null\"\n        class=\"google-map\" \n        (keyup)='keyup($event)' \n        (click)=\"change($event)\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"off-screen\">View in google map</span>\n        <span class=\"address\" [textContent]=\"addr1\"></span>\n        <span class=\"address\" [textContent]=\"addr2\"></span>\n    </a>\n    <span *ngIf=\"!isLink\" class=\"google-map\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"address\" [textContent]=\"addr1\"></span>\n        <span class=\"address\" [textContent]=\"addr2\"></span>\n    </span>\n    ",
            styles: [":host .address {float: left;margin-right: 4px;}\n        :host .google-map {float: left;margin-right: 4px;}\n        :host .fa {float:left;color: #f00;margin: 0 5px;}\n        :host .off-screen {position: absolute;left: -999em;}\n        :host a:hover .fa-map-marker{color: #fabdab;}\n        :host span{float-left;}\n        :host {display: table;float:left;min-height: 23px}\n        @media print {\n            :host {\n                text-decoration: none;\n            }\n            :host .fa-map-marker {display: none;}\n        }\n        "]
        })
    ], AddressComponent);
    return AddressComponent;
}());

var AddressPipe = /** @class */ (function () {
    function AddressPipe() {
    }
    AddressPipe_1 = AddressPipe;
    AddressPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            return new AddressPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    };
    AddressPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var isLink = args.length ? args[0] : true;
        var hasTarget = args.length > 1 ? args[1] : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.addressFromString(source, isLink, hasTarget);
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.addressFromString(item, isLink, hasTarget));
            });
            return result_1;
        }
    };
    AddressPipe.prototype.addressFromString = function (source, isLink, hasTarget) {
        if (isLink) {
            var url = "https://maps.google.com/?q=" +
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
    };
    var AddressPipe_1;
    AddressPipe = AddressPipe_1 = __decorate([
        Pipe({ name: 'address' })
    ], AddressPipe);
    return AddressPipe;
}());

var ComponentPool = /** @class */ (function () {
    function ComponentPool() {
        this.registeredPipes = {};
        this.registeredComponents = {};
        this.registeredServices = {};
    }
    ComponentPool.prototype.registerPipeTransformation = function (name, pipe) {
        this.registeredPipes[name] = pipe;
    };
    ComponentPool.prototype.registeredForPipeTransformationNamed = function (key) {
        return this.registeredPipes[key] !== undefined;
    };
    ComponentPool.prototype.registeredPipeTransformation = function (key, content, args, callback, data) {
        var pipe = this.registeredPipes[key];
        return pipe ? pipe(content, args, callback, data) : null;
    };
    ComponentPool.prototype.removePipeTransformation = function (key) {
        delete this.registeredPipes[key];
    };
    ComponentPool.prototype.registerComponent = function (name, component) {
        this.registeredComponents[name] = component;
    };
    ComponentPool.prototype.registeredForComponentWithNamed = function (name) {
        return this.registeredComponents[name] !== undefined;
    };
    ComponentPool.prototype.registeredComponent = function (name, resolver, viewRefrence, el) {
        var component = this.registeredComponents[name];
        var result = null;
        if (component) {
            var componentFactory = resolver.resolveComponentFactory(component);
            var componentRef = viewRefrence.createComponent(componentFactory);
            var domElem = componentRef.hostView.rootNodes[0];
            el.appendChild(domElem);
            domElem.setAttribute("class", "into");
            result = componentRef.instance;
        }
        return result;
    };
    ComponentPool.prototype.removeComponent = function (name) {
        delete this.registeredComponents[name];
    };
    ComponentPool.prototype.registerServiceForComponent = function (name, service) {
        this.registeredServices[name] = service;
    };
    ComponentPool.prototype.registeredServiceForComponent = function (name) {
        return this.registeredServices[name];
    };
    ComponentPool.prototype.registeredForServiceNamed = function (name) {
        return this.registeredServices[name] !== undefined;
    };
    ComponentPool.prototype.removeServiceForComponent = function (name) {
        delete this.registeredServices[name];
    };
    ComponentPool = __decorate([
        Injectable()
    ], ComponentPool);
    return ComponentPool;
}());

var AddressIntoPipeModule = /** @class */ (function () {
    function AddressIntoPipeModule(pool) {
        pool.registerComponent('address', AddressComponent);
        pool.registerPipeTransformation('address', AddressPipe.transformationMethod());
    }
    AddressIntoPipeModule_1 = AddressIntoPipeModule;
    AddressIntoPipeModule.forRoot = function () {
        return {
            ngModule: AddressIntoPipeModule_1,
            providers: [
                AddressPipe
            ]
        };
    };
    var AddressIntoPipeModule_1;
    AddressIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return AddressIntoPipeModule;
}());

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
    AudioComponent = __decorate([
        Component({
            selector: 'audio-component',
            template: "\n    <span class=\"audio-hidden\" [innerText]=\"source\"></span>\n    <audio [src]=\"source\" \n        (keyup)=\"keyup($event)\"\n        (play)=\"change($event)\"\n        (ended)=\"change($event)\"\n        (pause)=\"change($event)\"\n        (seeked)=\"change($event)\"\n        (error)=\"change($event)\"\n        controls=\"true\">Your browser does not support the audio element.</audio>",
            styles: ["\n    :host {\n        display: table;\n        float: left;\n        min-height: 23px;\n    }\n    :host .audio-hidden {\n        display: none;\n    }\n    "]
        })
    ], AudioComponent);
    return AudioComponent;
}());

var AudioPipe = /** @class */ (function () {
    function AudioPipe() {
    }
    AudioPipe_1 = AudioPipe;
    AudioPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            return new AudioPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    };
    AudioPipe.prototype.stringToAudio = function (source) {
        return "<audio src=\'" + source + "\' controls=\'true\' />";
    };
    AudioPipe.prototype.arrayToAudio = function (sources) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToAudio(source));
        });
        return result;
    };
    AudioPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToAudio(source);
        }
        return this.arrayToAudio(source);
    };
    var AudioPipe_1;
    AudioPipe = AudioPipe_1 = __decorate([
        Pipe({ name: 'audio' })
    ], AudioPipe);
    return AudioPipe;
}());

var AudioIntoPipeModule = /** @class */ (function () {
    function AudioIntoPipeModule(pool) {
        pool.registerComponent('audio', AudioComponent);
        pool.registerPipeTransformation('audio', AudioPipe.transformationMethod());
    }
    AudioIntoPipeModule_1 = AudioIntoPipeModule;
    AudioIntoPipeModule.forRoot = function () {
        return {
            ngModule: AudioIntoPipeModule_1,
            providers: [
                AudioPipe
            ]
        };
    };
    var AudioIntoPipeModule_1;
    AudioIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return AudioIntoPipeModule;
}());

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(renderer) {
        this.renderer = renderer;
        this.showCalendar = false;
        this.editName = false;
        this.multiselect = false;
        this.dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.weeks = [];
        this.selectedDays = [];
        this.onIntoComponentChange = new EventEmitter();
    }
    CalendarComponent.prototype.keyup = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    CalendarComponent.prototype.popdatepicker = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.showCalendar = !this.showCalendar;
    };
    CalendarComponent.prototype.transform = function (source, data, args) {
        var _this = this;
        this.source = source;
        this.currentDate = new Date();
        this.origDate = new Date();
        if (source instanceof Array) {
            this.multiselect = true;
            source.map(function (item) {
                _this.selectedDays.push(new Date(item));
            });
        }
        else {
            this.multiselect = false;
            this.selectedDays.push(new Date(this.source));
        }
        this.item = data;
        this.generateCalendar();
        this.formatting = args.length ? args[0] : "";
    };
    CalendarComponent.prototype.isSelected = function (date) {
        var index = -1;
        for (var i = 0; i < this.selectedDays.length; i++) {
            var selectedDate = this.selectedDays[i];
            if (this.isSameDay(date, selectedDate)) {
                index = i;
            }
        }
        return index > -1;
    };
    CalendarComponent.prototype.isSelectedMonth = function (date) {
        return this.isSameMonth(date, this.currentDate);
    };
    CalendarComponent.prototype.toggleSelectedDates = function (day) {
        var found = false;
        if (this.multiselect) {
            for (var i = 0; i < this.selectedDays.length; i++) {
                var date = this.selectedDays[i];
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
    };
    CalendarComponent.prototype.selectDate = function (event, day) {
        event.stopPropagation();
        event.preventDefault();
        this.origDate = day.date;
        this.currentDate = day.date;
        this.toggleSelectedDates(day);
        this.selectedDays.sort(function (a, b) {
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
    };
    // actions from calendar
    CalendarComponent.prototype.prevMonth = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
        this.generateCalendar();
    };
    CalendarComponent.prototype.nextMonth = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
        this.generateCalendar();
    };
    CalendarComponent.prototype.prevYear = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() - 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    };
    CalendarComponent.prototype.nextYear = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.currentDate = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), this.currentDate.getDate());
        this.generateCalendar();
    };
    // generate the calendar grid
    CalendarComponent.prototype.generateCalendar = function () {
        var dates = this.fillDates(this.currentDate);
        var weeks = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    };
    CalendarComponent.prototype.isSameDay = function (a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    };
    CalendarComponent.prototype.isSameMonth = function (a, b) {
        return a.getYear() === b.getYear() &&
            a.getMonth() === b.getMonth();
    };
    CalendarComponent.prototype.fillDates = function (currentDate) {
        var cm = new Date(currentDate);
        var tm = new Date();
        var firstDay = new Date(cm.getFullYear(), cm.getMonth(), 1);
        var firstOfMonth = firstDay.getDay();
        var firstDayOfGrid = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstOfMonth);
        var start = firstDayOfGrid.getDate();
        var list = [];
        for (var i = start; i < (start + 42); i++) {
            var d = new Date(firstDayOfGrid.getFullYear(), firstDayOfGrid.getMonth(), i);
            list.push({
                today: this.isSameDay(tm, d),
                selected: this.isSelected(d),
                date: d
            });
        }
        return list;
    };
    CalendarComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    __decorate([
        Output("onIntoComponentChange")
    ], CalendarComponent.prototype, "onIntoComponentChange", void 0);
    CalendarComponent = __decorate([
        Component({
            selector: 'calendar-component',
            template: "\n    <span class=\"calendar-box\">\n      <span class=\"date\" [textContent]=\"origDate | date:formatting\"></span>\n      <a tabindex=\"0\" class=\"popper\" (keyup)=\"keyup($event)\" (click)=\"popdatepicker($event)\">\n          <span class=\"fa fa-calendar\" aria-hidden=\"true\"></span>\n          <span class=\"off-screen\">Pick a date</span>\n      </a>\n    </span>\n    <div class=\"calendar\" *ngIf=\"showCalendar\">\n\t\t<div class=\"calendar-navs\">\n\t\t\t<div class=\"month-nav\">\n                <button (click)=\"prevMonth($event)\">\n                    <span class=\"fa fa-chevron-left\"></span>\n                    <span class=\"off-screen\">Back a month</span>\n                </button>\n\t\t\t\t<span class=\"p4\">{{ currentDate | date:'MMMM' }}</span>\n                <button (click)=\"nextMonth($event)\">\n                    <span class=\"fa fa-chevron-right\"></span>\n                    <span class=\"off-screen\">Forward a month</span>\n                </button>\n\t\t\t</div>\n\t\t\t<div class=\"year-nav\">\n                <button (click)=\"prevYear($event)\">\n                    <span class=\"fa fa-chevron-left\"></span>\n                    <span class=\"off-screen\">Back a year</span>\n                </button>\n\t\t\t\t<span>{{ currentDate | date: 'yyyy' }}</span>\n                <button (click)=\"nextYear($event)\">\n                    <span class=\"fa fa-chevron-right\"></span>\n                    <span class=\"off-screen\">Forward a year</span>\n                </button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"month-grid\">\n\t\t\t<div class=\"day-names\">\n\t\t\t\t<div *ngFor=\"let name of dayNames\" class=\"day-name p9\">{{ name }}</div>\n\t\t\t</div>\n\t\t\t<div class=\"weeks\">\n\t\t\t\t<div *ngFor=\"let week of weeks\" class=\"week\">\n\t\t\t\t\t<ng-container *ngFor=\"let day of week\">\n\t\t\t\t\t\t<div class=\"week-date disabled\" *ngIf=\"!isSelectedMonth(day.date)\">\n\t\t\t\t\t\t\t<span class=\"date-text\">{{ day.date.getDate() }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"week-date enabled\"\n                           *ngIf=\"isSelectedMonth(day.date)\"\n                           tabindex=\"0\"\n                           (keyup)=\"keyup($event)\"\n\t\t\t\t\t\t   (click)=\"selectDate($event, day)\"\n\t\t\t\t\t\t   [class.today]=\"day.today\"\n\t\t\t\t\t\t   [class.selected]=\"day.selected\">\n\t\t\t\t\t\t\t<span class=\"date-text\">{{ day.date.getDate() }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        .popper .fa-calendar{display: inline-block;margin: 0 5px}\n        .popper:hover .fa-calendar{color: #fabdab}\n        .calendar-box {\n          display: flex;\n          flex-direction: row;\n          cursor: default;\n          width: 100%;\n          display: inline-block;\n        }\n        .calendar-box date {flex: 1;}\n        .calendar-box .popper {cursor: pointer;flex: 0 0 15px}\n        .calendar {\n            display: table;\n            width: 210px;\n            position: absolute;\n            background-color: #fff;\n            z-index: 2;\n            border: 1px solid #ddd;\n            border-radius: 4px;\n        }\n        .calendar * {\n            box-sizing: border-box;\n        }\n        .calendar .calendar-navs {\n            background-color: whitesmoke;\n        }\n        .calendar .month-nav {\n            padding: 2px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .calendar .year-nav {\n            padding: 2px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .calendar .month-nav button,\n        .calendar .year-nav button {\n            border: 0;\n            background: transparent;\n            cursor: pointer;\n        }\n        .calendar .month-nav button:hover,\n        .calendar .year-nav button:hover {\n            color: red;\n        }\n        .calendar .month-grid .day-names {\n            display: flex;\n            flex-direction: row;\n            background: whitesmoke;\n            border-bottom-right-radius: 3px;\n            border-bottom-left-radius: 3px;\n        }\n        .calendar .month-grid .weeks {\n            display: flex;\n            flex-direction: column;\n        }\n        .calendar .month-grid .week {\n            display: flex;\n            flex-direction: row;\n        }\n        .calendar .month-grid .day-names {\n            border-top: 1px dotted #ddd;\n            border-bottom: 1px dashed #ddd;\n        }\n        .calendar .month-grid .week-date,\n        .calendar .month-grid .day-name {\n            text-align: center;\n            padding: 2px;\n            display: block;\n            width: 30px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .calendar .month-grid .week-date {\n            height: 30px;\n            position: relative;\n            padding: 5px;\n        }\n        .calendar .month-grid .week-date .date-text {\n            font-size: 10px;\n            z-index: 10;\n        }\n        .calendar .month-grid .week-date::after {\n            content: '';\n            height: 24px;\n            width: 24px;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            border-radius: 50%;\n            transition: background-color 150ms linear, color 150ms linear;\n            z-index: 1;\n        }\n        .calendar .month-grid .week-date.disabled {color: #aaa;}\n        .calendar .month-grid .week-date.enabled {\n            cursor: pointer;\n        }\n        .calendar .month-grid .week-date.enabled:focus {\n            outline: 0;\n        }\n        .calendar .month-grid .week-date.enabled:hover .date-text,\n        .calendar .month-grid .week-date.enabled:focus .date-text {\n            font-weight: bold;\n            color: blue;\n        }\n        .calendar .month-grid .week-date.enabled:hover::after,\n        .calendar .month-grid .week-date.enabled:focus::after {\n            background-color: whitesmoke;\n        }\n        .calendar .month-grid .week-date.selected .date-text {\n            color: #fff !important;\n        }\n        .calendar .month-grid .week-date.selected::after{\n            background-color: blue !important;\n        }\n        .calendar .month-grid .week-date.today::after {\n            background-color: lightblue;\n            font-weight: bold;\n            color: #fff;\n        }\n        @media print {\n            .calendar-box .popper {\n                display: none;\n            }\n        }\n        "]
        })
    ], CalendarComponent);
    return CalendarComponent;
}());

var CalendarIntoPipeModule = /** @class */ (function () {
    function CalendarIntoPipeModule(pool) {
        pool.registerComponent('calendar', CalendarComponent);
    }
    CalendarIntoPipeModule_1 = CalendarIntoPipeModule;
    CalendarIntoPipeModule.forRoot = function () {
        return {
            ngModule: CalendarIntoPipeModule_1,
            providers: []
        };
    };
    var CalendarIntoPipeModule_1;
    CalendarIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return CalendarIntoPipeModule;
}());

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    CheckboxComponent.prototype.keyup = function (event) {
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    CheckboxComponent.prototype.click = function (event) {
        var _this = this;
        var input = event.target;
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
            setTimeout(function () {
                if (_this.check) {
                    _this.check.nativeElement.focus();
                }
                if (_this.uncheck) {
                    _this.uncheck.nativeElement.focus();
                }
            }, 66);
        }
    };
    CheckboxComponent.prototype.transform = function (source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.useFont = args.length > 1 ? Boolean(args[1]) : false;
        this.onOff = args.length > 2 ? Boolean(args[2]) : false;
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
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
            template: "\n    <span *ngIf=\"useFont\" class=\"check-font\">\n      <span *ngIf=\"source === ideal\" \n          #check tabindex=\"0\" \n          class=\"fa\" \n          [class.fa-toggle-on]=\"onOff\" \n          [class.fa-check]=\"!onOff\" \n          (keyup)=\"keyup($event)\" \n          (click)=\"click($event)\"></span>\n      <span *ngIf=\"source !== ideal\"\n          #uncheck tabindex=\"0\" \n          class=\"fa\" \n          [class.fa-toggle-off]=\"onOff\" \n          [class.fa-close]=\"!onOff\" \n          (keyup)=\"keyup($event)\" \n          (click)=\"click($event)\"></span>\n    </span>\n    <input *ngIf=\"!useFont\" \n            type=\"checkbox\" \n            tabindex=\"0\" \n            [value]=\"source\" \n            [checked]=\"source===ideal ? true : null\" \n            (keyup)=\"keyup($event)\"\n            (click)=\"click($event)\" />\n    ",
            styles: ["\n      :host .check-font .fa{margin: 0 5px}\n      :host {display:table;float:left;min-height: 23px}\n      .check-font:hover{color: #fabdab;}\n      .check-font {cursor: pointer;}\n      "]
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}());

var CheckboxIntoPipeModule = /** @class */ (function () {
    function CheckboxIntoPipeModule(pool) {
        pool.registerComponent('checkbox', CheckboxComponent);
    }
    CheckboxIntoPipeModule_1 = CheckboxIntoPipeModule;
    CheckboxIntoPipeModule.forRoot = function () {
        return {
            ngModule: CheckboxIntoPipeModule_1,
            providers: []
        };
    };
    var CheckboxIntoPipeModule_1;
    CheckboxIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return CheckboxIntoPipeModule;
}());

var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    EmailComponent.prototype.transform = function (source, data, args) {
        this.isLink = args.length ? args[0] : true;
        this.source = source;
    };
    EmailComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    EmailComponent.prototype.change = function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "mail-to",
            item: event.type
        });
    };
    EmailComponent = __decorate([
        Component({
            selector: 'email',
            template: "\n    <a *ngIf=\"isLink\" [href]=\"'mailto:' + source\" (keyup)='keyup($event)' (click)=\"change($event)\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </a>\n    <span *ngIf=\"!isLink\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </span>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        :host:hover .fa-envelope{color: #fabdab;}\n        :host .fa{margin: 0 5px;}\n        @media print {\n            :host a { text-decoration: none;}\n            :host a .fa-envelope {display: none;}\n            :host .fa-envelope {display: none;}\n        }\n        "]
        })
    ], EmailComponent);
    return EmailComponent;
}());

var EmailPipe = /** @class */ (function () {
    function EmailPipe() {
    }
    EmailPipe_1 = EmailPipe;
    EmailPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // email
            return new EmailPipe_1().transform(content, args.length > 1 ? args[1] === 'true' : true);
        };
        return x;
    };
    EmailPipe.prototype.emailFromString = function (source, isLink) {
        var x;
        if (isLink) {
            x = "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
        }
        else {
            x = "<span><span class='fa fa-envelope' style='margin: 0 5px' aria-hidden='true'></span><span>" + source + "</span></span>";
        }
        return x;
    };
    EmailPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var isLink = args.length ? args[0] : true;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.emailFromString(source, isLink);
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.emailFromString(item, isLink));
            });
            return result_1;
        }
    };
    var EmailPipe_1;
    EmailPipe = EmailPipe_1 = __decorate([
        Pipe({ name: 'email' })
    ], EmailPipe);
    return EmailPipe;
}());

var EmailIntoPipeModule = /** @class */ (function () {
    function EmailIntoPipeModule(pool) {
        pool.registerComponent('email', EmailComponent);
        pool.registerPipeTransformation('email', EmailPipe.transformationMethod());
    }
    EmailIntoPipeModule_1 = EmailIntoPipeModule;
    EmailIntoPipeModule.forRoot = function () {
        return {
            ngModule: EmailIntoPipeModule_1,
            providers: [EmailPipe]
        };
    };
    var EmailIntoPipeModule_1;
    EmailIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return EmailIntoPipeModule;
}());

var FontComponent = /** @class */ (function () {
    function FontComponent() {
    }
    FontComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.font = args[0];
        this.location = args.length > 1 ? args[1] : "left";
        var action = args.length > 2 ? args[2].toLowerCase() : "";
        this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
    };
    FontComponent = __decorate([
        Component({
            selector: 'font-component',
            template: "\n        <span *ngIf=\"location === 'left'\"    [class]=\"font\" aria-hidden='true'></span>\n        <span *ngIf=\"location !== 'replace'\" [textContent]=\"content\"></span>\n        <span *ngIf=\"location === 'right'\"   [class]=\"font\" aria-hidden='true'></span>\n        <span *ngIf=\"location === 'replace'\" [class]=\"font\" aria-hidden='true'></span>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        :host span {\n            float: left;\n            margin: 0 5px;\n        }\n        "]
        })
    ], FontComponent);
    return FontComponent;
}());

var FontPipe = /** @class */ (function () {
    function FontPipe() {
    }
    FontPipe_1 = FontPipe;
    FontPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // font:fa fa-check:left:*
            return new FontPipe_1().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
        };
        return x;
    };
    FontPipe.prototype.fontFromString = function (font, location, action, content) {
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
    };
    FontPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var font = args.length ? "<span class=\'" + args[0] + "\' style='margin: 0 5px' aria-hidden='true'></span>" : "";
        var location = args.length > 1 ? args[1] : "";
        var action = args.length > 2 ? args[2].toLowerCase() : "";
        var content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.fontFromString(font, location, action, item));
            });
            return result_1;
        }
    };
    var FontPipe_1;
    FontPipe = FontPipe_1 = __decorate([
        Pipe({ name: 'font' })
    ], FontPipe);
    return FontPipe;
}());

var FontIntoPipeModule = /** @class */ (function () {
    function FontIntoPipeModule(pool) {
        pool.registerComponent('font', FontComponent);
        pool.registerPipeTransformation('font', FontPipe.transformationMethod());
    }
    FontIntoPipeModule_1 = FontIntoPipeModule;
    FontIntoPipeModule.forRoot = function () {
        return {
            ngModule: FontIntoPipeModule_1,
            providers: [FontPipe]
        };
    };
    var FontIntoPipeModule_1;
    FontIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return FontIntoPipeModule;
}());

var ImageComponent = /** @class */ (function () {
    function ImageComponent() {
        this.magnification = 0;
        this.onIntoComponentChange = new EventEmitter();
    }
    ImageComponent.prototype.enter = function (event) {
        if (this.popLocation) {
            var image = event.target.children[0];
            var popper = event.target.children[1];
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
    ImageComponent.prototype.hoverOut = function (event) {
        if (this.popLocation) {
            var popper = event.target.children[1];
            popper.style.display = 'none';
        }
        else if (this.magnification) {
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
    ImageComponent.prototype.hoverViewPort = function (event) {
        if (this.magnification && !this.popLocation) {
            var image = event.target.tagName === 'IMG' ? event.target : event.target.children[0];
            if (image) {
                image.style.top = -(event.layerY * this.magnification) + "px";
                image.style.left = -(event.layerX * this.magnification) + "px";
            }
        }
    };
    ImageComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        this.magnification = (args && args.length > 3) ? parseInt(args[3], 10) : 0;
        this.popLocation = (args && args.length > 4) ? args[4] : undefined;
        this.magnification = this.magnification < 0 ? 0 : this.magnification;
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                var q = source.indexOf("?");
                var t = q < 0 ? source : source.substring(0, q);
                var d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    };
    ImageComponent.prototype.change = function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: event.type,
            item: { x: event.layerX, y: event.layerY }
        });
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
            template: "<img [src]=\"source\" \n        [style.width]=\"width\" \n        [style.height]=\"height\" \n        [title]=\"alt\" /><img *ngIf=\"popLocation\" \n        [src]=\"source\" class='popper'\n        [style.width]=\"(origWidth * magnification) + 'px'\" \n        [style.height]=\"(origHeight * magnification) + 'px'\" />",
            styles: ["\n    :host {display:block;overflow:hidden;margin:0;position:relative;float:left;min-width: 23px;min-height: 23px}\n    :host .popper{position:absolute;pointer-events: none;display: none;z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;border-radius: 4px}\n    :host img{position:relative;pointer-events: none;}\n    "]
        })
    ], ImageComponent);
    return ImageComponent;
}());

var ImagePipe = /** @class */ (function () {
    function ImagePipe() {
    }
    ImagePipe_1 = ImagePipe;
    ImagePipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
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
    };
    ImagePipe.prototype.stringToImage = function (source, width, height, alt) {
        if (!alt || !alt.length) {
            var q = source.indexOf("?");
            var t = q < 0 ? source : source.substring(0, q);
            var d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
    };
    ImagePipe.prototype.arrayToImage = function (sources, width, height, alt) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToImage(source, width, height, alt));
        });
        return result;
    };
    ImagePipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var width = (args && args.length) ? "width: " + args[0] + ";" : "";
        var height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        var alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");
    };
    var ImagePipe_1;
    ImagePipe = ImagePipe_1 = __decorate([
        Pipe({ name: 'image' })
    ], ImagePipe);
    return ImagePipe;
}());

var ImageIntoPipeModule = /** @class */ (function () {
    function ImageIntoPipeModule(pool) {
        pool.registerComponent('image', ImageComponent);
        pool.registerPipeTransformation('image', ImagePipe.transformationMethod());
    }
    ImageIntoPipeModule_1 = ImageIntoPipeModule;
    ImageIntoPipeModule.forRoot = function () {
        return {
            ngModule: ImageIntoPipeModule_1,
            providers: [ImagePipe]
        };
    };
    var ImageIntoPipeModule_1;
    ImageIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return ImageIntoPipeModule;
}());

var InputComponent = /** @class */ (function () {
    function InputComponent(renderer) {
        this.renderer = renderer;
        this.editName = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    InputComponent.prototype.keyup = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        var code = event.which;
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
                setTimeout(function () {
                    if (_this.nameHolder) {
                        _this.renderer.invokeElementMethod(_this.nameHolder.nativeElement, "focus");
                    }
                }, 66);
            }
        }
    };
    InputComponent.prototype.blur = function (event) {
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
    };
    InputComponent.prototype.keydown = function (event) {
        var _this = this;
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if ((code === 13) || (code === 9)) {
            this.renderer.invokeElementMethod(event.target, "click");
            setTimeout(function () {
                if (_this.nameEditor) {
                    _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
                }
            }, 66);
        }
    };
    InputComponent.prototype.clickName = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        this.oldValue = String(this.source);
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
        }, 66);
    };
    InputComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.data = data;
        this.placeholder = args.length ? args[0] : "";
        this.formatting = args.length > 1 ? args[1] : "";
    };
    InputComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
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
            template: "\n    <span *ngIf=\"editName\">\n    <input #nameEditor\n        type='text' \n        [id]=\"id\"\n        [name]=\"name\"\n        [value]=\"source\"\n        [placeholder]=\"placeholder\"\n        (blur)=\"blur($event)\" \n        (keyup)='keyup($event)'>\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? (source | into:formatting) : '&nbsp;'\">\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && !formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? source : '&nbsp;'\">\n    </span>\n    ",
            styles: ["\n        .locked {\n          display: inline-block;\n          cursor: pointer;\n          min-width: 30px;\n          -webkit-user-select: none;       \n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          border: 1px solid transparent;\n        }\n        input {\n          cursor: beam;\n        }\n        :host {display:table;float:left;min-height: 23px}\n        :host .locked:hover{border: 1px solid #fabdab;}\n        "]
        })
    ], InputComponent);
    return InputComponent;
}());

var AppendPipe = /** @class */ (function () {
    function AppendPipe() {
    }
    AppendPipe_1 = AppendPipe;
    AppendPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // append:something
            return new AppendPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    };
    AppendPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source + key;
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(item + key);
            });
            return result_1;
        }
    };
    var AppendPipe_1;
    AppendPipe = AppendPipe_1 = __decorate([
        Pipe({ name: 'append' })
    ], AppendPipe);
    return AppendPipe;
}());

var ConditionalPipe = /** @class */ (function () {
    function ConditionalPipe() {
    }
    ConditionalPipe_1 = ConditionalPipe;
    ConditionalPipe.transformationMethod = function () {
        function split(item) {
            return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
        }
        var x = function (content, args, callback, data) {
            // if:=:true:fa fa-check:fa fa-bell
            var acondition = args.length > 1 ? args[1] : "";
            var value = args.length > 2 ? args[2] : "";
            var action = args.length > 3 ? args[3] : "";
            var altAction = args.length > 4 ? args[4] : "";
            var result = new ConditionalPipe_1().transform(content, acondition, value, action, altAction);
            if (typeof result === "string") {
                result = result[0] === '"' ? result.substring(1, result.length - 1) : result;
                result = split(result);
                result = callback(content, result, data);
            }
            return result;
        };
        return x;
    };
    ConditionalPipe.prototype.conditionFromString = function (content, acondition, value, action, altAction) {
        var result = "";
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
    };
    ConditionalPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var acondition = args.length ? args[0] : "";
        var value = args.length > 1 ? args[1] : "";
        var action = args.length > 2 ? args[2] : "";
        var altAction = args.length > 3 ? args[3] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.conditionFromString(source, acondition, value, action, altAction);
        }
        else {
            var result_1 = {};
            source.map(function (item) {
                result_1[item] = _this.conditionFromString(item, acondition, value, action, altAction);
            });
            return result_1;
        }
    };
    var ConditionalPipe_1;
    ConditionalPipe = ConditionalPipe_1 = __decorate([
        Pipe({ name: 'if' })
    ], ConditionalPipe);
    return ConditionalPipe;
}());

var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    JoinPipe_1 = JoinPipe;
    JoinPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            //join or join:character
            return new JoinPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    };
    JoinPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof source === "string") || !(source instanceof Array)) {
            return source.join(args[0]);
        }
        else {
            var result_1 = [];
            Object.keys(source).map(function (key) {
                result_1.push(source[key]);
            });
            return result_1.join(args[0]);
        }
    };
    var JoinPipe_1;
    JoinPipe = JoinPipe_1 = __decorate([
        Pipe({ name: 'join' })
    ], JoinPipe);
    return JoinPipe;
}());

var MapPipe = /** @class */ (function () {
    function MapPipe() {
    }
    MapPipe_1 = MapPipe;
    MapPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // map:key1;value1/key2;value2/key3;value3
            return new MapPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    };
    MapPipe.prototype.valuesFor = function (list, map) {
        var result = [];
        list.map(function (key) {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    };
    MapPipe.prototype.geMapping = function (mapping) {
        var map = mapping;
        if (mapping.trim) {
            var map_1 = {};
            mapping.split('/').map(function (key) {
                var x = key.split(';');
                map_1[x[0]] = x[1];
            });
            mapping = map_1;
        }
        return mapping;
    };
    MapPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    };
    var MapPipe_1;
    MapPipe = MapPipe_1 = __decorate([
        Pipe({ name: 'map' })
    ], MapPipe);
    return MapPipe;
}());

var MaskPipe = /** @class */ (function () {
    function MaskPipe() {
    }
    MaskPipe_1 = MaskPipe;
    MaskPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
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
    };
    MaskPipe.prototype.maskString = function (item, visibleDigits, maskWith) {
        var maskedSection = item ? item.slice(0, -visibleDigits) : "";
        var visibleSection = item ? item.slice(-visibleDigits) : "";
        return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
    };
    MaskPipe.prototype.maskArray = function (items, visibleDigits, maskWith) {
        var _this = this;
        var result = [];
        items.map(function (item) {
            result.push(_this.maskString(item, visibleDigits, maskWith));
        });
        return result;
    };
    MaskPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var visibleDigits = (args && args.length) ? args[0] : 4;
        var maskWith = args.length > 1 ? args[1] : '*';
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.maskString(source, visibleDigits, maskWith);
        }
        return this.maskArray(source, visibleDigits, maskWith);
    };
    var MaskPipe_1;
    MaskPipe = MaskPipe_1 = __decorate([
        Pipe({ name: 'mask' })
    ], MaskPipe);
    return MaskPipe;
}());

var PrependPipe = /** @class */ (function () {
    function PrependPipe() {
    }
    PrependPipe_1 = PrependPipe;
    PrependPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // prepend:something
            return new PrependPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    };
    PrependPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return key + source;
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(key + item);
            });
            return result_1;
        }
    };
    var PrependPipe_1;
    PrependPipe = PrependPipe_1 = __decorate([
        Pipe({ name: 'prepend' })
    ], PrependPipe);
    return PrependPipe;
}());

var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SanitizeHtmlPipe = __decorate([
        Pipe({
            name: 'sanitizeHtml'
        })
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());

var ValueOfPipe = /** @class */ (function () {
    function ValueOfPipe() {
    }
    ValueOfPipe_1 = ValueOfPipe;
    ValueOfPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // valueof:key
            return new ValueOfPipe_1().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    };
    ValueOfPipe.prototype.valueOfSingle = function (source, key) {
        return source[key];
    };
    ValueOfPipe.prototype.valueOfMultiple = function (sources, key) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.valueOfSingle(source, key));
        });
        return result;
    };
    ValueOfPipe.prototype.transform = function (object) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((typeof object === "string") || !(object instanceof Array)) {
            return this.valueOfSingle(object, args[0]);
        }
        return this.valueOfMultiple(object, args[0]);
    };
    var ValueOfPipe_1;
    ValueOfPipe = ValueOfPipe_1 = __decorate([
        Pipe({ name: 'valueof' })
    ], ValueOfPipe);
    return ValueOfPipe;
}());

var WrapPipe = /** @class */ (function () {
    function WrapPipe() {
    }
    WrapPipe_1 = WrapPipe;
    WrapPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // wrap:something:something  OR wrap:something
            return new WrapPipe_1().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
        };
        return x;
    };
    WrapPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var pre = (args && args.length) ? args[0] : "";
        var post = pre.length ?
            (args.length > 1 ? args[1] : "") : pre;
        var key = ((args && args.length) ? args[0] : "");
        if ((typeof source === "string") || !(source instanceof Array)) {
            return pre + source + post;
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(pre + item + post);
            });
            return result_1;
        }
    };
    var WrapPipe_1;
    WrapPipe = WrapPipe_1 = __decorate([
        Pipe({ name: 'wrap' })
    ], WrapPipe);
    return WrapPipe;
}());

var InToPipe = /** @class */ (function () {
    function InToPipe(pool) {
        this.pool = pool;
    }
    InToPipe.prototype.transform = function (content, list) {
        var _this = this;
        var result = content;
        list.split("|").map(function (item) {
            result = _this._transform(result, _this.split(item));
        });
        return result;
    };
    InToPipe.prototype.split = function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    InToPipe.prototype._transform = function (content, args) {
        var result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this));
        return result ? result : content;
    };
    InToPipe.ctorParameters = function () { return [
        { type: ComponentPool }
    ]; };
    InToPipe = __decorate([
        Pipe({ name: 'into' })
    ], InToPipe);
    return InToPipe;
}());

var IntoDirective = /** @class */ (function () {
    function IntoDirective(viewRef, el, pool, componentFactoryResolver) {
        this.viewRef = viewRef;
        this.el = el;
        this.pool = pool;
        this.componentFactoryResolver = componentFactoryResolver;
        this.onComponentChange = function (event) { };
    }
    IntoDirective.prototype.split = function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    IntoDirective.prototype._transform = function (content, args, data) {
        var result = content;
        if (this.pool.registeredForComponentWithNamed(args[0])) {
            var newArgs = args.splice(1, args.length);
            result = this.transformComponent.apply(this, __spread([args[0], content, this.intoId, this.intoName, data], newArgs));
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
    };
    IntoDirective.prototype.transformComponent = function (type, content, id, name, data) {
        var _this = this;
        var args = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            args[_i - 5] = arguments[_i];
        }
        var result;
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
            var counter_1 = 0;
            result = content;
            content.map(function (source) {
                if (typeof source === "string" ||
                    typeof content === "number" ||
                    typeof content === "boolean" ||
                    Object.keys(content).length) {
                    var sx = _this.registeredComponentFor(type);
                    if (sx === null || sx === undefined) {
                        console.error("Custom component '" + type + "' is not defined.");
                    }
                    else {
                        sx.id = id + '-' + (counter_1++);
                        sx.name = name;
                        sx.service = _this.pool.registeredServiceForComponent(type);
                        sx.transform(source.source ? source.source : source, data, args);
                        if (sx.onIntoComponentChange && _this.onComponentChange) {
                            sx.onIntoComponentChange.subscribe(_this.onComponentChange);
                        }
                    }
                }
            });
        }
        return result;
    };
    IntoDirective.prototype.registeredComponentFor = function (name) {
        return this.pool.registeredComponent(name, this.componentFactoryResolver, this.viewRef, this.el.nativeElement);
    };
    IntoDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.into || this.rawContent) {
            var result_1 = this.rawContent;
            if (this.into) {
                this.into.split("|").map(function (item) {
                    result_1 = _this._transform(result_1, _this.split(item), _this.intoData);
                });
            }
            if (typeof result_1 === "string") {
                var comp = this.registeredComponentFor("span");
                if (comp) {
                    comp.transform(result_1, [], this.intoData);
                }
                else {
                    console.error("Custom component 'span' is not defined.");
                }
            }
            else if (result_1 instanceof Array) {
                result_1.map(function (source) {
                    if (typeof source === "string") {
                        var comp = _this.registeredComponentFor("span");
                        if (comp) {
                            comp.transform(source, [], _this.intoData);
                        }
                        else {
                            console.error("Custom component 'span' is not defined.");
                        }
                    }
                });
            }
        }
    };
    IntoDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef },
        { type: ComponentPool },
        { type: ComponentFactoryResolver }
    ]; };
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
    return IntoDirective;
}());

var CommonPipesModule = /** @class */ (function () {
    function CommonPipesModule(pool) {
        pool.registerPipeTransformation('append', AppendPipe.transformationMethod());
        pool.registerPipeTransformation('if', ConditionalPipe.transformationMethod());
        pool.registerPipeTransformation('join', JoinPipe.transformationMethod());
        pool.registerPipeTransformation('map', MapPipe.transformationMethod());
        pool.registerPipeTransformation('mask', MaskPipe.transformationMethod());
        pool.registerPipeTransformation('prepend', PrependPipe.transformationMethod());
        pool.registerPipeTransformation('valueof', ValueOfPipe.transformationMethod());
        pool.registerPipeTransformation('wrap', WrapPipe.transformationMethod());
        pool.registerPipeTransformation('slice', function (content, args, callback, data) {
            // slice 5:12 OR slice 5
            var result;
            var start = parseInt(args[1], 10);
            var end = undefined;
            if (args.length > 2) {
                end = parseInt(args[2], 10);
            }
            var slicer = new SlicePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = end ? slicer.transform(content, start, end) : slicer.transform(content, start);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(end ? slicer.transform(cnt, start, end) : slicer.transform(cnt, start));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('number', function (content, args, callback, data) {
            // number:en_US:2   or number:en_US or number
            var result;
            var numLocal = "en_US";
            var numDecimal = undefined;
            if (args.length > 2) {
                numLocal = args[1];
                numDecimal = args[2];
            }
            var decimaler = new DecimalPipe(numLocal);
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = numDecimal ? decimaler.transform(content, numDecimal) : decimaler.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(numDecimal ? decimaler.transform(cnt, numDecimal) : decimaler.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('currency', function (content, args, callback, data) {
            // currency:en_US or currency
            var result;
            var cp = new CurrencyPipe(args.length > 1 ? args[1] : "en_US");
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = cp.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(cp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('lowercase', function (content, args, callback, data) {
            // lowercase
            var result;
            var lcp = new LowerCasePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = lcp.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(lcp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('uppercase', function (content, args, callback, data) {
            // uppercase
            var result;
            var ucp = new UpperCasePipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = ucp.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(ucp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('json', function (content, args, callback, data) {
            // json
            var result;
            var jcp = new JsonPipe();
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = jcp.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(jcp.transform(cnt));
                });
            }
            return result;
        });
        pool.registerPipeTransformation('date', function (content, args, callback, data) {
            // date:en_US:MMddyy OR date:\"MM/dd/yyyy hh:ss\"
            // const date = ((typeof content === "string") || !(content instanceof Array)) ? new Date(content) : content;
            var result;
            var dateLocal = "en_US";
            var dateFormat = args[1];
            if (args.length > 2) {
                dateLocal = args[1];
                dateFormat = args[2];
            }
            var dater = new DatePipe(dateLocal);
            if ((typeof content === "string") || !(content instanceof Array)) {
                result = dater.transform(content);
            }
            else {
                result = [];
                content.map(function (cnt) {
                    result.push(dater.transform(cnt));
                });
            }
            return result;
        });
    }
    CommonPipesModule_1 = CommonPipesModule;
    CommonPipesModule.forRoot = function () {
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
    };
    var CommonPipesModule_1;
    CommonPipesModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return CommonPipesModule;
}());

var InputIntoPipeModule = /** @class */ (function () {
    function InputIntoPipeModule(pool) {
        pool.registerComponent('input', InputComponent);
    }
    InputIntoPipeModule_1 = InputIntoPipeModule;
    InputIntoPipeModule.forRoot = function () {
        return {
            ngModule: InputIntoPipeModule_1,
            providers: []
        };
    };
    var InputIntoPipeModule_1;
    InputIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return InputIntoPipeModule;
}());

var InputGroupComponent = /** @class */ (function () {
    function InputGroupComponent(renderer) {
        this.renderer = renderer;
        this.onIntoComponentChange = new EventEmitter();
    }
    InputGroupComponent.prototype.focused = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.type === 'radio') {
            this.source = event.target.value;
        }
        else {
            var i = this.source.indexOf(event.target.value);
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
    };
    InputGroupComponent.prototype.isSelected = function (item) {
        var xitem = item.value ? item.value : item;
        if (this.type === 'radio') {
            return xitem === this.source;
        }
        var found = false;
        this.source.map(function (x) {
            if (xitem === x) {
                found = true;
            }
        });
        return found;
    };
    InputGroupComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.type = (source instanceof Array) ? 'checkbox' : 'radio';
    };
    InputGroupComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
    __decorate([
        Output("onIntoComponentChange")
    ], InputGroupComponent.prototype, "onIntoComponentChange", void 0);
    InputGroupComponent = __decorate([
        Component({
            selector: 'input-group-component',
            template: "\n    <span class=\"input-group-item\" *ngFor=\"let x of options; let i = index\">\n    <input \n      [type]=\"type\" \n      [id]=\"name + i\" \n      [name]=\"name + (type === 'radio' ? '' : i)\" \n      [value]=\"x.value ? x.value : x\" \n      [checked]=\"isSelected(x)\"\n      (focus)=\"focused($event)\"/>\n    <label [for]=\"name + i\" [textContent]=\"x.label ? x.label : x\"></label>\n    </span>\n    <span class=\"selected-value\" [textContent]=\"source\"></span>\n    ",
            styles: ["\n      :host {display:table;float:left;min-height: 23px}\n      :host .selected-value {display:none}\n      @media print {\n        :host .selected-value {display: block;}\n        :host .input-group-item {display: none;}\n      }\n      "]
        })
    ], InputGroupComponent);
    return InputGroupComponent;
}());

var InputGroupIntoPipeModule = /** @class */ (function () {
    function InputGroupIntoPipeModule(pool) {
        pool.registerComponent('inputgroup', InputGroupComponent);
    }
    InputGroupIntoPipeModule_1 = InputGroupIntoPipeModule;
    InputGroupIntoPipeModule.forRoot = function () {
        return {
            ngModule: InputGroupIntoPipeModule_1,
            providers: []
        };
    };
    var InputGroupIntoPipeModule_1;
    InputGroupIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return InputGroupIntoPipeModule;
}());

var JsonComponent = /** @class */ (function () {
    function JsonComponent() {
    }
    JsonComponent.prototype.transform = function (source, data, args) {
        this.source = source;
    };
    JsonComponent = __decorate([
        Component({
            selector: 'json-component',
            template: "<span class=\"json-view\" [textContent]=\"source | json\"></span>",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        .json-view {\n            display: inline-block;\n            float: left;\n            font-family: monospace;\n            padding: 5px;\n            white-space: pre-wrap;\n            unicode-bidi: embed;        \n        }\n        "]
        })
    ], JsonComponent);
    return JsonComponent;
}());

var JsonIntoPipeModule = /** @class */ (function () {
    function JsonIntoPipeModule(pool) {
        pool.registerComponent('json', JsonComponent);
    }
    JsonIntoPipeModule_1 = JsonIntoPipeModule;
    JsonIntoPipeModule.forRoot = function () {
        return {
            ngModule: JsonIntoPipeModule_1,
            providers: []
        };
    };
    var JsonIntoPipeModule_1;
    JsonIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return JsonIntoPipeModule;
}());

var LastUpdateComponent = /** @class */ (function () {
    function LastUpdateComponent() {
    }
    LastUpdateComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.showIcon = (args && args.length && args[0] === 'true');
    };
    LastUpdateComponent.prototype.formatDate = function () {
        var currentDate = new Date();
        var minute = 60000; // one minute
        var hour = 3600000; // one hour limit
        var day = 86400000; // 24 hours limit
        var week = 604800000; // 7 days limit
        var month = 604800000 * 4; // 7 days limit
        var year = 604800000 * 52; // 7 days limit
        var result = "";
        var diff = currentDate.getTime() - this.source.getTime();
        if (diff <= minute) { // up to a minute
            result = "seconds ago";
        }
        else if (diff <= hour) { // up to an hour
            var minutes = Math.floor(diff / minute);
            var seconds = Math.floor((diff - (minutes * minute)) / 1000);
            result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
        }
        else if (diff <= day) { // up to a day
            var hours = Math.floor(diff / hour);
            var minutes = Math.floor((diff - (hours * hour)) / minute);
            result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
        }
        else if (diff <= week) { // up to a week
            var days = Math.floor(diff / day);
            var hours = Math.floor((diff - (days * day)) / hour);
            result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
        }
        else if (diff <= month) { // up to a month
            var weeks = Math.floor(diff / week);
            var days = Math.floor((diff - (weeks * week)) / day);
            result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
        }
        else if (diff <= year) { // up to a week
            var months = Math.floor(diff / month);
            var weeks = Math.floor((diff - (months * month)) / week);
            result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
        }
        else {
            var years = Math.floor(diff / year);
            var months = Math.floor((diff - (years * year)) / month);
            result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
        }
        return result;
    };
    LastUpdateComponent = __decorate([
        Component({
            selector: 'lastupdate-component',
            template: "\n    <span *ngIf=\"showIcon\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></span>\n    <span>{{formatDate()}}</span>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px;position: relative}\n        .fa {margin:0 5px 0 0}\n        @media print {\n            :host .fa-clock-o {\n                display: none;\n            }\n        }\n        "]
        })
    ], LastUpdateComponent);
    return LastUpdateComponent;
}());

var LastUpdateIntoPipeModule = /** @class */ (function () {
    function LastUpdateIntoPipeModule(pool) {
        pool.registerComponent('lastupdate', LastUpdateComponent);
    }
    LastUpdateIntoPipeModule_1 = LastUpdateIntoPipeModule;
    LastUpdateIntoPipeModule.forRoot = function () {
        return {
            ngModule: LastUpdateIntoPipeModule_1,
            providers: []
        };
    };
    var LastUpdateIntoPipeModule_1;
    LastUpdateIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return LastUpdateIntoPipeModule;
}());

var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.thumbs = "";
        this.onIntoComponentChange = new EventEmitter();
    }
    LikeComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.data = data;
        this.showCount = (args && args.length && args[0] === 'true');
        this.thumbsup = (args && args.length > 1 && args[1] === 'true');
        this.key = (args && args.length > 2) ? args[2] : "";
        this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
        this.selected = (this.getItem(this.data[this.key]) !== null);
    };
    LikeComponent.prototype.keyup = function (event) {
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    LikeComponent.prototype.addItem = function (id) {
        var saved = localStorage.getItem(this.thumbs);
        if (saved) {
            var savedItems = JSON.parse(saved);
            savedItems.push(id);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
        }
        else {
            localStorage.setItem(this.thumbs, JSON.stringify([id]));
        }
        this.source++;
    };
    LikeComponent.prototype.removeItem = function (id) {
        var saved = localStorage.getItem(this.thumbs);
        if (saved) {
            var savedItems = JSON.parse(saved);
            var i = savedItems.indexOf(id);
            savedItems.splice(i, 1);
            localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
            this.source--;
        }
    };
    LikeComponent.prototype.getItem = function (id) {
        var saved = localStorage.getItem(this.thumbs);
        var found = null;
        if (saved) {
            var savedItems = JSON.parse(saved);
            var i = savedItems.indexOf(id);
            found = i < 0 ? null : savedItems[i];
        }
        return found;
    };
    LikeComponent.prototype.formatterSource = function () {
        var result = this.source;
        if (this.source > 1000) {
            result = (this.source / 1000).toFixed(1) + " k";
        }
        return result;
    };
    LikeComponent.prototype.toggleCount = function (event) {
        this.selected = !this.selected;
        event.stopPropagation();
        event.preventDefault();
        if (this.selected) {
            var existing = this.getItem(this.data[this.key]);
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
    };
    LikeComponent = __decorate([
        Component({
            selector: 'like-component',
            template: "\n    <a \n        id='like-{{id}}' \n        tabindex=\"0\" \n        class=\"like\" \n        [class.selected]=\"selected\" \n        (keyup)=\"keyup($event)\" \n        (click)='toggleCount($event)'>\n        <span class=\"fa fa-thumbs-up\" *ngIf=\"thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-up selected\" *ngIf=\"thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down\" *ngIf=\"!thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down selected\" *ngIf=\"!thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"counts\" *ngIf=\"showCount\" [textContent]=\"formatterSource()\"></span>\n    </a>",
            styles: ["\n        :host {display:table;float:left;min-height: 23px;position: relative}\n        .like {cursor: pointer;}\n        .like .counts{margin-left: 5px;}\n        .like .fa {margin: 0;}\n        .like .fa.selected {color: green;}\n        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}\n        "]
        })
    ], LikeComponent);
    return LikeComponent;
}());

var LikeIntoPipeModule = /** @class */ (function () {
    function LikeIntoPipeModule(pool) {
        pool.registerComponent('like', LikeComponent);
    }
    LikeIntoPipeModule_1 = LikeIntoPipeModule;
    LikeIntoPipeModule.forRoot = function () {
        return {
            ngModule: LikeIntoPipeModule_1,
            providers: []
        };
    };
    var LikeIntoPipeModule_1;
    LikeIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return LikeIntoPipeModule;
}());

var LinkComponent = /** @class */ (function () {
    function LinkComponent() {
        this.poped = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    LinkComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.target = (args && args.length) ? args[0] : "";
        this.title = (args && args.length > 1) ? args[1] : "";
        this.poper = (args && args.length > 2) ? (args[1] == 'true') : false;
        if (!this.title || !this.title.length) {
            var q = source.indexOf("?");
            var t = q < 0 ? source : source.substring(0, q);
            var d = t.lastIndexOf("/");
            this.title = d < 0 ? t : t.substring(d + 1);
        }
    };
    LinkComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    LinkComponent.prototype.change = function (event) {
        this.poped = false;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "click",
            item: event.type
        });
    };
    LinkComponent = __decorate([
        Component({
            selector: 'link-component',
            template: "\n    <a [href]=\"source\" \n        [target]=\"target\" \n        [textContent]=\"title\" \n        (mouseenter)='poped = true' \n        (mouseleave)='poped = false' \n        (keyup)='keyup($event)' \n        (click)=\"change($event)\"></a>\n        <img *ngIf='poped' [src]='source' />",
            styles: ["\n        :host {display:table;float:left;min-height: 23px; position:relative}\n        :host img{z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;display:table;float:left;min-height: 23px; width: 250px;top: 22px;position:absolute;border-radius: 4px}\n        @media print {\n            :host a {\n                text-decoration: none;\n            }\n        }\n        "]
        })
    ], LinkComponent);
    return LinkComponent;
}());

var LinkPipe = /** @class */ (function () {
    function LinkPipe() {
    }
    LinkPipe_1 = LinkPipe;
    LinkPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
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
    };
    LinkPipe.prototype.stringToLink = function (source, target, title) {
        if (!title || !title.length) {
            var q = source.indexOf("?");
            var t = q < 0 ? source : source.substring(0, q);
            var d = t.lastIndexOf("/");
            title = d < 0 ? t : t.substring(d + 1);
        }
        return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
    };
    LinkPipe.prototype.arrayToImagLink = function (sources, target, title) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToLink(source, target, ""));
        });
        return result;
    };
    LinkPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var target = (args && args.length) ? args[0] : "";
        var title = (args && args.length > 1) ? args[1] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToLink(source, target, title);
        }
        return this.arrayToImagLink(source, target, title);
    };
    var LinkPipe_1;
    LinkPipe = LinkPipe_1 = __decorate([
        Pipe({ name: 'link' })
    ], LinkPipe);
    return LinkPipe;
}());

var LinkIntoPipeModule = /** @class */ (function () {
    function LinkIntoPipeModule(pool) {
        pool.registerComponent('link', LinkComponent);
        pool.registerPipeTransformation('link', LinkPipe.transformationMethod());
    }
    LinkIntoPipeModule_1 = LinkIntoPipeModule;
    LinkIntoPipeModule.forRoot = function () {
        return {
            ngModule: LinkIntoPipeModule_1,
            providers: [LinkPipe]
        };
    };
    var LinkIntoPipeModule_1;
    LinkIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return LinkIntoPipeModule;
}());

var PhoneComponent = /** @class */ (function () {
    function PhoneComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    PhoneComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.isLink = args.length ? args[0] === 'true' : false;
        this.formatting = args.length > 1 ? args[1] === 'true' : false;
    };
    PhoneComponent.prototype.normalizeSource = function () {
        var result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            var b = result.slice(0, 10);
            var e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    };
    PhoneComponent.prototype.formattedSource = function () {
        var result = this.source;
        if (this.formatting) {
            result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
            result = result[0] === '1' ? result.substring(1) : result;
            if (result.length === 10) {
                result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            }
            else if (result.length > 10) {
                var b = result.slice(0, 10);
                var e = result.slice(10);
                result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                result += (' ext. ' + e);
            }
        }
        return result;
    };
    PhoneComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    PhoneComponent.prototype.change = function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: event.type
        });
    };
    PhoneComponent = __decorate([
        Component({
            selector: 'phone',
            template: "\n    <a  *ngIf=\"isLink\" [href]=\"'tel:' + normalizeSource()\" (keyup)='keyup($event)' (click)=\"change($event)\">\n        <span class='fa fa-phone' aria-hidden='true'></span>\n        <span [textContent]=\"formattedSource()\"></span>\n    </a>\n    <span *ngIf=\"!isLink\">\n        <span class='fa fa-phone' aria-hidden='true'></span>\n        <span [textContent]=\"formattedSource()\"></span>\n    </span>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        :host a:hover .fa-phone{color: #fabdab;}\n        :host .fa{margin: 0 5px;}\n        @media print {\n            :host a { text-decoration: none }\n            :host .fa-phone {display: none;}\n            :host a .fa-phone {display: none;}\n        }\n        "]
        })
    ], PhoneComponent);
    return PhoneComponent;
}());

var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe_1 = PhonePipe;
    PhonePipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            // prepend:something
            return new PhonePipe_1().transform(content, args.length > 1 ? args[1] === 'true' : false, args.length > 2 ? args[2] === 'true' : false);
        };
        return x;
    };
    PhonePipe.prototype.phoneFromString = function (source, link, format) {
        return link ?
            "<a href='tel:" + this.normalizeSource(source) + "'><span class='fa fa-phone' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></a>" :
            "<span><span class='fa fa-phone' style='margin: 0 5px' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></span>";
    };
    PhonePipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var link = ((args && args.length) ? args[0] : false);
        var format = ((args && args.length > 1) ? args[1] : false);
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.phoneFromString(source, link, format);
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.phoneFromString(item, link, format));
            });
            return result_1;
        }
    };
    PhonePipe.prototype.normalizeSource = function (source) {
        var result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result + ';ext=' + result;
        }
        else if (result.length > 10) {
            var b = result.slice(0, 10);
            var e = result.slice(10);
            result = '+1' + b + ';ext=' + e;
        }
        return result;
    };
    PhonePipe.prototype.formattedSource = function (source) {
        var result = source.replace(/[\ \-\.\(\)\+]/g, '');
        result = result[0] === '1' ? result.substring(1) : result;
        if (result.length === 10) {
            result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        }
        else if (result.length > 10) {
            var b = result.slice(0, 10);
            var e = result.slice(10);
            result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            result += (' ext. ' + e);
        }
        return result;
    };
    var PhonePipe_1;
    PhonePipe = PhonePipe_1 = __decorate([
        Pipe({ name: 'phone' })
    ], PhonePipe);
    return PhonePipe;
}());

var PhoneIntoPipeModule = /** @class */ (function () {
    function PhoneIntoPipeModule(pool) {
        pool.registerComponent('phone', PhoneComponent);
        pool.registerPipeTransformation('phone', PhonePipe.transformationMethod());
    }
    PhoneIntoPipeModule_1 = PhoneIntoPipeModule;
    PhoneIntoPipeModule.forRoot = function () {
        return {
            ngModule: PhoneIntoPipeModule_1,
            providers: [PhonePipe]
        };
    };
    var PhoneIntoPipeModule_1;
    PhoneIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return PhoneIntoPipeModule;
}());

var RatingComponent = /** @class */ (function () {
    function RatingComponent(el) {
        this.el = el;
        this.singleStar = false;
        this.value = [];
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    RatingComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    RatingComponent.prototype.click = function () {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'rating'
        });
    };
    RatingComponent.prototype.transform = function (source, data, args) {
        this.float = parseFloat(source);
        this.singleStar = args.length ? (args[0] === 'true') : false;
        this.source = source;
        var size = parseInt(source, 10);
        for (var i = 0; i < size; i++) {
            this.value.push(i);
        }
    };
    RatingComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        HostListener('keyup', ['$event'])
    ], RatingComponent.prototype, "keyup", null);
    __decorate([
        HostListener('click', [])
    ], RatingComponent.prototype, "click", null);
    RatingComponent = __decorate([
        Component({
            selector: 'rating-component',
            template: "\n    <span class='rating' *ngIf=\"singleStar\">\n        <span class='fa fa-star' aria-hidden='true'></span>\n    </span>\n    <span class='rating' *ngIf=\"!singleStar\">\n        <span class='fa fa-star' aria-hidden='true' *ngFor=\"let x of value\"></span>\n        <span class='fa fa-star-half' aria-hidden='true' *ngIf=\"float != value\"></span>\n    </span>\n    <span class='rate-value' [textContent]=\"source\"></span>\n    ",
            styles: ["\n        :host {display:table;float:left;min-height: 23px;cursor:pointer}\n        .rating {\n            display: inline-block;\n        }\n        @media print {\n            :host .rating {\n                display: none;\n            }\n        }\n        "]
        })
    ], RatingComponent);
    return RatingComponent;
}());

var RatingPipe = /** @class */ (function () {
    function RatingPipe() {
    }
    RatingPipe_1 = RatingPipe;
    RatingPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            return new RatingPipe_1().transform(content, "");
        };
        return x;
    };
    RatingPipe.prototype.rateString = function (source, multiStart) {
        var value = parseInt(source, 10);
        var float = parseFloat(source);
        var x = "<span class='rating'>";
        if (multiStart) {
            for (var i = 0; i < value; i++) {
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
    };
    RatingPipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var singleStar = args.length ? (args[0] === 'true') : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.rateString(source, singleStar);
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.rateString(item, singleStar));
            });
            return result_1;
        }
    };
    var RatingPipe_1;
    RatingPipe = RatingPipe_1 = __decorate([
        Pipe({ name: 'raiting' })
    ], RatingPipe);
    return RatingPipe;
}());

var RatingIntoPipeModule = /** @class */ (function () {
    function RatingIntoPipeModule(pool) {
        pool.registerComponent('rating', RatingComponent);
        pool.registerPipeTransformation('rating', RatingPipe.transformationMethod());
    }
    RatingIntoPipeModule_1 = RatingIntoPipeModule;
    RatingIntoPipeModule.forRoot = function () {
        return {
            ngModule: RatingIntoPipeModule_1,
            providers: [RatingPipe]
        };
    };
    var RatingIntoPipeModule_1;
    RatingIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return RatingIntoPipeModule;
}());

var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(el) {
        this.el = el;
        this.onIntoComponentChange = new EventEmitter();
        el.nativeElement.setAttribute('tabindex', '0');
    }
    NoticeComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    NoticeComponent.prototype.click = function () {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: 'click',
            item: 'notice'
        });
    };
    NoticeComponent.prototype.transform = function (source, data, args) {
        this.message = args.length ? args[0] : undefined;
        this.source = source;
        this.el.nativeElement.setAttribute('title', this.message);
    };
    NoticeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        HostListener('keyup', ['$event'])
    ], NoticeComponent.prototype, "keyup", null);
    __decorate([
        HostListener('click', [])
    ], NoticeComponent.prototype, "click", null);
    NoticeComponent = __decorate([
        Component({
            selector: 'notice-component',
            template: "\n        <span class='fa fa-bell' aria-hidden='true'></span>\n        <span class='notice' [textContent]=\"source\"></span>\n    ",
            styles: ["\n        :host {display: table;position: relative;float: left;cursor:pointer}\n        :host .fa{font-size: 1rem;}\n        :host:hover{color: red;}\n        :host:hover .fa{color: red;}\n        :host:hover .notice{background-color: #000;}\n        .notice {display: table;width: 17px;height: 15px;\n            border-radius: 50%;text-align: center;\n            background-color: rgba(55,155,255,0.9);\n            float: right;font-size: 0.7rem;line-height: 1rem;\n            margin-left: -5px;z-index: 2;color: #fff;\n        }\n        "]
        })
    ], NoticeComponent);
    return NoticeComponent;
}());

var NoticePipe = /** @class */ (function () {
    function NoticePipe() {
    }
    NoticePipe_1 = NoticePipe;
    NoticePipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            return new NoticePipe_1().transform(content, "");
        };
        return x;
    };
    NoticePipe.prototype.noticeString = function (source, message) {
        return "\n        <span style='display:table;possition:relative;float:left' alt='" + message + "'>\n          <span class='fa fa-star' aria-hidden='true'></span>\n          <span style='display: table;width: 17px;height: 15px;border-radius: 50%;text-align: center;background-color: rgba(200,200,200,0.2);float: right;font-size: 0.8rem;margin-left: -5px'>" +
            source +
            " </span>\n        </span>";
    };
    NoticePipe.prototype.transform = function (source) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var message = args.length ? args[0] : undefined;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.noticeString(source, message);
        }
        else {
            var result_1 = [];
            source.map(function (item) {
                result_1.push(_this.noticeString(item, message));
            });
            return result_1;
        }
    };
    var NoticePipe_1;
    NoticePipe = NoticePipe_1 = __decorate([
        Pipe({ name: 'notice' })
    ], NoticePipe);
    return NoticePipe;
}());

var NoticeIntoPipeModule = /** @class */ (function () {
    function NoticeIntoPipeModule(pool) {
        pool.registerComponent('notice', NoticeComponent);
        pool.registerPipeTransformation('notice', NoticePipe.transformationMethod());
    }
    NoticeIntoPipeModule_1 = NoticeIntoPipeModule;
    NoticeIntoPipeModule.forRoot = function () {
        return {
            ngModule: NoticeIntoPipeModule_1,
            providers: [NoticePipe]
        };
    };
    var NoticeIntoPipeModule_1;
    NoticeIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return NoticeIntoPipeModule;
}());

var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.multiselect = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    SelectComponent.prototype.click = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    SelectComponent.prototype.change = function (event) {
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
    };
    SelectComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.data = data;
        this.options = this.service.getDataFor(this.name, this.id, data);
        this.multiselect = args.length ? args[0] === true : false;
    };
    __decorate([
        Output("onIntoComponentChange")
    ], SelectComponent.prototype, "onIntoComponentChange", void 0);
    SelectComponent = __decorate([
        Component({
            selector: 'select-component',
            template: "\n    <select tabindex=\"0\" \n      [multiple]=\"multiselect ? true:null\" \n      (click)=\"click($event)\" \n      (change)=\"change($event)\">\n        <option *ngFor=\"let x of options\" \n          [attr.selected]=\"source === x ? 'selected' : null\"  \n          [value]=\"x\" \n          [textContent]=\"x\"></option>\n    </select>\n    ",
            styles: ["\n      :host {display:table;float:left;min-height: 23px}\n      @media print {\n        :host select {\n            border: 0;\n        }\n        :host select::-ms-expand {display: none;}\n        :host select {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          appearance: none;\n          text-indent: 0.01px;\n          text-overflow: \"\";\n          text-indent: 1px;\n          text-overflow: '';\n        }\n      }\n      "]
        })
    ], SelectComponent);
    return SelectComponent;
}());

var SelectIntoPipeModule = /** @class */ (function () {
    function SelectIntoPipeModule(pool) {
        pool.registerComponent('select', SelectComponent);
    }
    SelectIntoPipeModule_1 = SelectIntoPipeModule;
    SelectIntoPipeModule.forRoot = function () {
        return {
            ngModule: SelectIntoPipeModule_1,
            providers: []
        };
    };
    var SelectIntoPipeModule_1;
    SelectIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return SelectIntoPipeModule;
}());

var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
        this.shouldDisplay = false;
        this.shareList = []; // list of sites to show on share view.
        this.onIntoComponentChange = new EventEmitter();
    }
    ShareComponent.prototype.shareInfo = function (type, address) {
        return {
            icon: 'fa fa-' + type,
            href: address,
            title: 'share with ' + type
        };
    };
    ShareComponent.prototype.keyup = function (event) {
        var code = event.which;
        event.stopPropagation();
        event.preventDefault();
        if (code === 13) {
            event.target.click();
        }
    };
    ShareComponent.prototype.change = function (event) {
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            item: event.title
        });
    };
    ShareComponent.prototype.toggleShare = function () {
        this.shouldDisplay = !this.shouldDisplay;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: 'Share options',
            type: 'share',
            item: this.shouldDisplay ? 'open' : 'close'
        });
    };
    ShareComponent.prototype.transform = function (source, data, args) {
        var _this = this;
        this.source = source;
        var list = (args[0] instanceof Array) ? args[0] : args;
        list.map(function (arg) {
            if (arg === 'facebook') {
                _this.shareList.push(_this.shareInfo('facebook', 'http://www.facebook.com/sharer.php?u=' + source));
            }
            else if (arg === 'twitter') {
                _this.shareList.push(_this.shareInfo('twitter', 'https://twitter.com/share?title=&amp;url=' + source));
            }
            else if (arg === 'linkedin') {
                _this.shareList.push(_this.shareInfo('linkedin', 'http://www.linkedin.com/shareArticle?title=&amp;url=' + source));
            }
            else if (arg === 'google') {
                _this.shareList.push(_this.shareInfo('google-plus', 'https://plus.google.com/share?url=' + source));
            }
            else if (arg === 'pinterest') {
                _this.shareList.push(_this.shareInfo('google-plus', 'http://pinterest.com/pin/create/link/?url=' + source));
            }
            else if (arg === 'digg') {
                _this.shareList.push(_this.shareInfo('digg', 'http://digg.com/submit?url=' + source));
            }
            else if (arg === 'get-pocket') {
                _this.shareList.push(_this.shareInfo('get-pocket', 'https://getpocket.com/edit?url=' + source));
            }
            else if (arg === 'xing') {
                _this.shareList.push(_this.shareInfo('xing', 'https://www.xing.com/app/user?op=share&url=' + source));
            }
            else if (arg === 'stumbleupon') {
                _this.shareList.push(_this.shareInfo('stumbleupon', 'http://www.stumbleupon.com/submit?url=' + source));
            }
        });
    };
    ShareComponent = __decorate([
        Component({
            selector: 'share-component',
            template: "\n    <a id='share-comment-{{id}}' \n        tabindex=\"0\" \n        class='share-item-tips' \n        (keyup)='keyup($event)'\n        (click)='toggleShare()'>\n    <span class=\"fa fa-share-alt\"></span>\n    <span class=\"share\">share</span>\n    </a>\n    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>\n      <span class='social-referal'>\n        <a *ngFor=\"let share of shareList\" \n            (keyup)='keyup($event)'\n            (click)='change(share)'\n            [class]='share.icon' target='_blank' \n            [href]='share.href'><span class='off-screen' [textContent]=\"share.title\"></span></a>\n      </span>\n    </span>\n",
            styles: ["\n    :host {display:table;float:left;min-height: 23px;position: relative}\n    .share-item-tips {cursor: pointer;}\n    .share-item-tips:hover {color: #fabdab;}\n    .share-item-tips .fa {margin: 0;}\n    .share-item-tips:hover .fa{color: #fabdab;}\n    .share-item-tips .share{margin-left: 5px;}\n    .tips {\n        position: absolute;\n        display: flex;\n        flex-direction: row;\n        padding: 5px;\n        border: 1px solid #aaa;\n        border-radius: 2px;\n        background-color: #fff;\n        z-index: 2;\n    }\n    .tips .social-referal {\n        display: flex;\n        flex-direction: row;\n    }\n    .tips .social-referal .fa {\n        float: left;\n        padding: 2px 4px;\n        color: blue;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        text-decoration: none;\n        margin: 0 1px;\n        width: 20px;\n        text-align: center;\n    }\n    .tips .social-referal .fa:hover {\n        color: #fff;\n        background-color: blue;\n    }\n    "]
        })
    ], ShareComponent);
    return ShareComponent;
}());

var ShareIntoPipeModule = /** @class */ (function () {
    function ShareIntoPipeModule(pool) {
        pool.registerComponent('share', ShareComponent);
    }
    ShareIntoPipeModule_1 = ShareIntoPipeModule;
    ShareIntoPipeModule.forRoot = function () {
        return {
            ngModule: ShareIntoPipeModule_1,
            providers: []
        };
    };
    var ShareIntoPipeModule_1;
    ShareIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return ShareIntoPipeModule;
}());

var SpanComponent = /** @class */ (function () {
    function SpanComponent() {
    }
    SpanComponent.prototype.transform = function (source, data, args) {
        this.source = source;
    };
    SpanComponent = __decorate([
        Component({
            selector: 'span-component',
            template: "<span [textContent]=\"source\"></span>",
            styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        "]
        })
    ], SpanComponent);
    return SpanComponent;
}());

var SpanIntoPipeModule = /** @class */ (function () {
    function SpanIntoPipeModule(pool) {
        pool.registerComponent('span', SpanComponent);
    }
    SpanIntoPipeModule_1 = SpanIntoPipeModule;
    SpanIntoPipeModule.forRoot = function () {
        return {
            ngModule: SpanIntoPipeModule_1,
            providers: []
        };
    };
    var SpanIntoPipeModule_1;
    SpanIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return SpanIntoPipeModule;
}());

var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.headers = [];
        this.rows = [];
        this.onIntoComponentChange = new EventEmitter();
    }
    TableComponent.prototype.transform = function (source, data, args) {
        var _this = this;
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
                source.map(function (item) {
                    _this.rows.push({ value: item });
                });
                this.headers.push('value');
            }
        }
        else {
            this.rows.push({ value: source });
            this.headers.push('value');
        }
    };
    TableComponent.prototype.getHeaders = function (obj) {
        var _this = this;
        Object.keys(obj).map(function (item) {
            _this.headers.push(item);
        });
    };
    TableComponent = __decorate([
        Component({
            selector: 'table-component',
            template: "\n    <table [id]=\"id\" class=\"piped-table\">\n        <caption *ngIf=\"name\" [textContent]=\"name\"></caption>\n        <tr><th scope=\"col\" *ngFor=\"let header of headers\" [textContent]=\"header\"></th></tr>\n        <tr *ngFor=\"let row of rows\"><td *ngFor=\"let header of headers\" [textContent]=\"row[header]\"></td></tr>\n    </table>\n    ",
            styles: ["\n        :host .piped-table {padding: 0;width: 100%;border-collapse: collapse;}\n        :host .piped-table caption {background-color: #c3e5e2;border-radius: 2px;color: #1b1b1b;caption-side: top;font-size: 14px;padding: 5px 6px;margin-bottom: 15px;text-align: left;}\n        :host .piped-table th {user-select: none;height: 24px;position: relative;white-space: nowrap;font-weight: normal;text-transform: uppercase;font-size: 14px;padding-top: 6px;padding-bottom: 6px;text-align: left;}\n        :host .piped-table td {padding-left: 3px;min-height: 21px;}\n        "]
        })
    ], TableComponent);
    return TableComponent;
}());

var TablePipe = /** @class */ (function () {
    function TablePipe() {
    }
    TablePipe_1 = TablePipe;
    TablePipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
            return new TablePipe_1().transform(content, args.length > 1 ? args[1] : '', args.length > 2 ? args[2] : undefined);
        };
        return x;
    };
    TablePipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var id = args.length ? args[0] : '';
        var name = args.length > 1 ? args[1] : undefined;
        var headers = [];
        var rows = [];
        this.buildTable(source, rows, headers);
        var result = "<table style='width: 100%' id='" + id + "'>" + (name ? "<caption style='text-align:left;background-color: #c3e5e2;'>" + name + "</caption>" : "") + "<tr>";
        headers.map(function (header) {
            result += ("<th style='text-align: left;font-weight:normal;text-transform: uppercase;' scope='col'>" + header + "</th>");
        });
        result += "</tr>";
        rows.map(function (row) {
            result += "<tr>";
            headers.map(function (header) {
                result += ("<td>" + row[header] + "</td>");
            });
            result += "</tr>";
        });
        result += "</table>";
        return result;
    };
    TablePipe.prototype.buildTable = function (source, rows, headers) {
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
                source.map(function (item) {
                    rows.push({ value: item });
                });
                headers.push('value');
            }
        }
        else {
            rows.push({ value: source });
            headers.push('value');
        }
    };
    TablePipe.prototype.getHeaders = function (obj, headers) {
        Object.keys(obj).map(function (item) {
            headers.push(item);
        });
    };
    var TablePipe_1;
    TablePipe = TablePipe_1 = __decorate([
        Pipe({ name: 'table' })
    ], TablePipe);
    return TablePipe;
}());

var TableIntoPipeModule = /** @class */ (function () {
    function TableIntoPipeModule(pool) {
        pool.registerComponent('table', TableComponent);
        pool.registerPipeTransformation('table', TablePipe.transformationMethod());
    }
    TableIntoPipeModule_1 = TableIntoPipeModule;
    TableIntoPipeModule.forRoot = function () {
        return {
            ngModule: TableIntoPipeModule_1,
            providers: [
                TablePipe
            ]
        };
    };
    var TableIntoPipeModule_1;
    TableIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return TableIntoPipeModule;
}());

var TextComponent = /** @class */ (function () {
    function TextComponent(renderer) {
        this.renderer = renderer;
        this.rows = 4;
        this.limit = 0;
        this.editName = false;
        this.counter = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    TextComponent.prototype.keyup = function (event) {
        var _this = this;
        var code = event.which;
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
                setTimeout(function () {
                    if (_this.nameHolder) {
                        _this.renderer.invokeElementMethod(_this.nameHolder.nativeElement, "focus");
                    }
                }, 99);
            }
        }
    };
    TextComponent.prototype.blur = function (event) {
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
    };
    TextComponent.prototype.focus = function (event) {
        this.click(event);
    };
    TextComponent.prototype.click = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        this.editName = true;
        setTimeout(function () {
            if (_this.nameEditor) {
                _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
            }
        }, 99);
    };
    TextComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.oldValue = source;
        this.rows = args.length ? args[0] : 4;
        this.limit = args.length > 1 ? args[1] : 0;
        this.counter = args.length > 2 ? args[2] : false;
    };
    TextComponent.ctorParameters = function () { return [
        { type: Renderer }
    ]; };
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
            template: "\n    <span class=\"text-wrapper\" *ngIf=\"editName\">\n      <textarea #nameEditor\n        [id]=\"id\"\n        [name]=\"name\"\n        [value]=\"source\"\n        [attr.maxlength]=\"limit ? limit : null\"\n        [rows]=\"rows\"\n        (blur)=\"blur($event)\" \n        (keyup)='keyup($event)'></textarea>\n      <span *ngIf=\"counter\" class=\"counter\" \n        [textContent]=\"limit ? (limit - source.length) + ' remaining' : source.length + ' typed'\"></span>\n    </span>\n    <span #nameHolder\n        *ngIf='!editName'\n        class='locked' \n        tabindex='0' \n        (click)='click($event)'\n        (keyup)='focus($event)'\n        [innerHTML]=\"source\">\n    </span>\n    ",
            styles: ["\n        .locked {\n          display: block;\n          cursor: pointer;\n          min-height: 23px;\n          min-width: 33px;\n          -webkit-user-select: none;       \n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          border: 1px solid transparent;\n        }\n        .text-wrapper{box-sizing: border-box;display:table;width: 100%;}\n        .text-wrapper textarea {box-sizing: border-box;display:block;cursor: beam;width: 100%;}\n        .counter{display: table;float:right;color: #ddd;}\n        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 23px;min-width: 33px;}\n        :host .locked:hover{border: 1px solid #fabdab;}\n        "]
        })
    ], TextComponent);
    return TextComponent;
}());

var TextIntoPipeModule = /** @class */ (function () {
    function TextIntoPipeModule(pool) {
        pool.registerComponent('text', TextComponent);
    }
    TextIntoPipeModule_1 = TextIntoPipeModule;
    TextIntoPipeModule.forRoot = function () {
        return {
            ngModule: TextIntoPipeModule_1,
            providers: []
        };
    };
    var TextIntoPipeModule_1;
    TextIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return TextIntoPipeModule;
}());

var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
        this.hasControls = true;
        this.hoverPlay = false;
        this.onIntoComponentChange = new EventEmitter();
    }
    VideoComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.width = (args && args.length) ? args[0] : "";
        this.height = (args && args.length > 1) ? args[1] : "";
        this.alt = (args && args.length > 2) ? args[2] : "";
        this.hasControls = (args && args.length > 3) ? (args[3] === 'true') : true;
        this.hoverPlay = (args && args.length > 4) ? (args[4] === 'true') : false;
        if ((typeof source === "string") || !(source instanceof Array)) {
            if (!this.alt || !this.alt.length) {
                var q = source.indexOf("?");
                var t = q < 0 ? source : source.substring(0, q);
                var d = t.lastIndexOf("/");
                this.alt = d < 0 ? t : t.substring(d + 1);
            }
        }
    };
    VideoComponent.prototype.updateControls = function (event) {
        if (this.hasControls) {
            event.target.setAttribute('controls', 'true');
        }
        if (this.hoverPlay) {
            event.target.play();
        }
    };
    VideoComponent.prototype.resetControls = function (event) {
        if (this.hoverPlay && this.isPlaying(event.target)) {
            event.target.pause();
        }
    };
    VideoComponent.prototype.isPlaying = function (video) {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    };
    VideoComponent.prototype.keyup = function (event) {
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
    VideoComponent.prototype.change = function (event) {
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
    VideoComponent = __decorate([
        Component({
            selector: 'video-component',
            template: "\n    <video tabindex=\"0\"\n        (focus)=\"updateControls($event)\"\n        (mouseenter)=\"updateControls($event)\"\n        (mouseleave)=\"resetControls($event)\"\n        (keyup)=\"keyup($event)\"\n        (play)=\"change($event)\"\n        (ended)=\"change($event)\"\n        (pause)=\"change($event)\"\n        (seeked)=\"change($event)\"\n        (error)=\"change($event)\"\n        (fullscreenchange)=\"change($event)\"\n        [src]=\"source\" \n        [style.width]=\"width\" \n        [style.height]=\"height\"\n        [title]=\"alt\"></video>\n    ",
            styles: ["\n    :host {display:table;float:left;min-height: 23px}\n    "]
        })
    ], VideoComponent);
    return VideoComponent;
}());

var VideoPipe = /** @class */ (function () {
    function VideoPipe() {
    }
    VideoPipe_1 = VideoPipe;
    VideoPipe.transformationMethod = function () {
        var x = function (content, args, callback, data) {
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
    };
    VideoPipe.prototype.stringToVideo = function (source, width, height, alt) {
        if (!alt || !alt.length) {
            var q = source.indexOf("?");
            var t = q < 0 ? source : source.substring(0, q);
            var d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<video src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\'  controls=\'true\' />";
    };
    VideoPipe.prototype.arrayToVideo = function (sources, width, height, alt) {
        var _this = this;
        var result = [];
        sources.map(function (source) {
            result.push(_this.stringToVideo(source, width, height, alt));
        });
        return result;
    };
    VideoPipe.prototype.transform = function (source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var width = (args && args.length) ? "width: " + args[0] + ";" : "";
        var height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        var alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToVideo(source, width, height, alt);
        }
        return this.arrayToVideo(source, width, height, "");
    };
    var VideoPipe_1;
    VideoPipe = VideoPipe_1 = __decorate([
        Pipe({ name: 'video' })
    ], VideoPipe);
    return VideoPipe;
}());

var VideoIntoPipeModule = /** @class */ (function () {
    function VideoIntoPipeModule(pool) {
        pool.registerComponent('video', VideoComponent);
        pool.registerPipeTransformation('video', VideoPipe.transformationMethod());
    }
    VideoIntoPipeModule_1 = VideoIntoPipeModule;
    VideoIntoPipeModule.forRoot = function () {
        return {
            ngModule: VideoIntoPipeModule_1,
            providers: [VideoPipe]
        };
    };
    var VideoIntoPipeModule_1;
    VideoIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return VideoIntoPipeModule;
}());

var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    SwitchComponent.prototype.keyup = function (event) {
        var code = event.which;
        if (code === 13) {
            event.target.click();
        }
    };
    SwitchComponent.prototype.click = function (event) {
        var _this = this;
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
        setTimeout(function () {
            if (_this.check) {
                _this.check.nativeElement.focus();
            }
            if (_this.uncheck) {
                _this.uncheck.nativeElement.focus();
            }
        }, 66);
    };
    SwitchComponent.prototype.transform = function (source, data, args) {
        this.ideal = args.length ? String(args[0]) : "";
        this.onText = args.length > 1 ? args[1] : 'ON';
        this.offText = args.length > 2 ? args[2] : 'OFF';
        this.source = String(source);
        this.data = data;
        this.original = this.source === this.ideal ? "" : source;
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
            template: "\n      <span *ngIf=\"source === ideal\" \n          #check tabindex=\"0\" \n          class=\"switch fa fa-toggle-on\" \n          aria-checked=\"true\"\n          role=\"checkbox\"\n          (keyup)=\"keyup($event)\" \n          (click)=\"click($event)\"></span>\n      <span *ngIf=\"source !== ideal\"\n          #uncheck tabindex=\"0\" \n          class=\"switch fa fa-toggle-off\" \n          aria-checked=\"false\"\n          role=\"checkbox\"\n          (keyup)=\"keyup($event)\" \n          (click)=\"click($event)\"></span>\n      <span class=\"text\" [class.selected]=\"source === ideal\" \n        [textContent]=\"source === ideal ? onText : offText\"></span>\n\n    ",
            styles: ["\n      :host {display:table;float:left;min-height: 23px}\n      :host .switch {font-size: 1.4rem; cursor: pointer;float: left}\n      :host .switch:hover{color: #fabdab;}\n      :host .switch.fa-toggle-on {color: green}\n      :host .switch.fa-toggle-off {color: red}\n      :host .text {font-size: 1.2rem; text-transform: uppercase; float: left; margin-left: 5px; color: red}\n      :host .text.selected {color:  green}\n      "]
        })
    ], SwitchComponent);
    return SwitchComponent;
}());

var SwitchIntoPipeModule = /** @class */ (function () {
    function SwitchIntoPipeModule(pool) {
        pool.registerComponent('switch', SwitchComponent);
    }
    SwitchIntoPipeModule_1 = SwitchIntoPipeModule;
    SwitchIntoPipeModule.forRoot = function () {
        return {
            ngModule: SwitchIntoPipeModule_1,
            providers: []
        };
    };
    var SwitchIntoPipeModule_1;
    SwitchIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return SwitchIntoPipeModule;
}());

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.onIntoComponentChange = new EventEmitter();
    }
    SliderComponent.prototype.keyup = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var code = event.which;
        if (((code >= 48) && (code <= 90)) ||
            ((code >= 96) && (code <= 111)) ||
            ((code == 32) || (code == 8)) ||
            ((code >= 186) && (code <= 222))) {
            this.source = event.target.value;
        }
    };
    SliderComponent.prototype.oninput = function (event) {
        this.source = event.target.value;
    };
    SliderComponent.prototype.onchange = function (event) {
        this.source = event.target.value;
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.source,
            type: "slider",
            item: this.data
        });
    };
    SliderComponent.prototype.transform = function (source, data, args) {
        this.source = source;
        this.data = data;
        this.length = args.length ? parseFloat(args[0]) : 200;
        this.vertical = args.length > 1 ? String(args[1]) === 'true' : false;
        this.showRange = args.length > 2 ? String(args[2]) === 'true' : false;
        this.min = args.length > 3 ? args[3] : 0;
        this.max = args.length > 4 ? args[4] : 100;
    };
    __decorate([
        Output("onIntoComponentChange")
    ], SliderComponent.prototype, "onIntoComponentChange", void 0);
    SliderComponent = __decorate([
        Component({
            selector: 'slider-component',
            template: "\n    <span \n      class=\"slidecontainer\" \n      [style.width]=\"!vertical ? length + 'px' : null\"\n      [style.height]=\"vertical ? length + 'px' : null\"\n      [class.vertical]=\"vertical\">\n      <span class=\"range\" *ngIf=\"showRange\">\n      <span class=\"min\" [textContent]=\"min\"></span>\n      <span class=\"value\" [textContent]=\"source\"></span>\n      <span class=\"max\" [textContent]=\"max\"></span>\n      </span>\n      <input \n        type=\"range\"\n        class=\"slider\" \n        (input)=\"oninput($event)\"\n        (change)=\"onchange($event)\"\n        [attr.value]=\"source\" \n        [attr.min]=\"min\" \n        [attr.max]=\"max\" \n        [attr.id]=\"id\" />\n    </span>\n    ",
            styles: ["\n        :host .slidecontainer {display: table;}\n        :host .slidecontainer .range {position: relative; display: table; height: 12px; font-size: 0.8rem;width: 100%}\n        :host .slidecontainer .range .min {position: absolute;left: 0;top: 0}\n        :host .slidecontainer .range .value {position: absolute;left: 50%;top: 0}\n        :host .slidecontainer .range .max {position: absolute;right: 0;top: 0}\n        :host .slidecontainer .slider {\n          -webkit-appearance: none;\n          background: #d3d3d3;\n          outline: none;\n          opacity: 0.7;\n          -webkit-transition: .2s;\n          transition: opacity .2s;\n          border: 2px inset #aaa;\n          border-radius: 33%;\n          width: 100%;\n          height: 1px;\n        }\n        :host .slidecontainer.vertical .slider {transform: rotate(270deg); margin: 50% -50%;}\n        :host .slidecontainer.vertical .range {width: 33px;height: 85%; float: left}\n        :host .slidecontainer.vertical .range .min {top: inherit; right:5px; bottom: 0;}\n        :host .slidecontainer.vertical .range .value {left: inherit;right: 5px;top: 50%}\n        :host .slidecontainer.vertical .range .max {right:5px; top: 0;}\n        :host .slider:hover {opacity: 1;}\n        :host .slider::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          appearance: none;\n          background: #444;\n          background-image: linear-gradient(#444, #ddd, #444);\n          cursor: pointer;\n          border-radius: 5px;\n          border: 2px solid #000;\n          width: 22px;\n          height: 12px;\n        }\n        :host .slider::-moz-range-thumb {\n          background: #444;\n          background-image: linear-gradient(#444, #ddd, #444);\n          border-radius: 5px;\n          border: 2px solid #000;\n          cursor: pointer;\n          width: 22px;\n          height: 10px;\n        }\n        "]
        })
    ], SliderComponent);
    return SliderComponent;
}());

var SliderIntoPipeModule = /** @class */ (function () {
    function SliderIntoPipeModule(pool) {
        pool.registerComponent('slider', SliderComponent);
    }
    SliderIntoPipeModule_1 = SliderIntoPipeModule;
    SliderIntoPipeModule.forRoot = function () {
        return {
            ngModule: SliderIntoPipeModule_1,
            providers: []
        };
    };
    var SliderIntoPipeModule_1;
    SliderIntoPipeModule.ctorParameters = function () { return [
        { type: ComponentPool, decorators: [{ type: Inject, args: [ComponentPool,] }] }
    ]; };
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
    return SliderIntoPipeModule;
}());

var IntoPipeModule = /** @class */ (function () {
    function IntoPipeModule() {
    }
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
    return IntoPipeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { AddressComponent, AddressIntoPipeModule, AddressPipe, AppendPipe, AudioComponent, AudioIntoPipeModule, AudioPipe, CalendarComponent, CalendarIntoPipeModule, CheckboxComponent, CheckboxIntoPipeModule, CommonPipesModule, ComponentPool, ConditionalPipe, EmailComponent, EmailIntoPipeModule, EmailPipe, FontComponent, FontIntoPipeModule, FontPipe, ImageComponent, ImageIntoPipeModule, ImagePipe, InToPipe, InputComponent, InputGroupComponent, InputGroupIntoPipeModule, InputIntoPipeModule, IntoDirective, IntoPipeModule, JoinPipe, JsonComponent, JsonIntoPipeModule, LastUpdateComponent, LastUpdateIntoPipeModule, LikeComponent, LikeIntoPipeModule, LinkComponent, LinkIntoPipeModule, LinkPipe, MapPipe, MaskPipe, NoticeComponent, NoticeIntoPipeModule, NoticePipe, PhoneComponent, PhoneIntoPipeModule, PrependPipe, RatingComponent, RatingIntoPipeModule, RatingPipe, SanitizeHtmlPipe, SelectComponent, SelectIntoPipeModule, ShareComponent, ShareIntoPipeModule, SpanComponent, SpanIntoPipeModule, TableComponent, TableIntoPipeModule, TablePipe, TextComponent, TextIntoPipeModule, ValueOfPipe, VideoComponent, VideoIntoPipeModule, VideoPipe, WrapPipe, PhonePipe as ɵa, SliderIntoPipeModule as ɵb, SliderComponent as ɵc, SwitchIntoPipeModule as ɵd, SwitchComponent as ɵe };
//# sourceMappingURL=sedeh-into-pipes.js.map
