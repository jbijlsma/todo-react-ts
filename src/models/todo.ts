import { v4 as uuidv4 } from "uuid";

export class Todo {
  id: string;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.id = uuidv4();
  }
}
