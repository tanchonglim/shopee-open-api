import { AxiosInstance } from "axios";
import { MESSAGE_TYPE } from "../consts/constants";

export class Chat {
  constructor(private http: AxiosInstance) {}

  async getMessage(params: {
    conversation_id: number;
    offset?: any;
    page_size?: any;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/get_message";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async sendMessage(params: {
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
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/send_message";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async getConversationList(params: {
    type: string;
    direction: string;
    next_timestamp_nano?: number;
    page_size?: number;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/get_conversation_list";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async getOneConversation(params: { conversation_id: number }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/get_one_conversation";
    const result = await this.http.get(apiPath, {
      params,
    });
    return result.data;
  }

  async deleteConversation(params: { conversation_id: number }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/delete_conversation";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async getUnreadConversationCount(): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/get_unread_conversation_count";
    const result = await this.http.get(apiPath);
    return result.data;
  }

  async pinConversation(params: { conversation_id: number }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/pin_conversation";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async unpinConversation(params: { conversation_id: number }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/unpin_conversation";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async readConversation(params: {
    conversation_id: number;
    last_read_message_id: string;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/read_conversation";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async unreadConversation(params: { conversation_id: number }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/unread_conversation";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async getOfferToggleStatus(): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/get_offer_toggle_status";
    const result = await this.http.get(apiPath);
    return result.data;
  }

  async setOfferToggleStatus(params: { make_offer_status: string }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "sellerchat/set_offer_toggle_status";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  // async uploadImage(params: { file: string }): Promise<{ error: string; message: string; response: any; request_id: string }> {
  //   const apiPath = "sellerchat/upload_image";
  //   const result = await this.http.post(apiPath, params, {});
  //   return result.data;
  // }
}
