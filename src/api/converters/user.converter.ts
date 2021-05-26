import { UserEntity } from '../../domain/entities/user.entity';
import { IGetUserResponseDto } from '../dtos/get-user-response.dto';

export class UserConverter {
  public static convertToGetUserResponse(user: UserEntity): IGetUserResponseDto {
    return { id: user.id, name: user.name, username: user.username, email: user.email };
  }
}
