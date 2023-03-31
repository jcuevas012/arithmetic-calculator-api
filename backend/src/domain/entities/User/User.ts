
export enum UserStatus {
  active = 'active',
  inactive = 'inactive'
}

export class User {
  protected id: string;
  protected username: string;
  protected password: string;
  protected status: UserStatus;



  constructor() {
    this.status =  UserStatus.active
  }

  setId(id: string) {
    this.id = id
  }

  getId() {
    return this.id;
  }

  setPassword(id: string) {
    this.id = id
  }

  getPassword() {
    return this.id;
  }

  setUsername(username: string) {
    this.username = username
  }


  getUserName() {
    return this.username;
  }

  setStatus(status: UserStatus){
    this.status = status;
  }

  getStatus(){
    return this.status;
  }

}
