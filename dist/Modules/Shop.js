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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const Chat_1 = require("./Chat");
const http_1 = __importDefault(require("../utils/http"));
const Logistics_1 = require("./Logistics");
const Order_1 = require("./Order");
const Returns_1 = require("./Returns");
const Product_1 = require("./Product");
class Shop {
    constructor(params) {
        // this.host = params.host;
        // this.partner_id = params.partner_id;
        // this.partner_key = params.partner_key;
        // this.shop_id = params.shop_id;
        this.http = http_1.default.shopApiInstance({
            host: params.host,
            partner_id: params.partner_id,
            partner_key: params.partner_key,
            shop_id: params.shop_id,
            onGetAccessToken: params.onGetAccessToken,
            onRefreshAccessToken: params.onRefreshAccessToken,
        });
    }
    get Order() {
        if (!this._order)
            this._order = new Order_1.Order(this.http);
        return this._order;
    }
    get Chat() {
        if (!this._chat)
            this._chat = new Chat_1.Chat(this.http);
        return this._chat;
    }
    get Logistics() {
        if (!this._logistics)
            this._logistics = new Logistics_1.Logistics(this.http);
        return this._logistics;
    }
    get Returns() {
        if (!this._returns)
            this._returns = new Returns_1.Returns(this.http);
        return this._returns;
    }
    get Product() {
        if (!this._product)
            this._product = new Product_1.Product(this.http);
        return this._product;
    }
    getShopInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "shop/get_shop_info";
            const result = yield this.http.get(apiPath);
            return result.data;
        });
    }
    getProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "shop/get_profile";
            const result = yield this.http.get(apiPath);
            return result.data;
        });
    }
    updateProfile(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "shop/update_profile";
            const result = yield this.http.post(apiPath, params);
            return result.data;
        });
    }
}
exports.Shop = Shop;
//# sourceMappingURL=Shop.js.map