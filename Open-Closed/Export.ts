import {Product} from './Product';
export class Export implements Product {
  cost :number;
  constructor(cost:number)
  {
    this.cost=cost;
  }
  calculateShippingCost(): number {
    return (10/100)*this.cost;
  }
}