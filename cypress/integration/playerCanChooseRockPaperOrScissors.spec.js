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
    cy.get('[alt="rock"]').click();
    cy.get("img").should("be.visible");
  });

  it("Player can choose paper", () => {
    cy.get('[alt="paper"]').click();
    cy.get("img").should("be.visible");
  });

  it("Player can choose scissor", () => {
    cy.get('[alt="scissor"]').click();
    cy.get("img").should("be.visible");
  });
  it("displays player scores", () => {
    cy.get("#player-score").contains("Player:");
  });
  it("displays computer scores", () => {
    cy.get("[data-cy='computer-score']").contains("Computer:");
  });
  it("Player can reset score board", () => {
    cy.get("[data-cy='rst-btn']").click();
    cy.get("button").should("contain", "Reset Scoreboard");
  });
});
