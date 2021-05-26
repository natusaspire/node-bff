import { PostEntity } from '../../domain/entities/post.entity';

export interface ICreatePostPort {
  createPost(post: PostEntity): Promise<void>;
}
