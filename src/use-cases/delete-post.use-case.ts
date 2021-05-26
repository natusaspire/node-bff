import { inject, injectable } from 'inversify';

import { IDeletePostCommand } from '../ports/in/delete-post.command';
import { IDeletePostPort } from '../ports/out/delete-post.port';
import { DeletePostPort } from '../types';

@injectable()
export class DeletePostUseCase implements IDeletePostCommand {
  public constructor(@inject(DeletePostPort) private readonly deletePostPort: IDeletePostPort) {}

  public deletePost(id: number): Promise<void> {
    return this.deletePostPort.deletePost(id);
  }
}
