import { AxiosInstance } from "axios";
export declare function generateQueryParams(apiPath: string, partner_id: string, partner_key: string, access_token?: string, shop_id?: number): string;
export default class HttpClient {
    static instance({ host, partner_id, partner_key }: {
        host: string;
        partner_id: number;
        partner_key: string;
    }): AxiosInstance;
    static shopApiInstance({ host, partner_id, partner_key, shop_id, onGetAccessToken, onRefreshAccessToken, }: {
        host: string;
        partner_id: number;
        partner_key: string;
        shop_id: number;
        onGetAccessToken: () => Promise<string>;
        onRefreshAccessToken: () => Promise<string>;
    }): AxiosInstance;
}
