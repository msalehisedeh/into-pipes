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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQXdNckYsTUFBTTs7OztJQW9CSixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzRCQWR2QixLQUFLO3dCQUVULEtBQUs7MkJBQ0YsS0FBSzt3QkFJUixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztxQkFDcEIsRUFBRTs0QkFDTCxFQUFFO3FDQUdELElBQUksWUFBWSxFQUFFO0tBSXpDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7UUFFdkIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDRjs7Ozs7SUFDRCxhQUFhLENBQUMsS0FBVTtRQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQ3hDOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsSUFBVztRQUMz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QUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLEVBQUUsQ0FBQzthQUNWLENBQUMsQ0FBQztTQUNOO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmOzs7WUE1WEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeURUO3lCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBK0hDO2FBRVI7Ozs7WUF2TThCLFFBQVE7OztvQ0F5TnBDLE1BQU0sU0FBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjYWxlbmRhciBjb2RlIGlzIGNvcGllZCBmcm9tIFwiYmVuIHRlZGRlclwiIFxyXG4qIGh0dHA6Ly93d3cuYmVudGVkZGVyLmNvbS9jcmVhdGUtY2FsZW5kYXItZ3JpZC1jb21wb25lbnQtYW5ndWxhci00L1xyXG4qL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBpcGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vcGlwZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhckRhdGUge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIHRvZGF5PzogYm9vbGVhbjtcclxuICB9XHJcbiAgXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYWxlbmRhci1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiY2FsZW5kYXItYm94XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZVwiIFt0ZXh0Q29udGVudF09XCJvcmlnRGF0ZSB8IGRhdGU6Zm9ybWF0dGluZ1wiPjwvc3Bhbj5cclxuICAgICAgPGEgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJwb3BwZXJcIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiIChjbGljayk9XCJwb3BkYXRlcGlja2VyKCRldmVudClcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5QaWNrIGEgZGF0ZTwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCIgKm5nSWY9XCJzaG93Q2FsZW5kYXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjYWxlbmRhci1uYXZzXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtb250aC1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInByZXZNb250aCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvZmYtc2NyZWVuXCI+QmFjayBhIG1vbnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJwNFwiPnt7IGN1cnJlbnREYXRlIHwgZGF0ZTonTU1NTScgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJuZXh0TW9udGgoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9mZi1zY3JlZW5cIj5Gb3J3YXJkIGEgbW9udGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ5ZWFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicHJldlllYXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkJhY2sgYSB5ZWFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdFx0PHNwYW4+e3sgY3VycmVudERhdGUgfCBkYXRlOiAneXl5eScgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJuZXh0WWVhcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmLXNjcmVlblwiPkZvcndhcmQgYSB5ZWFyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9udGgtZ3JpZFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZGF5LW5hbWVzXCI+XHJcblx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgbmFtZSBvZiBkYXlOYW1lc1wiIGNsYXNzPVwiZGF5LW5hbWUgcDlcIj57eyBuYW1lIH19PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2Vla3NcIj5cclxuXHRcdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzXCIgY2xhc3M9XCJ3ZWVrXCI+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2Vlay1kYXRlIGRpc2FibGVkXCIgKm5nSWY9XCIhaXNTZWxlY3RlZE1vbnRoKGRheS5kYXRlKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZGF0ZS10ZXh0XCI+e3sgZGF5LmRhdGUuZ2V0RGF0ZSgpIH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndlZWstZGF0ZSBlbmFibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc1NlbGVjdGVkTW9udGgoZGF5LmRhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImtleXVwKCRldmVudClcIlxyXG5cdFx0XHRcdFx0XHQgICAoY2xpY2spPVwic2VsZWN0RGF0ZSgkZXZlbnQsIGRheSlcIlxyXG5cdFx0XHRcdFx0XHQgICBbY2xhc3MudG9kYXldPVwiZGF5LnRvZGF5XCJcclxuXHRcdFx0XHRcdFx0ICAgW2NsYXNzLnNlbGVjdGVkXT1cImRheS5zZWxlY3RlZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZGF0ZS10ZXh0XCI+e3sgZGF5LmRhdGUuZ2V0RGF0ZSgpIH19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW1xyXG4gICAgICAgIGBcclxuICAgICAgICA6aG9zdCB7ZGlzcGxheTp0YWJsZTtmbG9hdDpsZWZ0O21pbi1oZWlnaHQ6IDIwcHh9XHJcbiAgICAgICAgLnBvcHBlciAuZmEtY2FsZW5kYXJ7ZGlzcGxheTogaW5saW5lLWJsb2NrO21hcmdpbjogMCA1cHh9XHJcbiAgICAgICAgLnBvcHBlcjpob3ZlciAuZmEtY2FsZW5kYXJ7Y29sb3I6ICNmYWJkYWJ9XHJcbiAgICAgICAgLmNhbGVuZGFyLWJveCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXItYm94IGRhdGUge2ZsZXg6IDE7fVxyXG4gICAgICAgIC5jYWxlbmRhci1ib3ggLnBvcHBlciB7Y3Vyc29yOiBwb2ludGVyO2ZsZXg6IDAgMCAxNXB4fVxyXG4gICAgICAgIC5jYWxlbmRhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgKiB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAuY2FsZW5kYXItbmF2cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtbmF2IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAueWVhci1uYXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1uYXYgYnV0dG9uLFxyXG4gICAgICAgIC5jYWxlbmRhciAueWVhci1uYXYgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLW5hdiBidXR0b246aG92ZXIsXHJcbiAgICAgICAgLmNhbGVuZGFyIC55ZWFyLW5hdiBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLmRheS1uYW1lcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2VlayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAuZGF5LW5hbWVzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLFxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAuZGF5LW5hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZSAuZGF0ZS10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBsaW5lYXIsIGNvbG9yIDE1MG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZGlzYWJsZWQge2NvbG9yOiAjYWFhO31cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5lbmFibGVkOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpob3ZlciAuZGF0ZS10ZXh0LFxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLmVuYWJsZWQ6Zm9jdXMgLmRhdGUtdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpob3Zlcjo6YWZ0ZXIsXHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuZW5hYmxlZDpmb2N1czo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsZW5kYXIgLm1vbnRoLWdyaWQgLndlZWstZGF0ZS5zZWxlY3RlZCAuZGF0ZS10ZXh0IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIC5tb250aC1ncmlkIC53ZWVrLWRhdGUuc2VsZWN0ZWQ6OmFmdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxlbmRhciAubW9udGgtZ3JpZCAud2Vlay1kYXRlLnRvZGF5OjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIFBpcGVDb21wb25lbnQge1xyXG5cclxuICBzb3VyY2U6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpdGVtOiBhbnk7XHJcbiAgc2hvd0NhbGVuZGFyID0gZmFsc2U7XHJcbiAgZm9ybWF0dGluZzpzdHJpbmc7XHJcbiAgZWRpdE5hbWUgPSBmYWxzZTtcclxuICBtdWx0aXNlbGVjdCA9IGZhbHNlO1xyXG5cclxuICBvcmlnRGF0ZTogRGF0ZTtcclxuICBjdXJyZW50RGF0ZTogRGF0ZTtcclxuICBkYXlOYW1lcyA9IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddO1xyXG4gIHdlZWtzOiBDYWxlbmRhckRhdGVbXVtdID0gW107XHJcbiAgc2VsZWN0ZWREYXlzOiBEYXRlW10gPSBbXTtcclxuXHJcbiAgQE91dHB1dChcIm9uSW50b0NvbXBvbmVudENoYW5nZVwiKVxyXG4gIG9uSW50b0NvbXBvbmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICBrZXl1cChldmVudDogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoO1xyXG4gICAgaWYgKGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBvcGRhdGVwaWNrZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc2hvd0NhbGVuZGFyID0gIXRoaXMuc2hvd0NhbGVuZGFyO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHNvdXJjZTogYW55LCBkYXRhOiBhbnksIGFyZ3M6IGFueVtdKSB7XHJcbiAgICB0aGlzLnNvdXJjZT0gc291cmNlO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgc291cmNlLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERheXMucHVzaChuZXcgRGF0ZShpdGVtKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm9yaWdEYXRlID0gdGhpcy5zZWxlY3RlZERheXMubGVuZ3RoID8gdGhpcy5zZWxlY3RlZERheXNbMF0gOiBuZXcgRGF0ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9yaWdEYXRlID0gbmV3IERhdGUodGhpcy5zb3VyY2UpO1xyXG4gICAgICAgIHRoaXMubXVsdGlzZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5wdXNoKHRoaXMub3JpZ0RhdGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtID0gZGF0YTtcclxuICAgIHRoaXMuY3VycmVudERhdGUuc2V0RnVsbFllYXIodGhpcy5vcmlnRGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgIHRoaXMuY3VycmVudERhdGUuc2V0TW9udGgodGhpcy5vcmlnRGF0ZS5nZXRNb250aCgpKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nPSBhcmdzLmxlbmd0aCA/IGFyZ3NbMF0gOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWREYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZERhdGU6IERhdGUgPSB0aGlzLnNlbGVjdGVkRGF5c1tpXTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzU2FtZURheShkYXRlLCBzZWxlY3RlZERhdGUpKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID4gLTE7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkTW9udGgoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3RlZERhdGVzKGRheTogQ2FsZW5kYXJEYXRlKSB7XHJcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5tdWx0aXNlbGVjdCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZERheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZTogRGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXlzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NhbWVEYXkoZGF5LmRhdGUsIGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF5cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRheS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKCFmb3VuZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXlzLnB1c2goZGF5LmRhdGUpO1xyXG4gICAgICAgICAgICAgIGRheS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERheXMgPSBbZGF5LmRhdGVdO1xyXG4gICAgICAgIGRheS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgc2VsZWN0RGF0ZShldmVudDogYW55LCBkYXk6IENhbGVuZGFyRGF0ZSk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMub3JpZ0RhdGUgPSBkYXkuZGF0ZTtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBkYXkuZGF0ZTtcclxuICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWREYXRlcyggZGF5ICk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZERheXMuc29ydCggKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYSA+IGIgPyAtMSA6IDE7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25JbnRvQ29tcG9uZW50Q2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5zZWxlY3RlZERheXMsXHJcbiAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICBpdGVtOiB0aGlzLml0ZW1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaG93Q2FsZW5kYXIgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWN0aW9ucyBmcm9tIGNhbGVuZGFyXHJcbiAgcHJldk1vbnRoKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKS0xLCB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcclxuICB9XHJcblxyXG4gIG5leHRNb250aChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSx0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCkrMSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBwcmV2WWVhcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKS0xLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICBuZXh0WWVhcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSsxLHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSwgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XHJcbiAgfVxyXG5cclxuICAgIC8vIGdlbmVyYXRlIHRoZSBjYWxlbmRhciBncmlkXHJcbiAgICBnZW5lcmF0ZUNhbGVuZGFyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5maWxsRGF0ZXModGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgY29uc3Qgd2Vla3M6IENhbGVuZGFyRGF0ZVtdW10gPSBbXTtcclxuICAgICAgICB3aGlsZSAoZGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHdlZWtzLnB1c2goZGF0ZXMuc3BsaWNlKDAsIDcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53ZWVrcyA9IHdlZWtzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1NhbWVEYXkoYTogRGF0ZSwgYjogRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBhLmdldEZ1bGxZZWFyKCkgPT09IGIuZ2V0RnVsbFllYXIoKSAmJiBcclxuICAgICAgICAgICAgYS5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCkgJiYgXHJcbiAgICAgICAgICAgIGEuZ2V0RGF0ZSgpID09PSBiLmdldERhdGUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTYW1lTW9udGgoYTogYW55LCBiOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gYS5nZXRZZWFyKCkgPT09IGIuZ2V0WWVhcigpICYmIFxyXG4gICAgICAgICAgICBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsRGF0ZXMoY3VycmVudERhdGU6IERhdGUpOiBDYWxlbmRhckRhdGVbXSB7XHJcbiAgICAgICAgY29uc3QgY20gPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdG0gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoY20uZ2V0RnVsbFllYXIoKSwgY20uZ2V0TW9udGgoKSwgMSlcclxuICAgICAgICBjb25zdCBmaXJzdE9mTW9udGggPSBmaXJzdERheS5nZXREYXkoKTtcclxuICAgICAgICBjb25zdCBmaXJzdERheU9mR3JpZCA9IG5ldyBEYXRlKGZpcnN0RGF5LmdldEZ1bGxZZWFyKCksIGZpcnN0RGF5LmdldE1vbnRoKCksIGZpcnN0RGF5LmdldERhdGUoKSAtIGZpcnN0T2ZNb250aCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBmaXJzdERheU9mR3JpZC5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaTwgKHN0YXJ0ICsgNDIpO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShmaXJzdERheU9mR3JpZC5nZXRGdWxsWWVhcigpLCBmaXJzdERheU9mR3JpZC5nZXRNb250aCgpLCBpKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRvZGF5OiB0aGlzLmlzU2FtZURheSh0bSwgZCksXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5pc1NlbGVjdGVkKGQpLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==