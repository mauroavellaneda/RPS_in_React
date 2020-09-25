describe('Player can see header component', () => {
    beforeEach(() => {
      cy.visit("/");
      
    })
  
    it('Player can see the title of the page', () => {
      cy.get('#title').should('contain', 'Welcome to the Rock Paper Scissor game!');
    });
  
    it('Header page is not displayed after clicking on Get started', () => {
      cy.get('button').click()  
      cy.get('#srt-btn').should('not.exist');
    });
  
  }) 