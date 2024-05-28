import { Todo } from "./../../src/models/Todo";
describe("Todo app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add a todo", () => {
    // Assign
    cy.intercept("POST", "http://awesomeurl.com/create/*", {
      statusCode: 201,
    });

    // Act
    cy.get("input#todoText").type("Testing, testing");
    cy.get("button#save").click();

    // Assert
    cy.get("ul > li")
      .should("have.length", 1)
      .should("have.text", "Testing, testing");
  });

  it("should not add a todo due to error", () => {
    // Assign
    cy.intercept("POST", "http://awesomeurl.com/create/*", {
      statusCode: 418,
    });

    // Act
    cy.get("input#todoText").type("Testing, testing");
    cy.get("button#save").click();

    // Assert
    cy.get("ul > li").should("have.length", 0);
  });

  it("should not add empty todo", () => {
    // Assign

    // Act
    cy.get("button#save").click();

    // Assert
    cy.get("ul > li").should("have.length", 0);
  });

  it("should toggle the todo", () => {
    // Assign
    cy.intercept("POST", "http://awesomeurl.com/create/*", {
      statusCode: 201,
    });

    cy.get("input#todoText").type("Testing, testing");
    cy.get("button#save").click();
    cy.get("ul > li")
      .should("have.length", 1)
      .should("have.text", "Testing, testing")
      .should("not.have.class", "done");

    // Act
    cy.get("ul > li:first").click();

    // Assert
    cy.get("ul > li:first").should("have.class", "done");
  });

  it("should get todos from api", () => {
    cy.intercept("http://awesomeurl.com*", {
      todos: [new Todo("Test 1"), new Todo("Test 2")],
    });

    cy.get("button#getTodos").click();

    cy.get("ul > li").should("have.length", 2);
    cy.get("ul > li:first").should("have.text", "Test 1");
  });

  it("should make the request with correct value", () => {
    cy.intercept("POST", "http://awesomeurl.com/create/*", {
      statusCode: 201,
    }).as("saveTodo");

    // Warning: This will be used in a url. Do not use strange characters :)
    const userInput = "Testing";
    cy.get("input#todoText").type(userInput);
    cy.get("button#save").click();

    cy.wait("@saveTodo").its("request.url").should("contain", userInput);
  });
});
