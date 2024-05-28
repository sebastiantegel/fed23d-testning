import { IApiResponse } from "./models/IApiResponse";
import { Todo } from "./models/Todo";
import "./style.css";

const todos: Todo[] = [];

document.getElementById("save")?.addEventListener("click", async () => {
  const userInput = (document.getElementById("todoText") as HTMLInputElement)
    .value;

  if (userInput !== "") {
    const response = await fetch(`http://awesomeurl.com/create/${userInput}`, {
      method: "POST",
    });

    if (response.status === 201) {
      todos.push(new Todo(userInput));
      createHtml(todos);
    } else {
      //TODO: Present error message to user
    }
  }
});

document.getElementById("getTodos")?.addEventListener("click", async () => {
  const response = await fetch("http://awesomeurl.com/");
  const data: IApiResponse = await response.json();

  //TODO: Lägg in datan i variabeln todos

  createHtml(data.todos);
});

const createHtml = (theTodos: Todo[]) => {
  const todoList = document.getElementById("todos") as HTMLUListElement;

  todoList.innerHTML = "";

  for (let i = 0; i < theTodos.length; i++) {
    const liTag = document.createElement("li");
    liTag.innerHTML = theTodos[i].text;
    liTag.className = theTodos[i].done ? "done" : "";

    liTag.addEventListener("click", () => {
      theTodos[i].done = !theTodos[i].done;
      createHtml(theTodos);
    });

    todoList.appendChild(liTag);
  }
};
