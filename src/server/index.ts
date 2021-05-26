import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';

import '../api/controllers';
import { container } from '../container';
import { getAppConfig } from './config';
import { getErrorConfig } from './error-config';
import { ConfigService } from '../types';
import { IConfigService } from '../modules/config/config-service.interface';

const { server: serverConfig } = container.get<IConfigService>(ConfigService).getConfig();

new InversifyExpressServer(container)
  .setConfig(getAppConfig)
  .setErrorConfig(getErrorConfig)
  .build()
  .listen(serverConfig.port);
