
describe('Rock paper scissors game', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Player can see a welcome message', () => {
      cy.get('#title').should('contain', 'Welcome to the Rock Paper Scissor game!')
    })

    it('Player can start game', () => {
      cy.get('#srt-btn').click()
      cy.get('button').should('contain', 'Get started')
    })
  
    it('Player can choose rock', () => {
      cy.get('#rock-btn').click()
      cy.get('button').should('contain', 'rock')
    })
  
    it('Player can choose paper', () => {
      cy.get('#ppr-btn').click()
      cy.get('button').should('contain', 'paper')
    })
  
    it('Player can choose scissor', () => {
      cy.get('#scr-btn').click()
      cy.get('button').should('contain', 'scissor')
    })
    it('Player can click on play button', () => {
      cy.get('#play').click()
      cy.get('button').should('contain', 'Play')
    })
    
  })