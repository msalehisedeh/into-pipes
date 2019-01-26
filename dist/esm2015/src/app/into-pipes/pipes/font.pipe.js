/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FontPipe {
    /**
     * @param {?} font
     * @param {?} location
     * @param {?} action
     * @param {?} content
     * @return {?}
     */
    fontFromString(font, location, action, content) {
        return (location === "left" ?
            (font + content) :
            ((location === "right") ? content + font : font));
    }
    /**
     * @param {?} source
     * @param {...?} args
     * @return {?}
     */
    transform(source, ...args) {
        /** @type {?} */
        const font = args.length ? "<span class=\'" + args[0] + "\' aria-hidden='true'></span>" : "";
        /** @type {?} */
        const location = args.length > 1 ? args[1] : "";
        /** @type {?} */
        const action = args.length > 2 ? args[2].toLowerCase() : "";
        /** @type {?} */
        const content = action === "*" ? source : ("replace" === action.toLowerCase() ? "" : source);
        if ((typeof content === "string") || !(content instanceof Array)) {
            return this.fontFromString(font, location, action, content);
        }
        else {
            /** @type {?} */
            const result = [];
            source.map((item) => {
                result.push(this.fontFromString(font, location, action, item));
            });
            return result;
        }
    }
}
FontPipe.decorators = [
    { type: Pipe, args: [{ name: 'email' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvcGlwZXMvZm9udC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNOzs7Ozs7OztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQztZQUNyQixDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDN0Q7Ozs7OztJQUNELFNBQVMsQ0FBQyxNQUFXLEVBQUUsR0FBRyxJQUFXOztRQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7UUFDN0YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUNoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQzVELE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdGLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0Q7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFDSixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNsRSxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2pCO0tBQ0o7OztZQXRCSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBEZWZpbmVzIGEgZmlsdGVyIHRvIGNvbnZlcnQgdXJsIGludG8gYW4gZW1haWwgZGlzcGxheS5cclxuKi9cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnZW1haWwnIH0pXHJcbmV4cG9ydCBjbGFzcyBGb250UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgZm9udEZyb21TdHJpbmcoZm9udCwgbG9jYXRpb24sIGFjdGlvbiwgY29udGVudCkge1xyXG4gICAgICAgIHJldHVybiAobG9jYXRpb24gPT09IFwibGVmdFwiID8gXHJcbiAgICAgICAgICAgICAgICAoZm9udCArIGNvbnRlbnQpIDogXHJcbiAgICAgICAgICAgICAgICAoKGxvY2F0aW9uID09PSBcInJpZ2h0XCIpID8gY29udGVudCArIGZvbnQgOiBmb250KSk7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm0oc291cmNlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICBjb25zdCBmb250ID0gYXJncy5sZW5ndGggPyBcIjxzcGFuIGNsYXNzPVxcJ1wiICsgYXJnc1swXSArIFwiXFwnIGFyaWEtaGlkZGVuPSd0cnVlJz48L3NwYW4+XCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYXJncy5sZW5ndGggPiAyID8gYXJnc1syXS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gYWN0aW9uID09PSBcIipcIiA/IHNvdXJjZSA6IChcInJlcGxhY2VcIiA9PT0gYWN0aW9uLnRvTG93ZXJDYXNlKCkgPyBcIlwiIDogc291cmNlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB8fCAhKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZyb21TdHJpbmcoZm9udCwgbG9jYXRpb24sIGFjdGlvbiwgY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIHNvdXJjZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZm9udEZyb21TdHJpbmcoZm9udCwgbG9jYXRpb24sIGFjdGlvbiwgaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==