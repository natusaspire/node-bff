import { inject, injectable } from 'inversify';

import { UserEntity } from '../domain/entities/user.entity';
import { IGetUserQuery } from '../ports/in/get-user.query';
import { IGetUserPort } from '../ports/out/get-user.port';
import { GetUserPort } from '../types';

@injectable()
export class GetUserUseCase implements IGetUserQuery {
  public constructor(@inject(GetUserPort) private readonly getUserPort: IGetUserPort) {}

  public getUser(id: number): Promise<UserEntity> {
    return this.getUserPort.getUser(id);
  }
}
