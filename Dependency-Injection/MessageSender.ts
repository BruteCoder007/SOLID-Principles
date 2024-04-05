export interface MessageSender {
    send(to: string, subject: string, body: string): void;
}
