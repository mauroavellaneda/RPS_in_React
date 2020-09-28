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
    cy.get("#rock").click();
    cy.get("button").should("contain", "Rock");
  });

  it("Player can choose paper", () => {
    cy.get("#paper").click();
    cy.get("button").should("contain", "Paper");
  });

  it("Player can choose scissor", () => {
    cy.get("#scissor").click();
    cy.get("button").should("contain", "Scissor");
  });
  it("displays player scores", () => {
    cy.get("#player-score").contains("Player:");
  });
  it("displays computer scores", () => {
    cy.get("#computer-score").contains("Computer:");
  });
  it("Player can reset score board", () => {
    cy.get("#rst-btn").click();
    cy.get("button").should("contain", "Reset Score");
  });
});
