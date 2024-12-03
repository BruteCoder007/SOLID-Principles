export class Content {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  createContent(): void {
    console.log(`${this.title} created.`);
  }
}
