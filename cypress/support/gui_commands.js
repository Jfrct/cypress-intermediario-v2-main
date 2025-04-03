import { faker } from '@faker-js/faker'

//comando especifico para realização de login 
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    login()
  })
  //realiza logout
  Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
  })
  //cria projeto
  Cypress.Commands.add('create_project_gui', project => {


    cy.visit('/projects/new')  //clica na aba projetos e novo projeto

    cy.get (`#project_name`).type (project.name)
    cy.get (`#project_description`).type (project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
    cy.wait (1000)

  })
  //teste