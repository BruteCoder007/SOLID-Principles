export class Homework {
  private title: string;
  private subject: string;

  constructor(title: string, subject: string) {
    this.title = title;
    this.subject = subject;
  }

  getTitle(): string {
    return this.title;
  }

  getSubject(): string {
    return this.subject;
  }
}
