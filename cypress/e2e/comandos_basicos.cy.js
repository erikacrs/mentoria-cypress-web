describe('Comandos Básicos', () => {
    it('Abrir uma URL', () => {
        cy.visit('https://automationpratice.com.br/login')
    });

    it('Encontrar elementos', () => {
        cy.visit('https://automationpratice.com.br/login')

        // get()
        cy.get('#user')

        //find() - encontra um elemento
        // diminui o escopo com o get ()
        cy.get('.mc-form').find('.form-control');

        //contais() - encontra um elemento pelo texto()
        // diminui o escopo com o get()
        cy.get('.mc-form').contains('Send');

    });

    it('Preencher um campo', () => {
        cy.visit('https://automationpratice.com.br/login');
        //cy.get('#user').type('teste@teste.com')
        //cy.get('#password').type('123456')

        cy.get('.mc-form').find('.form-control').type('teste@teste.com{enter}');
    });

    it('Click no elemento', () => {
        cy.visit('https://automationpratice.com.br/login');


        cy.get('#btnLogin').click();

        //cy.get('#btnLogin').rightclick(); clica com o botão direito
        //cy.get('#btnLogin').dbltclick(); clica 2 vezes
    });
     it('Select/Dropdown', () => {
        cy.visit('https://automationpratice.com.br/checkout-one');
        cy.get('#country').select(1)
    });
      it('Checkbox/Radio', () => {
        cy.visit('https://automationpratice.com.br/checkout-one');
        cy.get('#materialUnchecked').check()
        cy.get('#materialUnchecked').uncheck()

        cy.get('#css').check()
    });
        it('Validar um elemento', () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('teste@teste.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click();

        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado')
    });
});