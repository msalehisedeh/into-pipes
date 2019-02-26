(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@sedeh/into-pipes', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (factory((global.sedeh = global.sedeh || {}, global.sedeh['into-pipes'] = {}),global.ng.core,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,core,common,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddressComponent = (function () {
        function AddressComponent() {
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        AddressComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.isLink = args.length ? args[0] : true;
                this.hasTarget = args.length > 1 ? args[1] : false;
                this.addr1 = source.street + ', ' + source.suite;
                this.addr2 = source.city + ', ' + source.zipcode;
                if (this.isLink) {
                    /** @type {?} */
                    var x = "https://maps.google.com/?q=" + source.street + ", " + this.addr2 + "&ie=UTF-8";
                    this.url = x.replace("\\s+", "+");
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AddressComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                event.stopPropagation();
                event.preventDefault();
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AddressComponent.prototype.change = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    item: event.type
                });
            };
        AddressComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'address-component',
                        template: "\n    <a *ngIf=\"isLink\" \n        [href]=\"url\" \n        [target]=\"hasTarget ? '_blank' : null\"\n        class=\"google-map\" \n        (keyup)='keyup($event)' \n        (click)=\"change($event)\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"off-screen\">View in google map</span>\n        <span class=\"address\" [textContent]=\"addr1\"></span>\n        <span class=\"address\" [textContent]=\"addr2\"></span>\n    </a>\n    <span *ngIf=\"!isLink\" class=\"google-map\">\n        <span class=\"fa fa-map-marker\" aria-hidden=\"true\"></span>\n        <span class=\"address\" [textContent]=\"addr1\"></span>\n        <span class=\"address\" [textContent]=\"addr2\"></span>\n    </span>\n    ",
                        styles: [".address {float: left;margin-right: 4px;}\n        .google-map {float: left;margin-right: 4px;}\n        .fa {float:left;color: #f00;margin: 0 5px;}\n        .off-screen {position: absolute;left: -999em;}\n        :host a:hover .fa-map-marker{color: #fabdab;}\n        :host span{float-left;}\n        :host {display: table;float:left;min-height: 23px}\n        "]
                    }] }
        ];
        return AddressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddressPipe = (function () {
        function AddressPipe() {
        }
        /**
         * @return {?}
         */
        AddressPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    return new AddressPipe().transform(content, args.length > 1 ? args[1] === 'true' : true);
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        AddressPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var _this = this;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var isLink = args.length ? args[0] : true;
                /** @type {?} */
                var hasTarget = args.length > 1 ? args[1] : false;
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.addressFromString(source, isLink, hasTarget);
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(_this.addressFromString(item, isLink, hasTarget));
                    });
                    return result_1;
                }
            };
        /**
         * @param {?} source
         * @param {?} isLink
         * @param {?} hasTarget
         * @return {?}
         */
        AddressPipe.prototype.addressFromString = /**
         * @param {?} source
         * @param {?} isLink
         * @param {?} hasTarget
         * @return {?}
         */
            function (source, isLink, hasTarget) {
                if (isLink) {
                    /** @type {?} */
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
        AddressPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'address' },] }
        ];
        return AddressPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ComponentPool = (function () {
        function ComponentPool() {
            this.registeredPipes = {};
            this.registeredComponents = {};
            this.registeredServices = {};
        }
        /**
         * @param {?} name
         * @param {?} pipe
         * @return {?}
         */
        ComponentPool.prototype.registerPipeTransformation = /**
         * @param {?} name
         * @param {?} pipe
         * @return {?}
         */
            function (name, pipe) {
                this.registeredPipes[name] = pipe;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        ComponentPool.prototype.registeredForPipeTransformationNamed = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.registeredPipes[key] !== undefined;
            };
        /**
         * @param {?} key
         * @param {?} content
         * @param {?} args
         * @param {?=} callback
         * @param {?=} data
         * @return {?}
         */
        ComponentPool.prototype.registeredPipeTransformation = /**
         * @param {?} key
         * @param {?} content
         * @param {?} args
         * @param {?=} callback
         * @param {?=} data
         * @return {?}
         */
            function (key, content, args, callback, data) {
                /** @type {?} */
                var pipe = this.registeredPipes[key];
                return pipe ? pipe(content, args, callback, data) : null;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        ComponentPool.prototype.removePipeTransformation = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                delete this.registeredPipes[key];
            };
        /**
         * @param {?} name
         * @param {?} component
         * @return {?}
         */
        ComponentPool.prototype.registerComponent = /**
         * @param {?} name
         * @param {?} component
         * @return {?}
         */
            function (name, component) {
                this.registeredComponents[name] = component;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ComponentPool.prototype.registeredForComponentWithNamed = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.registeredComponents[name] !== undefined;
            };
        /**
         * @param {?} name
         * @param {?} resolver
         * @param {?} viewRefrence
         * @param {?} el
         * @return {?}
         */
        ComponentPool.prototype.registeredComponent = /**
         * @param {?} name
         * @param {?} resolver
         * @param {?} viewRefrence
         * @param {?} el
         * @return {?}
         */
            function (name, resolver, viewRefrence, el) {
                /** @type {?} */
                var component = this.registeredComponents[name];
                /** @type {?} */
                var result = null;
                if (component) {
                    /** @type {?} */
                    var componentFactory = resolver.resolveComponentFactory(component);
                    /** @type {?} */
                    var componentRef = viewRefrence.createComponent(componentFactory);
                    /** @type {?} */
                    var domElem = (((componentRef.hostView)).rootNodes[0]);
                    el.appendChild(domElem);
                    result = ((componentRef.instance));
                }
                return result;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ComponentPool.prototype.removeComponent = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                delete this.registeredComponents[name];
            };
        /**
         * @param {?} name
         * @param {?} service
         * @return {?}
         */
        ComponentPool.prototype.registerServiceForComponent = /**
         * @param {?} name
         * @param {?} service
         * @return {?}
         */
            function (name, service) {
                this.registeredServices[name] = service;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ComponentPool.prototype.registeredServiceForComponent = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.registeredServices[name];
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ComponentPool.prototype.registeredForServiceNamed = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.registeredServices[name] !== undefined;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        ComponentPool.prototype.removeServiceForComponent = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                delete this.registeredServices[name];
            };
        ComponentPool.decorators = [
            { type: core.Injectable }
        ];
        return ComponentPool;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddressIntoPipeModule = (function () {
        function AddressIntoPipeModule(pool) {
            pool.registerComponent('address', AddressComponent);
            pool.registerPipeTransformation('address', AddressPipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        AddressIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: AddressIntoPipeModule,
                    providers: [
                        AddressPipe
                    ]
                };
            };
        AddressIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [AddressComponent, AddressPipe],
                        exports: [AddressComponent, AddressPipe],
                        entryComponents: [AddressComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        AddressIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return AddressIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AudioComponent = (function () {
        function AudioComponent() {
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        AudioComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
            };
        /**
         * @param {?} audio
         * @return {?}
         */
        AudioComponent.prototype.isPlaying = /**
         * @param {?} audio
         * @return {?}
         */
            function (audio) {
                return !!(audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AudioComponent.prototype.keyup = /**
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
        AudioComponent.prototype.change = /**
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
        AudioComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'audio-component',
                        template: "\n    <audio [src]=\"source\" \n        (keyup)=\"keyup($event)\"\n        (play)=\"change($event)\"\n        (ended)=\"change($event)\"\n        (pause)=\"change($event)\"\n        (seeked)=\"change($event)\"\n        (error)=\"change($event)\"\n        controls=\"true\">Your browser does not support the audio element.</audio>",
                        styles: ["\n    :host {display:table;float:left;min-height: 23px}\n    "]
                    }] }
        ];
        return AudioComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AudioPipe = (function () {
        function AudioPipe() {
        }
        /**
         * @return {?}
         */
        AudioPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    return new AudioPipe().transform(content, args.length > 1 ? args[1] === 'true' : true);
                };
                return x;
            };
        /**
         * @param {?} source
         * @return {?}
         */
        AudioPipe.prototype.stringToAudio = /**
         * @param {?} source
         * @return {?}
         */
            function (source) {
                return "<audio src=\'" + source + "\' controls=\'true\' />";
            };
        /**
         * @param {?} sources
         * @return {?}
         */
        AudioPipe.prototype.arrayToAudio = /**
         * @param {?} sources
         * @return {?}
         */
            function (sources) {
                var _this = this;
                /** @type {?} */
                var result = [];
                sources.map(function (source) {
                    result.push(_this.stringToAudio(source));
                });
                return result;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        AudioPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.stringToAudio(source);
                }
                return this.arrayToAudio(source);
            };
        AudioPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'audio' },] }
        ];
        return AudioPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AudioIntoPipeModule = (function () {
        function AudioIntoPipeModule(pool) {
            pool.registerComponent('audio', AudioComponent);
            pool.registerPipeTransformation('audio', AudioPipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        AudioIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: AudioIntoPipeModule,
                    providers: [
                        AudioPipe
                    ]
                };
            };
        AudioIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [AudioComponent, AudioPipe],
                        exports: [AudioComponent, AudioPipe],
                        entryComponents: [AudioComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        AudioIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return AudioIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CalendarComponent = (function () {
        function CalendarComponent(renderer) {
            this.renderer = renderer;
            this.showCalendar = false;
            this.editName = false;
            this.multiselect = false;
            this.dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
            this.weeks = [];
            this.selectedDays = [];
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
                /** @type {?} */
                var code = event.which;
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarComponent.prototype.popdatepicker = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
                this.showCalendar = !this.showCalendar;
            };
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        CalendarComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        CalendarComponent.prototype.isSelected = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var index = -1;
                for (var i = 0; i < this.selectedDays.length; i++) {
                    /** @type {?} */
                    var selectedDate = this.selectedDays[i];
                    if (this.isSameDay(date, selectedDate)) {
                        index = i;
                    }
                }
                return index > -1;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        CalendarComponent.prototype.isSelectedMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this.isSameMonth(date, this.currentDate);
            };
        /**
         * @param {?} day
         * @return {?}
         */
        CalendarComponent.prototype.toggleSelectedDates = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                /** @type {?} */
                var found = false;
                if (this.multiselect) {
                    for (var i = 0; i < this.selectedDays.length; i++) {
                        /** @type {?} */
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
        /**
         * @param {?} event
         * @param {?} day
         * @return {?}
         */
        CalendarComponent.prototype.selectDate = /**
         * @param {?} event
         * @param {?} day
         * @return {?}
         */
            function (event, day) {
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
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarComponent.prototype.prevMonth = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
                this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
                this.generateCalendar();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarComponent.prototype.nextMonth = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
                this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
                this.generateCalendar();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarComponent.prototype.prevYear = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
                this.currentDate = new Date(this.currentDate.getFullYear() - 1, this.currentDate.getMonth(), this.currentDate.getDate());
                this.generateCalendar();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarComponent.prototype.nextYear = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
                this.currentDate = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), this.currentDate.getDate());
                this.generateCalendar();
            };
        // generate the calendar grid
        /**
         * @return {?}
         */
        CalendarComponent.prototype.generateCalendar = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var dates = this.fillDates(this.currentDate);
                /** @type {?} */
                var weeks = [];
                while (dates.length > 0) {
                    weeks.push(dates.splice(0, 7));
                }
                this.weeks = weeks;
            };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        CalendarComponent.prototype.isSameDay = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                return a.getFullYear() === b.getFullYear() &&
                    a.getMonth() === b.getMonth() &&
                    a.getDate() === b.getDate();
            };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        CalendarComponent.prototype.isSameMonth = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                return a.getYear() === b.getYear() &&
                    a.getMonth() === b.getMonth();
            };
        /**
         * @param {?} currentDate
         * @return {?}
         */
        CalendarComponent.prototype.fillDates = /**
         * @param {?} currentDate
         * @return {?}
         */
            function (currentDate) {
                /** @type {?} */
                var cm = new Date(currentDate);
                /** @type {?} */
                var tm = new Date();
                /** @type {?} */
                var firstDay = new Date(cm.getFullYear(), cm.getMonth(), 1);
                /** @type {?} */
                var firstOfMonth = firstDay.getDay();
                /** @type {?} */
                var firstDayOfGrid = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstOfMonth);
                /** @type {?} */
                var start = firstDayOfGrid.getDate();
                /** @type {?} */
                var list = [];
                for (var i = start; i < (start + 42); i++) {
                    /** @type {?} */
                    var d = new Date(firstDayOfGrid.getFullYear(), firstDayOfGrid.getMonth(), i);
                    list.push({
                        today: this.isSameDay(tm, d),
                        selected: this.isSelected(d),
                        date: d
                    });
                }
                return list;
            };
        CalendarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'calendar-component',
                        template: "\n    <span class=\"calendar-box\">\n      <span class=\"date\" [textContent]=\"origDate | date:formatting\"></span>\n      <a tabindex=\"0\" class=\"popper\" (keyup)=\"keyup($event)\" (click)=\"popdatepicker($event)\">\n          <span class=\"fa fa-calendar\" aria-hidden=\"true\"></span>\n          <span class=\"off-screen\">Pick a date</span>\n      </a>\n    </span>\n    <div class=\"calendar\" *ngIf=\"showCalendar\">\n\t\t<div class=\"calendar-navs\">\n\t\t\t<div class=\"month-nav\">\n                <button (click)=\"prevMonth($event)\">\n                    <span class=\"fa fa-chevron-left\"></span>\n                    <span class=\"off-screen\">Back a month</span>\n                </button>\n\t\t\t\t<span class=\"p4\">{{ currentDate | date:'MMMM' }}</span>\n                <button (click)=\"nextMonth($event)\">\n                    <span class=\"fa fa-chevron-right\"></span>\n                    <span class=\"off-screen\">Forward a month</span>\n                </button>\n\t\t\t</div>\n\t\t\t<div class=\"year-nav\">\n                <button (click)=\"prevYear($event)\">\n                    <span class=\"fa fa-chevron-left\"></span>\n                    <span class=\"off-screen\">Back a year</span>\n                </button>\n\t\t\t\t<span>{{ currentDate | date: 'yyyy' }}</span>\n                <button (click)=\"nextYear($event)\">\n                    <span class=\"fa fa-chevron-right\"></span>\n                    <span class=\"off-screen\">Forward a year</span>\n                </button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"month-grid\">\n\t\t\t<div class=\"day-names\">\n\t\t\t\t<div *ngFor=\"let name of dayNames\" class=\"day-name p9\">{{ name }}</div>\n\t\t\t</div>\n\t\t\t<div class=\"weeks\">\n\t\t\t\t<div *ngFor=\"let week of weeks\" class=\"week\">\n\t\t\t\t\t<ng-container *ngFor=\"let day of week\">\n\t\t\t\t\t\t<div class=\"week-date disabled\" *ngIf=\"!isSelectedMonth(day.date)\">\n\t\t\t\t\t\t\t<span class=\"date-text\">{{ day.date.getDate() }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"week-date enabled\"\n                           *ngIf=\"isSelectedMonth(day.date)\"\n                           tabindex=\"0\"\n                           (keyup)=\"keyup($event)\"\n\t\t\t\t\t\t   (click)=\"selectDate($event, day)\"\n\t\t\t\t\t\t   [class.today]=\"day.today\"\n\t\t\t\t\t\t   [class.selected]=\"day.selected\">\n\t\t\t\t\t\t\t<span class=\"date-text\">{{ day.date.getDate() }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        .popper .fa-calendar{display: inline-block;margin: 0 5px}\n        .popper:hover .fa-calendar{color: #fabdab}\n        .calendar-box {\n          display: flex;\n          flex-direction: row;\n          cursor: default;\n          width: 100%;\n          display: inline-block;\n        }\n        .calendar-box date {flex: 1;}\n        .calendar-box .popper {cursor: pointer;flex: 0 0 15px}\n        .calendar {\n            display: table;\n            width: 210px;\n            position: absolute;\n            background-color: #fff;\n            z-index: 2;\n            border: 1px solid #ddd;\n            border-radius: 4px;\n        }\n        .calendar * {\n            box-sizing: border-box;\n        }\n        .calendar .calendar-navs {\n            background-color: whitesmoke;\n        }\n        .calendar .month-nav {\n            padding: 2px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .calendar .year-nav {\n            padding: 2px;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n        }\n        .calendar .month-nav button,\n        .calendar .year-nav button {\n            border: 0;\n            background: transparent;\n            cursor: pointer;\n        }\n        .calendar .month-nav button:hover,\n        .calendar .year-nav button:hover {\n            color: red;\n        }\n        .calendar .month-grid .day-names {\n            display: flex;\n            flex-direction: row;\n            background: whitesmoke;\n            border-bottom-right-radius: 3px;\n            border-bottom-left-radius: 3px;\n        }\n        .calendar .month-grid .weeks {\n            display: flex;\n            flex-direction: column;\n        }\n        .calendar .month-grid .week {\n            display: flex;\n            flex-direction: row;\n        }\n        .calendar .month-grid .day-names {\n            border-top: 1px dotted #ddd;\n            border-bottom: 1px dashed #ddd;\n        }\n        .calendar .month-grid .week-date,\n        .calendar .month-grid .day-name {\n            text-align: center;\n            padding: 2px;\n            display: block;\n            width: 30px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .calendar .month-grid .week-date {\n            height: 30px;\n            position: relative;\n            padding: 5px;\n        }\n        .calendar .month-grid .week-date .date-text {\n            font-size: 10px;\n            z-index: 10;\n        }\n        .calendar .month-grid .week-date::after {\n            content: '';\n            height: 24px;\n            width: 24px;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            border-radius: 50%;\n            transition: background-color 150ms linear, color 150ms linear;\n            z-index: 1;\n        }\n        .calendar .month-grid .week-date.disabled {color: #aaa;}\n        .calendar .month-grid .week-date.enabled {\n            cursor: pointer;\n        }\n        .calendar .month-grid .week-date.enabled:focus {\n            outline: 0;\n        }\n        .calendar .month-grid .week-date.enabled:hover .date-text,\n        .calendar .month-grid .week-date.enabled:focus .date-text {\n            font-weight: bold;\n            color: blue;\n        }\n        .calendar .month-grid .week-date.enabled:hover::after,\n        .calendar .month-grid .week-date.enabled:focus::after {\n            background-color: whitesmoke;\n        }\n        .calendar .month-grid .week-date.selected .date-text {\n            color: #fff !important;\n        }\n        .calendar .month-grid .week-date.selected::after{\n            background-color: blue !important;\n        }\n        .calendar .month-grid .week-date.today::after {\n            background-color: lightblue;\n            font-weight: bold;\n            color: #fff;\n        }\n        "]
                    }] }
        ];
        /** @nocollapse */
        CalendarComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        CalendarComponent.propDecorators = {
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return CalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CalendarIntoPipeModule = (function () {
        function CalendarIntoPipeModule(pool) {
            pool.registerComponent('calendar', CalendarComponent);
        }
        /**
         * @return {?}
         */
        CalendarIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: CalendarIntoPipeModule,
                    providers: []
                };
            };
        CalendarIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [CalendarComponent],
                        exports: [CalendarComponent],
                        entryComponents: [CalendarComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        CalendarIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return CalendarIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxComponent = (function () {
        function CheckboxComponent() {
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        CheckboxComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CheckboxComponent.prototype.click = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                /** @type {?} */
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
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        CheckboxComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.ideal = args.length ? String(args[0]) : "";
                this.useFont = args.length > 1 ? Boolean(args[1]) : false;
                this.source = String(source);
                this.data = data;
                this.original = this.source === this.ideal ? "" : source;
            };
        CheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'checkbox-component',
                        template: "\n    <span *ngIf=\"useFont\" class=\"check-font\">\n      <span *ngIf=\"source === ideal\" #check tabindex=\"0\" class=\"fa fa-check\" (keyup)=\"keyup($event)\" (click)=\"click($event)\"></span>\n      <span *ngIf=\"source !== ideal\" #uncheck tabindex=\"0\" class=\"fa fa-close\" (keyup)=\"keyup($event)\" (click)=\"click($event)\"></span>\n    </span>\n    <input *ngIf=\"!useFont\" \n            type=\"checkbox\" \n            tabindex=\"0\" \n            [value]=\"source\" \n            [checked]=\"source===ideal ? true : null\" \n            (keyup)=\"keyup($event)\"\n            (click)=\"click($event)\" />\n    ",
                        styles: ["\n        :host .check-font .fa{margin: 0 5px}\n        :host {display:table;float:left;min-height: 23px}\n        .check-font:hover{color: #fabdab;}\n        .check-font {cursor: pointer;}\n        "]
                    }] }
        ];
        CheckboxComponent.propDecorators = {
            check: [{ type: core.ViewChild, args: ["check",] }],
            uncheck: [{ type: core.ViewChild, args: ["uncheck",] }],
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxIntoPipeModule = (function () {
        function CheckboxIntoPipeModule(pool) {
            pool.registerComponent('checkbox', CheckboxComponent);
        }
        /**
         * @return {?}
         */
        CheckboxIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: CheckboxIntoPipeModule,
                    providers: []
                };
            };
        CheckboxIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [CheckboxComponent],
                        exports: [CheckboxComponent],
                        entryComponents: [CheckboxComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        CheckboxIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return CheckboxIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EmailComponent = (function () {
        function EmailComponent() {
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        EmailComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.isLink = args.length ? args[0] : true;
                this.source = source;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        EmailComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                event.stopPropagation();
                event.preventDefault();
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        EmailComponent.prototype.change = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: "mail-to",
                    item: event.type
                });
            };
        EmailComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'email',
                        template: "\n    <a *ngIf=\"isLink\" [href]=\"'mailto:' + source\" (keyup)='keyup($event)' (click)=\"change($event)\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </a>\n    <span *ngIf=\"!isLink\">\n        <span class='fa fa-envelope' aria-hidden='true'></span>\n        <span [textContent]=\"source\"></span>\n    </span>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        :host:hover .fa-envelope{color: #fabdab;}\n        :host .fa{margin: 0 5px;}\n        "]
                    }] }
        ];
        return EmailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EmailPipe = (function () {
        function EmailPipe() {
        }
        /**
         * @return {?}
         */
        EmailPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    // email
                    return new EmailPipe().transform(content, args.length > 1 ? args[1] === 'true' : true);
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {?} isLink
         * @return {?}
         */
        EmailPipe.prototype.emailFromString = /**
         * @param {?} source
         * @param {?} isLink
         * @return {?}
         */
            function (source, isLink) {
                /** @type {?} */
                var x;
                if (isLink) {
                    x = "<a href=\'mailto:" + source + "\' ><span class='fa fa-envelope' aria-hidden='true'></span><span>" + source + "</span></a>";
                }
                else {
                    x = "<span><span class='fa fa-envelope' style='margin: 0 5px' aria-hidden='true'></span><span>" + source + "</span></span>";
                }
                return x;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        EmailPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var _this = this;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var isLink = args.length ? args[0] : true;
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.emailFromString(source, isLink);
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(_this.emailFromString(item, isLink));
                    });
                    return result_1;
                }
            };
        EmailPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'email' },] }
        ];
        return EmailPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EmailIntoPipeModule = (function () {
        function EmailIntoPipeModule(pool) {
            pool.registerComponent('email', EmailComponent);
            pool.registerPipeTransformation('email', EmailPipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        EmailIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: EmailIntoPipeModule,
                    providers: [EmailPipe]
                };
            };
        EmailIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [EmailComponent, EmailPipe],
                        exports: [EmailComponent, EmailPipe],
                        entryComponents: [EmailComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        EmailIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return EmailIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FontComponent = (function () {
        function FontComponent() {
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        FontComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.font = args[0];
                this.location = args.length > 1 ? args[1] : "left";
                /** @type {?} */
                var action = args.length > 2 ? args[2].toLowerCase() : "";
                this.content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
            };
        FontComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'font-component',
                        template: "\n        <span *ngIf=\"location === 'left'\"    [class]=\"font\" aria-hidden='true'></span>\n        <span *ngIf=\"location !== 'replace'\" [textContent]=\"content\"></span>\n        <span *ngIf=\"location === 'right'\"   [class]=\"font\" aria-hidden='true'></span>\n        <span *ngIf=\"location === 'replace'\" [class]=\"font\" aria-hidden='true'></span>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        :host span {\n            float: left;\n            margin: 0 5px;\n        }\n        "]
                    }] }
        ];
        return FontComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FontPipe = (function () {
        function FontPipe() {
        }
        /**
         * @return {?}
         */
        FontPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    // font:fa fa-check:left:*
                    return new FontPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : "", args.length > 3 ? args[3] : "");
                };
                return x;
            };
        /**
         * @param {?} font
         * @param {?} location
         * @param {?} action
         * @param {?} content
         * @return {?}
         */
        FontPipe.prototype.fontFromString = /**
         * @param {?} font
         * @param {?} location
         * @param {?} action
         * @param {?} content
         * @return {?}
         */
            function (font, location, action, content) {
                return (location === "left" ?
                    (font + content) :
                    ((location === "right") ? content + font : font));
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        FontPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var _this = this;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var font = args.length ? "<span class=\'" + args[0] + "\' style='margin: 0 5px' aria-hidden='true'></span>" : "";
                /** @type {?} */
                var location = args.length > 1 ? args[1] : "";
                /** @type {?} */
                var action = args.length > 2 ? args[2].toLowerCase() : "";
                /** @type {?} */
                var content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
                if ((typeof content === "string") || !(content instanceof Array)) {
                    return this.fontFromString(font, location, action, content);
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(_this.fontFromString(font, location, action, item));
                    });
                    return result_1;
                }
            };
        FontPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'font' },] }
        ];
        return FontPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FontIntoPipeModule = (function () {
        function FontIntoPipeModule(pool) {
            pool.registerComponent('font', FontComponent);
            pool.registerPipeTransformation('font', FontPipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        FontIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: FontIntoPipeModule,
                    providers: [FontPipe]
                };
            };
        FontIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [FontComponent, FontPipe],
                        exports: [FontComponent, FontPipe],
                        entryComponents: [FontComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        FontIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return FontIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ImageComponent = (function () {
        function ImageComponent() {
            this.magnification = 0;
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        ImageComponent.prototype.enter = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.popLocation) {
                    /** @type {?} */
                    var image = event.target.children[0];
                    /** @type {?} */
                    var popper = event.target.children[1];
                    /** @type {?} */
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
                    /** @type {?} */
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
        /**
         * @param {?} event
         * @return {?}
         */
        ImageComponent.prototype.hoverOut = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.popLocation) {
                    /** @type {?} */
                    var popper = event.target.children[1];
                    popper.style.display = 'none';
                }
                else if (this.magnification) {
                    /** @type {?} */
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
        /**
         * @param {?} event
         * @return {?}
         */
        ImageComponent.prototype.hoverViewPort = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.magnification && !this.popLocation) {
                    /** @type {?} */
                    var image = event.target.tagName === 'IMG' ? event.target : event.target.children[0];
                    if (image) {
                        image.style.top = -(event.layerY * this.magnification) + "px";
                        image.style.left = -(event.layerX * this.magnification) + "px";
                    }
                }
            };
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        ImageComponent.prototype.transform = /**
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
                this.magnification = (args && args.length > 3) ? parseInt(args[3], 10) : 0;
                this.popLocation = (args && args.length > 4) ? args[4] : undefined;
                this.magnification = this.magnification < 0 ? 0 : this.magnification;
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
        ImageComponent.prototype.change = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: event.type,
                    item: { x: event.layerX, y: event.layerY }
                });
            };
        ImageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'image-component',
                        template: "<img [src]=\"source\" \n        [style.width]=\"width\" \n        [style.height]=\"height\" \n        [title]=\"alt\" /><img *ngIf=\"popLocation\" \n        [src]=\"source\" class='popper'\n        [style.width]=\"(origWidth * magnification) + 'px'\" \n        [style.height]=\"(origHeight * magnification) + 'px'\" />",
                        styles: ["\n    :host {display:block;overflow:hidden;margin:0;position:relative;float:left;min-width: 23px;min-height: 23px}\n    :host .popper{position:absolute;pointer-events: none;display: none;z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;border-radius: 4px}\n    :host img{position:relative;pointer-events: none;}\n    "]
                    }] }
        ];
        ImageComponent.propDecorators = {
            enter: [{ type: core.HostListener, args: ['mouseenter', ['$event'],] }],
            hoverOut: [{ type: core.HostListener, args: ['mouseout', ['$event'],] }],
            hoverViewPort: [{ type: core.HostListener, args: ['mousemove', ['$event'],] }]
        };
        return ImageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ImagePipe = (function () {
        function ImagePipe() {
        }
        /**
         * @return {?}
         */
        ImagePipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
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
            };
        /**
         * @param {?} source
         * @param {?} width
         * @param {?} height
         * @param {?} alt
         * @return {?}
         */
        ImagePipe.prototype.stringToImage = /**
         * @param {?} source
         * @param {?} width
         * @param {?} height
         * @param {?} alt
         * @return {?}
         */
            function (source, width, height, alt) {
                if (!alt || !alt.length) {
                    /** @type {?} */
                    var q = source.indexOf("?");
                    /** @type {?} */
                    var t = q < 0 ? source : source.substring(0, q);
                    /** @type {?} */
                    var d = t.lastIndexOf("/");
                    alt = d < 0 ? t : t.substring(d + 1);
                }
                return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
            };
        /**
         * @param {?} sources
         * @param {?} width
         * @param {?} height
         * @param {?} alt
         * @return {?}
         */
        ImagePipe.prototype.arrayToImage = /**
         * @param {?} sources
         * @param {?} width
         * @param {?} height
         * @param {?} alt
         * @return {?}
         */
            function (sources, width, height, alt) {
                var _this = this;
                /** @type {?} */
                var result = [];
                sources.map(function (source) {
                    result.push(_this.stringToImage(source, width, height, alt));
                });
                return result;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        ImagePipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var width = (args && args.length) ? "width: " + args[0] + ";" : "";
                /** @type {?} */
                var height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
                /** @type {?} */
                var alt = (args && args.length > 2) ? args[2] : "";
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.stringToImage(source, width, height, alt);
                }
                return this.arrayToImage(source, width, height, "");
            };
        ImagePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'image' },] }
        ];
        return ImagePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ImageIntoPipeModule = (function () {
        function ImageIntoPipeModule(pool) {
            pool.registerComponent('image', ImageComponent);
            pool.registerPipeTransformation('image', ImagePipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        ImageIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: ImageIntoPipeModule,
                    providers: [ImagePipe]
                };
            };
        ImageIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [ImageComponent, ImagePipe],
                        exports: [ImageComponent, ImagePipe],
                        entryComponents: [ImageComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        ImageIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return ImageIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputComponent = (function () {
        function InputComponent(renderer) {
            this.renderer = renderer;
            this.editName = false;
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        InputComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                event.stopPropagation();
                event.preventDefault();
                /** @type {?} */
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
        /**
         * @param {?} event
         * @return {?}
         */
        InputComponent.prototype.blur = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
        /**
         * @param {?} event
         * @return {?}
         */
        InputComponent.prototype.keydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                /** @type {?} */
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
        /**
         * @param {?} event
         * @return {?}
         */
        InputComponent.prototype.clickName = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                event.stopPropagation();
                event.preventDefault();
                this.editName = true;
                this.oldValue = String(this.source);
                setTimeout(function () {
                    _this.renderer.invokeElementMethod(_this.nameEditor.nativeElement, "focus");
                }, 66);
            };
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        InputComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.data = data;
                this.placeholder = args.length ? args[0] : "";
                this.formatting = args.length > 1 ? args[1] : "";
            };
        InputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-component',
                        template: "\n    <span *ngIf=\"editName\">\n    <input #nameEditor\n        type='text' \n        [id]=\"id\"\n        [name]=\"name\"\n        [value]=\"source\"\n        [placeholder]=\"placeholder\"\n        (blur)=\"blur($event)\" \n        (keyup)='keyup($event)'>\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? (source | into:formatting) : '&nbsp;'\">\n    </span>\n    <span #nameHolder\n        *ngIf='!editName && !formatting'\n        class='locked' \n        tabindex='0' \n        (keyup)='keydown($event)'\n        (click)=\"clickName($event)\"\n        [innerHTML]=\"source ? source : '&nbsp;'\">\n    </span>\n    ",
                        styles: ["\n        .locked {\n          display: inline-block;\n          cursor: pointer;\n          min-width: 30px;\n          -webkit-user-select: none;       \n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          border: 1px solid transparent;\n        }\n        input {\n          cursor: beam;\n        }\n        :host {display:table;float:left;min-height: 23px}\n        :host .locked:hover{border: 1px solid #fabdab;}\n        "]
                    }] }
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        InputComponent.propDecorators = {
            nameEditor: [{ type: core.ViewChild, args: ["nameEditor",] }],
            nameHolder: [{ type: core.ViewChild, args: ["nameHolder",] }],
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return InputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AppendPipe = (function () {
        function AppendPipe() {
        }
        /**
         * @return {?}
         */
        AppendPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    // append:something
                    return new AppendPipe().transform(content, args.length > 1 ? args[1] : "");
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        AppendPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var key = ((args && args.length) ? args[0] : "");
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return source + key;
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(item + key);
                    });
                    return result_1;
                }
            };
        AppendPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'append' },] }
        ];
        return AppendPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ConditionalPipe = (function () {
        function ConditionalPipe() {
        }
        /**
         * @return {?}
         */
        ConditionalPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /**
                 * @param {?} item
                 * @return {?}
                 */
                function split(item) {
                    return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
                }
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    /** @type {?} */
                    var acondition = args.length > 1 ? args[1] : "";
                    /** @type {?} */
                    var value = args.length > 2 ? args[2] : "";
                    /** @type {?} */
                    var action = args.length > 3 ? args[3] : "";
                    /** @type {?} */
                    var altAction = args.length > 4 ? args[4] : "";
                    /** @type {?} */
                    var result = new ConditionalPipe().transform(content, acondition, value, action, altAction);
                    if (typeof result === "string") {
                        result = result[0] === '"' ? result.substring(1, result.length - 1) : result;
                        result = split(result);
                        result = callback(content, result, data);
                    }
                    return result;
                };
                return x;
            };
        /**
         * @param {?} content
         * @param {?} acondition
         * @param {?} value
         * @param {?} action
         * @param {?} altAction
         * @return {?}
         */
        ConditionalPipe.prototype.conditionFromString = /**
         * @param {?} content
         * @param {?} acondition
         * @param {?} value
         * @param {?} action
         * @param {?} altAction
         * @return {?}
         */
            function (content, acondition, value, action, altAction) {
                /** @type {?} */
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
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        ConditionalPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var _this = this;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var acondition = args.length ? args[0] : "";
                /** @type {?} */
                var value = args.length > 1 ? args[1] : "";
                /** @type {?} */
                var action = args.length > 2 ? args[2] : "";
                /** @type {?} */
                var altAction = args.length > 3 ? args[3] : "";
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.conditionFromString(source, acondition, value, action, altAction);
                }
                else {
                    /** @type {?} */
                    var result_1 = {};
                    source.map(function (item) {
                        result_1[item] = _this.conditionFromString(item, acondition, value, action, altAction);
                    });
                    return result_1;
                }
            };
        ConditionalPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'if' },] }
        ];
        return ConditionalPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var JoinPipe = (function () {
        function JoinPipe() {
        }
        /**
         * @return {?}
         */
        JoinPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    //join or join:character
                    return new JoinPipe().transform(content, args.length > 1 ? args[1] : "");
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        JoinPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return source.join(args[0]);
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    Object.keys(source).map(function (key) {
                        result_1.push(source[key]);
                    });
                    return result_1.join(args[0]);
                }
            };
        JoinPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'join' },] }
        ];
        return JoinPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MapPipe = (function () {
        function MapPipe() {
        }
        /**
         * @return {?}
         */
        MapPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    // map:key1;value1/key2;value2/key3;value3
                    return new MapPipe().transform(content, args.length > 1 ? args[1] : "");
                };
                return x;
            };
        /**
         * @param {?} list
         * @param {?} map
         * @return {?}
         */
        MapPipe.prototype.valuesFor = /**
         * @param {?} list
         * @param {?} map
         * @return {?}
         */
            function (list, map) {
                /** @type {?} */
                var result = [];
                list.map(function (key) {
                    if (map[key]) {
                        result.push(map[key]);
                    }
                });
                return result;
            };
        /**
         * @param {?} mapping
         * @return {?}
         */
        MapPipe.prototype.geMapping = /**
         * @param {?} mapping
         * @return {?}
         */
            function (mapping) {
                if (mapping.trim) {
                    /** @type {?} */
                    var map_1 = {};
                    mapping.split('/').map(function (key) {
                        /** @type {?} */
                        var x = key.split(';');
                        map_1[x[0]] = x[1];
                    });
                    mapping = map_1;
                }
                return mapping;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        MapPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var map = this.geMapping((args && args.length) ? args[0] : "");
                return ((typeof source === "string") || !(source instanceof Array)) ?
                    map[source] :
                    this.valuesFor(source, map);
            };
        MapPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'map' },] }
        ];
        return MapPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MaskPipe = (function () {
        function MaskPipe() {
        }
        /**
         * @return {?}
         */
        MaskPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
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
            };
        /**
         * @param {?} item
         * @param {?} visibleDigits
         * @param {?} maskWith
         * @return {?}
         */
        MaskPipe.prototype.maskString = /**
         * @param {?} item
         * @param {?} visibleDigits
         * @param {?} maskWith
         * @return {?}
         */
            function (item, visibleDigits, maskWith) {
                /** @type {?} */
                var maskedSection = item ? item.slice(0, -visibleDigits) : "";
                /** @type {?} */
                var visibleSection = item ? item.slice(-visibleDigits) : "";
                return item ? maskedSection.replace(/./g, maskWith) + visibleSection : "";
            };
        /**
         * @param {?} items
         * @param {?} visibleDigits
         * @param {?} maskWith
         * @return {?}
         */
        MaskPipe.prototype.maskArray = /**
         * @param {?} items
         * @param {?} visibleDigits
         * @param {?} maskWith
         * @return {?}
         */
            function (items, visibleDigits, maskWith) {
                var _this = this;
                /** @type {?} */
                var result = [];
                items.map(function (item) {
                    result.push(_this.maskString(item, visibleDigits, maskWith));
                });
                return result;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        MaskPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var visibleDigits = (args && args.length) ? args[0] : 4;
                /** @type {?} */
                var maskWith = args.length > 1 ? args[1] : '*';
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.maskString(source, visibleDigits, maskWith);
                }
                return this.maskArray(source, visibleDigits, maskWith);
            };
        MaskPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'mask' },] }
        ];
        return MaskPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PrependPipe = (function () {
        function PrependPipe() {
        }
        /**
         * @return {?}
         */
        PrependPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    // prepend:something
                    return new PrependPipe().transform(content, args.length > 1 ? args[1] : "");
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        PrependPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var key = ((args && args.length) ? args[0] : "");
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return key + source;
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(key + item);
                    });
                    return result_1;
                }
            };
        PrependPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'prepend' },] }
        ];
        return PrependPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SanitizeHtmlPipe = (function () {
        function SanitizeHtmlPipe(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        SanitizeHtmlPipe.prototype.transform = /**
         * @param {?} v
         * @return {?}
         */
            function (v) {
                return this._sanitizer.bypassSecurityTrustHtml(v);
            };
        SanitizeHtmlPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'sanitizeHtml'
                    },] }
        ];
        /** @nocollapse */
        SanitizeHtmlPipe.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        return SanitizeHtmlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ValueOfPipe = (function () {
        function ValueOfPipe() {
        }
        /**
         * @return {?}
         */
        ValueOfPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    // valueof:key
                    return new ValueOfPipe().transform(content, args.length > 1 ? args[1] : "");
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {?} key
         * @return {?}
         */
        ValueOfPipe.prototype.valueOfSingle = /**
         * @param {?} source
         * @param {?} key
         * @return {?}
         */
            function (source, key) {
                return source[key];
            };
        /**
         * @param {?} sources
         * @param {?} key
         * @return {?}
         */
        ValueOfPipe.prototype.valueOfMultiple = /**
         * @param {?} sources
         * @param {?} key
         * @return {?}
         */
            function (sources, key) {
                var _this = this;
                /** @type {?} */
                var result = [];
                sources.map(function (source) {
                    result.push(_this.valueOfSingle(source, key));
                });
                return result;
            };
        /**
         * @param {?} object
         * @param {...?} args
         * @return {?}
         */
        ValueOfPipe.prototype.transform = /**
         * @param {?} object
         * @param {...?} args
         * @return {?}
         */
            function (object) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if ((typeof object === "string") || !(object instanceof Array)) {
                    return this.valueOfSingle(object, args[0]);
                }
                return this.valueOfMultiple(object, args[0]);
            };
        ValueOfPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'valueof' },] }
        ];
        return ValueOfPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WrapPipe = (function () {
        function WrapPipe() {
        }
        /**
         * @return {?}
         */
        WrapPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    // wrap:something:something  OR wrap:something
                    return new WrapPipe().transform(content, args.length > 1 ? args[1] : "", args.length > 2 ? args[2] : args[1]);
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        WrapPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var pre = (args && args.length) ? args[0] : "";
                /** @type {?} */
                var post = pre.length ?
                    (args.length > 1 ? args[1] : "") : pre;
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return pre + source + post;
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(pre + item + post);
                    });
                    return result_1;
                }
            };
        WrapPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'wrap' },] }
        ];
        return WrapPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InToPipe = (function () {
        function InToPipe(pool) {
            this.pool = pool;
        }
        /**
         * @param {?} content
         * @param {?} list
         * @return {?}
         */
        InToPipe.prototype.transform = /**
         * @param {?} content
         * @param {?} list
         * @return {?}
         */
            function (content, list) {
                var _this = this;
                /** @type {?} */
                var result = content;
                list.split("|").map(function (item) {
                    result = _this._transform(result, _this.split(item));
                });
                return result;
            };
        /**
         * @param {?} item
         * @return {?}
         */
        InToPipe.prototype.split = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
            };
        /**
         * @param {?} content
         * @param {?} args
         * @return {?}
         */
        InToPipe.prototype._transform = /**
         * @param {?} content
         * @param {?} args
         * @return {?}
         */
            function (content, args) {
                /** @type {?} */
                var result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this));
                return result ? result : content;
            };
        InToPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'into' },] }
        ];
        /** @nocollapse */
        InToPipe.ctorParameters = function () {
            return [
                { type: ComponentPool }
            ];
        };
        return InToPipe;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var IntoDirective = (function () {
        function IntoDirective(viewRef, el, pool, componentFactoryResolver) {
            this.viewRef = viewRef;
            this.el = el;
            this.pool = pool;
            this.componentFactoryResolver = componentFactoryResolver;
            this.onComponentChange = function (event) { };
        }
        /**
         * @param {?} item
         * @return {?}
         */
        IntoDirective.prototype.split = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
            };
        /**
         * @param {?} content
         * @param {?} args
         * @param {?} data
         * @return {?}
         */
        IntoDirective.prototype._transform = /**
         * @param {?} content
         * @param {?} args
         * @param {?} data
         * @return {?}
         */
            function (content, args, data) {
                /** @type {?} */
                var result = content;
                if (this.pool.registeredForComponentWithNamed(args[0])) {
                    /** @type {?} */
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
        /**
         * @param {?} type
         * @param {?} content
         * @param {?} id
         * @param {?} name
         * @param {?} data
         * @param {...?} args
         * @return {?}
         */
        IntoDirective.prototype.transformComponent = /**
         * @param {?} type
         * @param {?} content
         * @param {?} id
         * @param {?} name
         * @param {?} data
         * @param {...?} args
         * @return {?}
         */
            function (type, content, id, name, data) {
                var _this = this;
                var args = [];
                for (var _i = 5; _i < arguments.length; _i++) {
                    args[_i - 5] = arguments[_i];
                }
                /** @type {?} */
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
                    /** @type {?} */
                    var counter_1 = 0;
                    result = content;
                    content.map(function (source) {
                        if (typeof source === "string" ||
                            typeof content === "number" ||
                            typeof content === "boolean" ||
                            Object.keys(content).length) {
                            /** @type {?} */
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
        /**
         * @param {?} name
         * @return {?}
         */
        IntoDirective.prototype.registeredComponentFor = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.pool.registeredComponent(name, this.componentFactoryResolver, this.viewRef, this.el.nativeElement);
            };
        /**
         * @return {?}
         */
        IntoDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.into || this.rawContent) {
                    /** @type {?} */
                    var result_1 = this.rawContent;
                    if (this.into) {
                        this.into.split("|").map(function (item) {
                            result_1 = _this._transform(result_1, _this.split(item), _this.intoData);
                        });
                    }
                    if (typeof result_1 === "string") {
                        /** @type {?} */
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
                                /** @type {?} */
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
        IntoDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[into]'
                    },] }
        ];
        /** @nocollapse */
        IntoDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.ElementRef },
                { type: ComponentPool },
                { type: core.ComponentFactoryResolver }
            ];
        };
        IntoDirective.propDecorators = {
            rawContent: [{ type: core.Input, args: ["rawContent",] }],
            intoId: [{ type: core.Input, args: ["intoId",] }],
            intoName: [{ type: core.Input, args: ["intoName",] }],
            intoData: [{ type: core.Input, args: ["intoData",] }],
            into: [{ type: core.Input, args: ["into",] }],
            onComponentChange: [{ type: core.Input, args: ["onComponentChange",] }]
        };
        return IntoDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommonPipesModule = (function () {
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
                /** @type {?} */
                var result;
                /** @type {?} */
                var start = parseInt(args[1], 10);
                /** @type {?} */
                var end = undefined;
                if (args.length > 2) {
                    end = parseInt(args[2], 10);
                }
                /** @type {?} */
                var slicer = new common.SlicePipe();
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
                /** @type {?} */
                var result;
                /** @type {?} */
                var numLocal = "en_US";
                /** @type {?} */
                var numDecimal = undefined;
                if (args.length > 2) {
                    numLocal = args[1];
                    numDecimal = args[2];
                }
                /** @type {?} */
                var decimaler = new common.DecimalPipe(numLocal);
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
                /** @type {?} */
                var result;
                /** @type {?} */
                var cp = new common.CurrencyPipe(args.length > 1 ? args[1] : "en_US");
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
                /** @type {?} */
                var result;
                /** @type {?} */
                var lcp = new common.LowerCasePipe();
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
                /** @type {?} */
                var result;
                /** @type {?} */
                var ucp = new common.UpperCasePipe();
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
                /** @type {?} */
                var result;
                /** @type {?} */
                var jcp = new common.JsonPipe();
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
                /** @type {?} */
                var result;
                /** @type {?} */
                var dateLocal = "en_US";
                /** @type {?} */
                var dateFormat = args[1];
                if (args.length > 2) {
                    dateLocal = args[1];
                    dateFormat = args[2];
                }
                /** @type {?} */
                var dater = new common.DatePipe(dateLocal);
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
        /**
         * @return {?}
         */
        CommonPipesModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: CommonPipesModule,
                    providers: [
                        common.DatePipe,
                        common.CurrencyPipe,
                        common.DecimalPipe,
                        common.JsonPipe,
                        common.SlicePipe,
                        common.UpperCasePipe,
                        common.LowerCasePipe,
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
        CommonPipesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        CommonPipesModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return CommonPipesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputIntoPipeModule = (function () {
        function InputIntoPipeModule(pool) {
            pool.registerComponent('input', InputComponent);
        }
        /**
         * @return {?}
         */
        InputIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: InputIntoPipeModule,
                    providers: []
                };
            };
        InputIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, CommonPipesModule.forRoot()],
                        declarations: [InputComponent],
                        exports: [InputComponent],
                        entryComponents: [InputComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        InputIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return InputIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputGroupComponent = (function () {
        function InputGroupComponent(renderer) {
            this.renderer = renderer;
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        InputGroupComponent.prototype.focused = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
                if (this.type === 'radio') {
                    this.source = event.target.value;
                }
                else {
                    /** @type {?} */
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
        /**
         * @param {?} item
         * @return {?}
         */
        InputGroupComponent.prototype.isSelected = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var xitem = item.value ? item.value : item;
                if (this.type === 'radio') {
                    return xitem === this.source;
                }
                /** @type {?} */
                var found = false;
                this.source.map(function (x) {
                    if (xitem === x) {
                        found = true;
                    }
                });
                return found;
            };
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        InputGroupComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.data = data;
                this.options = this.service.getDataFor(this.name, this.id, data);
                this.type = (source instanceof Array) ? 'checkbox' : 'radio';
            };
        InputGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'input-group-component',
                        template: "\n    <span class=\"input-group-item\" *ngFor=\"let x of options; let i = index\">\n        <input \n            [type]=\"type\" \n            [id]=\"name + i\" \n            [name]=\"name + (type === 'radio' ? '' : i)\" \n            [value]=\"x.value ? x.value : x\" \n            [checked]=\"isSelected(x)\"\n            (focus)=\"focused($event)\"/>\n        <label [for]=\"name + i\" [textContent]=\"x.label ? x.label : x\"></label>\n    </span>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        "]
                    }] }
        ];
        /** @nocollapse */
        InputGroupComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        InputGroupComponent.propDecorators = {
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return InputGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputGroupIntoPipeModule = (function () {
        function InputGroupIntoPipeModule(pool) {
            pool.registerComponent('inputgroup', InputGroupComponent);
        }
        /**
         * @return {?}
         */
        InputGroupIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: InputGroupIntoPipeModule,
                    providers: []
                };
            };
        InputGroupIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [InputGroupComponent],
                        exports: [InputGroupComponent],
                        entryComponents: [InputGroupComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        InputGroupIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return InputGroupIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var JsonComponent = (function () {
        function JsonComponent() {
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        JsonComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
            };
        JsonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'json-component',
                        template: "<span class=\"json-view\" [textContent]=\"source | json\"></span>",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        .json-view {\n            display: inline-block;\n            float: left;\n            font-family: monospace;\n            padding: 5px;\n            white-space: pre-wrap;\n            unicode-bidi: embed;        \n        }\n        "]
                    }] }
        ];
        return JsonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var JsonIntoPipeModule = (function () {
        function JsonIntoPipeModule(pool) {
            pool.registerComponent('json', JsonComponent);
        }
        /**
         * @return {?}
         */
        JsonIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: JsonIntoPipeModule,
                    providers: []
                };
            };
        JsonIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [JsonComponent],
                        exports: [JsonComponent],
                        entryComponents: [JsonComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        JsonIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return JsonIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LastUpdateComponent = (function () {
        function LastUpdateComponent() {
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        LastUpdateComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.showIcon = (args && args.length && args[0] === 'true');
            };
        /**
         * @return {?}
         */
        LastUpdateComponent.prototype.formatDate = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var currentDate = new Date();
                /** @type {?} */
                var minute = 60000;
                /** @type {?} */
                var hour = 3600000;
                /** @type {?} */
                var day = 86400000;
                /** @type {?} */
                var week = 604800000;
                /** @type {?} */
                var month = 604800000 * 4;
                /** @type {?} */
                var year = 604800000 * 52;
                /** @type {?} */
                var result = "";
                /** @type {?} */
                var diff = currentDate.getTime() - this.source.getTime();
                if (diff <= minute) {
                    // up to a minute
                    result = "seconds ago";
                }
                else if (diff <= hour) {
                    /** @type {?} */
                    var minutes = Math.floor(diff / minute);
                    /** @type {?} */
                    var seconds = Math.floor((diff - (minutes * minute)) / 1000);
                    result = (minutes < 2 ? "a minute" : minutes + " minutes ") + (seconds > 0 ? " and " + seconds + " seconds ago" : " ago");
                }
                else if (diff <= day) {
                    /** @type {?} */
                    var hours = Math.floor(diff / hour);
                    /** @type {?} */
                    var minutes = Math.floor((diff - (hours * hour)) / minute);
                    result = (hours < 2 ? "an hour" : hours + " hours ") + (minutes > 0 ? " and " + minutes + " minutes ago" : " ago");
                }
                else if (diff <= week) {
                    /** @type {?} */
                    var days = Math.floor(diff / day);
                    /** @type {?} */
                    var hours = Math.floor((diff - (days * day)) / hour);
                    result = (days < 2 ? "a day" : days + " days ") + (hours > 0 ? " and " + hours + " hours ago" : " ago");
                }
                else if (diff <= month) {
                    /** @type {?} */
                    var weeks = Math.floor(diff / week);
                    /** @type {?} */
                    var days = Math.floor((diff - (weeks * week)) / day);
                    result = (weeks < 2 ? "a week" : weeks + " weeks ") + (days > 0 ? " and " + days + " days ago" : " ago");
                }
                else if (diff <= year) {
                    /** @type {?} */
                    var months = Math.floor(diff / month);
                    /** @type {?} */
                    var weeks = Math.floor((diff - (months * month)) / week);
                    result = (months < 2 ? "a month" : months + " months ") + (weeks > 0 ? " and " + weeks + " weeks ago" : " ago");
                }
                else {
                    /** @type {?} */
                    var years = Math.floor(diff / year);
                    /** @type {?} */
                    var months = Math.floor((diff - (years * year)) / month);
                    result = (years < 2 ? "a year" : years + " years ") + (months > 0 ? " and " + months + " months ago" : " ago");
                }
                return result;
            };
        LastUpdateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lastupdate-component',
                        template: "\n    <span *ngIf=\"showIcon\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></span>\n    <span>{{formatDate()}}</span>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px;position: relative}\n        .fa {margin:0 5px 0 0}\n        "]
                    }] }
        ];
        return LastUpdateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LastUpdateIntoPipeModule = (function () {
        function LastUpdateIntoPipeModule(pool) {
            pool.registerComponent('lastupdate', LastUpdateComponent);
        }
        /**
         * @return {?}
         */
        LastUpdateIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: LastUpdateIntoPipeModule,
                    providers: []
                };
            };
        LastUpdateIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [LastUpdateComponent],
                        exports: [LastUpdateComponent],
                        entryComponents: [LastUpdateComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        LastUpdateIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return LastUpdateIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LikeComponent = (function () {
        function LikeComponent() {
            this.thumbs = "";
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        LikeComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.data = data;
                this.showCount = (args && args.length && args[0] === 'true');
                this.thumbsup = (args && args.length > 1 && args[1] === 'true');
                this.key = (args && args.length > 2) ? args[2] : "";
                this.thumbs = this.thumbsup ? "thumbs-up-items" : "thumbs-down-items";
                this.selected = (this.getItem(this.data[this.key]) !== null);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LikeComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @param {?} id
         * @return {?}
         */
        LikeComponent.prototype.addItem = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                /** @type {?} */
                var saved = localStorage.getItem(this.thumbs);
                if (saved) {
                    /** @type {?} */
                    var savedItems = JSON.parse(saved);
                    savedItems.push(id);
                    localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
                }
                else {
                    localStorage.setItem(this.thumbs, JSON.stringify([id]));
                }
                this.source++;
            };
        /**
         * @param {?} id
         * @return {?}
         */
        LikeComponent.prototype.removeItem = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                /** @type {?} */
                var saved = localStorage.getItem(this.thumbs);
                if (saved) {
                    /** @type {?} */
                    var savedItems = JSON.parse(saved);
                    /** @type {?} */
                    var i = savedItems.indexOf(id);
                    savedItems.splice(i, 1);
                    localStorage.setItem(this.thumbs, JSON.stringify(savedItems));
                    this.source--;
                }
            };
        /**
         * @param {?} id
         * @return {?}
         */
        LikeComponent.prototype.getItem = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                /** @type {?} */
                var saved = localStorage.getItem(this.thumbs);
                /** @type {?} */
                var found = null;
                if (saved) {
                    /** @type {?} */
                    var savedItems = JSON.parse(saved);
                    /** @type {?} */
                    var i = savedItems.indexOf(id);
                    found = i < 0 ? null : savedItems[i];
                }
                return found;
            };
        /**
         * @return {?}
         */
        LikeComponent.prototype.formatterSource = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var result = this.source;
                if (this.source > 1000) {
                    result = (this.source / 1000).toFixed(1) + " k";
                }
                return result;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LikeComponent.prototype.toggleCount = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selected = !this.selected;
                event.stopPropagation();
                event.preventDefault();
                if (this.selected) {
                    /** @type {?} */
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
        LikeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'like-component',
                        template: "\n    <a \n        id='like-{{id}}' \n        tabindex=\"0\" \n        class=\"like\" \n        [class.selected]=\"selected\" \n        (keyup)=\"keyup($event)\" \n        (click)='toggleCount($event)'>\n        <span class=\"fa fa-thumbs-up\" *ngIf=\"thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-up selected\" *ngIf=\"thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down\" *ngIf=\"!thumbsup && !selected\" aria-hidden=\"true\"></span>\n        <span class=\"fa fa-thumbs-down selected\" *ngIf=\"!thumbsup && selected\" aria-hidden=\"true\"></span>\n        <span class=\"counts\" *ngIf=\"showCount\" [textContent]=\"formatterSource()\"></span>\n    </a>",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px;position: relative}\n        .like {cursor: pointer;}\n        .like .counts{margin-left: 5px;}\n        .like .fa {margin: 0;}\n        .like .fa.selected {color: green;}\n        .like:hover, .like:hover .fa, .like:hover .fa.selected{color: #fabdab;}\n        "]
                    }] }
        ];
        return LikeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LikeIntoPipeModule = (function () {
        function LikeIntoPipeModule(pool) {
            pool.registerComponent('like', LikeComponent);
        }
        /**
         * @return {?}
         */
        LikeIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: LikeIntoPipeModule,
                    providers: []
                };
            };
        LikeIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [LikeComponent],
                        exports: [LikeComponent],
                        entryComponents: [LikeComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        LikeIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return LikeIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LinkComponent = (function () {
        function LinkComponent() {
            this.poped = false;
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        LinkComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.target = (args && args.length) ? args[0] : "";
                this.title = (args && args.length > 1) ? args[1] : "";
                this.poper = (args && args.length > 2) ? (args[1] == 'true') : false;
                if (!this.title || !this.title.length) {
                    /** @type {?} */
                    var q = source.indexOf("?");
                    /** @type {?} */
                    var t = q < 0 ? source : source.substring(0, q);
                    /** @type {?} */
                    var d = t.lastIndexOf("/");
                    this.title = d < 0 ? t : t.substring(d + 1);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LinkComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                event.stopPropagation();
                event.preventDefault();
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LinkComponent.prototype.change = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.poped = false;
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: "click",
                    item: event.type
                });
            };
        LinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'link-component',
                        template: "\n    <a [href]=\"source\" \n        [target]=\"target\" \n        [textContent]=\"title\" \n        (mouseenter)='poped = true' \n        (mouseleave)='poped = false' \n        (keyup)='keyup($event)' \n        (click)=\"change($event)\"></a>\n        <img *ngIf='poped' [src]='source' />",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px; position:relative}\n        :host img{z-index:2;border:2px solid;box-shadow: 3px 3px 3px #999;display:table;float:left;min-height: 23px; width: 250px;top: 22px;position:absolute;border-radius: 4px}\n        "]
                    }] }
        ];
        return LinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LinkPipe = (function () {
        function LinkPipe() {
        }
        /**
         * @return {?}
         */
        LinkPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
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
            };
        /**
         * @param {?} source
         * @param {?} target
         * @param {?} title
         * @return {?}
         */
        LinkPipe.prototype.stringToLink = /**
         * @param {?} source
         * @param {?} target
         * @param {?} title
         * @return {?}
         */
            function (source, target, title) {
                if (!title || !title.length) {
                    /** @type {?} */
                    var q = source.indexOf("?");
                    /** @type {?} */
                    var t = q < 0 ? source : source.substring(0, q);
                    /** @type {?} */
                    var d = t.lastIndexOf("/");
                    title = d < 0 ? t : t.substring(d + 1);
                }
                return "<a href='" + source + "' target='" + target + "'>" + title + "</a>";
            };
        /**
         * @param {?} sources
         * @param {?} target
         * @param {?} title
         * @return {?}
         */
        LinkPipe.prototype.arrayToImagLink = /**
         * @param {?} sources
         * @param {?} target
         * @param {?} title
         * @return {?}
         */
            function (sources, target, title) {
                var _this = this;
                /** @type {?} */
                var result = [];
                sources.map(function (source) {
                    result.push(_this.stringToLink(source, target, ""));
                });
                return result;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        LinkPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var target = (args && args.length) ? args[0] : "";
                /** @type {?} */
                var title = (args && args.length > 1) ? args[1] : "";
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.stringToLink(source, target, title);
                }
                return this.arrayToImagLink(source, target, title);
            };
        LinkPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'link' },] }
        ];
        return LinkPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LinkIntoPipeModule = (function () {
        function LinkIntoPipeModule(pool) {
            pool.registerComponent('link', LinkComponent);
            pool.registerPipeTransformation('link', LinkPipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        LinkIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: LinkIntoPipeModule,
                    providers: [LinkPipe]
                };
            };
        LinkIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [LinkComponent, LinkPipe],
                        exports: [LinkComponent, LinkPipe],
                        entryComponents: [LinkComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        LinkIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return LinkIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PhoneComponent = (function () {
        function PhoneComponent() {
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        PhoneComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.isLink = args.length ? args[0] === 'true' : false;
                this.formatting = args.length > 1 ? args[1] === 'true' : false;
            };
        /**
         * @return {?}
         */
        PhoneComponent.prototype.normalizeSource = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
                result = result[0] === '1' ? result.substring(1) : result;
                if (result.length === 10) {
                    result = '+1 ' + result + ';ext=' + result;
                }
                else if (result.length > 10) {
                    /** @type {?} */
                    var b = result.slice(0, 10);
                    /** @type {?} */
                    var e = result.slice(10);
                    result = '+1' + b + ';ext=' + e;
                }
                return result;
            };
        /**
         * @return {?}
         */
        PhoneComponent.prototype.formattedSource = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var result = this.source;
                if (this.formatting) {
                    result = this.source.replace(/[\ \-\.\(\)\+]/g, '');
                    result = result[0] === '1' ? result.substring(1) : result;
                    if (result.length === 10) {
                        result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                    }
                    else if (result.length > 10) {
                        /** @type {?} */
                        var b = result.slice(0, 10);
                        /** @type {?} */
                        var e = result.slice(10);
                        result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                        result += (' ext. ' + e);
                    }
                }
                return result;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        PhoneComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                event.stopPropagation();
                event.preventDefault();
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        PhoneComponent.prototype.change = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: 'click',
                    item: event.type
                });
            };
        PhoneComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'phone',
                        template: "\n    <a  *ngIf=\"isLink\" [href]=\"'tel:' + normalizeSource()\" (keyup)='keyup($event)' (click)=\"change($event)\">\n        <span class='fa fa-phone' aria-hidden='true'></span>\n        <span [textContent]=\"formattedSource()\"></span>\n    </a>\n    <span *ngIf=\"!isLink\">\n        <span class='fa fa-phone' aria-hidden='true'></span>\n        <span [textContent]=\"formattedSource()\"></span>\n    </span>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        :host a:hover .fa-phone{color: #fabdab;}\n        :host .fa{margin: 0 5px;}\n        "]
                    }] }
        ];
        return PhoneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PhonePipe = (function () {
        function PhonePipe() {
        }
        /**
         * @return {?}
         */
        PhonePipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    // prepend:something
                    return new PhonePipe().transform(content, args.length > 1 ? args[1] === 'true' : false, args.length > 2 ? args[2] === 'true' : false);
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {?} link
         * @param {?} format
         * @return {?}
         */
        PhonePipe.prototype.phoneFromString = /**
         * @param {?} source
         * @param {?} link
         * @param {?} format
         * @return {?}
         */
            function (source, link, format) {
                return link ?
                    "<a href='tel:" + this.normalizeSource(source) + "'><span class='fa fa-phone' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></a>" :
                    "<span><span class='fa fa-phone' style='margin: 0 5px' aria-hidden='true'></span><span>" + (format ? this.formattedSource(source) : source) + "</span></span>";
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        PhonePipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var _this = this;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var link = ((args && args.length) ? args[0] : false);
                /** @type {?} */
                var format = ((args && args.length > 1) ? args[1] : false);
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.phoneFromString(source, link, format);
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(_this.phoneFromString(item, link, format));
                    });
                    return result_1;
                }
            };
        /**
         * @param {?} source
         * @return {?}
         */
        PhonePipe.prototype.normalizeSource = /**
         * @param {?} source
         * @return {?}
         */
            function (source) {
                /** @type {?} */
                var result = source.replace(/[\ \-\.\(\)\+]/g, '');
                result = result[0] === '1' ? result.substring(1) : result;
                if (result.length === 10) {
                    result = '+1 ' + result + ';ext=' + result;
                }
                else if (result.length > 10) {
                    /** @type {?} */
                    var b = result.slice(0, 10);
                    /** @type {?} */
                    var e = result.slice(10);
                    result = '+1' + b + ';ext=' + e;
                }
                return result;
            };
        /**
         * @param {?} source
         * @return {?}
         */
        PhonePipe.prototype.formattedSource = /**
         * @param {?} source
         * @return {?}
         */
            function (source) {
                /** @type {?} */
                var result = source.replace(/[\ \-\.\(\)\+]/g, '');
                result = result[0] === '1' ? result.substring(1) : result;
                if (result.length === 10) {
                    result = '+1 ' + result.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                }
                else if (result.length > 10) {
                    /** @type {?} */
                    var b = result.slice(0, 10);
                    /** @type {?} */
                    var e = result.slice(10);
                    result = '+1 ' + b.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
                    result += (' ext. ' + e);
                }
                return result;
            };
        PhonePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'phone' },] }
        ];
        return PhonePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PhoneIntoPipeModule = (function () {
        function PhoneIntoPipeModule(pool) {
            pool.registerComponent('phone', PhoneComponent);
            pool.registerPipeTransformation('phone', PhonePipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        PhoneIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: PhoneIntoPipeModule,
                    providers: [PhonePipe]
                };
            };
        PhoneIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [PhoneComponent, PhonePipe],
                        exports: [PhoneComponent, PhonePipe],
                        entryComponents: [PhoneComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        PhoneIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return PhoneIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RatingComponent = (function () {
        function RatingComponent(el) {
            this.el = el;
            this.singleStar = false;
            this.value = [];
            this.onIntoComponentChange = new core.EventEmitter();
            el.nativeElement.setAttribute('tabindex', '0');
        }
        /**
         * @param {?} event
         * @return {?}
         */
        RatingComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                event.stopPropagation();
                event.preventDefault();
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @return {?}
         */
        RatingComponent.prototype.click = /**
         * @return {?}
         */
            function () {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: 'click',
                    item: 'rating'
                });
            };
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        RatingComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.float = parseFloat(source);
                this.singleStar = args.length ? (args[0] === 'true') : false;
                this.source = source;
                /** @type {?} */
                var size = parseInt(source, 10);
                for (var i = 0; i < size; i++) {
                    this.value.push(i);
                }
            };
        RatingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'rating-component',
                        template: "\n    <span class='rating' *ngIf=\"singleStar\">\n        <span class='fa fa-star' aria-hidden='true'></span>\n    </span>\n    <span class='rating' *ngIf=\"!singleStar\">\n        <span class='fa fa-star' aria-hidden='true' *ngFor=\"let x of value\"></span>\n        <span class='fa fa-star-half' aria-hidden='true' *ngIf=\"float != value\"></span>\n    </span>\n    <span class='rate-value' [textContent]=\"source\"></span>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px;cursor:pointer}\n        .rating {\n            display: inline-block;\n        }\n        "]
                    }] }
        ];
        /** @nocollapse */
        RatingComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        RatingComponent.propDecorators = {
            keyup: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
            click: [{ type: core.HostListener, args: ['click', [],] }]
        };
        return RatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RatingPipe = (function () {
        function RatingPipe() {
        }
        /**
         * @return {?}
         */
        RatingPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    return new RatingPipe().transform(content, "");
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {?} multiStart
         * @return {?}
         */
        RatingPipe.prototype.rateString = /**
         * @param {?} source
         * @param {?} multiStart
         * @return {?}
         */
            function (source, multiStart) {
                /** @type {?} */
                var value = parseInt(source, 10);
                /** @type {?} */
                var float = parseFloat(source);
                /** @type {?} */
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
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        RatingPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var _this = this;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var singleStar = args.length ? (args[0] === 'true') : false;
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.rateString(source, singleStar);
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(_this.rateString(item, singleStar));
                    });
                    return result_1;
                }
            };
        RatingPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'raiting' },] }
        ];
        return RatingPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RatingIntoPipeModule = (function () {
        function RatingIntoPipeModule(pool) {
            pool.registerComponent('rating', RatingComponent);
            pool.registerPipeTransformation('rating', RatingPipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        RatingIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: RatingIntoPipeModule,
                    providers: [RatingPipe]
                };
            };
        RatingIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [RatingComponent, RatingPipe],
                        exports: [RatingComponent, RatingPipe],
                        entryComponents: [RatingComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        RatingIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return RatingIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NoticeComponent = (function () {
        function NoticeComponent(el) {
            this.el = el;
            this.onIntoComponentChange = new core.EventEmitter();
            el.nativeElement.setAttribute('tabindex', '0');
        }
        /**
         * @param {?} event
         * @return {?}
         */
        NoticeComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                event.stopPropagation();
                event.preventDefault();
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @return {?}
         */
        NoticeComponent.prototype.click = /**
         * @return {?}
         */
            function () {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    type: 'click',
                    item: 'notice'
                });
            };
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        NoticeComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.message = args.length ? args[0] : undefined;
                this.source = source;
                this.el.nativeElement.setAttribute('title', this.message);
            };
        NoticeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'notice-component',
                        template: "\n        <span class='fa fa-bell' aria-hidden='true'></span>\n        <span class='notice' [textContent]=\"source\"></span>\n    ",
                        styles: ["\n        :host {display: table;position: relative;float: left;cursor:pointer}\n        :host .fa{font-size: 1rem;}\n        :host:hover{color: red;}\n        :host:hover .fa{color: red;}\n        :host:hover .notice{background-color: #000;}\n        .notice {display: table;width: 17px;height: 15px;\n            border-radius: 50%;text-align: center;\n            background-color: rgba(55,155,255,0.9);\n            float: right;font-size: 0.7rem;line-height: 1rem;\n            margin-left: -5px;z-index: 2;color: #fff;\n        }\n        "]
                    }] }
        ];
        /** @nocollapse */
        NoticeComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        NoticeComponent.propDecorators = {
            keyup: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
            click: [{ type: core.HostListener, args: ['click', [],] }]
        };
        return NoticeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NoticePipe = (function () {
        function NoticePipe() {
        }
        /**
         * @return {?}
         */
        NoticePipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    return new NoticePipe().transform(content, "");
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {?} message
         * @return {?}
         */
        NoticePipe.prototype.noticeString = /**
         * @param {?} source
         * @param {?} message
         * @return {?}
         */
            function (source, message) {
                return "\n        <span style='display:table;possition:relative;float:left' alt='" + message + "'>\n          <span class='fa fa-star' aria-hidden='true'></span>\n          <span style='display: table;width: 17px;height: 15px;border-radius: 50%;text-align: center;background-color: rgba(200,200,200,0.2);float: right;font-size: 0.8rem;margin-left: -5px'>" +
                    source +
                    " </span>\n        </span>";
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        NoticePipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var _this = this;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var message = args.length ? args[0] : undefined;
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.noticeString(source, message);
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(_this.noticeString(item, message));
                    });
                    return result_1;
                }
            };
        NoticePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'notice' },] }
        ];
        return NoticePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NoticeIntoPipeModule = (function () {
        function NoticeIntoPipeModule(pool) {
            pool.registerComponent('notice', NoticeComponent);
            pool.registerPipeTransformation('notice', NoticePipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        NoticeIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: NoticeIntoPipeModule,
                    providers: [NoticePipe]
                };
            };
        NoticeIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [NoticeComponent, NoticePipe],
                        exports: [NoticeComponent, NoticePipe],
                        entryComponents: [NoticeComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        NoticeIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return NoticeIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectComponent = (function () {
        function SelectComponent() {
            this.multiselect = false;
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        SelectComponent.prototype.click = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SelectComponent.prototype.change = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        SelectComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.data = data;
                this.options = this.service.getDataFor(this.name, this.id, data);
                this.multiselect = args.length ? args[0] === true : false;
            };
        SelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'select-component',
                        template: "\n    <select tabindex=\"0\" \n      [multiple]=\"multiselect ? true:null\" \n      (click)=\"click($event)\" \n      (change)=\"change($event)\">\n        <option *ngFor=\"let x of options\" \n          [selected]=\"source === x ? true : null\"  \n          [value]=\"x\" \n          [textContent]=\"x\"></option>\n    </select>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        "]
                    }] }
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
        SelectComponent.propDecorators = {
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return SelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectIntoPipeModule = (function () {
        function SelectIntoPipeModule(pool) {
            pool.registerComponent('select', SelectComponent);
        }
        /**
         * @return {?}
         */
        SelectIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: SelectIntoPipeModule,
                    providers: []
                };
            };
        SelectIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [SelectComponent],
                        exports: [SelectComponent],
                        entryComponents: [SelectComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        SelectIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return SelectIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ShareComponent = (function () {
        function ShareComponent() {
            this.shouldDisplay = false;
            this.shareList = [];
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} type
         * @param {?} address
         * @return {?}
         */
        ShareComponent.prototype.shareInfo = /**
         * @param {?} type
         * @param {?} address
         * @return {?}
         */
            function (type, address) {
                return {
                    icon: 'fa fa-' + type,
                    href: address,
                    title: 'share with ' + type
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ShareComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var code = event.which;
                event.stopPropagation();
                event.preventDefault();
                if (code === 13) {
                    event.target.click();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ShareComponent.prototype.change = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    item: event.title
                });
            };
        /**
         * @return {?}
         */
        ShareComponent.prototype.toggleShare = /**
         * @return {?}
         */
            function () {
                this.shouldDisplay = !this.shouldDisplay;
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: 'Share options',
                    type: 'share',
                    item: this.shouldDisplay ? 'open' : 'close'
                });
            };
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        ShareComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                var _this = this;
                this.source = source;
                /** @type {?} */
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
        ShareComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'share-component',
                        template: "\n    <a id='share-comment-{{id}}' \n        tabindex=\"0\" \n        class='share-item-tips' \n        (keyup)='keyup($event)'\n        (click)='toggleShare()'>\n    <span class=\"fa fa-share-alt\"></span>\n    <span class=\"share\">share</span>\n    </a>\n    <span id='share-comment-{{id}}-tips' class='tips' *ngIf='shouldDisplay'>\n      <span class='social-referal'>\n        <a *ngFor=\"let share of shareList\" \n            (keyup)='keyup($event)'\n            (click)='change(share)'\n            [class]='share.icon' target='_blank' \n            [href]='share.href'><span class='off-screen' [textContent]=\"share.title\"></span></a>\n      </span>\n    </span>\n",
                        styles: ["\n    :host {display:table;float:left;min-height: 23px;position: relative}\n    .share-item-tips {cursor: pointer;}\n    .share-item-tips:hover {color: #fabdab;}\n    .share-item-tips .fa {margin: 0;}\n    .share-item-tips:hover .fa{color: #fabdab;}\n    .share-item-tips .share{margin-left: 5px;}\n    .tips {\n        position: absolute;\n        display: flex;\n        flex-direction: row;\n        padding: 5px;\n        border: 1px solid #aaa;\n        border-radius: 2px;\n        background-color: #fff;\n        z-index: 2;\n    }\n    .tips .social-referal {\n        display: flex;\n        flex-direction: row;\n    }\n    .tips .social-referal .fa {\n        float: left;\n        padding: 2px 4px;\n        color: blue;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        text-decoration: none;\n        margin: 0 1px;\n        width: 20px;\n        text-align: center;\n    }\n    .tips .social-referal .fa:hover {\n        color: #fff;\n        background-color: blue;\n    }\n    "]
                    }] }
        ];
        return ShareComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ShareIntoPipeModule = (function () {
        function ShareIntoPipeModule(pool) {
            pool.registerComponent('share', ShareComponent);
        }
        /**
         * @return {?}
         */
        ShareIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: ShareIntoPipeModule,
                    providers: []
                };
            };
        ShareIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [ShareComponent],
                        exports: [ShareComponent],
                        entryComponents: [ShareComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        ShareIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return ShareIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SpanComponent = (function () {
        function SpanComponent() {
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        SpanComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
            };
        SpanComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'span-component',
                        template: "<span [textContent]=\"source\"></span>",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        "]
                    }] }
        ];
        return SpanComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SpanIntoPipeModule = (function () {
        function SpanIntoPipeModule(pool) {
            pool.registerComponent('span', SpanComponent);
        }
        /**
         * @return {?}
         */
        SpanIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: SpanIntoPipeModule,
                    providers: []
                };
            };
        SpanIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [SpanComponent],
                        exports: [SpanComponent],
                        entryComponents: [SpanComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        SpanIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return SpanIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TableComponent = (function () {
        function TableComponent() {
            this.headers = [];
            this.rows = [];
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        TableComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
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
        /**
         * @param {?} obj
         * @return {?}
         */
        TableComponent.prototype.getHeaders = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                var _this = this;
                Object.keys(obj).map(function (item) {
                    _this.headers.push(item);
                });
            };
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'table-component',
                        template: "\n    <table [id]=\"id\" class=\"piped-table\">\n        <caption *ngIf=\"name\" [textContent]=\"name\"></caption>\n        <tr><th scope=\"col\" *ngFor=\"let header of headers\" [textContent]=\"header\"></th></tr>\n        <tr *ngFor=\"let row of rows\"><td *ngFor=\"let header of headers\" [textContent]=\"row[header]\"></td></tr>\n    </table>\n    ",
                        styles: ["\n        :host .piped-table {padding: 0;width: 100%;border-collapse: collapse;}\n        :host .piped-table caption {background-color: #c3e5e2;border-radius: 2px;color: #1b1b1b;caption-side: top;font-size: 14px;padding: 5px 6px;margin-bottom: 15px;text-align: left;}\n        :host .piped-table th {user-select: none;height: 24px;position: relative;white-space: nowrap;font-weight: normal;text-transform: uppercase;font-size: 14px;padding-top: 6px;padding-bottom: 6px;text-align: left;}\n        :host .piped-table td {padding-left: 3px;min-height: 21px;}\n        "]
                    }] }
        ];
        return TableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TablePipe = (function () {
        function TablePipe() {
        }
        /**
         * @return {?}
         */
        TablePipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
                    return new TablePipe().transform(content, args.length > 1 ? args[1] : '', args.length > 2 ? args[2] : undefined);
                };
                return x;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        TablePipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var id = args.length ? args[0] : '';
                /** @type {?} */
                var name = args.length > 1 ? args[1] : undefined;
                /** @type {?} */
                var headers = [];
                /** @type {?} */
                var rows = [];
                this.buildTable(source, rows, headers);
                /** @type {?} */
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
        /**
         * @param {?} source
         * @param {?} rows
         * @param {?} headers
         * @return {?}
         */
        TablePipe.prototype.buildTable = /**
         * @param {?} source
         * @param {?} rows
         * @param {?} headers
         * @return {?}
         */
            function (source, rows, headers) {
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
        /**
         * @param {?} obj
         * @param {?} headers
         * @return {?}
         */
        TablePipe.prototype.getHeaders = /**
         * @param {?} obj
         * @param {?} headers
         * @return {?}
         */
            function (obj, headers) {
                Object.keys(obj).map(function (item) {
                    headers.push(item);
                });
            };
        TablePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'table' },] }
        ];
        return TablePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TableIntoPipeModule = (function () {
        function TableIntoPipeModule(pool) {
            pool.registerComponent('table', TableComponent);
            pool.registerPipeTransformation('table', TablePipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        TableIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TableIntoPipeModule,
                    providers: [
                        TablePipe
                    ]
                };
            };
        TableIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TableComponent, TablePipe],
                        exports: [TableComponent, TablePipe],
                        entryComponents: [TableComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        TableIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return TableIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TextComponent = (function () {
        function TextComponent(renderer) {
            this.renderer = renderer;
            this.rows = 4;
            this.limit = 0;
            this.editName = false;
            this.counter = false;
            this.onIntoComponentChange = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.keyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                /** @type {?} */
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
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.blur = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.focus = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.click(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TextComponent.prototype.click = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
        /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
        TextComponent.prototype.transform = /**
         * @param {?} source
         * @param {?} data
         * @param {?} args
         * @return {?}
         */
            function (source, data, args) {
                this.source = source;
                this.oldValue = source;
                this.rows = args.length ? args[0] : 4;
                this.limit = args.length > 1 ? args[1] : 0;
                this.counter = args.length > 2 ? args[2] : false;
            };
        TextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'text-component',
                        template: "\n    <span class=\"text-wrapper\" *ngIf=\"editName\">\n      <textarea #nameEditor\n        [id]=\"id\"\n        [name]=\"name\"\n        [value]=\"source\"\n        [attr.maxlength]=\"limit ? limit : null\"\n        [rows]=\"rows\"\n        (blur)=\"blur($event)\" \n        (keyup)='keyup($event)'></textarea>\n      <span *ngIf=\"counter\" class=\"counter\" \n        [textContent]=\"limit ? (limit - source.length) + ' remaining' : source.length + ' typed'\"></span>\n    </span>\n    <span #nameHolder\n        *ngIf='!editName'\n        class='locked' \n        tabindex='0' \n        (click)='click($event)'\n        (keyup)='focus($event)'\n        [innerHTML]=\"source\">\n    </span>\n    ",
                        styles: ["\n        .locked {\n          display: block;\n          cursor: pointer;\n          min-height: 23px;\n          min-width: 33px;\n          -webkit-user-select: none;       \n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          border: 1px solid transparent;\n        }\n        .text-wrapper{box-sizing: border-box;display:table;width: 100%;}\n        .text-wrapper textarea {box-sizing: border-box;display:block;cursor: beam;width: 100%;}\n        .counter{display: table;float:right;color: #ddd;}\n        :host {box-sizing: border-box;width: 100%;display:table;float:left;min-height: 23px;min-width: 33px;}\n        :host .locked:hover{border: 1px solid #fabdab;}\n        "]
                    }] }
        ];
        /** @nocollapse */
        TextComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
        TextComponent.propDecorators = {
            nameEditor: [{ type: core.ViewChild, args: ["nameEditor",] }],
            nameHolder: [{ type: core.ViewChild, args: ["nameHolder",] }],
            onIntoComponentChange: [{ type: core.Output, args: ["onIntoComponentChange",] }]
        };
        return TextComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TextIntoPipeModule = (function () {
        function TextIntoPipeModule(pool) {
            pool.registerComponent('text', TextComponent);
        }
        /**
         * @return {?}
         */
        TextIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TextIntoPipeModule,
                    providers: []
                };
            };
        TextIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, CommonPipesModule.forRoot()],
                        declarations: [TextComponent],
                        exports: [TextComponent],
                        entryComponents: [TextComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        TextIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return TextIntoPipeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var VideoComponent = (function () {
        function VideoComponent() {
            this.hasControls = true;
            this.hoverPlay = false;
            this.onIntoComponentChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'video-component',
                        template: "\n    <video tabindex=\"0\"\n        (focus)=\"updateControls($event)\"\n        (mouseenter)=\"updateControls($event)\"\n        (mouseleave)=\"resetControls($event)\"\n        (keyup)=\"keyup($event)\"\n        (play)=\"change($event)\"\n        (ended)=\"change($event)\"\n        (pause)=\"change($event)\"\n        (seeked)=\"change($event)\"\n        (error)=\"change($event)\"\n        (fullscreenchange)=\"change($event)\"\n        [src]=\"source\" \n        [style.width]=\"width\" \n        [style.height]=\"height\"\n        [title]=\"alt\"></video>\n    ",
                        styles: ["\n    :host {display:table;float:left;min-height: 23px}\n    "]
                    }] }
        ];
        return VideoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var VideoPipe = (function () {
        function VideoPipe() {
        }
        /**
         * @return {?}
         */
        VideoPipe.transformationMethod = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = function (content, args, callback, data) {
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
            };
        /**
         * @param {?} source
         * @param {?} width
         * @param {?} height
         * @param {?} alt
         * @return {?}
         */
        VideoPipe.prototype.stringToVideo = /**
         * @param {?} source
         * @param {?} width
         * @param {?} height
         * @param {?} alt
         * @return {?}
         */
            function (source, width, height, alt) {
                if (!alt || !alt.length) {
                    /** @type {?} */
                    var q = source.indexOf("?");
                    /** @type {?} */
                    var t = q < 0 ? source : source.substring(0, q);
                    /** @type {?} */
                    var d = t.lastIndexOf("/");
                    alt = d < 0 ? t : t.substring(d + 1);
                }
                return "<video src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\'  controls=\'true\' />";
            };
        /**
         * @param {?} sources
         * @param {?} width
         * @param {?} height
         * @param {?} alt
         * @return {?}
         */
        VideoPipe.prototype.arrayToVideo = /**
         * @param {?} sources
         * @param {?} width
         * @param {?} height
         * @param {?} alt
         * @return {?}
         */
            function (sources, width, height, alt) {
                var _this = this;
                /** @type {?} */
                var result = [];
                sources.map(function (source) {
                    result.push(_this.stringToVideo(source, width, height, alt));
                });
                return result;
            };
        /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
        VideoPipe.prototype.transform = /**
         * @param {?} source
         * @param {...?} args
         * @return {?}
         */
            function (source) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                /** @type {?} */
                var width = (args && args.length) ? "width: " + args[0] + ";" : "";
                /** @type {?} */
                var height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
                /** @type {?} */
                var alt = (args && args.length > 2) ? args[2] : "";
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.stringToVideo(source, width, height, alt);
                }
                return this.arrayToVideo(source, width, height, "");
            };
        VideoPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'video' },] }
        ];
        return VideoPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var VideoIntoPipeModule = (function () {
        function VideoIntoPipeModule(pool) {
            pool.registerComponent('video', VideoComponent);
            pool.registerPipeTransformation('video', VideoPipe.transformationMethod());
        }
        /**
         * @return {?}
         */
        VideoIntoPipeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: VideoIntoPipeModule,
                    providers: [VideoPipe]
                };
            };
        VideoIntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [VideoComponent, VideoPipe],
                        exports: [VideoComponent, VideoPipe],
                        entryComponents: [VideoComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        /** @nocollapse */
        VideoIntoPipeModule.ctorParameters = function () {
            return [
                { type: ComponentPool, decorators: [{ type: core.Inject, args: [ComponentPool,] }] }
            ];
        };
        return VideoIntoPipeModule;
    }());

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
    var IntoPipeModule = (function () {
        function IntoPipeModule() {
        }
        IntoPipeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        return IntoPipeModule;
    }());

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

    exports.IntoPipeModule = IntoPipeModule;
    exports.AddressComponent = AddressComponent;
    exports.AddressPipe = AddressPipe;
    exports.AddressIntoPipeModule = AddressIntoPipeModule;
    exports.AudioComponent = AudioComponent;
    exports.AudioPipe = AudioPipe;
    exports.AudioIntoPipeModule = AudioIntoPipeModule;
    exports.CalendarComponent = CalendarComponent;
    exports.CalendarIntoPipeModule = CalendarIntoPipeModule;
    exports.CheckboxComponent = CheckboxComponent;
    exports.CheckboxIntoPipeModule = CheckboxIntoPipeModule;
    exports.EmailComponent = EmailComponent;
    exports.EmailPipe = EmailPipe;
    exports.EmailIntoPipeModule = EmailIntoPipeModule;
    exports.FontComponent = FontComponent;
    exports.FontPipe = FontPipe;
    exports.FontIntoPipeModule = FontIntoPipeModule;
    exports.ImageComponent = ImageComponent;
    exports.ImagePipe = ImagePipe;
    exports.ImageIntoPipeModule = ImageIntoPipeModule;
    exports.InputComponent = InputComponent;
    exports.InputIntoPipeModule = InputIntoPipeModule;
    exports.InputGroupComponent = InputGroupComponent;
    exports.InputGroupIntoPipeModule = InputGroupIntoPipeModule;
    exports.JsonComponent = JsonComponent;
    exports.JsonIntoPipeModule = JsonIntoPipeModule;
    exports.LastUpdateComponent = LastUpdateComponent;
    exports.LastUpdateIntoPipeModule = LastUpdateIntoPipeModule;
    exports.LikeComponent = LikeComponent;
    exports.LikeIntoPipeModule = LikeIntoPipeModule;
    exports.LinkComponent = LinkComponent;
    exports.LinkPipe = LinkPipe;
    exports.LinkIntoPipeModule = LinkIntoPipeModule;
    exports.PhoneComponent = PhoneComponent;
    exports.PhoneIntoPipeModule = PhoneIntoPipeModule;
    exports.RatingComponent = RatingComponent;
    exports.RatingPipe = RatingPipe;
    exports.RatingIntoPipeModule = RatingIntoPipeModule;
    exports.NoticeComponent = NoticeComponent;
    exports.NoticePipe = NoticePipe;
    exports.NoticeIntoPipeModule = NoticeIntoPipeModule;
    exports.SelectComponent = SelectComponent;
    exports.SelectIntoPipeModule = SelectIntoPipeModule;
    exports.ShareComponent = ShareComponent;
    exports.ShareIntoPipeModule = ShareIntoPipeModule;
    exports.SpanComponent = SpanComponent;
    exports.SpanIntoPipeModule = SpanIntoPipeModule;
    exports.TableComponent = TableComponent;
    exports.TablePipe = TablePipe;
    exports.TableIntoPipeModule = TableIntoPipeModule;
    exports.TextComponent = TextComponent;
    exports.TextIntoPipeModule = TextIntoPipeModule;
    exports.VideoComponent = VideoComponent;
    exports.VideoPipe = VideoPipe;
    exports.VideoIntoPipeModule = VideoIntoPipeModule;
    exports.AppendPipe = AppendPipe;
    exports.ConditionalPipe = ConditionalPipe;
    exports.JoinPipe = JoinPipe;
    exports.MapPipe = MapPipe;
    exports.MaskPipe = MaskPipe;
    exports.PrependPipe = PrependPipe;
    exports.SanitizeHtmlPipe = SanitizeHtmlPipe;
    exports.ValueOfPipe = ValueOfPipe;
    exports.WrapPipe = WrapPipe;
    exports.InToPipe = InToPipe;
    exports.IntoDirective = IntoDirective;
    exports.ComponentPool = ComponentPool;
    exports.CommonPipesModule = CommonPipesModule;
    exports.ɵa = PhonePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtaW50by1waXBlcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvYWRkcmVzcy9hZGRyZXNzLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29tcG9uZW50LnBvb2wudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9hZGRyZXNzL2FkZGVzcy1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2F1ZGlvL2F1ZGlvLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9hdWRpby9hdWRpby1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NhbGVuZGFyL2NhbGVuZGFyLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY2hlY2tib3gvY2hlY2tib3gtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9lbWFpbC9lbWFpbC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9lbWFpbC9lbWFpbC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvZW1haWwvZW1haWwtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9mb250L2ZvbnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvZm9udC9mb250LnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9mb250L2ZvbnQtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbWFnZS9pbWFnZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbWFnZS9pbWFnZS5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvaW1hZ2UvaW1hZ2UtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vYXBwZW5kLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29uZGl0aW9uYWwucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9qb2luLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vbWFwLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vbWFzay5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL3ByZXBlbmQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9zYW5pdGl6ZUh0bWwucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi92YWx1ZW9mLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vd3JhcC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2ludG8ucGlwZS50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vaW50by5kaXJlY3RpdmUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29tbW9uLXBpcGVzLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2lucHV0L2lucHV0LXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvaW5wdXRncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbnB1dGdyb3VwL2lucHV0Z3JvdXAtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9qc29uL2pzb24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvanNvbi9qc29uLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGFzdHVwZGF0ZS9sYXN0dXBkYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2xhc3R1cGRhdGUvbGFzdHVwZGF0ZS1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2xpa2UvbGlrZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9saWtlL2xpa2UtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9saW5rL2xpbmsuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGluay9saW5rLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9saW5rL2xpbmstcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waG9uZS9waG9uZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waG9uZS9waG9uZS5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGhvbmUvcGhvbmUtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3JhdGluZy9yYXRpbmcucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3JhdGluZy9yYXRpbmctcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9ub3RpY2Uvbm90aWNlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL25vdGljZS9ub3RpY2UucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL25vdGljZS9ub3RpY2UtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3NlbGVjdC9zZWxlY3QtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zaGFyZS9zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zaGFyZS9zaGFyZS1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3NwYW4vc3Bhbi5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zcGFuL3NwYW4tcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy90YWJsZS90YWJsZS5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGFibGUvdGFibGUtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGV4dC90ZXh0LXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdmlkZW8vdmlkZW8uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdmlkZW8vdmlkZW8ucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3ZpZGVvL3ZpZGVvLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkcmVzcy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICpuZ0lmPVwiaXNMaW5rXCIgXHJcbiAgICAgICAgW2hyZWZdPVwidXJsXCIgXHJcbiAgICAgICAgW3RhcmdldF09XCJoYXNUYXJnZXQgPyAnX2JsYW5rJyA6IG51bGxcIlxyXG4gICAgICAgIGNsYXNzPVwiZ29vZ2xlLW1hcFwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknIFxyXG4gICAgICAgIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5WaWV3IGluIGdvb2dsZSBtYXA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgW3RleHRDb250ZW50XT1cImFkZHIxXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiIFt0ZXh0Q29udGVudF09XCJhZGRyMlwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuICpuZ0lmPVwiIWlzTGlua1wiIGNsYXNzPVwiZ29vZ2xlLW1hcFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIiBbdGV4dENvbnRlbnRdPVwiYWRkcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgW3RleHRDb250ZW50XT1cImFkZHIyXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGAuYWRkcmVzcyB7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXJpZ2h0OiA0cHg7fVxyXG4gICAgICAgIC5nb29nbGUtbWFwIHtmbG9hdDogbGVmdDttYXJnaW4tcmlnaHQ6IDRweDt9XHJcbiAgICAgICAgLmZhIHtmbG9hdDpsZWZ0O2NvbG9yOiAjZjAwO21hcmdpbjogMCA1cHg7fVxyXG4gICAgICAgIC5vZmYtc2NyZWVuIHtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogLTk5OWVtO31cclxuICAgICAgICA6aG9zdCBhOmhvdmVyIC5mYS1tYXAtbWFya2Vye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICA6aG9zdCBzcGFue2Zsb2F0LWxlZnQ7fVxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OiB0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBpc0xpbms6IGJvb2xlYW47XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgYWRkcjE6IHN0cmluZztcclxuICAgIGFkZHIyOiBzdHJpbmc7XHJcbiAgICBoYXNUYXJnZXQ6IGJvb2xlYW47XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5pc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5oYXNUYXJnZXQgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRyMSA9IHNvdXJjZS5zdHJlZXQgKyAnLCAnICsgc291cmNlLnN1aXRlO1xyXG4gICAgICAgIHRoaXMuYWRkcjIgPSBzb3VyY2UuY2l0eSArICcsICcgKyBzb3VyY2UuemlwY29kZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaW5rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHRoaXMuYWRkcjIgK1wiJmllPVVURi04XCI7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0geC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gYWRkcmVzcyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhZGRyZXNzJyB9KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWRkcmVzc1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXT09PSd0cnVlJyA6IHRydWUpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgaXNMaW5rPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGhhc1RhcmdldCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBmYWxzZTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSwgaXNMaW5rLCBoYXNUYXJnZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKGl0ZW0sIGlzTGluaywgaGFzVGFyZ2V0KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkcmVzc0Zyb21TdHJpbmcoc291cmNlOiBhbnksIGlzTGluazogYm9vbGVhbiwgaGFzVGFyZ2V0OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGlzTGluaykge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT1cIiArIFxyXG4gICAgICAgICAgICBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgc291cmNlLmNpdHkgKyBcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArXCImaWU9VVRGLThcIjtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJcXFxccytcIiwgXCIrXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXCdcIiArIHVybCArIFwiXFwnIFwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgKGhhc1RhcmdldCA/IFwidGFyZ2V0PSdfYmxhbmsnXCIgOiBcIlwiKSArIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3M9J2dvb2dsZS1tYXAnPjxzcGFuIGNsYXNzPSdmYSBmYS1tYXAtbWFya2VyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdvZmYtc2NyZWVuJz5WaWV3IGluIGdvb2dsZSBtYXA8L3NwYW4+PHNwYW4gY2xhc3M9J2FkZHJlc3MnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgc291cmNlLnN1aXRlICsgXCI8L3NwYW4+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2FkZHJlc3MnPiBcIiArIHNvdXJjZS5jaXR5ICtcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArIFwiPC9zcGFuPjwvYT5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2dvb2dsZS1tYXAnPjxzcGFuIGNsYXNzPSdmYSBmYS1tYXAtbWFya2VyJyBzdHlsZT0nbWFyZ2luOiAwIDVweCcgYXJpYS1oaWRkZW49J3RydWUnPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdhZGRyZXNzJz5cIiArIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2Uuc3VpdGUgKyBcIjwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdhZGRyZXNzJz4gXCIgKyBzb3VyY2UuY2l0eSArXCIsIFwiICsgc291cmNlLnppcGNvZGUgKyBcIjwvc3Bhbj48L3NwYW4+XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiXG5pbXBvcnQge1xuXHRJbmplY3RhYmxlLCBcblx0Q29tcG9uZW50UmVmLCBcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBcblx0Vmlld0NvbnRhaW5lclJlZixcblx0RW1iZWRkZWRWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi9waXBlLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb29sIHtcblx0cHJpdmF0ZSByZWdpc3RlcmVkUGlwZXM9IHt9O1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRDb21wb25lbnRzPSB7fTtcblx0cHJpdmF0ZSByZWdpc3RlcmVkU2VydmljZXM9IHt9O1xuXG5cdHJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uIChuYW1lOiBzdHJpbmcsIHBpcGU6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZFBpcGVzW25hbWVdID0gcGlwZTtcblx0fVxuXHRyZWdpc3RlcmVkRm9yUGlwZVRyYW5zZm9ybWF0aW9uTmFtZWQoa2V5OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkUGlwZXNba2V5XSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cdHJlZ2lzdGVyZWRQaXBlVHJhbnNmb3JtYXRpb24oa2V5OiBzdHJpbmcsIGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XG4gICAgICAgIGNvbnN0IHBpcGUgPSB0aGlzLnJlZ2lzdGVyZWRQaXBlc1trZXldO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHBpcGUgPyBwaXBlKGNvbnRlbnQsIGFyZ3MsIGNhbGxiYWNrLCBkYXRhKSA6IG51bGw7XG5cdH1cblx0cmVtb3ZlUGlwZVRyYW5zZm9ybWF0aW9uIChrZXk6IHN0cmluZykge1xuXHRcdGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRQaXBlc1trZXldO1xuXHR9XG5cblx0cmVnaXN0ZXJDb21wb25lbnQgKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXHR9XG5cdHJlZ2lzdGVyZWRGb3JDb21wb25lbnRXaXRoTmFtZWQobmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV0gIT09IHVuZGVmaW5lZDtcblx0fVxuXHRyZWdpc3RlcmVkQ29tcG9uZW50KFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRyZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHZpZXdSZWZyZW5jZTogVmlld0NvbnRhaW5lclJlZixcblx0XHRlbDogSFRNTEVsZW1lbnQpOiBQaXBlQ29tcG9uZW50IHtcblx0XHRjb25zdCBjb21wb25lbnQgPSAgdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0XHRsZXQgcmVzdWx0OiBQaXBlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuXHRcdFx0bGV0IGNvbXBvbmVudEZhY3RvcnkgPSByZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiA9IHZpZXdSZWZyZW5jZS5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0XHRjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWYgPCBhbnkgPiApLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdGVsLmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuXHRcdFx0cmVzdWx0ID0gKDxQaXBlQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICByZXN1bHQ7XG5cdH1cblx0cmVtb3ZlQ29tcG9uZW50IChuYW1lOiBzdHJpbmcpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0fVxuXG5cdHJlZ2lzdGVyU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXSA9IHNlcnZpY2U7XG5cdH1cblx0cmVnaXN0ZXJlZFNlcnZpY2VGb3JDb21wb25lbnQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV07XG5cdH1cblx0cmVnaXN0ZXJlZEZvclNlcnZpY2VOYW1lZChuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcblx0fVxuXHRyZW1vdmVTZXJ2aWNlRm9yQ29tcG9uZW50IChuYW1lOiBzdHJpbmcpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV07XG5cdH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBBZGRyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZHJlc3NQaXBlIH0gZnJvbSAnLi9hZGRyZXNzLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQWRkcmVzc0NvbXBvbmVudCwgQWRkcmVzc1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtBZGRyZXNzQ29tcG9uZW50LCBBZGRyZXNzUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkcmVzc0NvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc0ludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBZGRyZXNzSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEFkZHJlc3NQaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdhZGRyZXNzJywgQWRkcmVzc0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdhZGRyZXNzJywgQWRkcmVzc1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1ZGlvLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGF1ZGlvIFtzcmNdPVwic291cmNlXCIgXHJcbiAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIlxyXG4gICAgICAgIChwbGF5KT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoZW5kZWQpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChwYXVzZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKHNlZWtlZCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGVycm9yKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBjb250cm9scz1cInRydWVcIj5Zb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC48L2F1ZGlvPmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXVkaW9Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUGxheWluZyhhdWRpbzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuICEhKGF1ZGlvLmN1cnJlbnRUaW1lID4gMCAmJiAhYXVkaW8ucGF1c2VkICYmICFhdWRpby5lbmRlZCAmJiBhdWRpby5yZWFkeVN0YXRlID4gMik7XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiBldmVudC50eXBlLFxyXG4gICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZXZlbnQudGFyZ2V0LmF1dG9wbGF5LFxyXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGV2ZW50LnRhcmdldC5jb250cm9scyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBldmVudC50YXJnZXQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZTogZXZlbnQudGFyZ2V0LmN1cnJlbnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgZW5kZWQ6IGV2ZW50LnRhcmdldC5lbmRlZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBldmVudC50YXJnZXQuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBwYXVzZWQ6IGV2ZW50LnRhcmdldC5wYXVzZWQsXHJcbiAgICAgICAgICAgICAgICBtdXRlZDogZXZlbnQudGFyZ2V0Lm11dGVkLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE11dGVkOiBldmVudC50YXJnZXQuZGVmYXVsdE11dGVkLFxyXG4gICAgICAgICAgICAgICAgdm9sdW1lOiBldmVudC50YXJnZXQudm9sdW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBpbWFnZSBkaXNwbGF5LiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYXVkaW8nIH0pXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXVkaW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV09PT0ndHJ1ZScgOiB0cnVlKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpbmdUb0F1ZGlvKHNvdXJjZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGF1ZGlvIHNyYz1cXCdcIitzb3VyY2UrXCJcXCcgY29udHJvbHM9XFwndHJ1ZVxcJyAvPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb0F1ZGlvKHNvdXJjZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb0F1ZGlvKHNvdXJjZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9BdWRpbyhzb3VyY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvQXVkaW8oc291cmNlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBBdWRpb0NvbXBvbmVudCB9IGZyb20gJy4vYXVkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXVkaW9QaXBlIH0gZnJvbSAnLi9hdWRpby5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0F1ZGlvQ29tcG9uZW50LCBBdWRpb1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtBdWRpb0NvbXBvbmVudCwgQXVkaW9QaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtBdWRpb0NvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaW9JbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQXVkaW9JbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQXVkaW9QaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnYXVkaW8nLCBBdWRpb0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdhdWRpbycsIEF1ZGlvUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiLyogY2FsZW5kYXIgY29kZSBpcyBjb3BpZWQgZnJvbSBcImJlbiB0ZWRkZXJcIiBcclxuKiBodHRwOi8vd3d3LmJlbnRlZGRlci5jb20vY3JlYXRlLWNhbGVuZGFyLWdyaWQtY29tcG9uZW50LWFuZ3VsYXItNC9cclxuKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJEYXRlIHtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICB0b2RheT86IGJvb2xlYW47XHJcbiAgfVxyXG4gIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FsZW5kYXItY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImNhbGVuZGFyLWJveFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIiBbdGV4dENvbnRlbnRdPVwib3JpZ0RhdGUgfCBkYXRlOmZvcm1hdHRpbmdcIj48L3NwYW4+XHJcbiAgICAgIDxhIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicG9wcGVyXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwicG9wZGF0ZXBpY2tlcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+UGljayBhIGRhdGU8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiICpuZ0lmPVwic2hvd0NhbGVuZGFyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXItbmF2c1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9udGgtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwcmV2TW9udGgoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkJhY2sgYSBtb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwicDRcIj57eyBjdXJyZW50RGF0ZSB8IGRhdGU6J01NTU0nIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibmV4dE1vbnRoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+Rm9yd2FyZCBhIG1vbnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwieWVhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInByZXZZZWFyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5CYWNrIGEgeWVhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxzcGFuPnt7IGN1cnJlbnREYXRlIHwgZGF0ZTogJ3l5eXknIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibmV4dFllYXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5Gb3J3YXJkIGEgeWVhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vbnRoLWdyaWRcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImRheS1uYW1lc1wiPlxyXG5cdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IG5hbWUgb2YgZGF5TmFtZXNcIiBjbGFzcz1cImRheS1uYW1lIHA5XCI+e3sgbmFtZSB9fTwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIndlZWtzXCI+XHJcblx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgd2VlayBvZiB3ZWVrc1wiIGNsYXNzPVwid2Vla1wiPlxyXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndlZWstZGF0ZSBkaXNhYmxlZFwiICpuZ0lmPVwiIWlzU2VsZWN0ZWRNb250aChkYXkuZGF0ZSlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImRhdGUtdGV4dFwiPnt7IGRheS5kYXRlLmdldERhdGUoKSB9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrLWRhdGUgZW5hYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNTZWxlY3RlZE1vbnRoKGRheS5kYXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdFx0ICAgKGNsaWNrKT1cInNlbGVjdERhdGUoJGV2ZW50LCBkYXkpXCJcclxuXHRcdFx0XHRcdFx0ICAgW2NsYXNzLnRvZGF5XT1cImRheS50b2RheVwiXHJcblx0XHRcdFx0XHRcdCAgIFtjbGFzcy5zZWxlY3RlZF09XCJkYXkuc2VsZWN0ZWRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImRhdGUtdGV4dFwiPnt7IGRheS5kYXRlLmdldERhdGUoKSB9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIC5wb3BwZXIgLmZhLWNhbGVuZGFye2Rpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46IDAgNXB4fVxyXG4gICAgICAgIC5wb3BwZXI6aG92ZXIgLmZhLWNhbGVuZGFye2NvbG9yOiAjZmFiZGFifVxyXG4gICAgICAgIC5jYWxlbmRhci1ib3gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCBkYXRlIHtmbGV4OiAxO31cclxuICAgICAgICAuY2FsZW5kYXItYm94IC5wb3BwZXIge2N1cnNvcjogcG9pbnRlcjtmbGV4OiAwIDAgMTVweH1cclxuICAgICAgICAuY2FsZW5kYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyICoge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLmNhbGVuZGFyLW5hdnMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IGJ1dHRvbixcclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYgYnV0dG9uOmhvdmVyLFxyXG4gICAgICAgIC5jYWxlbmRhciAueWVhci1uYXYgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vla3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLmRheS1uYW1lcyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2RkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSxcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLmRheS1uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUgLmRhdGUtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgbGluZWFyLCBjb2xvciAxNTBtcyBsaW5lYXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmRpc2FibGVkIHtjb2xvcjogI2FhYTt9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6aG92ZXIgLmRhdGUtdGV4dCxcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6aG92ZXI6OmFmdGVyLFxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXM6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuc2VsZWN0ZWQgLmRhdGUtdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnNlbGVjdGVkOjphZnRlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS50b2RheTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaXRlbTogYW55O1xyXG4gIHNob3dDYWxlbmRhciA9IGZhbHNlO1xyXG4gIGZvcm1hdHRpbmc6c3RyaW5nO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuXHJcbiAgb3JpZ0RhdGU6IERhdGU7XHJcbiAgY3VycmVudERhdGU6IERhdGU7XHJcbiAgZGF5TmFtZXMgPSBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcclxuICB3ZWVrczogQ2FsZW5kYXJEYXRlW11bXSA9IFtdO1xyXG4gIHNlbGVjdGVkRGF5czogRGF0ZVtdID0gW107XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwb3BkYXRlcGlja2VyKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLnNob3dDYWxlbmRhciA9ICF0aGlzLnNob3dDYWxlbmRhcjtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy5vcmlnRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgc291cmNlLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChuZXcgRGF0ZShpdGVtKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2gobmV3IERhdGUodGhpcy5zb3VyY2UpKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbSA9IGRhdGE7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICAgIHRoaXMuZm9ybWF0dGluZz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkRGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXRlOiBEYXRlID0gdGhpcy5zZWxlY3RlZERheXNbaV07XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1NhbWVEYXkoZGF0ZSwgc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIHJldHVybiBpbmRleCA+IC0xO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZE1vbnRoKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuY3VycmVudERhdGUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0ZWREYXRlcyhkYXk6IENhbGVuZGFyRGF0ZSkge1xyXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMubXVsdGlzZWxlY3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWREYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSB0aGlzLnNlbGVjdGVkRGF5c1tpXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTYW1lRGF5KGRheS5kYXRlLCBkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkYXkuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZighZm91bmQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKGRheS5kYXRlKTtcclxuICAgICAgICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzID0gW2RheS5kYXRlXTtcclxuICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdERhdGUoZXZlbnQ6IGFueSwgZGF5OiBDYWxlbmRhckRhdGUpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLm9yaWdEYXRlID0gZGF5LmRhdGU7XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF5LmRhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkRGF0ZXMoIGRheSApO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWREYXlzLnNvcnQoIChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGEgPiBiID8gLTEgOiAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0ZWREYXlzLFxyXG4gICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgaXRlbTogdGhpcy5pdGVtXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2hvd0NhbGVuZGFyID0gZmFsc2U7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIC8vIGFjdGlvbnMgZnJvbSBjYWxlbmRhclxyXG4gIHByZXZNb250aChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCktMSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBuZXh0TW9udGgoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpKzEsIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgcHJldlllYXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCktMSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCksIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkrMSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCksIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB0aGUgY2FsZW5kYXIgZ3JpZFxyXG4gICAgZ2VuZXJhdGVDYWxlbmRhcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZmlsbERhdGVzKHRoaXMuY3VycmVudERhdGUpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtzOiBDYWxlbmRhckRhdGVbXVtdID0gW107XHJcbiAgICAgICAgd2hpbGUgKGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3ZWVrcy5wdXNoKGRhdGVzLnNwbGljZSgwLCA3KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2Vla3MgPSB3ZWVrcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTYW1lRGF5KGE6IERhdGUsIGI6IERhdGUpIHtcclxuICAgICAgICByZXR1cm4gYS5nZXRGdWxsWWVhcigpID09PSBiLmdldEZ1bGxZZWFyKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpICYmIFxyXG4gICAgICAgICAgICBhLmdldERhdGUoKSA9PT0gYi5nZXREYXRlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2FtZU1vbnRoKGE6IGFueSwgYjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIGEuZ2V0WWVhcigpID09PSBiLmdldFllYXIoKSAmJiBcclxuICAgICAgICAgICAgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbERhdGVzKGN1cnJlbnREYXRlOiBEYXRlKTogQ2FsZW5kYXJEYXRlW10ge1xyXG4gICAgICAgIGNvbnN0IGNtID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gICAgICAgIGNvbnN0IHRtID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBmaXJzdERheSA9IG5ldyBEYXRlKGNtLmdldEZ1bGxZZWFyKCksIGNtLmdldE1vbnRoKCksIDEpXHJcbiAgICAgICAgY29uc3QgZmlyc3RPZk1vbnRoID0gZmlyc3REYXkuZ2V0RGF5KCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3REYXlPZkdyaWQgPSBuZXcgRGF0ZShmaXJzdERheS5nZXRGdWxsWWVhcigpLCBmaXJzdERheS5nZXRNb250aCgpLCBmaXJzdERheS5nZXREYXRlKCkgLSBmaXJzdE9mTW9udGgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZmlyc3REYXlPZkdyaWQuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGk8IChzdGFydCArIDQyKTtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoZmlyc3REYXlPZkdyaWQuZ2V0RnVsbFllYXIoKSwgZmlyc3REYXlPZkdyaWQuZ2V0TW9udGgoKSwgaSk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0b2RheTogdGhpcy5pc1NhbWVEYXkodG0sIGQpLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuaXNTZWxlY3RlZChkKSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0NhbGVuZGFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ2FsZW5kYXJDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbGVuZGFyQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDYWxlbmRhckludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdjYWxlbmRhcicsIENhbGVuZGFyQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NoZWNrYm94LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJ1c2VGb250XCIgY2xhc3M9XCJjaGVjay1mb250XCI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwic291cmNlID09PSBpZGVhbFwiICNjaGVjayB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZhIGZhLWNoZWNrXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzb3VyY2UgIT09IGlkZWFsXCIgI3VuY2hlY2sgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYSBmYS1jbG9zZVwiIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCIgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8aW5wdXQgKm5nSWY9XCIhdXNlRm9udFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcclxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJzb3VyY2VcIiBcclxuICAgICAgICAgICAgW2NoZWNrZWRdPVwic291cmNlPT09aWRlYWwgPyB0cnVlIDogbnVsbFwiIFxyXG4gICAgICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGljaygkZXZlbnQpXCIgLz5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3QgLmNoZWNrLWZvbnQgLmZhe21hcmdpbjogMCA1cHh9XHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIC5jaGVjay1mb250OmhvdmVye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICAuY2hlY2stZm9udCB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgb3JpZ2luYWw6IHN0cmluZztcclxuICBpZGVhbDogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVzZUZvbnQ6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJjaGVja1wiKVxyXG4gIGNoZWNrO1xyXG5cclxuICBAVmlld0NoaWxkKFwidW5jaGVja1wiKVxyXG4gIHVuY2hlY2s7XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGNsaWNrKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMub3JpZ2luYWw7XHJcblx0XHR9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuaWRlYWw7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICB0eXBlOiBcImNoZWNrXCIsXHJcbiAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy51c2VGb250KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudW5jaGVjaykge1xyXG4gICAgICAgICAgdGhpcy51bmNoZWNrLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sNjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLmlkZWFsPSBhcmdzLmxlbmd0aCA/IFN0cmluZyhhcmdzWzBdKSA6IFwiXCI7XHJcbiAgICB0aGlzLnVzZUZvbnQ9IGFyZ3MubGVuZ3RoID4gMSA/IEJvb2xlYW4oYXJnc1sxXSkgOiBmYWxzZTtcclxuICAgIHRoaXMuc291cmNlPSBTdHJpbmcoc291cmNlKTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9yaWdpbmFsPSB0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCA/IFwiXCIgOiBzb3VyY2U7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrYm94Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ2hlY2tib3hDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0NoZWNrYm94Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDaGVja2JveEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdjaGVja2JveCcsIENoZWNrYm94Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZW1haWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICpuZ0lmPVwiaXNMaW5rXCIgW2hyZWZdPVwiJ21haWx0bzonICsgc291cmNlXCIgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFpc0xpbmtcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0OmhvdmVyIC5mYS1lbnZlbG9wZXtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgOmhvc3QgLmZhe21hcmdpbjogMCA1cHg7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaXNMaW5rOiBib29sZWFuO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFwibWFpbC10b1wiLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gZW1haWwgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZW1haWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBlbWFpbFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVtYWlsUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdPT09J3RydWUnIDogdHJ1ZSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgZW1haWxGcm9tU3RyaW5nKHNvdXJjZTogc3RyaW5nLCBpc0xpbms6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgeDogc3RyaW5nO1xyXG4gICAgICAgIGlmIChpc0xpbmspIHtcclxuICAgICAgICAgICAgeCA9IFwiPGEgaHJlZj1cXCdtYWlsdG86XCIrc291cmNlK1wiXFwnID48c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyBzb3VyY2UgKyBcIjwvc3Bhbj48L2E+XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeCA9IFwiPHNwYW4+PHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBzdHlsZT0nbWFyZ2luOiAwIDVweCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj48c3Bhbj5cIiArIHNvdXJjZSArIFwiPC9zcGFuPjwvc3Bhbj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBpc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbWFpbEZyb21TdHJpbmcoc291cmNlLCBpc0xpbmspO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmVtYWlsRnJvbVN0cmluZyhpdGVtLCBpc0xpbmspKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gJy4vZW1haWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1haWxQaXBlIH0gZnJvbSAnLi9lbWFpbC5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0VtYWlsQ29tcG9uZW50LCBFbWFpbFBpcGVdLFxyXG4gIGV4cG9ydHM6IFtFbWFpbENvbXBvbmVudCwgRW1haWxQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtFbWFpbENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pIFxyXG5cclxuZXhwb3J0IGNsYXNzIEVtYWlsSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEVtYWlsSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0VtYWlsUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnZW1haWwnLCBFbWFpbENvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdlbWFpbCcsIEVtYWlsUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm9udC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAnbGVmdCdcIiAgICBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiAhPT0gJ3JlcGxhY2UnXCIgW3RleHRDb250ZW50XT1cImNvbnRlbnRcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ3JpZ2h0J1wiICAgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdyZXBsYWNlJ1wiIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0IHNwYW4ge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9udENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgZm9udDogc3RyaW5nO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5mb250ID0gYXJnc1swXTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwibGVmdFwiO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0udG9Mb3dlckNhc2UoKSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gYWN0aW9uID09PSBcIipcIiA/IHNvdXJjZSA6IChcInJlcGxhY2VcIiA9PT0gYWN0aW9uLnRvTG93ZXJDYXNlKCkgPyBcIlwiIDogc291cmNlKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBlbWFpbCBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdmb250JyB9KVxyXG5leHBvcnQgY2xhc3MgRm9udFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBmb250OmZhIGZhLWNoZWNrOmxlZnQ6KlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvbnRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCIpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvbnRGcm9tU3RyaW5nKGZvbnQsIGxvY2F0aW9uLCBhY3Rpb24sIGNvbnRlbnQpIHtcclxuICAgICAgICByZXR1cm4gKGxvY2F0aW9uID09PSBcImxlZnRcIiA/IFxyXG4gICAgICAgICAgICAgICAgKGZvbnQgKyBjb250ZW50KSA6IFxyXG4gICAgICAgICAgICAgICAgKChsb2NhdGlvbiA9PT0gXCJyaWdodFwiKSA/IGNvbnRlbnQgKyBmb250IDogZm9udCkpO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgZm9udCA9IGFyZ3MubGVuZ3RoID8gXCI8c3BhbiBjbGFzcz1cXCdcIiArIGFyZ3NbMF0gKyBcIlxcJyBzdHlsZT0nbWFyZ2luOiAwIDVweCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdLnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhY3Rpb24gPT09IFwiKlwiID8gc291cmNlIDogKFwicmVwbGFjZVwiID09PSBhY3Rpb24udG9Mb3dlckNhc2UoKSA/IFwiXCIgOiBzb3VyY2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5mb250RnJvbVN0cmluZyhmb250LCBsb2NhdGlvbiwgYWN0aW9uLCBpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRm9udENvbXBvbmVudCB9IGZyb20gJy4vZm9udC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb250UGlwZSB9IGZyb20gJy4vZm9udC5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZvbnRDb21wb25lbnQsIEZvbnRQaXBlXSxcclxuICBleHBvcnRzOiBbRm9udENvbXBvbmVudCwgRm9udFBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0ZvbnRDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvbnRJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm9udEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtGb250UGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnZm9udCcsIEZvbnRDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignZm9udCcsIEZvbnRQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ltYWdlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxpbWcgW3NyY109XCJzb3VyY2VcIiBcclxuICAgICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBcclxuICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiIFxyXG4gICAgICAgIFt0aXRsZV09XCJhbHRcIiAvPjxpbWcgKm5nSWY9XCJwb3BMb2NhdGlvblwiIFxyXG4gICAgICAgIFtzcmNdPVwic291cmNlXCIgY2xhc3M9J3BvcHBlcidcclxuICAgICAgICBbc3R5bGUud2lkdGhdPVwiKG9yaWdXaWR0aCAqIG1hZ25pZmljYXRpb24pICsgJ3B4J1wiIFxyXG4gICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiKG9yaWdIZWlnaHQgKiBtYWduaWZpY2F0aW9uKSArICdweCdcIiAvPmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47bWFyZ2luOjA7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bGVmdDttaW4td2lkdGg6IDIzcHg7bWluLWhlaWdodDogMjNweH1cclxuICAgIDpob3N0IC5wb3BwZXJ7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6IG5vbmU7ZGlzcGxheTogbm9uZTt6LWluZGV4OjI7Ym9yZGVyOjJweCBzb2xpZDtib3gtc2hhZG93OiAzcHggM3B4IDNweCAjOTk5O2JvcmRlci1yYWRpdXM6IDRweH1cclxuICAgIDpob3N0IGltZ3twb3NpdGlvbjpyZWxhdGl2ZTtwb2ludGVyLWV2ZW50czogbm9uZTt9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgb3JpZ1dpZHRoOiBudW1iZXI7XHJcbiAgICBvcmlnSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBtYWduaWZpY2F0aW9uID0gMDtcclxuICAgIHBvcExvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBhbHQ6IHN0cmluZztcclxuICAgIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsWyckZXZlbnQnXSlcclxuXHRlbnRlcihldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHBlciA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGltYWdlLnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcmlnV2lkdGggJiYgIXRoaXMub3JpZ0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnV2lkdGggPSBpbWFnZS5wYXJlbnROb2RlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnSGVpZ2h0ID0gaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5wYXJlbnROb2RlLnN0eWxlLndpZHRoID0gdGhpcy5vcmlnV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5wYXJlbnROb2RlLnN0eWxlLmhlaWdodCA9IHRoaXMub3JpZ0hlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3BwZXIucGFyZW50Tm9kZS5zdHlsZS5vdmVyZmxvdyA9ICdpbmhlcml0JztcclxuICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmRpc3BsYXkgPSAndGFibGUnO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucG9wTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnIDogXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLnJpZ2h0ID0gKHJlY3Qud2lkdGggKyAyMCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS50b3AgPSAoKCgxIC0gdGhpcy5tYWduaWZpY2F0aW9uKSAqIHRoaXMub3JpZ0hlaWdodCkgLyAyKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6IFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlci5zdHlsZS5sZWZ0ID0gKHJlY3Qud2lkdGggKyAyMCkgICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUudG9wID0gKCgoMSAtIHRoaXMubWFnbmlmaWNhdGlvbikgKiB0aGlzLm9yaWdIZWlnaHQpIC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJyAgOiBcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUuYm90dG9tID0gKHJlY3QuaGVpZ2h0ICsgMjApICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXIuc3R5bGUubGVmdCA9ICgoKDEgLSB0aGlzLm1hZ25pZmljYXRpb24pICogdGhpcy5vcmlnV2lkdGgpIC8gMikgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzogXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLnRvcCA9IChyZWN0LmhlaWdodCArIDIwKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmxlZnQgPSAoKCgxIC0gdGhpcy5tYWduaWZpY2F0aW9uKSAqIHRoaXMub3JpZ1dpZHRoKSAvIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYWduaWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3JpZ1dpZHRoICYmICF0aGlzLm9yaWdIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ1dpZHRoID0gaW1hZ2UucGFyZW50Tm9kZS5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ0hlaWdodCA9IGltYWdlLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5zdHlsZS53aWR0aCA9IHRoaXMub3JpZ1dpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5zdHlsZS5oZWlnaHQgPSB0aGlzLm9yaWdIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLm9yaWdXaWR0aCAqIHRoaXMuIG1hZ25pZmljYXRpb24gKiAyKSArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMub3JpZ0hlaWdodCAqIHRoaXMuIG1hZ25pZmljYXRpb24gKiAyKSArICdweCc7XHJcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZShldmVudCk7XHJcblx0fVxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdXQnLFsnJGV2ZW50J10pXHJcblx0aG92ZXJPdXQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcHBlciA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgcG9wcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hZ25pZmljYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lNRycgPyBldmVudC50YXJnZXQgOiBldmVudC50YXJnZXQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMub3JpZ1dpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5vcmlnSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoZXZlbnQpO1xyXG5cdH1cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsWyckZXZlbnQnXSlcclxuXHRob3ZlclZpZXdQb3J0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWduaWZpY2F0aW9uICYmICF0aGlzLnBvcExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdJTUcnID8gZXZlbnQudGFyZ2V0IDogZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRvcCA9IC0oZXZlbnQubGF5ZXJZICogdGhpcy4gbWFnbmlmaWNhdGlvbikgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5sZWZ0ID0gLShldmVudC5sYXllclggKiB0aGlzLiBtYWduaWZpY2F0aW9uKSArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuYWx0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMubWFnbmlmaWNhdGlvbiA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMykgPyBwYXJzZUludChhcmdzWzNdLDEwKSA6IDA7XHJcbiAgICAgICAgdGhpcy5wb3BMb2NhdGlvbiA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gNCkgPyBhcmdzWzRdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLm1hZ25pZmljYXRpb24gPSB0aGlzLm1hZ25pZmljYXRpb24gPCAwID8gMCA6IHRoaXMubWFnbmlmaWNhdGlvbjtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsdCB8fCAhdGhpcy5hbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgICAgICAgICAgaXRlbToge3g6IGV2ZW50LmxheWVyWCwgeTogZXZlbnQubGF5ZXJZfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGltYWdlIGRpc3BsYXkuIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSB0cmFuc2Zvcm1lZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpbWFnZScgfSlcclxuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gaW1hZ2U6MjAwcHg6YXV0bzphbHR0ZXh0IE9SIGltYWdlOjIwMHB4OmFsdGVybmF0ZS10ZXh0IE9SIGltYWdlOjIwMHB4IE9SIGltYWdlXHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbWFnZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpbmdUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgaWYoIWFsdCB8fCAhYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIGFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxpbWcgc3JjPVxcJ1wiK3NvdXJjZStcIlxcJyBzdHlsZT1cXCdcIisgd2lkdGggKyBoZWlnaHQgKyBcIlxcJyB0aXRsZT1cXCdcIithbHQrXCJcXCcgLz5cIjtcclxuICAgIH1cclxuICAgIGFycmF5VG9JbWFnZShzb3VyY2VzLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGg6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gXCJ3aWR0aDogXCIgKyBhcmdzWzBdICsgXCI7XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gXCJoZWlnaHQ6IFwiICsgYXJnc1sxXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhbHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIFwiXCIpO1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi9pbWFnZS5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ltYWdlQ29tcG9uZW50LCBJbWFnZVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtJbWFnZUNvbXBvbmVudCwgSW1hZ2VQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtJbWFnZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW1hZ2VJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbSW1hZ2VQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdpbWFnZScsIEltYWdlQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2ltYWdlJywgSW1hZ2VQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgPGlucHV0ICNuYW1lRWRpdG9yXHJcbiAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgW2lkXT1cImlkXCJcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICBbdmFsdWVdPVwic291cmNlXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmIGZvcm1hdHRpbmcnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleWRvd24oJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPVwiY2xpY2tOYW1lKCRldmVudClcIlxyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic291cmNlID8gKHNvdXJjZSB8IGludG86Zm9ybWF0dGluZykgOiAnJm5ic3A7J1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmICFmb3JtYXR0aW5nJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoa2V5dXApPSdrZXlkb3duKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmFtZSgkZXZlbnQpXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZSA/IHNvdXJjZSA6ICcmbmJzcDsnXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5sb2NrZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAgICAgXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgY3Vyc29yOiBiZWFtO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgOmhvc3QgLmxvY2tlZDpob3Zlcntib3JkZXI6IDFweCBzb2xpZCAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBmb3JtYXR0aW5nOnN0cmluZztcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIG9sZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lRWRpdG9yXCIpXHJcbiAgbmFtZUVkaXRvcjtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVIb2xkZXJcIilcclxuICBuYW1lSG9sZGVyXHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmICgoKGNvZGUgPj0gNDgpICYmIChjb2RlIDw9IDkwKSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gOTYpICYmIChjb2RlIDw9IDExMSkpIHx8XHJcbiAgICAgICAgKChjb2RlID09IDMyKSB8fCAoY29kZSA9PSA4KSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gMTg2KSAmJiAoY29kZSA8PSAyMjIpKSkge1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpIHx8IChjb2RlID09PSAyNykgKSB7XHJcbiAgICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgdHlwZTogXCJjaGFuZ2VcIixcclxuICAgICAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgIGlmICh0aGlzLm5hbWVIb2xkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUhvbGRlci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sNjYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJsdXIoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5ZG93bihldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKChjb2RlID09PSAxMykgfHwgKGNvZGUgPT09IDkpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChldmVudC50YXJnZXQsIFwiY2xpY2tcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBpZiAodGhpcy5uYW1lRWRpdG9yKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lRWRpdG9yLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDY2KTtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGNsaWNrTmFtZShldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmVkaXROYW1lID0gdHJ1ZTtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBTdHJpbmcodGhpcy5zb3VyY2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgIH0sNjYpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMucGxhY2Vob2xkZXI9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBhcHBlbmQgY2hhcmFjdGVyKHMpIHRvIGEgY29udGVudC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnYXBwZW5kJyB9KVxyXG5leHBvcnQgY2xhc3MgQXBwZW5kUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gYXBwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFwcGVuZFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IGtleSA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlICsga2V5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtICsga2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gcmV0dXJuIGEgdHJhbnNmb3JtYXRpb24gYXJndW1lbnQgd2hpY2ggc2hvdWxkIGJlIHBpcGVkIGludG8gYW5vdGhlciB0cmFuc2Zvcm0gb2JqZWN0XHJcbiogdG8gdHJhbnNmb3JtIHRoZSBvYmplY3QgdmFsdWUgcGFzc2VkIHRvIHRoaXMgcGlwZS5cclxuKiB0aGUgYXJndW1lbnRzIGFyZSBhcyBmb2xsb3dzOiAxKSBjb25kaXRpb24sIDIpIHZhbHVlIHRvIGV2YWx1YXRlIHRoZSBjb25kaXRpb24sIDMpIGFjdGlvbiwgNCkgZWxzZSBhY3Rpb24uXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2lmJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gc3BsaXQoaXRlbTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKGZ1bmN0aW9uKHgpe3JldHVybiB4Lmxlbmd0aH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGlmOj06dHJ1ZTpmYSBmYS1jaGVjazpmYSBmYS1iZWxsXHJcbiAgICAgICAgICAgIGNvbnN0IGFjb25kaXRpb24gPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogXCJcIjtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBDb25kaXRpb25hbFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICdcIicgPyByZXN1bHQuc3Vic3RyaW5nKDEscmVzdWx0Lmxlbmd0aC0xKSA6IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNwbGl0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhjb250ZW50LCByZXN1bHQsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIGNvbmRpdGlvbkZyb21TdHJpbmcoY29udGVudCwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHN3aXRjaChhY29uZGl0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSBcIj1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA9PT0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIiE9XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgIT09IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI+XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPiB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPj1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA+PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPFwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50IDwgdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjw9XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPD0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIn5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCAhPT0gdW5kZWZpbmVkICYmIGNvbnRlbnQgIT09IG51bGwgJiYgY29udGVudCAhPT0gXCJudWxsXCIgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIiF+XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IFwibnVsbFwiID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ+PVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ICYmIHZhbHVlICYmIFN0cmluZyhjb250ZW50KS50b0xvd2VyQ2FzZSgpID09PSBTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCkgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImluXCIgOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA/IGNvbnRlbnQuaW5kZXhPZihhY3Rpb24pIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgYWNvbmRpdGlvbiA9ICBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhbHRBY3Rpb24gPSAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uRnJvbVN0cmluZyhzb3VyY2UsIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpdGVtXSA9IHRoaXMuY29uZGl0aW9uRnJvbVN0cmluZyhpdGVtLCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBqb2luIGFycmF5cyBvciBqc29uIGF0dHJpYnV0ZSB2YWx1ZXMuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2pvaW4nIH0pXHJcbmV4cG9ydCBjbGFzcyBKb2luUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vam9pbiBvciBqb2luOmNoYXJhY3RlclxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEpvaW5QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2Uuam9pbihhcmdzWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc291cmNlW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKGFyZ3NbMF0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHRha2UgYSBzdHJpbmcgYXMgYSBrZXkgYW5kIHJldHVybnMgdmFsdWUgb2Yga2V5IGZyb20gdGhlIGdpdmVuIG1hcCBvYmplY3QuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ21hcCcgfSlcclxuZXhwb3J0IGNsYXNzIE1hcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBtYXA6a2V5MTt2YWx1ZTEva2V5Mjt2YWx1ZTIva2V5Mzt2YWx1ZTNcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXBQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlc0ZvcihsaXN0LCBtYXApIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsaXN0Lm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXBba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWFwW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdlTWFwcGluZyhtYXBwaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbWFwID0gbWFwcGluZztcclxuICAgICAgICBpZiggbWFwcGluZy50cmltICkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPXt9O1xyXG4gICAgICAgICAgICBtYXBwaW5nLnNwbGl0KCcvJykubWFwKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGtleS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgbWFwW3hbMF1dID0geFsxXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1hcHBpbmcgPSBtYXA7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXBwaW5nO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2VNYXBwaW5nKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtzb3VyY2VdIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzRm9yKHNvdXJjZSwgbWFwKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gbWFzayBzZW5zaXRpdmUgaW5mb3JtYXRpb24uIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSBtYXNrZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbWFzaycgfSlcclxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gbWFzazo0OiogIE9SIG1hc2s6NFxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIHBhcnNlSW50KGFyZ3NbMV0sIDEwKSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgbmV3IE1hc2tQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBuZXcgTWFza1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hc2tTdHJpbmcoaXRlbSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpIHtcclxuICAgICAgICBjb25zdCBtYXNrZWRTZWN0aW9uID0gaXRlbSAgPyBpdGVtLnNsaWNlKDAsIC12aXNpYmxlRGlnaXRzKSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZVNlY3Rpb24gPSBpdGVtID8gaXRlbS5zbGljZSgtdmlzaWJsZURpZ2l0cykgOiBcIlwiO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbSA/IG1hc2tlZFNlY3Rpb24ucmVwbGFjZSgvLi9nLCBtYXNrV2l0aCkgKyB2aXNpYmxlU2VjdGlvbiA6IFwiXCI7XHJcbiAgICB9XHJcbiAgICBtYXNrQXJyYXkoaXRlbXMsIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMubWFza1N0cmluZyhpdGVtLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlzaWJsZURpZ2l0cyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiA0O1xyXG4gICAgICAgIGNvbnN0IG1hc2tXaXRoID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6ICcqJztcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tTdHJpbmcoc291cmNlLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hc2tBcnJheShzb3VyY2UsIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gcHJlcGVuZCBjaGFyYWN0ZXIocykgdG8gYSBjb250ZW50LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdwcmVwZW5kJyB9KVxyXG5leHBvcnQgY2xhc3MgUHJlcGVuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBwcmVwZW5kOnNvbWV0aGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByZXBlbmRQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXkgKyBzb3VyY2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSArIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogVGFrZXMgY2FyZSBvZiBwcm9ibGVtIHdpdGggc2VjdXJpdHkgcHJlY2F1c2lvbnMgdGhhdCBzdHJpcCBvdXQgY2VydGFpbiBjaGFyYWN0ZXJzIFxyXG4qIGZyb20gZW5kIHJlc3VsdCBvZiB5b3VyIHJlcXVlc3RzLlxyXG4qIGNvZGUgdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTY4MTE2My9hbmd1bGFyLTItc2FuaXRpemluZy1odG1sLXN0cmlwcGVkLXNvbWUtY29udGVudC13aXRoLWRpdi1pZC10aGlzLWlzLWJ1Zy1vci1mZVxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdzYW5pdGl6ZUh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW5pdGl6ZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjpEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2OnN0cmluZyk6U2FmZUh0bWwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2KTtcclxuICB9XHJcbn0iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgbWFwIG9iamVjdC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndmFsdWVvZicgfSlcclxuZXhwb3J0IGNsYXNzIFZhbHVlT2ZQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gdmFsdWVvZjprZXlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWx1ZU9mUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZU9mU2luZ2xlKHNvdXJjZTogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICAgIHZhbHVlT2ZNdWx0aXBsZShzb3VyY2VzOiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgc291cmNlcy5tYXAoKHNvdXJjZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsdWVPZlNpbmdsZShzb3VyY2UsIGtleSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0ob2JqZWN0OiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBvYmplY3QgPT09IFwic3RyaW5nXCIpIHx8ICEob2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2ZTaW5nbGUob2JqZWN0LCBhcmdzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZk11bHRpcGxlKG9iamVjdCwgYXJnc1swXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHdyYXAgYSBjb250ZW50IGludG8gY2hhcmFjdGVyKHMpLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd3cmFwJyB9KVxyXG5leHBvcnQgY2xhc3MgV3JhcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyB3cmFwOnNvbWV0aGluZzpzb21ldGhpbmcgIE9SIHdyYXA6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgV3JhcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBhcmdzWzFdKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgXHJcbiAgICAgICAgY29uc3QgcHJlID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgcG9zdD0gcHJlLmxlbmd0aCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIChhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIikgOiBwcmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmUgKyBzb3VyY2UgKyBwb3N0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwcmUgKyBpdGVtICsgcG9zdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRGF0ZVBpcGUsXHJcbiAgQ3VycmVuY3lQaXBlLFxyXG4gIERlY2ltYWxQaXBlLFxyXG4gIEpzb25QaXBlLFxyXG4gIFNsaWNlUGlwZSxcclxuICBVcHBlckNhc2VQaXBlLFxyXG4gIExvd2VyQ2FzZVBpcGVcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQFBpcGUoe25hbWU6J2ludG8nfSlcclxuZXhwb3J0IGNsYXNzIEluVG9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb29sOiBDb21wb25lbnRQb29sKSB7fVxyXG5cclxuICB0cmFuc2Zvcm0oY29udGVudDogYW55LCBsaXN0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICBcclxuICAgIGxpc3Quc3BsaXQoXCJ8XCIpLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLl90cmFuc2Zvcm0ocmVzdWx0LCB0aGlzLnNwbGl0KGl0ZW0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gaXRlbS50cmltKCkubWF0Y2goLyg/PVxcUylbXlwiXFw6XSooPzpcIlteXFxcXFwiXSooPzpcXFxcW1xcOlxcU11bXlxcXFxcIl0qKSpcIlteXCJcXDpdKikqL2cpLmZpbHRlcigoeCk9PngubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybShjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRQaXBlVHJhbnNmb3JtYXRpb24oYXJnc1swXSwgY29udGVudCwgYXJncywgdGhpcy5fdHJhbnNmb3JtLmJpbmQodGhpcykpOyBcclxuICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQgOiBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT25Jbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4vcGlwZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2ludG9dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW50b0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuICAgIEBJbnB1dChcInJhd0NvbnRlbnRcIilcclxuICAgIHJhd0NvbnRlbnQ6IHN0cmluZztcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b0lkXCIpXHJcbiAgICBpbnRvSWQ6IHN0cmluZztcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b05hbWVcIilcclxuICAgIGludG9OYW1lOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9EYXRhXCIpXHJcbiAgICBpbnRvRGF0YTogYW55O1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvXCIpXHJcbiAgICBpbnRvOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KFwib25Db21wb25lbnRDaGFuZ2VcIilcclxuICAgIG9uQ29tcG9uZW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHVibGljIGVsOkVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBwb29sOiBDb21wb25lbnRQb29sLFxyXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgKSB7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3BsaXQoaXRlbTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpLm1hdGNoKC8oPz1cXFMpW15cIlxcOl0qKD86XCJbXlxcXFxcIl0qKD86XFxcXFtcXDpcXFNdW15cXFxcXCJdKikqXCJbXlwiXFw6XSopKi9nKS5maWx0ZXIoKHgpPT54Lmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3RyYW5zZm9ybShjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gY29udGVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9vbC5yZWdpc3RlcmVkRm9yQ29tcG9uZW50V2l0aE5hbWVkKGFyZ3NbMF0pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBhcmdzLnNwbGljZSgxLGFyZ3MubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoYXJnc1swXSwgY29udGVudCwgdGhpcy5pbnRvSWQsIHRoaXMuaW50b05hbWUsIGRhdGEsIC4uLm5ld0FyZ3MpOyBcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9vbC5yZWdpc3RlcmVkRm9yUGlwZVRyYW5zZm9ybWF0aW9uTmFtZWQoYXJnc1swXSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRQaXBlVHJhbnNmb3JtYXRpb24oYXJnc1swXSwgY29udGVudCwgYXJncywgdGhpcy5fdHJhbnNmb3JtLmJpbmQodGhpcyksIGRhdGEpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB1bmtub3duIGZvcm1hdHRlclxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1Db21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1swXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRvSWQsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50b05hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDUgPyBhcmdzWzVdIDogXCJcIik7XHJcbiAgICAgICAgICAgIH1jYXRjaCh4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm1Db21wb25lbnQodHlwZSwgY29udGVudDogYW55LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgY29udGVudCA9PT0gXCJib29sZWFuXCIgfHwgT2JqZWN0LmtleXMoY29udGVudCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdcIiArIHR5cGUrIFwiJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRyYW5zZm9ybShjb250ZW50LnNvdXJjZSA/IGNvbnRlbnQuc291cmNlIDogY29udGVudCwgZGF0YSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZSAmJiB0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb250ZW50ID09PSBcImJvb2xlYW5cIiB8fCBcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb250ZW50KS5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ggPSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN4ID09PSBudWxsIHx8IHN4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ1wiICsgdHlwZSsgXCInIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5pZCA9IGlkICsgJy0nICsgKGNvdW50ZXIrKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC5zZXJ2aWNlID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRTZXJ2aWNlRm9yQ29tcG9uZW50KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeC50cmFuc2Zvcm0oc291cmNlLnNvdXJjZSA/IHNvdXJjZS5zb3VyY2UgOiBzb3VyY2UsIGRhdGEsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3gub25JbnRvQ29tcG9uZW50Q2hhbmdlICYmIHRoaXMub25Db21wb25lbnRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4Lm9uSW50b0NvbXBvbmVudENoYW5nZS5zdWJzY3JpYmUodGhpcy5vbkNvbXBvbmVudENoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJlZENvbXBvbmVudEZvcihuYW1lKTogUGlwZUNvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbC5yZWdpc3RlcmVkQ29tcG9uZW50KG5hbWUsIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB0aGlzLnZpZXdSZWYsIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmludG8gfHwgdGhpcy5yYXdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9ICB0aGlzLnJhd0NvbnRlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludG8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50by5zcGxpdChcInxcIikubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShyZXN1bHQsIHRoaXMuc3BsaXQoaXRlbSksIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXA6IFBpcGVDb21wb25lbnQgPSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXApICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcC50cmFuc2Zvcm0ocmVzdWx0LCBbXSwgdGhpcy5pbnRvRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXN0b20gY29tcG9uZW50ICdzcGFuJyBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXA6IFBpcGVDb21wb25lbnQgPSB0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRGb3IoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcCkgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAudHJhbnNmb3JtKHNvdXJjZSwgW10sIHRoaXMuaW50b0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ3NwYW4nIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIEN1cnJlbmN5UGlwZSxcclxuICAgIERlY2ltYWxQaXBlLFxyXG4gICAgSnNvblBpcGUsXHJcbiAgICBTbGljZVBpcGUsXHJcbiAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgTG93ZXJDYXNlUGlwZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge0FwcGVuZFBpcGV9IGZyb20gJy4vYXBwZW5kLnBpcGUnO1xyXG5pbXBvcnQge0NvbmRpdGlvbmFsUGlwZX0gZnJvbSAnLi9jb25kaXRpb25hbC5waXBlJztcclxuaW1wb3J0IHtKb2luUGlwZX0gZnJvbSAnLi9qb2luLnBpcGUnO1xyXG5pbXBvcnQge01hcFBpcGV9IGZyb20gJy4vbWFwLnBpcGUnO1xyXG5pbXBvcnQge01hc2tQaXBlfSBmcm9tICcuL21hc2sucGlwZSc7XHJcbmltcG9ydCB7UHJlcGVuZFBpcGV9IGZyb20gJy4vcHJlcGVuZC5waXBlJztcclxuaW1wb3J0IHtTYW5pdGl6ZUh0bWxQaXBlfSBmcm9tICcuL3Nhbml0aXplSHRtbC5waXBlJztcclxuaW1wb3J0IHtWYWx1ZU9mUGlwZX0gZnJvbSAnLi92YWx1ZW9mLnBpcGUnO1xyXG5pbXBvcnQge1dyYXBQaXBlfSBmcm9tICcuL3dyYXAucGlwZSc7XHJcbmltcG9ydCB7IEluVG9QaXBlIH0gZnJvbSAnLi9pbnRvLnBpcGUnO1xyXG5pbXBvcnQgeyBJbnRvRGlyZWN0aXZlIH0gZnJvbSAnLi9pbnRvLmRpcmVjdGl2ZSdcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwZW5kUGlwZSxcclxuICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgIEpvaW5QaXBlLFxyXG4gICAgTWFwUGlwZSxcclxuICAgIE1hc2tQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgVmFsdWVPZlBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIEluVG9QaXBlLFxyXG4gICAgSW50b0RpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQXBwZW5kUGlwZSxcclxuICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgIEpvaW5QaXBlLFxyXG4gICAgTWFwUGlwZSxcclxuICAgIE1hc2tQaXBlLFxyXG4gICAgUHJlcGVuZFBpcGUsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgVmFsdWVPZlBpcGUsXHJcbiAgICBXcmFwUGlwZSxcclxuICAgIEluVG9QaXBlLFxyXG4gICAgSW50b0RpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vblBpcGVzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb21tb25QaXBlc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRGF0ZVBpcGUsXHJcbiAgICAgICAgQ3VycmVuY3lQaXBlLFxyXG4gICAgICAgIERlY2ltYWxQaXBlLFxyXG4gICAgICAgIEpzb25QaXBlLFxyXG4gICAgICAgIFNsaWNlUGlwZSxcclxuICAgICAgICBVcHBlckNhc2VQaXBlLFxyXG4gICAgICAgIExvd2VyQ2FzZVBpcGUsXHJcbiAgICBcclxuICAgICAgICBBcHBlbmRQaXBlLFxyXG4gICAgICAgIENvbmRpdGlvbmFsUGlwZSxcclxuICAgICAgICBKb2luUGlwZSxcclxuICAgICAgICBNYXBQaXBlLFxyXG4gICAgICAgIE1hc2tQaXBlLFxyXG4gICAgICAgIFByZXBlbmRQaXBlLFxyXG4gICAgICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICAgICAgVmFsdWVPZlBpcGUsXHJcbiAgICAgICAgV3JhcFBpcGUsXHJcbiAgICAgICAgQ29tcG9uZW50UG9vbCxcclxuICAgICAgICBJblRvUGlwZVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2FwcGVuZCcsIEFwcGVuZFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdpZicsIENvbmRpdGlvbmFsUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2pvaW4nLCBKb2luUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ21hcCcsIE1hcFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdtYXNrJywgTWFza1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdwcmVwZW5kJywgUHJlcGVuZFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd2YWx1ZW9mJywgVmFsdWVPZlBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd3cmFwJywgV3JhcFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignc2xpY2UnLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBzbGljZSA1OjEyIE9SIHNsaWNlIDVcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xyXG4gICAgICAgIGxldCBlbmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICBlbmQ9IHBhcnNlSW50KGFyZ3NbMl0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2xpY2VyID1uZXcgU2xpY2VQaXBlKCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGVuZCA/IHNsaWNlci50cmFuc2Zvcm0oY29udGVudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNvbnRlbnQsIHN0YXJ0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5kID8gc2xpY2VyLnRyYW5zZm9ybShjbnQsIHN0YXJ0LCBlbmQpIDogc2xpY2VyLnRyYW5zZm9ybShjbnQsIHN0YXJ0KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ251bWJlcicsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIG51bWJlcjplbl9VUzoyICAgb3IgbnVtYmVyOmVuX1VTIG9yIG51bWJlclxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBsZXQgbnVtTG9jYWwgPSBcImVuX1VTXCI7XHJcbiAgICAgICAgbGV0IG51bURlY2ltYWw9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIG51bUxvY2FsID0gYXJnc1sxXTtcclxuICAgICAgICAgICAgbnVtRGVjaW1hbD0gYXJnc1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbGVyID1uZXcgRGVjaW1hbFBpcGUobnVtTG9jYWwpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBudW1EZWNpbWFsID8gZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG51bURlY2ltYWwgPyBkZWNpbWFsZXIudHJhbnNmb3JtKGNudCwgbnVtRGVjaW1hbCkgOiBkZWNpbWFsZXIudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdjdXJyZW5jeScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGN1cnJlbmN5OmVuX1VTIG9yIGN1cnJlbmN5XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGNvbnN0IGNwID0gbmV3IEN1cnJlbmN5UGlwZShhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJlbl9VU1wiKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gY3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2xvd2VyY2FzZScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGxvd2VyY2FzZVxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBjb25zdCBsY3AgPSAgbmV3IExvd2VyQ2FzZVBpcGUoKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbGNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigndXBwZXJjYXNlJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gdXBwZXJjYXNlXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGNvbnN0IHVjcCA9ICBuZXcgVXBwZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB1Y3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh1Y3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdqc29uJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8ganNvblxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBjb25zdCBqY3AgPSAgbmV3IEpzb25QaXBlKCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGpjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGpjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2RhdGUnLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBkYXRlOmVuX1VTOk1NZGR5eSBPUiBkYXRlOlxcXCJNTS9kZC95eXl5IGhoOnNzXFxcIlxyXG4gICAgICAgIC8vIGNvbnN0IGRhdGUgPSAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpID8gbmV3IERhdGUoY29udGVudCkgOiBjb250ZW50O1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBsZXQgZGF0ZUxvY2FsID0gXCJlbl9VU1wiO1xyXG4gICAgICAgIGxldCBkYXRlRm9ybWF0PSBhcmdzWzFdO1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgZGF0ZUxvY2FsID0gYXJnc1sxXTtcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdD0gYXJnc1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZXIgPW5ldyBEYXRlUGlwZShkYXRlTG9jYWwpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBkYXRlci50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRhdGVyLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuaW1wb3J0IHsgQ29tbW9uUGlwZXNNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLXBpcGVzLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvbW1vblBpcGVzTW9kdWxlLmZvclJvb3QoKV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtJbnB1dENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0SW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IElucHV0SW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnaW5wdXQnLCBJbnB1dENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQsIFBpcGVTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1ncm91cC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtaXRlbVwiICpuZ0Zvcj1cImxldCB4IG9mIG9wdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIFt0eXBlXT1cInR5cGVcIiBcclxuICAgICAgICAgICAgW2lkXT1cIm5hbWUgKyBpXCIgXHJcbiAgICAgICAgICAgIFtuYW1lXT1cIm5hbWUgKyAodHlwZSA9PT0gJ3JhZGlvJyA/ICcnIDogaSlcIiBcclxuICAgICAgICAgICAgW3ZhbHVlXT1cIngudmFsdWUgPyB4LnZhbHVlIDogeFwiIFxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJpc1NlbGVjdGVkKHgpXCJcclxuICAgICAgICAgICAgKGZvY3VzKT1cImZvY3VzZWQoJGV2ZW50KVwiLz5cclxuICAgICAgICA8bGFiZWwgW2Zvcl09XCJuYW1lICsgaVwiIFt0ZXh0Q29udGVudF09XCJ4LmxhYmVsID8geC5sYWJlbCA6IHhcIj48L2xhYmVsPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBhbnk7XHJcbiAgb3B0aW9uczogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzZXJ2aWNlOiBQaXBlU2VydmljZUNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gIGZvY3VzZWQoZXZlbnQ6YW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaSA9IHRoaXMuc291cmNlLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKGkgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc291cmNlLnNwbGljZShpLDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaXNTZWxlY3RlZChpdGVtOiBhbnkpIHtcclxuICAgIGNvbnN0IHhpdGVtID0gaXRlbS52YWx1ZSA/IGl0ZW0udmFsdWUgOiBpdGVtO1xyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICByZXR1cm4geGl0ZW0gPT09IHRoaXMuc291cmNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLnNvdXJjZS5tYXAoKHgpID0+IHtcclxuICAgICAgaWYgKHhpdGVtID09PSB4KSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3VuZDtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZvcih0aGlzLm5hbWUsIHRoaXMuaWQsIGRhdGEpO1xyXG4gICAgdGhpcy50eXBlID0gKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSA/ICdjaGVja2JveCcgOiAncmFkaW8nO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0lucHV0R3JvdXBDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtJbnB1dEdyb3VwQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtJbnB1dEdyb3VwQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IElucHV0R3JvdXBJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdpbnB1dGdyb3VwJywgSW5wdXRHcm91cENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2pzb24tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJqc29uLXZpZXdcIiBbdGV4dENvbnRlbnRdPVwic291cmNlIHwganNvblwiPjwvc3Bhbj5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICAuanNvbi12aWV3IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgICAgICAgIHVuaWNvZGUtYmlkaTogZW1iZWQ7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSnNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzICwgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBKc29uQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtKc29uQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSnNvbkNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbSnNvbkNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBKc29uSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnanNvbicsIEpzb25Db21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsYXN0dXBkYXRlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJzaG93SWNvblwiIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuPnt7Zm9ybWF0RGF0ZSgpfX08L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDtwb3NpdGlvbjogcmVsYXRpdmV9XHJcbiAgICAgICAgLmZhIHttYXJnaW46MCA1cHggMCAwfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExhc3RVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93SWNvbjogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb3VudDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbiA9IChhcmdzICYmIGFyZ3MubGVuZ3RoICYmIGFyZ3NbMF0gPT09ICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZSgpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdGNvbnN0IG1pbnV0ZSA9IDYwMDAwOy8vIG9uZSBtaW51dGVcclxuXHRcdGNvbnN0IGhvdXIgPSAzNjAwMDAwOy8vIG9uZSBob3VyIGxpbWl0XHJcblx0XHRjb25zdCBkYXkgPSA4NjQwMDAwMDsvLyAyNCBob3VycyBsaW1pdFxyXG5cdFx0Y29uc3Qgd2VlayA9IDYwNDgwMDAwMDsvLyA3IGRheXMgbGltaXRcclxuXHRcdGNvbnN0IG1vbnRoID0gNjA0ODAwMDAwKjQ7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRjb25zdCB5ZWFyID0gNjA0ODAwMDAwKjUyOy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0bGV0IHJlc3VsdCA9IFwiXCI7XHJcblxyXG5cdFx0bGV0IGRpZmYgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLSB0aGlzLnNvdXJjZS5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYoZGlmZiA8PSBtaW51dGUpIHsvLyB1cCB0byBhIG1pbnV0ZVxyXG5cdFx0XHRyZXN1bHQgPSBcInNlY29uZHMgYWdvXCI7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IGhvdXIpIHsvLyB1cCB0byBhbiBob3VyXHJcblx0XHRcdGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmL21pbnV0ZSk7XHJcblx0XHRcdGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAtIChtaW51dGVzICogbWludXRlKSkvMTAwMCk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAobWludXRlcyA8IDIgPyBcImEgbWludXRlXCIgOiBtaW51dGVzICsgXCIgbWludXRlcyBcIikgKyAoc2Vjb25kcyA+IDAgPyBcIiBhbmQgXCIgKyBzZWNvbmRzICsgXCIgc2Vjb25kcyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gZGF5KSB7Ly8gdXAgdG8gYSBkYXlcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcihkaWZmL2hvdXIpO1xyXG5cdFx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoaG91cnMgKiBob3VyKSkvbWludXRlKTtcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdCA9IChob3VycyA8IDIgPyBcImFuIGhvdXJcIiA6IGhvdXJzICsgXCIgaG91cnMgXCIpICsgKG1pbnV0ZXMgPiAwID8gXCIgYW5kIFwiICsgbWludXRlcyArIFwiIG1pbnV0ZXMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IHdlZWspIHsvLyB1cCB0byBhIHdlZWtcclxuXHRcdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKGRpZmYvZGF5KTtcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAtIChkYXlzICogZGF5KSkvaG91cik7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAoZGF5cyA8IDIgPyBcImEgZGF5XCIgOiBkYXlzICsgXCIgZGF5cyBcIikgKyAoaG91cnMgPiAwID8gXCIgYW5kIFwiICsgaG91cnMgKyBcIiBob3VycyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1lbHNlIGlmKGRpZmYgPD0gbW9udGgpIHsvLyB1cCB0byBhIG1vbnRoXHJcblx0XHRcdGxldCB3ZWVrcyA9IE1hdGguZmxvb3IoZGlmZi93ZWVrKTtcclxuXHRcdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKChkaWZmIC0gKHdlZWtzICogd2VlaykpL2RheSk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAod2Vla3MgPCAyID8gXCJhIHdlZWtcIiA6IHdlZWtzICsgXCIgd2Vla3MgXCIpICsgKGRheXMgPiAwID8gXCIgYW5kIFwiICsgZGF5cyArIFwiIGRheXMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IHllYXIpIHsvLyB1cCB0byBhIHdlZWtcclxuXHRcdFx0bGV0IG1vbnRocyA9IE1hdGguZmxvb3IoZGlmZi9tb250aCk7XHJcblx0XHRcdGxldCB3ZWVrcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAobW9udGhzICogbW9udGgpKS93ZWVrKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9IChtb250aHMgPCAyID8gXCJhIG1vbnRoXCIgOiBtb250aHMgKyBcIiBtb250aHMgXCIpICsgKHdlZWtzID4gMCA/IFwiIGFuZCBcIiArIHdlZWtzICsgXCIgd2Vla3MgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgeWVhcnMgPSBNYXRoLmZsb29yKGRpZmYveWVhcik7XHJcblx0XHRcdGxldCBtb250aHMgPSBNYXRoLmZsb29yKChkaWZmIC0gKHllYXJzICogeWVhcikpL21vbnRoKTtcclxuXHJcblx0XHRcdHJlc3VsdCA9ICh5ZWFycyA8IDIgPyBcImEgeWVhclwiIDogeWVhcnMgKyBcIiB5ZWFycyBcIikgKyAobW9udGhzID4gMCA/IFwiIGFuZCBcIiArIG1vbnRocyArIFwiIG1vbnRocyBhZ29cIiA6IFwiIGFnb1wiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBMYXN0VXBkYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9sYXN0dXBkYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtMYXN0VXBkYXRlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTGFzdFVwZGF0ZUNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTGFzdFVwZGF0ZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBMYXN0VXBkYXRlSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnbGFzdHVwZGF0ZScsIExhc3RVcGRhdGVDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaWtlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgXHJcbiAgICAgICAgaWQ9J2xpa2Ute3tpZH19JyBcclxuICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICBjbGFzcz1cImxpa2VcIiBcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIiBcclxuICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIFxyXG4gICAgICAgIChjbGljayk9J3RvZ2dsZUNvdW50KCRldmVudCknPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwXCIgKm5nSWY9XCJ0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtdXAgc2VsZWN0ZWRcIiAqbmdJZj1cInRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLWRvd25cIiAqbmdJZj1cIiF0aHVtYnN1cCAmJiAhc2VsZWN0ZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS10aHVtYnMtZG93biBzZWxlY3RlZFwiICpuZ0lmPVwiIXRodW1ic3VwICYmIHNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRzXCIgKm5nSWY9XCJzaG93Q291bnRcIiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVyU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L2E+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgICAgIC5saWtlIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAgIC5saWtlIC5jb3VudHN7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAgICAgLmxpa2UgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgICAgIC5saWtlIC5mYS5zZWxlY3RlZCB7Y29sb3I6IGdyZWVuO31cclxuICAgICAgICAubGlrZTpob3ZlciwgLmxpa2U6aG92ZXIgLmZhLCAubGlrZTpob3ZlciAuZmEuc2VsZWN0ZWR7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpa2VDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogYW55O1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRhdGE6IGFueTtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG93Q291bnQ6IGJvb2xlYW47XHJcbiAgICB0aHVtYnN1cDogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB0aHVtYnMgPSBcIlwiO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvdW50ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJnc1swXSA9PT0gJ3RydWUnKTtcclxuICAgICAgICB0aGlzLnRodW1ic3VwID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxICYmIGFyZ3NbMV0gPT09ICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aHVtYnMgPSB0aGlzLnRodW1ic3VwID8gXCJ0aHVtYnMtdXAtaXRlbXNcIiA6IFwidGh1bWJzLWRvd24taXRlbXNcIjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gKHRoaXMuZ2V0SXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKSAhPT0gbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkSXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRodW1icyk7XHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBzYXZlZEl0ZW1zLnB1c2goaWQpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50aHVtYnMsIEpTT04uc3RyaW5naWZ5KHNhdmVkSXRlbXMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50aHVtYnMsIEpTT04uc3RyaW5naWZ5KFtpZF0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgKys7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbW92ZUl0ZW0oaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50aHVtYnMpO1xyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgY29uc3QgaSA9IHNhdmVkSXRlbXMuaW5kZXhPZihpZCk7XHJcbiAgICAgICAgICBzYXZlZEl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgIFxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50aHVtYnMsIEpTT04uc3RyaW5naWZ5KHNhdmVkSXRlbXMpKTtcclxuICAgICAgICAgIHRoaXMuc291cmNlIC0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRodW1icyk7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcclxuICAgIFxyXG4gICAgICAgIGlmIChzYXZlZCkge1xyXG4gICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtczogYW55W10gPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIGNvbnN0IGkgPSBzYXZlZEl0ZW1zLmluZGV4T2YoaWQpO1xyXG4gICAgXHJcbiAgICAgICAgICBmb3VuZCA9IGkgPCAwID8gbnVsbCA6IHNhdmVkSXRlbXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgfVxyXG4gICAgICBmb3JtYXR0ZXJTb3VyY2UoKSB7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5zb3VyY2UgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gKHRoaXMuc291cmNlLzEwMDApLnRvRml4ZWQoMSkgKyBcIiBrXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgdG9nZ2xlQ291bnQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuZ2V0SXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICAgIGlmICghZXhpc3RpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY2hhbmdlXCIsXHJcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy50aHVtYnNcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IExpa2VDb21wb25lbnQgfSBmcm9tICcuL2xpa2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xpa2VDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtMaWtlQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtMaWtlQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaWtlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExpa2VJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdsaWtlJywgTGlrZUNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpbmstY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBbaHJlZl09XCJzb3VyY2VcIiBcclxuICAgICAgICBbdGFyZ2V0XT1cInRhcmdldFwiIFxyXG4gICAgICAgIFt0ZXh0Q29udGVudF09XCJ0aXRsZVwiIFxyXG4gICAgICAgIChtb3VzZWVudGVyKT0ncG9wZWQgPSB0cnVlJyBcclxuICAgICAgICAobW91c2VsZWF2ZSk9J3BvcGVkID0gZmFsc2UnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknIFxyXG4gICAgICAgIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPjwvYT5cclxuICAgICAgICA8aW1nICpuZ0lmPSdwb3BlZCcgW3NyY109J3NvdXJjZScgLz5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDsgcG9zaXRpb246cmVsYXRpdmV9XHJcbiAgICAgICAgOmhvc3QgaW1ne3otaW5kZXg6Mjtib3JkZXI6MnB4IHNvbGlkO2JveC1zaGFkb3c6IDNweCAzcHggM3B4ICM5OTk7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7IHdpZHRoOiAyNTBweDt0b3A6IDIycHg7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czogNHB4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHBvcGVkID0gZmFsc2U7XHJcbiAgICBwb3BlcjogYm9vbGVhbjtcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wb3BlciA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyAoYXJnc1sxXSA9PSd0cnVlJykgOiBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnRpdGxlIHx8ICF0aGlzLnRpdGxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBkIDwgMCA/IHQgOiB0LnN1YnN0cmluZyhkKzEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMucG9wZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnR5cGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhIGxpbmsuXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2xpbmsnIH0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGxpbms6dGFyZ2V0OnRleHRcclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5rUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGlua1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIiwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpbmtQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpbmdUb0xpbmsoc291cmNlLCB0YXJnZXQsIHRpdGxlKSB7XHJcbiAgICAgICAgaWYoIXRpdGxlIHx8ICF0aXRsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IHNvdXJjZS5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgY29uc3QgZCA9IHQubGFzdEluZGV4T2YoXCIvXCIpO1xyXG4gICAgICAgICAgICB0aXRsZSA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxhIGhyZWY9J1wiK3NvdXJjZStcIicgdGFyZ2V0PSdcIit0YXJnZXQrXCInPlwiK3RpdGxlK1wiPC9hPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb0ltYWdMaW5rKHNvdXJjZXMsIHRhcmdldCwgdGl0bGUpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9MaW5rKHNvdXJjZSwgdGFyZ2V0LCBcIlwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdGl0bGU6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0xpbmsoc291cmNlLCB0YXJnZXQsIHRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb0ltYWdMaW5rKHNvdXJjZSwgdGFyZ2V0LCB0aXRsZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4vbGluay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaW5rUGlwZSB9IGZyb20gJy4vbGluay5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xpbmtDb21wb25lbnQsTGlua1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtMaW5rQ29tcG9uZW50LExpbmtQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtMaW5rQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5rSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExpbmtJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbTGlua1BpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2xpbmsnLCBMaW5rQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2xpbmsnLCBMaW5rUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGhvbmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICAqbmdJZj1cImlzTGlua1wiIFtocmVmXT1cIid0ZWw6JyArIG5vcm1hbGl6ZVNvdXJjZSgpXCIgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZWRTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuICpuZ0lmPVwiIWlzTGlua1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0dGVkU291cmNlKClcIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICA6aG9zdCBhOmhvdmVyIC5mYS1waG9uZXtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgOmhvc3QgLmZhe21hcmdpbjogMCA1cHg7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBob25lQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaXNMaW5rOiBib29sZWFuO1xyXG4gICAgZm9ybWF0dGluZzogYm9vbGVhbjtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5pc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA9PT0gJ3RydWUnIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdID09PSAndHJ1ZScgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVNvdXJjZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2UucmVwbGFjZSgvW1xcIFxcLVxcLlxcKFxcKVxcK10vZywgJycpO1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgcmVzdWx0ICsgJztleHQ9JyArIHJlc3VsdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcmVzdWx0LnNsaWNlKDAsIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgZSA9IHJlc3VsdC5zbGljZSgxMCk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9ICcrMScgKyBiICsgJztleHQ9JyArIGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBmb3JtYXR0ZWRTb3VyY2UoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc291cmNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmZvcm1hdHRpbmcpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zb3VyY2UucmVwbGFjZSgvW1xcIFxcLVxcLlxcKFxcKVxcK10vZywgJycpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICcxJyA/IHJlc3VsdC5zdWJzdHJpbmcoMSkgOiByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgcmVzdWx0LnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sIFwiKCQxKSQyLSQzXCIpOyBcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IHJlc3VsdC5zbGljZSgxMCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIGIucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0Kz0gKCcgZXh0LiAnICsgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdjbGljaycsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnR5cGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBlbWFpbCBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdwaG9uZScgfSlcclxuZXhwb3J0IGNsYXNzIFBob25lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIHByZXBlbmQ6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGhvbmVQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV09PT0ndHJ1ZScgOiBmYWxzZSwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA9PT0gJ3RydWUnIDogZmFsc2UpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHBob25lRnJvbVN0cmluZyhzb3VyY2UsIGxpbmssIGZvcm1hdCkge1xyXG4gICAgICAgIHJldHVybiBsaW5rID8gXHJcbiAgICAgICAgICAgIFwiPGEgaHJlZj0ndGVsOlwiICsgdGhpcy5ub3JtYWxpemVTb3VyY2Uoc291cmNlKSArIFwiJz48c3BhbiBjbGFzcz0nZmEgZmEtcGhvbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyAoZm9ybWF0ID8gdGhpcy5mb3JtYXR0ZWRTb3VyY2Uoc291cmNlKSA6IHNvdXJjZSkgKyBcIjwvc3Bhbj48L2E+XCIgOlxyXG4gICAgICAgICAgICBcIjxzcGFuPjxzcGFuIGNsYXNzPSdmYSBmYS1waG9uZScgc3R5bGU9J21hcmdpbjogMCA1cHgnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+PHNwYW4+XCIgKyAoZm9ybWF0ID8gdGhpcy5mb3JtYXR0ZWRTb3VyY2Uoc291cmNlKSA6IHNvdXJjZSkgKyBcIjwvc3Bhbj48L3NwYW4+XCI7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgICAgXHJcbiAgICAgICAgY29uc3QgbGluayA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9ICgoYXJncyAmJiBhcmdzLmxlbmd0aD4xKSA/IGFyZ3NbMV0gOiBmYWxzZSk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waG9uZUZyb21TdHJpbmcoc291cmNlLCBsaW5rLCBmb3JtYXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnBob25lRnJvbVN0cmluZyhpdGVtLCBsaW5rLCBmb3JtYXQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIHByaXZhdGUgbm9ybWFsaXplU291cmNlKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQgKyAnO2V4dD0nICsgcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxJyArIGIgKyAnO2V4dD0nICsgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9ybWF0dGVkU291cmNlKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyBiLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sIFwiKCQxKSQyLSQzXCIpOyBcclxuICAgICAgICAgICAgcmVzdWx0Kz0gKCcgZXh0LiAnICsgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUGhvbmVDb21wb25lbnQgfSBmcm9tICcuL3Bob25lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBob25lUGlwZSB9IGZyb20gJy4vcGhvbmUucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQaG9uZUNvbXBvbmVudCwgUGhvbmVQaXBlXSxcclxuICBleHBvcnRzOiBbUGhvbmVDb21wb25lbnQsIFBob25lUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUGhvbmVDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBob25lSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFBob25lSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1Bob25lUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgncGhvbmUnLCBQaG9uZUNvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdwaG9uZScsIFBob25lUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYXRpbmctY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz0ncmF0aW5nJyAqbmdJZj1cInNpbmdsZVN0YXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPSdyYXRpbmcnICpuZ0lmPVwiIXNpbmdsZVN0YXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnICpuZ0Zvcj1cImxldCB4IG9mIHZhbHVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJyAqbmdJZj1cImZsb2F0ICE9IHZhbHVlXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGUtdmFsdWUnIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweDtjdXJzb3I6cG9pbnRlcn1cclxuICAgICAgICAucmF0aW5nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaW5nbGVTdGFyID0gZmFsc2U7XHJcbiAgICB2YWx1ZTogYW55W10gPSBbXTtcclxuICAgIGZsb2F0OiBhbnk7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpe1xyXG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJzAnKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXl1cCcsWyckZXZlbnQnXSlcclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsW10pXHJcbiAgICBjbGljaygpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiAnY2xpY2snLFxyXG4gICAgICAgICAgICBpdGVtOiAncmF0aW5nJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLmZsb2F0ID0gcGFyc2VGbG9hdChzb3VyY2UpO1xyXG4gICAgICAgIHRoaXMuc2luZ2xlU3RhciA9IGFyZ3MubGVuZ3RoID8gKGFyZ3NbMF0gPT09ICd0cnVlJykgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgcmFpdGluZyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyYWl0aW5nJyB9KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmF0aW5nUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHJhdGVTdHJpbmcoc291cmNlLCBtdWx0aVN0YXJ0OiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChzb3VyY2UsIDEwKTtcclxuICAgICAgICBjb25zdCBmbG9hdCA9IHBhcnNlRmxvYXQoc291cmNlKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSBcIjxzcGFuIGNsYXNzPSdyYXRpbmcnPlwiO1xyXG4gICAgICAgIGlmIChtdWx0aVN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKyApIHtcclxuICAgICAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZmxvYXQgIT09IHZhbHVlICkge1xyXG4gICAgICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHggKz0gXCI8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICB4ICs9IFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdyYXRlLXZhbHVlJz5cIiArIHNvdXJjZSArIFwiPC9zcGFuPlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBzaW5nbGVTdGFyID0gYXJncy5sZW5ndGggPyAoYXJnc1swXSA9PT0gJ3RydWUnKSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmF0ZVN0cmluZyhzb3VyY2UsIHNpbmdsZVN0YXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnJhdGVTdHJpbmcoaXRlbSwgc2luZ2xlU3RhcikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcmF0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhdGluZ1BpcGUgfSBmcm9tICcuL3JhdGluZy5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1JhdGluZ0NvbXBvbmVudCwgUmF0aW5nUGlwZV0sXHJcbiAgZXhwb3J0czogW1JhdGluZ0NvbXBvbmVudCwgUmF0aW5nUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUmF0aW5nQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUmF0aW5nSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1JhdGluZ1BpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3JhdGluZycsIFJhdGluZ0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdyYXRpbmcnLCBSYXRpbmdQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25vdGljZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtYmVsbCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nbm90aWNlJyBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTogdGFibGU7cG9zaXRpb246IHJlbGF0aXZlO2Zsb2F0OiBsZWZ0O2N1cnNvcjpwb2ludGVyfVxyXG4gICAgICAgIDpob3N0IC5mYXtmb250LXNpemU6IDFyZW07fVxyXG4gICAgICAgIDpob3N0OmhvdmVye2NvbG9yOiByZWQ7fVxyXG4gICAgICAgIDpob3N0OmhvdmVyIC5mYXtjb2xvcjogcmVkO31cclxuICAgICAgICA6aG9zdDpob3ZlciAubm90aWNle2JhY2tncm91bmQtY29sb3I6ICMwMDA7fVxyXG4gICAgICAgIC5ub3RpY2Uge2Rpc3BsYXk6IHRhYmxlO3dpZHRoOiAxN3B4O2hlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSwxNTUsMjU1LDAuOSk7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtmb250LXNpemU6IDAuN3JlbTtsaW5lLWhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7ei1pbmRleDogMjtjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWNlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIGZsb2F0OiBhbnk7XHJcbiAgICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpe1xyXG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJzAnKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXl1cCcsWyckZXZlbnQnXSlcclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsW10pXHJcbiAgICBjbGljaygpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0eXBlOiAnY2xpY2snLFxyXG4gICAgICAgICAgICBpdGVtOiAnbm90aWNlJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgcmFpdGluZyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdub3RpY2UnIH0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb3RpY2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgbm90aWNlU3RyaW5nKHNvdXJjZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxzcGFuIHN0eWxlPSdkaXNwbGF5OnRhYmxlO3Bvc3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpsZWZ0JyBhbHQ9J2AgKyBtZXNzYWdlICsgYCc+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPSdkaXNwbGF5OiB0YWJsZTt3aWR0aDogMTdweDtoZWlnaHQ6IDE1cHg7Ym9yZGVyLXJhZGl1czogNTAlO3RleHQtYWxpZ246IGNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuMik7ZmxvYXQ6IHJpZ2h0O2ZvbnQtc2l6ZTogMC44cmVtO21hcmdpbi1sZWZ0OiAtNXB4Jz5gICtcclxuICAgICAgICAgIHNvdXJjZSArXHJcbiAgICAgICAgYCA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPmA7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vdGljZVN0cmluZyhzb3VyY2UsIG1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLm5vdGljZVN0cmluZyhpdGVtLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0OyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTm90aWNlQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90aWNlUGlwZSB9IGZyb20gJy4vbm90aWNlLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTm90aWNlQ29tcG9uZW50LCBOb3RpY2VQaXBlXSxcclxuICBleHBvcnRzOiBbTm90aWNlQ29tcG9uZW50LCBOb3RpY2VQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtOb3RpY2VDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGljZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOb3RpY2VJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbTm90aWNlUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnbm90aWNlJywgTm90aWNlQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ25vdGljZScsIE5vdGljZVBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzZWxlY3QgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgIFttdWx0aXBsZV09XCJtdWx0aXNlbGVjdCA/IHRydWU6bnVsbFwiIFxyXG4gICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiIFxyXG4gICAgICAoY2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgeCBvZiBvcHRpb25zXCIgXHJcbiAgICAgICAgICBbc2VsZWN0ZWRdPVwic291cmNlID09PSB4ID8gdHJ1ZSA6IG51bGxcIiAgXHJcbiAgICAgICAgICBbdmFsdWVdPVwieFwiIFxyXG4gICAgICAgICAgW3RleHRDb250ZW50XT1cInhcIj48L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBvcHRpb25zOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuICBzZXJ2aWNlOiBQaXBlU2VydmljZUNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICB0eXBlOiAnY2hhbmdlJyxcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZvcih0aGlzLm5hbWUsIHRoaXMuaWQsIGRhdGEpO1xyXG4gICAgdGhpcy5tdWx0aXNlbGVjdCA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA9PT0gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlbGVjdENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NlbGVjdENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU2VsZWN0Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2VsZWN0SW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnc2VsZWN0JywgU2VsZWN0Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hhcmUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBpZD0nc2hhcmUtY29tbWVudC17e2lkfX0nIFxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgIGNsYXNzPSdzaGFyZS1pdGVtLXRpcHMnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT0ndG9nZ2xlU2hhcmUoKSc+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXNoYXJlLWFsdFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwic2hhcmVcIj5zaGFyZTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fS10aXBzJyBjbGFzcz0ndGlwcycgKm5nSWY9J3Nob3VsZERpc3BsYXknPlxyXG4gICAgICA8c3BhbiBjbGFzcz0nc29jaWFsLXJlZmVyYWwnPlxyXG4gICAgICAgIDxhICpuZ0Zvcj1cImxldCBzaGFyZSBvZiBzaGFyZUxpc3RcIiBcclxuICAgICAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSdcclxuICAgICAgICAgICAgKGNsaWNrKT0nY2hhbmdlKHNoYXJlKSdcclxuICAgICAgICAgICAgW2NsYXNzXT0nc2hhcmUuaWNvbicgdGFyZ2V0PSdfYmxhbmsnIFxyXG4gICAgICAgICAgICBbaHJlZl09J3NoYXJlLmhyZWYnPjxzcGFuIGNsYXNzPSdvZmYtc2NyZWVuJyBbdGV4dENvbnRlbnRdPVwic2hhcmUudGl0bGVcIj48L3NwYW4+PC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHM6aG92ZXIge2NvbG9yOiAjZmFiZGFiO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwczpob3ZlciAuZmF7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyAuc2hhcmV7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAudGlwcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwgLmZhIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgMXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCAuZmE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNob3VsZERpc3BsYXkgPSBmYWxzZTtcclxuICAgIHNvdXJjZTogc3RyaW5nOyAvLyBpdCBzaG91bGQgYmUgYSBsaW5rIHJlZmVyZW5jZSB0byB3aGF0IGlzIGJlaW5nIHNoYXJlZC5cclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2hhcmVMaXN0ID0gW107IC8vIGxpc3Qgb2Ygc2l0ZXMgdG8gc2hvdyBvbiBzaGFyZSB2aWV3LlxyXG4gICAgXHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHNoYXJlSW5mbyh0eXBlLCBhZGRyZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLScgKyB0eXBlLFxyXG4gICAgICAgICAgICBocmVmOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NoYXJlIHdpdGggJysgdHlwZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnRpdGxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVTaGFyZSgpIHtcclxuICAgICAgICB0aGlzLnNob3VsZERpc3BsYXkgPSAhdGhpcy5zaG91bGREaXNwbGF5O1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ1NoYXJlIG9wdGlvbnMnLFxyXG4gICAgICAgICAgICB0eXBlOiAnc2hhcmUnLFxyXG4gICAgICAgICAgICBpdGVtOiB0aGlzLnNob3VsZERpc3BsYXkgPyAnb3BlbicgOiAnY2xvc2UnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICBcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IChhcmdzWzBdIGluc3RhbmNlb2YgQXJyYXkpID8gYXJnc1swXSA6IGFyZ3M7XHJcbiAgICAgICAgbGlzdC5tYXAoIChhcmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhcmcgPT09ICdmYWNlYm9vaycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2ZhY2Vib29rJywgJ2h0dHA6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3R3aXR0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd0d2l0dGVyJywgJ2h0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dGl0bGU9JmFtcDt1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdsaW5rZWRpbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2xpbmtlZGluJywnaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP3RpdGxlPSZhbXA7dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZ29vZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAncGludGVyZXN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ29vZ2xlLXBsdXMnLCAnaHR0cDovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9saW5rLz91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdkaWdnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZGlnZycsICdodHRwOi8vZGlnZy5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2dldC1wb2NrZXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdnZXQtcG9ja2V0JywgJ2h0dHBzOi8vZ2V0cG9ja2V0LmNvbS9lZGl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3hpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCd4aW5nJywgJ2h0dHBzOi8vd3d3LnhpbmcuY29tL2FwcC91c2VyP29wPXNoYXJlJnVybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3N0dW1ibGV1cG9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnc3R1bWJsZXVwb24nLCAnaHR0cDovL3d3dy5zdHVtYmxldXBvbi5jb20vc3VibWl0P3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NoYXJlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2hhcmVDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1NoYXJlQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3NoYXJlJywgU2hhcmVDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzcGFuLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BhbkNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNwYW5Db21wb25lbnQgfSBmcm9tICcuL3NwYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NwYW5Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTcGFuQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtTcGFuQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFuSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNwYW5JbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdzcGFuJywgU3BhbkNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RhYmxlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRhYmxlIFtpZF09XCJpZFwiIGNsYXNzPVwicGlwZWQtdGFibGVcIj5cclxuICAgICAgICA8Y2FwdGlvbiAqbmdJZj1cIm5hbWVcIiBbdGV4dENvbnRlbnRdPVwibmFtZVwiPjwvY2FwdGlvbj5cclxuICAgICAgICA8dHI+PHRoIHNjb3BlPVwiY29sXCIgKm5nRm9yPVwibGV0IGhlYWRlciBvZiBoZWFkZXJzXCIgW3RleHRDb250ZW50XT1cImhlYWRlclwiPjwvdGg+PC90cj5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzXCI+PHRkICpuZ0Zvcj1cImxldCBoZWFkZXIgb2YgaGVhZGVyc1wiIFt0ZXh0Q29udGVudF09XCJyb3dbaGVhZGVyXVwiPjwvdGQ+PC90cj5cclxuICAgIDwvdGFibGU+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IC5waXBlZC10YWJsZSB7cGFkZGluZzogMDt3aWR0aDogMTAwJTtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO31cclxuICAgICAgICA6aG9zdCAucGlwZWQtdGFibGUgY2FwdGlvbiB7YmFja2dyb3VuZC1jb2xvcjogI2MzZTVlMjtib3JkZXItcmFkaXVzOiAycHg7Y29sb3I6ICMxYjFiMWI7Y2FwdGlvbi1zaWRlOiB0b3A7Zm9udC1zaXplOiAxNHB4O3BhZGRpbmc6IDVweCA2cHg7bWFyZ2luLWJvdHRvbTogMTVweDt0ZXh0LWFsaWduOiBsZWZ0O31cclxuICAgICAgICA6aG9zdCAucGlwZWQtdGFibGUgdGgge3VzZXItc2VsZWN0OiBub25lO2hlaWdodDogMjRweDtwb3NpdGlvbjogcmVsYXRpdmU7d2hpdGUtc3BhY2U6IG5vd3JhcDtmb250LXdlaWdodDogbm9ybWFsO3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Zm9udC1zaXplOiAxNHB4O3BhZGRpbmctdG9wOiA2cHg7cGFkZGluZy1ib3R0b206IDZweDt0ZXh0LWFsaWduOiBsZWZ0O31cclxuICAgICAgICA6aG9zdCAucGlwZWQtdGFibGUgdGQge3BhZGRpbmctbGVmdDogM3B4O21pbi1oZWlnaHQ6IDIxcHg7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzID0gW107XHJcbiAgICByb3dzID0gW107XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5pZD0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogJyc7XHJcbiAgICAgICAgdGhpcy5uYW1lPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2goc291cmNlKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRIZWFkZXJzKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVswXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHNvdXJjZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SGVhZGVycyhzb3VyY2VbMF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MucHVzaCh7dmFsdWU6IGl0ZW19KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMucHVzaCgndmFsdWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm93cy5wdXNoKHt2YWx1ZTogc291cmNlfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVycy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SGVhZGVycyhvYmo6IGFueSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGFkZHJlc3MgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndGFibGUnIH0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFibGVQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAnJywgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IHVuZGVmaW5lZCk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBpZD0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogJyc7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZFRhYmxlKHNvdXJjZSwgcm93cywgaGVhZGVycyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiPHRhYmxlIHN0eWxlPSd3aWR0aDogMTAwJScgaWQ9J1wiICsgaWQgKyBcIic+XCIgKyAobmFtZSA/IFwiPGNhcHRpb24gc3R5bGU9J3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNWUyOyc+XCIgKyBuYW1lICsgXCI8L2NhcHRpb24+XCIgOiBcIlwiKSArIFwiPHRyPlwiO1xyXG4gICAgICAgIGhlYWRlcnMubWFwKFxyXG4gICAgICAgICAgICAoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gKFwiPHRoIHN0eWxlPSd0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtd2VpZ2h0Om5vcm1hbDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOycgc2NvcGU9J2NvbCc+XCIgKyBoZWFkZXIgKyBcIjwvdGg+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXN1bHQgKz0gXCI8L3RyPlwiO1xyXG4gICAgICAgIHJvd3MubWFwKFxyXG4gICAgICAgICAgICAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCI8dHI+XCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAoXCI8dGQ+XCIgKyByb3dbaGVhZGVyXSArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjwvdHI+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc3VsdCArPSBcIjwvdGFibGU+XCI7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJ1aWxkVGFibGUoc291cmNlOiBhbnksIHJvd3M6IGFueVtdLCBoZWFkZXJzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByb3dzLnB1c2goc291cmNlKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRIZWFkZXJzKHNvdXJjZSwgaGVhZGVycyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVswXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEhlYWRlcnMoc291cmNlWzBdLCBoZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKHt2YWx1ZTogaXRlbX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMucHVzaCgndmFsdWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaCh7dmFsdWU6IHNvdXJjZX0pO1xyXG4gICAgICAgICAgICBoZWFkZXJzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRIZWFkZXJzKG9iajogYW55LCBoZWFkZXJzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVQaXBlIH0gZnJvbSAnLi90YWJsZS5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RhYmxlQ29tcG9uZW50LCBUYWJsZVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudCwgVGFibGVQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUYWJsZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGFibGVJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgVGFibGVQaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCd0YWJsZScsIFRhYmxlQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3RhYmxlJywgVGFibGVQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RleHQtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cInRleHQtd3JhcHBlclwiICpuZ0lmPVwiZWRpdE5hbWVcIj5cclxuICAgICAgPHRleHRhcmVhICNuYW1lRWRpdG9yXHJcbiAgICAgICAgW2lkXT1cImlkXCJcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICBbdmFsdWVdPVwic291cmNlXCJcclxuICAgICAgICBbYXR0ci5tYXhsZW5ndGhdPVwibGltaXQgPyBsaW1pdCA6IG51bGxcIlxyXG4gICAgICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknPjwvdGV4dGFyZWE+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiY291bnRlclwiIGNsYXNzPVwiY291bnRlclwiIFxyXG4gICAgICAgIFt0ZXh0Q29udGVudF09XCJsaW1pdCA/IChsaW1pdCAtIHNvdXJjZS5sZW5ndGgpICsgJyByZW1haW5pbmcnIDogc291cmNlLmxlbmd0aCArICcgdHlwZWQnXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoY2xpY2spPSdjbGljaygkZXZlbnQpJ1xyXG4gICAgICAgIChrZXl1cCk9J2ZvY3VzKCRldmVudCknXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJzb3VyY2VcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgLmxvY2tlZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDMzcHg7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgICAgICBcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC13cmFwcGVye2JveC1zaXppbmc6IGJvcmRlci1ib3g7ZGlzcGxheTp0YWJsZTt3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgLnRleHQtd3JhcHBlciB0ZXh0YXJlYSB7Ym94LXNpemluZzogYm9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO2N1cnNvcjogYmVhbTt3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgLmNvdW50ZXJ7ZGlzcGxheTogdGFibGU7ZmxvYXQ6cmlnaHQ7Y29sb3I6ICNkZGQ7fVxyXG4gICAgICAgIDpob3N0IHtib3gtc2l6aW5nOiBib3JkZXItYm94O3dpZHRoOiAxMDAlO2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4O21pbi13aWR0aDogMzNweDt9XHJcbiAgICAgICAgOmhvc3QgLmxvY2tlZDpob3Zlcntib3JkZXI6IDFweCBzb2xpZCAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJvd3MgPSA0O1xyXG4gIGxpbWl0ID0gMDtcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIGNvdW50ZXIgPSBmYWxzZTtcclxuICBvbGRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUVkaXRvclwiKVxyXG4gIG5hbWVFZGl0b3I7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lSG9sZGVyXCIpXHJcbiAgbmFtZUhvbGRlclxyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcbiAga2V5dXAoZXZlbnQ6IGFueSkgeyAgICBcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmICgoY29kZSA9PT0gNDgpIHx8IChjb2RlID09PSA4KSkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoKChjb2RlID4gNDgpICYmIChjb2RlIDw9IDkwKSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gOTYpICYmIChjb2RlIDw9IDExMSkpIHx8IChjb2RlID09IDMyKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSAxODYpICYmIChjb2RlIDw9IDIyMikpKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMubGltaXQgfHwgdGhpcy5zb3VyY2UubGVuZ3RoIDwgdGhpcy5saW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoKGNvZGUgPT09IDEzKSB8fCAoY29kZSA9PT0gOSkgfHwgKGNvZGUgPT09IDI3KSApIHtcclxuICAgICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgdHlwZTogJ2NoYW5nZScsXHJcbiAgICAgICAgICBpdGVtOiB0aGlzLm9sZFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgaWYgKHRoaXMubmFtZUhvbGRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lSG9sZGVyLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSw5OSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYmx1cihldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICB0eXBlOiAnYmx1cicsXHJcbiAgICAgICAgaXRlbTogdGhpcy5vbGRWYWx1ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvY3VzKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuY2xpY2soZXZlbnQpO1xyXG4gIH1cclxuICBjbGljayhldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICB0aGlzLmVkaXROYW1lID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgaWYgKHRoaXMubmFtZUVkaXRvcikge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgfVxyXG4gICAgfSw5OSk7XHJcbn1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIHRoaXMub2xkVmFsdWUgPSBzb3VyY2U7XHJcbiAgICB0aGlzLnJvd3MgPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiA0O1xyXG4gICAgdGhpcy5saW1pdCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAwO1xyXG4gICAgdGhpcy5jb3VudGVyID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuaW1wb3J0IHsgQ29tbW9uUGlwZXNNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLXBpcGVzLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvbW1vblBpcGVzTW9kdWxlLmZvclJvb3QoKV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVGV4dENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RleHRDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1RleHRDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGV4dEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3RleHQnLCBUZXh0Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmlkZW8tY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8dmlkZW8gdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAoZm9jdXMpPVwidXBkYXRlQ29udHJvbHMoJGV2ZW50KVwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwidXBkYXRlQ29udHJvbHMoJGV2ZW50KVwiXHJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwicmVzZXRDb250cm9scygkZXZlbnQpXCJcclxuICAgICAgICAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiXHJcbiAgICAgICAgKHBsYXkpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChlbmRlZCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKHBhdXNlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoc2Vla2VkKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoZXJyb3IpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChmdWxsc2NyZWVuY2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbc3JjXT1cInNvdXJjZVwiIFxyXG4gICAgICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFxyXG4gICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgICAgICBbdGl0bGVdPVwiYWx0XCI+PC92aWRlbz5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIGhhc0NvbnRyb2xzID0gdHJ1ZTtcclxuICAgIGhvdmVyUGxheSA9IGZhbHNlO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBhbHQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmFsdCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMikgPyBhcmdzWzJdIDogXCJcIjtcclxuICAgICAgICB0aGlzLmhhc0NvbnRyb2xzID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAzKSA/IChhcmdzWzNdID09PSAndHJ1ZScpIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLmhvdmVyUGxheSA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gNCkgPyAoYXJnc1s0XSA9PT0gJ3RydWUnKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsdCB8fCAhdGhpcy5hbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUNvbnRyb2xzKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNDb250cm9scykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKCdjb250cm9scycsJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJQbGF5KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXRDb250cm9scyhldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJQbGF5ICYmIHRoaXMuaXNQbGF5aW5nKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1BsYXlpbmcodmlkZW86IGFueSkge1xyXG4gICAgICAgIHJldHVybiAhISh2aWRlby5jdXJyZW50VGltZSA+IDAgJiYgIXZpZGVvLnBhdXNlZCAmJiAhdmlkZW8uZW5kZWQgJiYgdmlkZW8ucmVhZHlTdGF0ZSA+IDIpO1xyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGV2ZW50LnRhcmdldC5hdXRvcGxheSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBldmVudC50YXJnZXQuY29udHJvbHMsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZXZlbnQudGFyZ2V0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgZW5kZWQ6IGV2ZW50LnRhcmdldC5lbmRlZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBldmVudC50YXJnZXQuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBwYXVzZWQ6IGV2ZW50LnRhcmdldC5wYXVzZWQsXHJcbiAgICAgICAgICAgICAgICBtdXRlZDogZXZlbnQudGFyZ2V0Lm11dGVkLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWU6IGV2ZW50LnRhcmdldC5jdXJyZW50VGltZSxcclxuICAgICAgICAgICAgICAgIHZvbHVtZTogZXZlbnQudGFyZ2V0LnZvbHVtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gaW1hZ2UgZGlzcGxheS4gXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3ZpZGVvJyB9KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gdmlkZW86MjAwcHg6YXV0bzphbHR0ZXh0IE9SIHZpZGVvOjIwMHB4OmFsdGVybmF0ZS10ZXh0IE9SIHZpZGVvOjIwMHB4IE9SIHZpZGVvXHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZpZGVvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpbmdUb1ZpZGVvKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgaWYoIWFsdCB8fCAhYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIGFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjx2aWRlbyBzcmM9XFwnXCIrc291cmNlK1wiXFwnIHN0eWxlPVxcJ1wiKyB3aWR0aCArIGhlaWdodCArIFwiXFwnIHRpdGxlPVxcJ1wiK2FsdCtcIlxcJyAgY29udHJvbHM9XFwndHJ1ZVxcJyAvPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb1ZpZGVvKHNvdXJjZXMsIHdpZHRoLCBoZWlnaHQsIGFsdCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb1ZpZGVvKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB3aWR0aDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBcIndpZHRoOiBcIiArIGFyZ3NbMF0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBcImhlaWdodDogXCIgKyBhcmdzWzFdICsgXCI7XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFsdDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb1ZpZGVvKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb1ZpZGVvKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgXCJcIik7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi92aWRlby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWRlb1BpcGUgfSBmcm9tICcuL3ZpZGVvLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVmlkZW9Db21wb25lbnQsIFZpZGVvUGlwZV0sXHJcbiAgZXhwb3J0czogW1ZpZGVvQ29tcG9uZW50LCBWaWRlb1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1ZpZGVvQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWRlb0ludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBWaWRlb0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtWaWRlb1BpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3ZpZGVvJywgVmlkZW9Db21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigndmlkZW8nLCBWaWRlb1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDb21tb25QaXBlc01vZHVsZSB9IGZyb20gJy4vY29tbW9uL2NvbW1vbi1waXBlcy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgQWRkcmVzc0ludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9hZGRyZXNzL2FkZGVzcy1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEF1ZGlvSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2F1ZGlvL2F1ZGlvLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vY2FsZW5kYXIvY2FsZW5kYXItcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDaGVja2JveEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVtYWlsSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2VtYWlsL2VtYWlsLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgRm9udEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9mb250L2ZvbnQtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJbWFnZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9pbWFnZS9pbWFnZS1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IElucHV0SW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2lucHV0L2lucHV0LXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgSW5wdXRHcm91cEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9pbnB1dGdyb3VwL2lucHV0Z3JvdXAtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBKc29uSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2pzb24vanNvbi1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IExhc3RVcGRhdGVJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vbGFzdHVwZGF0ZS9sYXN0dXBkYXRlLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgTGlrZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9saWtlL2xpa2UtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBMaW5rSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2xpbmsvbGluay1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBob25lSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3Bob25lL3Bob25lLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgUmF0aW5nSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3JhdGluZy9yYXRpbmctcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOb3RpY2VJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vbm90aWNlL25vdGljZS1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbGVjdEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgU2hhcmVJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vc2hhcmUvc2hhcmUtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTcGFuSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3NwYW4vc3Bhbi1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRhYmxlSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3RhYmxlL3RhYmxlLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgVGV4dEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi90ZXh0L3RleHQtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBWaWRlb0ludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi92aWRlby92aWRlby1waXBlLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIENvbW1vblBpcGVzTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEFkZHJlc3NJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBBdWRpb0ludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIENhbGVuZGFySW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQ2hlY2tib3hJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBFbWFpbEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEZvbnRJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBJbWFnZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIElucHV0SW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgSW5wdXRHcm91cEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEpzb25JbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBMYXN0VXBkYXRlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTGlrZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIExpbmtJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBQaG9uZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFJhdGluZ0ludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE5vdGljZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNlbGVjdEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNoYXJlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgU3BhbkludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRhYmxlSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVGV4dEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFZpZGVvSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbW1vblBpcGVzTW9kdWxlLFxyXG4gICAgQWRkcmVzc0ludG9QaXBlTW9kdWxlLFxyXG4gICAgQXVkaW9JbnRvUGlwZU1vZHVsZSxcclxuICAgIENhbGVuZGFySW50b1BpcGVNb2R1bGUsXHJcbiAgICBDaGVja2JveEludG9QaXBlTW9kdWxlLFxyXG4gICAgRW1haWxJbnRvUGlwZU1vZHVsZSxcclxuICAgIEZvbnRJbnRvUGlwZU1vZHVsZSxcclxuICAgIEltYWdlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBJbnB1dEludG9QaXBlTW9kdWxlLFxyXG4gICAgSW5wdXRHcm91cEludG9QaXBlTW9kdWxlLFxyXG4gICAgSnNvbkludG9QaXBlTW9kdWxlLFxyXG4gICAgTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlLFxyXG4gICAgTGlrZUludG9QaXBlTW9kdWxlLFxyXG4gICAgTGlua0ludG9QaXBlTW9kdWxlLFxyXG4gICAgUGhvbmVJbnRvUGlwZU1vZHVsZSxcclxuICAgIFJhdGluZ0ludG9QaXBlTW9kdWxlLFxyXG4gICAgTm90aWNlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBTZWxlY3RJbnRvUGlwZU1vZHVsZSxcclxuICAgIFNoYXJlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBTcGFuSW50b1BpcGVNb2R1bGUsXHJcbiAgICBUYWJsZUludG9QaXBlTW9kdWxlLFxyXG4gICAgVGFibGVJbnRvUGlwZU1vZHVsZSxcclxuICAgIFRleHRJbnRvUGlwZU1vZHVsZSxcclxuICAgIFZpZGVvSW50b1BpcGVNb2R1bGVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRvUGlwZU1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIlBpcGUiLCJJbmplY3RhYmxlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJDVVNUT01fRUxFTUVOVFNfU0NIRU1BIiwiSW5qZWN0IiwiUmVuZGVyZXIiLCJPdXRwdXQiLCJWaWV3Q2hpbGQiLCJIb3N0TGlzdGVuZXIiLCJEb21TYW5pdGl6ZXIiLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiRWxlbWVudFJlZiIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIklucHV0IiwiU2xpY2VQaXBlIiwiRGVjaW1hbFBpcGUiLCJDdXJyZW5jeVBpcGUiLCJMb3dlckNhc2VQaXBlIiwiVXBwZXJDYXNlUGlwZSIsIkpzb25QaXBlIiwiRGF0ZVBpcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7eUNBMkN5QixJQUFJQSxpQkFBWSxFQUFFOzs7Ozs7OztRQUV2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