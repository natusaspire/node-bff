import { CommentEntity } from '../../domain/entities/comment.entity';
import { IGetCommentResponseDto } from '../dtos/get-comment-response.dto';

export class CommentConverter {
  public static convertToGetCommentResponse(comment: CommentEntity): IGetCommentResponseDto {
    return { id: comment.id, text: comment.text };
  }
}
