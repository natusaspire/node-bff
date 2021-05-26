import { PostEntity } from '../../domain/entities/post.entity';

export interface IGetPostPort {
  getPost(id: number): Promise<PostEntity>;
}
