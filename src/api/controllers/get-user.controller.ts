import { inject } from 'inversify';
import { BaseHttpController, controller, httpGet, interfaces, requestParam, results } from 'inversify-express-utils';

import { IGetUserQuery } from '../../ports/in/get-user.query';
import { GetUserUseCase } from '../../types';
import { UserConverter } from '../converters/user.converter';

@controller('/users')
export class GetUserController extends BaseHttpController implements interfaces.Controller {
  public constructor(@inject(GetUserUseCase) private readonly getUserService: IGetUserQuery) {
    super();
  }

  @httpGet('/:id')
  public getUser(@requestParam('id') id: string): Promise<results.JsonResult> {
    return this.getUserService.getUser(Number(id)).then(UserConverter.convertToGetUserResponse).then(this.json);
  }
}
