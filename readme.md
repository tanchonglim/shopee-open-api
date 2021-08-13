# Shopee Open Api

This is a simple wrapper for [Shopee Open API v2](https://open.shopee.com/documents?version=2)

Right now only support Shop API, no Merchant API available.

## How to use?

Importing only main module

```ts
import ShopeeOpenApi from "shopee-open-api";
```

Importing constants

```ts
import ShopeeOpenApi, { ORDER_STATUS, RETURN_STATUS } from "shopee-open-api";
```

Create ShopeeOpenAPi instance

```ts
const shopee = ShopeeOpenAPI({
  host: "https://partner.test-stable.shopeemobile.com", //change this to production url
  partner_id: +process.env.PARTNER_ID,
  partner_key: process.env.PARTNER_KEY,
  redirect: "https://google.com", //change this to redirection url for shop authorization
});
```

Common methods under ShopeeOpenAPI

```ts
const authUrl = shopee.getAuthLink();
const unauthUrl = shopee.getUnAuthLink();

//For Shop authorization (please refer to official API)
const { access_token, refresh_token } = await shopee.getAccessToken({
  code: "code",
  shop_id: 1234,
});
const { access_token, refresh_token } = await shopee.refreshAccessToken({
  refresh_token: "refresh_token",
  shop_id: 1234,
});

//API under public
const result = await shopee.getShopsByPartner();
```

Creating `Shop` instance

> You can OPTIONALLY pass a callback function to `onRefreshAccessToken` which will be called when server returns `error_auth`

```ts
const shop = shopee.createShop({
  shop_id: 12345,
  onGetAccessToken: async () => {
    //get access_token from DB
    return "access_token";
  },
  onRefreshAccessToken: async () => {
    //OPTIONAL
    //you might want to have some logic here to prevent multiple calls to refresh access token
    //get refresh_token from DB
    const { access_token, refresh_token } = await shopee.refreshAccessToken({ refresh_token: "refresh_token", shop_id: 12345 });
    //store new refresh_token & access_token to DB
    return access_token;
  },
});
```

API under Shop module can be accessed directly via `Shop`

```ts
const result = await shop.getShopInfo();
```

API from other modules can be accessed via the attributes under `Shop`

```ts
//Order module
const result = await shop.Order.getOrderDetail({ order_sn_list: "201214JAJXU6G7" });
//Chat module
const { response } = await shop.Chat.getMessage({ conversation_id: 12344 });
```

## Modules

### Current Available modules

- Product (Not complete)
- Shop
- Order
- Logistics
- Chat
- Public
- Returns

### Upcoming available modules

- MediaSpace
- Merchant
- FirstMile
- Payment
- Discount
- BundleDeal
- AddOnDeal
- Voucher
- FollowPrize
- TopPicks
- ShopCategory
- AccountHealth
- Push

> For more details, please refer to the official website of [Shopee Open API](https://open.shopee.com/).
