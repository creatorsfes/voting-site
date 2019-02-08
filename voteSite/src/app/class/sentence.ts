export class Sentence {
  private _id: number;
  private _name: string;
  private _romaname: string;
  private _comment: string;
  private _headerimage: string;
  private _image: string[];
  private _voteCnt: number;



  constructor(id: number, name: string, romaname: string, comment: string, headerimage: string, image: string[], voteCnt: number) {
    this._id = id;
    this._name = name;
    this._romaname = romaname;
    this._comment = comment;
    this._headerimage = headerimage;
    this._image = image;
    this._voteCnt = voteCnt;
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

  /**
   * Getter image
   * @return {string[]}
   */
  public get image(): string[] {
    return this._image;
  }

  /**
   * Setter image
   * @param {string[]} value
   */
  public set image(value: string[]) {
    this._image = value;
  }

  /**
   * Getter voteCnt
   * @return {number}
   */
  public get voteCnt(): number {
    return this._voteCnt;
  }

  /**
   * Setter voteCnt
   * @param {number} value
   */
  public set voteCnt(value: number) {
    this._voteCnt = value;
  }

}
