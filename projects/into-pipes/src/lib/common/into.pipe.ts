import { Pipe, PipeTransform  } from '@angular/core';

import { ComponentPool } from './component.pool';

@Pipe({name:'into'})
export class InToPipe implements PipeTransform{

  constructor(private pool: ComponentPool) {}

  transform(content: any, list: string): any {
    let result = content;
    
    list.split("|").map( (item: string) => {
        result = this._transform(result, this.split(item));
    });

    return result;
  }

  private split(item: string) {
    const matched = item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g);
      return matched ? matched.filter((x)=>x.length) : [];
  }

  private _transform(content: any, args: string[]) {
    let result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this)); 
    return result ? result : content;
  }
}
