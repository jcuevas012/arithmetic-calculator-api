
export enum OperationType {
  addition, 
  subtraction, 
  multiplication, 
  division, 
  square_root, 
  random_string
}

export class Operation {
  protected id: string
  protected type: OperationType
  protected cost: number


  getId() {
    return this.id
  }

  getType() {
    return this.type
  }

  getCost() {
    return this.cost
  }



}
