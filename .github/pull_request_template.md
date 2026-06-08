## O que foi feito

<!-- Descreva o que foi alterado e por quê. Uma frase basta. -->

---

## Tipo de mudança

- [ ] Correção de bug
- [ ] Nova feature
- [ ] Refactor / melhoria técnica
- [ ] Infra / config

---

## Testes realizados pelo dev

### Cenários testados manualmente
<!-- Liste o que você testou. Ex: "chamei o endpoint X com payload Y e o resultado foi Z" -->

| Cenário | Resultado esperado | Passou? |
|---|---|---|
|  |  | ✅ / ❌ |
|  |  | ✅ / ❌ |

### Componentes impactados
<!-- Quais partes do sistema essa mudança toca? -->
- [ ] batch-service
- [ ] filas (queue/processing)
- [ ] IAC
- [ ] Feedzai / Alias
- [ ] commons-shared
- [ ] Outro: ___________

---

## O que o QA deve verificar

<!-- Esta é a parte mais importante. Escreva o roteiro de teste para quem não conhece o contexto. -->

**Pré-condição:** <!-- estado que o ambiente precisa estar antes de testar -->

**Passos:**
1. 
2. 
3. 

**Resultado esperado:** <!-- o que deve acontecer se funcionar corretamente -->

---

## Evidências dos testes

<!-- Obrigatório. PRs sem evidência não serão aprovados. -->

### Tipo de evidência
- [ ] Print / screenshot
- [ ] Gravação de tela (GIF ou vídeo)
- [ ] Log / resposta do terminal
- [ ] Resultado de chamada de API (Postman, curl, etc.)

### Evidência do fluxo principal (happy path)
<!-- Cole aqui o print, log ou link -->

### Evidência do cenário de erro
<!-- Cole aqui o print, log ou link -->

---

## Riscos e edge cases não testados

<!-- Seja honesto. O que pode quebrar? O que você não testou e por quê? -->

---

## Checklist final

- [ ] Testei o fluxo principal (happy path)
- [ ] Testei pelo menos um cenário de erro
- [ ] Verifiquei se há risco de regressão em outro componente
- [ ] **Adicionei evidências dos testes acima**
- [ ] O bug/task tem responsável atribuído no Jira
- [ ] Severidade do bug está correta (não marquei tudo como Trivial)
