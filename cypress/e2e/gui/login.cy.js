describe('Login', () => {
  it('Login executado', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
