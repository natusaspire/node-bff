import { inject, injectable } from 'inversify';

import { IHttpRepository } from './http-repository.interface';
import { CommentEntity } from '../../domain/entities/comment.entity';
import { PostEntity } from '../../domain/entities/post.entity';
import { UserEntity } from '../../domain/entities/user.entity';
import { IConfigService } from '../../modules/config/config-service.interface';
import { IHttpDataSourceConfig } from '../../modules/config/http-data-source-config.interface';
import { IHttpService } from '../../modules/http/http-service.interface';
import { ConfigService, HttpService } from '../../types';
import { CommentConverter } from './converters/comment.converter';
import { PostConverter } from './converters/post.converter';
import { UserConverter } from './converters/user.converter';
import { CommentHttpEntity } from './entities/comment.http-entity';
import { PostHttpEntity } from './entities/post.http-entity';
import { UserHttpEntity } from './entities/user.http-entity';

@injectable()
export class HttpRepository implements IHttpRepository {
  private readonly config: IHttpDataSourceConfig;
  private readonly getPostsEndpoint: string;
  private readonly getUsersEndpoint: string;
  private readonly getCommentsEndpoint: string;
  private readonly createPostEndpoint: string;
  private readonly updatePostEndpoint: string;
  private readonly deletePostEndpoint: string;

  public constructor(
    @inject(ConfigService) configService: IConfigService,
    @inject(HttpService) private readonly httpService: IHttpService,
  ) {
    this.config = configService.getConfig().httpDataSource;
    this.getPostsEndpoint = `${this.config.baseUrl}${this.config.endpoints.getPosts}`;
    this.getUsersEndpoint = `${this.config.baseUrl}${this.config.endpoints.getUsers}`;
    this.getCommentsEndpoint = `${this.config.baseUrl}${this.config.endpoints.getComments}`;
    this.createPostEndpoint = `${this.config.baseUrl}${this.config.endpoints.createPost}`;
    this.updatePostEndpoint = `${this.config.baseUrl}${this.config.endpoints.updatePost}`;
    this.deletePostEndpoint = `${this.config.baseUrl}${this.config.endpoints.deletePost}`;
  }

  public getUser(id: number): Promise<UserEntity> {
    return this.httpService
      .get<UserHttpEntity>(`${this.getUsersEndpoint}/${id}`)
      .then(res => res.json())
      .then(UserConverter.convertToDomainEntity);
  }

  public async getPost(id: number): Promise<PostEntity> {
    const post = await this.httpService.get<PostHttpEntity>(`${this.getPostsEndpoint}/${id}`).then(res => res.json());

    const [author, comments] = await Promise.all([this.getUser(post.userId), this.getPostComments(post.id)]);

    return PostConverter.convertToDomainEntity(post, author, comments);
  }

  public getPostComments(id: number): Promise<Array<CommentEntity>> {
    return this.httpService
      .get<Array<CommentHttpEntity>>(`${this.getCommentsEndpoint}?postId=${id}`)
      .then(res => res.json())
      .then(comments => comments.map(CommentConverter.convertToDomainEntity));
  }

  public async createPost(post: PostEntity): Promise<void> {
    await this.httpService.post<{ id: number }>(this.createPostEndpoint, {
      body: JSON.stringify(PostConverter.convertToHttpEntity(post)),
    });
  }

  public async updatePost(id: number, post: PostEntity): Promise<void> {
    await this.httpService.put<{ id: number }>(`${this.updatePostEndpoint}/${id}`, {
      body: JSON.stringify(PostConverter.convertToHttpEntity(post)),
    });
  }

  public async deletePost(id: number): Promise<void> {
    await this.httpService.delete<Record<string, never>>(`${this.deletePostEndpoint}/${id}`);
  }
}
