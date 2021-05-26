import { inject } from 'inversify';
import { BaseHttpController, controller, httpPost, interfaces, requestBody, results } from 'inversify-express-utils';

import { ICreatePostCommand } from '../../ports/in/create-post.command';
import { CreatePostUseCase } from '../../types';
import { ICreatePostRequestDto } from '../dtos/create-post-request.dto';

@controller('/posts')
export class CreatePostController extends BaseHttpController implements interfaces.Controller {
  public constructor(@inject(CreatePostUseCase) private readonly createPostService: ICreatePostCommand) {
    super();
  }

  @httpPost('/')
  public createPost(@requestBody() params: ICreatePostRequestDto): Promise<results.OkResult> {
    return this.createPostService.createPost(params).then(this.ok);
  }
}
