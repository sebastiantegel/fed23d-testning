export class Todo {
  done: boolean;

  constructor(public text: string) {
    this.done = false;
  }
}

export interface ITodo {
  done: boolean;
  text: string;
}
