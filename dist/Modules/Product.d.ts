import { AxiosInstance } from "axios";
import { ITEM_STATUS } from "../consts/constants";
export declare class Product {
    private http;
    constructor(http: AxiosInstance);
    getCategory(params?: {
        language?: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getAttributes(params: {
        language?: string;
        category_id: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getBrandList(params: {
        status: number;
        category_id: number;
        page_size: number;
        offset?: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getDtsLimis(params: {
        category_id: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getItemLimit(): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getItemList(params: {
        offset: number;
        page_size: number;
        update_time_from: number;
        update_time_to: number;
        item_status: ITEM_STATUS[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getItemBaseInfo(params: {
        item_id_list: number[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getItemExtraInfo(params: {
        item_id_list: number[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getModelList(params: {
        item_id: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    updateStock(params: {
        item_id: number;
        stock_list: {
            model_id?: number;
            normal_stock: number;
        }[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    boostItem(params: {
        item_id_list: number[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getBoostedList(params: {
        item_id_list: number[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    searchItem(params: {
        offset?: string;
        page_size: number;
        item_name: string;
        attribute_status?: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: any;
        request_id: string;
    }>;
    getComment(params: {
        item_id?: number;
        comment_id?: number;
        cursor: string;
        page_size?: number;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
    replyComment(params: {
        comment_list: {
            comment_id: number;
            comment: string;
        }[];
    }): Promise<{
        error: string;
        message: string;
        response: any;
        warning: string[];
        request_id: string;
    }>;
}
