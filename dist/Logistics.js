"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics = void 0;
class Logistics {
    constructor(http) {
        this.http = http;
    }
    shipOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "logistics/ship_order";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
}
exports.Logistics = Logistics;
//# sourceMappingURL=Logistics.js.map