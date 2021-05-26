import { inject, injectable } from 'inversify';

import { IUpdatePostCommand } from '../ports/in/update-post.command';
import { IUpdatePostCommandDto } from '../ports/in/dtos/update-post-command.dto';
import { IGetPostPort } from '../ports/out/get-post.port';
import { IUpdatePostPort } from '../ports/out/update-post.port';
import { GetPostPort, UpdatePostPort } from '../types';

@injectable()
export class UpdatePostUseCase implements IUpdatePostCommand {
  public constructor(
    @inject(GetPostPort) private readonly getPostPort: IGetPostPort,
    @inject(UpdatePostPort) private readonly updatePostPort: IUpdatePostPort,
  ) {}

  public async updatePost(id: number, params: IUpdatePostCommandDto): Promise<void> {
    const post = await this.getPostPort.getPost(id);

    post.updateTitle(params.title);
    post.updateContent(params.content);

    return this.updatePostPort.updatePost(id, post);
  }
}
