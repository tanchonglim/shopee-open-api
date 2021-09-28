import { AxiosInstance } from "axios";
import { ADDRESS_TYPE, SHIPPING_DOCUMENT_TYPE } from "../consts/constants";

export class Logistics {
  constructor(private http: AxiosInstance) {}

  async getShippingParameter(params: { order_sn: string }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "logistics/get_shipping_parameter";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }
  async getTrackingNumber(params: {
    order_sn: string;
    package_number?: string;
    response_optional_fields?: string;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "logistics/get_tracking_number";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  async shipOrder(params: {
    order_sn: string;
    pickup?: {
      address_id: number;
      pickup_time_id: string;
      tracking_number?: string;
    };
    dropoff?: {
      branch_id: number;
      sender_real_name: string;
      tracking_number?: string;
    };
    non_integrated?: { tracking_number?: string };
  }): Promise<{ error: string; message: string; request_id: string }> {
    const apiPath = "logistics/ship_order";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async updateShippingOrder(params: {
    order_sn: string;
    package_number?: string;
    pickup: {
      address_id?: number;
      pickup_time_id?: string;
    };
  }): Promise<{ error: string; message: string; request_id: string }> {
    const apiPath = "logistics/update_shipping_order";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async getShippingDocumentParameter(params: {
    order_list: {
      order_sn: string;
      package_number?: string;
    }[];
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "logistics/get_shipping_document_parameter";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async createShippingDocument(params: {
    order_list: {
      order_sn: string;
      package_number: string;
      tracking_number: string;
      shipping_document_type: SHIPPING_DOCUMENT_TYPE;
    }[];
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "logistics/create_shipping_document";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async getShippingDocumentResult(params: {
    order_list: {
      order_sn: string;
      package_number: string;
      shipping_document_type: SHIPPING_DOCUMENT_TYPE;
    }[];
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "logistics/get_shipping_document_result";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async downloadShippingDocument(params: {
    shipping_document_type: SHIPPING_DOCUMENT_TYPE;
    order_list: { order_sn: string; package_number?: string }[];
  }): Promise<{ error?: string; message?; request_id?: string }> {
    const apiPath = "logistics/download_shipping_document";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async getShippingDocumentInfo(params: {
    order_sn: string;
    package_number?: string;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "logistics/get_shipping_document_info";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  async getTrackingInfo(params: {
    order_sn: string;
    package_number?: string;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "logistics/get_tracking_info";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  async getAddressList(): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "logistics/get_address_list";
    const result = await this.http.get(apiPath);
    return result.data;
  }

  async setAddressConfig(params: {
    show_pickup_address: boolean;
    address_type_config: {
      address_id: number;
      address_type: ADDRESS_TYPE[];
    };
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "logistics/set_address_config";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async deleteAddress(params: { address_id: number }): Promise<{ error: string; message: string; request_id: string }> {
    const apiPath = "logistics/delete_address";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async getChannelList(): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "logistics/get_channel_list";
    const result = await this.http.get(apiPath);
    return result.data;
  }

  async updateChannel(params: {
    logistics_channel_id: number;
    enabled?: boolean;
    preferred?: boolean;
    cod_enabled?: boolean;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "logistics/update_channel";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }
  async batchShipOrder(params: {
    order_list: { order_sn: string; package_number?: string }[];
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
    non_integrated?: { tracking_number: string };
  }): Promise<{ error: string; message: string; response: any; warning: any; request_id: string }> {
    const apiPath = "logistics/batch_ship_order";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }
}
