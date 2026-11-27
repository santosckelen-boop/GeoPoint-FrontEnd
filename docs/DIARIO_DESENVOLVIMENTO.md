# Diário de desenvolvimento - GeoPoint

Aluno(a): KÉLEN CAMARGO DOS SANTOS

| Etapa | O que fiz e entendi | Teste realizado / resultado observado | Dificuldade e solução |
| --- | --- | --- | --- | --- |
| 1. Ambiente e projeto | Node: v24.1.0. npm: 11.19.0. | Executei npm.cmd run dev e a tela inicial do Vite abriu no navegador; Projeto criado; Instalação das dependências em andamento. | Ao executar npm install, o PowerShell bloqueou o arquivo npm.ps1 porque a execução de scripts estava desabilitada. Resolvi o bloqueio executando npm.cmd install e consegui instalar as dependências.
| 2. Referência do Figma | Analisei o print do protótipo e defini a especificação visual do frontend. | Registrei os valores finais em docs/REFERENCIA_VISUAL.md. |
| 3. API oficial e serviço | Configurei a conexão da API com o PostgreSQL. | A conexão funcionou, mantendo a API na porta 8080. | Ajustei a senha do usuário postgres utilizada na execução da API. |
| 4. Rotas e menu | Configurei BrowserRouter no main.jsx, Routes e Route no App.jsx e links na Navbar para navegar entre as telas. | Abri /pontos/novo e a aplicação exibiu a tela inicial Cadastro e edição de ponto, com menu e rodapé. | Utilizei páginas iniciais para verificar a navegação antes de desenvolver os formulários completos. |
| Etapa | Data e horário | O que fiz e entendi | Teste realizado / resultado observado | Dificuldade e solução |
|---|---|---|---|---|
| 5. Componentes e estilos | Criei componentes reutilizáveis e apliquei os estilos em index.css. No componente FiltroPontos, identifiquei que CampoTexto recebe o texto “Filtrar pontos” pela prop rotulo e uma função pela prop onChange. Essa função comunica o texto digitado por meio de onFiltrar. | Acessei /pontos e /pontos/novo pelos links do menu. O menu, o título e o rodapé permaneceram visíveis nas duas telas. | — |


## Minhas decisões


## Explicações que consigo dar
