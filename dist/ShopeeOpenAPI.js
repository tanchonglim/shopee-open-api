"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.ShopeeOpenAPI = void 0;
const http_1 = __importStar(require("./utils/http"));
const Shop_1 = require("./Modules/Shop");
function ShopeeOpenAPI({ host, partner_id, partner_key, redirect, }) {
    return new _ShopeeOpenAPI({ host, partner_id, partner_key, redirect });
}
exports.ShopeeOpenAPI = ShopeeOpenAPI;
class _ShopeeOpenAPI {
    constructor({ host, partner_id, partner_key, redirect }) {
        this.host = host;
        this.partner_id = partner_id;
        this.partner_key = partner_key;
        this.redirect = redirect;
        this.http = http_1.default.instance({ host, partner_id, partner_key });
    }
    getAuthLink() {
        const apiPath = "/api/v2/shop/auth_partner";
        return this.host + http_1.generateQueryParams(apiPath, this.partner_id.toString(), this.partner_key) + `&redirect=${this.redirect}`;
    }
    getUnAuthLink() {
        const apiPath = "/api/v2/shop/cancel_auth_partner";
        return this.host + http_1.generateQueryParams(apiPath, this.partner_id.toString(), this.partner_key) + `&redirect=${this.redirect}`;
    }
    getAccessToken(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "auth/token/get";
            const result = yield this.http.post(apiPath, Object.assign(Object.assign({}, params), { partner_id: this.partner_id }));
            return result.data;
        });
    }
    refreshAccessToken(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "auth/access_token/get";
            const result = yield this.http.post(apiPath, Object.assign(Object.assign({}, params), { partner_id: this.partner_id }));
            return result.data;
        });
    }
    getShopsByPartner(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiPath = "public/get_shops_by_partner";
            const result = yield this.http.get(apiPath, { params });
            return result.data;
        });
    }
    createShop(params) {
        return new Shop_1.Shop(Object.assign({ host: this.host, partner_id: this.partner_id, partner_key: this.partner_key }, params));
    }
}
//# sourceMappingURL=ShopeeOpenAPI.js.map