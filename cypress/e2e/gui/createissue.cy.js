import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

let issue 

describe('Create Issue', options, () => {
  beforeEach(() => {
    issue = {
      title: `issue-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
      project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
      }
    }

    cy.api_deleteProjects()
    cy.api_createProject(issue.project)
    cy.login()
    cy.visit('/')
  })

  it('cria novo issue', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details', { timeout: 10000 }).should('exist')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})
