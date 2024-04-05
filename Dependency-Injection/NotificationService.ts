
import {MessageSender} from "./MessageSender";
export class NotificationService {
    private messageSender: MessageSender;

    constructor(messageSender: MessageSender) {
        this.messageSender = messageSender;
    }

    sendNotification(to: string, message: string): void {
        const subject = "Notification";
        const body = `Message: ${message}`;
        this.messageSender.send(to, subject, body);
    }
}