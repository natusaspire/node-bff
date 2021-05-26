import { UserEntity } from '../../domain/entities/user.entity';

export interface IGetUserQuery {
  getUser(id: number): Promise<UserEntity>;
}
