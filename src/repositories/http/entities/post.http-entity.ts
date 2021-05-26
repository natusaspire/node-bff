export class PostHttpEntity {
  public constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly body: string,
    public readonly userId: number,
  ) {}
}
