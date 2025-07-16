//your code here
cy.get('.holder')
  .should('have.css', 'display', 'flex')
  .should('have.css', 'justify-content', 'center')
  .should('have.css', 'align-items', 'center');
