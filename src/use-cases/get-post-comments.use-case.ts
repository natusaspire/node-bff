import { inject, injectable } from 'inversify';

import { CommentEntity } from '../domain/entities/comment.entity';
import { IGetPostCommentsQuery } from '../ports/in/get-post-comments.query';
import { IGetPostCommentsPort } from '../ports/out/get-post-comments.port';
import { GetPostCommentsPort } from '../types';

@injectable()
export class GetPostCommentsUseCase implements IGetPostCommentsQuery {
  public constructor(@inject(GetPostCommentsPort) private readonly getPostCommentsPort: IGetPostCommentsPort) {}

  public getPostComments(id: number): Promise<Array<CommentEntity>> {
    return this.getPostCommentsPort.getPostComments(id);
  }
}
