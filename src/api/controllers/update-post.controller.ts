import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpPut,
  interfaces,
  requestBody,
  requestParam,
  results,
} from 'inversify-express-utils';

import { IUpdatePostCommand } from '../../ports/in/update-post.command';
import { UpdatePostUseCase } from '../../types';
import { IUpdatePostRequestDto } from '../dtos/update-post-request.dto';

@controller('/posts')
export class UpdatePostController extends BaseHttpController implements interfaces.Controller {
  public constructor(@inject(UpdatePostUseCase) private readonly updatePostService: IUpdatePostCommand) {
    super();
  }

  @httpPut('/:id')
  public updatePost(
    @requestParam('id') id: string,
    @requestBody() params: IUpdatePostRequestDto,
  ): Promise<results.OkResult> {
    return this.updatePostService.updatePost(Number(id), params).then(this.ok);
  }
}
