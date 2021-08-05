import { AxiosInstance } from "axios";
import { Chat } from "./Chat";
import { Logistics } from "./Logistics";
import { Order } from "./Order";
export declare class Shop {
    protected host: string;
    protected partner_id: number;
    protected partner_key: string;
    protected shop_id: number;
    protected http: AxiosInstance;
    Order: Order;
    Chat: Chat;
    Logistics: Logistics;
    constructor(params: {
        host: string;
        partner_id: number;
        partner_key: string;
        shop_id: number;
        onGetAccessToken: () => Promise<string>;
        onRefreshAccessToken: () => Promise<string>;
    });
    getShopInfo(): Promise<any>;
    getProfile(): Promise<any>;
    updateProfile(params: {
        shop_name?: string;
        shop_logo?: string;
        description?: string;
    }): Promise<any>;
}
