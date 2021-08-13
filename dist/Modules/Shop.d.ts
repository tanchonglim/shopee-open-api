import { AxiosInstance } from "axios";
import { Chat } from "./Chat";
import { Logistics } from "./Logistics";
import { Order } from "./Order";
import { Returns } from "./Returns";
import { Product } from "./Product";
export declare class Shop {
    protected http: AxiosInstance;
    private _order;
    private _chat;
    private _logistics;
    private _returns;
    private _product;
    get Order(): Order;
    get Chat(): Chat;
    get Logistics(): Logistics;
    get Returns(): Returns;
    get Product(): Product;
    constructor(params: {
        host: string;
        partner_id: number;
        partner_key: string;
        shop_id: number;
        onGetAccessToken: () => Promise<string>;
        onRefreshAccessToken?: () => Promise<string>;
    });
    getShopInfo(): Promise<{
        shop_name: string;
        region: string;
        status: string;
        sip_affi_shops: {
            affi_shop_id: number;
            region: string;
        }[];
        is_cb: boolean;
        is_cnsc: boolean;
        request_id: string;
        auth_time: number;
        expire_time: number;
    }>;
    getProfile(): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    updateProfile(params: {
        shop_name?: string;
        shop_logo?: string;
        description?: string;
    }): Promise<any>;
}
