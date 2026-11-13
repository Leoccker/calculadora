# Plano Técnico — CalcSaaS Meme ("pague R$300")

## Diretório Alvo do Projeto
`/home/leonardo/projetos/calculadora` (`~/projetos/calculadora`)
*(Cópia espelhada do plano mantida em `/home/leonardo/OpenBot/Shared/PLANO.md` para sincronização entre os agentes).*

## 1. Escopo Mínimo (MVP)
Aplicação web estilo SaaS de calculadora que simula uma calculadora funcional na digitação de números e operadores (`+`, `-`, `*`, `/`), mas ao clicar no botão `=` (ou pressionar `Enter`), em vez de exibir o resultado matemático, exibe a mensagem **"pague R$300"** no visor. Não há integração real com meios de pagamento.

### Funcionalidades do MVP
- **Cabeçalho estilo SaaS:** Nome fictício do produto (ex.: *CalcPro Enterprise AI*) com visual de produto corporativo.
- **Visor da calculadora:** Exibe a expressão digitada pelo usuário e, ao acionar `=`, substitui o resultado exatamente por `pague R$300`.
- **Teclado numérico e de operações:** Botões `0-9`, `.`, `+`, `-`, `*`, `/`, `C` (limpar) e `=`.
- **Reset simples:** Botão `C` limpa o visor para permitir repetir a piada.

---

## 2. Stack Sugerida
Tecnologias simples, comuns e sem dependências pesadas:
- **HTML5:** Estrutura semântica da calculadora e layout SaaS.
- **CSS3 (Vanilla):** Estilização moderna (CSS Grid para os botões da calculadora, visual dark/clean de SaaS).
- **JavaScript (Vanilla ES6+):** Lógica de captura dos cliques nos botões e interceptação do botão `=` para exibir `"pague R$300"`.

---

## 3. Estrutura de Pastas
```text
/home/leonardo/projetos/calculadora/
├── index.html       # Estrutura da página e da calculadora
├── style.css        # Estilos da interface SaaS e grid da calculadora
├── script.js        # Lógica de digitação e gatilho do "=" -> "pague R$300"
└── PLANO.md         # Documento de arquitetura e divisão de tarefas
```

---

## 4. Divisão de Papéis e Lista de Tarefas Ordenadas

### Papel 1: Arquiteto de Software (Concluído)
1. Criar a estrutura em `/home/leonardo/projetos/calculadora` e definir o escopo mínimo (MVP), stack tecnológica e arquitetura em `PLANO.md` (em `~/projetos/calculadora/PLANO.md` e `/home/leonardo/OpenBot/Shared/PLANO.md`).
2. Organizar a distribuição das tarefas entre **Programador** e **Revisor / QA**.

### Papel 2: Programador
3. Criar `/home/leonardo/projetos/calculadora/index.html` com o layout da calculadora e elementos de interface estilo SaaS.
4. Criar `/home/leonardo/projetos/calculadora/style.css` com o grid de botões responsivo e destaque visual para o visor.
5. Criar `/home/leonardo/projetos/calculadora/script.js` permitindo digitar números/operações no visor, limpar com `C` e, ao clicar em `=` (ou teclar `Enter`), exibir exatamente `"pague R$300"`.
6. Atualizar `/home/leonardo/OpenBot/Shared/PROGRESSO.md` ao concluir cada etapa.

### Papel 3: Revisor / QA
7. Verificar em `/home/leonardo/projetos/calculadora` se todos os botões numéricos e de operação atualizam o visor corretamente antes do `=`.
8. Validar o requisito principal: clicar em `=` deve exibir `"pague R$300"` (sem executar o cálculo real e sem exigir gateway de pagamento).
9. Testar o botão `C` (reset após a mensagem) e responsividade básica em telas desktop e mobile.

---

## 5. Riscos Técnicos e Mitigações
- **Risco 1 — Execução acidental do cálculo matemático:** Uso de `eval()` no botão `=` exibiria o resultado real em vez do meme.
  - *Mitigação:* O handler do botão `=` deve ignorar a expressão matemática e apenas definir o texto do visor como `"pague R$300"`.
- **Risco 2 — Overflow de texto no visor:** A string `"pague R$300"` ou expressões longas podem quebrar o layout do visor.
  - *Mitigação:* Definir `overflow-x: auto` ou ajuste de fonte (`clamp`) no CSS do visor.
- **Risco 3 — Entrada via teclado físico ignorada:** Usuário pode digitar `Enter` ou `=` no teclado em vez de clicar.
  - *Mitigação:* Mapear tanto o clique no botão `=` quanto as teclas `Enter` e `=` para a mesma função que exibe `"pague R$300"`.
