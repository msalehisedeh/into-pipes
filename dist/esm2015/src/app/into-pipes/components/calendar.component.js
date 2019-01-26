/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Renderer, Output, EventEmitter } from '@angular/core';
/**
 * @record
 */
export function CalendarDate() { }
/** @type {?} */
CalendarDate.prototype.date;
/** @type {?|undefined} */
CalendarDate.prototype.selected;
/** @type {?|undefined} */
CalendarDate.prototype.today;
export class CalendarComponent {
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
        .popper:hover .fa-calendar{color: #fabdab;}
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
if (false) {
    /** @type {?} */
    CalendarComponent.prototype.source;
    /** @type {?} */
    CalendarComponent.prototype.id;
    /** @type {?} */
    CalendarComponent.prototype.name;
    /** @type {?} */
    CalendarComponent.prototype.item;
    /** @type {?} */
    CalendarComponent.prototype.showCalendar;
    /** @type {?} */
    CalendarComponent.prototype.formatting;
    /** @type {?} */
    CalendarComponent.prototype.editName;
    /** @type {?} */
    CalendarComponent.prototype.multiselect;
    /** @type {?} */
    CalendarComponent.prototype.origDate;
    /** @type {?} */
    CalendarComponent.prototype.currentDate;
    /** @type {?} */
    CalendarComponent.prototype.dayNames;
    /** @type {?} */
    CalendarComponent.prototype.weeks;
    /** @type {?} */
    CalendarComponent.prototype.selectedDays;
    /** @type {?} */
    CalendarComponent.prototype.onIntoComponentChange;
    /** @type {?} */
    CalendarComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tcG9uZW50cy9jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBc01yRixNQUFNOzs7O0lBb0JKLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7NEJBZHZCLEtBQUs7d0JBRVQsS0FBSzsyQkFDRixLQUFLO3dCQUlSLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO3FCQUNwQixFQUFFOzRCQUNMLEVBQUU7cUNBR0QsSUFBSSxZQUFZLEVBQUU7S0FJekM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztRQUV2QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtLQUNGOzs7OztJQUNELGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDeEM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxJQUFXO1FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E2SEM7YUFFUjs7OztZQXJNOEIsUUFBUTs7O29DQXVOcEMsTUFBTSxTQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNhbGVuZGFyIGNvZGUgaXMgY29waWVkIGZyb20gXCJiZW4gdGVkZGVyXCIgXHJcbiogaHR0cDovL3d3dy5iZW50ZWRkZXIuY29tL2NyZWF0ZS1jYWxlbmRhci1ncmlkLWNvbXBvbmVudC1hbmd1bGFyLTQvXHJcbiovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlwZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGlwZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhckRhdGUge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIHRvZGF5PzogYm9vbGVhbjtcclxuICB9XHJcbiAgXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYWxlbmRhci1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiY2FsZW5kYXItYm94XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZVwiIFt0ZXh0Q29udGVudF09XCJvcmlnRGF0ZSB8IGRhdGU6Zm9ybWF0dGluZ1wiPjwvc3Bhbj5cclxuICAgICAgPGEgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJwb3BwZXJcIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIChjbGljayk9XCJwb3BkYXRlcGlja2VyKCRldmVudClcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5QaWNrIGEgZGF0ZTwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCIgKm5nSWY9XCJzaG93Q2FsZW5kYXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjYWxlbmRhci1uYXZzXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtb250aC1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInByZXZNb250aCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+QmFjayBhIG1vbnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwNFwiPnt7IGN1cnJlbnREYXRlIHwgZGF0ZTonTU1NTScgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJuZXh0TW9udGgoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5Gb3J3YXJkIGEgbW9udGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ5ZWFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldlllYXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkJhY2sgYSB5ZWFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdFx0PHNwYW4+e3sgY3VycmVudERhdGUgfCBkYXRlOiAneXl5eScgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJuZXh0WWVhcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkZvcndhcmQgYSB5ZWFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9udGgtZ3JpZFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZGF5LW5hbWVzXCI+XHJcblx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgbmFtZSBvZiBkYXlOYW1lc1wiIGNsYXNzPVwiZGF5LW5hbWUgcDlcIj57eyBuYW1lIH19PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2Vla3NcIj5cclxuXHRcdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCIgY2xhc3M9XCJ3ZWVrXCI+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2Vlay1kYXRlIGRpc2FibGVkXCIgKm5nSWY9XCIhaXNTZWxlY3RlZE1vbnRoKGRheS5kYXRlKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZGF0ZS10ZXh0XCI+e3sgZGF5LmRhdGUuZ2V0RGF0ZSgpIH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndlZWstZGF0ZSBlbmFibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc1NlbGVjdGVkTW9udGgoZGF5LmRhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIlxyXG5cdFx0XHRcdFx0XHQgICAoY2xpY2spPVwic2VsZWN0RGF0ZSgkZXZlbnQsIGRheSlcIlxyXG5cdFx0XHRcdFx0XHQgICBbY2xhc3MudG9kYXldPVwiZGF5LnRvZGF5XCJcclxuXHRcdFx0XHRcdFx0ICAgW2NsYXNzLnNlbGVjdGVkXT1cImRheS5zZWxlY3RlZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZGF0ZS10ZXh0XCI+e3sgZGF5LmRhdGUuZ2V0RGF0ZSgpIH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICAucG9wcGVyOmhvdmVyIC5mYS1jYWxlbmRhcntjb2xvcjogI2ZhYmRhYjt9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXItYm94IGRhdGUge2ZsZXg6IDE7fVxyXG4gICAgICAgIC5jYWxlbmRhci1ib3ggLnBvcHBlciB7Y3Vyc29yOiBwb2ludGVyO2ZsZXg6IDAgMCAxNXB4fVxyXG4gICAgICAgIC5jYWxlbmRhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgKiB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAuY2FsZW5kYXItbmF2cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAueWVhci1uYXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYgYnV0dG9uLFxyXG4gICAgICAgIC5jYWxlbmRhciAueWVhci1uYXYgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiBidXR0b246aG92ZXIsXHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLmRheS1uYW1lcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2VlayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAuZGF5LW5hbWVzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLFxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAuZGF5LW5hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSAuZGF0ZS10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBsaW5lYXIsIGNvbG9yIDE1MG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZGlzYWJsZWQge2NvbG9yOiAjYWFhO31cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpob3ZlciAuZGF0ZS10ZXh0LFxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXMgLmRhdGUtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpob3Zlcjo6YWZ0ZXIsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1czo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5zZWxlY3RlZCAuZGF0ZS10ZXh0IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuc2VsZWN0ZWQ6OmFmdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnRvZGF5OjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBzb3VyY2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpdGVtOiBhbnk7XHJcbiAgc2hvd0NhbGVuZGFyID0gZmFsc2U7XHJcbiAgZm9ybWF0dGluZzpzdHJpbmc7XHJcbiAgZWRpdE5hbWUgPSBmYWxzZTtcclxuICBtdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG5cclxuICBvcmlnRGF0ZTogRGF0ZTtcclxuICBjdXJyZW50RGF0ZTogRGF0ZTtcclxuICBkYXlOYW1lcyA9IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddO1xyXG4gIHdlZWtzOiBDYWxlbmRhckRhdGVbXVtdID0gW107XHJcbiAgc2VsZWN0ZWREYXlzOiBEYXRlW10gPSBbXTtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICBrZXl1cChldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGNvZGUgPSBldmVudC53aGljaDtcclxuICAgIGlmIChjb2RlID09PSAxMykge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwb3BkYXRlcGlja2VyKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5zaG93Q2FsZW5kYXIgPSAhdGhpcy5zaG93Q2FsZW5kYXI7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIGRhdGE6IGFueSwgYXJnczogYW55W10pIHtcclxuICAgIHRoaXMuc291cmNlPSBzb3VyY2U7XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMub3JpZ0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIHRoaXMubXVsdGlzZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgIHNvdXJjZS5tYXAoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2gobmV3IERhdGUoaXRlbSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKG5ldyBEYXRlKHRoaXMuc291cmNlKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW0gPSBkYXRhO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmc9IGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IFwiXCI7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZERheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGF0ZTogRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXlzW2ldO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNTYW1lRGF5KGRhdGUsIHNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gaW5kZXggPiAtMTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRNb250aChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWVNb250aChkYXRlLCB0aGlzLmN1cnJlbnREYXRlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdGVkRGF0ZXMoZGF5OiBDYWxlbmRhckRhdGUpIHtcclxuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLm11bHRpc2VsZWN0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkRGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlOiBEYXRlID0gdGhpcy5zZWxlY3RlZERheXNbaV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2FtZURheShkYXkuZGF0ZSwgZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGF5LnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChkYXkuZGF0ZSk7XHJcbiAgICAgICAgICAgICAgZGF5LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cyA9IFtkYXkuZGF0ZV07XHJcbiAgICAgICAgZGF5LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gIH1cclxuICBzZWxlY3REYXRlKGV2ZW50LCBkYXk6IENhbGVuZGFyRGF0ZSk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMub3JpZ0RhdGUgPSBkYXkuZGF0ZTtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBkYXkuZGF0ZTtcclxuICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWREYXRlcyggZGF5ICk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZERheXMuc29ydCggKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYSA+IGIgPyAtMSA6IDE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zZWxlY3RlZERheXMsXHJcbiAgICAgICAgaXRlbTogdGhpcy5pdGVtXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2hvd0NhbGVuZGFyID0gZmFsc2U7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIC8vIGFjdGlvbnMgZnJvbSBjYWxlbmRhclxyXG4gIHByZXZNb250aChldmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLTEsIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgbmV4dE1vbnRoKGV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCkrMSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBwcmV2WWVhcihldmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCktMSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCksIHRoaXMuY3VycmVudERhdGUuZ2V0RGF0ZSgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoZXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpKzEsdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgdGhlIGNhbGVuZGFyIGdyaWRcclxuICAgIGdlbmVyYXRlQ2FsZW5kYXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmZpbGxEYXRlcyh0aGlzLmN1cnJlbnREYXRlKTtcclxuICAgICAgICBjb25zdCB3ZWVrczogQ2FsZW5kYXJEYXRlW11bXSA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgd2Vla3MucHVzaChkYXRlcy5zcGxpY2UoMCwgNykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndlZWtzID0gd2Vla3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2FtZURheShhOiBEYXRlLCBiOiBEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGEuZ2V0RnVsbFllYXIoKSA9PT0gYi5nZXRGdWxsWWVhcigpICYmIFxyXG4gICAgICAgICAgICBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKSAmJiBcclxuICAgICAgICAgICAgYS5nZXREYXRlKCkgPT09IGIuZ2V0RGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1NhbWVNb250aChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEuZ2V0WWVhcigpID09PSBiLmdldFllYXIoKSAmJiBcclxuICAgICAgICAgICAgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbERhdGVzKGN1cnJlbnREYXRlOiBEYXRlKTogQ2FsZW5kYXJEYXRlW10ge1xyXG4gICAgICAgIGNvbnN0IGNtID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xyXG4gICAgICAgIGNvbnN0IHRtID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBmaXJzdERheSA9IG5ldyBEYXRlKGNtLmdldEZ1bGxZZWFyKCksIGNtLmdldE1vbnRoKCksIDEpXHJcbiAgICAgICAgY29uc3QgZmlyc3RPZk1vbnRoID0gZmlyc3REYXkuZ2V0RGF5KCk7XHJcbiAgICAgICAgY29uc3QgZmlyc3REYXlPZkdyaWQgPSBuZXcgRGF0ZShmaXJzdERheS5nZXRGdWxsWWVhcigpLCBmaXJzdERheS5nZXRNb250aCgpLCBmaXJzdERheS5nZXREYXRlKCkgLSBmaXJzdE9mTW9udGgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZmlyc3REYXlPZkdyaWQuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGk8IChzdGFydCArIDQyKTtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoZmlyc3REYXlPZkdyaWQuZ2V0RnVsbFllYXIoKSwgZmlyc3REYXlPZkdyaWQuZ2V0TW9udGgoKSwgaSk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0b2RheTogdGhpcy5pc1NhbWVEYXkodG0sIGQpLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuaXNTZWxlY3RlZChkKSxcclxuICAgICAgICAgICAgICAgIGRhdGU6IGRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=