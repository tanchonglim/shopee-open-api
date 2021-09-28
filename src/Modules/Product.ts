import { AxiosInstance } from "axios";
import { ITEM_STATUS } from "../consts/constants";
export class Product {
  constructor(private http: AxiosInstance) {}

  async getCategory(params?: { language?: string }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_category";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async getAttributes(params: {
    language?: string;
    category_id: number;
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_attributes";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async getBrandList(params: {
    status: number;
    category_id: number;
    page_size: number;
    offset?: number;
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_brand_list";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async getDtsLimis(params: { category_id: number }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_dts_limit";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async getItemLimit(): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_item_limit";
    const result = await this.http.get(apiPath);
    return result.data;
  }

  async getItemList(params: {
    offset: number;
    page_size: number;
    update_time_from?: number;
    update_time_to?: number;
    item_status: ITEM_STATUS[];
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_item_list";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async getItemBaseInfo(params: {
    item_id_list: number[];
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_item_base_info";
    const result = await this.http.get(apiPath, {
      params: {
        item_id_list: params.item_id_list.join(","),
      },
    });
    return result.data;
  }

  async getItemExtraInfo(params: {
    item_id_list: number[];
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_item_extra_info";
    const result = await this.http.get(apiPath, {
      params: {
        item_id_list: params.item_id_list.join(","),
      },
    });
    return result.data;
  }

  //more api here

  async getModelList(params: { item_id: number }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_model_list";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async updateStock(params: {
    item_id: number;
    stock_list: { model_id?: number; normal_stock: number }[];
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/update_stock";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async boostItem(params: { item_id_list: number[] }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/boost_item";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async getBoostedList(params: {
    item_id_list: number[];
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/get_boosted_list";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async searchItem(params: {
    offset?: string;
    page_size: number;
    item_name: string;
    attribute_status?: number;
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "product/search_item";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async getComment(params: {
    item_id?: number;
    comment_id?: number;
    cursor: string;
    page_size?: number;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "product/get_comment";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async replyComment(params: {
    comment_list: {
      comment_id: number;
      comment: string;
    }[];
  }): Promise<{ error: string; message: string; response: any; warning: string[]; request_id: string }> {
    const apiPath = "product/reply_comment";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }
}
