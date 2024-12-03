import { Homework } from "./Homework";

export class HomeworkReportGenerator {
  generateReport(homework: Homework): string {
    return `Report: Homework '${homework.getTitle()}' is for ${homework.getSubject()}.`;
  }
}
