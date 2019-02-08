export class Member {
  private _id: number;
  private _name: string;
  private _romaname: string;
  private _comment: string;
  private _headerimage: string;



  constructor(id: number, name: string, romaname: string, comment: string, headerimage: string) {
    this._id = id;
    this._name = name;
    this._romaname = romaname;
    this._comment = comment;
    this._headerimage = headerimage;
  }


  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }


  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Getter romaname
   * @return {string}
   */
  public get romaname(): string {
    return this._romaname;
  }

  /**
   * Setter romaname
   * @param {string} value
   */
  public set romaname(value: string) {
    this._romaname = value;
  }


  /**
   * Getter comment
   * @return {string}
   */
  public get comment(): string {
    return this._comment;
  }

  /**
   * Setter comment
   * @param {string} value
   */
  public set comment(value: string) {
    this._comment = value;
  }


  /**
   * Getter headerimage
   * @return {string}
   */
  public get headerimage(): string {
    return this._headerimage;
  }

  /**
   * Setter headerimage
   * @param {string} value
   */
  public set headerimage(value: string) {
    this._headerimage = value;
  }

}
