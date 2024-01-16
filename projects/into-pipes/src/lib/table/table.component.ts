import { Component, EventEmitter } from '@angular/core';
import { PipeComponent } from '../common/pipe.component';

@Component({
    selector: 'table-component',
    template: `
    <table [id]="id" class="piped-table">
        <caption *ngIf="name" [textContent]="name"></caption>
        <tr><th scope="col" *ngFor="let header of headers" [textContent]="header"></th></tr>
        <tr *ngFor="let row of rows"><td *ngFor="let header of headers" [textContent]="row[header]"></td></tr>
    </table>
    `,
    styles: [
        `
        :host .piped-table {padding: 0;width: 100%;border-collapse: collapse;}
        :host .piped-table caption {background-color: #c3e5e2;border-radius: 2px;color: #1b1b1b;caption-side: top;font-size: 14px;padding: 5px 6px;margin-bottom: 15px;text-align: left;}
        :host .piped-table th {user-select: none;height: 24px;position: relative;white-space: nowrap;font-weight: normal;text-transform: uppercase;font-size: 14px;padding-top: 6px;padding-bottom: 6px;text-align: left;}
        :host .piped-table td {padding-left: 3px;min-height: 21px;}
        `
    ]
})
export class TableComponent implements PipeComponent {
    source!: string;
    id!: string;
    name!: string;
    headers: any[] = [];
    rows: any[] = [];
	onIntoComponentChange = new EventEmitter();

    transform(source: any, data: any, args: any[]) {
        this.source= source;
        this.id= args.length ? args[0] : '';
        this.name= args.length > 1 ? args[1] : undefined;

        if (typeof source === 'object') {
            this.rows.push(source);
            this.getHeaders(source);
        } else if (source instanceof Array) {
            if (typeof source[0] === 'object') {
                this.rows = source;
                this.getHeaders(source[0]);
            } else {
                source.map(
                    (item) => {
                        this.rows.push({value: item});
                    }
                )
                this.headers.push('value');
            }
        } else {
            this.rows.push({value: source});
            this.headers.push('value');
        }
    }
    private getHeaders(obj: any) {
        Object.keys(obj).map(
            (item) => {
                this.headers.push(item);
            }
        );
    }
}
