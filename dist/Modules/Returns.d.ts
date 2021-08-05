import { AxiosInstance } from "axios";
import { DISPUTE_REASON } from "../consts/constants";
export declare class Returns {
    private http;
    constructor(http: AxiosInstance);
    getReturnDetail(params: {
        return_sn: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getReturnList(params: {
        page_no: number;
        page_size: number;
        create_time_from?: number;
        create_time_to?: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    confirm(params: {
        return_sn: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    dispute(params: {
        return_sn: string;
        email: string;
        dispute_reason: DISPUTE_REASON;
        dispute_text_reason: string;
        image: [string, string?, string?];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
}
