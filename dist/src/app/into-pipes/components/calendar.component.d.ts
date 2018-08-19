import { Renderer, EventEmitter } from '@angular/core';
import { PipeComponent } from '../interfaces/pipe.component';
export interface CalendarDate {
    date: Date;
    selected?: boolean;
    today?: boolean;
}
export declare class CalendarComponent implements PipeComponent {
    private renderer;
    source: string;
    id: string;
    name: string;
    item: any;
    showCalendar: boolean;
    formatting: string;
    editName: boolean;
    multiselect: boolean;
    origDate: Date;
    currentDate: Date;
    dayNames: string[];
    weeks: CalendarDate[][];
    selectedDays: Date[];
    onIntoComponentChange: EventEmitter<{}>;
    constructor(renderer: Renderer);
    keyup(event: any): void;
    popdatepicker(event: any): void;
    transform(source: any, data: any, args: any[]): void;
    isSelected(date: Date): boolean;
    isSelectedMonth(date: Date): boolean;
    toggleSelectedDates(day: CalendarDate): void;
    selectDate(event: any, day: CalendarDate): void;
    prevMonth(event: any): void;
    nextMonth(event: any): void;
    prevYear(event: any): void;
    nextYear(event: any): void;
    generateCalendar(): void;
    private isSameDay;
    private isSameMonth;
    fillDates(currentDate: Date): CalendarDate[];
}
