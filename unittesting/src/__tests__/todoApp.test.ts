import { Todo } from "../models/Todo";
import { addTodo, removeTodo, toggleTodo } from "../TodoApp";
import * as htmlFunctions from "./../htmlFunctions";

describe("Todo App", () => {
  let mockedCreateHtml: jest.SpyInstance<void>;

  beforeEach(() => {
    mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
  });

  test("it should add a todo", () => {
    // Assign
    const todoText = "Lär dig vue";
    const todos: Todo[] = [];
    document.body.innerHTML = `<ul id="todoList"></ul>`;

    // Act
    addTodo(todoText, todos);

    // Assert
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe(todoText);
    expect(todos[0].done).toBeFalsy();
    expect(todos[0].id).toBeGreaterThan(0);

    // const liTags = document.getElementsByTagName("li");
    // expect(liTags).toHaveLength(1);
    expect(mockedCreateHtml).toHaveBeenCalled();
  });

  test("it should not add a todo", () => {
    // Assign
    const todoText = "";
    const todos: Todo[] = [];

    // Act
    addTodo(todoText, todos);

    // Assert
    expect(todos).toHaveLength(0);
    expect(mockedCreateHtml).toHaveBeenCalled();
  });

  test("it should toggle", () => {
    // Assign
    const todo: Todo = new Todo("Testing");

    // Act
    toggleTodo(todo);

    // Assert
    expect(todo.done).toBeTruthy();

    // Act
    toggleTodo(todo);

    // Assert
    expect(todo.done).toBeFalsy();
  });

  test("it should remove todo", () => {
    // Assign
    const todo = new Todo("Att ta bort");
    const todos: Todo[] = [todo];

    // Act
    removeTodo(todo.id, todos);

    // Assert
    expect(todos).toHaveLength(0);
    expect(mockedCreateHtml).toHaveBeenCalled();
  });
});
