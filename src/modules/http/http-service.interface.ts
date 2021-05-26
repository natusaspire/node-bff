import { IRequestOptions } from './request-options.interface';
import { IResponse } from './response.interface';

export interface IHttpService {
  get<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  head<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  post<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  put<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  delete<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  connect<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  options<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  trace<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
  patch<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>>;
}
