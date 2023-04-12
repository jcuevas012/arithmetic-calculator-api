

export class Operation {
  protected id: string
  protected type: string
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
