export interface ILogin {
  user: string | null;
  password: string;
}

class LoginModel implements ILogin {
  private _user: string | null;

  private _password: string;

  constructor(user: string | null, password: string) {
    this._user = user;
    this._password = password;
  }

  public get user(): string | null {
    return this._user;
  }

  public set user(value: string | null) {
    this._user = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public toJSON() {
    return {
      user: this.user,
      password: this.password,
    };
  }
}

export default LoginModel;
