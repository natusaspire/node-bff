import { CommentEntity } from '../../domain/entities/comment.entity';

export interface IGetPostCommentsQuery {
  getPostComments(id: number): Promise<Array<CommentEntity>>;
}
