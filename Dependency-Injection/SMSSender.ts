import {MessageSender} from "./MessageSender";
export class SMSSender implements MessageSender {
    send(to: string, subject: string, body: string): void {
        console.log(`Sending SMS to ${to} with subject '${subject}' and body: ${body}`);
    }
}