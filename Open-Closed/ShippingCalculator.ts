
import {Product} from './Product';
export class ShippingCalculator {
  calculate(product: Product): number {
    return product.calculateShippingCost();
  }
}