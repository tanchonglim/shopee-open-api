import { AxiosInstance } from "axios";
import { Chat } from "./Chat";
import HttpClient from "../utils/http";
import { Logistics } from "./Logistics";
import { Order } from "./Order";
import { Returns } from "./Returns";
import { Product } from "./Product";

export class Shop {
  // protected host: string;
  // protected partner_id: number;
  // protected partner_key: string;
  // protected shop_id: number;
  protected http: AxiosInstance;

  private _order: Order;
  private _chat: Chat;
  private _logistics: Logistics;
  private _returns: Returns;
  private _product: Product;

  get Order() {
    if (!this._order) this._order = new Order(this.http);
    return this._order;
  }
  get Chat() {
    if (!this._chat) this._chat = new Chat(this.http);
    return this._chat;
  }
  get Logistics() {
    if (!this._logistics) this._logistics = new Logistics(this.http);
    return this._logistics;
  }
  get Returns() {
    if (!this._returns) this._returns = new Returns(this.http);
    return this._returns;
  }
  get Product() {
    if (!this._product) this._product = new Product(this.http);
    return this._product;
  }

  constructor(params: {
    host: string;
    partner_id: number;
    partner_key: string;
    shop_id: number;
    onGetAccessToken: () => Promise<string>;
    onRefreshAccessToken?: () => Promise<string>;
  }) {
    // this.host = params.host;
    // this.partner_id = params.partner_id;
    // this.partner_key = params.partner_key;
    // this.shop_id = params.shop_id;

    this.http = HttpClient.shopApiInstance({
      host: params.host,
      partner_id: params.partner_id,
      partner_key: params.partner_key,
      shop_id: params.shop_id,
      onGetAccessToken: params.onGetAccessToken,
      onRefreshAccessToken: params.onRefreshAccessToken,
    });
  }

  async getShopInfo(): Promise<{
    shop_name: string;
    region: string;
    status: string;
    sip_affi_shops: { affi_shop_id: number; region: string }[];
    is_cb: boolean;
    is_cnsc: boolean;
    request_id: string;
    auth_time: number;
    expire_time: number;
  }> {
    const apiPath = "shop/get_shop_info";
    const result = await this.http.get(apiPath);
    return result.data;
  }

  async getProfile(): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "shop/get_profile";
    const result = await this.http.get(apiPath);
    return result.data;
  }

  async updateProfile(params: { shop_name?: string; shop_logo?: string; description?: string }) {
    const apiPath = "shop/update_profile";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }
}
