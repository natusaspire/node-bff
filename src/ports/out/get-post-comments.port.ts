import { CommentEntity } from '../../domain/entities/comment.entity';

export interface IGetPostCommentsPort {
  getPostComments(id: number): Promise<Array<CommentEntity>>;
}
