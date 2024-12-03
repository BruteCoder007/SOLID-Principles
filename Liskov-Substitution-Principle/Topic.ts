import { Content } from "./Content";
import { Assignable } from "./Assignable";

export class Topic extends Content implements Assignable {
  constructor(title: string) {
    super(title);
  }

  assignToStudents(): void {
    console.log(`Topic '${this.title}' assigned to students.`);
  }
}
