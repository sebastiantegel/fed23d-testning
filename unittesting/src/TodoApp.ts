import { Todo } from "./models/Todo";

export const addTodo = (text: string, theList: Todo[]) => {
  theList.push(new Todo(text));
};

export const toggleTodo = (todo: Todo) => {
  todo.done = !todo.done;
};

export const removeTodo = (id: number, theList: Todo[]) => {
  const i = theList.findIndex((todo) => todo.id === id);
  theList.splice(i, 1);
  // theList.filter(todo => todo.id !== id);
};
