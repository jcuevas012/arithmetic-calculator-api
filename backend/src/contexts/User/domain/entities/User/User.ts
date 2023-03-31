import IHash from "./hash.interface";



export enum UserStatus {
  active = 'active',
  inactive = 'inactive'
}

export class User {
  protected username: string;
  protected password: string;
  protected status: UserStatus;


  constructor(username: string, password: string, hash: IHash) {
    this.username = username,
    this.password = hash && hash.hashPassword(password);
    this.status = UserStatus.active
  }


  getUserName() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getStatus(){
    return this.status;
  }

}
