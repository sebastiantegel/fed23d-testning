describe("Todo app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add a todo", () => {
    // Assign

    // Act
    cy.get("input#todoText").type("Testing, testing");
    cy.get("button#save").click();

    // Assert
    cy.get("ul > li")
      .should("have.length", 1)
      .should("have.text", "Testing, testing");
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
});
