import { UserEntity } from '../../domain/entities/user.entity';

export interface IGetUserPort {
  getUser(id: number): Promise<UserEntity>;
}
