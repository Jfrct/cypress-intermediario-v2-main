import { faker } from '@faker-js/faker'

const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(5),
    project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
    }
}
beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
     
})

it('cria novo issue', () => {
    cy.api_createProject(issue.project)   //CRIA O PROJETO VIA API DENTRO DE UM GUI
    cy.gui_createIssue(issue)

    cy.get('.issue-details', { timeout: 10000 }).should('exist')
        .should('contain', issue.title)
        .and('contain', issue.description)




})