# Checklist de Teste — Desenvolvedor

> Preencha antes de abrir o PR. O objetivo não é burocracia:
> é garantir que você mesmo validou o que entregou.

---

## 1. Entendimento da mudança

- [ ] Sei exatamente o que esta mudança deve fazer
- [ ] Conheço o comportamento anterior (antes da minha mudança)
- [ ] Sei qual é o critério de aceite (Definition of Done da task)

---

## 2. Testes obrigatórios

### Happy path
- [ ] Testei o fluxo completo e funcionou como esperado
- [ ] Tenho evidência (print, log ou gravação) do teste

### Cenários de erro
- [ ] Testei o que acontece quando a entrada é inválida
- [ ] Testei o que acontece quando um serviço dependente está indisponível
- [ ] O sistema falha de forma controlada (sem erro genérico / 500 sem contexto)

### Regressão
- [ ] Identifiquei quais fluxos existentes podem ser impactados
- [ ] Testei esses fluxos e continuam funcionando

---

## 3. Componentes de risco (time DOCK)

Se sua mudança tocou algum desses, teste com atenção redobrada:

- [ ] **batch-service** — validei o processamento completo de um lote
- [ ] **filas** — validei que mensagens são enfileiradas e consumidas corretamente
- [ ] **IAC** — validei o provisionamento / configuração esperada
- [ ] **Feedzai / Alias** — validei a integração com o serviço externo
- [ ] **commons-shared** — validei que outros serviços que usam a lib não quebraram

---

## 4. Roteiro para o QA

> Escreva como se o QA não soubesse nada sobre a task.

**Pré-condição:** <!-- ambiente, dados, estado necessário -->

**Passos:**
1. 
2. 
3. 

**O que validar:** <!-- resultado visível que prova que funciona -->

**O que NÃO estava funcionando antes:** <!-- opcional, mas ajuda a confirmar a correção -->

---

## 5. Antes de mergear

- [ ] PR tem descrição clara
- [ ] Commits têm mensagens descritivas
- [ ] Não deixei código comentado ou `console.log` de debug
- [ ] Respondi todas as perguntas do template de PR
