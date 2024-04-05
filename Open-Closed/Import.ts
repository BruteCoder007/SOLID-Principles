
import {Product} from './Product';
export class Import implements Product {
  cost :number;
  constructor(cost:number)
  {
    this.cost=cost;
  }
  calculateShippingCost(): number {
    return (5/100)*this.cost ; 
  }
}