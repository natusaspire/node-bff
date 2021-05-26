import { IConfig } from './config.interface';

export interface IConfigService {
  getConfig(): IConfig;
}
