import { CANCEL_REASON, DISPUTE_REASON } from "./consts/constants";
import ShopeeOpenAPI from "./index";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const shopee = ShopeeOpenAPI({
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
      onGetAccessToken: async () => {
        //get access token from db
        return "6324e6ea9e6c51f1ea86f2444f657dce";
      },
      onRefreshAccessToken: async () => {
        //get refresh token from db
        const { access_token, refresh_token } = await shopee.refreshAccessToken({ refresh_token: "refresh_token", shop_id: 22943 });
        //store new refresh token & access token
        return access_token;
      },
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
  } catch (error) {
    console.error(error);
    console.log("error");
  }
})();
