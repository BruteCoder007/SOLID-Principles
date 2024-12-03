import { Content } from "./Content";
import { Reportable } from "./Reportable";

export class Worksheet extends Content implements Reportable {
  constructor(title: string) {
    super(title);
  }

  generateReport(): void {
    console.log(`Report for worksheet '${this.title}' generated.`);
  }
}
