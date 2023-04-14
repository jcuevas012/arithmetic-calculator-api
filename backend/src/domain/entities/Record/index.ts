import { Operation } from "../Operation"
import { User } from "../User"


export class Record {
  protected id: string
  protected operationId: string
  protected userId: string
  protected amount: number
  protected userBalance: number
  protected operationResponse: number
  protected date: string


  constructor(userId: string, operation: Operation) {
    this.userId = userId
    this.operationId = operation.getId()
  }

  getId() {
    return this.id
  }

  getOperationId(){
    return this.operationId
  }

  getUserId() {
    return this.userId
  }

  getAmount() {
    return this.amount
  }

  getUserBalance() {
    return this.userBalance
  }

  getOperationResponse() {
    return this.operationResponse
  }  

  getDate() {
    return this.date
  }  

}
