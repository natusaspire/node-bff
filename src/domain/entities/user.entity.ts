export class UserEntity {
  public constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _username: string,
    private readonly _email: string,
  ) {}

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get username(): string {
    return this._username;
  }

  public get email(): string {
    return this._email;
  }
}
