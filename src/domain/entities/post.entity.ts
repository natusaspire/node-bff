import { CommentEntity } from './comment.entity';
import { UserEntity } from './user.entity';

export class PostEntity {
  private constructor(
    private _title: string,
    private _content: string,
    private readonly _author: UserEntity,
    private readonly _comments: Array<CommentEntity>,
    private readonly _id?: number,
  ) {}

  public static validateTitle(title: string): void {
    if (title === undefined || title === null) throw new Error('Title is not defined');
    if (title.length < 10 || title.length > 100) throw new Error('Invalid title length');
  }

  public static validateContent(content: string): void {
    if (content === undefined || content === null) throw new Error('Content is not defined');
    if (content.length < 10 || content.length > 10000) throw new Error('Invalid content length');
  }

  public static create(
    title: string,
    content: string,
    author: UserEntity,
    comments: Array<CommentEntity> = [],
    id?: number,
  ): PostEntity {
    PostEntity.validateTitle(title);
    PostEntity.validateContent(content);

    return new PostEntity(title, content, author, comments, id);
  }

  public get id(): number | undefined {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get content(): string {
    return this._content;
  }

  public get author(): UserEntity {
    return this._author;
  }

  public get comments(): Array<CommentEntity> {
    return this._comments;
  }

  public getReadingTime(): number {
    const minutes = (this.getTitleLength() + this.getContentLength()) / 200;
    const intMinutes = Math.trunc(minutes);

    return intMinutes + Math.round((minutes - intMinutes) * 0.6);
  }

  public getTitleLength(): number {
    return this._title.length;
  }

  public getContentLength(): number {
    return this._content.length;
  }

  public getCommentsCount(): number {
    return this._comments.length;
  }

  public updateTitle(title: string): void {
    PostEntity.validateTitle(title);

    this._title = title;
  }

  public updateContent(content: string): void {
    PostEntity.validateContent(content);

    this._content = content;
  }
}
