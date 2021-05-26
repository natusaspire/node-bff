export class UserHttpEntity {
  public constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly username: string,
    public readonly email: string,
  ) {}
}
