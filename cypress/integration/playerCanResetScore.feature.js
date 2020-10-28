describe("Player can reset the score", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy='title']").should(
      "contain",
      "Welcome to the Rock Paper Scissor game!"
    );
    cy.get("#srt-btn").click();
  });
  it("after playing 3 games in a row", () => {
    cy.get("[data-cy='rock']").click();
    cy.get("[data-cy='paper']").click();
    cy.get("[data-cy='scissor']").click();
    cy.get("[data-cy='rst-btn']").click();
    cy.get("[data-cy='score-result']").contains("0-0-0");
  });
});
