import { Container } from 'inversify';

import * as types from './types';
import { IConfigService } from './modules/config/config-service.interface';
import { ConfigService } from './modules/config/config.service';
import { IHttpService } from './modules/http/http-service.interface';
import { HttpService } from './modules/http/http.service';
import { IGetUserPort } from './ports/out/get-user.port';
import { HttpRepository } from './repositories/http/http.repository';
import { IGetPostPort } from './ports/out/get-post.port';
import { IGetPostCommentsPort } from './ports/out/get-post-comments.port';
import { ICreatePostPort } from './ports/out/create-post.port';
import { IUpdatePostPort } from './ports/out/update-post.port';
import { IDeletePostPort } from './ports/out/delete-post.port';
import { IGetUserQuery } from './ports/in/get-user.query';
import { GetUserUseCase } from './use-cases/get-user.use-case';
import { IGetPostQuery } from './ports/in/get-post.query';
import { GetPostUseCase } from './use-cases/get-post.use-case';
import { IGetPostCommentsQuery } from './ports/in/get-post-comments.query';
import { GetPostCommentsUseCase } from './use-cases/get-post-comments.use-case';
import { ICreatePostCommand } from './ports/in/create-post.command';
import { CreatePostUseCase } from './use-cases/create-post.use-case';
import { IUpdatePostCommand } from './ports/in/update-post.command';
import { UpdatePostUseCase } from './use-cases/update-post.use-case';
import { IDeletePostCommand } from './ports/in/delete-post.command';
import { DeletePostUseCase } from './use-cases/delete-post.use-case';

export const container = new Container({ defaultScope: 'Singleton' });

container.bind<IConfigService>(types.ConfigService).to(ConfigService);
container.bind<IHttpService>(types.HttpService).to(HttpService);

container.bind<IGetUserPort>(types.GetUserPort).to(HttpRepository);
container.bind<IGetPostPort>(types.GetPostPort).to(HttpRepository);
container.bind<IGetPostCommentsPort>(types.GetPostCommentsPort).to(HttpRepository);
container.bind<ICreatePostPort>(types.CreatePostPort).to(HttpRepository);
container.bind<IUpdatePostPort>(types.UpdatePostPort).to(HttpRepository);
container.bind<IDeletePostPort>(types.DeletePostPort).to(HttpRepository);

container.bind<IGetUserQuery>(types.GetUserUseCase).to(GetUserUseCase);
container.bind<IGetPostQuery>(types.GetPostUseCase).to(GetPostUseCase);
container.bind<IGetPostCommentsQuery>(types.GetPostCommentsUseCase).to(GetPostCommentsUseCase);
container.bind<ICreatePostCommand>(types.CreatePostUseCase).to(CreatePostUseCase);
container.bind<IUpdatePostCommand>(types.UpdatePostUseCase).to(UpdatePostUseCase);
container.bind<IDeletePostCommand>(types.DeletePostUseCase).to(DeletePostUseCase);
