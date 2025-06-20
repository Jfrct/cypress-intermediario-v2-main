import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Criar projeto', options, () => {
  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5)
  }

  beforeEach(() => {
    cy.api_deleteProjects() // limpa os projetos antes de cada teste
    cy.login()
    cy.visit('/')
  })

  it('Cria projeto com sucesso', () => {
    cy.create_project_gui(project) // cria o projeto via GUI

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
