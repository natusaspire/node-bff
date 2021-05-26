import { IHttpDataSourceConfig } from './http-data-source-config.interface';
import { IServerConfig } from './server-config.interface';

export interface IConfig {
  server: IServerConfig;
  httpDataSource: IHttpDataSourceConfig;
}
