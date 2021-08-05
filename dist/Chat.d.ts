import { AxiosInstance } from "axios";
export declare class Chat {
    private http;
    constructor(http: AxiosInstance);
    getMessage(params: {
        conversation_id: number;
        offset?: any;
        page_size?: any;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    sendMessage(params: {
        to_id: number;
        message_type: string;
        content: any;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getConversationList(params: {
        type: string;
        direction?: string;
        next_timestamp_nano?: number;
        page_size?: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
}
