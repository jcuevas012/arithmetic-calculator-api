
export enum UserStatus {
  active = 'active',
  inactive = 'inactive'
}

export class User {
  protected id: string;
  protected username: string;
  protected password: string;
  protected status: UserStatus;
  protected balance: number;

  constructor() {
    this.status =  UserStatus.active
  }

  setId(id: string) {
    this.id = id
  }

  getId() {
    return this.id;
  }

  setUsername(username: string) {
    this.username = username
  }

  getUserName() {
    return this.username;
  }

  setPassword(password: string) {
    this.password = password
  }

  getPassword() {
    return this.password;
  }

  setStatus(status: UserStatus){
    this.status = status;
  }

  getStatus(){
    return this.status;
  }

  setBalance(balance: number) {
    this.balance = balance
  }

  getBalance() {
    return this.balance;
  }

}
