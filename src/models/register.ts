export interface IRegister {
  name: string | null;
  lastName: string;
  street: string;
  district: string;
  number: number;
  registerLocal: string;
  description: string;
}

class RegisterModel implements IRegister {
  private _name: string | null;

  private _lastName: string;

  private _street: string;

  private _district: string;

  private _number: number;

  private _registerLocal: string;

  private _description: string;

  constructor(
    name: string | null,
    lastName: string,
    street: string,
    district: string,
    number: number,
    registerLocal: string,
    description: string,
  ) {
    this._name = name;
    this._lastName = lastName;
    this._street = street;
    this._district = district;
    this._number = number;
    this._registerLocal = registerLocal;
    this._description = description;
  }

  public get name(): string | null {
    return this._name;
  }

  public set name(value: string | null) {
    this._name = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get street(): string {
    return this._street;
  }

  public set street(value: string) {
    this._street = value;
  }

  public get district(): string {
    return this._district;
  }

  public set district(value: string) {
    this._district = value;
  }

  public get number(): number {
    return this._number;
  }

  public set number(value: number) {
    this._number = value;
  }

  public get registerLocal(): string {
    return this._registerLocal;
  }

  public set registerLocal(value: string) {
    this._registerLocal = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public toJSON() {
    return {
      name: this.name,
      lastName: this.lastName,
      street: this.street,
      district: this.district,
      number: this.number,
      registerLocal: this.registerLocal,
      description: this.description,
    };
  }
}

export default RegisterModel;
