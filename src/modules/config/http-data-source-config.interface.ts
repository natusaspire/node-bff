import { IHttpDataSourceEndpoints } from './http-data-source-endpoints.interface';

export interface IHttpDataSourceConfig {
  baseUrl: string;
  endpoints: IHttpDataSourceEndpoints;
}
