import { IUpdatePostCommandDto } from './dtos/update-post-command.dto';

export interface IUpdatePostCommand {
  updatePost(id: number, post: IUpdatePostCommandDto): Promise<void>;
}
