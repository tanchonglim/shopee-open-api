import { AxiosInstance } from "axios";
import { ORDER_STATUS } from "./consts/constants";
export declare class Order {
    private http;
    constructor(http: AxiosInstance);
    getOrderList(params: {
        time_from: number;
        time_to: number;
        page_size: number;
        time_range_field?: string;
        cursor?: string;
        order_status?: ORDER_STATUS;
        response_optional_fields?: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getShipmentList(params: {
        page_size: number;
        cursor?: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getOrderDetail(params: {
        order_sn_list: string;
        response_optional_fields?: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
}
