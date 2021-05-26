import { inject } from 'inversify';
import { BaseHttpController, controller, httpGet, interfaces, requestParam, results } from 'inversify-express-utils';

import { IGetPostCommentsQuery } from '../../ports/in/get-post-comments.query';
import { GetPostCommentsUseCase } from '../../types';
import { CommentConverter } from '../converters/comment.converter';

@controller('/posts')
export class GetPostCommentsController extends BaseHttpController implements interfaces.Controller {
  public constructor(@inject(GetPostCommentsUseCase) private readonly getPostCommentsService: IGetPostCommentsQuery) {
    super();
  }

  @httpGet('/:id/comments')
  public getPostComments(@requestParam('id') id: string): Promise<results.JsonResult> {
    return this.getPostCommentsService
      .getPostComments(Number(id))
      .then(comments => comments.map(CommentConverter.convertToGetCommentResponse))
      .then(this.json);
  }
}
