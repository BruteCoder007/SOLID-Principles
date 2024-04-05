import {EmailSender} from "./EmailSender";
import {NotificationService} from "./NotificationService";
import {SMSSender} from "./SMSSender";


const emailSender = new EmailSender();
const notificationServiceWithEmail = new NotificationService(emailSender);
notificationServiceWithEmail.sendNotification("user@example.com", "Hello, this is an email notification!");

const smsSender = new SMSSender();
const notificationServiceWithSMS = new NotificationService(smsSender);
notificationServiceWithSMS.sendNotification("1234567890", "Hello, this is an SMS notification!");
