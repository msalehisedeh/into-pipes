/*
* Defines a filter to convert url into a raiting display.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'notice' })
export class NoticePipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            return new NoticePipe().transform(content, ""); 
        };
        return x;
    }
    noticeString(source: string, message: string) {
        return `
        <span style='display:table;possition:relative;float:left' alt='` + message + `'>
          <span class='fa fa-star' aria-hidden='true'></span>
          <span style='display: table;width: 17px;height: 15px;border-radius: 50%;text-align: center;background-color: rgba(200,200,200,0.2);float: right;font-size: 0.8rem;margin-left: -5px'>` +
          source +
        ` </span>
        </span>`;
    }

    transform(source: any, ...args: any[]): any {
        const message = args.length ? args[0] : undefined;
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.noticeString(source, message);
        } else {
            const result = [];
            source.map((item) => {
                result.push(this.noticeString(item, message));
            });
            return result;                
        }
    }
}
