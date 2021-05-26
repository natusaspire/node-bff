import { UserEntity } from '../../../domain/entities/user.entity';
import { UserHttpEntity } from '../entities/user.http-entity';

export class UserConverter {
  public static convertToDomainEntity(user: UserHttpEntity): UserEntity {
    return new UserEntity(user.id, user.name, user.username, user.email);
  }

  public static convertToHttpEntity(user: UserEntity): UserHttpEntity {
    return new UserHttpEntity(user.id, user.name, user.username, user.email);
  }
}
