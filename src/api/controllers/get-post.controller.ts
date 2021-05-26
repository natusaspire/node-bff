import { inject } from 'inversify';
import { BaseHttpController, controller, httpGet, interfaces, requestParam, results } from 'inversify-express-utils';

import { IGetPostQuery } from '../../ports/in/get-post.query';
import { GetPostUseCase } from '../../types';
import { PostConverter } from '../converters/post.converter';

@controller('/posts')
export class GetPostController extends BaseHttpController implements interfaces.Controller {
  public constructor(@inject(GetPostUseCase) private readonly getPostService: IGetPostQuery) {
    super();
  }

  @httpGet('/:id')
  public getPost(@requestParam('id') id: string): Promise<results.JsonResult> {
    return this.getPostService.getPost(Number(id)).then(PostConverter.convertToGetPostResponse).then(this.json);
  }
}
