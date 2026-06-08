/// <reference types="cypress"/>

describe('Checkout com sucesso', () => {
    // it('Checkout com campos válidos', () => {
    //     cy.visit('https://automationpratice.com.br/checkout-one')
    //     cy.get('#fname').type('Linda')
    //     cy.get('#lname').type('Deusa')
    //     cy.get('#cname').type('CPQD')
    //     cy.get('#email').type('teste@teste.com')
    //     cy.get('#country').select(2) //dropdown
    //     cy.get('#city').select(1) //dropdown
    //     cy.get('#zip').type(1234567)
    //     cy.get('#faddress').type('Rua Alberto nº 234')
    //     cy.get(':nth-child(9) > .form-group > label').type('Teste checkout')
    //     cy.get('.checkout-area-bg > .theme-btn-one').click()
    //     cy.get(':nth-child(2) > h3')
    //         .should('have.text', 'Billings Information registred with success!')
    //         .should('be.visible')
    //     cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()


    })

    it('Checkout com campos válidos', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#fname').type('Linda')
        cy.get('#lname').type('Deusa')
        cy.get('#cname').type('CPQD')
        cy.get('#email').type('teste@teste.com')
        cy.get('#country').select(2) //dropdown
        cy.get('#city').select(1) //dropdown
        cy.get('#zip').type(1234567)
        cy.get('#faddress').type('Rua Alberto nº 234')
        cy.get(':nth-child(9) > .form-group > label').type('Teste checkout')
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3')
            .should('have.text', 'Billings Information registred with success!')
            .should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()


    })
        it('Checkout com campos válidos TESTE', () => {
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#fname').type('Linda')
        cy.get('#lname').type('Deusa')
        cy.get('#cname').type('CPQD')
        cy.get('#email').type('teste@teste.com')
        cy.get('#country').select(2) //dropdown
        cy.get('#city').select(1) //dropdown
        cy.get('#zip').type(1234567)
        cy.get('#faddress').type('Rua Alberto nº 234')
        cy.get(':nth-child(9) > .form-group > label').type('Teste checkout')
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > h3')
            .should('have.text', 'Billings Information registred with success!')
            .should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()


    })





