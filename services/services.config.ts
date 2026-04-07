import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "./services.type";
import { getStorage  } from "firebase/storage";
import { initializeApp } from "firebase/app";

export const BASE_API = process.env.NEXT_PUBLIC_API;

export const firebaseConfig = {
  apiKey: "AIzaSyCTllIxhMOCFj8frQeY0YVZnbZiyloIOZ4",
  authDomain: "setapat-mvp.firebaseapp.com",
  projectId: "setapat-mvp",
  storageBucket: "setapat-mvp.appspot.com",
  messagingSenderId: "58587766367",
  appId: "1:58587766367:web:157a79ff2557638c1f45ea",
  measurementId: "G-YTKV1L9LQK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export class ApiProvider {
  private static axiosInstance = axios.create({
    baseURL: BASE_API,
    timeout:120000,
  });

  private static defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  /** Merge headers with auth token and user-provided config */
  private static getHeaders(config?: AxiosRequestConfig) {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
      
    const customerToken =
      typeof window !== "undefined" ? localStorage.getItem("customer_token") : null;

    return {
      ...this.defaultHeaders,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(customerToken ? { "x-customer-token":customerToken} : {}),
      ...config?.headers,
    };
  }

  /** Normalize response */
  private static handleResponse<T>(res: AxiosResponse<ApiResponse<T>>): ApiResponse<T> {
    return {
      data: res.data.data,
      message:res.data.message,
      status: res.data.status,
    };
  }

  /** Normalize error */
  private static handleError<T>(error: AxiosError<ApiResponse>): ApiResponse<T> {
    return {
      message:(error.response?.data.message) || error.message || "Something went wrong",
      status:"failed"
    };
  }

  /** GET request */
  public static async get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.get<ApiResponse<T>>(url, {
        ...config,
        headers: this.getHeaders(config),
        withCredentials:true
      });
      if(res.config.responseType == "blob") return res as any;
      return this.handleResponse(res);
    } catch (error) {
      return this.handleError<T>(error as AxiosError<ApiResponse>);
    }
  }

  /** POST request */
  public static async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.post<ApiResponse<T>>(url, data, {
        ...config,
        headers: this.getHeaders(config),
        withCredentials:true
      });
      return this.handleResponse(res);
    } catch (error) {
      return this.handleError<T>(error as AxiosError<ApiResponse<T>>);
    }
  }

  /** PATCH request */
  public static async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.patch<ApiResponse<T>>(url, data, {
        ...config,
        headers: this.getHeaders(config),
        withCredentials:true
      });
      return this.handleResponse(res);
    } catch (error) {
      return this.handleError<T>(error as AxiosError<ApiResponse<T>>);
    }
  }

  /** PUT request */
  public static async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.put<ApiResponse<T>>(url, data, {
        ...config,
        headers: this.getHeaders(config),
        withCredentials:true
      });
      return this.handleResponse(res);
    } catch (error) {
      return this.handleError<T>(error as AxiosError<ApiResponse<T>>);
    }
  }

  /** DELETE request */
  public static async delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res = await this.axiosInstance.delete<ApiResponse<T>>(url, {
        ...config,
        headers: this.getHeaders(config),
        withCredentials:true
      });
      return this.handleResponse(res);
    } catch (error) {
      return this.handleError<T>(error as AxiosError<ApiResponse<T>>);
    }
  }
}
