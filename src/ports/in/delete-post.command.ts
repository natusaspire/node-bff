export interface IDeletePostCommand {
  deletePost(id: number): Promise<void>;
}
