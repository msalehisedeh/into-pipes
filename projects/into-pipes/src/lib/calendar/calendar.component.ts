/* calendar code is copied from "ben tedder" 
* http://www.bentedder.com/create-calendar-grid-component-angular-4/
*/
import { Component, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { PipeComponentInterface } from '../common/pipe.component.interface';

export interface CalendarDateInterface {
    date: Date;
    selected?: boolean;
    today?: boolean;
  }
  
@Component({
    selector: 'calendar-component',
    template: `
    <span class="calendar-box">
      <span class="date" [textContent]="origDate | date:formatting"></span>
      <a 
        tabindex="{{active ? 0 : -1}}" 
        class="popper {{disabled ? 'disabled': ''}}" 
        (keyup)="keyup($event)" 
        (click)="popdatepicker($event)">
          <span class="fa fa-calendar" aria-hidden="true"></span>
          <span class="off-screen">Pick a date</span>
      </a>
    </span>
    <div class="calendar" *ngIf="!disabled && showCalendar">
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
                           tabindex="{{active ? 0 : -1}}"
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
    styles: [
        `
        :host {display:table;float:left;min-height: 23px}
        .popper .fa-calendar{display: inline-block;margin: 0 5px}
        .popper:hover .fa-calendar{color: #fabdab}
        .popper.disabled:hover .fa-calendar{cursor:default;color: #f00}
        .popper.disabled{color: #000;pointer-events:none;ursor:default;text-decoration: none;}
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
        `
    ]
})
export class CalendarComponent implements PipeComponentInterface {

  source!: Date;
  id!: string;
  name!: string;
  item: any;
  showCalendar = false;
  formatting!:string;
  editName = false;
  multiselect = false;
  disabled = false;
  active = true;
  validate = (item: any, newValue: any) => true;

  origDate!: Date;
  currentDate!: Date;
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  weeks: CalendarDateInterface[][] = [];
  selectedDays: Date[] = [];

  @Output("onIntoComponentChange")
  onIntoComponentChange = new EventEmitter();

  constructor(private renderer: Renderer2) {

  }

  keyup(event: any) {
    event.stopPropagation();
    event.preventDefault();

    const code = event.which;
    if (code === 13 && !this.disabled) {
        event.target.click();
    }
  }
  popdatepicker(event: any) {
    event.stopPropagation();
    event.preventDefault();

    this.showCalendar = !this.showCalendar;
  }

  transform(source: Date, data: any, args?: any[]) {
    this.source= source;
    this.currentDate = new Date(source);
    this.origDate =  new Date(source);

    if (source instanceof Array) {
        this.multiselect = true;
        source.map( (item) => {
            this.selectedDays.push(new Date(item));
        })
    } else {
        this.multiselect = false;
        this.selectedDays.push(new Date(this.source));
    }
    this.item = data;
    this.generateCalendar();
    this.formatting= (args && args.length) ? args[0] : "";
  }

  isSelected(date: Date): boolean {
      let index = -1;
      for (let i = 0; i < this.selectedDays.length; i++) {
          const selectedDate: Date = this.selectedDays[i];
          if (this.isSameDay(date, selectedDate)) {
            index = i;
          }
      }
    return index > -1;
  }

  isSelectedMonth(date: Date): boolean {
    return this.isSameMonth(date, this.currentDate);
  }

  toggleSelectedDates(day: CalendarDateInterface) {
      let found = false;
      if (this.multiselect) {
        for (let i = 0; i < this.selectedDays.length; i++) {
            const date: Date = this.selectedDays[i];
            if (this.isSameDay(day.date, date)) {
                this.selectedDays.splice(i,1);
                found = true;
                day.selected = false;
                break;
            }
          }
          if(!found) {
              this.selectedDays.push(day.date);
              day.selected = true;
          }
      } else {
        this.selectedDays = [day.date];
        day.selected = true;
      }
  }
  selectDate(event: any, day: CalendarDateInterface): void {
    event.stopPropagation();
    event.preventDefault();

    if(this.validate(this.item, day.date)) {
        this.origDate = day.date;
        this.currentDate = day.date;
        this.toggleSelectedDates( day );
    
        this.selectedDays.sort( (a, b) => {
            return a > b ? -1 : 1;
        });
        this.onIntoComponentChange.emit({
            id: this.id,
            name: this.name,
            value: this.selectedDays,
            type: "select",
            item: this.item
        });
        this.generateCalendar();
    }
    this.showCalendar = false;
  }

  // actions from calendar
  prevMonth(event: any): void {
    event.stopPropagation();
    event.preventDefault();

    this.currentDate = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()-1, this.currentDate.getDate());
    this.generateCalendar();
  }

  nextMonth(event: any): void {
    event.stopPropagation();
    event.preventDefault();

    this.currentDate = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1, this.currentDate.getDate());
    this.generateCalendar();
  }

  prevYear(event: any): void {
    event.stopPropagation();
    event.preventDefault();

    this.currentDate = new Date(this.currentDate.getFullYear()-1,this.currentDate.getMonth(), this.currentDate.getDate());
    this.generateCalendar();
  }

  nextYear(event: any): void {
    event.stopPropagation();
    event.preventDefault();

    this.currentDate = new Date(this.currentDate.getFullYear()+1,this.currentDate.getMonth(), this.currentDate.getDate());
    this.generateCalendar();
  }

    // generate the calendar grid
    generateCalendar(): void {
        const dates = this.fillDates(this.currentDate);
        const weeks: CalendarDateInterface[][] = [];
        while (dates.length > 0) {
        weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    }
    private isSameDay(a: Date, b: Date) {
        return a.getFullYear() === b.getFullYear() && 
            a.getMonth() === b.getMonth() && 
            a.getDate() === b.getDate();
    }
    private isSameMonth(a: any, b: any) {
        return a.getYear() === b.getYear() && 
            a.getMonth() === b.getMonth();
    }

    fillDates(currentDate: Date): CalendarDateInterface[] {
        const cm = new Date(currentDate);
        const tm = new Date();
        const firstDay = new Date(cm.getFullYear(), cm.getMonth(), 1)
        const firstOfMonth = firstDay.getDay();
        const firstDayOfGrid = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstOfMonth);
        const start = firstDayOfGrid.getDate();
        const list = [];
        for (let i = start; i< (start + 42);i++){
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

