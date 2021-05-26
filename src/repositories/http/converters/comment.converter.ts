import { CommentEntity } from '../../../domain/entities/comment.entity';
import { CommentHttpEntity } from '../entities/comment.http-entity';

export class CommentConverter {
  public static convertToDomainEntity(comment: CommentHttpEntity): CommentEntity {
    return new CommentEntity(comment.id, comment.body);
  }

  public static convertToHttpEntity(comment: CommentEntity): CommentHttpEntity {
    return new CommentHttpEntity(comment.id, comment.text);
  }
}
