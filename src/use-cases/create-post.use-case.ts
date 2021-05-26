import { inject, injectable } from 'inversify';
import { PostEntity } from '../domain/entities/post.entity';

import { ICreatePostCommand } from '../ports/in/create-post.command';
import { ICreatePostCommandDto } from '../ports/in/dtos/create-post-command.dto';
import { ICreatePostPort } from '../ports/out/create-post.port';
import { IGetUserPort } from '../ports/out/get-user.port';
import { CreatePostPort, GetUserPort } from '../types';

@injectable()
export class CreatePostUseCase implements ICreatePostCommand {
  public constructor(
    @inject(CreatePostPort) private readonly createPostPort: ICreatePostPort,
    @inject(GetUserPort) private readonly getUserPort: IGetUserPort,
  ) {}

  public async createPost(params: ICreatePostCommandDto): Promise<void> {
    const author = await this.getUserPort.getUser(1);
    const post = PostEntity.create(params.title, params.content, author);

    return this.createPostPort.createPost(post);
  }
}
