import { injectable } from 'inversify';
import fetch from 'node-fetch';

import { IHttpService } from './http-service.interface';
import { RequestMethod } from './request-method.enum';
import { IRequestOptions } from './request-options.interface';
import { IResponse } from './response.interface';

@injectable()
export class HttpService implements IHttpService {
  public get<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.GET, options);
  }

  public head<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.HEAD, options);
  }

  public post<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.POST, options);
  }

  public put<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.PUT, options);
  }

  public delete<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.DELETE, options);
  }

  public connect<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.CONNECT, options);
  }

  public options<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.OPTIONS, options);
  }

  public trace<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.TRACE, options);
  }

  public patch<T = unknown>(url: string, options?: IRequestOptions): Promise<IResponse<T>> {
    return this.makeRequest<T>(url, RequestMethod.PATCH, options);
  }

  private makeRequest<T = unknown>(
    url: string,
    method: RequestMethod,
    { headers = new Map(), maxRedirects, maxBodySize, ...options }: IRequestOptions = {},
  ): Promise<IResponse<T>> {
    return fetch(url, {
      ...options,
      method,
      headers: [...headers.entries()],
      follow: maxRedirects,
      size: maxBodySize,
    }).then(res => ({
      headers: new Map([...res.headers.entries()]),
      status: res.status,
      statusText: res.statusText,
      json: () => res.json(),
      text: () => res.text(),
    }));
  }
}
