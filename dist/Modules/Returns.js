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
exports.Returns = void 0;
class Returns {
    constructor(http) {
        this.http = http;
    }
    getReturnDetail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "returns/get_return_detail";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    getReturnList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "returns/get_return_list";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    confirm(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "returns/confirm";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    dispute(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "returns/dispute";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
}
exports.Returns = Returns;
//# sourceMappingURL=Returns.js.map