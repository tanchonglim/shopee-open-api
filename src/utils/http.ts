import axios, { AxiosInstance } from "axios";
import crypto from "crypto";
import queryString from "query-string";

function generateSign(partner_key: string, ...params): string {
  const baseString = params.reduce((prev, curr) => (prev += curr), "");
  return crypto.createHmac("sha256", partner_key).update(baseString).digest("hex");
}

export function generateQueryParams(apiPath: string, partner_id: string, partner_key: string, access_token?: string, shop_id?: number): string {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const sign = generateSign(partner_key, partner_id, apiPath, timestamp, access_token || "", shop_id || "");
  return `${apiPath}?${queryString.stringify({
    partner_id: partner_id,
    timestamp,
    sign,
    access_token,
    shop_id,
  })}`;
}

export default class HttpClient {
  static instance({ host, partner_id, partner_key }: { host: string; partner_id: number; partner_key: string }): AxiosInstance {
    const instance = axios.create({
      baseURL: host,
    });

    instance.interceptors.request.use(
      function (config) {
        const parsed = queryString.parseUrl("/api/v2/" + config.url);
        config.url = generateQueryParams(parsed.url, partner_id.toString(), partner_key) + "&" + queryString.stringify(parsed.query);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    instance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        console.log("http error");
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
    return instance;
  }

  static shopApiInstance({
    host,
    partner_id,
    partner_key,
    shop_id,
    onGetAccessToken,
    onRefreshAccessToken,
  }: {
    host: string;
    partner_id: number;
    partner_key: string;
    shop_id: number;
    onGetAccessToken: () => Promise<string>;
    onRefreshAccessToken: () => Promise<string>;
  }): AxiosInstance {
    let refreshTokenPromise: Promise<string>;

    const instance = axios.create({
      baseURL: host,
    });

    instance.interceptors.request.use(
      async function (config) {
        const parsed = queryString.parseUrl("/api/v2/" + config.url);
        const token = await onGetAccessToken();
        config.url = generateQueryParams(parsed.url, partner_id.toString(), partner_key, token, shop_id) + "&" + queryString.stringify(parsed.query);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (error.response.data.error == "error_auth") {
          if (!refreshTokenPromise) refreshTokenPromise = onRefreshAccessToken();

          const newToken = await refreshTokenPromise;
          refreshTokenPromise = null;

          const currentUrl = error.config.url;
          let parsedUrl = queryString.parseUrl(currentUrl);

          delete parsedUrl.query["access_token"];
          delete parsedUrl.query["partner_id"];
          delete parsedUrl.query["shop_id"];
          delete parsedUrl.query["sign"];
          delete parsedUrl.query["timestamp"];

          let config = error.config;
          config.url = generateQueryParams(parsedUrl.url, partner_id.toString(), partner_key, newToken, shop_id) + "&" + queryString.stringify(parsedUrl.query);

          return axios.request(config);
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
    return instance;
  }
}
