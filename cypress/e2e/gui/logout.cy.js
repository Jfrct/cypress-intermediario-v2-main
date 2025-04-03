describe('Logout', () => {
    beforeEach(() => {  
      cy.login()              
      cy.visit('/')
    })
  
    it('Logout executado', () => {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)  //verifica se o logout foi realizado, caso a URL final for a tela de login
    })
  })
  