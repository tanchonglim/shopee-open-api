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
const index_1 = __importDefault(require("./index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shopee = index_1.default({
            host: "https://partner.test-stable.shopeemobile.com",
            partner_id: +process.env.PARTNER_ID,
            partner_key: process.env.PARTNER_KEY,
            redirect: "https://google.com",
        });
        // const result = await shopee.getAuthLink();
        // const result = await shopee.getAccessToken({
        //   code: "38aedfc0314c6804404ee266863efa62",
        //   shop_id: 18589,
        // });
        // const result = await shopee.refreshAccessToken({
        //   refresh_token: "09b3d8c0acbe0d91e77e424b4172e494",
        //   shop_id: 5304,
        // });
        const shop = shopee.createShop({
            shop_id: 22943,
            onGetAccessToken: () => __awaiter(void 0, void 0, void 0, function* () {
                //get access token from db
                return "6324e6ea9e6c51f1ea86f2444f657dce";
            }),
            onRefreshAccessToken: () => __awaiter(void 0, void 0, void 0, function* () {
                //get refresh token from db
                const { access_token, refresh_token } = yield shopee.refreshAccessToken({ refresh_token: "refresh_token", shop_id: 22943 });
                //store new refresh token & access token
                return access_token;
            }),
        });
        // const result = await shop.Product.getCategory();
        // shop.Order.cancelOrder({ cancel_reason: CANCEL_REASON.COD_NOT_SUPPORTED, item_list: [], order_sn: "" });
        // const shopInfo = await shop.getShopInfo();
        // const { response } = await shop.Chat.getMessage({ conversation_id: 12344 });
        // const result = await shop.Chat.getMessage({ conversation_id: 22780506543289 });
        // console.log(result2.response);
        // const a = await shop.Product.getItemBaseInfo({ item_id_list: [101551196, 101551197] });
        // console.log(a);
        // console.log(result);
    }
    catch (error) {
        console.error(error);
        console.log("error");
    }
}))();
//# sourceMappingURL=test.js.map