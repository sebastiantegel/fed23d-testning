import { Todo } from "./models/Todo";

export const createHtml = (theList: Todo[]) => {
  // Rensa en ul på innehåll
  const todoList = document.getElementById("todoList");

  if (todoList) todoList.innerHTML = "";

  // Loopa theList
  for (let i = 0; i < theList.length; i++) {
    //  Skapa li-taggar
    const listItem = document.createElement("li");
    listItem.innerHTML = theList[i].text;

    todoList?.appendChild(listItem);
  }
};
