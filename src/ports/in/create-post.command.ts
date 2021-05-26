import { ICreatePostCommandDto } from './dtos/create-post-command.dto';

export interface ICreatePostCommand {
  createPost(post: ICreatePostCommandDto): Promise<void>;
}
