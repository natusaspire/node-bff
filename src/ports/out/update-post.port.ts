import { PostEntity } from '../../domain/entities/post.entity';

export interface IUpdatePostPort {
  updatePost(id: number, post: PostEntity): Promise<void>;
}
