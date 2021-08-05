import HttpClient, { generateQueryParams } from "./utils/http";
import { Shop } from "./Modules/Shop";
import { AxiosInstance } from "axios";

export function ShopeeOpenAPI({
  host,
  partner_id,
  partner_key,
  redirect,
}: {
  host: string;
  partner_id: number;
  partner_key: string;
  redirect: string;
}) {
  return new _ShopeeOpenAPI({ host, partner_id, partner_key, redirect });
}

class _ShopeeOpenAPI {
  private host: string;
  private partner_id: number;
  private partner_key: string;
  private redirect: string;
  private http: AxiosInstance;

  constructor({ host, partner_id, partner_key, redirect }: { host: string; partner_id: number; partner_key: string; redirect: string }) {
    this.host = host;
    this.partner_id = partner_id;
    this.partner_key = partner_key;
    this.redirect = redirect;
    this.http = HttpClient.instance({ host, partner_id, partner_key });
  }

  getAuthLink(): string {
    const apiPath = "/api/v2/shop/auth_partner";
    return this.host + generateQueryParams(apiPath, this.partner_id.toString(), this.partner_key) + `&redirect=${this.redirect}`;
  }

  getUnAuthLink(): string {
    const apiPath = "/api/v2/shop/cancel_auth_partner";
    return this.host + generateQueryParams(apiPath, this.partner_id.toString(), this.partner_key) + `&redirect=${this.redirect}`;
  }

  async getAccessToken(params: { code: string; shop_id: number }): Promise<{
    access_token: string; //4 hours
    error: string;
    request_id: string;
    message: string;
    expire_in: number;
    refresh_token: string; //30 days
  }> {
    const apiPath = "auth/token/get";
    const result = await this.http.post(apiPath, {
      ...params,
      partner_id: this.partner_id,
    });
    return result.data;
  }

  async refreshAccessToken(params: { refresh_token: string; shop_id: number }): Promise<{
    shop_id: number;
    access_token: string; //4 hours
    error: string;
    request_id: string;
    message: string;
    expire_in: number;
    refresh_token: string; //30 days
  }> {
    const apiPath = "auth/access_token/get";
    const result = await this.http.post(apiPath, {
      ...params,
      partner_id: this.partner_id,
    });
    return result.data;
  }

  async getShopsByPartner(params?: { page_size?: number; page_no?: number }): Promise<{
    authed_shop_list: {
      region: string;
      shop_id: number;
      auth_time: number;
      expire_time: number;
      sip_affi_shop_list: { region: string; affi_shop_id: number }[];
    }[];
    request_id: string;
    more: boolean;
  }> {
    const apiPath = "public/get_shops_by_partner";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  createShop(params: { onGetAccessToken: () => Promise<string>; onRefreshAccessToken: () => Promise<string>; shop_id: number }): Shop {
    return new Shop({ host: this.host, partner_id: this.partner_id, partner_key: this.partner_key, ...params });
  }
}
