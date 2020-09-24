describe("Rock paper scissors game", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#title").should(
      "contain",
      "Welcome to the Rock Paper Scissor game!"
    );
    cy.get("#srt-btn").click();
  });

  it("Player can choose rock", () => {
    cy.get("#rock-btn").click();
    cy.get("button").should("contain", "rock");
  });

  it("Player can choose paper", () => {
    cy.get("#ppr-btn").click();
    cy.get("button").should("contain", "paper");
  });

  it("Player can choose scissor", () => {
    cy.get("#scr-btn").click();
    cy.get("button").should("contain", "scissor");
  });
});
