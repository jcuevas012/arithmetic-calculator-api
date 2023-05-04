import { Operation } from "../Operation"


export class Record {
  protected id: string
  protected operation: Operation
  protected userId: string
  protected amount: number
  protected userBalance: number
  protected operationResponse: string
  protected date: string


  constructor(userId?: string, operation?: Operation) {
    this.userId = userId
    this.operation = operation && operation
  }


  setId(id: string) {
     this.id = id 
  }

  setOperation(operation: Operation){
     this.operation  = operation
  }

  setUserId(userId: string) {
     this.userId = userId
  }

  setAmount(amount: number) {
     this.amount = amount
  }

  setUserBalance(userBalance: number) {
     this.userBalance = userBalance
  }

  setOperationResponse(operationResponse: string) {
     this.operationResponse = operationResponse
  }  

  setDate(date: string) {
     this.date = date
  }  


  getId() {
    return this.id
  }

  getOperation(){
    return this.operation
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
