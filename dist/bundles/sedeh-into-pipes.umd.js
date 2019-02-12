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
         * @param {?} event
         * @return {?}
         */
        AudioComponent.prototype.change = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
            };
        AudioComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'audio-component',
                        template: "\n    <audio [src]=\"source\" \n        (playing)=\"change($event)\"\n        (ended)=\"change($event)\"\n        (pause)=\"change($event)\"\n        (seeked)=\"change($event)\"\n        (error)=\"change($event)\"\n        controls=\"true\">Your browser does not support the audio element.</audio>",
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
        function CheckboxComponent(renderer) {
            this.renderer = renderer;
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
                    this.renderer.invokeElementMethod(event.target, "click");
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
                    item: this.data
                });
                if (this.useFont) {
                    setTimeout(function () {
                        if (_this.check) {
                            _this.renderer.invokeElementMethod(_this.check.nativeElement, "focus");
                        }
                        if (_this.uncheck) {
                            _this.renderer.invokeElementMethod(_this.uncheck.nativeElement, "focus");
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
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () {
            return [
                { type: core.Renderer }
            ];
        };
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
            this.onIntoComponentChange = new core.EventEmitter();
        }
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
                    item: event.type
                });
            };
        ImageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'image-component',
                        template: "\n        <img [src]=\"source\" \n             [style.width]=\"width\" \n             [style.height]=\"height\" \n             [title]=\"alt\" \n             (mouseleave)=\"change($event)\"\n             (mouseenter)=\"change($event)\" />",
                        styles: ["\n    :host {display:table;float:left;min-height: 23px}\n    "]
                    }] }
        ];
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
        InputGroupComponent.prototype.click = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
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
                        template: "\n    <span class=\"input-group-item\" *ngFor=\"let x of options; let i = index\">\n        <input \n            [type]=\"type\" \n            [id]=\"name + i\" \n            [name]=\"name + (type === 'radio' ? '' : i)\" \n            [value]=\"x.value ? x.value : x\" \n            [checked]=\"isSelected(x)\"\n            (click)=\"click($event)\"/>\n        <label [for]=\"name + i\" [textContent]=\"x.label ? x.label : x\"></label>\n    </span>\n    ",
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
                        template: "\n    <span *ngIf=\"showIcon\" class=\"fa fa-clock-o\" aria-hidden=\"true\"></span>\n    <span [textContent]=\"formatDate()\"></span>\n    ",
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
                this.onIntoComponentChange.emit({
                    id: this.id,
                    name: this.name,
                    value: this.source,
                    item: event.type
                });
            };
        LinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'link-component',
                        template: "\n    <a [href]=\"source\" \n        [target]=\"target\" \n        [textContent]=\"title\" \n        (keyup)='keyup($event)' \n        (click)=\"change($event)\"></a>",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        "]
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
        function RatingComponent() {
            this.value = [];
        }
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
                        template: "\n    <span class='rating'>\n        <span class='fa fa-star' aria-hidden='true' *ngFor=\"let x of value\"></span>\n        <span class='fa fa-star-half' aria-hidden='true' *ngIf=\"float != value\"></span>\n    </span>\n    <span class='rate-value' [textContent]=\"source\"></span>\n    ",
                        styles: ["\n        :host {display:table;float:left;min-height: 23px}\n        .rating {\n            display: inline-block;\n        }\n        "]
                    }] }
        ];
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
         * @return {?}
         */
        RatingPipe.prototype.rateString = /**
         * @param {?} source
         * @return {?}
         */
            function (source) {
                /** @type {?} */
                var value = parseInt(source, 10);
                /** @type {?} */
                var float = parseFloat(source);
                /** @type {?} */
                var x = "<span class='rating'>";
                for (var i = 0; i < value; i++) {
                    x += "<span class='fa fa-star' aria-hidden='true'></span>";
                }
                if (float !== value) {
                    x += "<span class='fa fa-star-half' aria-hidden='true'></span>";
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
                if ((typeof source === "string") || !(source instanceof Array)) {
                    return this.rateString(source);
                }
                else {
                    /** @type {?} */
                    var result_1 = [];
                    source.map(function (item) {
                        result_1.push(_this.rateString(item));
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
                        template: "\n    <select tabindex=\"0\" [multiple]=\"multiselect ? true:null\" (click)=\"click($event)\" (change)=\"change($event)\">\n        <option *ngFor=\"let x of options\" [selected]=\"source === x ? true : null\"  [value]=\"x\" [textContent]=\"x\"></option>\n    </select>\n    ",
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
    var VideoComponent = (function () {
        function VideoComponent() {
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
                        template: "\n    <video controls=\"true\" \n        (playing)=\"change($event)\"\n        (ended)=\"change($event)\"\n        (pause)=\"change($event)\"\n        (seeked)=\"change($event)\"\n        (error)=\"change($event)\"\n        [src]=\"source\" \n        [style.width]=\"width\" \n        [style.height]=\"height\"\n        [title]=\"alt\"></video>\n    ",
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
    exports.SelectComponent = SelectComponent;
    exports.SelectIntoPipeModule = SelectIntoPipeModule;
    exports.ShareComponent = ShareComponent;
    exports.ShareIntoPipeModule = ShareIntoPipeModule;
    exports.SpanComponent = SpanComponent;
    exports.SpanIntoPipeModule = SpanIntoPipeModule;
    exports.TextComponent = TextComponent;
    exports.TextIntoPipeModule = TextIntoPipeModule;
    exports.TableComponent = TableComponent;
    exports.TablePipe = TablePipe;
    exports.TableIntoPipeModule = TableIntoPipeModule;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VkZWgtaW50by1waXBlcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvYWRkcmVzcy9hZGRyZXNzLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29tcG9uZW50LnBvb2wudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9hZGRyZXNzL2FkZGVzcy1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2F1ZGlvL2F1ZGlvLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9hdWRpby9hdWRpby1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NhbGVuZGFyL2NhbGVuZGFyLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY2hlY2tib3gvY2hlY2tib3gtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9lbWFpbC9lbWFpbC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9lbWFpbC9lbWFpbC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvZW1haWwvZW1haWwtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9mb250L2ZvbnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvZm9udC9mb250LnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9mb250L2ZvbnQtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbWFnZS9pbWFnZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbWFnZS9pbWFnZS5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvaW1hZ2UvaW1hZ2UtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vYXBwZW5kLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29uZGl0aW9uYWwucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9qb2luLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vbWFwLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vbWFzay5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL3ByZXBlbmQucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi9zYW5pdGl6ZUh0bWwucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2NvbW1vbi92YWx1ZW9mLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vd3JhcC5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2ludG8ucGlwZS50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vaW50by5kaXJlY3RpdmUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9jb21tb24vY29tbW9uLXBpcGVzLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2lucHV0L2lucHV0LXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvaW5wdXRncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9pbnB1dGdyb3VwL2lucHV0Z3JvdXAtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9qc29uL2pzb24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvanNvbi9qc29uLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGFzdHVwZGF0ZS9sYXN0dXBkYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2xhc3R1cGRhdGUvbGFzdHVwZGF0ZS1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL2xpa2UvbGlrZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9saWtlL2xpa2UtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9saW5rL2xpbmsuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvbGluay9saW5rLnBpcGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9saW5rL2xpbmstcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waG9uZS9waG9uZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9waG9uZS9waG9uZS5waXBlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGhvbmUvcGhvbmUtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3JhdGluZy9yYXRpbmcucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3JhdGluZy9yYXRpbmctcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3NlbGVjdC9zZWxlY3QtcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zaGFyZS9zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zaGFyZS9zaGFyZS1waXBlLm1vZHVsZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3NwYW4vc3Bhbi5jb21wb25lbnQudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy9zcGFuL3NwYW4tcGlwZS5tb2R1bGUudHMiLCJuZzovL0BzZWRlaC9pbnRvLXBpcGVzL3NyYy9hcHAvaW50by1waXBlcy90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGV4dC90ZXh0LXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdGFibGUvdGFibGUucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3RhYmxlL3RhYmxlLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdmlkZW8vdmlkZW8uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvdmlkZW8vdmlkZW8ucGlwZS50cyIsIm5nOi8vQHNlZGVoL2ludG8tcGlwZXMvc3JjL2FwcC9pbnRvLXBpcGVzL3ZpZGVvL3ZpZGVvLXBpcGUubW9kdWxlLnRzIiwibmc6Ly9Ac2VkZWgvaW50by1waXBlcy9zcmMvYXBwL2ludG8tcGlwZXMvcGlwZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWRkcmVzcy1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICpuZ0lmPVwiaXNMaW5rXCIgXHJcbiAgICAgICAgW2hyZWZdPVwidXJsXCIgXHJcbiAgICAgICAgW3RhcmdldF09XCJoYXNUYXJnZXQgPyAnX2JsYW5rJyA6IG51bGxcIlxyXG4gICAgICAgIGNsYXNzPVwiZ29vZ2xlLW1hcFwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknIFxyXG4gICAgICAgIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5WaWV3IGluIGdvb2dsZSBtYXA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgW3RleHRDb250ZW50XT1cImFkZHIxXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc1wiIFt0ZXh0Q29udGVudF09XCJhZGRyMlwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuICpuZ0lmPVwiIWlzTGlua1wiIGNsYXNzPVwiZ29vZ2xlLW1hcFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NcIiBbdGV4dENvbnRlbnRdPVwiYWRkcjFcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzXCIgW3RleHRDb250ZW50XT1cImFkZHIyXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGAuYWRkcmVzcyB7ZmxvYXQ6IGxlZnQ7bWFyZ2luLXJpZ2h0OiA0cHg7fVxyXG4gICAgICAgIC5nb29nbGUtbWFwIHtmbG9hdDogbGVmdDttYXJnaW4tcmlnaHQ6IDRweDt9XHJcbiAgICAgICAgLmZhIHtmbG9hdDpsZWZ0O2NvbG9yOiAjZjAwO21hcmdpbjogMCA1cHg7fVxyXG4gICAgICAgIC5vZmYtc2NyZWVuIHtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogLTk5OWVtO31cclxuICAgICAgICA6aG9zdCBhOmhvdmVyIC5mYS1tYXAtbWFya2Vye2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICA6aG9zdCBzcGFue2Zsb2F0LWxlZnQ7fVxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OiB0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBpc0xpbms6IGJvb2xlYW47XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgYWRkcjE6IHN0cmluZztcclxuICAgIGFkZHIyOiBzdHJpbmc7XHJcbiAgICBoYXNUYXJnZXQ6IGJvb2xlYW47XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5pc0xpbms9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5oYXNUYXJnZXQgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRyMSA9IHNvdXJjZS5zdHJlZXQgKyAnLCAnICsgc291cmNlLnN1aXRlO1xyXG4gICAgICAgIHRoaXMuYWRkcjIgPSBzb3VyY2UuY2l0eSArICcsICcgKyBzb3VyY2UuemlwY29kZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaW5rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tLz9xPVwiICsgc291cmNlLnN0cmVldCArIFwiLCBcIiArIHRoaXMuYWRkcjIgK1wiJmllPVVURi04XCI7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0geC5yZXBsYWNlKFwiXFxcXHMrXCIsIFwiK1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gYWRkcmVzcyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhZGRyZXNzJyB9KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWRkcmVzc1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXT09PSd0cnVlJyA6IHRydWUpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgaXNMaW5rPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGhhc1RhcmdldCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBmYWxzZTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKHNvdXJjZSwgaXNMaW5rLCBoYXNUYXJnZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmFkZHJlc3NGcm9tU3RyaW5nKGl0ZW0sIGlzTGluaywgaGFzVGFyZ2V0KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkcmVzc0Zyb21TdHJpbmcoc291cmNlOiBhbnksIGlzTGluazogYm9vbGVhbiwgaGFzVGFyZ2V0OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGlzTGluaykge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS8/cT1cIiArIFxyXG4gICAgICAgICAgICBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgc291cmNlLmNpdHkgKyBcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArXCImaWU9VVRGLThcIjtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJcXFxccytcIiwgXCIrXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFwiPGEgaHJlZj1cXCdcIiArIHVybCArIFwiXFwnIFwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgKGhhc1RhcmdldCA/IFwidGFyZ2V0PSdfYmxhbmsnXCIgOiBcIlwiKSArIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3M9J2dvb2dsZS1tYXAnPjxzcGFuIGNsYXNzPSdmYSBmYS1tYXAtbWFya2VyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdvZmYtc2NyZWVuJz5WaWV3IGluIGdvb2dsZSBtYXA8L3NwYW4+PHNwYW4gY2xhc3M9J2FkZHJlc3MnPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2Uuc3RyZWV0ICsgXCIsIFwiICsgc291cmNlLnN1aXRlICsgXCI8L3NwYW4+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J2FkZHJlc3MnPiBcIiArIHNvdXJjZS5jaXR5ICtcIiwgXCIgKyBzb3VyY2UuemlwY29kZSArIFwiPC9zcGFuPjwvYT5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J2dvb2dsZS1tYXAnPjxzcGFuIGNsYXNzPSdmYSBmYS1tYXAtbWFya2VyJyBzdHlsZT0nbWFyZ2luOiAwIDVweCcgYXJpYS1oaWRkZW49J3RydWUnPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdhZGRyZXNzJz5cIiArIHNvdXJjZS5zdHJlZXQgKyBcIiwgXCIgKyBzb3VyY2Uuc3VpdGUgKyBcIjwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSdhZGRyZXNzJz4gXCIgKyBzb3VyY2UuY2l0eSArXCIsIFwiICsgc291cmNlLnppcGNvZGUgKyBcIjwvc3Bhbj48L3NwYW4+XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiXG5pbXBvcnQge1xuXHRJbmplY3RhYmxlLCBcblx0Q29tcG9uZW50UmVmLCBcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBcblx0Vmlld0NvbnRhaW5lclJlZixcblx0RW1iZWRkZWRWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi9waXBlLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQb29sIHtcblx0cHJpdmF0ZSByZWdpc3RlcmVkUGlwZXM9IHt9O1xuXHRwcml2YXRlIHJlZ2lzdGVyZWRDb21wb25lbnRzPSB7fTtcblx0cHJpdmF0ZSByZWdpc3RlcmVkU2VydmljZXM9IHt9O1xuXG5cdHJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uIChuYW1lOiBzdHJpbmcsIHBpcGU6IGFueSkge1xuXHRcdHRoaXMucmVnaXN0ZXJlZFBpcGVzW25hbWVdID0gcGlwZTtcblx0fVxuXHRyZWdpc3RlcmVkRm9yUGlwZVRyYW5zZm9ybWF0aW9uTmFtZWQoa2V5OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkUGlwZXNba2V5XSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cdHJlZ2lzdGVyZWRQaXBlVHJhbnNmb3JtYXRpb24oa2V5OiBzdHJpbmcsIGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XG4gICAgICAgIGNvbnN0IHBpcGUgPSB0aGlzLnJlZ2lzdGVyZWRQaXBlc1trZXldO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHBpcGUgPyBwaXBlKGNvbnRlbnQsIGFyZ3MsIGNhbGxiYWNrLCBkYXRhKSA6IG51bGw7XG5cdH1cblx0cmVtb3ZlUGlwZVRyYW5zZm9ybWF0aW9uIChrZXk6IHN0cmluZykge1xuXHRcdGRlbGV0ZSB0aGlzLnJlZ2lzdGVyZWRQaXBlc1trZXldO1xuXHR9XG5cblx0cmVnaXN0ZXJDb21wb25lbnQgKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuXHR9XG5cdHJlZ2lzdGVyZWRGb3JDb21wb25lbnRXaXRoTmFtZWQobmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudHNbbmFtZV0gIT09IHVuZGVmaW5lZDtcblx0fVxuXHRyZWdpc3RlcmVkQ29tcG9uZW50KFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRyZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHZpZXdSZWZyZW5jZTogVmlld0NvbnRhaW5lclJlZixcblx0XHRlbDogSFRNTEVsZW1lbnQpOiBQaXBlQ29tcG9uZW50IHtcblx0XHRjb25zdCBjb21wb25lbnQgPSAgdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0XHRsZXQgcmVzdWx0OiBQaXBlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuXHRcdFx0bGV0IGNvbXBvbmVudEZhY3RvcnkgPSByZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiA9IHZpZXdSZWZyZW5jZS5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdFx0XHRjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWYgPCBhbnkgPiApLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdGVsLmFwcGVuZENoaWxkKGRvbUVsZW0pO1xuXHRcdFx0cmVzdWx0ID0gKDxQaXBlQ29tcG9uZW50PmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICByZXN1bHQ7XG5cdH1cblx0cmVtb3ZlQ29tcG9uZW50IChuYW1lOiBzdHJpbmcpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkQ29tcG9uZW50c1tuYW1lXTtcblx0fVxuXG5cdHJlZ2lzdGVyU2VydmljZUZvckNvbXBvbmVudCAobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBhbnkpIHtcblx0XHR0aGlzLnJlZ2lzdGVyZWRTZXJ2aWNlc1tuYW1lXSA9IHNlcnZpY2U7XG5cdH1cblx0cmVnaXN0ZXJlZFNlcnZpY2VGb3JDb21wb25lbnQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV07XG5cdH1cblx0cmVnaXN0ZXJlZEZvclNlcnZpY2VOYW1lZChuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcblx0fVxuXHRyZW1vdmVTZXJ2aWNlRm9yQ29tcG9uZW50IChuYW1lOiBzdHJpbmcpIHtcblx0XHRkZWxldGUgdGhpcy5yZWdpc3RlcmVkU2VydmljZXNbbmFtZV07XG5cdH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBBZGRyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZHJlc3NQaXBlIH0gZnJvbSAnLi9hZGRyZXNzLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQWRkcmVzc0NvbXBvbmVudCwgQWRkcmVzc1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtBZGRyZXNzQ29tcG9uZW50LCBBZGRyZXNzUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkcmVzc0NvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc0ludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBZGRyZXNzSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEFkZHJlc3NQaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdhZGRyZXNzJywgQWRkcmVzc0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdhZGRyZXNzJywgQWRkcmVzc1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1ZGlvLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGF1ZGlvIFtzcmNdPVwic291cmNlXCIgXHJcbiAgICAgICAgKHBsYXlpbmcpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChlbmRlZCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKHBhdXNlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoc2Vla2VkKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAoZXJyb3IpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIGNvbnRyb2xzPVwidHJ1ZVwiPllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBhdWRpbyBlbGVtZW50LjwvYXVkaW8+YCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGV2ZW50LnRhcmdldC5hdXRvcGxheSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBldmVudC50YXJnZXQuY29udHJvbHMsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZXZlbnQudGFyZ2V0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWU6IGV2ZW50LnRhcmdldC5jdXJyZW50VGltZSxcclxuICAgICAgICAgICAgICAgIGVuZGVkOiBldmVudC50YXJnZXQuZW5kZWQsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXZlbnQudGFyZ2V0LmVycm9yLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VkOiBldmVudC50YXJnZXQucGF1c2VkLFxyXG4gICAgICAgICAgICAgICAgbXV0ZWQ6IGV2ZW50LnRhcmdldC5tdXRlZCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRNdXRlZDogZXZlbnQudGFyZ2V0LmRlZmF1bHRNdXRlZCxcclxuICAgICAgICAgICAgICAgIHZvbHVtZTogZXZlbnQudGFyZ2V0LnZvbHVtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gaW1hZ2UgZGlzcGxheS4gXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2F1ZGlvJyB9KVxyXG5leHBvcnQgY2xhc3MgQXVkaW9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEF1ZGlvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdPT09J3RydWUnIDogdHJ1ZSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyaW5nVG9BdWRpbyhzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gXCI8YXVkaW8gc3JjPVxcJ1wiK3NvdXJjZStcIlxcJyBjb250cm9scz1cXCd0cnVlXFwnIC8+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvQXVkaW8oc291cmNlcykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb0F1ZGlvKHNvdXJjZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9BdWRpbyhzb3VyY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvQXVkaW8oc291cmNlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBBdWRpb0NvbXBvbmVudCB9IGZyb20gJy4vYXVkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXVkaW9QaXBlIH0gZnJvbSAnLi9hdWRpby5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0F1ZGlvQ29tcG9uZW50LCBBdWRpb1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtBdWRpb0NvbXBvbmVudCwgQXVkaW9QaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtBdWRpb0NvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaW9JbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQXVkaW9JbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQXVkaW9QaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnYXVkaW8nLCBBdWRpb0NvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdhdWRpbycsIEF1ZGlvUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiLyogY2FsZW5kYXIgY29kZSBpcyBjb3BpZWQgZnJvbSBcImJlbiB0ZWRkZXJcIiBcclxuKiBodHRwOi8vd3d3LmJlbnRlZGRlci5jb20vY3JlYXRlLWNhbGVuZGFyLWdyaWQtY29tcG9uZW50LWFuZ3VsYXItNC9cclxuKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJEYXRlIHtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICB0b2RheT86IGJvb2xlYW47XHJcbiAgfVxyXG4gIFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FsZW5kYXItY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImNhbGVuZGFyLWJveFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIiBbdGV4dENvbnRlbnRdPVwib3JpZ0RhdGUgfCBkYXRlOmZvcm1hdHRpbmdcIj48L3NwYW4+XHJcbiAgICAgIDxhIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicG9wcGVyXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwicG9wZGF0ZXBpY2tlcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+UGljayBhIGRhdGU8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiICpuZ0lmPVwic2hvd0NhbGVuZGFyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXItbmF2c1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9udGgtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwcmV2TW9udGgoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkJhY2sgYSBtb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwicDRcIj57eyBjdXJyZW50RGF0ZSB8IGRhdGU6J01NTU0nIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibmV4dE1vbnRoKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+Rm9yd2FyZCBhIG1vbnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwieWVhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInByZXZZZWFyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5CYWNrIGEgeWVhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxzcGFuPnt7IGN1cnJlbnREYXRlIHwgZGF0ZTogJ3l5eXknIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibmV4dFllYXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5Gb3J3YXJkIGEgeWVhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vbnRoLWdyaWRcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImRheS1uYW1lc1wiPlxyXG5cdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IG5hbWUgb2YgZGF5TmFtZXNcIiBjbGFzcz1cImRheS1uYW1lIHA5XCI+e3sgbmFtZSB9fTwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIndlZWtzXCI+XHJcblx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgd2VlayBvZiB3ZWVrc1wiIGNsYXNzPVwid2Vla1wiPlxyXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndlZWstZGF0ZSBkaXNhYmxlZFwiICpuZ0lmPVwiIWlzU2VsZWN0ZWRNb250aChkYXkuZGF0ZSlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImRhdGUtdGV4dFwiPnt7IGRheS5kYXRlLmdldERhdGUoKSB9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWVrLWRhdGUgZW5hYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNTZWxlY3RlZE1vbnRoKGRheS5kYXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdFx0ICAgKGNsaWNrKT1cInNlbGVjdERhdGUoJGV2ZW50LCBkYXkpXCJcclxuXHRcdFx0XHRcdFx0ICAgW2NsYXNzLnRvZGF5XT1cImRheS50b2RheVwiXHJcblx0XHRcdFx0XHRcdCAgIFtjbGFzcy5zZWxlY3RlZF09XCJkYXkuc2VsZWN0ZWRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImRhdGUtdGV4dFwiPnt7IGRheS5kYXRlLmdldERhdGUoKSB9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIC5wb3BwZXIgLmZhLWNhbGVuZGFye2Rpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46IDAgNXB4fVxyXG4gICAgICAgIC5wb3BwZXI6aG92ZXIgLmZhLWNhbGVuZGFye2NvbG9yOiAjZmFiZGFifVxyXG4gICAgICAgIC5jYWxlbmRhci1ib3gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCBkYXRlIHtmbGV4OiAxO31cclxuICAgICAgICAuY2FsZW5kYXItYm94IC5wb3BwZXIge2N1cnNvcjogcG9pbnRlcjtmbGV4OiAwIDAgMTVweH1cclxuICAgICAgICAuY2FsZW5kYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyICoge1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLmNhbGVuZGFyLW5hdnMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IGJ1dHRvbixcclxuICAgICAgICAuY2FsZW5kYXIgLnllYXItbmF2IGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYgYnV0dG9uOmhvdmVyLFxyXG4gICAgICAgIC5jYWxlbmRhciAueWVhci1uYXYgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC5kYXktbmFtZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vla3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLmRheS1uYW1lcyB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2RkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSxcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLmRheS1uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUgLmRhdGUtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgbGluZWFyLCBjb2xvciAxNTBtcyBsaW5lYXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmRpc2FibGVkIHtjb2xvcjogI2FhYTt9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6aG92ZXIgLmRhdGUtdGV4dCxcclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzIC5kYXRlLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6aG92ZXI6OmFmdGVyLFxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXM6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuc2VsZWN0ZWQgLmRhdGUtdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnNlbGVjdGVkOjphZnRlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS50b2RheTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaXRlbTogYW55O1xyXG4gIHNob3dDYWxlbmRhciA9IGZhbHNlO1xyXG4gIGZvcm1hdHRpbmc6c3RyaW5nO1xyXG4gIGVkaXROYW1lID0gZmFsc2U7XHJcbiAgbXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuXHJcbiAgb3JpZ0RhdGU6IERhdGU7XHJcbiAgY3VycmVudERhdGU6IERhdGU7XHJcbiAgZGF5TmFtZXMgPSBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcclxuICB3ZWVrczogQ2FsZW5kYXJEYXRlW11bXSA9IFtdO1xyXG4gIHNlbGVjdGVkRGF5czogRGF0ZVtdID0gW107XHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAga2V5dXAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgcG9wZGF0ZXBpY2tlcihldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc2hvd0NhbGVuZGFyID0gIXRoaXMuc2hvd0NhbGVuZGFyO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLm9yaWdEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICB0aGlzLm11bHRpc2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICBzb3VyY2UubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKG5ldyBEYXRlKGl0ZW0pKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm11bHRpc2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChuZXcgRGF0ZSh0aGlzLnNvdXJjZSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtID0gZGF0YTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWREYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZERhdGU6IERhdGUgPSB0aGlzLnNlbGVjdGVkRGF5c1tpXTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzU2FtZURheShkYXRlLCBzZWxlY3RlZERhdGUpKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID4gLTE7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkTW9udGgoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RlZERhdGVzKGRheTogQ2FsZW5kYXJEYXRlKSB7XHJcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5tdWx0aXNlbGVjdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZERheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXlzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NhbWVEYXkoZGF5LmRhdGUsIGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRheS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKCFmb3VuZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2goZGF5LmRhdGUpO1xyXG4gICAgICAgICAgICAgIGRheS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERheXMgPSBbZGF5LmRhdGVdO1xyXG4gICAgICAgIGRheS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgc2VsZWN0RGF0ZShldmVudCwgZGF5OiBDYWxlbmRhckRhdGUpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLm9yaWdEYXRlID0gZGF5LmRhdGU7XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF5LmRhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkRGF0ZXMoIGRheSApO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWREYXlzLnNvcnQoIChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGEgPiBiID8gLTEgOiAxO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0ZWREYXlzLFxyXG4gICAgICAgIGl0ZW06IHRoaXMuaXRlbVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dDYWxlbmRhciA9IGZhbHNlO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICAvLyBhY3Rpb25zIGZyb20gY2FsZW5kYXJcclxuICBwcmV2TW9udGgoZXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKS0xLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIG5leHRNb250aChldmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpKzEsIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgcHJldlllYXIoZXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLTEsdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIG5leHRZZWFyKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSsxLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICAgIC8vIGdlbmVyYXRlIHRoZSBjYWxlbmRhciBncmlkXHJcbiAgICBnZW5lcmF0ZUNhbGVuZGFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5maWxsRGF0ZXModGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgY29uc3Qgd2Vla3M6IENhbGVuZGFyRGF0ZVtdW10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoZGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHdlZWtzLnB1c2goZGF0ZXMuc3BsaWNlKDAsIDcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53ZWVrcyA9IHdlZWtzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1NhbWVEYXkoYTogRGF0ZSwgYjogRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBhLmdldEZ1bGxZZWFyKCkgPT09IGIuZ2V0RnVsbFllYXIoKSAmJiBcclxuICAgICAgICAgICAgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0RGF0ZSgpID09PSBiLmdldERhdGUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTYW1lTW9udGgoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmdldFllYXIoKSA9PT0gYi5nZXRZZWFyKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxEYXRlcyhjdXJyZW50RGF0ZTogRGF0ZSk6IENhbGVuZGFyRGF0ZVtdIHtcclxuICAgICAgICBjb25zdCBjbSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcclxuICAgICAgICBjb25zdCB0bSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZShjbS5nZXRGdWxsWWVhcigpLCBjbS5nZXRNb250aCgpLCAxKVxyXG4gICAgICAgIGNvbnN0IGZpcnN0T2ZNb250aCA9IGZpcnN0RGF5LmdldERheSgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZHcmlkID0gbmV3IERhdGUoZmlyc3REYXkuZ2V0RnVsbFllYXIoKSwgZmlyc3REYXkuZ2V0TW9udGgoKSwgZmlyc3REYXkuZ2V0RGF0ZSgpIC0gZmlyc3RPZk1vbnRoKTtcclxuICAgICAgICBjb25zdCBzdGFydCA9IGZpcnN0RGF5T2ZHcmlkLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpPCAoc3RhcnQgKyA0Mik7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZHcmlkLmdldEZ1bGxZZWFyKCksIGZpcnN0RGF5T2ZHcmlkLmdldE1vbnRoKCksIGkpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdG9kYXk6IHRoaXMuaXNTYW1lRGF5KHRtLCBkKSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLmlzU2VsZWN0ZWQoZCksXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtDYWxlbmRhckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NhbGVuZGFyQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtDYWxlbmRhckNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ2FsZW5kYXJJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnY2FsZW5kYXInLCBDYWxlbmRhckNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2hlY2tib3gtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiAqbmdJZj1cInVzZUZvbnRcIiBjbGFzcz1cImNoZWNrLWZvbnRcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJzb3VyY2UgPT09IGlkZWFsXCIgI2NoZWNrIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIChjbGljayk9XCJjbGljaygkZXZlbnQpXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInNvdXJjZSAhPT0gaWRlYWxcIiAjdW5jaGVjayB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImZhIGZhLWNsb3NlXCIgKGtleXVwKT1cImtleXVwKCRldmVudClcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxpbnB1dCAqbmdJZj1cIiF1c2VGb250XCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIiBcclxuICAgICAgICAgICAgW3ZhbHVlXT1cInNvdXJjZVwiIFxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzb3VyY2U9PT1pZGVhbCA/IHRydWUgOiBudWxsXCIgXHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJrZXl1cCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrKCRldmVudClcIiAvPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCAuY2hlY2stZm9udCAuZmF7bWFyZ2luOiAwIDVweH1cclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgLmNoZWNrLWZvbnQ6aG92ZXJ7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgICAgIC5jaGVjay1mb250IHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IGFueTtcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBvcmlnaW5hbDogc3RyaW5nO1xyXG4gIGlkZWFsOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdXNlRm9udDogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZChcImNoZWNrXCIpXHJcbiAgY2hlY2s7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJ1bmNoZWNrXCIpXHJcbiAgdW5jaGVjaztcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gIGtleXVwKGV2ZW50KSB7XHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKGV2ZW50LnRhcmdldCwgXCJjbGlja1wiKTtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIGNsaWNrKGV2ZW50KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5zb3VyY2UgPT09IHRoaXMuaWRlYWwpIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLm9yaWdpbmFsO1xyXG5cdFx0fSBlbHNlIHtcclxuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmlkZWFsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnVzZUZvbnQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2spIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmNoZWNrLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnVuY2hlY2spIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLnVuY2hlY2submF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sNjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLmlkZWFsPSBhcmdzLmxlbmd0aCA/IFN0cmluZyhhcmdzWzBdKSA6IFwiXCI7XHJcbiAgICB0aGlzLnVzZUZvbnQ9IGFyZ3MubGVuZ3RoID4gMSA/IEJvb2xlYW4oYXJnc1sxXSkgOiBmYWxzZTtcclxuICAgIHRoaXMuc291cmNlPSBTdHJpbmcoc291cmNlKTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9yaWdpbmFsPSB0aGlzLnNvdXJjZSA9PT0gdGhpcy5pZGVhbCA/IFwiXCIgOiBzb3VyY2U7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrYm94Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ2hlY2tib3hDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0NoZWNrYm94Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDaGVja2JveEludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdjaGVja2JveCcsIENoZWNrYm94Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZW1haWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhICpuZ0lmPVwiaXNMaW5rXCIgW2hyZWZdPVwiJ21haWx0bzonICsgc291cmNlXCIgKGtleXVwKT0na2V5dXAoJGV2ZW50KScgKGNsaWNrKT1cImNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLWVudmVsb3BlJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFpc0xpbmtcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cInNvdXJjZVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0OmhvdmVyIC5mYS1lbnZlbG9wZXtjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgOmhvc3QgLmZhe21hcmdpbjogMCA1cHg7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaXNMaW5rOiBib29sZWFuO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IGV2ZW50LnR5cGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBlbWFpbCBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdlbWFpbCcgfSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGVtYWlsXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRW1haWxQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV09PT0ndHJ1ZScgOiB0cnVlKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBlbWFpbEZyb21TdHJpbmcoc291cmNlOiBzdHJpbmcsIGlzTGluazogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB4OiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGlzTGluaykge1xyXG4gICAgICAgICAgICB4ID0gXCI8YSBocmVmPVxcJ21haWx0bzpcIitzb3VyY2UrXCJcXCcgPjxzcGFuIGNsYXNzPSdmYSBmYS1lbnZlbG9wZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj48c3Bhbj5cIiArIHNvdXJjZSArIFwiPC9zcGFuPjwvYT5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB4ID0gXCI8c3Bhbj48c3BhbiBjbGFzcz0nZmEgZmEtZW52ZWxvcGUnIHN0eWxlPSdtYXJnaW46IDAgNXB4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPjxzcGFuPlwiICsgc291cmNlICsgXCI8L3NwYW4+PC9zcGFuPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogdHJ1ZTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtYWlsRnJvbVN0cmluZyhzb3VyY2UsIGlzTGluayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZW1haWxGcm9tU3RyaW5nKGl0ZW0sIGlzTGluaykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi9lbWFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbWFpbFBpcGUgfSBmcm9tICcuL2VtYWlsLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRW1haWxDb21wb25lbnQsIEVtYWlsUGlwZV0sXHJcbiAgZXhwb3J0czogW0VtYWlsQ29tcG9uZW50LCBFbWFpbFBpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0VtYWlsQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSkgXHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRW1haWxJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbRW1haWxQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdlbWFpbCcsIEVtYWlsQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2VtYWlsJywgRW1haWxQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmb250LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibG9jYXRpb24gPT09ICdsZWZ0J1wiICAgIFtjbGFzc109XCJmb250XCIgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uICE9PSAncmVwbGFjZSdcIiBbdGV4dENvbnRlbnRdPVwiY29udGVudFwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxvY2F0aW9uID09PSAncmlnaHQnXCIgICBbY2xhc3NdPVwiZm9udFwiIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2NhdGlvbiA9PT0gJ3JlcGxhY2UnXCIgW2NsYXNzXT1cImZvbnRcIiBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgOmhvc3Qgc3BhbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb250Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBmb250OiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmZvbnQgPSBhcmdzWzBdO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJsZWZ0XCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBhY3Rpb24gPT09IFwiKlwiID8gc291cmNlIDogKFwicmVwbGFjZVwiID09PSBhY3Rpb24udG9Mb3dlckNhc2UoKSA/IFwiXCIgOiBzb3VyY2UpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGVtYWlsIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2ZvbnQnIH0pXHJcbmV4cG9ydCBjbGFzcyBGb250UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIGZvbnQ6ZmEgZmEtY2hlY2s6bGVmdDoqXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9udFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIik7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgZm9udEZyb21TdHJpbmcoZm9udCwgbG9jYXRpb24sIGFjdGlvbiwgY29udGVudCkge1xyXG4gICAgICAgIHJldHVybiAobG9jYXRpb24gPT09IFwibGVmdFwiID8gXHJcbiAgICAgICAgICAgICAgICAoZm9udCArIGNvbnRlbnQpIDogXHJcbiAgICAgICAgICAgICAgICAoKGxvY2F0aW9uID09PSBcInJpZ2h0XCIpID8gY29udGVudCArIGZvbnQgOiBmb250KSk7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBmb250ID0gYXJncy5sZW5ndGggPyBcIjxzcGFuIGNsYXNzPVxcJ1wiICsgYXJnc1swXSArIFwiXFwnIHN0eWxlPSdtYXJnaW46IDAgNXB4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlwiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0udG9Mb3dlckNhc2UoKSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGFjdGlvbiA9PT0gXCIqXCIgPyBzb3VyY2UgOiAoXCJyZXBsYWNlXCIgPT09IGFjdGlvbi50b0xvd2VyQ2FzZSgpID8gXCJcIiA6IHNvdXJjZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvbnRGcm9tU3RyaW5nKGZvbnQsIGxvY2F0aW9uLCBhY3Rpb24sIGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBzb3VyY2UubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmZvbnRGcm9tU3RyaW5nKGZvbnQsIGxvY2F0aW9uLCBhY3Rpb24sIGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBGb250Q29tcG9uZW50IH0gZnJvbSAnLi9mb250LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvbnRQaXBlIH0gZnJvbSAnLi9mb250LnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRm9udENvbXBvbmVudCwgRm9udFBpcGVdLFxyXG4gIGV4cG9ydHM6IFtGb250Q29tcG9uZW50LCBGb250UGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbRm9udENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9udEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGb250SW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ZvbnRQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdmb250JywgRm9udENvbXBvbmVudCk7XHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdmb250JywgRm9udFBpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ltYWdlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxpbWcgW3NyY109XCJzb3VyY2VcIiBcclxuICAgICAgICAgICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFxyXG4gICAgICAgICAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIiBcclxuICAgICAgICAgICAgIFt0aXRsZV09XCJhbHRcIiBcclxuICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImNoYW5nZSgkZXZlbnQpXCIgLz5gLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHdpZHRoOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IHN0cmluZztcclxuICAgIGFsdDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuYWx0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsdCB8fCAhdGhpcy5hbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGltYWdlIGRpc3BsYXkuIFxyXG4qIGlmIHRyYW5zZm9ybWluZyBvYmplY3QgaXMgYW4gYXJyYXksIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgd2lsbCBiZSB0cmFuc2Zvcm1lZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpbWFnZScgfSlcclxuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gaW1hZ2U6MjAwcHg6YXV0bzphbHR0ZXh0IE9SIGltYWdlOjIwMHB4OmFsdGVybmF0ZS10ZXh0IE9SIGltYWdlOjIwMHB4IE9SIGltYWdlXHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbWFnZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEltYWdlUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW1hZ2VQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpbmdUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgaWYoIWFsdCB8fCAhYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIGFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxpbWcgc3JjPVxcJ1wiK3NvdXJjZStcIlxcJyBzdHlsZT1cXCdcIisgd2lkdGggKyBoZWlnaHQgKyBcIlxcJyB0aXRsZT1cXCdcIithbHQrXCJcXCcgLz5cIjtcclxuICAgIH1cclxuICAgIGFycmF5VG9JbWFnZShzb3VyY2VzLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGg6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gXCJ3aWR0aDogXCIgKyBhcmdzWzBdICsgXCI7XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gXCJoZWlnaHQ6IFwiICsgYXJnc1sxXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhbHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIFwiXCIpO1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi9pbWFnZS5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ltYWdlQ29tcG9uZW50LCBJbWFnZVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtJbWFnZUNvbXBvbmVudCwgSW1hZ2VQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtJbWFnZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW1hZ2VJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbSW1hZ2VQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdpbWFnZScsIEltYWdlQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2ltYWdlJywgSW1hZ2VQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gKm5nSWY9XCJlZGl0TmFtZVwiPlxyXG4gICAgPGlucHV0ICNuYW1lRWRpdG9yXHJcbiAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgW2lkXT1cImlkXCJcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICBbdmFsdWVdPVwic291cmNlXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmIGZvcm1hdHRpbmcnXHJcbiAgICAgICAgY2xhc3M9J2xvY2tlZCcgXHJcbiAgICAgICAgdGFiaW5kZXg9JzAnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleWRvd24oJGV2ZW50KSdcclxuICAgICAgICAoY2xpY2spPVwiY2xpY2tOYW1lKCRldmVudClcIlxyXG4gICAgICAgIFtpbm5lckhUTUxdPVwic291cmNlID8gKHNvdXJjZSB8IGludG86Zm9ybWF0dGluZykgOiAnJm5ic3A7J1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lICYmICFmb3JtYXR0aW5nJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoa2V5dXApPSdrZXlkb3duKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrTmFtZSgkZXZlbnQpXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInNvdXJjZSA/IHNvdXJjZSA6ICcmbmJzcDsnXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIC5sb2NrZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAgICAgXHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgY3Vyc29yOiBiZWFtO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgOmhvc3QgLmxvY2tlZDpob3Zlcntib3JkZXI6IDFweCBzb2xpZCAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBmb3JtYXR0aW5nOnN0cmluZztcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIG9sZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lRWRpdG9yXCIpXHJcbiAgbmFtZUVkaXRvcjtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm5hbWVIb2xkZXJcIilcclxuICBuYW1lSG9sZGVyXHJcblxyXG4gIEBPdXRwdXQoXCJvbkludG9Db21wb25lbnRDaGFuZ2VcIilcclxuICBvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAga2V5dXAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2g7XHJcbiAgICBpZiAoKChjb2RlID49IDQ4KSAmJiAoY29kZSA8PSA5MCkpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDk2KSAmJiAoY29kZSA8PSAxMTEpKSB8fFxyXG4gICAgICAgICgoY29kZSA9PSAzMikgfHwgKGNvZGUgPT0gOCkpIHx8XHJcbiAgICAgICAgKChjb2RlID49IDE4NikgJiYgKGNvZGUgPD0gMjIyKSkpIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gMTMpIHx8IChjb2RlID09PSA5KSB8fCAoY29kZSA9PT0gMjcpICkge1xyXG4gICAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgIGlmICh0aGlzLm5hbWVIb2xkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUhvbGRlci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sNjYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJsdXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmVkaXROYW1lID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vbGRWYWx1ZSAhPT0gU3RyaW5nKHRoaXMuc291cmNlKSkge1xyXG4gICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgIGl0ZW06IHRoaXMuZGF0YVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleWRvd24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoKGNvZGUgPT09IDEzKSB8fCAoY29kZSA9PT0gOSkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKGV2ZW50LnRhcmdldCwgXCJjbGlja1wiKTtcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWVFZGl0b3IpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLm5hbWVFZGl0b3IubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sNjYpO1xyXG5cdFx0fVxyXG4gIH1cclxuXHJcbiAgY2xpY2tOYW1lKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZWRpdE5hbWUgPSB0cnVlO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUVkaXRvci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgfSw2Nik7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlcj0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogXCJcIjtcclxuICAgIHRoaXMuZm9ybWF0dGluZyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGFwcGVuZCBjaGFyYWN0ZXIocykgdG8gYSBjb250ZW50LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdhcHBlbmQnIH0pXHJcbmV4cG9ydCBjbGFzcyBBcHBlbmRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQ6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXBwZW5kUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIik7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgICAgXHJcbiAgICAgICAgY29uc3Qga2V5ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UgKyBrZXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0gKyBrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byByZXR1cm4gYSB0cmFuc2Zvcm1hdGlvbiBhcmd1bWVudCB3aGljaCBzaG91bGQgYmUgcGlwZWQgaW50byBhbm90aGVyIHRyYW5zZm9ybSBvYmplY3RcclxuKiB0byB0cmFuc2Zvcm0gdGhlIG9iamVjdCB2YWx1ZSBwYXNzZWQgdG8gdGhpcyBwaXBlLlxyXG4qIHRoZSBhcmd1bWVudHMgYXJlIGFzIGZvbGxvd3M6IDEpIGNvbmRpdGlvbiwgMikgdmFsdWUgdG8gZXZhbHVhdGUgdGhlIGNvbmRpdGlvbiwgMykgYWN0aW9uLCA0KSBlbHNlIGFjdGlvbi5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnaWYnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb25kaXRpb25hbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBmdW5jdGlvbiBzcGxpdChpdGVtOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpLm1hdGNoKC8oPz1cXFMpW15cIlxcOl0qKD86XCJbXlxcXFxcIl0qKD86XFxcXFtcXDpcXFNdW15cXFxcXCJdKikqXCJbXlwiXFw6XSopKi9nKS5maWx0ZXIoZnVuY3Rpb24oeCl7cmV0dXJuIHgubGVuZ3RofSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gaWY6PTp0cnVlOmZhIGZhLWNoZWNrOmZhIGZhLWJlbGxcclxuICAgICAgICAgICAgY29uc3QgYWNvbmRpdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgYWx0QWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IENvbmRpdGlvbmFsUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJ1wiJyA/IHJlc3VsdC5zdWJzdHJpbmcoMSxyZXN1bHQubGVuZ3RoLTEpIDogcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc3BsaXQocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGNvbnRlbnQsIHJlc3VsdCwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgY29uZGl0aW9uRnJvbVN0cmluZyhjb250ZW50LCBhY29uZGl0aW9uLCB2YWx1ZSwgYWN0aW9uLCBhbHRBY3Rpb24pIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFjb25kaXRpb24pe1xyXG4gICAgICAgICAgICBjYXNlIFwiPVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID09PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiIT1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCAhPT0gdmFsdWUgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIj5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA+IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI+PVwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID49IHZhbHVlID8gYWN0aW9uIDogYWx0QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI8XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgPCB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiPD1cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA8PSB2YWx1ZSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiflwiIDogXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ICE9PSB1bmRlZmluZWQgJiYgY29udGVudCAhPT0gbnVsbCAmJiBjb250ZW50ICE9PSBcIm51bGxcIiA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiIX5cIiA6IFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwgfHwgY29udGVudCA9PT0gXCJudWxsXCIgPyBhY3Rpb24gOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIn49XCIgOiBcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRlbnQgJiYgdmFsdWUgJiYgU3RyaW5nKGNvbnRlbnQpLnRvTG93ZXJDYXNlKCkgPT09IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSA/IGFjdGlvbiA6IGFsdEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5cIiA6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb250ZW50ID8gY29udGVudC5pbmRleE9mKGFjdGlvbikgOiBhbHRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBhY29uZGl0aW9uID0gIGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFsdEFjdGlvbiA9ICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25Gcm9tU3RyaW5nKHNvdXJjZSwgYWNvbmRpdGlvbiwgdmFsdWUsIGFjdGlvbiwgYWx0QWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2l0ZW1dID0gdGhpcy5jb25kaXRpb25Gcm9tU3RyaW5nKGl0ZW0sIGFjb25kaXRpb24sIHZhbHVlLCBhY3Rpb24sIGFsdEFjdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGpvaW4gYXJyYXlzIG9yIGpzb24gYXR0cmlidXRlIHZhbHVlcy5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnam9pbicgfSlcclxuZXhwb3J0IGNsYXNzIEpvaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy9qb2luIG9yIGpvaW46Y2hhcmFjdGVyXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSm9pblBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHsgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5qb2luKGFyZ3NbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzb3VyY2Vba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oYXJnc1swXSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gdGFrZSBhIHN0cmluZyBhcyBhIGtleSBhbmQgcmV0dXJucyB2YWx1ZSBvZiBrZXkgZnJvbSB0aGUgZ2l2ZW4gbWFwIG9iamVjdC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbWFwJyB9KVxyXG5leHBvcnQgY2xhc3MgTWFwUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIG1hcDprZXkxO3ZhbHVlMS9rZXkyO3ZhbHVlMi9rZXkzO3ZhbHVlM1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzRm9yKGxpc3QsIG1hcCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxpc3QubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hcFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtYXBba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZ2VNYXBwaW5nKG1hcHBpbmcpIHtcclxuICAgICAgICBjb25zdCBtYXAgPSBtYXBwaW5nO1xyXG4gICAgICAgIGlmKCBtYXBwaW5nLnRyaW0gKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9e307XHJcbiAgICAgICAgICAgIG1hcHBpbmcuc3BsaXQoJy8nKS5tYXAoKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0ga2V5LnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICBtYXBbeFswXV0gPSB4WzFdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWFwcGluZyA9IG1hcDsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcHBpbmc7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZU1hcHBpbmcoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW3NvdXJjZV0gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNGb3Ioc291cmNlLCBtYXApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBtYXNrIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbi4gXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIG1hc2tlZCBhbmQgdGhlIHJlc3VsdGluZyBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdtYXNrJyB9KVxyXG5leHBvcnQgY2xhc3MgTWFza1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyBtYXNrOjQ6KiAgT1IgbWFzazo0XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTWFza1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgcGFyc2VJbnQoYXJnc1sxXSwgMTApLCBhcmdzWzJdKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBuZXcgTWFza1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIG5ldyBNYXNrUGlwZSgpLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgbWFza1N0cmluZyhpdGVtLCB2aXNpYmxlRGlnaXRzLCBtYXNrV2l0aCkge1xyXG4gICAgICAgIGNvbnN0IG1hc2tlZFNlY3Rpb24gPSBpdGVtICA/IGl0ZW0uc2xpY2UoMCwgLXZpc2libGVEaWdpdHMpIDogXCJcIjtcclxuICAgICAgICBjb25zdCB2aXNpYmxlU2VjdGlvbiA9IGl0ZW0gPyBpdGVtLnNsaWNlKC12aXNpYmxlRGlnaXRzKSA6IFwiXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtID8gbWFza2VkU2VjdGlvbi5yZXBsYWNlKC8uL2csIG1hc2tXaXRoKSArIHZpc2libGVTZWN0aW9uIDogXCJcIjtcclxuICAgIH1cclxuICAgIG1hc2tBcnJheShpdGVtcywgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5tYXNrU3RyaW5nKGl0ZW0sIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB2aXNpYmxlRGlnaXRzID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IDQ7XHJcbiAgICAgICAgY29uc3QgbWFza1dpdGggPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogJyonO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza1N0cmluZyhzb3VyY2UsIHZpc2libGVEaWdpdHMsIG1hc2tXaXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza0FycmF5KHNvdXJjZSwgdmlzaWJsZURpZ2l0cywgbWFza1dpdGgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBwcmVwZW5kIGNoYXJhY3RlcihzKSB0byBhIGNvbnRlbnQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3ByZXBlbmQnIH0pXHJcbmV4cG9ydCBjbGFzcyBQcmVwZW5kUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIHByZXBlbmQ6c29tZXRoaW5nXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJlcGVuZFBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIpOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgICBcclxuICAgICAgICBjb25zdCBrZXkgPSAoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleSArIHNvdXJjZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5ICsgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBUYWtlcyBjYXJlIG9mIHByb2JsZW0gd2l0aCBzZWN1cml0eSBwcmVjYXVzaW9ucyB0aGF0IHN0cmlwIG91dCBjZXJ0YWluIGNoYXJhY3RlcnMgXHJcbiogZnJvbSBlbmQgcmVzdWx0IG9mIHlvdXIgcmVxdWVzdHMuXHJcbiogY29kZSB0YWtlbiBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM5NjgxMTYzL2FuZ3VsYXItMi1zYW5pdGl6aW5nLWh0bWwtc3RyaXBwZWQtc29tZS1jb250ZW50LXdpdGgtZGl2LWlkLXRoaXMtaXMtYnVnLW9yLWZlXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3Nhbml0aXplSHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNhbml0aXplSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2FuaXRpemVyOkRvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHY6c3RyaW5nKTpTYWZlSHRtbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHYpO1xyXG4gIH1cclxufSIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBtYXAgb2JqZWN0LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd2YWx1ZW9mJyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsdWVPZlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkge1xyXG4gICAgICAgICAgICAvLyB2YWx1ZW9mOmtleVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZhbHVlT2ZQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlT2ZTaW5nbGUoc291cmNlOiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdmFsdWVPZk11bHRpcGxlKHNvdXJjZXM6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy52YWx1ZU9mU2luZ2xlKHNvdXJjZSwga2V5KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShvYmplY3Q6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIGlmICgodHlwZW9mIG9iamVjdCA9PT0gXCJzdHJpbmdcIikgfHwgIShvYmplY3QgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZlNpbmdsZShvYmplY3QsIGFyZ3NbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mTXVsdGlwbGUob2JqZWN0LCBhcmdzWzBdKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gd3JhcCBhIGNvbnRlbnQgaW50byBjaGFyYWN0ZXIocykuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3dyYXAnIH0pXHJcbmV4cG9ydCBjbGFzcyBXcmFwUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIC8vIHdyYXA6c29tZXRoaW5nOnNvbWV0aGluZyAgT1Igd3JhcDpzb21ldGhpbmdcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBXcmFwUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogXCJcIiwgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IGFyZ3NbMV0pOyBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7ICBcclxuICAgICAgICBjb25zdCBwcmUgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBwb3N0PSBwcmUubGVuZ3RoID8gXHJcbiAgICAgICAgICAgICAgICAgICAgKGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcIlwiKSA6IHByZTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBrZXkgPSAoKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gYXJnc1swXSA6IFwiXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZSArIHNvdXJjZSArIHBvc3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByZSArIGl0ZW0gKyBwb3N0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBEYXRlUGlwZSxcclxuICBDdXJyZW5jeVBpcGUsXHJcbiAgRGVjaW1hbFBpcGUsXHJcbiAgSnNvblBpcGUsXHJcbiAgU2xpY2VQaXBlLFxyXG4gIFVwcGVyQ2FzZVBpcGUsXHJcbiAgTG93ZXJDYXNlUGlwZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5AUGlwZSh7bmFtZTonaW50byd9KVxyXG5leHBvcnQgY2xhc3MgSW5Ub1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvb2w6IENvbXBvbmVudFBvb2wpIHt9XHJcblxyXG4gIHRyYW5zZm9ybShjb250ZW50OiBhbnksIGxpc3Q6IHN0cmluZyk6IGFueSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gY29udGVudDtcclxuICAgIFxyXG4gICAgbGlzdC5zcGxpdChcInxcIikubWFwKCAoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX3RyYW5zZm9ybShyZXN1bHQsIHRoaXMuc3BsaXQoaXRlbSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3BsaXQoaXRlbTogc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLnRyaW0oKS5tYXRjaCgvKD89XFxTKVteXCJcXDpdKig/OlwiW15cXFxcXCJdKig/OlxcXFxbXFw6XFxTXVteXFxcXFwiXSopKlwiW15cIlxcOl0qKSovZykuZmlsdGVyKCh4KT0+eC5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10pIHtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLnBvb2wucmVnaXN0ZXJlZFBpcGVUcmFuc2Zvcm1hdGlvbihhcmdzWzBdLCBjb250ZW50LCBhcmdzLCB0aGlzLl90cmFuc2Zvcm0uYmluZCh0aGlzKSk7IFxyXG4gICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdCA6IGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi9waXBlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaW50b10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnRvRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIFxyXG4gICAgQElucHV0KFwicmF3Q29udGVudFwiKVxyXG4gICAgcmF3Q29udGVudDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvSWRcIilcclxuICAgIGludG9JZDogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBASW5wdXQoXCJpbnRvTmFtZVwiKVxyXG4gICAgaW50b05hbWU6IHN0cmluZztcclxuICAgIFxyXG4gICAgQElucHV0KFwiaW50b0RhdGFcIilcclxuICAgIGludG9EYXRhOiBhbnk7XHJcbiAgICBcclxuICAgIEBJbnB1dChcImludG9cIilcclxuICAgIGludG86IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoXCJvbkNvbXBvbmVudENoYW5nZVwiKVxyXG4gICAgb25Db21wb25lbnRDaGFuZ2UgPSAoZXZlbnQpID0+IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwdWJsaWMgZWw6RWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHBvb2w6IENvbXBvbmVudFBvb2wsXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICApIHtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzcGxpdChpdGVtOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gaXRlbS50cmltKCkubWF0Y2goLyg/PVxcUylbXlwiXFw6XSooPzpcIlteXFxcXFwiXSooPzpcXFxcW1xcOlxcU11bXlxcXFxcIl0qKSpcIlteXCJcXDpdKikqL2cpLmZpbHRlcigoeCk9PngubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wb29sLnJlZ2lzdGVyZWRGb3JDb21wb25lbnRXaXRoTmFtZWQoYXJnc1swXSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3QXJncyA9IGFyZ3Muc3BsaWNlKDEsYXJncy5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChhcmdzWzBdLCBjb250ZW50LCB0aGlzLmludG9JZCwgdGhpcy5pbnRvTmFtZSwgZGF0YSwgLi4ubmV3QXJncyk7IFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wb29sLnJlZ2lzdGVyZWRGb3JQaXBlVHJhbnNmb3JtYXRpb25OYW1lZChhcmdzWzBdKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnBvb2wucmVnaXN0ZXJlZFBpcGVUcmFuc2Zvcm1hdGlvbihhcmdzWzBdLCBjb250ZW50LCBhcmdzLCB0aGlzLl90cmFuc2Zvcm0uYmluZCh0aGlzKSwgZGF0YSk7IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHVua25vd24gZm9ybWF0dGVyXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUNvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICAgICBhcmdzWzBdLCBcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludG9JZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRvTmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID4gNSA/IGFyZ3NbNV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgfWNhdGNoKHgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyYW5zZm9ybUNvbXBvbmVudCh0eXBlLCBjb250ZW50OiBhbnksIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZGF0YTogYW55LC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBjb250ZW50ID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiBjb250ZW50ID09PSBcImJvb2xlYW5cIiB8fCBPYmplY3Qua2V5cyhjb250ZW50KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gIHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcih0eXBlKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ1wiICsgdHlwZSsgXCInIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5pZCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnNlcnZpY2UgPSB0aGlzLnBvb2wucmVnaXN0ZXJlZFNlcnZpY2VGb3JDb21wb25lbnQodHlwZSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQudHJhbnNmb3JtKGNvbnRlbnQuc291cmNlID8gY29udGVudC5zb3VyY2UgOiBjb250ZW50LCBkYXRhLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQub25JbnRvQ29tcG9uZW50Q2hhbmdlICYmIHRoaXMub25Db21wb25lbnRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25JbnRvQ29tcG9uZW50Q2hhbmdlLnN1YnNjcmliZSh0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgcmVzdWx0ID0gY29udGVudDtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNvbnRlbnQgPT09IFwibnVtYmVyXCIgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNvbnRlbnQgPT09IFwiYm9vbGVhblwiIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbnRlbnQpLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeCA9IHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcih0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ggPT09IG51bGwgfHwgc3ggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIGNvbXBvbmVudCAnXCIgKyB0eXBlKyBcIicgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4LmlkID0gaWQgKyAnLScgKyAoY291bnRlcisrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3gubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4LnNlcnZpY2UgPSB0aGlzLnBvb2wucmVnaXN0ZXJlZFNlcnZpY2VGb3JDb21wb25lbnQodHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4LnRyYW5zZm9ybShzb3VyY2Uuc291cmNlID8gc291cmNlLnNvdXJjZSA6IHNvdXJjZSwgZGF0YSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeC5vbkludG9Db21wb25lbnRDaGFuZ2UgJiYgdGhpcy5vbkNvbXBvbmVudENoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3gub25JbnRvQ29tcG9uZW50Q2hhbmdlLnN1YnNjcmliZSh0aGlzLm9uQ29tcG9uZW50Q2hhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcmVkQ29tcG9uZW50Rm9yKG5hbWUpOiBQaXBlQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb29sLnJlZ2lzdGVyZWRDb21wb25lbnQobmFtZSwgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMudmlld1JlZiwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMuaW50byB8fCB0aGlzLnJhd0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gIHRoaXMucmF3Q29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW50bykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRvLnNwbGl0KFwifFwiKS5tYXAoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKHJlc3VsdCwgdGhpcy5zcGxpdChpdGVtKSwgdGhpcy5pbnRvRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDogUGlwZUNvbXBvbmVudCA9IHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcCkgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wLnRyYW5zZm9ybShyZXN1bHQsIFtdLCB0aGlzLmludG9EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkN1c3RvbSBjb21wb25lbnQgJ3NwYW4nIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcDogUGlwZUNvbXBvbmVudCA9IHRoaXMucmVnaXN0ZXJlZENvbXBvbmVudEZvcihcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wKSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcC50cmFuc2Zvcm0oc291cmNlLCBbXSwgdGhpcy5pbnRvRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3VzdG9tIGNvbXBvbmVudCAnc3BhbicgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIERhdGVQaXBlLFxyXG4gICAgQ3VycmVuY3lQaXBlLFxyXG4gICAgRGVjaW1hbFBpcGUsXHJcbiAgICBKc29uUGlwZSxcclxuICAgIFNsaWNlUGlwZSxcclxuICAgIFVwcGVyQ2FzZVBpcGUsXHJcbiAgICBMb3dlckNhc2VQaXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7QXBwZW5kUGlwZX0gZnJvbSAnLi9hcHBlbmQucGlwZSc7XHJcbmltcG9ydCB7Q29uZGl0aW9uYWxQaXBlfSBmcm9tICcuL2NvbmRpdGlvbmFsLnBpcGUnO1xyXG5pbXBvcnQge0pvaW5QaXBlfSBmcm9tICcuL2pvaW4ucGlwZSc7XHJcbmltcG9ydCB7TWFwUGlwZX0gZnJvbSAnLi9tYXAucGlwZSc7XHJcbmltcG9ydCB7TWFza1BpcGV9IGZyb20gJy4vbWFzay5waXBlJztcclxuaW1wb3J0IHtQcmVwZW5kUGlwZX0gZnJvbSAnLi9wcmVwZW5kLnBpcGUnO1xyXG5pbXBvcnQge1Nhbml0aXplSHRtbFBpcGV9IGZyb20gJy4vc2FuaXRpemVIdG1sLnBpcGUnO1xyXG5pbXBvcnQge1ZhbHVlT2ZQaXBlfSBmcm9tICcuL3ZhbHVlb2YucGlwZSc7XHJcbmltcG9ydCB7V3JhcFBpcGV9IGZyb20gJy4vd3JhcC5waXBlJztcclxuaW1wb3J0IHsgSW5Ub1BpcGUgfSBmcm9tICcuL2ludG8ucGlwZSc7XHJcbmltcG9ydCB7IEludG9EaXJlY3RpdmUgfSBmcm9tICcuL2ludG8uZGlyZWN0aXZlJ1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgQ29uZGl0aW9uYWxQaXBlLFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBQcmVwZW5kUGlwZSxcclxuICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICBWYWx1ZU9mUGlwZSxcclxuICAgIFdyYXBQaXBlLFxyXG4gICAgSW5Ub1BpcGUsXHJcbiAgICBJbnRvRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBcHBlbmRQaXBlLFxyXG4gICAgQ29uZGl0aW9uYWxQaXBlLFxyXG4gICAgSm9pblBpcGUsXHJcbiAgICBNYXBQaXBlLFxyXG4gICAgTWFza1BpcGUsXHJcbiAgICBQcmVwZW5kUGlwZSxcclxuICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICBWYWx1ZU9mUGlwZSxcclxuICAgIFdyYXBQaXBlLFxyXG4gICAgSW5Ub1BpcGUsXHJcbiAgICBJbnRvRGlyZWN0aXZlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uUGlwZXNNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENvbW1vblBpcGVzTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEYXRlUGlwZSxcclxuICAgICAgICBDdXJyZW5jeVBpcGUsXHJcbiAgICAgICAgRGVjaW1hbFBpcGUsXHJcbiAgICAgICAgSnNvblBpcGUsXHJcbiAgICAgICAgU2xpY2VQaXBlLFxyXG4gICAgICAgIFVwcGVyQ2FzZVBpcGUsXHJcbiAgICAgICAgTG93ZXJDYXNlUGlwZSxcclxuICAgIFxyXG4gICAgICAgIEFwcGVuZFBpcGUsXHJcbiAgICAgICAgQ29uZGl0aW9uYWxQaXBlLFxyXG4gICAgICAgIEpvaW5QaXBlLFxyXG4gICAgICAgIE1hcFBpcGUsXHJcbiAgICAgICAgTWFza1BpcGUsXHJcbiAgICAgICAgUHJlcGVuZFBpcGUsXHJcbiAgICAgICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgICAgICBWYWx1ZU9mUGlwZSxcclxuICAgICAgICBXcmFwUGlwZSxcclxuICAgICAgICBDb21wb25lbnRQb29sLFxyXG4gICAgICAgIEluVG9QaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignYXBwZW5kJywgQXBwZW5kUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2lmJywgQ29uZGl0aW9uYWxQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignam9pbicsIEpvaW5QaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbWFwJywgTWFwUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ21hc2snLCBNYXNrUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3ByZXBlbmQnLCBQcmVwZW5kUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3ZhbHVlb2YnLCBWYWx1ZU9mUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3dyYXAnLCBXcmFwUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCdzbGljZScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIHNsaWNlIDU6MTIgT1Igc2xpY2UgNVxyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcclxuICAgICAgICBsZXQgc3RhcnQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XHJcbiAgICAgICAgbGV0IGVuZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIGVuZD0gcGFyc2VJbnQoYXJnc1syXSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzbGljZXIgPW5ldyBTbGljZVBpcGUoKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZW5kID8gc2xpY2VyLnRyYW5zZm9ybShjb250ZW50LCBzdGFydCwgZW5kKSA6IHNsaWNlci50cmFuc2Zvcm0oY29udGVudCwgc3RhcnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmQgPyBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQsIGVuZCkgOiBzbGljZXIudHJhbnNmb3JtKGNudCwgc3RhcnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbnVtYmVyJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gbnVtYmVyOmVuX1VTOjIgICBvciBudW1iZXI6ZW5fVVMgb3IgbnVtYmVyXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGxldCBudW1Mb2NhbCA9IFwiZW5fVVNcIjtcclxuICAgICAgICBsZXQgbnVtRGVjaW1hbD0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgbnVtTG9jYWwgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICBudW1EZWNpbWFsPSBhcmdzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWNpbWFsZXIgPW5ldyBEZWNpbWFsUGlwZShudW1Mb2NhbCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bURlY2ltYWwgPyBkZWNpbWFsZXIudHJhbnNmb3JtKGNvbnRlbnQsIG51bURlY2ltYWwpIDogZGVjaW1hbGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobnVtRGVjaW1hbCA/IGRlY2ltYWxlci50cmFuc2Zvcm0oY250LCBudW1EZWNpbWFsKSA6IGRlY2ltYWxlci50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2N1cnJlbmN5JyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gY3VycmVuY3k6ZW5fVVMgb3IgY3VycmVuY3lcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgY29uc3QgY3AgPSBuZXcgQ3VycmVuY3lQaXBlKGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiBcImVuX1VTXCIpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbG93ZXJjYXNlJyxcclxuICAgICAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gbG93ZXJjYXNlXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGNvbnN0IGxjcCA9ICBuZXcgTG93ZXJDYXNlUGlwZSgpO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBsY3AudHJhbnNmb3JtKGNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBjb250ZW50Lm1hcCgoY250KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChsY3AudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBwb29sLnJlZ2lzdGVyUGlwZVRyYW5zZm9ybWF0aW9uKCd1cHBlcmNhc2UnLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyB1cHBlcmNhc2VcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICAgICAgY29uc3QgdWNwID0gIG5ldyBVcHBlckNhc2VQaXBlKCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHVjcC50cmFuc2Zvcm0oY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKChjbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVjcC50cmFuc2Zvcm0oY250KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ2pzb24nLFxyXG4gICAgICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBqc29uXHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGNvbnN0IGpjcCA9ICBuZXcgSnNvblBpcGUoKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gamNwLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goamNwLnRyYW5zZm9ybShjbnQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignZGF0ZScsXHJcbiAgICAgIChjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdLCBjYWxsYmFjaz86IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIGRhdGU6ZW5fVVM6TU1kZHl5IE9SIGRhdGU6XFxcIk1NL2RkL3l5eXkgaGg6c3NcXFwiXHJcbiAgICAgICAgLy8gY29uc3QgZGF0ZSA9ICgodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpIHx8ICEoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSkgPyBuZXcgRGF0ZShjb250ZW50KSA6IGNvbnRlbnQ7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGxldCBkYXRlTG9jYWwgPSBcImVuX1VTXCI7XHJcbiAgICAgICAgbGV0IGRhdGVGb3JtYXQ9IGFyZ3NbMV07XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICBkYXRlTG9jYWwgPSBhcmdzWzFdO1xyXG4gICAgICAgICAgICBkYXRlRm9ybWF0PSBhcmdzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlciA9bmV3IERhdGVQaXBlKGRhdGVMb2NhbCk7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikgfHwgIShjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGVyLnRyYW5zZm9ybShjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgY29udGVudC5tYXAoKGNudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGF0ZXIudHJhbnNmb3JtKGNudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5pbXBvcnQgeyBDb21tb25QaXBlc01vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24tcGlwZXMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29tbW9uUGlwZXNNb2R1bGUuZm9yUm9vdCgpXSxcclxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0lucHV0Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtJbnB1dENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSW5wdXRJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdpbnB1dCcsIElucHV0Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCwgUGlwZVNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWdyb3VwLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1pdGVtXCIgKm5nRm9yPVwibGV0IHggb2Ygb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiIFxyXG4gICAgICAgICAgICBbaWRdPVwibmFtZSArIGlcIiBcclxuICAgICAgICAgICAgW25hbWVdPVwibmFtZSArICh0eXBlID09PSAncmFkaW8nID8gJycgOiBpKVwiIFxyXG4gICAgICAgICAgICBbdmFsdWVdPVwieC52YWx1ZSA/IHgudmFsdWUgOiB4XCIgXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cImlzU2VsZWN0ZWQoeClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiLz5cclxuICAgICAgICA8bGFiZWwgW2Zvcl09XCJuYW1lICsgaVwiIFt0ZXh0Q29udGVudF09XCJ4LmxhYmVsID8geC5sYWJlbCA6IHhcIj48L2xhYmVsPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBhbnk7XHJcbiAgc291cmNlOiBhbnk7XHJcbiAgb3B0aW9uczogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzZXJ2aWNlOiBQaXBlU2VydmljZUNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gIGNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaSA9IHRoaXMuc291cmNlLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKGkgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc291cmNlLnNwbGljZShpLDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaXNTZWxlY3RlZChpdGVtKSB7XHJcbiAgICBjb25zdCB4aXRlbSA9IGl0ZW0udmFsdWUgPyBpdGVtLnZhbHVlIDogaXRlbTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgcmV0dXJuIHhpdGVtID09PSB0aGlzLnNvdXJjZTtcclxuICAgIH1cclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zb3VyY2UubWFwKCh4KSA9PiB7XHJcbiAgICAgIGlmICh4aXRlbSA9PT0geCkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmdldERhdGFGb3IodGhpcy5uYW1lLCB0aGlzLmlkLCBkYXRhKTtcclxuICAgIHRoaXMudHlwZSA9IChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IElucHV0R3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dEdyb3VwQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSW5wdXRHcm91cENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbSW5wdXRHcm91cENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRHcm91cEludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBJbnB1dEdyb3VwSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnaW5wdXRncm91cCcsIElucHV0R3JvdXBDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdqc29uLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwianNvbi12aWV3XCIgW3RleHRDb250ZW50XT1cInNvdXJjZSB8IGpzb25cIj48L3NwYW4+YCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHh9XHJcbiAgICAgICAgLmpzb24tdmlldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICB1bmljb2RlLWJpZGk6IGVtYmVkOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpzb25Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyAsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgSnNvbkNvbXBvbmVudCB9IGZyb20gJy4vanNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSnNvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0pzb25Db21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0pzb25Db21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEpzb25JbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSnNvbkludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2pzb24nLCBKc29uQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGFzdHVwZGF0ZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuICpuZ0lmPVwic2hvd0ljb25cIiBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZm9ybWF0RGF0ZSgpXCI+PC9zcGFuPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgICAgIC5mYSB7bWFyZ2luOjAgNXB4IDAgMH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXN0VXBkYXRlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IGFueTtcclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2hvd0ljb246IGJvb2xlYW47XHJcbiAgICBcclxuICAgIFxyXG4gICAgY291bnQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0ljb24gPSAoYXJncyAmJiBhcmdzLmxlbmd0aCAmJiBhcmdzWzBdID09PSAndHJ1ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoKSB7XHJcblx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRjb25zdCBtaW51dGUgPSA2MDAwMDsvLyBvbmUgbWludXRlXHJcblx0XHRjb25zdCBob3VyID0gMzYwMDAwMDsvLyBvbmUgaG91ciBsaW1pdFxyXG5cdFx0Y29uc3QgZGF5ID0gODY0MDAwMDA7Ly8gMjQgaG91cnMgbGltaXRcclxuXHRcdGNvbnN0IHdlZWsgPSA2MDQ4MDAwMDA7Ly8gNyBkYXlzIGxpbWl0XHJcblx0XHRjb25zdCBtb250aCA9IDYwNDgwMDAwMCo0Oy8vIDcgZGF5cyBsaW1pdFxyXG5cdFx0Y29uc3QgeWVhciA9IDYwNDgwMDAwMCo1MjsvLyA3IGRheXMgbGltaXRcclxuXHRcdGxldCByZXN1bHQgPSBcIlwiO1xyXG5cclxuXHRcdGxldCBkaWZmID0gY3VycmVudERhdGUuZ2V0VGltZSgpIC0gdGhpcy5zb3VyY2UuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmKGRpZmYgPD0gbWludXRlKSB7Ly8gdXAgdG8gYSBtaW51dGVcclxuXHRcdFx0cmVzdWx0ID0gXCJzZWNvbmRzIGFnb1wiO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSBob3VyKSB7Ly8gdXAgdG8gYW4gaG91clxyXG5cdFx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZi9taW51dGUpO1xyXG5cdFx0XHRsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmYgLSAobWludXRlcyAqIG1pbnV0ZSkpLzEwMDApO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKG1pbnV0ZXMgPCAyID8gXCJhIG1pbnV0ZVwiIDogbWludXRlcyArIFwiIG1pbnV0ZXMgXCIpICsgKHNlY29uZHMgPiAwID8gXCIgYW5kIFwiICsgc2Vjb25kcyArIFwiIHNlY29uZHMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IGRheSkgey8vIHVwIHRvIGEgZGF5XHJcblx0XHRcdGxldCBob3VycyA9IE1hdGguZmxvb3IoZGlmZi9ob3VyKTtcclxuXHRcdFx0bGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmIC0gKGhvdXJzICogaG91cikpL21pbnV0ZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXN1bHQgPSAoaG91cnMgPCAyID8gXCJhbiBob3VyXCIgOiBob3VycyArIFwiIGhvdXJzIFwiKSArIChtaW51dGVzID4gMCA/IFwiIGFuZCBcIiArIG1pbnV0ZXMgKyBcIiBtaW51dGVzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSB3ZWVrKSB7Ly8gdXAgdG8gYSB3ZWVrXHJcblx0XHRcdGxldCBkYXlzID0gTWF0aC5mbG9vcihkaWZmL2RheSk7XHJcblx0XHRcdGxldCBob3VycyA9IE1hdGguZmxvb3IoKGRpZmYgLSAoZGF5cyAqIGRheSkpL2hvdXIpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKGRheXMgPCAyID8gXCJhIGRheVwiIDogZGF5cyArIFwiIGRheXMgXCIpICsgKGhvdXJzID4gMCA/IFwiIGFuZCBcIiArIGhvdXJzICsgXCIgaG91cnMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9ZWxzZSBpZihkaWZmIDw9IG1vbnRoKSB7Ly8gdXAgdG8gYSBtb250aFxyXG5cdFx0XHRsZXQgd2Vla3MgPSBNYXRoLmZsb29yKGRpZmYvd2Vlayk7XHJcblx0XHRcdGxldCBkYXlzID0gTWF0aC5mbG9vcigoZGlmZiAtICh3ZWVrcyAqIHdlZWspKS9kYXkpO1xyXG5cclxuXHRcdFx0cmVzdWx0ID0gKHdlZWtzIDwgMiA/IFwiYSB3ZWVrXCIgOiB3ZWVrcyArIFwiIHdlZWtzIFwiKSArIChkYXlzID4gMCA/IFwiIGFuZCBcIiArIGRheXMgKyBcIiBkYXlzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fWVsc2UgaWYoZGlmZiA8PSB5ZWFyKSB7Ly8gdXAgdG8gYSB3ZWVrXHJcblx0XHRcdGxldCBtb250aHMgPSBNYXRoLmZsb29yKGRpZmYvbW9udGgpO1xyXG5cdFx0XHRsZXQgd2Vla3MgPSBNYXRoLmZsb29yKChkaWZmIC0gKG1vbnRocyAqIG1vbnRoKSkvd2Vlayk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAobW9udGhzIDwgMiA/IFwiYSBtb250aFwiIDogbW9udGhzICsgXCIgbW9udGhzIFwiKSArICh3ZWVrcyA+IDAgPyBcIiBhbmQgXCIgKyB3ZWVrcyArIFwiIHdlZWtzIGFnb1wiIDogXCIgYWdvXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHllYXJzID0gTWF0aC5mbG9vcihkaWZmL3llYXIpO1xyXG5cdFx0XHRsZXQgbW9udGhzID0gTWF0aC5mbG9vcigoZGlmZiAtICh5ZWFycyAqIHllYXIpKS9tb250aCk7XHJcblxyXG5cdFx0XHRyZXN1bHQgPSAoeWVhcnMgPCAyID8gXCJhIHllYXJcIiA6IHllYXJzICsgXCIgeWVhcnMgXCIpICsgKG1vbnRocyA+IDAgPyBcIiBhbmQgXCIgKyBtb250aHMgKyBcIiBtb250aHMgYWdvXCIgOiBcIiBhZ29cIik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTGFzdFVwZGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vbGFzdHVwZGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGFzdFVwZGF0ZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0xhc3RVcGRhdGVDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0xhc3RVcGRhdGVDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExhc3RVcGRhdGVJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ2xhc3R1cGRhdGUnLCBMYXN0VXBkYXRlQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlrZS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxhIFxyXG4gICAgICAgIGlkPSdsaWtlLXt7aWR9fScgXHJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCIgXHJcbiAgICAgICAgY2xhc3M9XCJsaWtlXCIgXHJcbiAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cInNlbGVjdGVkXCIgXHJcbiAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIiBcclxuICAgICAgICAoY2xpY2spPSd0b2dnbGVDb3VudCgkZXZlbnQpJz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy11cFwiICpuZ0lmPVwidGh1bWJzdXAgJiYgIXNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwIHNlbGVjdGVkXCIgKm5nSWY9XCJ0aHVtYnN1cCAmJiBzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXRodW1icy1kb3duXCIgKm5nSWY9XCIhdGh1bWJzdXAgJiYgIXNlbGVjdGVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtdGh1bWJzLWRvd24gc2VsZWN0ZWRcIiAqbmdJZj1cIiF0aHVtYnN1cCAmJiBzZWxlY3RlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50c1wiICpuZ0lmPVwic2hvd0NvdW50XCIgW3RleHRDb250ZW50XT1cImZvcm1hdHRlclNvdXJjZSgpXCI+PC9zcGFuPlxyXG4gICAgPC9hPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4O3Bvc2l0aW9uOiByZWxhdGl2ZX1cclxuICAgICAgICAubGlrZSB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgICAgICAubGlrZSAuY291bnRze21hcmdpbi1sZWZ0OiA1cHg7fVxyXG4gICAgICAgIC5saWtlIC5mYSB7bWFyZ2luOiAwO31cclxuICAgICAgICAubGlrZSAuZmEuc2VsZWN0ZWQge2NvbG9yOiBncmVlbjt9XHJcbiAgICAgICAgLmxpa2U6aG92ZXIsIC5saWtlOmhvdmVyIC5mYSwgLmxpa2U6aG92ZXIgLmZhLnNlbGVjdGVke2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWtlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IGFueTtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBhbnk7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgc2hvd0NvdW50OiBib29sZWFuO1xyXG4gICAgdGh1bWJzdXA6IGJvb2xlYW47XHJcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgdGh1bWJzID0gXCJcIjtcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnNob3dDb3VudCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoICYmIGFyZ3NbMF0gPT09ICd0cnVlJyk7XHJcbiAgICAgICAgdGhpcy50aHVtYnN1cCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSAmJiBhcmdzWzFdID09PSAndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMua2V5ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMudGh1bWJzID0gdGhpcy50aHVtYnN1cCA/IFwidGh1bWJzLXVwLWl0ZW1zXCIgOiBcInRodW1icy1kb3duLWl0ZW1zXCI7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICh0aGlzLmdldEl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSkgIT09IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICBrZXl1cChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIFxyXG4gICAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBpZiAoc2F2ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBKU09OLnBhcnNlKHNhdmVkKTtcclxuICAgICAgICAgIHNhdmVkSXRlbXMucHVzaChpZCk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRJdGVtcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoW2lkXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdXJjZSArKztcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVtb3ZlSXRlbShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRodW1icyk7XHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zID0gSlNPTi5wYXJzZShzYXZlZCk7XHJcbiAgICAgICAgICBjb25zdCBpID0gc2F2ZWRJdGVtcy5pbmRleE9mKGlkKTtcclxuICAgICAgICAgIHNhdmVkSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRodW1icywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRJdGVtcykpO1xyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRJdGVtKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudGh1bWJzKTtcclxuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHNhdmVkKSB7XHJcbiAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zOiBhbnlbXSA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xyXG4gICAgICAgICAgY29uc3QgaSA9IHNhdmVkSXRlbXMuaW5kZXhPZihpZCk7XHJcbiAgICBcclxuICAgICAgICAgIGZvdW5kID0gaSA8IDAgPyBudWxsIDogc2F2ZWRJdGVtc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1hdHRlclNvdXJjZSgpIHtcclxuICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZTtcclxuICAgICAgICAgIGlmICh0aGlzLnNvdXJjZSA+IDEwMDApIHtcclxuICAgICAgICAgICAgICByZXN1bHQgPSAodGhpcy5zb3VyY2UvMTAwMCkudG9GaXhlZCgxKSArIFwiIGtcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICB0b2dnbGVDb3VudChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuZ2V0SXRlbSh0aGlzLmRhdGFbdGhpcy5rZXldKTtcclxuICAgICAgICAgIGlmICghZXhpc3RpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKHRoaXMuZGF0YVt0aGlzLmtleV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0odGhpcy5kYXRhW3RoaXMua2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy50aHVtYnNcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IExpa2VDb21wb25lbnQgfSBmcm9tICcuL2xpa2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xpa2VDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtMaWtlQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtMaWtlQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaWtlSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExpa2VJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdsaWtlJywgTGlrZUNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpbmstY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBbaHJlZl09XCJzb3VyY2VcIiBcclxuICAgICAgICBbdGFyZ2V0XT1cInRhcmdldFwiIFxyXG4gICAgICAgIFt0ZXh0Q29udGVudF09XCJ0aXRsZVwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknIFxyXG4gICAgICAgIChjbGljayk9XCJjaGFuZ2UoJGV2ZW50KVwiPjwvYT5gLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0YXJnZXQ6IHN0cmluZztcclxuXHRvbkludG9Db21wb25lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICB0aGlzLnRpdGxlID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgXHJcbiAgICAgICAgaWYoIXRoaXMudGl0bGUgfHwgIXRoaXMudGl0bGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBzb3VyY2UuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBxIDwgMCA/IHNvdXJjZSA6IHNvdXJjZS5zdWJzdHJpbmcoMCwgcSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgbGluay5cclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbGluaycgfSlcclxuZXhwb3J0IGNsYXNzIExpbmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gbGluazp0YXJnZXQ6dGV4dCBvciBsaW5rOnRleHQgb3IgbGlua1xyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpbmtQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5rUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiLCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGlua1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgXCJcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1RvTGluayhzb3VyY2UsIHRhcmdldCwgdGl0bGUpIHtcclxuICAgICAgICBpZighdGl0bGUgfHwgIXRpdGxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIHRpdGxlID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPGEgaHJlZj0nXCIrc291cmNlK1wiJyB0YXJnZXQ9J1wiK3RhcmdldCtcIic+XCIrdGl0bGUrXCI8L2E+XCI7XHJcbiAgICB9XHJcbiAgICBhcnJheVRvSW1hZ0xpbmsoc291cmNlcywgdGFyZ2V0LCB0aXRsZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb0xpbmsoc291cmNlLCB0YXJnZXQsIFwiXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIjtcclxuICAgICAgICBjb25zdCB0aXRsZTpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvTGluayhzb3VyY2UsIHRhcmdldCwgdGl0bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheVRvSW1hZ0xpbmsoc291cmNlLCB0YXJnZXQsIHRpdGxlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9saW5rLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpbmtQaXBlIH0gZnJvbSAnLi9saW5rLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGlua0NvbXBvbmVudCxMaW5rUGlwZV0sXHJcbiAgZXhwb3J0czogW0xpbmtDb21wb25lbnQsTGlua1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0xpbmtDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmtJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGlua0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtMaW5rUGlwZV1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnbGluaycsIExpbmtDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbignbGluaycsIExpbmtQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwaG9uZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgICpuZ0lmPVwiaXNMaW5rXCIgW2hyZWZdPVwiJ3RlbDonICsgbm9ybWFsaXplU291cmNlKClcIiAoa2V5dXApPSdrZXl1cCgkZXZlbnQpJyAoY2xpY2spPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtcGhvbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImZvcm1hdHRlZFNvdXJjZSgpXCI+PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaXNMaW5rXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJmb3JtYXR0ZWRTb3VyY2UoKVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIDpob3N0IGE6aG92ZXIgLmZhLXBob25le2NvbG9yOiAjZmFiZGFiO31cclxuICAgICAgICA6aG9zdCAuZmF7bWFyZ2luOiAwIDVweDt9XHJcbiAgICAgICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpc0xpbms6IGJvb2xlYW47XHJcbiAgICBmb3JtYXR0aW5nOiBib29sZWFuO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLmlzTGluaz0gYXJncy5sZW5ndGggPyBhcmdzWzBdID09PSAndHJ1ZScgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmc9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gPT09ICd0cnVlJyA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU291cmNlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0WzBdID09PSAnMScgPyByZXN1bHQuc3Vic3RyaW5nKDEpIDogcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQgKyAnO2V4dD0nICsgcmVzdWx0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSByZXN1bHQuc2xpY2UoMCwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJysxJyArIGIgKyAnO2V4dD0nICsgZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGZvcm1hdHRlZFNvdXJjZSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5zb3VyY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGluZykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnNvdXJjZS5yZXBsYWNlKC9bXFwgXFwtXFwuXFwoXFwpXFwrXS9nLCAnJyk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFswXSA9PT0gJzEnID8gcmVzdWx0LnN1YnN0cmluZygxKSA6IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJysxICcgKyByZXN1bHQucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYiA9IHJlc3VsdC5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gcmVzdWx0LnNsaWNlKDEwKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcrMSAnICsgYi5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCBcIigkMSkkMi0kM1wiKTsgXHJcbiAgICAgICAgICAgICAgICByZXN1bHQrPSAoJyBleHQuICcgKyBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAga2V5dXAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgaXRlbTogZXZlbnQudHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGVtYWlsIGRpc3BsYXkuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Bob25lJyB9KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gcHJlcGVuZDpzb21ldGhpbmdcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQaG9uZVBpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXT09PSd0cnVlJyA6IGZhbHNlLCBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdID09PSAndHJ1ZScgOiBmYWxzZSk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgcGhvbmVGcm9tU3RyaW5nKHNvdXJjZSwgbGluaywgZm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmsgPyBcclxuICAgICAgICAgICAgXCI8YSBocmVmPSd0ZWw6XCIgKyB0aGlzLm5vcm1hbGl6ZVNvdXJjZShzb3VyY2UpICsgXCInPjxzcGFuIGNsYXNzPSdmYSBmYS1waG9uZScgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj48c3Bhbj5cIiArIChmb3JtYXQgPyB0aGlzLmZvcm1hdHRlZFNvdXJjZShzb3VyY2UpIDogc291cmNlKSArIFwiPC9zcGFuPjwvYT5cIiA6XHJcbiAgICAgICAgICAgIFwiPHNwYW4+PHNwYW4gY2xhc3M9J2ZhIGZhLXBob25lJyBzdHlsZT0nbWFyZ2luOiAwIDVweCcgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj48c3Bhbj5cIiArIChmb3JtYXQgPyB0aGlzLmZvcm1hdHRlZFNvdXJjZShzb3VyY2UpIDogc291cmNlKSArIFwiPC9zcGFuPjwvc3Bhbj5cIjtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkgeyAgICBcclxuICAgICAgICBjb25zdCBsaW5rID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gKChhcmdzICYmIGFyZ3MubGVuZ3RoPjEpID8gYXJnc1sxXSA6IGZhbHNlKTtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBob25lRnJvbVN0cmluZyhzb3VyY2UsIGxpbmssIGZvcm1hdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMucGhvbmVGcm9tU3RyaW5nKGl0ZW0sIGxpbmssIGZvcm1hdCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBub3JtYWxpemVTb3VyY2Uoc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc291cmNlLnJlcGxhY2UoL1tcXCBcXC1cXC5cXChcXClcXCtdL2csICcnKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICcxJyA/IHJlc3VsdC5zdWJzdHJpbmcoMSkgOiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIHJlc3VsdCArICc7ZXh0PScgKyByZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHJlc3VsdC5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSByZXN1bHQuc2xpY2UoMTApO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEnICsgYiArICc7ZXh0PScgKyBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmb3JtYXR0ZWRTb3VyY2Uoc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc291cmNlLnJlcGxhY2UoL1tcXCBcXC1cXC5cXChcXClcXCtdL2csICcnKTtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRbMF0gPT09ICcxJyA/IHJlc3VsdC5zdWJzdHJpbmcoMSkgOiByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIHJlc3VsdC5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCBcIigkMSkkMi0kM1wiKTsgXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgY29uc3QgYiA9IHJlc3VsdC5zbGljZSgwLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSByZXN1bHQuc2xpY2UoMTApO1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnKzEgJyArIGIucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgXCIoJDEpJDItJDNcIik7IFxyXG4gICAgICAgICAgICByZXN1bHQrPSAoJyBleHQuICcgKyBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBQaG9uZUNvbXBvbmVudCB9IGZyb20gJy4vcGhvbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGhvbmVQaXBlIH0gZnJvbSAnLi9waG9uZS5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Bob25lQ29tcG9uZW50LCBQaG9uZVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtQaG9uZUNvbXBvbmVudCwgUGhvbmVQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtQaG9uZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGhvbmVJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUGhvbmVJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbUGhvbmVQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdwaG9uZScsIFBob25lQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3Bob25lJywgUGhvbmVQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYXRpbmctY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz0ncmF0aW5nJz5cclxuICAgICAgICA8c3BhbiBjbGFzcz0nZmEgZmEtc3RhcicgYXJpYS1oaWRkZW49J3RydWUnICpuZ0Zvcj1cImxldCB4IG9mIHZhbHVlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyLWhhbGYnIGFyaWEtaGlkZGVuPSd0cnVlJyAqbmdJZj1cImZsb2F0ICE9IHZhbHVlXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9J3JhdGUtdmFsdWUnIFt0ZXh0Q29udGVudF09XCJzb3VyY2VcIj48L3NwYW4+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICAucmF0aW5nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IGFueVtdID0gW107XHJcbiAgICBmbG9hdDogYW55O1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5mbG9hdCA9IHBhcnNlRmxvYXQoc291cmNlKTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQoc291cmNlLCAxMCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGEgcmFpdGluZyBkaXNwbGF5LlxyXG4qL1xyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyYWl0aW5nJyB9KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgc3RhdGljIHRyYW5zZm9ybWF0aW9uTWV0aG9kKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBmdW5jdGlvbiAgKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmF0aW5nUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBcIlwiKTsgXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIHJhdGVTdHJpbmcoc291cmNlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChzb3VyY2UsIDEwKTtcclxuICAgICAgICBjb25zdCBmbG9hdCA9IHBhcnNlRmxvYXQoc291cmNlKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSBcIjxzcGFuIGNsYXNzPSdyYXRpbmcnPlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKyApIHtcclxuICAgICAgICAgICAgeCArPSBcIjxzcGFuIGNsYXNzPSdmYSBmYS1zdGFyJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9zcGFuPlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggZmxvYXQgIT09IHZhbHVlICkge1xyXG4gICAgICAgICAgICB4ICs9IFwiPHNwYW4gY2xhc3M9J2ZhIGZhLXN0YXItaGFsZicgYXJpYS1oaWRkZW49J3RydWUnPjwvc3Bhbj5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICB4ICs9IFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdyYXRlLXZhbHVlJz5cIiArIHNvdXJjZSArIFwiPC9zcGFuPlwiO1xyXG5cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhdGVTdHJpbmcoc291cmNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgc291cmNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5yYXRlU3RyaW5nKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL3JhdGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdQaXBlIH0gZnJvbSAnLi9yYXRpbmcucGlwZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtSYXRpbmdDb21wb25lbnQsIFJhdGluZ1BpcGVdLFxyXG4gIGV4cG9ydHM6IFtSYXRpbmdDb21wb25lbnQsIFJhdGluZ1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1JhdGluZ0NvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmF0aW5nSW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFJhdGluZ0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtSYXRpbmdQaXBlXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdyYXRpbmcnLCBSYXRpbmdDb21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigncmF0aW5nJywgUmF0aW5nUGlwZS50cmFuc2Zvcm1hdGlvbk1ldGhvZCgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50LCBQaXBlU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNlbGVjdCB0YWJpbmRleD1cIjBcIiBbbXVsdGlwbGVdPVwibXVsdGlzZWxlY3QgPyB0cnVlOm51bGxcIiAoY2xpY2spPVwiY2xpY2soJGV2ZW50KVwiIChjaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB4IG9mIG9wdGlvbnNcIiBbc2VsZWN0ZWRdPVwic291cmNlID09PSB4ID8gdHJ1ZSA6IG51bGxcIiAgW3ZhbHVlXT1cInhcIiBbdGV4dENvbnRlbnRdPVwieFwiPjwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IHtkaXNwbGF5OnRhYmxlO2Zsb2F0OmxlZnQ7bWluLWhlaWdodDogMjNweH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHJcbiAgZGF0YTogYW55O1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBtdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG4gIHNlcnZpY2U6IFBpcGVTZXJ2aWNlQ29tcG9uZW50O1xyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gIGNoYW5nZShldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc291cmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgaXRlbTogdGhpcy5kYXRhXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2U9IHNvdXJjZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuZ2V0RGF0YUZvcih0aGlzLm5hbWUsIHRoaXMuaWQsIGRhdGEpO1xyXG4gICAgdGhpcy5tdWx0aXNlbGVjdCA9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA9PT0gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlbGVjdENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NlbGVjdENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU2VsZWN0Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2VsZWN0SW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnc2VsZWN0JywgU2VsZWN0Q29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hhcmUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBpZD0nc2hhcmUtY29tbWVudC17e2lkfX0nIFxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiIFxyXG4gICAgICAgIGNsYXNzPSdzaGFyZS1pdGVtLXRpcHMnIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknXHJcbiAgICAgICAgKGNsaWNrKT0ndG9nZ2xlU2hhcmUoKSc+XHJcbiAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXNoYXJlLWFsdFwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwic2hhcmVcIj5zaGFyZTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxzcGFuIGlkPSdzaGFyZS1jb21tZW50LXt7aWR9fS10aXBzJyBjbGFzcz0ndGlwcycgKm5nSWY9J3Nob3VsZERpc3BsYXknPlxyXG4gICAgICA8c3BhbiBjbGFzcz0nc29jaWFsLXJlZmVyYWwnPlxyXG4gICAgICAgIDxhICpuZ0Zvcj1cImxldCBzaGFyZSBvZiBzaGFyZUxpc3RcIiBcclxuICAgICAgICAgICAgKGtleXVwKT0na2V5dXAoJGV2ZW50KSdcclxuICAgICAgICAgICAgKGNsaWNrKT0nY2hhbmdlKHNoYXJlKSdcclxuICAgICAgICAgICAgW2NsYXNzXT0nc2hhcmUuaWNvbicgdGFyZ2V0PSdfYmxhbmsnIFxyXG4gICAgICAgICAgICBbaHJlZl09J3NoYXJlLmhyZWYnPjxzcGFuIGNsYXNzPSdvZmYtc2NyZWVuJyBbdGV4dENvbnRlbnRdPVwic2hhcmUudGl0bGVcIj48L3NwYW4+PC9hPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbmAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIzcHg7cG9zaXRpb246IHJlbGF0aXZlfVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHM6aG92ZXIge2NvbG9yOiAjZmFiZGFiO31cclxuICAgIC5zaGFyZS1pdGVtLXRpcHMgLmZhIHttYXJnaW46IDA7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwczpob3ZlciAuZmF7Y29sb3I6ICNmYWJkYWI7fVxyXG4gICAgLnNoYXJlLWl0ZW0tdGlwcyAuc2hhcmV7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbiAgICAudGlwcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLnRpcHMgLnNvY2lhbC1yZWZlcmFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAudGlwcyAuc29jaWFsLXJlZmVyYWwgLmZhIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgMXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXBzIC5zb2NpYWwtcmVmZXJhbCAuZmE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuICAgIHNob3VsZERpc3BsYXkgPSBmYWxzZTtcclxuICAgIHNvdXJjZTogc3RyaW5nOyAvLyBpdCBzaG91bGQgYmUgYSBsaW5rIHJlZmVyZW5jZSB0byB3aGF0IGlzIGJlaW5nIHNoYXJlZC5cclxuXHRpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2hhcmVMaXN0ID0gW107IC8vIGxpc3Qgb2Ygc2l0ZXMgdG8gc2hvdyBvbiBzaGFyZSB2aWV3LlxyXG4gICAgXHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHNoYXJlSW5mbyh0eXBlLCBhZGRyZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLScgKyB0eXBlLFxyXG4gICAgICAgICAgICBocmVmOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NoYXJlIHdpdGggJysgdHlwZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGtleXVwKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICBpdGVtOiBldmVudC50aXRsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlU2hhcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG91bGREaXNwbGF5ID0gIXRoaXMuc2hvdWxkRGlzcGxheTtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6ICdTaGFyZSBvcHRpb25zJyxcclxuICAgICAgICAgICAgaXRlbTogdGhpcy5zaG91bGREaXNwbGF5ID8gJ29wZW4nIDogJ2Nsb3NlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSAgXHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSAoYXJnc1swXSBpbnN0YW5jZW9mIEFycmF5KSA/IGFyZ3NbMF0gOiBhcmdzO1xyXG4gICAgICAgIGxpc3QubWFwKCAoYXJnKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggYXJnID09PSAnZmFjZWJvb2snKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdmYWNlYm9vaycsICdodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICd0d2l0dGVyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygndHdpdHRlcicsICdodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlP3RpdGxlPSZhbXA7dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnbGlua2VkaW4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlTGlzdC5wdXNoKHRoaXMuc2hhcmVJbmZvKCdsaW5rZWRpbicsJ2h0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT90aXRsZT0mYW1wO3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ2dvb2dsZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2dvb2dsZS1wbHVzJywgJ2h0dHBzOi8vcGx1cy5nb29nbGUuY29tL3NoYXJlP3VybD0nK3NvdXJjZSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGFyZyA9PT0gJ3BpbnRlcmVzdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2dvb2dsZS1wbHVzJywgJ2h0dHA6Ly9waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvbGluay8/dXJsPScrc291cmNlKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggYXJnID09PSAnZGlnZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ2RpZ2cnLCAnaHR0cDovL2RpZ2cuY29tL3N1Ym1pdD91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdnZXQtcG9ja2V0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygnZ2V0LXBvY2tldCcsICdodHRwczovL2dldHBvY2tldC5jb20vZWRpdD91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICd4aW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZUxpc3QucHVzaCh0aGlzLnNoYXJlSW5mbygneGluZycsICdodHRwczovL3d3dy54aW5nLmNvbS9hcHAvdXNlcj9vcD1zaGFyZSZ1cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgPT09ICdzdHVtYmxldXBvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0LnB1c2godGhpcy5zaGFyZUluZm8oJ3N0dW1ibGV1cG9uJywgJ2h0dHA6Ly93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Jytzb3VyY2UpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtTaGFyZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NoYXJlQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtTaGFyZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcmVJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCdzaGFyZScsIFNoYXJlQ29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9waXBlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3Bhbi1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBbdGV4dENvbnRlbnRdPVwic291cmNlXCI+PC9zcGFuPmAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwYW5Db21wb25lbnQgaW1wbGVtZW50cyBQaXBlQ29tcG9uZW50IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gICAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBTcGFuQ29tcG9uZW50IH0gZnJvbSAnLi9zcGFuLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtTcGFuQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU3BhbkNvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU3BhbkNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3BhbkludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTcGFuSW50b1BpcGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSAgcG9vbDogQ29tcG9uZW50UG9vbCkge1xyXG4gICAgcG9vbC5yZWdpc3RlckNvbXBvbmVudCgnc3BhbicsIFNwYW5Db21wb25lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RleHQtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cInRleHQtd3JhcHBlclwiICpuZ0lmPVwiZWRpdE5hbWVcIj5cclxuICAgICAgPHRleHRhcmVhICNuYW1lRWRpdG9yXHJcbiAgICAgICAgW2lkXT1cImlkXCJcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICBbdmFsdWVdPVwic291cmNlXCJcclxuICAgICAgICBbYXR0ci5tYXhsZW5ndGhdPVwibGltaXQgPyBsaW1pdCA6IG51bGxcIlxyXG4gICAgICAgIFtyb3dzXT1cInJvd3NcIlxyXG4gICAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiIFxyXG4gICAgICAgIChrZXl1cCk9J2tleXVwKCRldmVudCknPjwvdGV4dGFyZWE+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiY291bnRlclwiIGNsYXNzPVwiY291bnRlclwiIFxyXG4gICAgICAgIFt0ZXh0Q29udGVudF09XCJsaW1pdCA/IChsaW1pdCAtIHNvdXJjZS5sZW5ndGgpICsgJyByZW1haW5pbmcnIDogc291cmNlLmxlbmd0aCArICcgdHlwZWQnXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gI25hbWVIb2xkZXJcclxuICAgICAgICAqbmdJZj0nIWVkaXROYW1lJ1xyXG4gICAgICAgIGNsYXNzPSdsb2NrZWQnIFxyXG4gICAgICAgIHRhYmluZGV4PScwJyBcclxuICAgICAgICAoY2xpY2spPSdjbGljaygkZXZlbnQpJ1xyXG4gICAgICAgIChrZXl1cCk9J2ZvY3VzKCRldmVudCknXHJcbiAgICAgICAgW2lubmVySFRNTF09XCJzb3VyY2VcIj5cclxuICAgIDwvc3Bhbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgLmxvY2tlZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDMzcHg7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgICAgICBcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC13cmFwcGVye2JveC1zaXppbmc6IGJvcmRlci1ib3g7ZGlzcGxheTp0YWJsZTt3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgLnRleHQtd3JhcHBlciB0ZXh0YXJlYSB7Ym94LXNpemluZzogYm9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO2N1cnNvcjogYmVhbTt3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgLmNvdW50ZXJ7ZGlzcGxheTogdGFibGU7ZmxvYXQ6cmlnaHQ7Y29sb3I6ICNkZGQ7fVxyXG4gICAgICAgIDpob3N0IHtib3gtc2l6aW5nOiBib3JkZXItYm94O3dpZHRoOiAxMDAlO2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4O21pbi13aWR0aDogMzNweDt9XHJcbiAgICAgICAgOmhvc3QgLmxvY2tlZDpob3Zlcntib3JkZXI6IDFweCBzb2xpZCAjZmFiZGFiO31cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcblxyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJvd3MgPSA0O1xyXG4gIGxpbWl0ID0gMDtcclxuICBlZGl0TmFtZSA9IGZhbHNlO1xyXG4gIGNvdW50ZXIgPSBmYWxzZTtcclxuICBvbGRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBAVmlld0NoaWxkKFwibmFtZUVkaXRvclwiKVxyXG4gIG5hbWVFZGl0b3I7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJuYW1lSG9sZGVyXCIpXHJcbiAgbmFtZUhvbGRlclxyXG5cclxuICBAT3V0cHV0KFwib25JbnRvQ29tcG9uZW50Q2hhbmdlXCIpXHJcbiAgb25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG5cclxuICB9XHJcbiAga2V5dXAoZXZlbnQ6IGFueSkgeyAgICBcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmICgoY29kZSA9PT0gNDgpIHx8IChjb2RlID09PSA4KSkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoKChjb2RlID4gNDgpICYmIChjb2RlIDw9IDkwKSkgfHxcclxuICAgICAgICAoKGNvZGUgPj0gOTYpICYmIChjb2RlIDw9IDExMSkpIHx8IChjb2RlID09IDMyKSB8fFxyXG4gICAgICAgICgoY29kZSA+PSAxODYpICYmIChjb2RlIDw9IDIyMikpKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMubGltaXQgfHwgdGhpcy5zb3VyY2UubGVuZ3RoIDwgdGhpcy5saW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoKGNvZGUgPT09IDEzKSB8fCAoY29kZSA9PT0gOSkgfHwgKGNvZGUgPT09IDI3KSApIHtcclxuICAgICAgdGhpcy5lZGl0TmFtZSA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub2xkVmFsdWUgIT09IFN0cmluZyh0aGlzLnNvdXJjZSkpIHtcclxuICAgICAgICB0aGlzLm9uSW50b0NvbXBvbmVudENoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgaXRlbTogdGhpcy5vbGRWYWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBTdHJpbmcodGhpcy5zb3VyY2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgIGlmICh0aGlzLm5hbWVIb2xkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubmFtZUhvbGRlci5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sOTkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJsdXIoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuZWRpdE5hbWUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9sZFZhbHVlICE9PSBTdHJpbmcodGhpcy5zb3VyY2UpKSB7XHJcbiAgICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2UsXHJcbiAgICAgICAgaXRlbTogdGhpcy5vbGRWYWx1ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbGRWYWx1ZSA9IFN0cmluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvY3VzKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC50YXJnZXQuY2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgdGhpcy5lZGl0TmFtZSA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIGlmICh0aGlzLm5hbWVFZGl0b3IpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5uYW1lRWRpdG9yLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIik7XHJcbiAgICAgIH1cclxuICAgIH0sOTkpO1xyXG59XHJcblxyXG4gIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICB0aGlzLm9sZFZhbHVlID0gc291cmNlO1xyXG4gICAgdGhpcy5yb3dzID0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogNDtcclxuICAgIHRoaXMubGltaXQgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogMDtcclxuICAgIHRoaXMuY291bnRlciA9IGFyZ3MubGVuZ3RoID4gMiA/IGFyZ3NbMl0gOiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL3RleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcbmltcG9ydCB7IENvbW1vblBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi1waXBlcy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb21tb25QaXBlc01vZHVsZS5mb3JSb290KCldLFxyXG4gIGRlY2xhcmF0aW9uczogW1RleHRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUZXh0Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUZXh0Q29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW50b1BpcGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRleHRJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENvbXBvbmVudFBvb2wpICBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCd0ZXh0JywgVGV4dENvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RhYmxlLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRhYmxlIFtpZF09XCJpZFwiIGNsYXNzPVwicGlwZWQtdGFibGVcIj5cclxuICAgICAgICA8Y2FwdGlvbiAqbmdJZj1cIm5hbWVcIiBbdGV4dENvbnRlbnRdPVwibmFtZVwiPjwvY2FwdGlvbj5cclxuICAgICAgICA8dHI+PHRoIHNjb3BlPVwiY29sXCIgKm5nRm9yPVwibGV0IGhlYWRlciBvZiBoZWFkZXJzXCIgW3RleHRDb250ZW50XT1cImhlYWRlclwiPjwvdGg+PC90cj5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzXCI+PHRkICpuZ0Zvcj1cImxldCBoZWFkZXIgb2YgaGVhZGVyc1wiIFt0ZXh0Q29udGVudF09XCJyb3dbaGVhZGVyXVwiPjwvdGQ+PC90cj5cclxuICAgIDwvdGFibGU+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDpob3N0IC5waXBlZC10YWJsZSB7cGFkZGluZzogMDt3aWR0aDogMTAwJTtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO31cclxuICAgICAgICA6aG9zdCAucGlwZWQtdGFibGUgY2FwdGlvbiB7YmFja2dyb3VuZC1jb2xvcjogI2MzZTVlMjtib3JkZXItcmFkaXVzOiAycHg7Y29sb3I6ICMxYjFiMWI7Y2FwdGlvbi1zaWRlOiB0b3A7Zm9udC1zaXplOiAxNHB4O3BhZGRpbmc6IDVweCA2cHg7bWFyZ2luLWJvdHRvbTogMTVweDt0ZXh0LWFsaWduOiBsZWZ0O31cclxuICAgICAgICA6aG9zdCAucGlwZWQtdGFibGUgdGgge3VzZXItc2VsZWN0OiBub25lO2hlaWdodDogMjRweDtwb3NpdGlvbjogcmVsYXRpdmU7d2hpdGUtc3BhY2U6IG5vd3JhcDtmb250LXdlaWdodDogbm9ybWFsO3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Zm9udC1zaXplOiAxNHB4O3BhZGRpbmctdG9wOiA2cHg7cGFkZGluZy1ib3R0b206IDZweDt0ZXh0LWFsaWduOiBsZWZ0O31cclxuICAgICAgICA6aG9zdCAucGlwZWQtdGFibGUgdGQge3BhZGRpbmctbGVmdDogM3B4O21pbi1oZWlnaHQ6IDIxcHg7fVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzID0gW107XHJcbiAgICByb3dzID0gW107XHJcblx0b25JbnRvQ29tcG9uZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgZGF0YTogYW55LCBhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5pZD0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogJyc7XHJcbiAgICAgICAgdGhpcy5uYW1lPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2goc291cmNlKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRIZWFkZXJzKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVswXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHNvdXJjZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SGVhZGVycyhzb3VyY2VbMF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MucHVzaCh7dmFsdWU6IGl0ZW19KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMucHVzaCgndmFsdWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm93cy5wdXNoKHt2YWx1ZTogc291cmNlfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVycy5wdXNoKCd2YWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SGVhZGVycyhvYmo6IGFueSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiogRGVmaW5lcyBhIGZpbHRlciB0byBjb252ZXJ0IHVybCBpbnRvIGFuIGFkZHJlc3MgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAndGFibGUnIH0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1hdGlvbk1ldGhvZCgpIHtcclxuICAgICAgICBjb25zdCB4ID0gZnVuY3Rpb24gKGNvbnRlbnQ6IGFueSwgYXJnczogc3RyaW5nW10sIGNhbGxiYWNrPzogYW55LCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFibGVQaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAnJywgYXJncy5sZW5ndGggPiAyID8gYXJnc1syXSA6IHVuZGVmaW5lZCk7IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBpZD0gYXJncy5sZW5ndGggPyBhcmdzWzBdIDogJyc7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZFRhYmxlKHNvdXJjZSwgcm93cywgaGVhZGVycyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiPHRhYmxlIHN0eWxlPSd3aWR0aDogMTAwJScgaWQ9J1wiICsgaWQgKyBcIic+XCIgKyAobmFtZSA/IFwiPGNhcHRpb24gc3R5bGU9J3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNWUyOyc+XCIgKyBuYW1lICsgXCI8L2NhcHRpb24+XCIgOiBcIlwiKSArIFwiPHRyPlwiO1xyXG4gICAgICAgIGhlYWRlcnMubWFwKFxyXG4gICAgICAgICAgICAoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gKFwiPHRoIHN0eWxlPSd0ZXh0LWFsaWduOiBsZWZ0O2ZvbnQtd2VpZ2h0Om5vcm1hbDt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOycgc2NvcGU9J2NvbCc+XCIgKyBoZWFkZXIgKyBcIjwvdGg+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXN1bHQgKz0gXCI8L3RyPlwiO1xyXG4gICAgICAgIHJvd3MubWFwKFxyXG4gICAgICAgICAgICAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCI8dHI+XCI7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAoXCI8dGQ+XCIgKyByb3dbaGVhZGVyXSArIFwiPC90ZD5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjwvdHI+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlc3VsdCArPSBcIjwvdGFibGU+XCI7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJ1aWxkVGFibGUoc291cmNlOiBhbnksIHJvd3M6IGFueVtdLCBoZWFkZXJzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByb3dzLnB1c2goc291cmNlKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRIZWFkZXJzKHNvdXJjZSwgaGVhZGVycyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVswXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEhlYWRlcnMoc291cmNlWzBdLCBoZWFkZXJzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKHt2YWx1ZTogaXRlbX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMucHVzaCgndmFsdWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaCh7dmFsdWU6IHNvdXJjZX0pO1xyXG4gICAgICAgICAgICBoZWFkZXJzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRIZWFkZXJzKG9iajogYW55LCBoZWFkZXJzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9iaikubWFwKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVQaXBlIH0gZnJvbSAnLi90YWJsZS5waXBlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQucG9vbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RhYmxlQ29tcG9uZW50LCBUYWJsZVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudCwgVGFibGVQaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtUYWJsZUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVJbnRvUGlwZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGFibGVJbnRvUGlwZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgVGFibGVQaXBlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChDb21wb25lbnRQb29sKSBwb29sOiBDb21wb25lbnRQb29sKSB7XHJcbiAgICBwb29sLnJlZ2lzdGVyQ29tcG9uZW50KCd0YWJsZScsIFRhYmxlQ29tcG9uZW50KTtcclxuICAgIHBvb2wucmVnaXN0ZXJQaXBlVHJhbnNmb3JtYXRpb24oJ3RhYmxlJywgVGFibGVQaXBlLnRyYW5zZm9ybWF0aW9uTWV0aG9kKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaXBlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL3BpcGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2aWRlby1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDx2aWRlbyBjb250cm9scz1cInRydWVcIiBcclxuICAgICAgICAocGxheWluZyk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGVuZGVkKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAocGF1c2UpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChzZWVrZWQpPVwiY2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIChlcnJvcik9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW3NyY109XCJzb3VyY2VcIiBcclxuICAgICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBcclxuICAgICAgICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiXHJcbiAgICAgICAgW3RpdGxlXT1cImFsdFwiPjwvdmlkZW8+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge2Rpc3BsYXk6dGFibGU7ZmxvYXQ6bGVmdDttaW4taGVpZ2h0OiAyM3B4fVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZGVvQ29tcG9uZW50IGltcGxlbWVudHMgUGlwZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuICAgIHdpZHRoOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IHN0cmluZztcclxuICAgIGFsdDogc3RyaW5nO1xyXG5cdG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IChhcmdzICYmIGFyZ3MubGVuZ3RoKSA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAxKSA/IGFyZ3NbMV0gOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuYWx0ID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFsdCB8fCAhdGhpcy5hbHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHEgPCAwID8gc291cmNlIDogc291cmNlLnN1YnN0cmluZygwLCBxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0Lmxhc3RJbmRleE9mKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWx0ID0gZCA8IDAgPyB0IDogdC5zdWJzdHJpbmcoZCsxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkludG9Db21wb25lbnRDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdHlwZTogZXZlbnQudHlwZSxcclxuICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGV2ZW50LnRhcmdldC5hdXRvcGxheSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBldmVudC50YXJnZXQuY29udHJvbHMsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZXZlbnQudGFyZ2V0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgZW5kZWQ6IGV2ZW50LnRhcmdldC5lbmRlZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBldmVudC50YXJnZXQuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBwYXVzZWQ6IGV2ZW50LnRhcmdldC5wYXVzZWQsXHJcbiAgICAgICAgICAgICAgICBtdXRlZDogZXZlbnQudGFyZ2V0Lm11dGVkLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWU6IGV2ZW50LnRhcmdldC5jdXJyZW50VGltZSxcclxuICAgICAgICAgICAgICAgIHZvbHVtZTogZXZlbnQudGFyZ2V0LnZvbHVtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gaW1hZ2UgZGlzcGxheS4gXHJcbiogaWYgdHJhbnNmb3JtaW5nIG9iamVjdCBpcyBhbiBhcnJheSwgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSB3aWxsIGJlIHRyYW5zZm9ybWVkIGFuZCB0aGUgcmVzdWx0aW5nIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3ZpZGVvJyB9KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtYXRpb25NZXRob2QoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IGZ1bmN0aW9uICAoY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSwgY2FsbGJhY2s/OiBhbnksIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gdmlkZW86MjAwcHg6YXV0bzphbHR0ZXh0IE9SIHZpZGVvOjIwMHB4OmFsdGVybmF0ZS10ZXh0IE9SIHZpZGVvOjIwMHB4IE9SIHZpZGVvXHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWRlb1BpcGUoKS50cmFuc2Zvcm0oY29udGVudCwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZpZGVvUGlwZSgpLnRyYW5zZm9ybShjb250ZW50LCBhcmdzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlkZW9QaXBlKCkudHJhbnNmb3JtKGNvbnRlbnQsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBzdHJpbmdUb1ZpZGVvKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgaWYoIWFsdCB8fCAhYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIGFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjx2aWRlbyBzcmM9XFwnXCIrc291cmNlK1wiXFwnIHN0eWxlPVxcJ1wiKyB3aWR0aCArIGhlaWdodCArIFwiXFwnIHRpdGxlPVxcJ1wiK2FsdCtcIlxcJyAgY29udHJvbHM9XFwndHJ1ZVxcJyAvPlwiO1xyXG4gICAgfVxyXG4gICAgYXJyYXlUb1ZpZGVvKHNvdXJjZXMsIHdpZHRoLCBoZWlnaHQsIGFsdCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5zdHJpbmdUb1ZpZGVvKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCB3aWR0aDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBcIndpZHRoOiBcIiArIGFyZ3NbMF0gKyBcIjtcIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0OnN0cmluZyA9IChhcmdzICYmIGFyZ3MubGVuZ3RoID4gMSkgPyBcImhlaWdodDogXCIgKyBhcmdzWzFdICsgXCI7XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGFsdDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDIpID8gYXJnc1syXSA6IFwiXCI7XHJcbiAgICAgICAgaWYgKCh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB8fCAhKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb1ZpZGVvKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlUb1ZpZGVvKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgXCJcIik7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi92aWRlby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWRlb1BpcGUgfSBmcm9tICcuL3ZpZGVvLnBpcGUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb29sIH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVmlkZW9Db21wb25lbnQsIFZpZGVvUGlwZV0sXHJcbiAgZXhwb3J0czogW1ZpZGVvQ29tcG9uZW50LCBWaWRlb1BpcGVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1ZpZGVvQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWRlb0ludG9QaXBlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBWaWRlb0ludG9QaXBlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtWaWRlb1BpcGVdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQ29tcG9uZW50UG9vbCkgIHBvb2w6IENvbXBvbmVudFBvb2wpIHtcclxuICAgIHBvb2wucmVnaXN0ZXJDb21wb25lbnQoJ3ZpZGVvJywgVmlkZW9Db21wb25lbnQpO1xyXG4gICAgcG9vbC5yZWdpc3RlclBpcGVUcmFuc2Zvcm1hdGlvbigndmlkZW8nLCBWaWRlb1BpcGUudHJhbnNmb3JtYXRpb25NZXRob2QoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDb21tb25QaXBlc01vZHVsZSB9IGZyb20gJy4vY29tbW9uL2NvbW1vbi1waXBlcy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgQWRkcmVzc0ludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9hZGRyZXNzL2FkZGVzcy1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEF1ZGlvSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2F1ZGlvL2F1ZGlvLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vY2FsZW5kYXIvY2FsZW5kYXItcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBDaGVja2JveEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IEVtYWlsSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2VtYWlsL2VtYWlsLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgRm9udEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9mb250L2ZvbnQtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJbWFnZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9pbWFnZS9pbWFnZS1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IElucHV0SW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2lucHV0L2lucHV0LXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgSW5wdXRHcm91cEludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9pbnB1dGdyb3VwL2lucHV0Z3JvdXAtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBKc29uSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2pzb24vanNvbi1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IExhc3RVcGRhdGVJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vbGFzdHVwZGF0ZS9sYXN0dXBkYXRlLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgTGlrZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9saWtlL2xpa2UtcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBMaW5rSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL2xpbmsvbGluay1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFBob25lSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3Bob25lL3Bob25lLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgUmF0aW5nSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3JhdGluZy9yYXRpbmctcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZWxlY3RJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlSW50b1BpcGVNb2R1bGUgfSBmcm9tICcuL3NoYXJlL3NoYXJlLXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgU3BhbkludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi9zcGFuL3NwYW4tcGlwZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUYWJsZUludG9QaXBlTW9kdWxlIH0gZnJvbSAnLi90YWJsZS90YWJsZS1waXBlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRleHRJbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vdGV4dC90ZXh0LXBpcGUubW9kdWxlJztcclxuaW1wb3J0IHsgVmlkZW9JbnRvUGlwZU1vZHVsZSB9IGZyb20gJy4vdmlkZW8vdmlkZW8tcGlwZS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBDb21tb25QaXBlc01vZHVsZS5mb3JSb290KCksXHJcbiAgICBBZGRyZXNzSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQXVkaW9JbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBDYWxlbmRhckludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIENoZWNrYm94SW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRW1haWxJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBGb250SW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgSW1hZ2VJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBJbnB1dEludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIElucHV0R3JvdXBJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBKc29uSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTGFzdFVwZGF0ZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIExpa2VJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBMaW5rSW50b1BpcGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUGhvbmVJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBSYXRpbmdJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTZWxlY3RJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTaGFyZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFNwYW5JbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBUYWJsZUludG9QaXBlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRleHRJbnRvUGlwZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBWaWRlb0ludG9QaXBlTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25QaXBlc01vZHVsZSxcclxuICAgIEFkZHJlc3NJbnRvUGlwZU1vZHVsZSxcclxuICAgIEF1ZGlvSW50b1BpcGVNb2R1bGUsXHJcbiAgICBDYWxlbmRhckludG9QaXBlTW9kdWxlLFxyXG4gICAgQ2hlY2tib3hJbnRvUGlwZU1vZHVsZSxcclxuICAgIEVtYWlsSW50b1BpcGVNb2R1bGUsXHJcbiAgICBGb250SW50b1BpcGVNb2R1bGUsXHJcbiAgICBJbWFnZUludG9QaXBlTW9kdWxlLFxyXG4gICAgSW5wdXRJbnRvUGlwZU1vZHVsZSxcclxuICAgIElucHV0R3JvdXBJbnRvUGlwZU1vZHVsZSxcclxuICAgIEpzb25JbnRvUGlwZU1vZHVsZSxcclxuICAgIExhc3RVcGRhdGVJbnRvUGlwZU1vZHVsZSxcclxuICAgIExpa2VJbnRvUGlwZU1vZHVsZSxcclxuICAgIExpbmtJbnRvUGlwZU1vZHVsZSxcclxuICAgIFBob25lSW50b1BpcGVNb2R1bGUsXHJcbiAgICBSYXRpbmdJbnRvUGlwZU1vZHVsZSxcclxuICAgIFNlbGVjdEludG9QaXBlTW9kdWxlLFxyXG4gICAgU2hhcmVJbnRvUGlwZU1vZHVsZSxcclxuICAgIFNwYW5JbnRvUGlwZU1vZHVsZSxcclxuICAgIFRhYmxlSW50b1BpcGVNb2R1bGUsXHJcbiAgICBUYWJsZUludG9QaXBlTW9kdWxlLFxyXG4gICAgVGV4dEludG9QaXBlTW9kdWxlLFxyXG4gICAgVmlkZW9JbnRvUGlwZU1vZHVsZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXSxcclxuICBwcm92aWRlcnM6IFtcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEludG9QaXBlTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiUGlwZSIsIkluamVjdGFibGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNVU1RPTV9FTEVNRU5UU19TQ0hFTUEiLCJJbmplY3QiLCJSZW5kZXJlciIsIk91dHB1dCIsIlZpZXdDaGlsZCIsIkRvbVNhbml0aXplciIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJFbGVtZW50UmVmIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiSW5wdXQiLCJTbGljZVBpcGUiLCJEZWNpbWFsUGlwZSIsIkN1cnJlbmN5UGlwZSIsIkxvd2VyQ2FzZVBpcGUiLCJVcHBlckNhc2VQaXBlIiwiSnNvblBpcGUiLCJEYXRlUGlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzt5Q0EyQ3lCLElBQUlBLGlCQUFZLEVBQUU7Ozs7Ozs7O1FBRXZDLG9DQUFTOzs7Ozs7WUFBVCxVQUFVLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztnQkFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUVqRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O29CQUNiLElBQU0sQ0FBQyxHQUFHLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxN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