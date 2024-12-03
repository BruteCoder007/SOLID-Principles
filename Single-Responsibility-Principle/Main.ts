import { Homework } from "./Homework";
import { HomeworkManager } from "./HomeworkManager";
import { HomeworkReportGenerator } from "./HomeworkReportGenerator";

const homework = new Homework("Math Assignment", "Mathematics");

const manager = new HomeworkManager();
manager.createHomework(homework);

const reportGenerator = new HomeworkReportGenerator();
const report = reportGenerator.generateReport(homework);
console.log(report);

manager.deleteHomework(homework);
