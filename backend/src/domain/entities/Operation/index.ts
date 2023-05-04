
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
  protected description: string

  constructor(id: string, type: OperationType, cost: number, description: string) {
    this.id = id;
    this.type = type;
    this.cost = cost;
    this.description = description;
  }

  getId() {
    return this.id
  }

  getDescription() {
    return this.description
  }

  getType() {
    return this.type
  }

  getCost() {
    return this.cost
  }



}
