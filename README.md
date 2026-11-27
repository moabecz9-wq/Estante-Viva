# Estante-Viva
Trabalho de Conclusão da Disciplina de Desenvolvimento em Ambiente Web.

## Autor
Moabe Diogenes Czarnobaj

## Tema
Página para acompanhar leituras e explorar uma estante de livros: a listagem "Lendo agora" mostra o progresso de cada livro e a "Estante completa" reúne os títulos com gênero e nota.

## Como executar

    npm install
    npm run dev

Depois abra http://localhost:5173 no navegador.

## Fonte dos dados

- **Estante completa (listagem principal):** arquivo JSON local em `public/livros.json`, carregado com `fetch` dentro de `useEffect`, com estados de carregando e de erro.
- **Lendo agora (listagem secundária):** vetor de objetos em `src/data/livros.ts`.

## Fases do TCD

- **Fase 1:** wireframes mobile, tablet e desktop, na pasta docs.
- **Fase 2:** página construída no App.tsx, com CSS mobile first e variáveis em :root.
- **Fase 3:** componentes em src/components, types e vetores em src/data, listagens com map e key, e alternância Grade/Lista com useState.
- **Fase 4:** listagem principal carregada de public/livros.json com fetch em useEffect, com estados de carregando e de erro.

## Desafios bonificados

- **Busca:** campo controlado que filtra a estante em tempo real.
- **Modo escuro:** alternância entre tema claro e escuro controlada por estado, com variáveis CSS.
