/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ComponentPool } from './component.pool';
var InToPipe = /** @class */ (function () {
    function InToPipe(pool) {
        this.pool = pool;
    }
    /**
     * @param {?} content
     * @param {?} list
     * @return {?}
     */
    InToPipe.prototype.transform = /**
     * @param {?} content
     * @param {?} list
     * @return {?}
     */
    function (content, list) {
        var _this = this;
        /** @type {?} */
        var result = content;
        list.split("|").map(function (item) {
            result = _this._transform(result, _this.split(item));
        });
        return result;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    InToPipe.prototype.split = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    /**
     * @param {?} content
     * @param {?} args
     * @return {?}
     */
    InToPipe.prototype._transform = /**
     * @param {?} content
     * @param {?} args
     * @return {?}
     */
    function (content, args) {
        /** @type {?} */
        var result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this));
        return result ? result : content;
    };
    InToPipe.decorators = [
        { type: Pipe, args: [{ name: 'into' },] }
    ];
    /** @nocollapse */
    InToPipe.ctorParameters = function () { return [
        { type: ComponentPool }
    ]; };
    return InToPipe;
}());
export { InToPipe };
if (false) {
    /** @type {?} */
    InToPipe.prototype.pool;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50by5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2ludG8ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFZckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQUsvQyxrQkFBb0IsSUFBbUI7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBZTtLQUFJOzs7Ozs7SUFFM0MsNEJBQVM7Ozs7O0lBQVQsVUFBVSxPQUFZLEVBQUUsSUFBWTtRQUFwQyxpQkFRQzs7UUFQQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUUsVUFBQyxJQUFJO1lBQ3RCLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNmOzs7OztJQUVPLHdCQUFLOzs7O2NBQUMsSUFBWTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBRyxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDLENBQUM7Ozs7Ozs7SUFHdEcsNkJBQVU7Ozs7O2NBQUMsT0FBWSxFQUFFLElBQWM7O1FBQzdDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7O2dCQXJCcEMsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQzs7OztnQkFGVixhQUFhOzttQkFadEI7O1NBZWEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIERhdGVQaXBlLFxyXG4gIEN1cnJlbmN5UGlwZSxcclxuICBEZWNpbWFsUGlwZSxcclxuICBKc29uUGlwZSxcclxuICBTbGljZVBpcGUsXHJcbiAgVXBwZXJDYXNlUGlwZSxcclxuICBMb3dlckNhc2VQaXBlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudFBvb2wgfSBmcm9tICcuL2NvbXBvbmVudC5wb29sJztcclxuXHJcbkBQaXBlKHtuYW1lOidpbnRvJ30pXHJcbmV4cG9ydCBjbGFzcyBJblRvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9vbDogQ29tcG9uZW50UG9vbCkge31cclxuXHJcbiAgdHJhbnNmb3JtKGNvbnRlbnQ6IGFueSwgbGlzdDogc3RyaW5nKTogYW55IHtcclxuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xyXG4gICAgXHJcbiAgICBsaXN0LnNwbGl0KFwifFwiKS5tYXAoIChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fdHJhbnNmb3JtKHJlc3VsdCwgdGhpcy5zcGxpdChpdGVtKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzcGxpdChpdGVtOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpLm1hdGNoKC8oPz1cXFMpW15cIlxcOl0qKD86XCJbXlxcXFxcIl0qKD86XFxcXFtcXDpcXFNdW15cXFxcXCJdKikqXCJbXlwiXFw6XSopKi9nKS5maWx0ZXIoKHgpPT54Lmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90cmFuc2Zvcm0oY29udGVudDogYW55LCBhcmdzOiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucG9vbC5yZWdpc3RlcmVkUGlwZVRyYW5zZm9ybWF0aW9uKGFyZ3NbMF0sIGNvbnRlbnQsIGFyZ3MsIHRoaXMuX3RyYW5zZm9ybS5iaW5kKHRoaXMpKTsgXHJcbiAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0IDogY29udGVudDtcclxuICB9XHJcbn1cclxuIl19