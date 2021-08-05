import { AxiosInstance } from "axios";
import { DISPUTE_REASON } from "../consts/constants";

export class Returns {
  constructor(private http: AxiosInstance) {}

  async getReturnDetail(params: { return_sn: number }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "returns/get_return_detail";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  async getReturnList(params: {
    page_no: number;
    page_size: number;
    create_time_from?: number;
    create_time_to?: number;
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "returns/get_return_list";
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }

  async confirm(params: { return_sn: string }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "returns/confirm";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }

  async dispute(params: {
    return_sn: string;
    email: string;
    dispute_reason: DISPUTE_REASON;
    dispute_text_reason: string;
    image: [string, string?, string?];
  }): Promise<{ error: string; message: string; response: any; request_id: string }> {
    const apiPath = "returns/dispute";
    const result = await this.http.post(apiPath, params);
    return result.data;
  }
}
