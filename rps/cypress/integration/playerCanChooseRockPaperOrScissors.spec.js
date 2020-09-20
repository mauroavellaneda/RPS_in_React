
describe('Rock paper scissors game', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('user can start game', () => {
      cy.get('button').click()
      cy.get('#srt-btn').should('contain', 'Get started')
    })
  
    it('user can choose rock', () => {
      cy.get('button').click()
      cy.get('#rock-btn').should('contain', 'rock')
    })
  
    it('user can choose paper', () => {
      cy.get('button').click()
      cy.get('ppr-btn').should('contain', 'paper')
    })
  
    it('user can choose scissors', () => {
      cy.get('button').click()
      cy.get('#scr-btn').should('contain', 'scissors')
    })
    
    
    it('Player gets final score after the game ends', () => {
      cy.get('#msg').should('be.visible')
    })
  })