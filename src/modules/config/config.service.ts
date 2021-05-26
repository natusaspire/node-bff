import { injectable } from 'inversify';
import config from 'config';

import { IConfigService } from './config-service.interface';
import { IConfig } from './config.interface';

@injectable()
export class ConfigService implements IConfigService {
  public getConfig(): IConfig {
    return config.util.toObject() as IConfig;
  }
}
