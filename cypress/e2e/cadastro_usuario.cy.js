/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import { acessarCadastro, cadastrar, preencherEmail, preencherNome, preencherSenha, validarCadastroSucesso  } from '../support/pages/cadastro_usuario_page';

describe(`Cadastro de usuário`, () => {
    it(`Cadastro de usuário com sucesso`, () => {
        acessarCadastro()
        preencherNome('eduardo')
        preencherEmail('teste@teste.com')
        preencherSenha(123456)
        cadastrar()

    })
    it(`Cadastro com email invalido`, () => {
        acessarCadastro()
        preencherNome('eduardo')
        preencherEmail('7598')
        preencherSenha(123456)
        cadastrar()

        validarCadastroSucesso()

    })
    it(`Cadastro com email sem @`, () => {
        acessarCadastro()
        preencherNome('eduardo')
        preencherEmail('teste.com')
        preencherSenha(123456)
        cadastrar()

    })
})
