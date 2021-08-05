import { AxiosInstance } from "axios";
import { ADDRESS_TYPE, SHIPPING_DOCUMENT_TYPE } from "../consts/constants";
export declare class Logistics {
    private http;
    constructor(http: AxiosInstance);
    getShippingParameter(params: {
        order_sn: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getTrackingNumber(params: {
        order_sn: string;
        package_number?: string;
        response_optional_fields?: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    shipOrder(params: {
        order_sn: string;
        pickup?: {
            address_id: number;
            pickup_time_id: string;
            tracking_number: string;
        };
        dropoff?: {
            branch_id: number;
            sender_real_name: string;
            tracking_number: string;
        };
        non_integrated?: {
            tracking_number: string;
        };
    }): Promise<{
        error: string;
        message: string;
        request_id: string;
    }>;
    updateShippingOrder(params: {
        order_sn: string;
        package_number?: string;
        pickup: {
            address_id?: number;
            pickup_time_id?: string;
        };
    }): Promise<{
        error: string;
        message: string;
        request_id: string;
    }>;
    getShippingDocumentParameter(params: {
        order_list: {
            order_sn: string;
            package_number?: string;
        }[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    createShippingDocument(params: {
        order_list: {
            order_sn: string;
            package_number: string;
            tracking_number: string;
            shipping_document_type: SHIPPING_DOCUMENT_TYPE;
        }[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getShippingDocumentResult(params: {
        order_list: {
            order_sn: string;
            package_number: string;
            shipping_document_type: SHIPPING_DOCUMENT_TYPE;
        }[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    downloadShippingDocument(params: {
        shipping_document_type: SHIPPING_DOCUMENT_TYPE;
        order_list: {
            order_sn: string;
            package_number?: string;
        }[];
    }): Promise<{
        error?: string;
        message?: any;
        request_id?: string;
    }>;
    getShippingDocumentInfo(params: {
        order_sn: string;
        package_number?: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getTrackingInfo(params: {
        order_sn: string;
        package_number?: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getAddressList(): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    setAddressConfig(params: {
        show_pickup_address: boolean;
        address_type_config: {
            address_id: number;
            address_type: ADDRESS_TYPE[];
        };
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    deleteAddress(params: {
        address_id: number;
    }): Promise<{
        error: string;
        message: string;
        request_id: string;
    }>;
    getChannelList(): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    updateChannel(params: {
        logistics_channel_id: number;
        enabled?: boolean;
        preferred?: boolean;
        cod_enabled?: boolean;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    batchShipOrder(params: {
        order_list: {
            order_sn: string;
            package_number?: string;
        }[];
        pickup?: {
            address_id: number;
            pickup_time_id: string;
            tracking_number: string;
        };
        dropoff?: {
            branch_id: number;
            sender_real_name: string;
            tracking_number: string;
        };
        non_integrated?: {
            tracking_number: string;
        };
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
}
