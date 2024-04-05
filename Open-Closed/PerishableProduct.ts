
import {Product} from './Product';
export class PerishableProduct implements Product {
    cost :number;
    constructor(cost:number)
    {
      this.cost=cost;
    }
  calculateShippingCost(): number {
    return (20/100)*this.cost; 
  }
}