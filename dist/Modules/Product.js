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
exports.Product = void 0;
class Product {
    constructor(http) {
        this.http = http;
    }
    getCategory(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_category";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    getAttributes(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_attributes";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    getBrandList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_brand_list";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    getDtsLimis(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_dts_limit";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    getItemLimit() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_item_limit";
            const result = yield this.http.get(apiPath);
            return result.data;
        });
    }
    getItemList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_item_list";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    getItemBaseInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_item_base_info";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    getItemExtraInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_item_extra_info";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    //more api here
    getModelList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_model_list";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    updateStock(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/update_stock";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    boostItem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/boost_item";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
    getBoostedList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_boosted_list";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    searchItem(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/search_item";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    getComment(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/get_comment";
            const result = yield this.http.get(apiPath, {
                params,
            });
            return result.data;
        });
    }
    replyComment(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "product/reply_comment";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map