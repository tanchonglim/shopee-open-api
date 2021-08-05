import { AxiosInstance } from "axios";
export declare class Logistics {
    private http;
    constructor(http: AxiosInstance);
    shipOrder(params: {
        order_sn: string;
        pickup?: any;
        dropoff?: any;
        non_integrated?: any;
    }): Promise<{
        error: string;
        message: string;
        request_id: string;
    }>;
}
