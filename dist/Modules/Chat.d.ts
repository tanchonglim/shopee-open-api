import { AxiosInstance } from "axios";
import { MESSAGE_TYPE } from "../consts/constants";
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
        message_type: MESSAGE_TYPE;
        content: {
            text?: string;
            sticker_id?: string;
            sticker_package_id?: string;
            image_url?: string;
            item_id?: number;
            order_sn?: string;
        };
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getConversationList(params: {
        type: string;
        direction: string;
        next_timestamp_nano?: number;
        page_size?: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getOneConversation(params: {
        conversation_id: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    deleteConversation(params: {
        conversation_id: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getUnreadConversationCount(): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    pinConversation(params: {
        conversation_id: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    unpinConversation(params: {
        conversation_id: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    readConversation(params: {
        conversation_id: number;
        last_read_message_id: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    unreadConversation(params: {
        conversation_id: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    getOfferToggleStatus(): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    setOfferToggleStatus(params: {
        make_offer_status: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
}
