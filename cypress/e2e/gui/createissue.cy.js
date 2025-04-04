import { faker } from '@faker-js/faker'

const issue = {
    title:`issue-${faker.datatype.uuid()}`,
    description:faker.random.words(5),
    project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
}
}
    beforeEach(() => {
        cy.login()
        cy.create_project_gui(issue.project)
    })

it('cria novo issue',()=> {
 
        
   cy.gui_create_issue

   cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)




})