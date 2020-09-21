
describe('Rock paper scissors game', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Player can start game', () => {
      cy.get('button').click()
      cy.get('#srt-btn').should('contain', 'Get started')
    })
  
    it('Player can choose rock', () => {
      cy.get('button').click()
      cy.get('#rock-btn').should('contain', 'rock')
    })
  
    it('Player can choose paper', () => {
      cy.get('button').click()
      cy.get('ppr-btn').should('contain', 'paper')
    })
  
    it('Player can choose scissors', () => {
      cy.get('button').click()
      cy.get('#scr-btn').should('contain', 'scissor')
    })
    it('Player can click on play button', () => {
      cy.get('button').click()
      cy.get('#play').should('contain', 'Play')
    })
    
    
    it('Player gets final score after the game ends', () => {
      cy.get('#msg').should('be.visible')
    })
  })