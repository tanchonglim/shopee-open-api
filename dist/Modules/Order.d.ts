import { AxiosInstance } from "axios";
import { CANCEL_REASON, OPERATION, ORDER_STATUS } from "../consts/constants";
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
    splitOrder(params: {
        order_sn: string;
        package_list: any[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    unsplitOrder(params: {
        order_sn: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    cancelOrder(params: {
        order_sn: string;
        cancel_reason: CANCEL_REASON;
        item_list: any[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    handleBuyerCancellation(params: {
        order_sn: string;
        operation: OPERATION;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    setNote(params: {
        order_sn: string;
        note: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    addInvoiceData(params: {
        order_sn: string;
        invoice_data: any;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
}
