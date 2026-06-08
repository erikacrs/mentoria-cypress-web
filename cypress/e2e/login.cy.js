/// <reference types='cypress'/> 
import { faker } from '@faker-js/faker';



    //const telas =['iphone-xr', 'samsung-s10', 'macbook-16']

    const telas = [
        { dispositivo: 'Desktop', largura: 1280, altura: 720 },
        { dispositivo: 'Tablet', largura: 768, altura: 1024 },
        { dispositivo: 'Celular (iphone x)', largura: 405, altura: 812 },
    ]

    telas.forEach((tela) =>{
        describe(`Login - ${tela}` , () => {
        beforeEach(()  => {

        
        // Acessar tela de login
        cy.acessarLogin()
        cy.viewport(tela.largura, tela.altura)
    })
    it(`Login com sucesso - ${tela.dispositivo}` , () => {
        //cy.get('#user').type(faker.internet.email()) //dados aleatórios para email
          cy.preencherEmail(faker.internet.email())


        cy.get('#password')
        .type(faker.string.numeric(6)) //dados aleatórios para senha
        .should('have.attr', 'type', 'password')

        cy.clicarLogin()
        cy.get('#swal2-title')
        .should('have.text', 'Login realizado')
        .should('be.visible')

    })
    it('Login com e-mail vazio', () => {
        cy.get('#password').type(faker.string.numeric(6))
        cy.clicarLogin()

        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')

        
    })
    it('Login com senha vazia', () => {
        cy.get('#user').type(faker.internet.email())
        cy.clicarLogin()

        cy.get('.invalid_input')
        .should('have.text', 'Senha inválida.')
        .should('be.visible')
        
    })
    it('Login com e-mail inválido', () => {
    
        cy.preencherEmail(faker.string.numeric(6))
        //cy.get('#password').type(faker.string.numeric(6))


        cy.get('#password').type(faker.string.numeric(6))
        cy.clicarLogin()

        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')
        
    })
    it('Login com senha inválida', () => {
        cy.get('#user').type(faker.internet.email())
        cy.get('#password').type(faker.string.numeric(4))
        cy.clicarLogin()

        cy.get('.invalid_input')
        .should('have.text', 'Senha inválida.')
        .should('be.visible')
        
    })
    it('Botão ainda não tem conta', () => {
        cy.get('#createAccount').click()
        cy.get('.account_form')
        .find('h3')
        .should('have.text', 'Cadastro de usuário')
        .should('be.visible')
                
    })

    })
    
})