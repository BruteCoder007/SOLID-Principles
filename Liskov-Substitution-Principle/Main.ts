import { Homework } from "./Homework";
import { Topic } from "./Topic";
import { Worksheet } from "./Worksheet";

// Create instances
const mathHomework = new Homework("Math Homework");
const scienceWorksheet = new Worksheet("Science Worksheet");
const historyTopic = new Topic("History Topic");

// Using Homework
mathHomework.createContent();
mathHomework.generateReport();
mathHomework.assignToStudents();

// Using Worksheet
scienceWorksheet.createContent();
scienceWorksheet.generateReport();

// Using Topic
historyTopic.createContent();
historyTopic.assignToStudents();
