/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class MapPipe {
    /**
     * @param {?} list
     * @param {?} map
     * @return {?}
     */
    valuesFor(list, map) {
        /** @type {?} */
        const result = [];
        list.map((key) => {
            if (map[key]) {
                result.push(map[key]);
            }
        });
        return result;
    }
    /**
     * @param {?} mapping
     * @return {?}
     */
    geMapping(mapping) {
        /** @type {?} */
        const map = mapping;
        if (mapping.trim) {
            /** @type {?} */
            const map = {};
            mapping.split('/').map((key) => {
                /** @type {?} */
                const x = key.split(';');
                map[x[0]] = x[1];
            });
            mapping = map;
        }
        return mapping;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const map = this.geMapping((args && args.length) ? args[0] : "");
        return ((typeof source === "string") || !(source instanceof Array)) ?
            map[source] :
            this.valuesFor(source, map);
    }
}
MapPipe.decorators = [
    { type: Pipe, args: [{ name: 'map' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VkZWgvaW50by1waXBlcy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50by1waXBlcy9waXBlcy9tYXAucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTTs7Ozs7O0lBRUYsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHOztRQUNmLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDYixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekI7U0FDSixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzs7OztJQUNELFNBQVMsQ0FBQyxPQUFPOztRQUNiLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNwQixFQUFFLENBQUEsQ0FBRSxPQUFPLENBQUMsSUFBSyxDQUFDLENBQUMsQ0FBQzs7WUFDaEIsTUFBTSxHQUFHLEdBQUUsRUFBRSxDQUFDO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTs7Z0JBQ25DLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUNqQjtRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDbEI7Ozs7OztJQUNELFNBQVMsQ0FBQyxNQUFXLEVBQUUsR0FBRyxJQUFXOztRQUVqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0M7OztZQS9CSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIHRha2UgYSBzdHJpbmcgYXMgYSBrZXkgYW5kIHJldHVybnMgdmFsdWUgb2Yga2V5IGZyb20gdGhlIGdpdmVuIG1hcCBvYmplY3QuXHJcbiovXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ21hcCcgfSlcclxuZXhwb3J0IGNsYXNzIE1hcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB2YWx1ZXNGb3IobGlzdCwgbWFwKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGlzdC5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWFwW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hcFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBnZU1hcHBpbmcobWFwcGluZykge1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IG1hcHBpbmc7XHJcbiAgICAgICAgaWYoIG1hcHBpbmcudHJpbSApIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwID17fTtcclxuICAgICAgICAgICAgbWFwcGluZy5zcGxpdCgnLycpLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBrZXkuc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgICAgIG1hcFt4WzBdXSA9IHhbMV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYXBwaW5nID0gbWFwOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwcGluZztcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzb3VyY2U6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG5cclxuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdlTWFwcGluZygoYXJncyAmJiBhcmdzLmxlbmd0aCkgPyBhcmdzWzBdIDogXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHx8ICEoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbc291cmNlXSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc0Zvcihzb3VyY2UsIG1hcCk7XHJcbiAgICB9XHJcbn1cclxuIl19