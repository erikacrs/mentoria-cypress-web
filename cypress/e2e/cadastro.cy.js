describe('Cadastro com sucesso', () => {
    it('Cadastrar', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('Erika Cristina')
        cy.get('#email').type('teste@qazando.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#swal2-title').should('be.visible')
    })
    it.only('Cadastro com nome vazio', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').should('have.value', '')
        cy.get('#email').type('teste@qazando.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
    })
    it('Cadastro com email inválido', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('Erika Cristina')
        cy.get('#email').type('testeqazando.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
    })
    it('Cadastro com senha inválida', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('Erika Cristina')
        cy.get('#email').type('teste@qazando.com')
        cy.get('#password').type('12345')
        cy.get('#btnRegister').click()
    })
    it('Cadastro com email vazio', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('Erika Cristina')
        cy.get('#email').should('have.value', '')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()

    })
        it('Cadastro com senha vazia', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('Erika Cristina')
        cy.get('#email').type('teste@qazando.com')
        cy.get('#password').should('have.value', '')
        cy.get('#btnRegister').click()

    })
})












