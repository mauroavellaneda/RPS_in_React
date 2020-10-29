describe("Player can reset the score", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy='title']").should(
      "contain",
      "Welcome to the Rock Paper Scissor game!"
    );
    cy.get("#srt-btn").click();
  });
  it("resets score after a finished game", () => {
    cy.get("[data-cy='rock']").click();
    cy.get("[data-cy='paper']").click();
    cy.get("[data-cy='scissor']").click();
    cy.get("[data-cy='rst-btn']").click();
    cy.get("[data-cy='score-result']").contains("0");
  });

  it("resets score message after a finished game", () => {
    cy.get("[data-cy='rock']").click();
    cy.get("[data-cy='paper']").click();
    cy.get("[data-cy='scissor']").click();
    cy.get("[data-cy='rst-btn']").click();
    cy.get("[data-cy='score-message']").contains("Your time to move!");

  });
});
