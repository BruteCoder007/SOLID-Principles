import {MessageSender} from "./MessageSender";
export class EmailSender implements MessageSender {
    send(to: string, subject: string, body: string): void {
  
        console.log(`Sending email to ${to} with subject '${subject}' and body: ${body}`);
    }
}