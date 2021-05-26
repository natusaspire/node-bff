import { CommentEntity } from '../../../domain/entities/comment.entity';
import { PostEntity } from '../../../domain/entities/post.entity';
import { UserEntity } from '../../../domain/entities/user.entity';
import { PostHttpEntity } from '../entities/post.http-entity';

export class PostConverter {
  public static convertToDomainEntity(
    post: PostHttpEntity,
    user: UserEntity,
    comments: Array<CommentEntity>,
  ): PostEntity {
    return PostEntity.create(post.title, post.body, user, comments, post.id);
  }

  public static convertToHttpEntity(post: PostEntity): PostHttpEntity {
    return new PostHttpEntity(post.id, post.title, post.content, post.author.id);
  }
}
