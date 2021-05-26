import { PostEntity } from '../../domain/entities/post.entity';
import { IGetPostResponseDto } from '../dtos/get-post-response.dto';
import { CommentConverter } from './comment.converter';
import { UserConverter } from './user.converter';

export class PostConverter {
  public static convertToGetPostResponse(post: PostEntity): IGetPostResponseDto {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      readingTime: post.getReadingTime(),
      author: UserConverter.convertToGetUserResponse(post.author),
      commentsCount: post.getCommentsCount(),
      comments: post.comments.map(CommentConverter.convertToGetCommentResponse),
    };
  }
}
