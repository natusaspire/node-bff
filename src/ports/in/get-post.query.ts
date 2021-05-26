import { PostEntity } from '../../domain/entities/post.entity';

export interface IGetPostQuery {
  getPost(id: number): Promise<PostEntity>;
}
