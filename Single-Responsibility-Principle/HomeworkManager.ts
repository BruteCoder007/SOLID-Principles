import { Homework } from "./Homework";

export class HomeworkManager {
  createHomework(homework: Homework): void {
    console.log(`Homework '${homework.getTitle()}' for ${homework.getSubject()} created.`);
  }

  deleteHomework(homework: Homework): void {
    console.log(`Homework '${homework.getTitle()}' deleted.`);
  }
}
