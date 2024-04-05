import {Product} from './Product';
import {Import} from './Import';
import {Export} from './Export';
import {PerishableProduct} from './PerishableProduct';
import {ShippingCalculator} from './ShippingCalculator';

const importedProduct = new Import(1000);
const exportedProduct = new Export(2000);
const perishableProduct = new PerishableProduct(5000);

const shippingCalculator = new ShippingCalculator();

console.log("Standard Product Shipping Cost:", shippingCalculator.calculate(importedProduct));
console.log("Oversized Product Shipping Cost:", shippingCalculator.calculate(exportedProduct));
console.log("Perishable Product Shipping Cost:", shippingCalculator.calculate(perishableProduct));