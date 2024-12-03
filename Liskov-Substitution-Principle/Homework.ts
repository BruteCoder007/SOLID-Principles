import { Content } from "./Content";
import { Reportable } from "./Reportable";
import { Assignable } from "./Assignable";

export class Homework extends Content implements Reportable, Assignable {
  constructor(title: string) {
    super(title);
  }

  generateReport(): void {
    console.log(`Report for homework '${this.title}' generated.`);
  }

  assignToStudents(): void {
    console.log(`Homework '${this.title}' assigned to students.`);
  }
}
