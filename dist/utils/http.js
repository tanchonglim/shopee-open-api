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
exports.generateQueryParams = void 0;
const axios_1 = __importDefault(require("axios"));
const crypto_1 = __importDefault(require("crypto"));
const query_string_1 = __importDefault(require("query-string"));
function generateSign(partner_key, ...params) {
    const baseString = params.reduce((prev, curr) => (prev += curr), "");
    return crypto_1.default.createHmac("sha256", partner_key).update(baseString).digest("hex");
}
function generateQueryParams(apiPath, partner_id, partner_key, access_token, shop_id) {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const sign = generateSign(partner_key, partner_id, apiPath, timestamp, access_token || "", shop_id || "");
    return `${apiPath}?${query_string_1.default.stringify({
        partner_id: partner_id,
        timestamp,
        sign,
        access_token,
        shop_id,
    })}`;
}
exports.generateQueryParams = generateQueryParams;
class HttpClient {
    static instance({ host, partner_id, partner_key }) {
        const instance = axios_1.default.create({
            baseURL: host,
        });
        instance.interceptors.request.use(function (config) {
            const parsed = query_string_1.default.parseUrl("/api/v2/" + config.url);
            config.url = generateQueryParams(parsed.url, partner_id.toString(), partner_key) + "&" + query_string_1.default.stringify(parsed.query);
            return config;
        });
        return instance;
    }
    static shopApiInstance({ host, partner_id, partner_key, shop_id, onGetAccessToken, onRefreshAccessToken, }) {
        const instance = axios_1.default.create({
            baseURL: host,
        });
        instance.interceptors.request.use(function (config) {
            return __awaiter(this, void 0, void 0, function* () {
                const parsed = query_string_1.default.parseUrl("/api/v2/" + config.url);
                const token = yield onGetAccessToken();
                config.url = generateQueryParams(parsed.url, partner_id.toString(), partner_key, token, shop_id) + "&" + query_string_1.default.stringify(parsed.query);
                return config;
            });
        });
        // Add a response interceptor
        instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error.response.data.error == "error_auth" && onRefreshAccessToken) {
                    const newToken = yield onRefreshAccessToken();
                    const currentUrl = error.config.url;
                    let parsedUrl = query_string_1.default.parseUrl(currentUrl);
                    delete parsedUrl.query["access_token"];
                    delete parsedUrl.query["partner_id"];
                    delete parsedUrl.query["shop_id"];
                    delete parsedUrl.query["sign"];
                    delete parsedUrl.query["timestamp"];
                    let config = error.config;
                    config.url =
                        generateQueryParams(parsedUrl.url, partner_id.toString(), partner_key, newToken, shop_id) + "&" + query_string_1.default.stringify(parsedUrl.query);
                    return axios_1.default.request(config);
                }
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                return Promise.reject(error);
            });
        });
        return instance;
    }
}
exports.default = HttpClient;
//# sourceMappingURL=http.js.map