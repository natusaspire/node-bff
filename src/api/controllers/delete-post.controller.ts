import { inject } from 'inversify';
import { BaseHttpController, controller, httpDelete, interfaces, requestParam, results } from 'inversify-express-utils';

import { IDeletePostCommand } from '../../ports/in/delete-post.command';
import { DeletePostUseCase } from '../../types';

@controller('/posts')
export class DeletePostController extends BaseHttpController implements interfaces.Controller {
  public constructor(@inject(DeletePostUseCase) private readonly deletePostService: IDeletePostCommand) {
    super();
  }

  @httpDelete('/:id')
  public deletePost(@requestParam('id') id: string): Promise<results.OkResult> {
    return this.deletePostService.deletePost(Number(id)).then(this.ok);
  }
}
