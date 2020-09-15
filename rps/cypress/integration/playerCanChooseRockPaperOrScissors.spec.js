
describe('Rock paper scissors game', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('user can choose rock', () => {
      cy.get('#rock-btn').click()
      cy.get('#weap').should('contain', 'rock')
    })
  
    it('user can choose paper', () => {
      cy.get('#paper-btn').click()
      cy.get('#weap').should('contain', 'paper')
    })
  
    it('user can choose scissors', () => {
      cy.get('#scissors-btn').click()
      cy.get('#weap').should('contain', 'scissors')
    })
    
    
    it('Player gets final score after the game ends', () => {
      cy.get('#rock-btn').click()
      cy.get('#weap').should('contain', 'rock');
      cy.get('#btn').click()
      cy.get('#msg').should('be.visible')
    })
  })