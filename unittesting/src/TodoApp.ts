import { Todo } from "./models/Todo";

export const addTodo = (text: string, theList: Todo[]) => {
  if (text !== "") {
    theList.push(new Todo(text));
  } else {
    console.log("Ingentings läggs till...");
  }
};

export const toggleTodo = (todo: Todo) => {
  todo.done = !todo.done;
};

export const removeTodo = (id: number, theList: Todo[]) => {
  const i = theList.findIndex((todo) => todo.id === id);
  theList.splice(i, 1);
  // theList.filter(todo => todo.id !== id);
};
