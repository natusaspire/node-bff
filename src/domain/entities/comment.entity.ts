export class CommentEntity {
  public constructor(private readonly _id: number, private readonly _text: string) {}

  public get id(): number {
    return this._id;
  }

  public get text(): string {
    return this._text;
  }
}
