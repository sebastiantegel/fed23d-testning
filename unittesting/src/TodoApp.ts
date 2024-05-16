import { createHtml } from "./htmlFunctions";
import { Todo } from "./models/Todo";

const todos: Todo[] = [];

export const addTodo = (text: string, theList: Todo[]) => {
  if (text !== "") {
    theList.push(new Todo(text));
  } else {
    console.log("Ingenting läggs till...");
  }

  createHtml(theList);
};

export const toggleTodo = (todo: Todo) => {
  todo.done = !todo.done;

  createHtml(todos);
};

export const removeTodo = (id: number, theList: Todo[]) => {
  const i = theList.findIndex((todo) => todo.id === id);
  theList.splice(i, 1);
  // theList.filter(todo => todo.id !== id);

  createHtml(theList);
};

createHtml(todos);
