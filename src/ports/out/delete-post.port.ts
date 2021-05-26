export interface IDeletePostPort {
  deletePost(id: number): Promise<void>;
}
