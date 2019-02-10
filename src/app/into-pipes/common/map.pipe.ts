/*
* Defines a filter to take a string as a key and returns value of key from the given map object.
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'map' })
export class MapPipe implements PipeTransform {
    static transformationMethod() {
        const x = function  (content: any, args: string[], callback?: any, data?: any) {
            // map:key1;value1/key2;value2/key3;value3
            return new MapPipe().transform(content, args.length > 1 ? args[1] : "");
        };
        return x;
    }

    valuesFor(list, map) {
        const result = [];
        list.map((key) => {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    }
    geMapping(mapping) {
        const map = mapping;
        if( mapping.trim ) {
            const map ={};
            mapping.split('/').map((key: string) => {
                const x = key.split(';');
                map[x[0]] = x[1];
            });
            mapping = map;      
        }
        return mapping;
    }
    transform(source: any, ...args: any[]): any {

        const map = this.geMapping((args && args.length) ? args[0] : "");

        return ((typeof source === "string") || !(source instanceof Array)) ? 
                        map[source] : 
                        this.valuesFor(source, map);
    }
}
