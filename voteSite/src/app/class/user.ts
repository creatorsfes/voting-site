export class User {
  private _id: number;
  private _name: string;
  private _voteList: string[];
  private _futureList: string[];


  constructor(id: number, name: string, voteList: string[], futureList: string[]) {
    this._id = id;
    this._name = name;
    this._voteList = voteList;
    this._futureList = futureList;
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
   * Getter voteList
   * @return {string[]}
   */
  public get voteList(): string[] {
    return this._voteList;
  }

  /**
   * Setter voteList
   * @param {string[]} value
   */
  public set voteList(value: string[]) {
    this._voteList = value;
  }


  /**
   * Getter futureList
   * @return {string[]}
   */
  public get futureList(): string[] {
    return this._futureList;
  }

  /**
   * Setter futureList
   * @param {string[]} value
   */
  public set futureList(value: string[]) {
    this._futureList = value;
  }

}
