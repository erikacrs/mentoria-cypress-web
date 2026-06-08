# Template: Abertura de Bug

> Use este template antes de registrar qualquer Sub-Bug no Jira.
> Bugs abertos sem esses campos serão devolvidos para investigação.

---

## Investigação mínima (obrigatória antes de abrir)

- [ ] Consegui reproduzir o bug mais de uma vez?
- [ ] Verifiquei se já existe um bug aberto para isso?
- [ ] Identifiquei em qual componente o problema ocorre?

Se marcou tudo: pode abrir. Se não: investigue mais antes.

---

## Campos obrigatórios no Jira

| Campo | Instrução |
|---|---|
| **Título** | Ação + componente + sintoma. Ex: "batch-service falha ao processar fila com payload > 1MB" |
| **Responsável** | Sempre atribuir alguém. Sem responsável = bug cancelado. |
| **Severidade** | Ver tabela abaixo. Não use Trivial como padrão. |
| **Data Limite** | Defina com base na severidade (ver tabela). |

---

## Tabela de severidade

| Nível | Critério | Prazo sugerido |
|---|---|---|
| **Critical** | Sistema fora do ar ou perda de dados em produção | Hoje |
| **High** | Fluxo principal quebrado, sem workaround | 1–2 dias |
| **Medium** | Funcionalidade parcialmente comprometida, workaround existe | Esta sprint |
| **Low** | Inconveniência, impacto mínimo no usuário | Próxima sprint |
| **Trivial** | Cosmético, sem impacto funcional | Backlog |

---

## Corpo do bug

**Ambiente:**
- [ ] Local
- [ ] Homologação
- [ ] Produção

**Versão / branch:** ___________

**Passos para reproduzir:**
1. 
2. 
3. 

**Resultado atual:**

**Resultado esperado:**

**Evidência (print, log, trace):**
<!-- Cole aqui o log de erro ou link para screenshot -->

**Componente afetado:**
- [ ] batch-service
- [ ] filas (queue/processing)
- [ ] IAC
- [ ] Feedzai / Alias
- [ ] commons-shared
- [ ] Outro: ___________

---

## Contexto adicional

<!-- Algo que ajude quem vai corrigir, ex: "só acontece com payload acima de X", "começou após o deploy de Y" -->
