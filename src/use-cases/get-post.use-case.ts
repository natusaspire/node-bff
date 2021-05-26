import { inject, injectable } from 'inversify';

import { PostEntity } from '../domain/entities/post.entity';
import { IGetPostQuery } from '../ports/in/get-post.query';
import { IGetPostPort } from '../ports/out/get-post.port';
import { GetPostPort } from '../types';

@injectable()
export class GetPostUseCase implements IGetPostQuery {
  public constructor(@inject(GetPostPort) private readonly getPostPort: IGetPostPort) {}

  public getPost(id: number): Promise<PostEntity> {
    return this.getPostPort.getPost(id);
  }
}
