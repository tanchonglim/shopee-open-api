import { Shop } from "./Modules/Shop";
export declare function ShopeeOpenAPI({ host, partner_id, partner_key, redirect, }: {
    host: string;
    partner_id: number;
    partner_key: string;
    redirect: string;
}): _ShopeeOpenAPI;
declare class _ShopeeOpenAPI {
    private host;
    private partner_id;
    private partner_key;
    private redirect;
    private http;
    constructor({ host, partner_id, partner_key, redirect }: {
        host: string;
        partner_id: number;
        partner_key: string;
        redirect: string;
    });
    getAuthLink(): string;
    getUnAuthLink(): string;
    getAccessToken(params: {
        code: string;
        shop_id: number;
    }): Promise<{
        access_token: string;
        error: string;
        request_id: string;
        message: string;
        expire_in: number;
        refresh_token: string;
    }>;
    refreshAccessToken(params: {
        refresh_token: string;
        shop_id: number;
    }): Promise<{
        shop_id: number;
        access_token: string;
        error: string;
        request_id: string;
        message: string;
        expire_in: number;
        refresh_token: string;
    }>;
    getShopsByPartner(params?: {
        page_size?: number;
        page_no?: number;
    }): Promise<{
        authed_shop_list: {
            region: string;
            shop_id: number;
            auth_time: number;
            expire_time: number;
            sip_affi_shop_list: {
                region: string;
                affi_shop_id: number;
            }[];
        }[];
        request_id: string;
        more: boolean;
    }>;
    createShop(params: {
        onGetAccessToken: () => Promise<string>;
        onRefreshAccessToken?: () => Promise<string>;
        shop_id: number;
    }): Shop;
}
export {};
