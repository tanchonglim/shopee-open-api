import { AxiosInstance } from "axios";
import { CANCEL_REASON, OPERATION, ORDER_STATUS } from "../consts/constants";

export class Order {
  constructor(private http: AxiosInstance) {}

  async getOrderList(params: {
    time_from: number;
    time_to: number;
    page_size: number;
    time_range_field?: string;
    cursor?: string;
    order_status?: ORDER_STATUS;
    response_optional_fields?: string;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    if (!params.time_range_field) params.time_range_field = "create_time";

    const apiPath = "order/get_order_list";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  async getShipmentList(params: { page_size: number; cursor?: string }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "order/get_shipment_list";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  async getOrderDetail(params: {
    order_sn_list: string;
    response_optional_fields?: string;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "order/get_order_detail";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  async splitOrder(params: { order_sn: string; package_list: any[] }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "order/split_order";
    const result = await this.http.post(apiPath, { params });
    return result.data;
  }

  async unsplitOrder(params: { order_sn: string }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "order/unsplit_order";
    const result = await this.http.post(apiPath, { params });
    return result.data;
  }

  async cancelOrder(params: {
    order_sn: string;
    cancel_reason: CANCEL_REASON;
    item_list: any[];
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "order/cancel_order";
    const result = await this.http.post(apiPath, { params });
    return result.data;
  }

  async handleBuyerCancellation(params: { order_sn: string; operation: OPERATION }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "order/handle_buyer_cancellation";
    const result = await this.http.post(apiPath, { params });
    return result.data;
  }

  async setNote(params: { order_sn: string; note: string }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "order/set_note";
    const result = await this.http.post(apiPath, { params });
    return result.data;
  }

  async addInvoiceData(params: { order_sn: string; invoice_data: any }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "order/add_invoice_data";
    const result = await this.http.post(apiPath, { params });
    return result.data;
  }
}
