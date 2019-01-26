/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class ImagePipe {
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    stringToImage(source, width, height, alt) {
        if (!alt || !alt.length) {
            /** @type {?} */
            const q = source.indexOf("?");
            /** @type {?} */
            const t = q < 0 ? source : source.substring(0, q);
            /** @type {?} */
            const d = t.lastIndexOf("/");
            alt = d < 0 ? t : t.substring(d + 1);
        }
        return "<img src=\'" + source + "\' style=\'" + width + height + "\' title=\'" + alt + "\' />";
    }
    /**
     * @param {?} sources
     * @param {?} width
     * @param {?} height
     * @param {?} alt
     * @return {?}
     */
    arrayToImage(sources, width, height, alt) {
        /** @type {?} */
        const result = [];
        sources.map((source) => {
            result.push(this.stringToImage(source, width, height, alt));
        });
        return result;
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const width = (args && args.length) ? "width: " + args[0] + ";" : "";
        /** @type {?} */
        const height = (args && args.length > 1) ? "height: " + args[1] + ";" : "";
        /** @type {?} */
        const alt = (args && args.length > 2) ? args[2] : "";
        if ((typeof source === "string") || !(source instanceof Array)) {
            return this.stringToImage(source, width, height, alt);
        }
        return this.arrayToImage(source, width, height, "");
    }
}
ImagePipe.decorators = [
    { type: Pipe, args: [{ name: 'image' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZWRlaC9pbnRvLXBpcGVzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnRvLXBpcGVzL3BpcGVzL2ltYWdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU07Ozs7Ozs7O0lBRUYsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDcEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7WUFDckIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELE1BQU0sQ0FBQyxhQUFhLEdBQUMsTUFBTSxHQUFDLGFBQWEsR0FBRSxLQUFLLEdBQUcsTUFBTSxHQUFHLGFBQWEsR0FBQyxHQUFHLEdBQUMsT0FBTyxDQUFDO0tBQ3pGOzs7Ozs7OztJQUNELFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHOztRQUNwQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Ozs7OztJQUNELFNBQVMsQ0FBQyxNQUFXLEVBQUUsR0FBRyxJQUFXOztRQUVqQyxNQUFNLEtBQUssR0FBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQzVFLE1BQU0sTUFBTSxHQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQ2xGLE1BQU0sR0FBRyxHQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekQ7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztLQUV2RDs7O1lBN0JKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIERlZmluZXMgYSBmaWx0ZXIgdG8gY29udmVydCB1cmwgaW50byBhbiBpbWFnZSBkaXNwbGF5LiBcclxuKiBpZiB0cmFuc2Zvcm1pbmcgb2JqZWN0IGlzIGFuIGFycmF5LCBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHdpbGwgYmUgdHJhbnNmb3JtZWQgYW5kIHRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBiZSByZXR1cm5lZC5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnaW1hZ2UnIH0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBzdHJpbmdUb0ltYWdlKHNvdXJjZSwgd2lkdGgsIGhlaWdodCwgYWx0KSB7XHJcbiAgICAgICAgaWYoIWFsdCB8fCAhYWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBxID0gc291cmNlLmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gcSA8IDAgPyBzb3VyY2UgOiBzb3VyY2Uuc3Vic3RyaW5nKDAsIHEpO1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdC5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIGFsdCA9IGQgPCAwID8gdCA6IHQuc3Vic3RyaW5nKGQrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxpbWcgc3JjPVxcJ1wiK3NvdXJjZStcIlxcJyBzdHlsZT1cXCdcIisgd2lkdGggKyBoZWlnaHQgKyBcIlxcJyB0aXRsZT1cXCdcIithbHQrXCJcXCcgLz5cIjtcclxuICAgIH1cclxuICAgIGFycmF5VG9JbWFnZShzb3VyY2VzLCB3aWR0aCwgaGVpZ2h0LCBhbHQpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBzb3VyY2VzLm1hcCgoc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGg6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpID8gXCJ3aWR0aDogXCIgKyBhcmdzWzBdICsgXCI7XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodDpzdHJpbmcgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCA+IDEpID8gXCJoZWlnaHQ6IFwiICsgYXJnc1sxXSArIFwiO1wiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBhbHQ6c3RyaW5nID0gKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAyKSA/IGFyZ3NbMl0gOiBcIlwiO1xyXG4gICAgICAgIGlmICgodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikgfHwgIShzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIGFsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5VG9JbWFnZShzb3VyY2UsIHdpZHRoLCBoZWlnaHQsIFwiXCIpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=