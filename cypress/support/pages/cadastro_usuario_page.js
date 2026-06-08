export function acessarCadastro() {
    cy.visit('/register')

}


export function preencherNome(nome) {
    cy.get('#user').type(nome)

}

export function preencherEmail(email) {
    cy.preencheCampo('#email', email)

}

export function preencherSenha(senha) {
    cy.preencheCampo('#password', senha)

}

export function cadastrar(senha) {
    cy.get('#btnRegister').click()
    
}

export function validarCadastroSucesso() {
    cy.get('#btnRegister').should('be.visible')
    
}

export function cadastrarUsuario(nome, email, senha) {
    acessarCadastro()
    preencherNome(nome)
    preencherEmail(email)
    preencherSenha(senha)
    cadastrar()

    
}