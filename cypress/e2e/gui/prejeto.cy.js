import { faker } from '@faker-js/faker'

describe('Criar projeto', () => {
    beforeEach(()=> {
  
        cy.login()
        cy.visit('/')

    })
    it('Cria projeto com sucesso', () => {

        const project = {
            name:`project-${faker.datatype.uuid()}`,
            description:faker.random.words(5)
            
        }
        
        cy.create_project_gui(project) // o project serve para referenciar as variaveinpxcys criadas, e passar essa informação para os comandos

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')                                                    //fazem as verificacoes por nome e descrição se o projeto foi criado
        cy.contains(project.description).should('be.visible')


    })

    it('cria novo issue',()=> {
        const issue = {
            title:`issue-${faker.datatype.uuid()}`,
            description:faker.random.words(5)
            
        }
       cy.gui_create_issue
    





    })


})

