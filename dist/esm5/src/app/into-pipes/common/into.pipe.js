import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { ComponentPool } from './component.pool';
var InToPipe = /** @class */ (function () {
    function InToPipe(pool) {
        this.pool = pool;
    }
    InToPipe.prototype.transform = function (content, list) {
        var _this = this;
        var result = content;
        list.split("|").map(function (item) {
            result = _this._transform(result, _this.split(item));
        });
        return result;
    };
    InToPipe.prototype.split = function (item) {
        return item.trim().match(/(?=\S)[^"\:]*(?:"[^\\"]*(?:\\[\:\S][^\\"]*)*"[^"\:]*)*/g).filter(function (x) { return x.length; });
    };
    InToPipe.prototype._transform = function (content, args) {
        var result = this.pool.registeredPipeTransformation(args[0], content, args, this._transform.bind(this));
        return result ? result : content;
    };
    InToPipe.ctorParameters = function () { return [
        { type: ComponentPool }
    ]; };
    InToPipe = tslib_1.__decorate([
        Pipe({ name: 'into' })
    ], InToPipe);
    return InToPipe;
}());
export { InToPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50by5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlZGVoL2ludG8tcGlwZXMvIiwic291cmNlcyI6WyJzcmMvYXBwL2ludG8tcGlwZXMvY29tbW9uL2ludG8ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFZckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2pEO0lBRUUsa0JBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7SUFBRyxDQUFDO0lBRTNDLDRCQUFTLEdBQVQsVUFBVSxPQUFZLEVBQUUsSUFBWTtRQUFwQyxpQkFRQztRQVBDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUVyQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxVQUFDLElBQUk7WUFDdEIsTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx3QkFBSyxHQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUcsT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFTyw2QkFBVSxHQUFsQixVQUFtQixPQUFZLEVBQUUsSUFBYztRQUM3QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEcsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7O2dCQW5CeUIsYUFBYTs7SUFGNUIsUUFBUTtRQURwQixJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLENBQUM7T0FDUCxRQUFRLENBc0JwQjtJQUFELGVBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRGF0ZVBpcGUsXHJcbiAgQ3VycmVuY3lQaXBlLFxyXG4gIERlY2ltYWxQaXBlLFxyXG4gIEpzb25QaXBlLFxyXG4gIFNsaWNlUGlwZSxcclxuICBVcHBlckNhc2VQaXBlLFxyXG4gIExvd2VyQ2FzZVBpcGVcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50UG9vbCB9IGZyb20gJy4vY29tcG9uZW50LnBvb2wnO1xyXG5cclxuQFBpcGUoe25hbWU6J2ludG8nfSlcclxuZXhwb3J0IGNsYXNzIEluVG9QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb29sOiBDb21wb25lbnRQb29sKSB7fVxyXG5cclxuICB0cmFuc2Zvcm0oY29udGVudDogYW55LCBsaXN0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XHJcbiAgICBcclxuICAgIGxpc3Quc3BsaXQoXCJ8XCIpLm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICByZXN1bHQgPSB0aGlzLl90cmFuc2Zvcm0ocmVzdWx0LCB0aGlzLnNwbGl0KGl0ZW0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNwbGl0KGl0ZW06IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gaXRlbS50cmltKCkubWF0Y2goLyg/PVxcUylbXlwiXFw6XSooPzpcIlteXFxcXFwiXSooPzpcXFxcW1xcOlxcU11bXlxcXFxcIl0qKSpcIlteXCJcXDpdKikqL2cpLmZpbHRlcigoeCk9PngubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zZm9ybShjb250ZW50OiBhbnksIGFyZ3M6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wb29sLnJlZ2lzdGVyZWRQaXBlVHJhbnNmb3JtYXRpb24oYXJnc1swXSwgY29udGVudCwgYXJncywgdGhpcy5fdHJhbnNmb3JtLmJpbmQodGhpcykpOyBcclxuICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQgOiBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0=