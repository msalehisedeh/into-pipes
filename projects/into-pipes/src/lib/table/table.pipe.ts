/*
* Defines a filter to convert url into an address display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'table' })
export class TablePipe implements PipeTransform {
    static transformationMethod() {
        const x = function (content: any, args: string[], callback?: any, data?: any) {
            return new TablePipe().transform(content, args.length > 1 ? args[1] : '', args.length > 2 ? args[2] : undefined); 
        };
        return x;
    }
    transform(source: any, ...args: any[]): any {
        const id= args.length ? args[0] : '';
        const name = args.length > 1 ? args[1] : undefined;
        const headers: any[] = [];
        const rows: any[] = [];

        this.buildTable(source, rows, headers);
        let result = "<table style='width: 100%' id='" + id + "'>" + (name ? "<caption style='text-align:left;background-color: #c3e5e2;'>" + name + "</caption>" : "") + "<tr>";
        headers.map(
            (header) => {
                result += ("<th style='text-align: left;font-weight:normal;text-transform: uppercase;' scope='col'>" + header + "</th>");
            }
        );
        result += "</tr>";
        rows.map(
            (row) => {
                result += "<tr>";
                headers.map(
                    (header) => {
                        result += ("<td>" + row[header] + "</td>");
                    }
                );
                result += "</tr>";
            }
        );
        result += "</table>";

        return result;
    }
    private buildTable(source: any, rows: any[], headers: string[]) {
        if (typeof source === 'object') {
            rows.push(source);
            this.getHeaders(source, headers);
        } else if (source instanceof Array) {
            if (typeof source[0] === 'object') {
                rows = source;
                this.getHeaders(source[0], headers);
            } else {
                source.map(
                    (item) => {
                        rows.push({value: item});
                    }
                )
                headers.push('value');
            }
        } else {
            rows.push({value: source});
            headers.push('value');
        }
    }
    private getHeaders(obj: any, headers: string[]) {
        Object.keys(obj).map(
            (item) => {
                headers.push(item);
            }
        );
    }
}
