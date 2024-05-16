import { Todo } from "../models/Todo";
import { addTodo, removeTodo, toggleTodo } from "../TodoApp";

describe("Todo App", () => {
  test("it should add a todo", () => {
    // Assign
    const todoText = "Lär dig vue";
    const todos: Todo[] = [];

    // Act
    addTodo(todoText, todos);

    // Assert
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe(todoText);
    expect(todos[0].done).toBeFalsy();
    expect(todos[0].id).toBeGreaterThan(0);
  });

  test("it should not add a todo", () => {
    // Assign
    const todoText = "";
    const todos: Todo[] = [];

    // Act
    addTodo(todoText, todos);

    // Assert
    expect(todos).toHaveLength(0);
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
  });
});
